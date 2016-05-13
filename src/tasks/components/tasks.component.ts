import { Component } from 'angular2/core';
import { RouteParams } from 'angular2/router';

@Component({
  moduleId: module.id,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
	task: string;
    constructor(params: RouteParams) {
        this.task = params.get('param');
    }
}
