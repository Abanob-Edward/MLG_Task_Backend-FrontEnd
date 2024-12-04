import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AllBooksComponent } from "./Components/all-books/all-books.component";
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './Services/book-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule, AllBooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[BookService] 
})
export class AppComponent {
  title = 'MLG_Task';
}
