import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ListePlatsComponent } from './pages/restaurant-list/liste-plats.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

export const routes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'accueil', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'plats', component: ListePlatsComponent },

  { path: 'dashboard', component: DashboardComponent },
  
  { path: 'restaurants/:id', component: RestaurantDetailsComponent },];
