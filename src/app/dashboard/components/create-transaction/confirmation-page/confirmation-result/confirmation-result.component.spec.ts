import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationResultComponent } from './confirmation-result.component';

describe('ConfirmationPageComponent', () => {
  let component: ConfirmationResultComponent;
  let fixture: ComponentFixture<ConfirmationResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
