import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {Usuario} from "../modelos/Usuario";
import {UsuarioService} from "../services/usuario.service";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, RouterModule]
})
export class RegistroComponent  implements OnInit {

  registro : Usuario = new Usuario();

  errorMessage: string = '';



  constructor(private usuarioService: UsuarioService, private router: Router) { }

  onRegister(): void {
    this.registro.rol = 'usuario';
    this.usuarioService.anyadirUsuario(this.registro).subscribe({
      next: (data: Usuario) => {
        console.info(this.registro)
        console.info('Usuario añadido', data);
        this.router.navigate(['/home']);
      },
      error: (error: any) => console.error('Error: ', error),
      complete: () => console.log('Petición completada')
    });
  }

  ngOnInit() {}

}
