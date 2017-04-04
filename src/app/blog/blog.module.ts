import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';


import { BlogRoutingModule } from './blog-routing/blog-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PeiranCommonModule } from '../common/common.module';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    PeiranCommonModule
  ],
  declarations: [DashboardComponent]
})
export class BlogModule { }
