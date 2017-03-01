import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Contact } from '../shared/models/contact';
import { ContactService } from '../shared/services/contact.service';

@Injectable()

export class ContactContactsResolve implements Resolve<Contact[]> {

	constructor(private service: ContactService) {}

	resolve(route: ActivatedRouteSnapshot) {
		// use .then() as this is a Promise 
		return this.service.getContacts().then(contacts => contacts);
	}

}