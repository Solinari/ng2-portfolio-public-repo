import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../shared/models/contact';

@Component({
	templateUrl: `./app/contact/contact-contact.component.html`,
	styleUrls: [`./app/contact/contact-contact.component.css`]
})

export class ContactContactComponent implements OnInit {

	contact: Contact;

	constructor(
		private route: ActivatedRoute,
		private router: Router
	) {}

	// ngOnInit is a lifecycle hook on component instatiation
	ngOnInit() {
		// grab current contact
		this.route.data.forEach((data: { contact: Contact }) => this.contact = data.contact);
	}

	// angular 2 uses html 5 push state browser history
	// window.history.back();
	// can also use router.navigate to send the user to a route
	goBack() {
		this.router.navigate(['/contact']);
	}
}