import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private httpClient: HttpClient) { }

  getProductos(){
    return this.httpClient.get<any>("/api/productos/todos");
  }

  anyadirProducto(producto:any){
    return this.httpClient.post<any>("/api/productos/guardar", producto);
  }

  getProductoNombre(nombre:string){
    return this.httpClient.get<any>("/api/productos/nombre/"+nombre);
  }

  getProductosProveedorId(id:number){
    return this.httpClient.get<any>("/api/productos/proveedorDTO/"+id);
  }

  getProductosCategoriaNombre(nombre:string){
    return this.httpClient.get<any>("/api/productos/categoria/"+nombre);
  }
}
