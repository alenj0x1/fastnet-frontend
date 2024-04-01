import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../../../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cashier',
  templateUrl: './create-cashier.component.html',
  styleUrl: './create-cashier.component.css'
})
export class CreateCashierComponent {
  public form: FormGroup;
  private RestService = inject(RestService)
  private router = inject(Router)

  constructor() {
    this.form = new FormGroup({
      username: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    })
  }

  public async onSubmit() {
    const responseCreateCashier = await this.RestService.createCashier(this.form.value)

    if (!responseCreateCashier.error) {
      this.router.navigate(['/manager/'])
    }
  }
}
