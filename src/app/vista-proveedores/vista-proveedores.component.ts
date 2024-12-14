import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {RouterModule} from "@angular/router";
import {NavComponent} from "../nav/nav.component";

@Component({
  selector: 'app-vista-proveedores',
  templateUrl: './vista-proveedores.component.html',
  styleUrls: ['./vista-proveedores.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, NavComponent]
})
export class VistaProveedoresComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
