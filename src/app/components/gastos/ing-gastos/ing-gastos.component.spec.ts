import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngGastosComponent } from './ing-gastos.component';

describe('IngGastosComponent', () => {
  let component: IngGastosComponent;
  let fixture: ComponentFixture<IngGastosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngGastosComponent]
    });
    fixture = TestBed.createComponent(IngGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
