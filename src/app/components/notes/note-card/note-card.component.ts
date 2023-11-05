import { Component, Input } from '@angular/core';
import { Note } from 'src/app/models/interfaces/note.interface';
import { TagColor } from "../../../consts/tag-color";

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent {
  @Input() note: Note;
  // icons: string[] = []; // optimization for html

  get color() {
    return TagColor[this.note.tag];
  }
}
