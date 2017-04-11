import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Tweet } from 'app/common/model/Tweet';
import { TweetsService } from '../tweets.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  isTweetsAvaliable: boolean;
  tweets: Tweet[];

  constructor(
    private tweetsService: TweetsService,
  ) { }

  ngOnInit() {
    this.tweets = new Array();
    this.getTweets();
  }

  private getTweets(): void {
    this.tweetsService.getTweets().then(
      data => {
        this.tweets = data;
        this.isTweetsAvaliable = true;
      }
    ).catch( errors => console.error(errors));
  }

}
