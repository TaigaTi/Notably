import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <h1>{{title}}</h1>
  `,
  styleUrl: './header.css'
})
export class Header {
  title = 'Notably'
}
