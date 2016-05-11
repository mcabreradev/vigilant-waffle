import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

// Components from Navbar
import {NavbarNewLeadComponent} from './new-lead.component';
import {NavbarSearchComponent} from './search.component';
import {NavbarDropdownComponent} from './dropdown.component';

@Component({
  selector: 'sd-navbar',
  moduleId: module.id,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  directives: [ROUTER_DIRECTIVES, NavbarNewLeadComponent, NavbarSearchComponent, NavbarDropdownComponent]
})
export class NavbarComponent {}
