import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Login} from "../modelos/Login";
import {Usuario} from "../modelos/Usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient : HttpClient) { }

  getUsuario(login:Login){
    return this.httpClient.post<any>("/api/usuarios/login)", {"body" : login});
  }

  getUsuarios(){
    return this.httpClient.get<any>("/api/usuarios/todos");
  }

  anyadirUsuario(usuario:Usuario){
    return this.httpClient.post<any>("/api/usuarios/guardar", usuario);
  }
}
