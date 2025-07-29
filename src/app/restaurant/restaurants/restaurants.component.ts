import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService} from '../../services/restaurant.service';
import { Restaurant } from '../../model/restaurant';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[] = [];

  constructor(private route: ActivatedRoute, private restaurantService: RestaurantService,private router: Router ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const plat = params['plat'];
      const lat = parseFloat(params['lat']);
      const lng = parseFloat(params['lng']);

      this.restaurants = this.restaurantService.getRestaurantsProches(plat, lat, lng);
    });
  }
  commander(id: number) {
  // Rediriger vers la page de commande ou détails
  this.router.navigate(['/commande'], { queryParams: { restoId: id } });
}
}
