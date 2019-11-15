import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public search = "Text to search";

  constructor() { }

  ngOnInit() {
  }

  searching() {
    console.log(this.search);
  }

}
