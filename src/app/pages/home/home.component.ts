import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardRestaurantComponent } from "../product-card/product-card.component";
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, CardRestaurantComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  popularProducts = [
    { id: 1, name: 'Pizza Margherita', image: 'assets/images/pizza.jpg', price: 12.99 },
    { id: 2, name: 'Sushi Box', image: 'assets/images/sushi.jpg', price: 19.99 },
    { id: 3, name: 'Tacos', image: 'assets/images/tacos.jpg', price: 8.50 },
  ];

  locationMessage: string = 'Inconnue';

  ngOnInit(): void {
    this.detectLocation();
    this.productService.getPopularProducts().subscribe(products => {
      this.popularProducts = products;
    });
  }
 

  constructor(private productService: ProductService) {}
  
  detectLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
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
}
