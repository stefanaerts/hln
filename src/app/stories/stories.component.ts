// stories.component.ts

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HackerNewsAPIService } from '../hackernews-api.service';


@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})

export class StoriesComponent implements OnInit {
  items;

  constructor(private _hackerNewsAPIService: HackerNewsAPIService) { }

  ngOnInit() {
    // this._hackerNewsAPIService.fetchStories()
    //   .subscribe(
    //   items => this.items = items,
    //   error => console.log('Error fetching stories'));
    this._hackerNewsAPIService.fetchStories('news', 1)
      .subscribe(
      items => this.items = items,
      error => console.log('Error fetching stories'));

  }
}
