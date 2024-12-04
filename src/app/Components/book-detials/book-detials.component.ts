import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookService } from '../../Services/book-service.service';
import { IBookDto } from '../../models/ibook-dto';

@Component({
  selector: 'app-book-detials',
  standalone: true,
  imports: [FormsModule,CommonModule ,RouterLink],
  templateUrl: './book-detials.component.html',
  styleUrl: './book-detials.component.css'
})
export class BookDetialsComponent {
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
