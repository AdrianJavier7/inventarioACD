import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VistaProveedoresComponent } from './vista-proveedores.component';

describe('VistaProveedoresComponent', () => {
  let component: VistaProveedoresComponent;
  let fixture: ComponentFixture<VistaProveedoresComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [VistaProveedoresComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VistaProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
