import { Injectable } from '@angular/core';
import { Note } from '../models/interfaces/note.interface';
import { BehaviorSubject, combineLatestWith } from "rxjs";
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
  private tabsSrc = new BehaviorSubject<string>(Tabs.AllNotes);
  private tagsSrc = new BehaviorSubject<string>('');
  allNotes$ = this.notesSrc.asObservable();
  search$ = this.searchSrc.asObservable();
  tabs$ = this.tabsSrc.asObservable();
  tags$ = this.tagsSrc.asObservable();
  currentNotes$;

  constructor() {
    this.currentNotes$ = this.allNotes$.pipe(
      combineLatestWith(this.search$, this.tabs$, this.tags$),
      map(([notes, search, tabs, tags]) => {
        return notes
          .filter(x => x.title.includes(search))
          .filter(x => {
            if (tabs === Tabs.Trash) {
              return x.isDeleted;
            } else if (tabs === Tabs.Favorite) {
              return x.isFavorite;
            }
            return !x.isDeleted;
          })
          .filter(x => {
            return tags ? tags === x.tag : true;
          })
      })
    );
  }

  create(note: Note) {
    const currentValue = this.notesSrc.getValue();
    this.notesSrc.next([...currentValue, note]);
  }

  search(text: string) {
    this.searchSrc.next(text);
  }

  filterBy(tag: Tag) {
    this.tagsSrc.next(tag);
  }

  showTab(tab: Tab) {
    this.tabsSrc.next(tab.name);
  }
}
