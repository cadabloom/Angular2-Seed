import { Component, OnInit } from '@angular/core';
import { Alert }              from './alert';
import { AlertService }       from './alert.service';


@Component({
    selector: 'alert-list',
    templateUrl: 'app/alerts/alert-list.component.html',
    providers: [AlertService],
})
export class AlertListComponent implements OnInit {
    errorMessage: string;
    alerts: Alert[];
    mode = 'Observable';

    constructor(private alertService: AlertService) { }

    ngOnInit() { this.getAlerts(); }

    getAlerts() {
        this.alertService.getAlerts()
            .subscribe(
            alerts => this.alerts = alerts,
            error => this.errorMessage = <any>error);
    }
}