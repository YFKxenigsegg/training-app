import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NotesComponent } from './components/notes/notes.component';
import { HeaderComponent } from './components/notes/header/header.component';
import { NoteListComponent } from './components/notes/note-list/note-list.component';
import { SearchComponent } from './components/sidebar/search/search.component';
import { CardComponent } from '../app/common/card/card.component';
import { NoteCardComponent } from './components/notes/note-card/note-card.component';
import { SidebarListComponent } from './components/sidebar/sidebar-list/sidebar-list.component';
import { SidebarCardComponent } from './components/sidebar/sidebar-card/sidebar-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    HeaderComponent,
    NoteListComponent,
    CardComponent,
    NoteCardComponent,
    SidebarComponent,
    SearchComponent,
    SidebarListComponent,
    SidebarCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
