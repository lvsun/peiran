export class Article {
	
	title: string;
	subtitle: string;
	paragraghs: string[];


	constructor(title, subttile, paragraghs) {
		this.title = title;
		this.subtitle = subttile;
		this.paragraghs = paragraghs;
	}
}