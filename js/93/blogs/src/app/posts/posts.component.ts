import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/shared/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  postUrl:string = this.route.snapshot.params.userId;
  postHolder;
  currentPosts:Post[] = [];
  indexHolder:number = 0;
  ngOnInit() {
    this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts/?userId=${this.postUrl}`)
      .subscribe(posts => {
        this.postHolder = posts;
        for (let i = 0; i < 3; i++) {
          this.currentPosts.push(this.postHolder[i]);
          this.indexHolder++;
        }
      })

  }

  displayNext() {
    this.currentPosts = [];
    if (this.indexHolder === 9) {
      this.currentPosts.push(this.postHolder[this.indexHolder]);
      this.indexHolder = 0;
      return;
    }
    for (let i = this.indexHolder; i < this.indexHolder + 3; i++) {
      this.currentPosts.push(this.postHolder[i]);
    }
    this.indexHolder = this.indexHolder + 3;
  }

  displayPrev() {
    this.currentPosts = [];
    if (this.indexHolder === 3) {
      this.currentPosts.push(this.postHolder[9]);
      this.indexHolder = 0;
      return;
    } else if (this.indexHolder === 0) {
      this.indexHolder = 9;

      for (let i = this.indexHolder - 3; i < this.indexHolder; i++) {
        this.currentPosts.push(this.postHolder[i]);
      }
    } else {
      for (let i = this.indexHolder - 6; i < this.indexHolder - 3; i++) {
        this.currentPosts.push(this.postHolder[i]);
      }
      this.indexHolder = this.indexHolder - 3;
    }

  }

}
