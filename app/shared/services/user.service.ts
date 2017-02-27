import { Injectable } from '@angular/core';
import { User } from '../models/user';

// type safety
const usersPromise: Promise<User[]> = Promise.resolve([
	{
		id: 1,
		name: 'Justin',
		username: 'Solinari',
		avatar: 'https://scontent.ford1-1.fna.fbcdn.net/v/t1.0-9/15781278_10154935357183760_7566106250660922199_n.jpg?oh=56673cf7a03483dda909ff2a051df313&oe=592D0075',
		bio: 'I am a biologist turned coder seeking new horizons as a software engineer. I am a self-driven learner and a polyglot when it comes to coding languages. I love implementing and learning to use new technologies and the alacrity by which I can master new concepts will make me an excellent addition to any team. My past experiences in the sciences and as a software engineer taught me to always wear many hats in any role I am employed in. If you would like to know more, feel free to contact me!'
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