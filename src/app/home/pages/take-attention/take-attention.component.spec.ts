import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeAttentionComponent } from './take-attention.component';

describe('TakeAttentionComponent', () => {
  let component: TakeAttentionComponent;
  let fixture: ComponentFixture<TakeAttentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TakeAttentionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TakeAttentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
