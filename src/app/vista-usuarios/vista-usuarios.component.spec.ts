import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VistaUsuariosComponent } from './vista-usuarios.component';

describe('VistaUsuariosComponent', () => {
  let component: VistaUsuariosComponent;
  let fixture: ComponentFixture<VistaUsuariosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [VistaUsuariosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VistaUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
