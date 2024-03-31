import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../../../services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private RestService = inject(RestService);
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
      console.log(meUser);
    }
  }
}
