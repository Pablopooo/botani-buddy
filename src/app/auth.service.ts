import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor() {
    // Comprueba el estado de autenticación almacenado en localStorage
    this.isAuthenticated = !!localStorage.getItem('userToken');
  }

  login(usuario: string, contraseña: string): boolean {
    if (usuario === 'admin' && contraseña === '123456') {
      this.isAuthenticated = true;
      localStorage.setItem('userToken', 'token'); // Almacena el token en localStorage
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('userToken'); // Elimina el token de localStorage
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
