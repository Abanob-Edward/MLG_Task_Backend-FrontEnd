import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './Services/book-service.service';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,NavbarComponent, MainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[BookService] 
})
export class AppComponent {
  title = 'MLG_Task';
}
