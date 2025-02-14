import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoriesType } from '../model/category';


@Component({
  selector: 'app-side-bar',
  imports: [CommonModule, FormsModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {


  @Input()
  categorySelection: string[] | undefined;
  @Input()
  filteredCategories: string[] | undefined;
  @Input()
  newCategoryFeeds: CategoriesType | undefined;
 
  _filteredValue: string = '';
  _feedName: string = '';
  _feedUrl: string = '';
 
  get filteredValue() {
    return this._filteredValue;
  }

  set filteredValue(value: string) {
    this._filteredValue = value;
    this.filteredCategories = this.filteredFeed(value);
  }

  get feedName() {
    return this._feedName;
  }

  set feedName(feedNameValue:string) {
   this._feedName = feedNameValue;
   // this.filteredCategories = this.addFeed(feedNameValue, this.feedUrl)
  }

  get feedUrl() {
    return this._feedUrl;
  }

  set feedUrl(feedUrlValue: string) {
    this._feedUrl = feedUrlValue;
  }


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

  addFeed(feedName: string, feedUrl: string) {
    const newFeed = {feedName, feedUrl};
    // not sure why i can added a new category to the object
    // const addedFeed = [...this.newCategoryFeeds, newFeed];
    
    /*tried to push a new category to the list of categories */
    //const addedFeed = this.filteredCategories?.push(feedName)
    // // @ts-ignore
    // this.filteredCategories = addedFeed;

  }

  




}
