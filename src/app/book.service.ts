import { EventEmitter, Injectable } from "@angular/core";
import { Book } from "./book.model";

@Injectable({
    providedIn: 'root'
})

export class BookService{

    bookChange = new EventEmitter<Book []>();
    constructor(){}

    private books: Book[] = [
        new Book(
            'https://www.shutterstock.com/image-vector/blank-vertical-standing-book-hard-600w-1930902065.jpg',
            'SampleBook Name',
            'Author Name',
            500,
            25-5-2002
        )
    ];
   
    addBook(ImageUrl: any,BookName: any, AuthorName: any, BookPages: any, PublishingDate:any){
        this.books.push(new Book(ImageUrl,BookName,AuthorName,BookPages,PublishingDate));
        this.bookChange.emit(this.books);
    }

    getBook(): Book[]{
        return this.books.slice();
    }
}