import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

import { NavbarComponent } from './navbar/components/navbar.component';
import { SidebarComponent } from './sidebar/components/sidebar.component';
import { HomeComponent } from '../../home/components/home.component';
import { AboutComponent } from '../../about/components/about.component';
import { InboxComponent } from '../../inbox/components/inbox.component';

import { NameListService } from '../../shared/services/name-list.service';

@Component({
  selector: 'sd-app',
  viewProviders: [NameListService],
  moduleId: module.id,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [ROUTER_DIRECTIVES, NavbarComponent, SidebarComponent]
})
@RouteConfig([
  { path: '/',      name: 'Home',  component: HomeComponent  },
  { path: '/about', name: 'About', component: AboutComponent },
  { path: '/inbox', name: 'Inbox', component: InboxComponent }
])
export class AppComponent {}
