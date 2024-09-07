import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FundsService } from './services/funds/funds.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      RouterOutlet, 
      RouterLink 
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    
    fundsService = inject(FundsService);

}
