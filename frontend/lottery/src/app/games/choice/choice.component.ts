import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from "./card/card.component";
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { FundsService } from '../../services/funds/funds.service';
import { UtilsService } from '../../services/utils/utils.service';

@Component({
  selector: 'app-choice',
  standalone: true,
  imports: [CardComponent, MatButtonModule, MatSnackBarModule],
  templateUrl: './choice.component.html',
  styleUrl: './choice.component.css'
})
export class ChoiceComponent {

    private fundService = inject(FundsService);
    private utils = inject(UtilsService);
    private _snackBar = inject(MatSnackBar);

    private cashSoundEffectPath = "cash-register-sound.mp3"

    isEnabled:boolean = false;
    isStarted:boolean = false;

    reset() {
        location.reload();
        this.fundService.removeFromBalance("10.00");
    }

    start() {
        if (!this.fundService.isSufficiante()) this.showInsufficianteError();

        var amountDeducted = 10.00;

        this.utils.playSoundEffect(this.cashSoundEffectPath);
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

    private showInsufficianteError() {
        this._snackBar.open(
            'You don\'t have enough funds. Upload some more $$$.'
        )
        throw new Error();
    }

}
