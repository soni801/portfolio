import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProjectPageComponent} from "./project-page/project-page.component";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Samuel Aasen \u2022 Digital portefølje'
  },
  {
    path: 'project/:project',
    component: ProjectPageComponent,
    title: 'Samuel Aasen \u2022 Prosjekt'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
