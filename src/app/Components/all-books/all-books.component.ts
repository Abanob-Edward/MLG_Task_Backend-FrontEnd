import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Services/book-service.service';
import { IBookDto } from '../../models/ibook-dto';
import { IResultDataList } from '../../models/iresult-data-list';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-books',
  standalone: true,
  imports: [FormsModule,CommonModule ,RouterLink],
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.css'
})
export class AllBooksComponent  implements OnInit {
  books: IBookDto[]=[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getallbooks();
  }

  deleteBook(id:number){
    this.bookService.SoftDeleteBookByID(id).subscribe({
      next: (response) => {
        console.log('Category soft-deleted successfully');
        this.getallbooks();
      },
      error: (err) => {
        console.error('Error soft-deleting category', err);
        this.getallbooks();
      }
    });
  }

  getallbooks(){
    this.bookService.getAllBooks(10, 1)
    .subscribe(books => {
     
      this.books = books.entities;
      console.log(this.books)
    });
  }
}
