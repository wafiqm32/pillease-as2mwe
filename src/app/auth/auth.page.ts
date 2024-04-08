import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonItem, IonInput, IonContent, IonHeader, IonTitle, IonToolbar,IonCard,IonCardContent, IonButton, IonCardTitle} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { IonCardSubtitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [IonInput, IonItem, IonButton, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard,IonCardContent, RouterLink]
})
export class AuthPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor() { }

  ngOnInit() {
  }

  onLogin() {
    const correctEmail = 'Wafiq3222@gmail.com';
    const correctPassword = '12345678 ';
  
    if (this.email === correctEmail && this.password === correctPassword ) {
      // Navigate to Tab1Page
    } else {
      // Show an error message
    }
  }}