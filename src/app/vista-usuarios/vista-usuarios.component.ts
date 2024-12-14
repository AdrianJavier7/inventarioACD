import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {RouterModule} from "@angular/router";
import {NavComponent} from "../nav/nav.component";

@Component({
  selector: 'app-vista-usuarios',
  templateUrl: './vista-usuarios.component.html',
  styleUrls: ['./vista-usuarios.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, NavComponent]
})
export class VistaUsuariosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
