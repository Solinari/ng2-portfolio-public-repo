import { Injectable } from '@angular/core';
import { User } from '../models/user';

// type safety
const usersPromise: Promise<User[]> = Promise.resolve([
	{
		id: 1,
		name: 'Justin',
		username: 'Solinari',
		avatar: 'https://scontent.ford1-1.fna.fbcdn.net/v/t1.0-9/15781278_10154935357183760_7566106250660922199_n.jpg?oh=56673cf7a03483dda909ff2a051df313&oe=592D0075'
	}
]);

@Injectable()
export class UserService {

	// get all users
	getUsers () {
		return usersPromise;
	}
	// find a specific user
	getUser(username) {
		// ES6 arrow function gives automatic returns in-line
		return usersPromise.then(users => users.find(user => user.username === username));
	}

}