import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { Login } from "../modelos/Login";
import { firstValueFrom } from 'rxjs';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common"; // Manejo de observables con promesas

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, RouterModule],
})
export class HomePage {
  login: Login = new Login();
  errorMessage: string = '';

  constructor(private loginService: UsuarioService, private router: Router) {}

  async onLogin() {
    if (!this.login.email || !this.login.contrasena) {
      this.errorMessage = 'Por favor, completa todos los campos';
      return;
    }

    try {
      const response: any = await firstValueFrom(this.loginService.authenticate(this.login));
      localStorage.setItem('token', response.token);
      this.router.navigate(['/productos']);
    } catch (error) {
      this.errorMessage = 'Error en el inicio de sesión. Verifica tus credenciales.';
    }
  }
}
