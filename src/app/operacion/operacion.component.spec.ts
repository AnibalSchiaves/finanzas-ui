import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionComponent } from './operacion.component';

describe('OperacionComponent', () => {
  let component: OperacionComponent;
  let fixture: ComponentFixture<OperacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperacionComponent]
    });
    fixture = TestBed.createComponent(OperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
