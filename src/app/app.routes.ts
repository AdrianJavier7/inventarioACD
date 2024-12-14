import { Routes } from '@angular/router';
import {VistaProductosComponent} from "./vista-productos/vista-productos.component";

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'productos',
    loadComponent: () => import('./vista-productos/vista-productos.component').then((m) => m.VistaProductosComponent)
  },
  {
    path: 'usuarios',
    loadComponent: () => import('./vista-usuarios/vista-usuarios.component').then((m) => m.VistaUsuariosComponent)
  },
  {
    path:'proveedores',
    loadComponent: () => import('./vista-proveedores/vista-proveedores.component').then((m) => m.VistaProveedoresComponent)
  }
];
