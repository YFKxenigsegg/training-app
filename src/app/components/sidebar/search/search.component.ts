import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string = '';
  
  performSearch(): void {
    if (this.query) {
      // Do your search logic here
      console.log('Search for:', this.query);
    }
  }
}
