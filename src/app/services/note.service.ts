import { Injectable } from '@angular/core';
import { Note } from '../models/note.interface';
import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { Type } from '../models/type.enum';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private mockedData: Note[] = [
    {
      Title: 'Grocery list',
      Details: 'Bread, Cereal, Rice and Pasta: Bread\nVegetables: Carrots\nMilk, Yogurt and Cheese: Milk',
      IsDeleted: false,
      IsFavorite: false,
      Type: Type.SHOPPING
    },
    {
      Title: 'Quotes',
      Details: 'In the plenitude of their relationship, Florentina Ariza asked himself ...',
      IsDeleted: false,
      IsFavorite: true,
      Type: Type.OTHERTHINGS
    },
    {
      Title: 'Movie watchlist',
      Details: 'The Blues Brothers\nExtremely Loud & Incredibly Close\nMoonlight',
      IsDeleted: false,
      IsFavorite: false,
      Type: Type.OTHERTHINGS
    }
  ];
  private notesSrc = new BehaviorSubject<Note[]>(this.mockedData);
  allNotes$ = this.notesSrc.asObservable();
  deletedNotes$ = this.allNotes$.pipe(
    map(notes => notes.filter(x => !x.IsDeleted))
  );
  favoriteNotes$ = this.allNotes$.pipe(
    map(notes => notes.filter(x => !x.IsFavorite))
  );

  create(note: Note): void {
    const currentValue = this.notesSrc.getValue();
    this.notesSrc.next([...currentValue, note]);
  }

  search(text: string) {

  }
}
