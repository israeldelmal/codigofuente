import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    sessionActive: any;

    constructor(
        private router: Router
    ) {
        this.sessionActive = sessionStorage.getItem('resp');
    }

    canActivate() {
        if (this.sessionActive)
            return true;
        else
            this.router.navigate(['/']);
            return false;
    }
}