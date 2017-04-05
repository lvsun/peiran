import { Component, OnInit } from '@angular/core';
import { Article } from 'app/common/model/Article';
import { Observable } from 'rxjs/Observable';

import { ArticleService } from '../articles.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	articles: Article[];
  isArticleAvaliable: boolean;

  constructor(
    private as: ArticleService ) { 
  	this.articles = new Array();
    // this.isArticleAvaliable = false; // for the observalbe version
  }

  ngOnInit() {
    this.getArticles(1);
  }

  getArticles(id: number):void {
    // the observable version

    // this.as.getArticles()
    //   .subscribe(
    //     data => {this.test=data; this.isArticleAvaliable = true},
    //     error => console.error('Error:' + error),
    //     () => console.log('Completed!')
    //   );

    // the promise version:
    this.as.getArticles(id).then(
      data => {
        this.articles = data;
        this.isArticleAvaliable = true;
      }
    );
  }

  openNav():void {
  	document.getElementById("mySidenav").style.width = "250px";
  }
}
