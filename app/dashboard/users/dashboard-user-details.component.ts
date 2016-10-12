import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';

@Component({
	templateUrl: `/app/dashboard/users/dashboard-user-details.component.html`,
	styleUrls: [`/app/dashboard/users/dashboard-user-details.component.css`]
})
export class DashboardUserDetailsComponent implements OnInit {
	user: User;
	editName: string;

	constructor(
		private service: UserService,
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit() {
		// this is using an observable
		this.route.params.forEach(params => {
			let username = params['username'];

			this.service.getUser(username).then(user => {
				this.user     = user;
				this.editName = user.name;
			});
		})	
	}

	// don't save then nav to /dashboard/users
	cancel() {
		this.router.navigate(['/dashboard/users']);
	}

	// use the temp variable from above. 
	save() {
		this.user.name = this.editName;
		this.cancel();
	}

	canDeactivate() {
		console.log('navigating away...');

		// if the editName !== this.user.name
		if ( this.user.name !== this.editName) {
			// js allows window usage for this
			return window.confirm('Discard changes?');
		}
		return true;
	}
}