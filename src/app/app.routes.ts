import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
export const routes: Routes = [
    {
        path: 'home',
        data: { animation: 'HomePage' },
        component: HomeComponent
    },
    {
        path: 'about',
        data: { animation: 'AboutPage' },
        component: AboutComponent
    },
    {
        path: 'project',
        data: { animation: 'ProjectPage' },
        component: ProjectComponent
    },
    {
        path: 'contact',
        data: { animation: 'ContactPage' },
        component: ContactComponent
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
