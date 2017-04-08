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
	private article: Article;

  constructor(private articleServie: ArticleService) { }

  ngOnInit() {
  	this.getArticle(1);
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
