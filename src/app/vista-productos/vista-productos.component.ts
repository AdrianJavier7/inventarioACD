import {Component, OnInit, ViewChild} from '@angular/core';
import {NavComponent} from "../nav/nav.component";
import {IonicModule, IonModal} from "@ionic/angular";
import {ProductoService} from "../services/producto.service";
import {Producto} from "../modelos/Producto";
import {Proveedor} from "../modelos/Proveedor";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-vista-productos',
  templateUrl: './vista-productos.component.html',
  styleUrls: ['./vista-productos.component.scss'],
  standalone: true,
  imports: [
    NavComponent,
    IonicModule,
    FormsModule,
    CommonModule
  ]
})
export class VistaProductosComponent  implements OnInit {

  productoNuevo: Producto = new Producto();
  productos: Producto[] = [];
  porNombre: string = '';
  porCategoria: string = '';
  porProveedor: string = '';

  constructor(private productoService: ProductoService) {}

  @ViewChild(IonModal) modal: IonModal = {} as IonModal;
  name?: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<any>;
  }

  getProductos(): void {
    this.productoService.getProductos().subscribe({
      next: (data: Proveedor[]) => {
        console.info('Hola soy la lista de productos', data);
        this.productos = data;
      },
      error: (error: any) => console.error('Error: ', error),
      complete: () => console.log('Petición completada')
    });
  }

  buscarProducto(): void {
    this.productoService.getProductoNombre(this.porNombre).subscribe({
      next: (data: Producto) => {
        this.productos = [data];
        console.info('Hola soy el producto', data);
      },
      error: (error: any) => {
        console.error('Error: ', error);
        this.getProductos();
      },
      complete: () => console.log('Petición completada')
    });
  }

  buscarCategoria(): void{
    this.productoService.getProductosCategoriaNombre(this.porCategoria).subscribe({
      next: (data: Producto[]) => {
        this.productos = data;
        console.info('Hola soy la lista de productos', data);
      },
      error: (error: any) => {
        console.error('Error: ', error);
        this.getProductos();
      },
      complete: () => console.log('Petición completada')
    });
  }

  buscarProveedor(): void{
    this.productoService.getProductosProveedorId(this.porProveedor).subscribe({
      next: (data: Producto[]) => {
        this.productos = data;
        console.info('Hola soy la lista de productos', data);
      },
      error: (error: any) => {
        console.error('Error: ', error);
        this.getProductos();
      },
      complete: () => console.log('Petición completada')
    });
  }

  anyadirProducto(): void {
    this.productoService.anyadirProducto(this.productoNuevo).subscribe({
      next: (data: Producto) => {
        console.info('Hola soy el producto', data);
        this.getProductos();
      },
      error: (error: any) => console.error('Error: ', error),
      complete: () => console.log('Petición completada')
    });
  }

  ngOnInit() {
    this.getProductos();
  }

}
