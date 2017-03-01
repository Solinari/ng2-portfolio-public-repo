import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactContactComponent} from './contact-contact.component';
import { ContactSectionComponent} from './contact-section.component';
import { ContactService } from '../shared/services/contact.service';
import { contactRouting } from './contact.routing';
import { ContactContactsResolve } from './contact-resolve.service';
import { ContactContactResolve } from './contact-contact-resolve.service';

@NgModule({
	imports: [
		CommonModule,
		contactRouting
	],
	declarations: [
		ContactComponent,
		ContactContactComponent,
		ContactSectionComponent
	],
	providers: [
		ContactService,
		ContactContactsResolve,
		ContactContactResolve
	]
})
export class ContactModule {}