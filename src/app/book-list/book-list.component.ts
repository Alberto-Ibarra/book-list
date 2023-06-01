import { Component } from '@angular/core';
import { BookService } from '../services/BookService.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  title: string = ""
  author: string = ""

  constructor(public bookService: BookService){}

  handleClick(){
    this.bookService.addBook(this.title, this.author)
    this.title = ""
    this.author = ""
  }
}
