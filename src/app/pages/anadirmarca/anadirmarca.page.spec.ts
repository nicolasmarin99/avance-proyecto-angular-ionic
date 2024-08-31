import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnadirmarcaPage } from './anadirmarca.page';

describe('AnadirmarcaPage', () => {
  let component: AnadirmarcaPage;
  let fixture: ComponentFixture<AnadirmarcaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirmarcaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
