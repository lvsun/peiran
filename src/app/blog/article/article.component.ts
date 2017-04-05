import { Component, OnInit } from '@angular/core';
import { Article } from 'app/common/model/Article';

import { ArticleService } from '../articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {

	public isArticleAvaliable: boolean;
	private articles: Article[];
	private test: String[];

  constructor(private articleServie: ArticleService) { }

  ngOnInit() {
  	this.getArticles(1);
  }

	getArticles(id: number):void {
    this.articleServie.getArticles(id).then(
      data => {
        this.articles = data;
        this.test = this.articles[0].paragraghs;
        this.isArticleAvaliable = true;
      }
    );
  }
}
