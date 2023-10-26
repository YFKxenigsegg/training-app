import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-input-list',
  templateUrl: './input-list.component.html',
  styleUrls: ['./input-list.component.css']
})
export class InputListComponent implements OnInit {
  list: string[] = [];

  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    this.communicationService.src$.subscribe(x => this.list.push(x));
  }


  
}
