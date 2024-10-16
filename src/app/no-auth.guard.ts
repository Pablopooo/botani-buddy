import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    console.log('NoAuthGuard: Checking authentication status');
    if (!this.authService.isLoggedIn()) {
      console.log('NoAuthGuard: User is not logged in, access granted to /login');
      return true;
    } else {
      console.log('NoAuthGuard: User is logged in, redirecting to /home');
      return this.router.parseUrl('/home');
    }
  }
}
