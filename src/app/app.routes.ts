import { Routes } from '@angular/router';
import { ExperienceComponent } from './components/experience/experience.component'
import { AboutMeComponent } from './components/about-me/about-me.component';

export const routes: Routes = [
    { path: '', redirectTo: 'about-me', pathMatch: 'full' },
    { path: 'experience', component: ExperienceComponent },
    { path: 'about-me', component: AboutMeComponent }
];
