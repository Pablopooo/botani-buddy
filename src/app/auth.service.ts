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
    const storedPassword = localStorage.getItem('contraseña') || '123456';  // Usa '123456' si no hay una contraseña guardada

    if (usuario === 'admin' && contraseña === storedPassword) {
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
