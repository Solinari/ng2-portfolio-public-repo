import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export interface CanComponentDeactivate {
	// type safety on the implemented interface
	canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
	
	canDeactivate(component: CanComponentDeactivate) {
		// check if component passed has a canDeactivate method
		return component.canDeactivate ? component.canDeactivate() : true;
	}
}