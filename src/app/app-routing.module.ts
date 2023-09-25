import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Page not found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
