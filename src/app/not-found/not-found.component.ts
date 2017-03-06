import { Component } from '@angular/core';

// any route defined by user will send them here. 
@Component({
	// do not need selector because pushing component through router & router outlet
	templateUrl: `./app/not-found/not-found.component.html`,
	styleUrls: [`./app/not-found/not-found.component.css`]
})

export class NotFoundComponent {}