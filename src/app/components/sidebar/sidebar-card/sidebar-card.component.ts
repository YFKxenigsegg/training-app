import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar-card',
  templateUrl: './sidebar-card.component.html',
  styleUrls: ['./sidebar-card.component.css']
})
export class SidebarCardComponent {
  @Input() name: string;
  @Input() icon: string;
  @Input() isSelected: boolean;
  @Output() tabSelected = new EventEmitter<string>();

  selectTab(): void {
    this.tabSelected.emit(this.name);
  }
}
