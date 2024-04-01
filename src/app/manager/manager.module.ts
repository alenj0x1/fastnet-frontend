import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgIconsModule } from '@ng-icons/core';
import { matAttachMoney, matAssignmentInd, matPreview } from '@ng-icons/material-icons/baseline'
import { CardComponent } from '../components/card/card.component';
import { CardOptionComponent } from '../components/card-option/card-option.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateCashierComponent } from './pages/create-cashier/create-cashier.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CardComponent,
    CardOptionComponent,
    CreateCashierComponent
    ],
    imports: [
    CommonModule,
    ManagerRoutingModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({ matAttachMoney, matAssignmentInd, matPreview })
  ]
})
export class ManagerModule { }
