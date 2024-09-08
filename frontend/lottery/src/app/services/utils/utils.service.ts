import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    constructor() { }

    public playSoundEffect(path: string) {
        var audio = new Audio()
        audio.src = "../../assets/sound-effects/" + path;
        audio.load();
        audio.play();
    }

}
