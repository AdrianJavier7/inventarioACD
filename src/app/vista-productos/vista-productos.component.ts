import { Component, OnInit } from '@angular/core';
import {NavComponent} from "../nav/nav.component";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-vista-productos',
  templateUrl: './vista-productos.component.html',
  styleUrls: ['./vista-productos.component.scss'],
  standalone: true,
  imports: [
    NavComponent,
    IonicModule
  ]
})
export class VistaProductosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
