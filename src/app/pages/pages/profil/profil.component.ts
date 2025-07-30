import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profil', 
  imports: [FormsModule],
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  user = {
    name: '',
    email: '',
    password: ''
  };

  ngOnInit(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
  }

  updateProfile() {
    localStorage.setItem('user', JSON.stringify(this.user));
    alert('Profil mis à jour avec succès');
  }
}
