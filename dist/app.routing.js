"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var contact_component_1 = require("./contact/contact.component");
var not_found_component_1 = require("./not-found/not-found.component");
// type safety of only allow type Routes
var appRoutes = [
    // redirect example
    // {
    // 	path: '',
    // 	redirectTo: '/about',
    // 	pathMatch: 'full'
    // }
    // note that home is just ''
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        loadChildren: 'app/about/about.module#AboutModule'
    },
    { path: 'contact', component: contact_component_1.ContactComponent },
    // match not found route to route to not found component order matters so define last since ** matches wildcard
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
// this is base routing
// if child router use forChild instead of forRoot
// type safety of it must be ModuleWithProviders
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map