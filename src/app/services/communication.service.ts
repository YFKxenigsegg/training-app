import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Consts } from "../models/consts";

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private inputsSrc = new BehaviorSubject<string[]>([]);
  currentInputs$ = this.inputsSrc.asObservable();
  currentIsDisabled$ = this.currentInputs$.pipe(map(
    inputs => {
      console.log(inputs);
      return inputs.some(x => x !== Consts.ANGULAR) || !inputs.length
    }
  ));

  addInput(): void {
    const currentValue = this.inputsSrc.getValue();
    this.inputsSrc.next([...currentValue, '']);
  }

  updateInput(index: number, value: string): void {
    const currentInputs = this.inputsSrc.getValue();
    this.inputsSrc.next(currentInputs.map((x, i) => i === index ? value : x));
  }
}
