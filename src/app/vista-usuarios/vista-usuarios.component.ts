import {Component, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from "@angular/common";
import {IonicModule, IonModal} from "@ionic/angular";
import {RouterModule} from "@angular/router";
import {NavComponent} from "../nav/nav.component";
import {FormsModule} from "@angular/forms";
import {Usuario} from "../modelos/Usuario";
import {UsuarioService} from "../services/usuario.service";

@Component({
  selector: 'app-vista-usuarios',
  templateUrl: './vista-usuarios.component.html',
  styleUrls: ['./vista-usuarios.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, NavComponent, FormsModule]
})
export class VistaUsuariosComponent  implements OnInit {

  usuarioNuevo = {
    nombre: '',
    email: '',
    contrasena: '',
    rol: ''
  };

  @ViewChild(IonModal) modal: IonModal = {} as IonModal;
  name?: string;
  usuarios: Usuario[] = [];

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<any>;
  }

  constructor(private usuarioService: UsuarioService) { }

  anyadirUsuario(): void {
    this.usuarioService.anyadirUsuario(this.usuarioNuevo).subscribe({
      next: (data: Usuario) => {
        console.info(this.usuarioNuevo)
        console.info('Usuario añadido', data);
      },
      error: (error: any) => console.error('Error: ', error),
      complete: () => console.log('Petición completada')
    });
  }

  getUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe({
      next: (data: Usuario[]) => {
        console.info('Hola soy la lista de usuarios', data);
        this.usuarios = data;
      },
      error: (error: any) => console.error('Error: ', error),
      complete: () => console.log('Petición completada')
    });
  }

  ngOnInit() {
    this.getUsuarios();
  }

}
