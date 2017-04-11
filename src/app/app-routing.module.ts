import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './not-found/not-found.component';
import { TweetComponent } from './tweet/tweet/tweet.component';

const routes: Routes = [
  { path: 'tweet', component: TweetComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
