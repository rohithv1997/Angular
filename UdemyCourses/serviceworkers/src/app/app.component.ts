import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IPost } from './ipost.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: IPost[] = [];

  constructor(private http: HttpClient) {}

  public ngOnInit(): void {
    this.http
      .get<IPost[]>('https://jsonplaceholder.cypress.io/posts')
      .subscribe(fetchedPosts => (this.posts = fetchedPosts));
  }
}
