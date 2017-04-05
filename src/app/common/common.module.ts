import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { BlogRoutingModule } from 'app/blog/blog-routing/blog-routing.module' ;


@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  exports: [
    SideNavbarComponent
  ],
  declarations: [SideNavbarComponent]
})
export class PeiranCommonModule { }
