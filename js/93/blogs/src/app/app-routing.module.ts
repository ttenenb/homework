import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [{
  path: 'bloglist',
  component: BloglistComponent
},
{
  path: 'posts/:userId',
  component: PostsComponent
},
{
  path: '',
  redirectTo: 'bloglist',
  pathMatch: 'prefix'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
