import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private httpClient : HttpClient) { }

  getProveedores(){
    return this.httpClient.get<any>("/api/proveedores/todos");
  }

  anyadirProveedor(proveedor:any){
    return this.httpClient.post<any>("/api/proveedores/guardar", proveedor);
  }

  eliminarProveedor(id:number){
    return this.httpClient.delete<any>("/api/proveedores/eliminar/"+id);
  }
}
