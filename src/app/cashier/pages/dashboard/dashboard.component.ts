import { Component, inject } from '@angular/core';
import { RestService } from '../../../services/rest.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  private RestService = inject(RestService);
  user: any = {};
  async ngOnInit(): Promise<void> {
    this.user = await this.RestService.me();
  }
}
