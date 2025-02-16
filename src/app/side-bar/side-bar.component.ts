import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoriesType } from '../model/category';
import { StateService } from '../state.service';

@Component({
  selector: 'app-side-bar',
  imports: [CommonModule, FormsModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

  feeds: CategoriesType[] = [];
  feedName: string = '';
  feedUrl: string = ''

  constructor(private stateService: StateService) {}
  ngOnInit(): void {
    this.stateService.cat$.subscribe(feeds => {
      this.feeds = feeds;
    });
  }

  @Input()
  categorySelection: string[] | undefined;
  @Input()
  filteredCategories: string[] | undefined;
  @Input()
  newCategoryFeeds: CategoriesType | undefined;
  @Output()
  inputValue = new EventEmitter<string>()
 
  _filteredValue: string = '';
  // _feedName: string = '';
  // _feedUrl: string = '';
 
  get filteredValue() {
    return this._filteredValue;
  }

  set filteredValue(value: string) {
    this._filteredValue = value;
    this.inputValue.emit(value);
    this.filteredCategories = this.filteredFeed(value);
  }

  // get feedName() {
  //   return this._feedName;
  // }

  // set feedName(feedNameValue:string) {
  //  this._feedName = feedNameValue;
  //  // this.filteredCategories = this.addFeed(feedNameValue, this.feedUrl)
  // }

  // get feedUrl() {
  //   return this._feedUrl;
  // }

  // set feedUrl(feedUrlValue: string) {
  //   this._feedUrl = feedUrlValue;
  // }


  filteredFeed(filteredText: string) {
    if (this.filteredCategories?.length == 0 || filteredText.length <= 1 ) {
      return this.categorySelection;
    } else {
      return this.filteredCategories?.filter((category: string) => category.toLocaleLowerCase() === filteredText.toLocaleLowerCase())
    }
  }

  removeCategory(removedCategory: string) {
    console.log(removedCategory);
    const remainingCategories = this.filteredCategories?.filter((category: string) => category.toLocaleLowerCase() !== removedCategory.toLocaleLowerCase())
    this.filteredCategories = remainingCategories;
  }


  addFeed(feedName: string, feedUrl: string): void {
      if (this.feedName.trim() && this.feedUrl.trim()) {
        this.stateService.addFeed(this.feedName, this.feedUrl);
        this.feedName = '';
        this.feedUrl = '';
      }
  }
 

}
