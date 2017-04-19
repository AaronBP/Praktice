"use strict";
var PracticeService = (function () {
    function PracticeService() {
        this.practices = [];
    }
    PracticeService.prototype.addPractice = function (practice) {
        this.practices.push(practice);
        console.log(this.practices);
    };
    PracticeService.prototype.getPractices = function () {
        return this.practices;
    };
    PracticeService.prototype.deletePractice = function (practice) {
        this.practices.splice(this.practices.indexOf(practice), 1);
    };
    return PracticeService;
}());
exports.PracticeService = PracticeService;
