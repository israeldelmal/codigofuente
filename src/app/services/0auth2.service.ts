import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class OAuthService {

    private authEndpoint = 'https://55e6fac7.ngrok.io/api/security/oauth/token';
    
    constructor(
        private http: HttpClient
    ) {}

    private ToParams(obj: any) {
        var p = [];

        for (var key in obj) {
            p.push(key + '=' + encodeURIComponent(obj[key]));
        }
        
        return p.join('&');
    }

    attemptLogin(user: string, pass: string) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(user + ':' + pass)
        });

        let userData = {
            username: 'israel.arzate@outlook.com',
            password: 'israel123',
            grant_type: 'password',
            type: 'app_free'
        }

        return this.http.post(this.authEndpoint, this.ToParams(userData), {
            headers: headers
        });
    }
}