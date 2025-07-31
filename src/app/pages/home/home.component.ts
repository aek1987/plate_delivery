import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Product, ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { CardRestaurantComponent } from "../../restaurant/product-card/product-card.component";
import { GeoService } from '../../services/geo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, CardRestaurantComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  popularProducts: Product[] = []; 
  locationMessage: string = 'Inconnue';
  clientLatitude: number | null = null;
  clientLongitude: number | null = null;
  searchTerm: string = '';

  ngOnInit(): void {
   
    this.productService.getPopularProducts().subscribe(products => {
      this.popularProducts = products;
    });
     this.detectLocation();
  }
 

  constructor(private productService: ProductService,private router: Router,private geoService: GeoService) {}
  
  detectLocation() {
  this.geoService.getCurrentLocation().then(position => {
    this.clientLatitude = position.coords.latitude;
    this.clientLongitude = position.coords.longitude;
    this.locationMessage = `📍 Position : ${this.clientLatitude.toFixed(3)}, ${this.clientLongitude.toFixed(3)}`;
  }).catch(error => {
    this.locationMessage = '❌ Impossible de détecter la position.';
    console.error(error);
  });
}


plats: string[] = [
  "Pizza",
  "Tacos",
  "Poulet rôti",
  "Hamburger",
  "Sandwich",
  "Couscous",
  "Chawarma",
  "Makouda",
  "Tajine",
  "Poisson grillé",
  "Pâtes",
  "Salade composée",
  "Bourek",
  "Mhadjeb",
  "Soupe Harira"
];

filteredPlats: string[] = [];

onSearchChange() {
  const term = this.searchTerm.toLowerCase();
  this.filteredPlats = this.plats.filter(p => p.toLowerCase().includes(term));
}

selectSuggestion(plat: string) {
  this.searchTerm = plat;
  this.filteredPlats = [];
  this.searchPlat(plat);
}

searchPlat(plat: string) {
  
  this.searchTerm = plat;
  this.detectLocation() 
  this.navigateToResults();
}

navigateToResults() {
  if (!this.searchTerm || !this.clientLatitude || !this.clientLongitude) {
    alert("Veuillez choisir un plat et autoriser la géolocalisation.");
    return;
  }

  this.router.navigate(['/restaurants'], {
    queryParams: {
      plat: this.searchTerm,
      lat: this.clientLatitude,
      lng: this.clientLongitude
    }
  });
}

}
