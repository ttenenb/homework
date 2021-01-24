import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
  posts: number;
  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.get(`https://jsonplaceholder.typicode.com/posts/${this.posts}`)
      .subscribe(post => {
        console.log(post);
      })
  }
}
