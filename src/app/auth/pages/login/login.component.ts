import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../../../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private RestService = inject(RestService);
  private router = inject(Router)
  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      username: new FormControl('',
        [Validators.required]
      ),
      password: new FormControl('',
        [Validators.required]
      )
    })
  }

  public async onSubmit() {
    const response = await this.RestService.authentication(this.form.value);

    if (!response.error) {
      localStorage.setItem('token', response.token);

      const meUser = await this.RestService.me();

      this.router.navigate([meUser.rolRolid === 1 ? '/manager' : '/cashier'])
    }
  }
}
