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
  isOpen = true;
  isLoggedIn = false;
  userName = 'Kader';
constructor(private router: Router, private authService: AuthService) {}
ngOnInit() {
  const user = localStorage.getItem('currentUser');
  if (user) {
    this.isLoggedIn = true;
    this.userName = JSON.parse(user).name;
  }
}

logout() {
  localStorage.removeItem('currentUser');
  this.isLoggedIn = false;
  this.router.navigate(['/login']);

}
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }}
