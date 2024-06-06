import { Injectable, inject } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router: Router = inject(Router);

  // Parse the boolean value correctly
  const islogged: boolean = JSON.parse(localStorage.getItem('isLoggedIn') || 'false');

  if (!islogged) {
    router.navigate(['/login']);
    return false; // Redirect to login if not logged in
  }

  console.log('going', islogged);
  return true; // Allow access if logged in
};
