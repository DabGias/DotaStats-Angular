import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroInfoComponent } from './components/hero-info/hero-info.component';

export const routes: Routes = [
    { path: "hero-info", component: HeroInfoComponent },
    { path: "heroes" , component: HeroesComponent},
    { path: "about", component: AboutComponent },
    { path: "home", component: HomeComponent },
    { path: "", pathMatch: "full", redirectTo: "/home" }
]
