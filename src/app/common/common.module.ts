import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { BlogRoutingModule } from 'app/blog/blog-routing/blog-routing.module';
import { HighlightJsContentDirective } from './directives/highlight-js-content.directive' ;


@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  exports: [
    SideNavbarComponent,
    HighlightJsContentDirective
  ],
  declarations: [SideNavbarComponent, HighlightJsContentDirective]
})
export class PeiranCommonModule { }
