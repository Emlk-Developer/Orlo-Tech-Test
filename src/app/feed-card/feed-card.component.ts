import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FeedsType } from '../model/feed';



@Component({
  selector: 'app-feed-card',
  // standalone: true,
  imports: [CommonModule],
  templateUrl: './feed-card.component.html',
  styleUrl: './feed-card.component.scss',
})
export class FeedCardComponent {

  @Input()
  rssFeedsInCategorySelection: FeedsType[] | undefined;

}
