import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard,IonCardContent, IonCardTitle,IonCardSubtitle, IonButton, IonIcon} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [RouterLink, IonIcon, IonButton, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCard,IonCardContent, IonCardTitle,IonCardSubtitle, RouterModule],
})
export class Tab3Page {
  constructor(private router: Router) {}

  goToParacetamolPage() {
    this.router.navigate(['/paracetamol']);
  }
}
