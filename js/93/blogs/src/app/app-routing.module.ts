import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path: 'bloglist',
  component: AppComponent
}, {
  path: '',
  redirectTo: 'bloglist',
  pathMatch: 'prefix'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
