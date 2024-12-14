import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  imports: [ CommonModule,IonicModule,RouterModule ]
})
export class NavComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
