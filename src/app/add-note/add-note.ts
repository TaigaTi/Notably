import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NOTES } from '../notes';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-note',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './add-note.html',
  styleUrl: './add-note.css'
})
export class AddNote {
  addNoteForm = new FormGroup({
    title: new FormControl('', Validators.required),
    text: new FormControl('')
  })

  router = inject(Router);

  addNote() {
    let title = this.addNoteForm.value.title ?? "";
    let text = this.addNoteForm.value.text ?? "";

    if (this.addNoteForm.valid) {
      let ids = NOTES.map((a) => a.id);
      let maxId = 0;

      if (ids.length > 0 ) {
        maxId = Math.max(...ids);
      }

      let newNote = {
        id: maxId,
        title: title,
        text: text,
      };

      NOTES.unshift(newNote);
      this.addNoteForm.reset();

      this.router.navigateByUrl('/');
    }
  }
}
