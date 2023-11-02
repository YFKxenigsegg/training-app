import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tab } from 'src/app/models/interfaces/tab.interface';

@Component({
  selector: 'app-sidebar-card',
  templateUrl: './sidebar-card.component.html',
  styleUrls: ['./sidebar-card.component.css']
})
export class SidebarCardComponent {
  @Input() tab: Tab;
  @Output() selected = new EventEmitter<Tab>();

  selectTab(): void {
    this.selected.emit(this.tab);
  }
}
