import {Component, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from "@angular/common";
import {IonicModule, IonModal} from "@ionic/angular";
import {RouterModule} from "@angular/router";
import {NavComponent} from "../nav/nav.component";
import {Proveedor} from "../modelos/Proveedor";
import {FormsModule} from "@angular/forms";
import {Usuario} from "../modelos/Usuario";
import {ProveedorService} from "../services/proveedor.service";

@Component({
  selector: 'app-vista-proveedores',
  templateUrl: './vista-proveedores.component.html',
  styleUrls: ['./vista-proveedores.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, NavComponent, FormsModule]
})
export class VistaProveedoresComponent  implements OnInit {

  @ViewChild(IonModal) modal: IonModal = {} as IonModal;
  name?: string;

  proveedorNuevo: Proveedor = {
    id: 0,
    nombre: ' ',
    telefono: '',
    email: '',
    direccion: ''
  }

  proveedores: Proveedor[] = [];

  constructor(private proveedorService: ProveedorService) { }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<any>;
  }

  anyadirProveedor(): void {
    this.proveedorService.anyadirProveedor(this.proveedorNuevo).subscribe({
      next: (data: Usuario) => {
        console.info(this.proveedorNuevo)
        console.info('Usuario añadido', data);
      },
      error: (error: any) => console.error('Error: ', error),
      complete: () => console.log('Petición completada')
    });
  }

  getProveedores(): void {
    this.proveedorService.getProveedores().subscribe({
      next: (data: Proveedor[]) => {
        console.info('Hola soy la lista de proveedores', data);
        this.proveedores = data;
      },
      error: (error: any) => console.error('Error: ', error),
      complete: () => console.log('Petición completada')
    });
  }

  ngOnInit() {
    this.getProveedores();
  }

}
