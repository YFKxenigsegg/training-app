import { Component } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string = '';

  constructor(private noteService: NoteService) { }

  performSearch(): void {
    if (this.query) {
      this.noteService.search(this.query);
    }
  }
}
