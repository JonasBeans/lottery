import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FundsService } from '../services/funds/funds.service';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatInputModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    fundsService = inject(FundsService);
    
}
