import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { EnterIdentificationComponent } from './pages/enter-identification/enter-identification.component';
import { TakeAttentionComponent } from './pages/take-attention/take-attention.component';


@NgModule({
  declarations: [
    EnterIdentificationComponent,
    TakeAttentionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
