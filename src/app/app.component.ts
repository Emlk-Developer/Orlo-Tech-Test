import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeedCardComponent } from './feed-card/feed-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FeedCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'orloTechTest';

// items= [
//   {
//     title: "Chestnut Carbon gets $160M to turn old farms into forests",
//   pubDate: "2025-02-12 12:30:00",
//   author: "Emlk De Chant" 
//   },
//   {
//     title: "Kaya Carbon gets $160M to turn old farms into forests",
//   pubDate: "2025-02-12 12:30:00",
//   author: "Kaya De Chant" 
//   },
//   {
//     title: "Naomi Carbon gets $160M to turn old farms into forests",
//   pubDate: "2025-02-12 12:30:00",
//   author: "Naomi De Chant" 
//   }
// ];
}
