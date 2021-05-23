import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'bookstore-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = 'Bookstore';  
}
