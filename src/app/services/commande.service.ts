import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Commande } from '../model/commande';

@Injectable({
  providedIn: 'root',
})
export class CommandeService {
  private commandes: Commande[] = [];

  ajouterCommande(commande: Commande): void {
    this.commandes.push(commande);
  }

  getCommandes(): Observable<Commande[]> {
    return of(this.commandes);
  }

  getCommandesByClient(telephone: string): Observable<Commande[]> {
    const result = this.commandes.filter(c => c.telephone === telephone);
    return of(result);
  }

  getCommandesEnAttente(): Observable<Commande[]> {
    const result = this.commandes.filter(c => c.status === 'en_attente');
    return of(result);
  }

  getAll(): Observable<Commande[]> {
    return of(this.commandes);
  }

  supprimerCommande(id: number): void {
    this.commandes = this.commandes.filter(c => c.id !== id);
  }

  changerStatutCommande(id: number, nouveauStatut: string): void {
    const commande = this.commandes.find(c => c.id === id);
    if (commande) {
      commande.status = nouveauStatut;
    }
  }
}
