import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavBarComponent {
  isOpen = false;
  isLoggedIn = true;
userName = 'Kader';
constructor(private router: Router, private authService: AuthService) {}
ngOnInit() {
  const user = localStorage.getItem('user');
  if (user) {
    this.isLoggedIn = true;
    this.userName = JSON.parse(user).name;
  }
}

logout() {
  localStorage.removeItem('user');
  this.isLoggedIn = false;
  this.router.navigate(['/login']);

}
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }}
