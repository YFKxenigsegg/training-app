import { Injectable } from '@angular/core';
import { Note } from '../models/interfaces/note.interface';
import { BehaviorSubject, combineLatestWith } from "rxjs";
import { map } from "rxjs/operators";
import { TabNames } from "../consts/tabs";
import { TagService } from './tag.service';

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
      tag: {
        value: 'shopping',
        color: 'purple'
      }
    },
    {
      title: 'Quotes',
      details: 'In the plenitude of their relationship, Florentina Ariza asked himself ...',
      isDeleted: false,
      isFavorite: true,
      tag: {
        value: 'other things',
        color: 'orange'
      }
    },
    {
      title: 'Movie watchlist',
      details: 'The Blues Brothers\nExtremely Loud & Incredibly Close\nMoonlight',
      isDeleted: false,
      isFavorite: false,
      tag: {
        value: 'other things',
        color: 'orange'
      }
    }
    ,
    {
      title: 'Business note',
      details: 'Invest money',
      isDeleted: false,
      isFavorite: false,
      tag: {
        value: 'business',
        color: 'pink'
      }
    }
  ];
  private notesSrc = new BehaviorSubject<Note[]>(this.mockedData);
  private searchSrc = new BehaviorSubject<string>('');
  private tabsSrc = new BehaviorSubject<string>(TabNames.ALL_NOTES);
  private tagsSrc = new BehaviorSubject<string[]>([]);
  allNotes$ = this.notesSrc.asObservable();
  search$ = this.searchSrc.asObservable();
  tabs$ = this.tabsSrc.asObservable();
  tags$ = this.tagsSrc.asObservable();
  currentNotes$;

  constructor(private tagService: TagService) {
    this.tagsSrc.next(tagService.getAll()
      .map(x => x.value));
    this.currentNotes$ = this.allNotes$.pipe(
      combineLatestWith(this.search$, this.tabs$, this.tags$),
      map(([notes, search, tabs, tags]) => {
        return notes
          .filter(x => x.title.toLowerCase().includes(search))
          .filter(x => {
            if (tabs === TabNames.TRASH) {
              return x.isDeleted;
            } else if (tabs === TabNames.FAVORITE) {
              return x.isFavorite;
            }
            return !x.isDeleted;
          })
          .filter(x => {
            return tags ? tags.includes(x.tag.value) : true;
          })
      })
    );
  }

  create(note: Note) {
    const currentValue = this.notesSrc.getValue();
    this.notesSrc.next([...currentValue, note]);
  }

  search(text: string) {
    this.searchSrc.next(text.toLowerCase());
  }

  filterBy(value: string) {
    const currentValue = this.tagsSrc.getValue();
    if (!this.tagsSrc.value.includes(value)) {
      this.tagsSrc.next([...currentValue, value]);
      console.log(currentValue); //delete duplication
    }
    else {
      console.log(currentValue + '236');
      this.tagsSrc.next([value]);
    }
  }

  showTab(name: string) {
    this.tabsSrc.next(name);
  }
}
