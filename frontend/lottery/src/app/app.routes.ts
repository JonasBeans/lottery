import { ChildrenOutletContexts, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouletteComponent } from './games/roulette/roulette.component';
import { ChoiceComponent } from './games/choice/choice.component';
import { LoginComponent } from './security/login/login.component';

export const routes: Routes = [ 
    { path: '', component:  HomeComponent},
    { path: 'home', component:  HomeComponent},
    { path: 'roulette', component:  RouletteComponent},
    { path: 'choices', component:  ChoiceComponent},
    { path: 'login', component: LoginComponent }
];
