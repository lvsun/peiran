import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdSidenavModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';

import { BlogRoutingModule } from './blog-routing/blog-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    MdButtonModule,
    MdSidenavModule
  ],
  declarations: [DashboardComponent]
})
export class BlogModule { }
