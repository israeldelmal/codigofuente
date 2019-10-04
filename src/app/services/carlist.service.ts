import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICarList } from '../models/car.model';

@Injectable({
    providedIn: 'root'
})
export class CarList {
    carListEndpoint = 'https://55e6fac7.ngrok.io/api/credentials/car-list';
    token: any;

    constructor(
        private http: HttpClient
    ) {
        this.token = JSON.parse(sessionStorage.getItem('resp')).access_token;
    }

    getListCar() {
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + this.token
        });

        return this.http.get<ICarList[]>(this.carListEndpoint, {
            headers: headers
        });
    }
}