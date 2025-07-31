export interface User {
  id: number;
  name: string;
  email: string;
  adresse: string;
  telephone: string,
  password?: string; // champ facultatif
  role: 'client' | 'professionnel' | 'gerant'|'admin'; // union de types (bon choix)
}
