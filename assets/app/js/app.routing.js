"use strict";
var router_1 = require("@angular/router");
var practices_component_1 = require("./practices/practices.component");
var authentication_component_1 = require("./auth/authentication.component");
var profile_component_1 = require("./profile/profile.component");
var logout_component_1 = require("./auth/logout.component");
var landing_component_1 = require("./unauthed/landing.component");
var auth_routes_1 = require("./auth/auth.routes");
var profile_routes_1 = require("./profile/profile.routes");
var APP_ROUTES = [
    { path: '', component: landing_component_1.LandingComponent, pathMatch: 'full' },
    { path: 'practices', component: practices_component_1.PracticesComponent },
    { path: 'auth', component: authentication_component_1.AuthenticationComponent, children: auth_routes_1.AUTH_ROUTES },
    { path: 'logout', component: logout_component_1.LogoutComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent, children: profile_routes_1.PROFILE_ROUTES }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
