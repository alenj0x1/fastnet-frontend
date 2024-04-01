import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../../../services/rest.service';

@Component({
  selector: 'app-take-attention',
  templateUrl: './take-attention.component.html',
  styleUrl: './take-attention.component.css'
})
export class TakeAttentionComponent {
  private RestService = inject(RestService)
  private route = inject(ActivatedRoute)
  public isClient: boolean = false;

}
