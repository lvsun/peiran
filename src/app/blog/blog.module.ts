import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MdButtonModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdChipsModule } from '@angular/material';

import { PeiranCommonModule } from '../common/common.module';
import { BlogRoutingModule } from './blog-routing/blog-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleService } from './articles.service';
import { ArticleComponent } from './article/article.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdChipsModule,
    HttpModule,
    PeiranCommonModule
  ],
  declarations: [DashboardComponent, ArticleComponent],
  providers: [ArticleService]
})
export class BlogModule { }
