"use strict";
var profile_detail_component_1 = require("./profile-detail.component");
var search_list_component_1 = require("./search-list.component");
exports.PROFILE_ROUTES = [
    { path: ':id', component: profile_detail_component_1.ProfileDetailComponent },
    { path: 'search/:value', component: search_list_component_1.SearchListComponent }
];
