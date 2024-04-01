import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private router = inject(Router)

  constructor() {}

  public isLogged() {
    const token = localStorage.getItem('token');

    if (!token) return false;

    return true;
  }

  public logout() {
    localStorage.removeItem('token');

    this.router.navigate(['/auth'])
  }
}
