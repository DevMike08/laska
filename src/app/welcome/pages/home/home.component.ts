import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cards: any[] = [
    { name: 'Card 1', imageUrl: 'url1.jpg' },
    { name: 'Card 2', imageUrl: 'url2.jpg' },
    { name: 'Card 3', imageUrl: 'url3.jpg' }
  ];
}
