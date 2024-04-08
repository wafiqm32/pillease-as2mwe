import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard,IonCardContent, IonCardTitle,IonCardSubtitle, IonButton, IonIcon, IonDatetime } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBackCircleOutline } from 'ionicons/icons'; // Changed from 'arrow-back-circle-outline' to 'arrowBackCircleOutline'


@Component({
  selector: 'app-historylog',
  templateUrl: './historylog.page.html',
  styleUrls: ['./historylog.page.scss'],
  standalone: true,
  imports: [IonDatetime, RouterLink, IonIcon, IonButton, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCard,IonCardContent, IonCardTitle,IonCardSubtitle, RouterModule],
})
export class HistorylogPage {
  constructor(private router: Router) {
    addIcons({ arrowBackCircleOutline });
  }

  
  goToParacetamolPage() {
    this.router.navigate(['/paracetamol']);
  }
}

