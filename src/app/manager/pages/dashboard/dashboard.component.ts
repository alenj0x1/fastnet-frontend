import { Component, OnInit, inject } from '@angular/core';
import { RestService } from '../../../services/rest.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  private RestService = inject(RestService);
  user: any = {};
  users: any = [];
  cashes: any = [];

  async ngOnInit(): Promise<void> {
    this.user = await this.RestService.me();
    this.users = await this.RestService.users();
    this.cashes = await this.RestService.cashes();
  }

  cashiersCount() {
    return this.users.filter((x: any) => x.rolRolid === 2).length;
  }

  cashesCount() {
    return this.cashes.length
  }
}
