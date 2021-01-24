import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog, BlogServer } from 'src/shared/Blog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private httpClient: HttpClient) { };
  title = 'PCS Blogs';
  blogs: Blog[];

  ngOnInit() {
    this.httpClient.get<BlogServer[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(blogs => {
        this.blogs = blogs.map(blog => ({
          name: blog.name,
          id: blog.id,
          website: blog.website
        }))
      })
  }

}
