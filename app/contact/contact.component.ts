import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../shared/models/contact';

@Component({
	selector: 'contact-page',
	templateUrl: `./app/contact/contact.component.html`,
	styleUrls: [`./app/contact/contact.component.css`]
})

export class ContactComponent implements OnInit {

	contacts: Contact[];

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {                 // type safety
		this.route.data.forEach((data: { contacts: Contact[] }) => this.contacts = data.contacts);
	}
}