import { Injectable } from '@angular/core';
import { CategoriesType } from './model/category';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private addedFeeds = new BehaviorSubject<CategoriesType[]>([]);
  cat$ = this.addedFeeds.asObservable();
  constructor() { }
  addFeed(feedName: string, feedUrl: string) {
    const currentCategories = this.addedFeeds.value
    const newFeed = {feedName, feedUrl};
    this.addedFeeds.next([...currentCategories, newFeed]) ;
    
  }
}
