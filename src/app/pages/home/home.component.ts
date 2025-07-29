import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Product, ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { CardRestaurantComponent } from "../product-card/product-card.component";

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
    this.detectLocation();
    this.productService.getPopularProducts().subscribe(products => {
      this.popularProducts = products;
    });
  }
 

  constructor(private productService: ProductService,private router: Router) {}
  
  detectLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          this.clientLatitude= lat;
          this.clientLongitude=lon;
          this.locationMessage = ` : ${lat.toFixed(3)}, ${lon.toFixed(3)}`;
        },
        (error) => {
          this.locationMessage = '❌ Impossible de détecter la position.';
          console.error(error);
        }
      );
    } else {
      this.locationMessage = '❌ Géolocalisation non prise en charge.';
    }
  }


plats = ['Pizza', 'Tacos', 'Couscous', 'Sushi', 'Pâtes', 'Burger'];
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
