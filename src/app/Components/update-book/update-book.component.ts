import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookService } from '../../Services/book-service.service';
import { IAddOrUpdateBookDto } from '../../models/iadd-or-update-book-dto';
import { Location } from '@angular/common';
@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [FormsModule,CommonModule ,RouterLink],

  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent implements OnInit {
  constructor(private bookService: BookService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }
  bookId!: number;
  book: IAddOrUpdateBookDto={
    title:'',
    author:'',
    genre:'',
    publishedYear: 0
   }
   ngOnInit() {
    this.route.params.subscribe(params => {
      this.bookId = +params['id'];
      this.getbook(this.bookId )
    });
    
  }

  getbook(id:number){
    this.bookService.getBookByID(id)
      .subscribe(books => {
       
        this.book.title = books.entity.title;
        this.book.author = books.entity.author;
        this.book.genre = books.entity.genre;
        this.book.publishedYear = books.entity.publishedYear??0;
        console.log(this.book)
      });
  }
   async updateBook(): Promise<void> {

    console.log(this.book)
   await this.bookService.updateBook(this.bookId , this.book).subscribe({
      next: (response) => {
        // Navigate back to the previous page after successfully adding the item
        // this.location.back();
      },
      error: (error) => {
        // Handle the error appropriately
        this.location.back();
      }
    });
  }
  goBack() {
    this.location.back();
  }
}
