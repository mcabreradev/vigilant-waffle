import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {NavbarNewLeadComponent} from './new-lead/new-lead.component';
import {NavbarSearchComponent} from './search/search.component';
import {NavbarDropdownComponent} from './dropdown/dropdown.component';

@Component({
  selector: 'sd-navbar',
  moduleId: module.id,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  directives: [ROUTER_DIRECTIVES, NavbarNewLeadComponent, NavbarSearchComponent, NavbarDropdownComponent]
})
export class NavbarComponent {}
