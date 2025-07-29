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
    { id: 1, name: 'Pizza Margherita', image: 'assets/images/pizza.jpg', price: 450 },
    { id: 2, name: 'Suchi', image: 'assets/images/sushi.jpg', price: 450 },
    { id: 3, name: 'Tacos', image: 'assets/images/tacos.jpg', price: 450 },
  ];

  getPopularProducts(): Observable<Product[]> {
    return of(this.popularProducts);
  }
}
