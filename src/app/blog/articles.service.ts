import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // for observalbe version
import 'rxjs/add/operator/toPromise'; //for Promise version


import { Article } from 'app/common/model/Article';

@Injectable()
export class ArticleService {

	constructor(private http: Http) {}

	// the observable version:

	// getArticles(): Observable<Article[]> {
	// 	return this.http
	// 		.get('assets/articles/1.json')
	// 		.map(this.extractData)
	// 		.catch(this.handleError);
	// }

	// private extractData(res: Response) {
	// 	let body = res.json();
	// 	console.log(body);
	// 	return body || {};
	// }

	// private handleError (error: Response | any) {
	// 	// In a real world app, you might use a remote logging infrastructure
 //    let errMsg: string;
 //    if (error instanceof Response) {
 //      const body = error.json() || '';
 //      const err = body.error || JSON.stringify(body);
 //      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
 //    } else {
 //      errMsg = error.message ? error.message : error.toString();
 //    }
 //    console.error(errMsg);
 //    return Observable.throw(errMsg);
	// }

	// the promise version:

	getArticle(id: number): Promise<Article> {
		let url:string = 'assets/articles/' + id.toString() + '.json';
		return this.http.get(url)
			.toPromise()
			.then(res => res.json() as Article)
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
   		return Promise.reject(error.message || error);
	}
}