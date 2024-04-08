import { Component } from '@angular/core';
import { IonImg, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonDatetime,IonButton, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CardService } from '../card.service';
import { IonCardContent,IonCardHeader } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [RouterLink, IonImg, IonCard, CommonModule, IonCardHeader, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonDatetime, IonButton, IonCardTitle, IonCardSubtitle, IonCardContent]


})
export class Tab1Page {
  cards : any[] = [];

  constructor(private cardService: CardService, private alertController: AlertController) {
    this.cardService.cardAdded.subscribe((cardData: any) => {
      this.cards.push(cardData);
    });

    this.cardService.cardExists.subscribe((cardData: any) => {
      this.showAlert(cardData);
    });
  }

  async showAlert(cardData: any) {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: `Already added`,
      buttons: ['OK']
    });

    await alert.present();
  }

  deleteCard(index: number) {
    this.cards.splice(index, 1);
  }
}