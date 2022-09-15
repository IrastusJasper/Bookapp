import { Component,  OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private bookService: BookService) { }

  selectBook!:Book;
  ngOnInit(): void {
    this.bookService.bookChange
        .subscribe(
      (book: Book)  => {              // argument
        this.selectBook = book; // function body
      }
    );
  }
}