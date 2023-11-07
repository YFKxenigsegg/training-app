import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  tags = this.tagService.getAll();

  get selectedTags$() {
    return this.noteService.selectedTags$;
  }

  constructor(private noteService: NoteService, private tagService: TagService) { }

  filterBy(value: string) {
    this.noteService.toggleTag(value);
  }
}
