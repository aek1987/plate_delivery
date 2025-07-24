import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface Plat {
  id: number;
  nom: string;
  prix: number;
  localisation: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true, // si tu l’utilises comme standalone
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  // ⚠️ Retire le fichier CSS si inexistant ou crée-le
  // styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  platForm: FormGroup;
  plats: Plat[] = [];
  compteurId = 1;

  constructor(private fb: FormBuilder) {
    this.platForm = this.fb.group({
      nom: ['', Validators.required],
      prix: [null, Validators.required],
      localisation: ['', Validators.required]
    });
  }

  ajouterPlat() {
    if (this.platForm.valid) {
      const nouveauPlat: Plat = {
        id: this.compteurId++,
        nom: this.platForm.value.nom,
        prix: this.platForm.value.prix,
        localisation: this.platForm.value.localisation
      };

      this.plats.push(nouveauPlat);
      this.platForm.reset();
    }
  }

  supprimerPlat(id: number) {
    this.plats = this.plats.filter(plat => plat.id !== id);
  }
}
