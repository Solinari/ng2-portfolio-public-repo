import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

// type safety
const contactsPromise: Promise<Contact[]> = Promise.resolve([
	{
		id: 1,
		name: 'E-mail',
		url: 'mailto:justin.tyme.dejesus@gmail.com',
		icon: 'src/assets/images/gmail.png'
	},
	{
		id: 2,
		name: 'Github',
		url: 'https://github.com/Solinari',
		icon: 'src/assets/images/GitHub-Mark-64px.png'
	},
	{
		id: 3,
		name: 'Linkedin',
		url: 'https://www.linkedin.com/in/justintymecompiling/',
		icon: 'src/assets/images/Linkedin-Logo-2C-34px-R.png'
	},
]);

@Injectable()
export class ContactService {

	// get all contacts
	getContacts () {
		return contactsPromise;
	}

	// find a specific contact
	getContact(name) {
		// ES6 arrow to return in-line
		return contactsPromise.then(contacts => contacts.find(contact => contact.name === name));
	}
	

}