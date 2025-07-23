import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-plats',
  standalone: true,
  imports: [CommonModule], // ← ajoute ceci
  templateUrl: './liste-plats.component.html',
  styleUrls: ['./liste-plats.component.scss']
})
export class ListePlatsComponent {
  plats = [
    {
      id: 1,
      nom: 'Pizza Margherita',
      description: 'Sauce tomate, mozzarella, basilic frais',
      prix: 9.99,
      image: 'assets/images/pizza.jpg'
    },
    {
      id: 2,
      nom: 'Burger Maison',
      description: 'Steak, cheddar, salade, tomates',
      prix: 11.49,
      image: 'assets/images/burger.jpg'
    },
    {
      id: 3,
      nom: 'Salade César',
      description: 'Poulet, parmesan, croûtons, sauce césar',
      prix: 8.50,
      image: 'assets/images/salade.jpg'
    }
  ];

  ajouterAuPanier(plat: any) {
    alert(`Plat ajouté au panier : ${plat.nom}`);
  }
}
