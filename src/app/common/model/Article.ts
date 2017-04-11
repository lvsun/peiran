export class Article {
	id: number;	
	date: string;
	title: string;
	subtitle: string;
	paragraghs: string[];


	constructor(title, subttile, paragraghs) {
		this.title = title;
		this.subtitle = subttile;
		this.paragraghs = paragraghs;
	}
}