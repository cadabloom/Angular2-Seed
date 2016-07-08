// Observable Version
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import { Alert }           from './alert';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class AlertService {
    constructor(private http: Http) { }

    private alertsUrl = 'http://localhost/crmcache/api/alerts';

    getAlerts(): Observable<Alert[]> {
        return this.http.get(this.alertsUrl).map(this.extractData)
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log(res);
        console.log("BODY", body);
        return body || {};
    }
}