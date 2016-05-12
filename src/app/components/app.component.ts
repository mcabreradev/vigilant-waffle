import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

// App Components
import { NavbarComponent } from './navbar/components/navbar.component';
import { SidebarComponent } from './sidebar/components/sidebar.component';

// Isolated Components
import { HomeComponent } from '../../home/components/home.component';
import { AboutComponent } from '../../about/components/about.component';
import { InboxComponent } from '../../inbox/components/inbox.component';
import { OportunitiesComponent } from '../../oportunities/components/oportunities.component';
import { ReportingComponent } from '../../reporting/components/reporting.component';

// Search
import { SearchComponent } from '../../search/components/search.component';
import { NeverContactedComponent } from '../../search/components/never-contacted/never-contacted.component';
import { OpenedEmailComponent } from '../../search/components/opened-email/opened-email.component';
import { RecentlyCreatedComponent } from '../../search/components/recently-created/recently-created.component';
import { StatusComponent } from '../../search/components/status/status.component';

// Services
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
  { path: '/',      name: 'Home',  component: HomeComponent, useAsDefault: true },
  { path: '/about', name: 'About', component: AboutComponent },
  { path: '/tasks/inbox', name: 'Inbox', component: InboxComponent },
  { path: '/tasks/done', name: 'Done', component: InboxComponent },
  { path: '/tasks/future', name: 'Future', component: InboxComponent },
  { path: '/oportunities', name: 'Oportunities', component: OportunitiesComponent },
  { path: '/search', name: 'Leads', component: SearchComponent },
  { path: '/search/never-contacted', name: 'NeverContacted', component: NeverContactedComponent },
  { path: '/search/opened-email', name: 'OpenedEmail', component: OpenedEmailComponent },
  { path: '/search/recently-created', name: 'RecentlyCreated', component: RecentlyCreatedComponent },
  { path: '/search/status/:status', name: 'Status', component: StatusComponent },
  { path: '/reporting', name: 'Reporting', component: ReportingComponent },
])
export class AppComponent {}
