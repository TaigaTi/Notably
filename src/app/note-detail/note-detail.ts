import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NOTES } from '../notes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-note-detail',
  imports: [RouterModule],
  templateUrl: './note-detail.html',
  styleUrl: './note-detail.css'
})
export class NoteDetail {
  activeRoute = inject(ActivatedRoute);
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));

  note = NOTES.find((i) => i.id === this.id);
}
