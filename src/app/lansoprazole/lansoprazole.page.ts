import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCardContent, IonCard, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lansoprazole',
  templateUrl: './lansoprazole.page.html',
  styleUrls: ['./lansoprazole.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardTitle, IonCardSubtitle, RouterLink]
})
export class LansoprazolePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
