import { AllBooksComponent } from './Components/all-books/all-books.component';
import { Routes } from '@angular/router';
import { UpdateBookComponent } from './Components/update-book/update-book.component';
import { CreateBookComponent } from './Components/create-book/create-book.component';
import { BookDetialsComponent } from './Components/book-detials/book-detials.component';

export const routes: Routes = [
    {
        path:'', redirectTo:'AllBooks', pathMatch:'full'
    },
    {
        path:'AllBooks',
        component:AllBooksComponent,
    },
    {
        path:'AddBook',
        component:CreateBookComponent,
    },
    {
        path:'UpdateBook/:id',
        component:UpdateBookComponent,
    },
    {
        path:'BookDetails/:id',
        component:BookDetialsComponent,
    },


];
