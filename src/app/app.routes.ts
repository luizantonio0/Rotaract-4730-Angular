import { Routes } from '@angular/router';
import { Index } from './pages/index';
import { AboutUs } from './pages/about-us/about-us';

export const routes: Routes = [
    {path:'', component: Index, pathMatch: 'full'},
    {path: 'about-us', component: AboutUs}
];
