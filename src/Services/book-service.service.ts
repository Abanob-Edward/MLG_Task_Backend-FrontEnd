import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IResultDataList } from '../app/models/iresult-data-list';
import { IAddOrUpdateBookDto } from '../app/models/iadd-or-update-book-dto';
import { IResultView } from '../app/models/iresult-view';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = 'https://localhost:44378/api/Book'; 
  constructor(private http: HttpClient) { }
 
  getAllBooks(items: number=10, pageNumber: number = 1): Observable<IResultDataList> {
    const url = `${this.baseUrl}/GetAllWithPaging?items=${items}&pageNumber=${pageNumber}`;
       return this.http.get<IResultDataList>(url);
  } 
  getBookByID(id:number): Observable<IResultView> {
    const url = `${this.baseUrl}/GetBookByID/${id}`;
    return this.http.get<IResultView>(url);
  }
   addNewBook(book: IAddOrUpdateBookDto): Observable<IResultView> {
    const url = `${this.baseUrl}/AddBook`;
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    const options = {
      headers: httpHeaders
    };
    return this.http.post<IResultView>(url, book, options);
  }
  updateBook(id:number, book: IAddOrUpdateBookDto): Observable<IResultView> {
    const url = `${this.baseUrl}/UpdateBook/${id}`;
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    const options = {
      headers: httpHeaders
    };
    return this.http.put<IResultView>(url, book, options);
  }
  SoftDeleteBookByID(id:number): Observable<IResultView> {
    const url = `${this.baseUrl}/SoftDelete/${id}`;
    return this.http.delete<IResultView>(url);
  }

}