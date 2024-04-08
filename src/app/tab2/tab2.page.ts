import { Component } from '@angular/core';
import { IonCardTitle, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonDatetime, IonCardContent, IonCardSubtitle} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CardService } from '../card.service';
import { ToastController } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [RouterLink, IonCardTitle, IonCard, IonCardContent, IonCardSubtitle,IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButton, IonCard, IonDatetime ]
})
export class Tab2Page {
  constructor(public toastController: ToastController, private cardService: CardService) {}

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  onAddCard() {
    const cardData = {
      title: 'Paracetemol',
      description: '2x a day, 2 pills, 8AM & 8PM',
      image: '../../assets/paracetemol.png' // Add this line with the path to your image
    };
    console.log('Adding card:', cardData);
    this.cardService.addCard(cardData);
    this.presentToast('Paracetemol added successfully.');
  }

  onAddAnotherCard() {
    const cardData = {
      title: 'Lanzoprazole',
      description: '2x a day, 2 pills, 8AM & 8PM',
      image: '../../assets/paracetemol.png' // Add this line with the path to your image
    };
    this.cardService.addCard(cardData);
    this.presentToast('Lanzopazole added successfully.');
  }
}
  
