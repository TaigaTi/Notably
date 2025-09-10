import { Routes } from '@angular/router';
import { NotesList } from './notes-list/notes-list';
import { AddNote } from './add-note/add-note';

export const routes: Routes = [
    {path: '', component: NotesList},
    {path: 'new', component: AddNote},
];
