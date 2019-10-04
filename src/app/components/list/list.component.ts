import { Component, OnInit } from "@angular/core";
import { ICarList } from 'src/app/models/car.model';
import { CarList } from 'src/app/services/carlist.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: [ './list.component.scss' ]
})
export class ListComponent implements OnInit {
    finalData: ICarList[];

    constructor(
        private carList: CarList,
        private router: Router
    ) {}

    ngOnInit() {
        return this.carList.getListCar()
            .subscribe(data => this.finalData = data);
    }

    logout() {
        sessionStorage.clear();
        this.router.navigate(['/']);
    }
}