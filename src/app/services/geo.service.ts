import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class GeoService {
 /* getCurrentLocation(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject('Géolocalisation non disponible');
      } else {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      }
    });
  }*/

  getAdresseDepuisCoords(lat: number, lon: number): Promise<string> {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => data.display_name || 'Adresse introuvable');
}
private hasAsked = false;
  private location: GeolocationPosition | null = null;

  getCurrentLocation(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      if (this.hasAsked) {
        // Si déjà demandé, renvoyer la position ou une erreur
        if (this.location) resolve(this.location);
        else reject('Géolocalisation refusée');
        return;
      }

      this.hasAsked = true;

      if (!navigator.geolocation) {
        reject('Géolocalisation non disponible');
      } else {
        navigator.geolocation.getCurrentPosition(
          position => {
            this.location = position;
            resolve(position);
          },
          error => {
            reject(error.message);
          }
        );
      }
    });
  }
}
