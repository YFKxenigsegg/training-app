import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private src = new BehaviorSubject<string>('');
  src$ = this.src.asObservable();

  constructor() { }

  addInput() {
    
  }
}
