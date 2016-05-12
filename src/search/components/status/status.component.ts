import { Component } from 'angular2/core';
import { RouteParams } from 'angular2/router';

@Component({
  moduleId: module.id,
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {
	status: string;
    constructor(params: RouteParams) {
        this.status = params.get('status');
    }
}
