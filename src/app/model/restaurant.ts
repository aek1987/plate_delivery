import { plat } from "./plats.model";

export interface Restaurant {
  id: number;
  name: string;
  plats:  plat[];
  lat: number;
  lng: number;
  adresse: string;
  image:string
}