import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../model/restaurant';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-commande',imports: [FormsModule],
  templateUrl: './commande.component.html'
})
export class CommandeComponent implements OnInit {
  restaurant?: Restaurant;
  selectedPlat: string = '';
   nom: string = '';
adresse: string = '';
telephone: string = '';


  constructor(private route: ActivatedRoute, private restoService: RestaurantService) {}

  ngOnInit(): void {
    const restoId = Number(this.route.snapshot.queryParamMap.get('restoId'));
    const plat = this.route.snapshot.queryParamMap.get('plat');
    
    this.restaurant = this.restoService.getRestaurantById(restoId);
    this.selectedPlat = plat || '';
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
