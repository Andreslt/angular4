import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'author',
  template: `<h1>{{title}}</h1>
    <h2>{{authors.length}} Authors</h2>
    <ul>
      <li *ngFor= "let author of authors">
        {{ author }}
      </li>
    </ul>
  `,
})
export class AuthorComponent{
  title = "Exam"
  authors;
  number;
  constructor(services: AuthorsService){
    this.authors = services.getAuthors();
    this.number = services.authorNumber;
  }
}
