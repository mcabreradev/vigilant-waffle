import { Component } from 'angular2/core';
import {InboxItemComponent} from './inbox-item/inbox-item.component';

@Component({
  moduleId: module.id,
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css'],
  directives: [InboxItemComponent]
})
export class InboxComponent {}
