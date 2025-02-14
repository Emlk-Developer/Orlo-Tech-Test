import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FeedsService } from './feeds.service';
import { Input } from '@angular/core';
import { FeedsType } from './model/feed';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FeedCardComponent, SideBarComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss' 
})
export class AppComponent {
  title = 'orloTechTest';

  constructor(private feedsService: FeedsService) {}

  //from the fetch request, store the items to rssFeeds, 
  //also extract all the categories and store them to feedCategories
  ngOnInit() {
    this.feedsService.fetchPosts().subscribe(posts => {
      this.rssFeeds = posts.items

      //extract all the categories, store in an array and then create a Set of unique categories
      this.feedCategories = posts.items.map((item:any) => item.categories).flat()
      this.categorySelection = Array.from(new Set(this.feedCategories))

      //only show feeds that have their first category listed in the array of the categorySelection
      this.rssFeedsInCategorySelection = this.rssFeeds?.filter((feed) => this.categorySelection?.includes(feed.categories[0]));
      this.filteredCategories = this.categorySelection; 
    } );
  }

  @Input() 
  rssFeeds?: FeedsType[] | undefined; 
  @Input()
  feedCategories: [] | undefined;
  @Input()
  categorySelection: string[] | undefined;
  @Input()
  rssFeedsInCategorySelection: FeedsType[] | undefined;



  //Sidebar
  /* I imagine the sidebar functions need to be moved to this parent app level
   in order to apply the filtered categories to the feed but I cant think of the logic on how to do this
   Duplication of code from side-bar.components.ts
   */

  @Input()
  filteredCategories: string[] | undefined
 
  _filteredValue: string = '';

  get filteredValue() {
    return this._filteredValue;
  }

  set filteredValue(value: string) {
    this._filteredValue = value;
    this.filteredCategories = this.filteredFeed(value);
    console.log(this.rssFeedsInCategorySelection)
  }

  filteredFeed(filteredText: string) {
    if (this.filteredCategories?.length == 0 || filteredText.length <= 1 ) {
      return this.categorySelection;
    } else {
      return this.filteredCategories?.filter((category: string) => category.toLocaleLowerCase() === filteredText.toLocaleLowerCase())
    }
  }



}
