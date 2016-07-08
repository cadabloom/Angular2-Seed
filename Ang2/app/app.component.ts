import { Component } from '@angular/core';
import './rxjs-operators';
import { AlertListComponent }        from './alerts/alert-list.component';

@Component({
    selector: 'my-app',
    template: '<alert-list></alert-list>',
    //template: '<h1>My First Angular 2 App</h1><alert-list></alert-list>',
    directives: [AlertListComponent]
})
export class AppComponent { }