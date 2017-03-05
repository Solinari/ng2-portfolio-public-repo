import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

// type safety of only allow type Routes
const appRoutes: Routes = [
	{ 
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'about',
		loadChildren: 'app/about/about.module#AboutModule'
	},
	{   path: 'contact',
	    loadChildren: 'app/contact/contact.module#ContactModule'
	},
	// match not found route to route to not found component order matters so define last since ** matches wildcard
	{ path: '**', component: NotFoundComponent}
];

// this is base routing
// if child router use forChild instead of forRoot
// type safety of it must be ModuleWithProviders
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);