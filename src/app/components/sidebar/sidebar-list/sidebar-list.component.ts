import { Component } from '@angular/core';
import { Tabs } from 'src/app/consts/tabs';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.css']
})
export class SidebarListComponent {
  tabs = Tabs;

  constructor(private noteService: NoteService) { }

  onTabClicked(tabName: string) {
    for (let tab of this.tabs) {
      tab.isSelected = (tab.name === tabName);
    }
    this.noteService.showTab(tabName)
  }
}
