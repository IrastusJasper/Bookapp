import { Component, Input, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { Book } from 'src/app/book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input() books!: Book;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
  
  onSelect(){
    this.bookService.bookChange.emit();
   console.log(this.books)
  }
}
