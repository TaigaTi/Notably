import { Routes } from '@angular/router';
import { NotesList } from './notes-list/notes-list';
import { AddNote } from './add-note/add-note';
import { NoteDetail } from './note-detail/note-detail';

export const routes: Routes = [
    {path: '', component: NotesList},
    {path: 'new', component: AddNote},
    {path: 'note/:id', component: NoteDetail}
];
