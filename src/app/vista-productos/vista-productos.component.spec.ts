import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VistaProductosComponent } from './vista-productos.component';

describe('VistaProductosComponent', () => {
  let component: VistaProductosComponent;
  let fixture: ComponentFixture<VistaProductosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [VistaProductosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VistaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
