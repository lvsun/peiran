import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';

const blogRoutes: Routes = [
  { path: '', component: DashboardComponent}
]

@NgModule({
  imports: [ RouterModule.forChild(blogRoutes) ],
  exports: [ RouterModule ]
})
export class BlogRoutingModule { }
