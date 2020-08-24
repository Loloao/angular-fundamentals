import { Component, OnInit } from '@angular/core';
import { Deck } from '../_models/deck';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'js-blackjack';

  ngOnInit() {
    const deck = new Deck(false);
    console.log(deck, 'deck');
  }
}
