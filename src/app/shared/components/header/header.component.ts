import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from "../../../components/navbar/navbar.component";

@Component({
  selector: 'app-header',
  imports: [CommonModule, NavBarComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
