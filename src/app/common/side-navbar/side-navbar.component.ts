import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'p-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent {

	sidenavWidth: number;		

  constructor() {
  	this.sidenavWidth = 0;
  }

  closeNav(): void {
  	document.getElementById("mySidenav").style.width = "0";
  }


}
