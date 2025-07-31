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
    plats: ["Pizza", "Tacos","Pizza Margherita","Tacos Poulet"],
    lat: 36.752887,
    lng: 3.042048,
    adresse: "Rue Didouche Mourad, Alger",
    image: "assets/images/restaurants/pizza_express.png"
  },
  {
    id: 2,
    name: "Chez Couscous",
    plats: ["Couscous", "Tajine"],
    lat: 36.7530,
    lng: 3.0580,
    adresse: "Place Audin, Alger",
    image: "assets/images/restaurants/chez_couscous.jpg"
  },
  {
    id: 3,
    name: "Burger Time",
    plats: ["Burger", "Fries"],
    lat: 36.7500,
    lng: 3.0500,
    adresse: "El Madania, Alger",
    image: "assets/images/restaurants/burger_time.jpg"
  },
  {
    id: 4,
    name: "Asia Food",
    plats: ["Sushi", "Noodles"],
    lat: 36.7550,
    lng: 3.0600,
    adresse: "Belouizdad, Alger",
    image: "assets/images/restaurants/asia_food.jpg"
  },{
    id: 2,
    name: "Poulet Doré",
    plats: ["Poulet rôti", "Poulet frit", "Tenders", "Sandwich poulet"],
    lat: 36.760200,
    lng: 3.050400,
    adresse: "Avenue Pasteur, Alger-Centre",
    image: "assets/images/restaurants/poulet-dore.jpeg"
  }
];


  // Rayon maximum de livraison en kilomètres
  private rayonKm = 150;

  constructor() {}
  
 public getRestaurantsProches(plat: string, lat: number, lng: number): Restaurant[] {
    return this.restaurants.filter(resto => {
      const distance = this.getDistanceKm(lat, lng, resto.lat, resto.lng);
      return resto.plats.includes(plat) && distance <= this.rayonKm;
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
