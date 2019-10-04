import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OAuthService } from 'src/app/services/0auth2.service';
import { Router } from '@angular/router';

// const urlCarList = 'https://55e6fac7.ngrok.io/api/credentials/car-list';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;

    token: any;
    sessionActive: any;

    inputUser = '';
    inputPass = '';

    constructor(
        private oauth2: OAuthService,
        private formBuilder: FormBuilder,
        private router: Router
    ) {}

    ngOnInit() {
        this.sessionActive = sessionStorage.getItem('resp');

        if (this.sessionActive)
            this.router.navigate(['/list'])
        else
            this.loginForm = this.formBuilder.group({
                username: ['', Validators.required],
                password: ['', Validators.required]
            });

            this.token = JSON.parse(sessionStorage.getItem('resp'));
    }

    get f() {
        return this.loginForm.controls;
    }

    onSubmit() {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }

        this.oauth2.attemptLogin(this.loginForm.get('username').value, this.loginForm.get('password').value)
            .subscribe(
                resp => {
                    sessionStorage.setItem('resp', JSON.stringify(resp));
                    this.router.navigate(['/list']);
                }
            );
    }
}