import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCardContent, IonCard, IonCardTitle, IonCardSubtitle, IonIcon } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBackCircleOutline } from 'ionicons/icons'; // Changed from 'arrow-back-circle-outline' to 'arrowBackCircleOutline'

@Component({
  selector: 'app-paracetemol',
  templateUrl: './paracetemol.page.html',
  styleUrls: ['./paracetemol.page.scss'],
  standalone: true,
  imports: [IonIcon, IonCardContent, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardTitle, IonCardSubtitle, RouterLink], 
})
export class ParacetemolPage implements OnInit{

  constructor() {
    addIcons({ arrowBackCircleOutline }); // Corrected the icon name to match with the import statement
  }

  ngOnInit() {
  }

}
