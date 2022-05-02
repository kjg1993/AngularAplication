import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [
    new Contact(
      1,
      'R. Kent Jackson',
      'jacksonk@byui.edu',
      '208 - 496 - 3771',
      '../../assets/images/jacksonk.jpg',
      null
    ),
    new Contact(
      1,
      'Bro. Barzee',
      'jacksonk@byui.edu',
      '208 - 496 - 3771',
      '../../assets/images/barzeer.jpg',
      null
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}