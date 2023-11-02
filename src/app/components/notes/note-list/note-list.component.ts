import { Component } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent {

  get notes$() {
    return this.noteService.currentNotes$;
  }

  constructor(private noteService: NoteService) { }
}
