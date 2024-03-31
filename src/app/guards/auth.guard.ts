import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { RestService } from '../services/rest.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const restService = inject(RestService)
  const token = localStorage.getItem('token');

  if (token) {
    const meUser = await restService.me();
    const path = route.routeConfig?.path

    // Response error
    if (meUser.error) {
      return false;
    }

    // No manager access
    if (path && path === 'manager' && meUser.rolRolid !== 1) {
      return false;
    }

    // No cashier access
    if (path && path === 'cashier' && meUser.rolRolid !== 2) {
      return false;
    }

    return true
  }

  return false;
};
