import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { NotesList } from "./notes-list/notes-list";
import { AddNote } from "./add-note/add-note";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, NotesList, AddNote],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Notably');
}
