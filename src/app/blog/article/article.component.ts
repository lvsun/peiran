import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Article } from 'app/common/model/Article';

import { ArticleService } from '../articles.service';
declare var hljs: any;

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit, AfterViewChecked {

	public isArticleAvaliable: boolean;
	private article: Article;

  constructor(private articleServie: ArticleService) { }

  ngOnInit() {
  	this.getArticle(1);
  }

  ngAfterViewChecked() {
    hljs.initHighlightingOnLoad();
  }

	getArticle(id: number):void {
    this.articleServie.getArticle(id).then(
      data => {
        this.article = data;
        this.isArticleAvaliable = true;
      }
    );
  }
}
