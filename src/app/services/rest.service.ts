import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private baseUrl = 'http://localhost:5259/api'
  private http = inject(HttpClient)

  constructor() { }

  authentication(formValue: any) {
    return firstValueFrom(
      this.http.post<any>(`${this.baseUrl}/authentication`, formValue)
    )
  }

  me() {
    return firstValueFrom(
      this.http.get<any>(`${this.baseUrl}/users/me`)
    )
  }

  users() {
    return firstValueFrom(
      this.http.get<any>(`${this.baseUrl}/users`)
    )
  }

  cashes() {
    return firstValueFrom(
      this.http.get<any>(`${this.baseUrl}/cash`)
    )
  }
}
