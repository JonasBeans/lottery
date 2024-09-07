import { Component, EventEmitter, inject, Input, Output, output } from '@angular/core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { FundsService } from '../../../services/funds/funds.service';

@Component({
  selector: 'choice-card',
  standalone: true,
  imports: [
    MatSnackBarModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

    private _snackBar = inject(MatSnackBar);

    @Input() isEnabled?:boolean;

    @Output() isGamePlayed = new EventEmitter<boolean>();

    revealed:boolean = true;

    reveal() {
        if (!this.isEnabled) this.showError();

        this.revealed = !this.revealed;
        this.dissableCard();
    }

    private calculateWonPrice() {
        var random = Math.floor(Math.random() * 10) + 1;
        console.log("The number is: " + random);
    }

    private dissableCard() {
        this.isEnabled = !this.isEnabled;
        this.isGamePlayed.emit(this.isEnabled);
    }

    showError() {
        this._snackBar.open("You haven't started a game yet!\nPress START");
        throw new Error("You haven't started a game yet!");
    }

}


