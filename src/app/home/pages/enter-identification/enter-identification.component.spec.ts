import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterIdentificationComponent } from './enter-identification.component';

describe('EnterIdentificationComponent', () => {
  let component: EnterIdentificationComponent;
  let fixture: ComponentFixture<EnterIdentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnterIdentificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnterIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
