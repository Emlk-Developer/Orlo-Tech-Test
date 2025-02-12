import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './model/post';

@Injectable({
  providedIn: 'root'
})

export class FeedsService {

  private apiUrl = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fpodcasts.files.bbci.co.uk%2Fp01plr2p.rss"

  constructor(private http: HttpClient) { }

  fetchPosts(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
}
