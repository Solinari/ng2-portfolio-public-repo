import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './shared/guards/auth-guard.service';
import { CanDeactivateGuard } from './shared/guards/can-deactivate-guard.service';

@NgModule({
	imports: [ 
		BrowserModule, 
		FormsModule,
		appRouting,
	 ],
	declarations: [ 
		AppComponent,
		HomeComponent,
		NotFoundComponent
	 ],
	 // services go under providers
	 providers: [
		 AuthGuard,
		 CanDeactivateGuard
	 ],
	// core component we want to use
	bootstrap: [ AppComponent ]
})
// this is the module of the component we created
// now it will be bootstrapped
export class AppModule {}