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
    prix: 400,
    image: 'assets/images/pizza.jpg'
  },
  {
    id: 2,
    nom: 'Burger Maison',
    description: 'Steak, cheddar, salade, tomates',
    prix: 300,
    image: 'assets/images/burger.jpg'
  },
  {
    id: 3,
    nom: 'Salade César',
    description: 'Poulet, parmesan, croûtons, sauce césar',
    prix: 300,
    image: 'assets/images/salade.jpg'
  },
  {
    id: 4,
    nom: 'Tacos Poulet',
    description: 'Poulet épicé, fromage, crudités',
    prix: 500,
    image: 'assets/images/tacos.jpg'
  },
  {
    id: 5,
    nom: 'Sushi Mix',
    description: 'Assortiment de makis, sashimis et nigiris',
    prix: 600,
    image: 'assets/images/sushi.jpg'
  },
  {
    id: 6,
    nom: 'Couscous Royal',
    description: 'Semoule, légumes, merguez, poulet, agneau',
    prix: 400,
    image: 'assets/images/couscous.jpg'
  },
  {
    id: 7,
    nom: 'Pâtes Carbonara',
    description: 'Crème, lardons, parmesan, œuf',
    prix: 300,
    image: 'assets/images/carbonara.jpg'
  },
  {
    id: 8,
    nom: 'Chawarma',
    description: 'Viande grillée, pain pita, sauce blanche',
    prix:400,
    image: 'assets/images/chawarma.jpg'
  },
  {
    id: 9,
    nom: 'Tajine Poulet-Olive',
    description: 'Poulet tendre, citron confit, olives vertes',
    prix: 450,
    image: 'assets/images/tajine.jpg'
  },
  {
    id: 10,
    nom: 'Crêpes Chocolat',
    description: 'Crêpes garnies de chocolat fondu et noisettes',
    prix: 400,
    image: 'assets/images/crepe.jpg'
  }
];


  ajouterAuPanier(plat: any) {
    alert(`Plat ajouté au panier : ${plat.nom}`);
  }
}
