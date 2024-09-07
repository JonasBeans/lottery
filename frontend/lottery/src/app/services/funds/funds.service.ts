import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FundsService {

    constructor() { }

    isSufficiante() : boolean {
        return this.getFunds().toString() > '0';
    }

    getFunds(): number {
        return Number.parseFloat(localStorage.getItem('balance') ?? '0.00');
    }

    addFunds(amount:string) {
        if (amount === null) throw new Error("Additional funds can't be null");

        var fundsAmount = Number.parseFloat(amount);
        var originalBalance = Number.parseFloat(localStorage.getItem('balance') ?? "0.00");
        var newBalance = originalBalance + fundsAmount;

        this.updateBalance(newBalance);
    }

    removeFromBalance(amount: string) {
        if (amount === null) throw new Error("Additional funds can't be null");
        
        var fundsAmount = Number.parseFloat(amount);
        var originalBalance = Number.parseFloat(localStorage.getItem('balance') ?? "0.00");
        var calculatedAmount = (originalBalance - fundsAmount);
        var newBalance = calculatedAmount; 

        this.updateBalance(newBalance);
    }

    updateBalance(newBalance: number) {
        localStorage.setItem('balance', newBalance.toString());
        location.reload();
    }
}
