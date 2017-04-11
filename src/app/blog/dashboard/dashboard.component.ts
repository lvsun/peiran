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
	article: Article;
  isArticleAvaliable: boolean;

  constructor(
    private as: ArticleService ) { 
    // this.isArticleAvaliable = false; // for the observalbe version
  }

  ngOnInit() {
    this.getArticles();
  }

  private getArticles( ):void {
    // the observable version

    // this.as.getArticles()
    //   .subscribe(
    //     data => {this.test=data; this.isArticleAvaliable = true},
    //     error => console.error('Error:' + error),
    //     () => console.log('Completed!')
    //   );

    // the promise version:
    this.articles = new Array();
    for(let i = 1; i < 3; i++) {
      this.as.getArticle(i).then(
        data => {
          this.article = data;
          this.isArticleAvaliable = true;
          this.articles.push(this.article);
        }
      )
    }
  }

  openNav():void {
  	document.getElementById("mySidenav").style.width = "250px";
  }
}
