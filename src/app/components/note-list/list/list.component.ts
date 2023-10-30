import { Component } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  get notes$() {
    return this.noteService.allNotes$;
  }

  constructor(private noteService: NoteService) { }
}
