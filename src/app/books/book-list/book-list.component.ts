import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book.model';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  
  // books: Book[] = [];
  // bookChange = new EventEmitter<Book []>();
  bookdata!: Book[];
  constructor(private bookService: BookService){}

  ngOnInit(): void {
    // this.bookService.bookChange.emit(this.books);
    this.bookdata = this.bookService.getBook();
  }

}