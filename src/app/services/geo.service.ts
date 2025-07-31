import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class GeoService {
  getCurrentLocation(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject('Géolocalisation non disponible');
      } else {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      }
    });
  }

  getAdresseDepuisCoords(lat: number, lon: number): Promise<string> {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => data.display_name || 'Adresse introuvable');
}

}
