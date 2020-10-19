import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate {

  constructor(
    private router: Router,
    private authentication: AuthenticationService
  ) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    /**
     * if(authentication.isLoggedIn)
     */
    return of(true);
  }

}