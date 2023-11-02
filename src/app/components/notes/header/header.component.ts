import { Component } from '@angular/core';
import { Tag } from 'src/app/models/enums/tag.enum';
import { NoteService } from 'src/app/services/note.service';
import { Tags } from "../../../consts/tags";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  tags = [Tag.SHOPPING, Tag.BUSINESS, Tag.OTHERTHINGS];

  // tags = [
  //   {
  //     tag: Tag.SHOPPING,
  //     color: 'red'
  //   },
  //   {
  //     tag: Tag.BUSINESS,
  //     color: 'yellow'
  //   },
  //   {
  //     tag: Tag.OTHERTHINGS,
  //     color: 'green'
  //   }
  // ];

  constructor(private noteService: NoteService) { }

  filterBy(tag: Tag) {
    this.noteService.filterBy(tag);
  }
}
