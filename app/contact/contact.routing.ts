import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { ContactContactComponent } from './contact-contact.component';
import { ContactSectionComponent } from './contact-section.component';
import { ContactContactsResolve } from './contact-resolve.service';
import { ContactContactResolve } from './contact-contact-resolve.service';

const contactRoutes: Routes = [
	// parent is route children are an array where '' is root(parent)
	{
		path: '',
		component: ContactSectionComponent,
		children: [
			{
				path: '',
				component: ContactComponent,
				resolve: {
					// service
					contacts: ContactContactsResolve
				}
			},
			{
				path: ':name',
				component: ContactContactComponent,
				resolve: {
					contact: ContactContactResolve
				}
			}
		]
	}
];

export const contactRouting: ModuleWithProviders = RouterModule.forChild(contactRoutes);