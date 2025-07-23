import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  isClient: boolean = false;
  isRestaurateur: boolean = false;
  userName: string = '';

  constructor(private authService: AuthService) {
    this.updateHeaderStatus();
  }

  updateHeaderStatus(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.userName = this.authService.getUserName();
    const role = this.authService.getUserRole();
    this.isClient = role === 'client';
    this.isRestaurateur = role === 'restaurateur';
  }

  logout(): void {
    this.authService.logout();
    this.updateHeaderStatus();
    console.log('Utilisateur déconnecté');
  }
}
