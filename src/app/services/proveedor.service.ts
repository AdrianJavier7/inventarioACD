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
}
