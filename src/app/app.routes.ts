import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "home", component: HomeComponent},
    {path: "register", component: RegisterComponent},
];
