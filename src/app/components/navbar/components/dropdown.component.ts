import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'navbar-dropdown',
  moduleId: module.id,
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NavbarDropdownComponent {}
