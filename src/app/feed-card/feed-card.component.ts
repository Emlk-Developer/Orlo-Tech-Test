import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FeedsService } from '../feeds.service';
import { Post } from '../model/post';


@Component({
  selector: 'app-feed-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feed-card.component.html',
  styleUrl: './feed-card.component.css'
})
export class FeedCardComponent {

  constructor(private feedsService: FeedsService) {}

  ngOnInit() {
    this.feedsService.fetchPosts().subscribe(posts => this.rssFeeds = posts.items );
  }

  @Input() rssFeeds: any; 

}
