import { Component } from '@angular/core';
import { Icons } from 'src/app/consts/icons';
import { Tabs } from 'src/app/consts/tabs';
import { Tab } from 'src/app/models/interfaces/tab.interface';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.css']
})
export class SidebarListComponent {
  tabs: Tab[] = [
    {
      name: Tabs.AllNotes,
      icon: Icons.FILE_TEXT
    },
    {
      name: Tabs.Trash,
      icon: Icons.TRASH
    },
    {
      name: Tabs.Favorite,
      icon: Icons.STAR
    }
  ];

  constructor(private noteService: NoteService) { }

  onTabClicked(clickedTab: Tab) {
    for (let tab of this.tabs) {
      tab.isSelected = (tab === clickedTab);
    }
    this.noteService.showTab(clickedTab)
  }
}
