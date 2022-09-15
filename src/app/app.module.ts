import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CatageryListComponent } from './catagery-list/catagery-list.component';
import { AddCatageryComponent } from './catagery-list/add-catagery/add-catagery.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { BookService } from './book.service';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookItemComponent } from './books/book-list/book-item/book-item.component';
import { AddBookComponent } from './books/book-list/add-book/add-book.component';
const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: RegisterComponent},
  {path: '', component: CatageryListComponent},
  {path: 'book',component: BooksComponent},
  {path: 'booklist', component: BookListComponent},
  {path: 'bookDetail', component: BookDetailComponent},
  {path: 'bookitem', component: BookItemComponent},
  {path: 'addbook', component: AddBookComponent},
  {path: 'addcatagery', component: AddCatageryComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CatageryListComponent,
    AddCatageryComponent,
    HeaderComponent,
    BooksComponent,
    BookListComponent,
    BookDetailComponent,
    BookItemComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
