import { Injectable } from '@angular/core';
import { Tag } from "../models/interfaces/tag.interface";

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private mockedData: Tag[] = [
    {
      value: 'shopping',
      color: 'purple'
    },
    {
      value: 'business',
      color: 'pink'
    },
    {
      value: 'other things',
      color: 'orange'
    }
  ];

  constructor() { }

  getAll() {
    return this.mockedData;
  }
}
