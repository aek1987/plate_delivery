export interface Commande {
  id?: number; // facultatif, utile si tu ajoutes un identifiant
  nomClient: string;
  adresseLivraison: string;
  telephone: string;
  plat: string;         // ou: platId si tu gères un objet `Plat`
  restaurant: string;   // ou: restaurantId si tu gères un objet `Restaurant`
  dateCommande: Date;
  status?: string;      // facultatif: 'en_attente', 'validée', 'livrée', etc.
  
}
