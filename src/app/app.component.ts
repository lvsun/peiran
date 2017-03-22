import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {}

  openNav(): void {
    document.getElementById("mySidenav").style.width = "250px";
  }
  closeNav(): void {
    document.getElementById("mySidenav").style.width = "0";
  }

}
