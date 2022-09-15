import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/book.model';
import { BookService } from 'src/app/book.service';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private bookService: BookService) { }


  ngOnInit(): void {
  }
  onAddbook(ImageUrl: any ,BookName: string, AuthorName: string, BookPages: any, PublishingDate:any){
    this.bookService.addBook(ImageUrl,BookName,AuthorName,BookPages,PublishingDate);
  }

}
