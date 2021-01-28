import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Blog, BlogServer } from 'src/shared/Blog';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {
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
