import { Injectable } from '@angular/core';
import { Restaurant } from '../model/restaurant';



@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  // Liste fictive de restaurants à Alger
private restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Pizza Express Alger",
    plats: [
       { id: 3, title: "Pizza", description: "Tomate, mozzarella", price: 1200, image: "assets/images/plats/pizza_margherita.jpg", category: "Pizza", available: true },
      { id: 1, title: "Pizza Margherita", description: "Tomate, mozzarella", price: 1200, image: "assets/images/plats/pizza_margherita.jpg", category: "Pizza", available: true },
      { id: 2, title: "Tacos Poulet", description: "Poulet, sauce fromagère", price: 1000, image: "assets/images/plats/tacos_poulet.jpg", category: "Tacos", available: true }
    ],
    lat: 36.752887,
    lng: 3.042048,
    adresse: "Rue Didouche Mourad, Alger",
    image: "assets/images/restaurants/pizza_express.png"
  },
  {
    id: 2,
    name: "Chez Couscous",
    plats: [
      { id: 3, title: "Couscous", description: "Semoule, légumes, viande", price: 1300, image: "assets/images/plats/couscous.jpg", category: "Couscous", available: true },
      { id: 4, title: "Tajine", description: "Poulet, olives", price: 1100, image: "assets/images/plats/tajine.jpg", category: "Tajine", available: true }
    ],
    lat: 36.7530,
    lng: 3.0580,
    adresse: "Place Audin, Alger",
    image: "assets/images/restaurants/chez_couscous.jpg"
  },
  {
    id: 3,
    name: "Burger Time",
    plats: [
      { id: 5, title: "Burger", description: "Viande, fromage", price: 900, image: "assets/images/plats/burger.jpg", category: "Burger", available: true },
      { id: 6, title: "Fries", description: "Pommes frites", price: 400, image: "assets/images/plats/fries.jpg", category: "Side", available: true }
    ],
    lat: 36.7500,
    lng: 3.0500,
    adresse: "El Madania, Alger",
    image: "assets/images/restaurants/burger_time.jpg"
  },
  {
    id: 4,
    name: "Asia Food",
    plats: [
      { id: 7, title: "Sushi", description: "Assortiment de makis", price: 1600, image: "assets/images/plats/sushi.jpg", category: "Sushi", available: true },
      { id: 8, title: "Noodles", description: "Nouilles sautées", price: 1100, image: "assets/images/plats/noodles.jpg", category: "Noodles", available: true }
    ],
    lat: 36.7550,
    lng: 3.0600,
    adresse: "Belouizdad, Alger",
    image: "assets/images/restaurants/asia_food.jpg"
  },
  {
    id: 5,
    name: "Poulet Doré",
    plats: [
      { id: 9, title: "Poulet rôti", description: "Poulet rôti aux épices", price: 1400, image: "assets/images/plats/poulet_roti.jpg", category: "Poulet", available: true },
      { id: 10, title: "Tenders", description: "Filets de poulet panés", price: 800, image: "assets/images/plats/tenders.jpg", category: "Poulet", available: true }
    ],
    lat: 36.760200,
    lng: 3.050400,
    adresse: "Avenue Pasteur, Alger-Centre",
    image: "assets/images/restaurants/poulet-dore.jpeg"
  },
  {
    id: 6,
    name: "METRO PIZZA",
    plats: [
      { id: 11, title: "Pizza Pepperoni", description: "Pepperoni, fromage", price: 1300, image: "assets/images/plats/pizza_pepperoni.jpg", category: "Pizza", available: true }
    ],
    lat: 36.760200,
    lng: 3.050400,
    adresse: "Avenue Pasteur, Alger-Centre",
    image: "assets/images/restaurants/metro_pizza.jpg"
  }
];



  // Rayon maximum de livraison en kilomètres
  private rayonKm = 150;

  constructor() {}
public getRestaurantsProches(plat: string, lat: number, lng: number): Restaurant[] {
  return this.restaurants.filter(resto => {
    const distance = this.getDistanceKm(lat, lng, resto.lat, resto.lng);
    return resto.plats.some(p => p.title.toLowerCase() === plat.toLowerCase()) && distance <= this.rayonKm;
  });
}


  // Calcul de distance Haversine (terre)
  private getDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Rayon de la terre en km
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  private deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }

  getRestaurantById(id: number): Restaurant | undefined {
  return this.restaurants.find(resto => resto.id === id);
}

}
