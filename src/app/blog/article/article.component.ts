import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getArticle( +params['id']);
    })
  }

	private getArticle(id: number):void {
    this.articleService.getArticle(id).then(
      data => {
        this.article = data;
        this.isArticleAvaliable = true;
      }
    );
  }
}
