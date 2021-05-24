import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RequestService } from './request.service';

import { BookListComponent } from './books/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { InMemoryBookService } from './in-memory-book.service';
import { BookService } from './book.service';

import { AuthorsComponent } from './authors/authors.component';
import { AuthorService } from './author.service';

import { StoresComponent } from './stores/stores.component';
import { StoreService } from './store.service';
import { AuthorDetailsComponent } from './author-details/author-details.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryBookService),
    RouterModule.forRoot([
      { path: '', component: BookListComponent },
      { path: 'books', component: BookListComponent },
      { path: 'books/:bookId', component: BookDetailsComponent },
      { path: 'createbook', component: BookCreateComponent },
      { path: 'authors', component: AuthorsComponent },
      //{ path: 'authors/:authorId', component: AuthorDetailsComponent },
      //{ path: 'createauthor', component: AuthorCreateComponent }
      { path: 'stores', component: StoresComponent }
      //{ path: 'stores/:storeId', component: StoreDetailsComponent },
      //{ path: 'createstore', component: StoreCreateComponent },
    ])
  ],
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailsComponent,
    BookCreateComponent,
    AuthorsComponent,
    StoresComponent,
    AuthorDetailsComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    InMemoryBookService,
    RequestService,
    BookService,
    AuthorService,
    StoreService
  ]
})
export class AppModule {}
