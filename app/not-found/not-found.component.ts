import { Component } from '@angular/core';

// any route defined by user will send them here. 
@Component({
	// do not need selector because pushing component through router & router outlet
	template: `
		<div class="jumbotron text-center">
			<h1>404 Not Found</h1>
			<p>You are lost my friend. Turn back towards <a routerLink="/">home</a>.</p>
		</div>
	`
})

export class NotFoundComponent {}