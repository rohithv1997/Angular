import {Component, OnDestroy, OnInit} from '@angular/core';
import {IPost} from '../models/ipost.model';
import {PostService} from '../services/post.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: IPost[] = [];
  isLoading = false;
  errorMessage: string = null;
  private errorSubscription: Subscription;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.errorSubscription = this.postService.subscribeToErrorSubject(error => this.logError(error));
    this.getPosts();
  }

  public onCreatePost(postData: IPost): void {
    // Send Http request
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  public onFetchPosts(): void {
    // Send Http request
    this.getPosts();
  }

  onClearPosts(): void {
    // Send Http request
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    }, errors => this.logError(errors));
  }

  public onHandleError(): void {
    this.errorMessage = null;
  }

  private getPosts(): void {
    this.handleIsLoading();
    this.postService.getPosts().subscribe(posts => {
      this.handleIsLoading();
      this.setLoadedPosts(posts);
    }, errors => {
      this.logError(errors);
      this.isLoading = false;
    });
  }

  private setLoadedPosts(posts: IPost[]): void {
    this.loadedPosts = posts;
    console.log(posts);
  }

  private handleIsLoading(): void {
    this.isLoading = !this.isLoading;
  }

  private logError(error: any): void {
    this.errorMessage = error.message;
    console.log(error);
  }

  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }
}
