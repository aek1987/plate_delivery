import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ListePlatsComponent } from './pages/plat-list/liste-plats.component';
import { RestaurantDetailsComponent } from './restaurant/restaurant-details/restaurant-details.component';

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { RestaurantsComponent } from './restaurant/restaurants/restaurants.component';

export const routes: Routes = [
 { path: '', component: ListePlatsComponent },
 { path: 'accueil', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'plats', component: ListePlatsComponent },
  { path: 'dashboard', component: DashboardComponent }, 
  { path: 'restaurants', component: RestaurantsComponent }, 
  
  { path: 'restaurants/:id', component: RestaurantDetailsComponent },];
