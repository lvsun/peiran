import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AppComponent } from './app.component';

import { BlogModule } from './blog/blog.module';
import { TweetModule } from './tweet/tweet.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './not-found/not-found.component';
import { PeiranCommonModule } from './common/common.module';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BlogModule,
    TweetModule,
    AppRoutingModule,
    MaterialModule,
    PeiranCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
