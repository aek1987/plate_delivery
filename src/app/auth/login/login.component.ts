import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.email === 'admin@site.com' && this.password === 'admin') {
      alert('Connexion réussie !');
      this.router.navigate(['/dashboard']); // redirection
    } else {
      alert('Email ou mot de passe incorrect');
    }
  }
}
