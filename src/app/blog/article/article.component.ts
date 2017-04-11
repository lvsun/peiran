import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Article } from 'app/common/model/Article';

import { ArticleService } from '../articles.service';
declare var hljs: any;

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {

	public isArticleAvaliable: boolean;
	private article: Article;

  constructor(
    private articleServie: ArticleService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getArticle( +params['id']);
    })
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
