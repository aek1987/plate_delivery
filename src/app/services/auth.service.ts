import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { User } from '../model/user.model';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users'; // à adapter selon ton backend
  private currentUserSubject = new BehaviorSubject<User | null>(this.getUserFromStorage());

  constructor(private http: HttpClient) {}

  /** Authentifie l'utilisateur (exemple simple à remplacer par appel backend) */
  login(email: string, password: string): Observable<boolean> {
    if (email === 'admin@example.com' && password === 'admin123') {
      const fakeUser: User = {
        id: 1,
        name: 'Admin',
        email: email,
        password: password,
        adresse: '',
        role:"client",
        telephone: '',
      };
      this.setCurrentUser(fakeUser);
      console.log('Utilisateur authentifié');
      return of(true);
    } else {
      console.log("Échec d'authentification");
      return of(false);
    }
  }



  /** Retourne un observable sur l'utilisateur courant */
  getCurrentUser(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }

  /** Définit l'utilisateur courant et le stocke localement */
  setCurrentUser(user: User): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  /** Déconnecte l'utilisateur */
  logout(): void {
    console.log('Déconnexion effectuée');
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  /** Vérifie si un utilisateur est connecté */
  isAuthenticated(): boolean {
    return this.getUserFromStorage() !== null;
  }

  /** Met à jour le profil utilisateur */
  updateProfile(userId: number, newData: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${userId}`, newData).pipe(
      tap((updatedUser: User) => {
        localStorage.setItem('currentUser', JSON.stringify(updatedUser));
        this.currentUserSubject.next(updatedUser);
      })
    );
  }

  /** Récupère le user du localStorage */
  private getUserFromStorage(): User | null {
    const userJson = localStorage.getItem('currentUser');
    return userJson ? JSON.parse(userJson) : null;
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
