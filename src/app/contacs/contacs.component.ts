import { Component, OnInit } from '@angular/core';
import { Contact } from './contact-list/contact.model';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contacs',
  templateUrl: './contacs.component.html',
  styleUrls: ['./contacs.component.css'],
})
export class ContacsComponent implements OnInit {
  selectedContact: Contact;
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.contactChangedEvent.subscribe((contact) => {
      this.selectedContact = contact;
    });
  }
}
