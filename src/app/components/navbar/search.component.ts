import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'navbar-search',
  moduleId: module.id,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NavbarSearchComponent {}
