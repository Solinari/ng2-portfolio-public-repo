import { Injectable } from '@angular/core';
import { User } from '../models/user';

// type safety
const usersPromise: Promise<User[]> = Promise.resolve([
	{
		id: 1,
		name: 'Justin',
		username: 'StealthCat',
		avatar: 'http://placekitten.com/300/300'
	},
	{
		id: 2,
		name: 'TestKitten',
		username: 'Kitty02',
		avatar: 'http://placekitten.com/301/301'
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
		return usersPromise.then(users => users.find(user => user.username === username))
	}

}