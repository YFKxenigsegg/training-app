import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteCardComponent } from "./note-card.component";

describe('CardComponent', () => {
  let component: NoteCardComponent;
  let fixture: ComponentFixture<NoteCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteCardComponent]
    });
    fixture = TestBed.createComponent(NoteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
