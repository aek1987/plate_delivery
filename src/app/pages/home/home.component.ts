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

  popularProducts: Product[] = []; 

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


 plats: string[] = ['Pizza', 'Tacos', 'Burger', 'Couscous', 'Sushi'];

searchPlat(plat: string) {
  console.log('Recherche de :', plat);
  // Naviguer vers une page ou filtrer les plats :
  // this.router.navigate(['/plats'], { queryParams: { q: plat } });
}
}
