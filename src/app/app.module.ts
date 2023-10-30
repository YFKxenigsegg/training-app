import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { HeaderComponent } from './components/note-list/header/header.component';
import { ListComponent } from './components/note-list/list/list.component';
import { SearchComponent } from './components/sidebar/search/search.component';
import { CardComponent } from './components/note-list/card/card.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NoteListComponent,
    HeaderComponent,
    ListComponent,
    SearchComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
