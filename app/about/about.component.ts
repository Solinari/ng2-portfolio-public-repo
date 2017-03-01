import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/models/user';

@Component({
	selector: 'about-page',
	templateUrl: `./app/about/about.component.html`,
	styleUrls: [`./app/about/about.component.css`]
})

export class AboutComponent implements OnInit {

	users: User[];

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {                 // type safety
		this.route.data.forEach((data: { users: User[] }) => this.users = data.users);
	}
}