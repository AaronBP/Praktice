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
var profile_service_1 = require("./profile.service");
var router_1 = require("@angular/router");
var SearchListComponent = (function () {
    function SearchListComponent(profileService, route, router) {
        this.profileService = profileService;
        this.route = route;
        this.router = router;
        this.hasResults = false;
    }
    SearchListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.profileService.searchUsers(params['value']); })
            .subscribe(function (response) {
            _this.searchedUsers = response;
            if (response.length > 0) {
                _this.hasResults = true;
            }
            else {
                _this.hasResults = false;
            }
        });
    };
    return SearchListComponent;
}());
SearchListComponent = __decorate([
    core_1.Component({
        selector: 'app-search-list',
        templateUrl: './search-list.component.html'
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService, router_1.ActivatedRoute, router_1.Router])
], SearchListComponent);
exports.SearchListComponent = SearchListComponent;
