import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from "./shared/components/header/header.component";
import { GeoService } from './services/geo.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'food-delivery-app';

 constructor(private locationService: GeoService) {}
 ngOnInit(): void {
  // Appeler la localisation une seule fois
  this.locationService.getCurrentLocation()
    .then(pos => {
      console.log('Position :', pos.coords.latitude, pos.coords.longitude);
      // Charger les produits populaires selon la position ici
    })
    .catch(err => {
      console.warn('Localisation échouée :', err);
    });}
  
  
  }