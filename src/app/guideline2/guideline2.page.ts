import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCardContent, IonCard, IonCardTitle, IonCardSubtitle, IonIcon } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBackCircleOutline } from 'ionicons/icons'; // Changed from 'arrow-back-circle-outline' to 'arrowBackCircleOutline'

@Component({
  selector: 'app-guideline2',
  templateUrl: './guideline2.page.html',
  styleUrls: ['./guideline2.page.scss'],
  standalone: true,
  imports: [IonIcon, IonCardContent, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardTitle, IonCardSubtitle, RouterLink], 
})
export class Guideline2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
