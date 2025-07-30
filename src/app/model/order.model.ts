import { plat } from "./plats.model";

export interface Order {
  id: number;
  userId: number;
  dishes: plat[];
  total: number;
  status: 'pending' | 'confirmed' | 'delivered';
  createdAt: Date;
}
