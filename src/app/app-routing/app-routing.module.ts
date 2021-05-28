import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorsComponent } from '../authors/authors.component';
import { AuthorDetailsComponent } from '../author-details/author-details.component';
import { AuthorCreateComponent } from '../author-create/author-create.component';
import { AuthorEditComponent } from '../author-edit/author-edit.component';

import { BookListComponent } from '../books/book-list.component';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { BookCreateComponent } from '../book-create/book-create.component';

import { StoresComponent } from '../stores/stores.component';
import { StoreDetailsComponent } from '../store-details/store-details.component';
import { StoreCreateComponent } from '../store-create/store-create.component';
import { StoreEditComponent } from '../store-edit/store-edit.component';

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'books', component: BookListComponent },
  { path: 'books/:bookId', component: BookDetailsComponent },
  { path: 'createbook', component: BookCreateComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'authors/:authorId', component: AuthorDetailsComponent },
  { path: 'createauthor', component: AuthorCreateComponent },
  { path: 'editauthor/:authorId', component: AuthorEditComponent },
  { path: 'stores', component: StoresComponent },
  { path: 'stores/:storeId', component: StoreDetailsComponent },
  { path: 'createstore', component: StoreCreateComponent },
  { path: 'editstore/:storeId', component: StoreEditComponent },
  { path: '**', component: BookListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
