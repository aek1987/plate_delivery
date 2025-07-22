import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
 standalone: true,
  imports: [CommonModule], // ← ajoute ceci
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userName: string = 'Chef Pro';
  isLoggedIn: boolean = true;

  logout(): void {
    // Logique de déconnexion (à adapter)
    this.isLoggedIn = false;
    console.log('Utilisateur déconnecté');
  }
}
