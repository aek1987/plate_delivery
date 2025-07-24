import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(email: string, password: string): Observable<boolean> {
    // 🔐 Simule une authentification (exemple avec un utilisateur fictif)
    if (email === 'admin@example.com' && password === 'admin123') {
      console.log('Utilisateur authentifié');
      return of(true); // succès
    } else {
      console.log('Échec d\'authentification');
      return of(false); // échec
    }
  }

  logout(): void {
    console.log('Déconnexion effectuée');
    // ici, tu pourrais vider le localStorage, tokens, etc.
  }

  isAuthenticated(): boolean {
    // simulation : à améliorer avec des tokens ou localStorage
    return true; // ou false selon ton cas
  }
}
