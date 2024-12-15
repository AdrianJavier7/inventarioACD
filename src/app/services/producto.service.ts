import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Producto} from "../modelos/Producto";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private httpClient: HttpClient) { }

  getProductos(){
    return this.httpClient.get<any>("/api/productos/todosDTO");
  }

  anyadirProducto(producto:Producto){
    return this.httpClient.post<any>("/api/productos/guardarDTO", producto);
  }

  getProductoNombre(nombre:string){
    return this.httpClient.get<any>("/api/productos/nombreDTO/"+nombre);
  }

  getProductosProveedorId(nombre:string){
    return this.httpClient.get<any>("/api/productos/proveedorDTO/"+nombre);
  }

  getProductosCategoriaNombre(nombre:string){
    return this.httpClient.get<any>("/api/productos/categoria/"+nombre);
  }

  eliminarProducto(id:number){
    return this.httpClient.delete<any>("/api/productos/eliminar/"+id);
  }
}
