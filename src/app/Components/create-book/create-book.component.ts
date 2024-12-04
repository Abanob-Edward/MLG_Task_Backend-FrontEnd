import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IAddOrUpdateBookDto } from '../../models/iadd-or-update-book-dto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookService } from '../../Services/book-service.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-create-book',
  standalone: true,
  imports: [FormsModule,CommonModule ,RouterLink],
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.css'
})
export class CreateBookComponent implements OnInit {
  constructor(private bookService: BookService,
    private location: Location,
    
    private route: ActivatedRoute,
  ) { }
 book: IAddOrUpdateBookDto={
  title:'',
  author:'',
  genre:'',
  publishedYear:0
 }
 ngOnInit(): void {

 }
 async addBook(): Promise<void> {

  console.log(this.book)
 await this.bookService.addNewBook(this.book).subscribe({
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
