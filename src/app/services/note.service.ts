import { Injectable } from '@angular/core';
import { Note } from '../models/interfaces/note.interface';
import { BehaviorSubject } from "rxjs";
import { map, withLatestFrom } from "rxjs/operators";
import { Tag } from '../models/enums/tag.enum';
import { Tab } from '../models/interfaces/tab.interface';
import { Tabs } from "../consts/tabs";

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private mockedData: Note[] = [
    {
      title: 'Grocery list',
      details: 'Bread, Cereal, Rice and Pasta: Bread\nVegetables: Carrots\nMilk, Yogurt and Cheese: Milk',
      isDeleted: false,
      isFavorite: false,
      tag: Tag.SHOPPING
    },
    {
      title: 'Quotes',
      details: 'In the plenitude of their relationship, Florentina Ariza asked himself ...',
      isDeleted: false,
      isFavorite: true,
      tag: Tag.OTHERTHINGS
    },
    {
      title: 'Movie watchlist',
      details: 'The Blues Brothers\nExtremely Loud & Incredibly Close\nMoonlight',
      isDeleted: false,
      isFavorite: false,
      tag: Tag.OTHERTHINGS
    }
  ];
  private notesSrc = new BehaviorSubject<Note[]>(this.mockedData);
  private searchSrc = new BehaviorSubject<string>('');
  currentNotes$;
  search$ = this.searchSrc.asObservable();
  allNotes$ = this.notesSrc.asObservable();
  deletedNotes$ = this.allNotes$.pipe(
    map(notes => notes.filter(x => x.isDeleted))
  );
  favoriteNotes$ = this.allNotes$.pipe(
    map(notes => notes.filter(x => x.isFavorite))
  );
  searchedNotes$ = this.allNotes$.pipe(
    withLatestFrom(this.search$),
    map(([notes, search]) => {
      notes.filter(x => x.title.includes(search));
    })
  );

  constructor() {
    this.currentNotes$ = this.allNotes$;
  }

  create(note: Note) {
    const currentValue = this.notesSrc.getValue();
    this.notesSrc.next([...currentValue, note]);
  }

  search(text: string) {
    this.searchSrc.next(text);
  }

  filterBy(tag: Tag) {
    this.currentNotes$ = this.currentNotes$.pipe(
      map(notes => notes.filter(x => x.tag === tag))
    );
  }

  showTab(tab: Tab) {
    switch (tab.name) {
      case Tabs.AllNotes:
        this.currentNotes$ = this.allNotes$;
        break;
      case Tabs.Trash:
        this.currentNotes$ = this.deletedNotes$;
        break;
      case Tabs.Favorite:
        this.currentNotes$ = this.favoriteNotes$;
        break;
      default:
        this.currentNotes$ = this.allNotes$;
        break;
    }
  }
}
