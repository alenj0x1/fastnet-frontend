import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-identification',
  templateUrl: './enter-identification.component.html',
  styleUrl: './enter-identification.component.css'
})
export class EnterIdentificationComponent { 
  public identification: string = 'noclient';

  onInput(e: any) {
    this.identification = e.target.value;
  }
}
