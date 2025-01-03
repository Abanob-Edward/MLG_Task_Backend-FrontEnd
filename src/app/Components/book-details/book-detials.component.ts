import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookService } from '../../Services/book-service.service';
import { IBookDto } from '../../models/ibook-dto';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [FormsModule,CommonModule ,RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  book: any;
  bookId!: number;
  constructor(private bookService: BookService,
    private route: ActivatedRoute,
  ) { }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bookId = +params['id'];
      this.getbook(this.bookId )
    });
    
  }

  getbook(id:number){
    this.bookService.getBookByID(id)
      .subscribe(books => {
       
        this.book = books.entity;
        console.log(this.book)
      });
  }
}
