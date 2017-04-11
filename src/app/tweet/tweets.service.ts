import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // for observalbe version
import 'rxjs/add/operator/toPromise'; //for Promise version

import { Tweet } from 'app/common/model/Tweet';

@Injectable()
export class TweetsService {

  constructor(private http: Http) { }
  getTweets(): Promise<Tweet[]> {
    let url: string = 'assets/tweets/tweets.json';
		return this.http.get(url)
			.toPromise()
			.then(res => res.json() as Tweet[])
			.catch(this.handleError);
	}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
