import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from "./card/card.component";
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { FundsService } from '../../services/funds/funds.service';

@Component({
  selector: 'app-choice',
  standalone: true,
  imports: [CardComponent, MatButtonModule, MatSnackBarModule],
  templateUrl: './choice.component.html',
  styleUrl: './choice.component.css'
})
export class ChoiceComponent {

    private _snackBar = inject(MatSnackBar);
    private fundService = inject(FundsService);

    isEnabled:boolean = false;
    isStarted:boolean = false;

    reset() {
        location.reload();
        this.fundService.removeFromBalance("10.00");
    }

    start() {
        if (!this.fundService.isSufficiante()) this.showInsufficianteError();

        var amountDeducted = 10.00;

        this.playCashSound();
        this._snackBar.open(
            `Thank you for playing! $ ${amountDeducted} is deducted from your account balance!`,
            'Dissmiss',
            {duration: 5000}
        );

        this.isEnabled = true;
        this.isStarted = true;
    }

    update(newValue: boolean) {
        this.isEnabled = newValue;
    }

    private playCashSound() {
        var audio = new Audio()
        audio.src = "../../../assets/cash-register-sound.mp3";
        audio.load();
        audio.play();
    }

    private showInsufficianteError() {
        this._snackBar.open(
            'You don\'t have enough funds. Upload some more $$$.'
        )
        throw new Error();
    }

}
