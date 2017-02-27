import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/models/user';

@Component({
	templateUrl: `./app/about/about-user.component.html`,
	styleUrls: [`./app/about/about-user.component.css`]
})

export class AboutUserComponent implements OnInit {

	user: User;

	constructor(
		private route: ActivatedRoute,
		private router: Router
	) {}

	// ngOnInit is a lifecycle hook on component instatiation
	ngOnInit() {
		// grab current user
		this.route.data.forEach((data: { user: User }) => this.user = data.user);
	}

	// angular 2 uses html 5 push state browser history
	// window.history.back();
	// can also use router.navigate to send the user to a route
	goBack() {
		this.router.navigate(['/about']);
	}
}