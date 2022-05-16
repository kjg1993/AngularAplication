import { Component, OnInit } from '@angular/core';
import { Contact } from './contact-list/contact.model';

@Component({
  selector: 'app-contacs',
  templateUrl: './contacs.component.html',
  styleUrls: ['./contacs.component.css'],
})
export class ContacsComponent implements OnInit {
  selectedContact: Contact;
  constructor() {}

  ngOnInit(): void {}
}
