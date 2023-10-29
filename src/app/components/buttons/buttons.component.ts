import { Component } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

  constructor(private communicationService: CommunicationService) { }

  get isDisabled$() {
    return this.communicationService.currentIsDisabled$;
  }

  addItem(): void {
    this.communicationService.addInput();
  }
}
