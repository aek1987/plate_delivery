import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

import { ListePlatsComponent } from './restaurant/plat-list/liste-plats.component';


import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { RestaurantsComponent } from './restaurant/restaurants/restaurants.component';
import { CommandeComponent } from './commandes/commande/commande.component';
import { ProfilComponent } from './pages/profil/profil.component';

export const routes: Routes = [
 { path: '', component: ListePlatsComponent },
 { path: 'accueil', component: HomeComponent },
  { path: 'login', component: LoginComponent },
 
  { path: 'plats', component: ListePlatsComponent },
  { path: 'dashboard', component: DashboardComponent }, 
  { path: 'restaurants', component: RestaurantsComponent }, 
   { path: 'commande', component: CommandeComponent }, 
  { path: 'profil', component: ProfilComponent }
  ];
