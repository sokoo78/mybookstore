import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorDetailsComponent } from '../author-details/author-details.component';
import { AuthorsComponent } from '../authors/authors.component';
import { BookCreateComponent } from '../book-create/book-create.component';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { BookListComponent } from '../books/book-list.component';
import { StoresComponent } from '../stores/stores.component';

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'books', component: BookListComponent },
  { path: 'books/:bookId', component: BookDetailsComponent },
  { path: 'createbook', component: BookCreateComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'authors/:authorId', component: AuthorDetailsComponent },
  //{ path: 'createauthor', component: AuthorCreateComponent }
  { path: 'stores', component: StoresComponent }
  //{ path: 'stores/:storeId', component: StoreDetailsComponent },
  //{ path: 'createstore', component: StoreCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
