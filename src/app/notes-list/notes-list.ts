import { Component } from '@angular/core';
import { NOTES } from '../notes';

@Component({
  selector: 'app-notes-list',
  imports: [],
  templateUrl: './notes-list.html',
  styleUrl: './notes-list.css'
})
export class NotesList {
  notes = NOTES;

  show(title: string) {
    window.alert(title);
  }
}