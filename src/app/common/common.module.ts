import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SideNavbarComponent
  ],
  declarations: [SideNavbarComponent]
})
export class PeiranCommonModule { }
