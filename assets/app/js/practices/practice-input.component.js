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
var practice_model_1 = require("./practice.model");
var PracticeInputComponent = (function () {
    function PracticeInputComponent(practiceService) {
        this.practiceService = practiceService;
    }
    PracticeInputComponent.prototype.onSubmit = function (form) {
        if (this.practice) {
            this.practice.post = form.value.post;
            this.practice.likeAuthor = null;
            this.practiceService.updatePractice(this.practice)
                .subscribe(function (result) { return console.log(result); });
            this.practice = null;
        }
        else {
            var practice = new practice_model_1.Practice(form.value.post, "Sally");
            this.practiceService.addPractice(practice)
                .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
        }
        form.resetForm();
    };
    PracticeInputComponent.prototype.onClear = function (form) {
        this.practice = null;
        form.resetForm();
    };
    PracticeInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.practiceService.practiceIsEdit.subscribe(function (practice) { return _this.practice = practice; });
    };
    return PracticeInputComponent;
}());
PracticeInputComponent = __decorate([
    core_1.Component({
        selector: 'app-practice-input',
        templateUrl: './practice-input.component.html'
    }),
    __metadata("design:paramtypes", [practice_service_1.PracticeService])
], PracticeInputComponent);
exports.PracticeInputComponent = PracticeInputComponent;
