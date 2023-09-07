import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGastosComponent } from './list-gastos.component';

describe('ListGastosComponent', () => {
  let component: ListGastosComponent;
  let fixture: ComponentFixture<ListGastosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListGastosComponent]
    });
    fixture = TestBed.createComponent(ListGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
