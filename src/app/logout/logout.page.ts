import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCardTitle, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonDatetime, IonCardContent, IonCardSubtitle} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
  standalone: true,
  imports: [RouterLink, IonCardTitle, IonCard, IonCardContent, IonCardSubtitle,IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButton, IonCard, IonDatetime ]
})
export class LogoutPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async showSecondButtonAlert() {
    const alert = await this.alertController.create({
      header: 'Sorry',
      message: 'password was changed 9 hours ago.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
