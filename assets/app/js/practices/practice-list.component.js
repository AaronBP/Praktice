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
var practice_service_1 = require("./practice.service");
var PracticeListComponent = (function () {
    function PracticeListComponent(practiceService) {
        this.practiceService = practiceService;
        this.postResults = false;
    }
    PracticeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.practiceService.getPractices()
            .subscribe(function (practices) {
            _this.practices = practices;
            console.log(practices);
            if (practices.length > 0) {
                _this.postResults = true;
            }
            else {
                _this.postResults = false;
            }
        });
    };
    return PracticeListComponent;
}());
PracticeListComponent = __decorate([
    core_1.Component({
        selector: 'app-practice-list',
        template: "\n    <div class=\"practice\">\n      <div class=\"content-header col s12\">\n        <h5 class=\"cyan-text\">Recent posts</h5>\n      </div>\n      <div class=\"col s12\">\n        <div *ngIf=\"!postResults\">Follow some people to fill out your Dashboard with posts!</div>\n      </div>\n      <app-practice [practice]=\"practice\" *ngFor=\"let practice of practices\"></app-practice>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [practice_service_1.PracticeService])
], PracticeListComponent);
exports.PracticeListComponent = PracticeListComponent;
