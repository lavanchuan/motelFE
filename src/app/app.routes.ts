import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RoomDetailComponent } from './components/room-detail/room-detail.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "login", component: LoginComponent},
    {path: "home", component: HomeComponent},
    {path: "register", component: RegisterComponent},
    {path: "room-detail", component: RoomDetailComponent},
    {path: "user-info", component: UserInfoComponent},
    
];
