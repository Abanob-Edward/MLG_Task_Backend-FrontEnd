import { AllBooksComponent } from './Components/all-books/all-books.component';
import { Routes } from '@angular/router';
import { UpdateBookComponent } from './Components/update-book/update-book.component';
import { CreateBookComponent } from './Components/create-book/create-book.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { LoginComponent } from './Components/login/login.component';
import { BookDetailsComponent } from './Components/book-details/book-detials.component';

export const routes: Routes = [

    {
        path:'', 
        component:MainLayoutComponent,
        children:[
            {
                path:'', redirectTo:'AllBooks', pathMatch:'full'
            },
            {
                path:'AllBooks',  title:'All Books',
                component:AllBooksComponent,  
            },
            { 
                path:'AddBook', title:'New Books',
                component:CreateBookComponent,
            },
            {
                path:'UpdateBook/:id',
                component:UpdateBookComponent,
            },
            {
                path:'BookDetails/:id',title:'Details',
                component:BookDetailsComponent,
            },
        ]
    },
    {path:'Login', title:'login', component:LoginComponent}
    


];
