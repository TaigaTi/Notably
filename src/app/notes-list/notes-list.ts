import { Component } from '@angular/core';
import { NOTES } from '../notes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  imports: [RouterModule],
  templateUrl: './notes-list.html',
  styleUrl: './notes-list.css'
})
export class NotesList {
  notes = NOTES;

  show(title: string) {
    alert(title);
  }
}