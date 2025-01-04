import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {
    path: '**',
    component: HomeComponent,
    title: 'Samuel Aasen \u2022 Digital portefølje'
  }
];
