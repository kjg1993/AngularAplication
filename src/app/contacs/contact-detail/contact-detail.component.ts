import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact-list/contact.model';
@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css'],
})
export class ContactDetailComponent implements OnInit {
  @Input() contact: Contact;
  constructor() {}

  ngOnInit(): void {}
  onDelete() {}
}

// = new Contact(
//   1,
//   'R. Kent Jackson',
//   'jacksonk@byui.edu',
//   '208-496-3771',
//   '../../assets/images/jacksonk.jpg',
//   null
// );
