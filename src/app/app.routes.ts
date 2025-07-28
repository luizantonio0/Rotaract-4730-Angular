import { Routes } from '@angular/router';
import { Index } from './pages/index';
import { AboutUs } from './pages/about-us/about-us';
import { Contacts } from './pages/contacts/contacts';
import { Members } from './pages/members/members';
import { Minutes } from './pages/minutes/minutes';
import { Projects } from './pages/projects/projects';
import { TransparencyPortal } from './pages/transparency-portal/transparency-portal';

export const routes: Routes = [
    {path:'', component: Index, pathMatch: 'full'},
    {path: 'about-us', component: AboutUs},
    {path: 'contacts', component: Contacts},
    {path: 'members', component: Members},
    {path: 'minutes', component: Minutes},
    {path: 'projects', component: Projects},
    {path: 'transparency-portal', component: TransparencyPortal}

];
