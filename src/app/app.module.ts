import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RequestService } from './request.service';

import { BookListComponent } from './books/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { InMemoryDataService } from './in-memory-data.service';
import { BookService } from './book.service';

import { AuthorsComponent } from './authors/authors.component';
import { AuthorService } from './author.service';

import { StoresComponent } from './stores/stores.component';
import { StoreService } from './store.service';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    environment.isMockEnabled
      ? HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
      : [],
    AppRoutingModule
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
    InMemoryDataService,
    RequestService,
    BookService,
    AuthorService,
    StoreService
  ]
})
export class AppModule {}
