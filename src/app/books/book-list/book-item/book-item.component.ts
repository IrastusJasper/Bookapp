import { Component, Input, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { Book } from 'src/app/book.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input() books!: Book;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
 
  onSelect(){
    this.bookService.bookChange.emit();
    // console.log(this.books)
  }
}
