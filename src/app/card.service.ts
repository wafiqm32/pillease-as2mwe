import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cardAdded = new EventEmitter<any>();
  cardExists = new EventEmitter<any>();
  cards: any[] = [];

  constructor() { }

  addCard(cardData: any) {
    const cardExists = this.cards.some(card => card.title === cardData.title && card.description === cardData.description);

    if (cardExists) {
      this.cardExists.emit(cardData);
    } else {
      this.cards.push(cardData);
      this.cardAdded.emit(cardData);
    }
  }

  deleteCard(cardData: any) {
    const cardIndex = this.cards.findIndex(card => card.title === cardData.title && card.description === cardData.description);
    
    if (cardIndex !== -1) {
      this.cards.splice(cardIndex, 1) ;
    }
  }
}