import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton, IonCard, IonCardTitle, IonCardContent, IonCardSubtitle, IonCardHeader } from '@ionic/angular/standalone';
import { Router } from '@angular/router';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton, IonCard, IonCardTitle, IonCardContent, IonCardSubtitle, IonCardHeader],
})
export class CatalogoPage{
  constructor(private router: Router) {}

  navigatehome(){
    this.router.navigate(['/home']);
  }

  navigatecompra(){
    this.router.navigate(['/compra'])
  }
}
