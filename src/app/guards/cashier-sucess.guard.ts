import { CanActivateFn } from '@angular/router';

export const cashierSucessGuard: CanActivateFn = (route, state) => {
  console.log({
    route,
    state
  })
  return true;
};
