import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {RouterModule} from "@angular/router";
import {Login} from "../modelos/Login";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ CommonModule,IonicModule, RouterModule,FormsModule ]
})
export class HomePage {

  login: Login = new Login();
  constructor() {}
}
