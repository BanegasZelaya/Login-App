import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarNumerosComponent } from './agregar-numeros.component';

describe('AgregarNumerosComponent', () => {
  let component: AgregarNumerosComponent;
  let fixture: ComponentFixture<AgregarNumerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarNumerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
