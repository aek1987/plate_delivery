import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommandeService } from '../../services/commande.service';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Commande } from '../../model/commande';
import { User } from '../../model/user.model';


@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  user: User = {
    id: 0,
    name: '',
    email: '',
    adresse: '',
    telephone: '',
    role: 'client'
  };

  locationMessage: string = '';
  commandes: Commande[] = [];
  users: User[] = [];
  role: string = '';

  constructor(
    private authService: AuthService,
    private commandeService: CommandeService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadUser();
  }

 loadUser(): void {
  this.authService.getCurrentUser().subscribe((res: User | null) => {
    if (!res) return;

    this.user = res;
    this.role = res.role;

    if (this.role === 'client') {
      this.getCommandesByClient();
    } else if (this.role === 'gerant') {
      this.getCommandesEnAttente();
    } else if (this.role === 'admin') {
      this.getAllUtilisateurs();
      this.getAllCommandes();
    }
  });
}

  updateProfile(): void {
    const updatedData: Partial<User> = {
      name: this.user.name,
      email: this.user.email,
      adresse: this.user.adresse,
      telephone: this.user.telephone
    };

    this.authService.updateProfile(this.user.id, updatedData).subscribe({
      next: () => alert('✅ Profil mis à jour avec succès.'),
      error: () => alert('❌ Une erreur est survenue lors de la mise à jour.')
    });
  }

  detectLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          this.locationMessage = `📍 Ma position : ${lat.toFixed(4)}, ${lon.toFixed(4)}`;
          this.user.adresse = `${lat}, ${lon}`;
        },
        () => this.locationMessage = '❌ Impossible de détecter votre position.'
      );
    } else {
      this.locationMessage = '❌ Géolocalisation non disponible sur ce navigateur.';
    }
  }

  getCommandesByClient(): void {
    this.commandeService.getCommandesByClient(this.user.telephone).subscribe((data: Commande[]) => {
      this.commandes = data;
    });
  }

  getCommandesEnAttente(): void {
    this.commandeService.getCommandesEnAttente().subscribe((data: Commande[]) => {
      this.commandes = data;
    });
  }

  getAllCommandes(): void {
    this.commandeService.getAll().subscribe((data: Commande[]) => {
      this.commandes = data;
    });
  }

 getAllUtilisateurs(): void {
  this.authService.getAllUsers().subscribe((data: User[]) => {
    this.users = data;
  });
}

  marquerLivree(cmd: Commande): void {
    cmd.status = 'livrée'; // ici tu peux ajouter un appel au backend si besoin
    alert(`Commande ${cmd.id} marquée comme livrée`);
  }

  voirDetails(c: Commande): void {
    alert(`Détails de la commande : ${JSON.stringify(c)}`);
  }
}
