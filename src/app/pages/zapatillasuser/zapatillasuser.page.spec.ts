import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZapatillasuserPage } from './zapatillasuser.page';

describe('ZapatillasuserPage', () => {
  let component: ZapatillasuserPage;
  let fixture: ComponentFixture<ZapatillasuserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ZapatillasuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
