import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Contact } from '../shared/models/contact';
import { ContactService } from '../shared/services/contact.service';

@Injectable()
export class ContactContactResolve implements Resolve<Contact> {

	constructor(private service: ContactService, private router: Router) {}

	resolve(route: ActivatedRouteSnapshot) {
		let name = route.params['name'];

		return this.service.getContact(name).then(contact => {
			if (contact) {
				return contact;
			} else {
				// navigate back to about
				this.router.navigate(['/contact']);
				return false;
			}
		});
	}
}