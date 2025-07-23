import { Routes } from '@angular/router';
import { Index } from './pages/index';

export const routes: Routes = [
    {path:'', component: Index, pathMatch: 'full'}
];
