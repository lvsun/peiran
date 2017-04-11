import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetComponent } from './tweet/tweet.component';
import { TweetsService } from './tweets.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [TweetsService],
  declarations: [TweetComponent]
})
export class TweetModule { }
