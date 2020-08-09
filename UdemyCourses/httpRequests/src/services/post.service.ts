import {Injectable} from '@angular/core';
import {IPost} from '../models/ipost.model';
import {environment} from '../environments/environment';
import {
  HttpClient,
  HttpEventType,
  HttpHeaderResponse,
  HttpHeaders,
  HttpParams,
  HttpProgressEvent,
  HttpResponse,
  HttpSentEvent,
  HttpUserEvent
} from '@angular/common/http';
import {IPostKeyMap} from '../models/iPostMap.model';
import {catchError, map, tap} from 'rxjs/operators';
import {Observable, Subject, Subscription, throwError} from 'rxjs';
import {IBasePost} from '../models/IBasePost.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private errorSubject = new Subject<string>();

  constructor(private httpClient: HttpClient) {
  }

  private static logResponse(responseData: IBasePost): void {
    console.log(responseData);
  }

  private static extractResponse(responseData: IPostKeyMap): IPost[] {
    const postsArray: IPost[] = [];

    for (const key in responseData) {
      if (responseData.hasOwnProperty(key)) {
        postsArray.push({...responseData[key], id: key});
      }
    }
    return postsArray;
  }

  public createAndStorePost(inputTitle: string, inputContent: string): void {
    const postData: IPost = {title: inputTitle, content: inputContent};

    this.httpClient
      .post<IPost>(
        environment.firebaseURL,
        postData,
        {
          headers: new HttpHeaders({
            'Custom-Header': 'Hello'
          }),
          observe: 'response'
        }
      )
      .subscribe(responseData => {
          PostService.logResponse(responseData);
        }, error => this.addError(error)
      );
  }

  private addError(error): void {
    this.errorSubject.next(error.message);
  }

  public getPosts(): Observable<IPost[]> {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');

    return this.httpClient
      .get<IPostKeyMap>(
        environment.firebaseURL,
        {
          headers: new HttpHeaders({
            'Custom-Header': 'Hello'
          }),
          params: searchParams,
          observe: 'body'
        }
      )
      .pipe(
        map((responseData) => {
          return PostService.extractResponse(responseData);
        }),
        catchError(errorResponse => {
          // Send to analytics
          return throwError(errorResponse);
        })
      );
  }


  public deletePosts(): Observable<HttpSentEvent | HttpHeaderResponse | HttpResponse<IPost> | HttpProgressEvent | HttpUserEvent<IPost>> {
    return this.httpClient
      .delete<IPost>(
        environment.firebaseURL,
        {
          observe: 'events',
          responseType: 'json'
        }
      ).pipe(
        tap(event => {
          console.log(event);
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
          if (event.type === HttpEventType.Sent) {
            console.log(event.type);
          }
        })
      );
  }

  public subscribeToErrorSubject(action: (errors: any) => void): Subscription {
    return this.errorSubject.subscribe(error => {
      action(error);
    });
  }
}
