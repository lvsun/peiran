import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule } from '@angular/material';
import { MdCardModule } from '@angular/material';

import { BlogRoutingModule } from './blog-routing/blog-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    MdButtonModule,
    MdCardModule
  ],
  declarations: [DashboardComponent]
})
export class BlogModule { }
