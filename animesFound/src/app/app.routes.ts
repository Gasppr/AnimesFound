import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IntroComponent } from './pages/intro/intro.component';

export const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: "home" ,component: HomeComponent},
  {path: "intro", component:IntroComponent}
];
