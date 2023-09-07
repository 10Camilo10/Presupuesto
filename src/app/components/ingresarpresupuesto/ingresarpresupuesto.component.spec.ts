import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarpresupuestoComponent } from './ingresarpresupuesto.component';

describe('IngresarpresupuestoComponent', () => {
  let component: IngresarpresupuestoComponent;
  let fixture: ComponentFixture<IngresarpresupuestoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresarpresupuestoComponent]
    });
    fixture = TestBed.createComponent(IngresarpresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
