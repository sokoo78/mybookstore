import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookService } from './book.service';
import { HttpClientModule } from '@angular/common/http';
import { BookCreateComponent } from './book-create/book-create.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: BookListComponent },
      { path: 'books', component: BookListComponent },
      { path: 'books/:bookId', component: BookDetailsComponent },
      { path: 'createbook', component: BookCreateComponent }
    ])
  ],
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailsComponent,
    BookCreateComponent
  ],
  bootstrap: [AppComponent],
  providers: [BookService]
})
export class AppModule {}
