import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRestaurantComponent } from './card-restaurant.component';

describe('CardRestaurantComponent', () => {
  let component: CardRestaurantComponent;
  let fixture: ComponentFixture<CardRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardRestaurantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
