"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var practice_component_1 = require("./practices/practice.component");
var practice_list_component_1 = require("./practices/practice-list.component");
var practice_input_component_1 = require("./practices/practice-input.component");
var practices_component_1 = require("./practices/practices.component");
var authentication_component_1 = require("./auth/authentication.component");
var profile_component_1 = require("./profile/profile.component");
var profile_detail_component_1 = require("./profile/profile-detail.component");
var header_component_1 = require("./header.component");
var logout_component_1 = require("./auth/logout.component");
var signup_component_1 = require("./auth/signup.component");
var signin_component_1 = require("./auth/signin.component");
var auth_service_1 = require("./auth/auth.service");
var landing_component_1 = require("./unauthed/landing.component");
var search_list_component_1 = require("./profile/search-list.component");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            practice_component_1.PracticeComponent,
            practice_list_component_1.PracticeListComponent,
            practice_input_component_1.PracticeInputComponent,
            practices_component_1.PracticesComponent,
            authentication_component_1.AuthenticationComponent,
            header_component_1.HeaderComponent,
            logout_component_1.LogoutComponent,
            signin_component_1.SigninComponent,
            signup_component_1.SignupComponent,
            profile_component_1.ProfileComponent,
            landing_component_1.LandingComponent,
            profile_detail_component_1.ProfileDetailComponent,
            search_list_component_1.SearchListComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_1.routing,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule
        ],
        providers: [auth_service_1.AuthService],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
