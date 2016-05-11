import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

// Componentes de Navbar
import {SidebarInboxComponent} from './inbox.component';

@Component({
  selector: 'sd-sidebar',
  moduleId: module.id,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  directives: [ROUTER_DIRECTIVES, SidebarInboxComponent]
})
export class SidebarComponent {}
