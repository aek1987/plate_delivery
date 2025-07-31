import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../model/restaurant';
import { FormsModule } from '@angular/forms';
import { GeoService } from '../../services/geo.service';
import { CommonModule } from '@angular/common';
import { CommandeService } from '../../services/commande.service';
import { Commande } from '../../model/commande';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-commande',
  templateUrl: './commande.component.html'
})
export class CommandeComponent implements OnInit {
  restaurant?: Restaurant;
  selectedPlat: string = '';
   nom: string = '';
adresse: string = '';
telephone: string = '';

  afficherCarte = false;

  constructor(private route: ActivatedRoute, private restoService: RestaurantService,
    private geoService: GeoService,private commandeService: CommandeService) {}

  ngOnInit(): void {
    const restoId = Number(this.route.snapshot.queryParamMap.get('restoId'));
    const plat = this.route.snapshot.queryParamMap.get('plat');
    
    this.restaurant = this.restoService.getRestaurantById(restoId);
    this.selectedPlat = plat || '';
  }

ngAfterViewInit() {
    this.utiliserPositionActuelle(); // Optionnel : charger automatiquement
  }
utiliserPositionActuelle() {
    this.geoService.getCurrentLocation()
      .then((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        // Optionnel : afficher sur carte
        this.afficherCarte = true;
        this.afficherSurCarte(lat, lng);

        // Reverse geocoding
        this.geoService.getAdresseDepuisCoords(lat, lng).then((adresse) => {
          this.adresse = adresse;
        });
      })
      .catch((err) => {
        console.error('Erreur géolocalisation :', err);
      });
  }

  afficherSurCarte(lat: number, lng: number) {
    // Tu peux utiliser Leaflet ou Google Maps ici
    // Placeholder ici, mais je peux te générer le code Leaflet si tu veux
  }



validerCommande() {
  
 
  
  
  if (this.nom && this.adresse && this.telephone) {
    console.log("Commande validée !");
    console.log("Nom :", this.nom);
    console.log("Adresse :", this.adresse);
    console.log("Téléphone :", this.telephone);
    console.log("Plat :", this.selectedPlat);
    console.log("Restaurant :", this.restaurant?.name);

    alert("🎉 Votre commande a été envoyée avec succès !");
    // Tu peux ensuite rediriger ou envoyer vers un service ici.
  } else {
    alert("Merci de remplir tous les champs.");
  }

  
    

}

}
