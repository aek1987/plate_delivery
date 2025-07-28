import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private popularProducts: Product[] = [
    { id: 1, name: 'Pizza Margherita', image: 'assets/images/pizza.jpg', price: 12.99 },
    { id: 2, name: 'Suchi', image: 'assets/images/sushi.jpg', price: 19.99 },
    { id: 3, name: 'Tacos', image: 'assets/images/tacos.jpg', price: 8.50 },
  ];

  getPopularProducts(): Observable<Product[]> {
    return of(this.popularProducts);
  }
}
