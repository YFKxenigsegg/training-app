import { Component } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-input-list',
  templateUrl: './input-list.component.html',
  styleUrls: ['./input-list.component.css']
})
export class InputListComponent {

  get inputs$() {
    return this.communicationService.currentInputs$;
  }

  constructor(private communicationService: CommunicationService) { }

  onInputChange(index: number, value: string): void {
    console.log('oninputchange')
    this.communicationService.updateInput(index, value);
  }
  trackByFn(index: number, item: string) {
    return index;
  }
}
