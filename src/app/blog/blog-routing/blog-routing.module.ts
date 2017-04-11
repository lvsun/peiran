import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { ArticleComponent } from '../article/article.component';

const blogRoutes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'blog/:id', component: ArticleComponent}
]

@NgModule({
  imports: [ RouterModule.forChild(blogRoutes) ],
  exports: [ RouterModule ]
})
export class BlogRoutingModule { }
