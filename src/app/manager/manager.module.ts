import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgIconsModule } from '@ng-icons/core';
import { matAttachMoney, matAssignmentInd, matPreview } from '@ng-icons/material-icons/baseline'
import { CardComponent } from '../components/card/card.component';
import { CardOptionComponent } from '../components/card-option/card-option.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CardComponent,
    CardOptionComponent
    ],
    imports: [
    CommonModule,
    ManagerRoutingModule,
    NgIconsModule.withIcons({ matAttachMoney, matAssignmentInd, matPreview })
  ]
})
export class ManagerModule { }
