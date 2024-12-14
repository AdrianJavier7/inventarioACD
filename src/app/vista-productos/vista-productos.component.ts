import { Component, OnInit } from '@angular/core';
import {NavComponent} from "../nav/nav.component";
import {IonicModule} from "@ionic/angular";
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

  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

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

  ngOnInit() {
    this.getProductos();
  }

}
