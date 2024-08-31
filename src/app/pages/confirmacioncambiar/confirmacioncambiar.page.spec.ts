import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmacioncambiarPage } from './confirmacioncambiar.page';

describe('ConfirmacioncambiarPage', () => {
  let component: ConfirmacioncambiarPage;
  let fixture: ComponentFixture<ConfirmacioncambiarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacioncambiarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
