import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Contact } from './contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  @Output() selectedContactEvent = new EventEmitter<Contact>();

  contacts: Contact[] = [];
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
    this.contactService.contactChangedEvent.subscribe((contact: Contact[]) => {
      this.contacts = contact;
    });
  }

  onSelected(contact: Contact) {
    this.contactService.contactChangedEvent.emit(contact);
  }
}
