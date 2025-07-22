import { Component } from '@angular/core';


import { NavBarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from "../../shared/components/footer/footer.component";


@Component({
  selector: 'app-home',
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
