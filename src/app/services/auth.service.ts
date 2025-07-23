import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInStatus = false;
  private userRole: 'client' | 'restaurateur' | null = null;
  private userName: string = '';

  constructor() {}

  login(role: 'client' | 'restaurateur', name: string): void {
    this.isLoggedInStatus = true;
    this.userRole = role;
    this.userName = name;
    // Tu peux stocker dans localStorage aussi si besoin
  }

  logout(): void {
    this.isLoggedInStatus = false;
    this.userRole = null;
    this.userName = '';
  }

  isLoggedIn(): boolean {
    return this.isLoggedInStatus;
  }

  getUserRole(): 'client' | 'restaurateur' | null {
    return this.userRole;
  }

  getUserName(): string {
    return this.userName;
  }
}
