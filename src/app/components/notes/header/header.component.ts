import { Component, OnInit } from '@angular/core';
import { Tag } from '../../../models/interfaces/tag.interface';
import { NoteService } from 'src/app/services/note.service';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  tags: Tag[];
  labels: any[];

  constructor(private noteService: NoteService, private tagService: TagService) { }

  ngOnInit(): void {
    this.tags = this.tagService.getAll();
    this.labels = this.tags.map(x => ({
      ...x,
      isSelected: false
    }));
  }

  filterBy(value: string) {
    const label = this.labels.find(x => x.value === value);
    if (!label.isSelected) {
      label.isSelected = true;
      this.noteService.filterBy(value);
    } else {
      label.isSelected = false;
      // this.noteService.filterBy(''); ??
    }
  }
}
