import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterIdentificationComponent } from './pages/enter-identification/enter-identification.component';
import { TakeAttentionComponent } from './pages/take-attention/take-attention.component';

const routes: Routes = [
  {
    path: '',
    component: EnterIdentificationComponent
  },
  {
    path: 'takeAttention/:identification',
    component: TakeAttentionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
