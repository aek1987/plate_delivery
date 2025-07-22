import { Dish } from "./dish.model";

export interface Order {
  id: number;
  userId: number;
  dishes: Dish[];
  total: number;
  status: 'pending' | 'confirmed' | 'delivered';
  createdAt: Date;
}
