"use strict";
var router_1 = require("@angular/router");
var contact_component_1 = require("./contact.component");
var contact_contact_component_1 = require("./contact-contact.component");
var contact_section_component_1 = require("./contact-section.component");
var contact_resolve_service_1 = require("./contact-resolve.service");
var contact_contact_resolve_service_1 = require("./contact-contact-resolve.service");
var contactRoutes = [
    // parent is route children are an array where '' is root(parent)
    {
        path: '',
        component: contact_section_component_1.ContactSectionComponent,
        children: [
            {
                path: '',
                component: contact_component_1.ContactComponent,
                resolve: {
                    // service
                    users: contact_resolve_service_1.ContactContactsResolve
                }
            },
            {
                path: ':name',
                component: contact_contact_component_1.ContactContactComponent,
                resolve: {
                    contact: contact_contact_resolve_service_1.ContactContactResolve
                }
            }
        ]
    }
];
exports.contactRouting = router_1.RouterModule.forChild(contactRoutes);
//# sourceMappingURL=contact.routing.js.map