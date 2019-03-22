webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_service__ = __webpack_require__(180);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__loading_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_service__ = __webpack_require__(53);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__project_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_service__ = __webpack_require__(181);
/* unused harmony reexport ComponentService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__file_service__ = __webpack_require__(54);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__file_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messages_service__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__messages_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__licences_service__ = __webpack_require__(103);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__licences_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__picture_service__ = __webpack_require__(301);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__picture_service__["a"]; });







//# sourceMappingURL=index.js.map

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = /** @class */ (function () {
    function MessageService(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    MessageService.prototype.alert = function (title, message) {
        var confirm = this.alertCtrl.create({
            //title: title,
            message: message,
            buttons: [
                {
                    text: 'Ok'
                }
            ]
        });
        confirm.present();
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MessageService);
    return MessageService;
}());

//# sourceMappingURL=messages.service.js.map

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_condensation_class__ = __webpack_require__(502);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__report_condensation_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__report_damaged_class__ = __webpack_require__(503);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__report_damaged_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_ipipe_class__ = __webpack_require__(304);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__report_ipipe_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_isurface_class__ = __webpack_require__(504);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__report_isurface_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__report_valve_class__ = __webpack_require__(505);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__report_valve_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__report_pipe_class__ = __webpack_require__(305);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__report_pipe_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__report_flange_class__ = __webpack_require__(506);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__report_flange_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__report_surface_class__ = __webpack_require__(507);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__report_surface_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_report_page_class__ = __webpack_require__(306);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_8__base_report_page_class__["a"]; });









//# sourceMappingURL=index.js.map

/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_surface_material_surface_material_component__ = __webpack_require__(501);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_0__components_surface_material_surface_material_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_report_footer_report_footer_component__ = __webpack_require__(596);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_1__components_report_footer_report_footer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipe_report_pipe_component__ = __webpack_require__(597);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_2__pipe_report_pipe_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flange_report_flange_component__ = __webpack_require__(598);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_3__flange_report_flange_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_edit_picture_edit_picture_component__ = __webpack_require__(599);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__components_edit_picture_edit_picture_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_picture_slide_picture_slide_component__ = __webpack_require__(600);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_5__components_picture_slide_picture_slide_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_errors_report_errors_component__ = __webpack_require__(601);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__components_errors_report_errors_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reports__ = __webpack_require__(602);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_7__reports__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__generic_generic__ = __webpack_require__(603);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_8__generic_generic__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__surface_report_surface_component__ = __webpack_require__(604);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_9__surface_report_surface_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_header_report_header_component__ = __webpack_require__(605);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_10__components_header_report_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_area_report_area_button_component__ = __webpack_require__(606);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_11__components_area_report_area_button_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_area_report_area_modal_component__ = __webpack_require__(362);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_12__components_area_report_area_modal_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_more_more_button_component__ = __webpack_require__(607);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_13__components_more_more_button_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_medium_temp_medium_temp_buttons_component__ = __webpack_require__(608);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_14__components_medium_temp_medium_temp_buttons_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_medium_temp_temp_marker_window_component__ = __webpack_require__(609);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_15__components_medium_temp_temp_marker_window_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_result_report_result_component__ = __webpack_require__(610);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_16__components_result_report_result_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__valve_report_valve_component__ = __webpack_require__(611);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_17__valve_report_valve_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__isurface_report_isurface_component__ = __webpack_require__(612);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_18__isurface_report_isurface_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ipipe_report_ipipe_component__ = __webpack_require__(613);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_19__ipipe_report_ipipe_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__damaged_report_damaged_component__ = __webpack_require__(614);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_20__damaged_report_damaged_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__condensation_report_condensation_component__ = __webpack_require__(615);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_21__condensation_report_condensation_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__leakage_report_leakage_component__ = __webpack_require__(363);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_22__leakage_report_leakage_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__unknown_temp_unknown_temp_component__ = __webpack_require__(617);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_23__unknown_temp_unknown_temp_component__["a"]; });
























//# sourceMappingURL=index.js.map

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__result__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__picture__ = __webpack_require__(102);


var ReportBase = /** @class */ (function () {
    function ReportBase(project, component, item) {
        this.id = '';
        this.name = '';
        this.path = '';
        this.page = null;
        this.result = null;
        this.project = null;
        this.component = null;
        this.pictures = [];
        this.insulated = false;
        this.summary_id = '';
        this.readonly_summary_id = '';
        this.comment = '';
        this.calculator = null;
        if (!!item) {
            Object.assign(this, item);
            this.pictures = (item.pictures || []).map(function (p) { return new __WEBPACK_IMPORTED_MODULE_1__picture__["a" /* Picture */](p); });
            this.project = project;
            this.component = component;
            this.path = item.path;
            this.id = item.id;
            this.result = new __WEBPACK_IMPORTED_MODULE_0__result__["a" /* Result */](item.result);
            this.summary_id = item.summary_id;
            this.readonly_summary_id = item.readonly_summary_id;
            this.comment = item.comment;
            this.insulated = !!this.path.match(/insulated/gi) && !this.path.match(/un-insulated/gi);
        }
    }
    Object.defineProperty(ReportBase.prototype, "is_validation", {
        get: function () {
            return !!this.component && !!this.component.validation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportBase.prototype, "potential_measure", {
        get: function () {
            return 'kWh/a';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportBase.prototype, "has_markers", {
        get: function () {
            var has_markers = !!this.pictures.filter(function (p) { return !!p.has_markers; }).length;
            return has_markers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportBase.prototype, "money_measure", {
        get: function () {
            return '€/a';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportBase.prototype, "min_temp", {
        get: function () {
            return !this.has_markers ? 0 : this.pictures.filter(function (p) { return p.has_markers; }).map(function (m) { return m.min_temp; }).sort()[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportBase.prototype, "max_temp", {
        get: function () {
            return !this.has_markers ? 0 : this.pictures.filter(function (p) { return p.has_markers; }).map(function (m) { return m.max_temp; }).sort().reverse()[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportBase.prototype, "surface_temp", {
        get: function () {
            return !this.has_markers ? 0 : eval(this.pictures.filter(function (p) { return p.has_markers; }).map(function (m) { return m.surface_temp; }).join('+')) / this.pictures.filter(function (p) { return p.has_markers; }).length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportBase.prototype, "annual_saving", {
        get: function () {
            return !this.result || this.result.headLost.power == 0
                //? `Click on Next to get the result` 
                ? ""
                : "from " + this.result.annual_saving_from + " \u20AC to " + this.result.annual_saving_to + " \u20AC";
        },
        enumerable: true,
        configurable: true
    });
    return ReportBase;
}());

//# sourceMappingURL=report-base.js.map

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_service__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportService = /** @class */ (function () {
    function ReportService(service) {
        this.service = service;
    }
    ReportService.prototype.save = function (report) {
        var _this = this;
        return new Promise(function (resolve) {
            if (!!report.component.reports.filter(function (r) { return report.id === r.id; }).length)
                _this.remove(report);
            if (!report.id)
                report.id = Math.random().toString().substr(2);
            report.component.reports.push(report);
            _this.service.save(report.component).then(function (p) { return resolve(p); });
        });
    };
    ReportService.prototype.remove = function (report) {
        report.component.reports = report.component.reports.filter(function (r) { return r.id !== report.id; });
        return report.component.project;
    };
    ReportService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__component_service__["a" /* ComponentService */]])
    ], ReportService);
    return ReportService;
}());

//# sourceMappingURL=report.service.js.map

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(172);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__value__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fields__ = __webpack_require__(173);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__fields__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result__ = __webpack_require__(101);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__result__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_location__ = __webpack_require__(471);
/* unused harmony reexport ComponentLocation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__project__ = __webpack_require__(171);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__project__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__document_class__ = __webpack_require__(472);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__document_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__report_base__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__report_base__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__report_category__ = __webpack_require__(481);
/* unused harmony reexport ReportCategory */








//# sourceMappingURL=index.js.map

/***/ }),
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_project_json__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__file_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messages_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__licences_service__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var STORAGE_KEY = 'tbi-app-v7';
var ProjectService = /** @class */ (function () {
    function ProjectService(file, message, licences) {
        this.file = file;
        this.message = message;
        this.licences = licences;
    }
    ProjectService.prototype.get_all = function (hide) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.file.read_text(STORAGE_KEY, hide)
                            .then(function (r) {
                            _this.licences.projects = JSON.parse(r || '[]').map(function (p) { return new __WEBPACK_IMPORTED_MODULE_1__models__["c" /* Project */](p); });
                            resolve(_this.licences.projects);
                        })
                            .catch(function (ex) {
                            reject(ex);
                            //throw new Error(ex);
                        });
                    })];
            });
        });
    };
    ProjectService.prototype.save_all = function (projects, hide) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var content = JSON.stringify(projects.map(function (p) { return new __WEBPACK_IMPORTED_MODULE_2__models_project_json__["a" /* ProjectJson */](p); }));
                        _this.file.write_text(STORAGE_KEY, content, hide)
                            .then(function (_) { return resolve(true); })
                            .catch(function (ex) {
                            reject(ex);
                            _this.message.alert('Error', JSON.stringify(ex, null, 2));
                        });
                    })];
            });
        });
    };
    ProjectService.prototype.get = function (id, hide) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.get_all(hide).then(function (p) {
                            resolve(!!p.filter(function (p) { return p.id == id; }).length ? p.filter(function (p) { return p.id == id; })[0] : null);
                        }).catch(function (ex) {
                            reject(ex);
                            _this.message.alert('Error', JSON.stringify(ex, null, 2));
                        });
                    })];
            });
        });
    };
    ProjectService.prototype.save = function (project, hide) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.get_all(hide).then(function (p) {
                            var projects = p.filter(function (p) { return p.id !== project.id; });
                            if (!project.id)
                                project.id = Math.random().toString().substr(2);
                            projects.push(project);
                            _this.save_all(projects, hide).then(function (_) { return resolve(true); })
                                .catch(function (ex) {
                                reject(ex);
                                _this.message.alert('Error', JSON.stringify(ex, null, 2));
                            });
                        }).catch(function (ex) {
                            reject(ex);
                            _this.message.alert('Error', JSON.stringify(ex, null, 2));
                        });
                    })];
            });
        });
    };
    ProjectService.prototype.delete = function (project) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.get_all().then(function (r) {
                            var projects = r.filter(function (p) { return p.id !== project.id; });
                            _this.save_all(projects).then(function (_) { return resolve(true); })
                                .catch(function (ex) {
                                reject(ex);
                                _this.message.alert('Error', JSON.stringify(ex, null, 2));
                            });
                        }).catch(function (ex) {
                            reject(ex);
                            _this.message.alert('Error', JSON.stringify(ex, null, 2));
                        });
                    })];
            });
        });
    };
    ProjectService.prototype.create_database = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.file.create_database(STORAGE_KEY)];
            });
        });
    };
    ProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__file_service__["a" /* FileService */], __WEBPACK_IMPORTED_MODULE_4__messages_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_5__licences_service__["a" /* LicencesService */]])
    ], ProjectService);
    return ProjectService;
}());

//# sourceMappingURL=project.service.js.map

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
var FileService = /** @class */ (function () {
    function FileService(loading) {
        this.loading = loading;
    }
    return FileService;
}());

//# sourceMappingURL=file.service.js.map

/***/ }),
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return More; });
var More = {
    CO2: [
        ['Coal anthracite - eia [354]', 354, 1],
        ['Coal bituminous - eia [319]', 319, 2],
        ['Coal lignite - eia [334]', 334, 3],
        ['Diesel - eia [250]', 250, 4],
        ['Gasoline - eia [244]', 244, 5],
        ['Propane - eia [215]', 215, 6],
        ['Natural gas - eia [181]', 181, 7],
        ['Coal import - VDI 4610 [342]', 342, 8],
        ['Brown coal dust - VDI 4610 [353]', 353, 9],
        ['Coal Rheinland- VDI 4610 [410]', 410, 10],
        ['Heavy fuel oil - VDI 4610 [381]', 381, 11],
        ['Natural gas - VDI 4610 [202]', 202, 12],
        ['Free input', null, 0]
    ],
    MATERIALS: [
        ['General value [0.80]', 0.80, 1],
        ['Metallic bright [0.30]', 0.30, 2],
        ['Metallic [0.60]', 0.60, 3],
        ['Corroded [0.80]', 0.80, 4],
        ['Painted [0.90]', 0.90, 5],
        ['Non metallic [0.90]', 0.90, 6],
        ['Free input', null, 0]
    ],
    TIMES: [
        ['1000 hours', 1000, 1],
        ['2000 hours', 2000, 2],
        ['3000 hours', 3000, 3],
        ['4380 hours (1/2 year)', 4380, 4],
        ['5000 hours', 5000, 5],
        ['6000 hours', 6000, 6],
        ['7000 hours', 7000, 7],
        ['8760 hours (full year)', 8760, 8],
        ['Free input', null, 0]
    ],
    MEASURES: [
        ['/kWh', 1],
        ['/GJ', 0.0036]
    ],
    CURRENCIES: [
        ['EUR  (€)', '€', 1],
        ['CHF  (₣)', '₣', 2],
        ['USD  ($)', '$', 3],
        ['GBP  (£)', '£', 4],
        ['Free input', '', 0]
    ]
};
//# sourceMappingURL=more.js.map

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseCalculator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__result__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__const_more_more__ = __webpack_require__(63);



var BaseCalculator = /** @class */ (function () {
    function BaseCalculator(report, fnc) {
        this.report = report;
        this.fnc = fnc;
        this.hr = 1;
        this.hr_min = 1;
        this.hcv = 1;
        this.hcv_min = 1;
        this.hcv_laminar = 1;
        this.hcv_laminar_min = 1;
        this.hcv_laminar_max = 1;
        this.hse = 1;
        this.q = 1;
        this.q_min = 1;
        this.q_max = 1;
        this.qref_pb = 1;
        this.ql = 1;
        this.ql_ref_pb = 1;
        this.Qkwh = 1;
        this.Qkwh_min = 1;
        this.Qkwh_max = 1;
        this.Qε = 1;
        this.Qε_min = 1;
        this.Qε_max = 1;
        this.θm_min = 1;
        this.θm_max = 1;
        this.λm_min = 1;
        this.λm_max = 1;
        this.λm_mim = 1;
        this.λdes_min = 1;
        this.λdes_max = 1;
        this.Savingkwh_min = 1;
        this.Savingkwh_max = 1;
        this.Savingε_min = 1;
        this.Savingε_max = 1;
        this.a = 0.0338;
        this.b = 0.0001173;
        this.c = 0.00000007545;
        this.Cpb_surface_pipe = 1.6;
        this.Cpb_valve_flange = 5;
        this.d = 0.0000000007109;
        this.ε_default = 0.8;
        this.Ft = 1.5;
        this.Δθ = 1;
        this.e_min = 1;
        this.e_max = 1;
        this.hse_min = 0;
        this.hse_max = 0;
        this.hcv_turbulent = 1;
        this.hcv_turbulent_min = 1;
        this.Rse_min = 1;
        this.Rse_max = 1;
        this.Rins_min = 1;
        this.Rins_max = 1;
        this.Insulation_advice = '';
        this.minimum_potential_explanation = '';
        this.lort = 1;
        this.lort_min = 1;
        this.lort_max = 1;
        this.De_min = 1;
        this.De_max = 1;
        this.Sp = 1;
        this.Rle = 1;
        this.ql_min = 1;
        this.ql_max = 1;
        this.Rle_min = 1;
        this.Rle_max = 1;
        /*Report and Project properties*/
        this.δ = 0.00000005670367;
        this.θse = Number(this.report.component.fields.surface_temp);
        this.θse_min = this.θse;
        this.θse_max = this.θse;
        this.θa = Number(this.report.component.fields.ambient_temp);
        this.θa_min = this.θa;
        this.θa_max = this.θa;
        this.Ot = Number(this.report.component.fields.operational_time);
        this.ε = Number(this.report.component.fields.surface_material);
        this.Σ = Number(this.report.component.project.price * this.report.component.project.price_delta);
        this.S = Number(this.report.component.fields.surface || 1);
        this.l = Number(this.report.component.fields.length || this.default_length);
        this.n = Number(this.report.component.fields.number);
        this.DN = Number(this.report.component.fields.nominal_diameter || 0);
    }
    Object.defineProperty(BaseCalculator.prototype, "De", {
        get: function () {
            var _this = this;
            var range = [
                [10, 0.018],
                [15, 0.022],
                [20, 0.027],
                [25, 0.034],
                [32, 0.043],
                [40, 0.049],
                [50, 0.061],
                [60, 0.072],
                [65, 0.077],
                [80, 0.089],
                [100, 0.115],
                [125, 0.141],
                [150, 0.169],
                [200, 0.220],
                [250, 0.273],
                [300, 0.324],
                [350, 0.356],
                [400, 0.407],
                [450, 0.458],
                [500, 0.508],
                [600, 0.610],
                [700, 0.712],
                [800, 0.813],
                [900, 0.915],
                [1000, 1.016],
                [1100, 1.120],
                [1200, 1.220],
                [1400, 1.420],
                [1500, 1.520],
                [1600, 1.620],
                [1800, 1.820],
                [2000, 2.020],
                [2000, 2.020],
                [2200, 2.220],
                [2400, 2.420],
                [2600, 2.620],
                [2800, 2.820],
                [3000, 3.020],
                [3200, 3.220],
                [3400, 3.420]
            ];
            var filter = range.find(function (r) { return r[0] > _this.DN; });
            // return filter ?
            //     range.lastIndexOf(filter) > 0 ? range[range.lastIndexOf(filter) - 1][1] : range[0][1] : range[range.length -1][1];
            return this.DN;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(BaseCalculator.prototype, "default_length", {
        get: function () {
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    BaseCalculator.prototype.get_l = function (index) {
        if (this.Δθ <= 80)
            return [20, 100][index] / 1000;
        if (this.Δθ <= 150)
            return [30, 180][index] / 1000;
        if (this.Δθ <= 250)
            return [50, 250][index] / 1000;
        return [80, 300][index] / 1000;
    };
    BaseCalculator.prototype.execute = function () {
        var _this = this;
        this.fnc.forEach(function (f) { return f.apply(_this); });
        var _find = __WEBPACK_IMPORTED_MODULE_2__const_more_more__["a" /* More */].CO2.find(function (m) { return Number(m[1]) == _this.report.project.co2; });
        var _co2 = Number(!!_find ? _find[2] : isNaN(this.report.project.co2) ? 0 : this.report.project.co2);
        this.report.result = new __WEBPACK_IMPORTED_MODULE_1__result__["a" /* Result */]({
            advise: this.Insulation_advice,
            headLost: new __WEBPACK_IMPORTED_MODULE_0__value__["a" /* Value */]({
                power: this.Qkwh,
                money: this.Qε
            }),
            savingPotentialMin: new __WEBPACK_IMPORTED_MODULE_0__value__["a" /* Value */]({
                power: this.Savingkwh_min,
                money: this.Savingε_min
            }),
            savingPotentialMax: new __WEBPACK_IMPORTED_MODULE_0__value__["a" /* Value */]({
                power: this.Savingkwh_max,
                money: this.Savingε_max
            }),
            co2: [
                this.Qkwh * _co2 / 1000000,
                this.Qkwh_min * _co2 / 1000000,
                this.Qkwh_max * _co2 / 1000000 // * (!Number(this.report.component.fields.unknow_surface_temp) ? 1 : Number(this.report.component.fields.unknow_surface_temp)),
            ]
        });
        // console.log({
        //     //"ql*l*Ot": (this.ql * this.l * this.Ot / 1000),
        //     "De": this.De,
        //     θse: this.θse,
        //     θa: this.θa,
        //     ql: this.ql,
        //     Rins_min: this.Rins_min,
        //     Rins_max: this.Rins_max,
        //     qref_pb: this.qref_pb,
        //     q: this.q,
        //     hr: this.hr, 
        //     hr_min: this.hr_min,
        //     hcv_min: this.hcv_min,
        //     q_min: this.q_min,
        //     q_max: this.q_max,
        //     hse: this.hse,
        //     hse_min: this.hse_min,
        //     hse_max: this.hse_max,
        //     Qkwh: this.Qkwh,
        //     Sp: this.Sp,
        //     Qkwh_min: this.Qkwh_min,
        //     Qkwh_max: this.Qkwh_max,
        //     ql_ref_pb: this.ql_ref_pb,
        //     Qε: this.Qε,
        //     Qε_min: this.Qε_min,
        //     Qε_max: this.Qε_max
        // });
        return this.report;
    };
    return BaseCalculator;
}());

//# sourceMappingURL=base-calculator.class.js.map

/***/ }),
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_project__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__project_page_base__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reports__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_unique_device_id__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_licences_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__summary_summary__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_component__ = __webpack_require__(79);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProjectsPage = /** @class */ (function (_super) {
    __extends(ProjectsPage, _super);
    function ProjectsPage(navCtrl, navParams, service, platform, alertCtrl, actionSheetCtrl, licences, uuid, keyboard) {
        var _this = _super.call(this, alertCtrl, service, keyboard) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.service = service;
        _this.platform = platform;
        _this.alertCtrl = alertCtrl;
        _this.actionSheetCtrl = actionSheetCtrl;
        _this.licences = licences;
        _this.keyboard = keyboard;
        _this.projects = [];
        _this.edit_mode = false;
        _this.user_name = '';
        _this.top_categories = [];
        _this.apps = [];
        // uuid.get()
        //   .then((uuid: any) => console.log(uuid))
        //   .catch((error: any) => console.log(error));
        _this.user_name = _this.navParams.get("user_name") || _this.user_name;
        return _this;
    }
    ProjectsPage_1 = ProjectsPage;
    ProjectsPage.prototype.duplicate = function (project, event) {
        var _this = this;
        if (!!event) {
            event.cancelBubble = true;
            event.preventDefault();
        }
        var new_project = new __WEBPACK_IMPORTED_MODULE_0__models_project__["b" /* Project */](project);
        new_project.id = '';
        new_project.name = project.name + " Copy";
        new_project.date = new Date();
        new_project.components = new_project.components.map(function (c) {
            var new_component = new __WEBPACK_IMPORTED_MODULE_10__models_component__["a" /* TbiComponent */](new_project, c);
            new_component.id = '';
            new_component.date = new_project.date;
            new_component.fields.location = c.fields.location + " Copy";
            return new_component;
        });
        this.service.save(new_project).then(function () { return _this.load(); });
    };
    ProjectsPage.prototype.open_report = function (project) {
        if (this.edit_mode) {
            this.edit_mode = false;
            return this.navigate_to_edit(project);
        }
        if (this.licences.lock) {
            this.alert_licence();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__reports__["w" /* ReportsPage */], {
                project: project,
                report: null,
                parent: this
            });
        }
    };
    ProjectsPage.prototype.ask_for_action = function (project) {
        var _this = this;
        var buttons = [
            {
                text: 'Open',
                icon: 'document',
                handler: function () {
                    _this.open(project);
                }
            },
            {
                text: 'Edit properties',
                icon: 'create',
                handler: function () {
                    _this.navigate_to_edit(project);
                }
            },
            {
                text: 'Duplicate',
                icon: 'copy',
                handler: function () {
                    _this.duplicate(project);
                }
            },
            {
                text: 'Delete',
                role: 'destructive',
                icon: 'trash',
                handler: function () {
                    setTimeout(function () { return _this.delete_project(project, null); }, 250);
                }
            }, {
                text: 'Cancel',
                //icon: 'thumbs-down',
                role: 'cancel'
            }
        ];
        if (this.licences.type != 'PRO') {
            buttons.splice(3, 1);
            buttons.splice(2, 1);
        }
        this.actionSheetCtrl.create({
            //title: 'What would you like to do?',
            cssClass: 'project-action-sheet',
            buttons: buttons
        }).present();
    };
    ProjectsPage.prototype.alert_licence = function () {
        this.alertCtrl.create({
            //title: 'Licence',
            message: 'To create more projects upgrade to TBI-App professinal',
            cssClass: 'project-action-sheet',
            buttons: [
                {
                    text: 'Upgrade',
                    handler: function () {
                        window.open('http://www.eiif.org/tbi', '_system', 'location=yes');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        }).present();
    };
    ProjectsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.load().then(function () {
            if (!!_this.navParams.get('summary'))
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__summary_summary__["a" /* SummaryPage */], { project: _this.projects.find(function (p) { return p.id == _this.navParams.get('project'); }) }, { animate: true, direction: 'backward' });
            if (!_this.projects.length && _this.licences.type != 'PRO') {
                _this.service.save(new __WEBPACK_IMPORTED_MODULE_0__models_project__["b" /* Project */]({
                    name: 'TBI Easy',
                    price: 0.05,
                    price_delta: 1,
                    co2: 202,
                    currency: 'EUR',
                    user: localStorage.getItem('tbi-user')
                })).then(function () { return setTimeout(function () { return _this.ionViewWillEnter(); }, 500); });
            }
        });
    };
    ProjectsPage.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.service.get_all().then(function (p) {
                _this.projects = p;
                if (!_this.projects.length)
                    _this.edit_mode = false;
                resolve(true);
            });
        });
    };
    ProjectsPage.prototype.open = function (project) {
        if (this.remove_mode) {
            this.remove_mode = false;
        }
        else if (this.edit_mode) {
            this.edit_mode = false;
            this.navigate_to_edit(project);
        }
        else {
            this.navigate_to_reports(project);
        }
    };
    ProjectsPage.prototype.navigate_to_reports = function (project) {
        return !!project.components.length
            ? this.open_summary(project)
            : this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__reports__["w" /* ReportsPage */], {
                project: project,
                parent: this
            });
    };
    ProjectsPage.prototype.navigate_to_edit = function (project, event) {
        if (!!event)
            event.stopPropagation();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit__["a" /* EditProjectPage */], {
            project: project,
            parent: ProjectsPage_1
        });
    };
    ProjectsPage.prototype.toggle_edit_mode = function () {
        this.edit_mode = !this.edit_mode;
    };
    ProjectsPage.prototype.select_file = function () {
        var _this = this;
        this.edit_mode = false;
        setTimeout(function () { return _this.create(); }, 200);
    };
    ProjectsPage.prototype.create = function () {
        var _this = this;
        if (this.licences.type == 'BASIC' && !this.edit_mode && this.projects.length > 0) {
            this.alert_licence();
            return;
        }
        setTimeout(function () { return _this.navigate_to_edit(new __WEBPACK_IMPORTED_MODULE_0__models_project__["b" /* Project */]()); }, this.edit_mode ? 200 : 0);
        this.edit_mode = false;
    };
    ProjectsPage.prototype.create_db = function () {
        localStorage.removeItem('tbi-licence');
        //this.navCtrl.push(DownloadPage);
        // this.service.create_database().then(blob => {
        //   var a = document.createElement("a"),
        //     url = URL.createObjectURL(blob);
        //   a.href = url;
        //   a.download = 'db.zip';
        //   a.click();
        //   setTimeout(function () {
        //     window.URL.revokeObjectURL(url);
        //   }, 0);
        // })
    };
    ProjectsPage.prototype.after_delete = function () {
        this.load();
    };
    ProjectsPage.prototype.flatten = function (arr) {
        return [].concat.apply([], arr);
    };
    ProjectsPage.prototype.get_by_type = function (project, type) {
        //return project.get_reports_by_types(type);
        return this.flatten(project.components.filter(function (c) { return !c.validation; }).map(function (c) { return c.reports; })).filter(function (r) { return !!r.path.match(new RegExp('(' + type + ')', 'gi')); });
    };
    ProjectsPage.prototype.open_summary = function (project) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__summary_summary__["a" /* SummaryPage */], { project: project, parent: this });
    };
    ProjectsPage.prototype.go_next = function () {
        this.navigate_to_reports(this.projects[0]);
        // if (!!this.projects.length && !this.projects[0].components.length) {
        //   this.open_summary(this.projects[0])
        // } else {
        //   (new ReportRouter(this.projects[0], this.projects[0].components[0], this.navCtrl)).navigate_to_report(this.projects[0].components[0].reports[0].path, this.projects[0].components[0].reports[0].summary_id, this.projects[0].components[0].reports[0], null, this.projects[0].components[0].result);
        // }
    };
    ProjectsPage = ProjectsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'page-project',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\projects\projects.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton>\n\n    <ion-title>Project list</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button  icon-only small color="light" on-tap="create()">\n\n        <ion-icon name="md-add-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-grid projects hidden-xs style="margin: -1rem 0">\n\n    <ion-row class="row">\n\n      <ion-col col-1>\n\n      </ion-col>\n\n      <ion-col col-0 col-sm-2>\n\n      </ion-col>\n\n      <ion-col class="col col-12 col-sm-10">\n\n        <ion-row col-sm-12>\n\n          <ion-col class="col" col-12>\n\n            <h1 no-margin no-padding></h1>\n\n          </ion-col>\n\n          <ion-col col-12 col-sm-8 no-padding>\n\n          </ion-col>\n\n          <ion-col class="flex bg-gray" col-2 col-sm-1 type-report svg="insulation">\n\n          </ion-col>\n\n          <ion-col class="flex" col-2 col-sm-1 type-report svg="safety">\n\n          </ion-col>\n\n          <ion-col class="flex bg-gray" col-2 col-sm-1 type-report svg="maintenance">\n\n          </ion-col>\n\n          <ion-col class="flex" col-2 col-sm-1 type-report svg="custom">\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid projects class="projects" col-12>\n\n    <ion-row *ngFor="let p of projects">\n\n      <ion-col col-1 text-right class="flex vertical-middle">\n\n        <ion-icon style="font-size: 2rem; margin: auto" (click)="ask_for_action(p, $event)" slot="icon-only" name="md-more"></ion-icon>\n\n      </ion-col>\n\n      <ion-col col-0 col-sm-2 hidden-xs id="project-{{p.id}}" (click)="navigate_to_reports(p)">\n\n        <img [src]="p.picture">\n\n      </ion-col>\n\n      <ion-col class="transition-width" [ngClass]="{\'col-12 col-sm-10\': !editing_mode, \'col-11 col-sm-9\': editing_mode}">\n\n        <ion-row col-sm-12>\n\n          <ion-col col-12 no-padding (tap)="navigate_to_reports(p)">\n\n            <h1 no-margin no-padding>{{p.name}}</h1>\n\n          </ion-col>\n\n          <ion-col col-12 col-sm-8 no-padding (click)="navigate_to_reports(p)">\n\n            <h5 no-margin no-padding>Energy price: {{p.price}} {{p.currency}}/{{p.measure}}</h5>\n\n            <h5 no-margin no-padding>CO<sub>2</sub> emissions: {{p.co2}} grCO<sub>2</sub>/{{p.m_measure}}</h5>\n\n            \n\n          </ion-col>\n\n          <ion-col hidden-xs col-2 col-sm-1 class="flex bg-gray">\n\n            <h4 no-margin>{{get_by_type(p, \'pipe|surface|flange|valve\').length}}</h4>\n\n          </ion-col>\n\n          <ion-col hidden-xs col-2 col-sm-1 class="flex">\n\n            <h4 no-margin>{{get_by_type(p, \'safety\').length}}</h4>\n\n          </ion-col>\n\n          <ion-col hidden-xs col-2 col-sm-1 class="flex bg-gray">\n\n            <h4 no-margin>{{get_by_type(p, \'maintenance\').length}}</h4>\n\n          </ion-col>\n\n          <ion-col hidden-xs col-2 col-sm-1 class="flex">\n\n            <h4 no-margin>{{get_by_type(p, \'custom\').length}}</h4>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <div license-alert *ngIf="1==2 && licences.type==\'BASIC\'"  col-10 offset-1>\n\n    <ion-grid no-padding>\n\n      <ion-row no-padding>\n\n        <ion-col col-12 no-padding>\n\n          La versión BASIC solo le permite crear 5 componentes, contrate la versión PRO o ENTERPRISE y disfrute de\n\n          todas sus ventajas.\n\n        </ion-col>\n\n        <ion-col col-4 offset-8 text-right>\n\n          <button ion-button small round color="light" outline>Upgrade NOW</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-4 text-left>\n\n        <button *ngIf="licences.type==\'PRO\' || 1==1" ion-button small color="light" (click)="create_db()">\n\n          <ion-icon visible-xs name="cloud-download"></ion-icon>\n\n          <span hidden-xs>Download data</span>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-4 text-center>\n\n        <tools></tools>\n\n      </ion-col>\n\n      <ion-col col-4 text-right>\n\n        <button *ngIf="licences.type!=\'PRO\'" ion-button small color="royal" (click)="go_next()">\n\n          <ion-icon visible-xs name="arrow-forward">\n\n          </ion-icon><span hidden-xs>Next</span>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\projects\projects.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_8__services_licences_service__["a" /* LicencesService */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* Keyboard */]])
    ], ProjectsPage);
    return ProjectsPage;
    var ProjectsPage_1;
}(__WEBPACK_IMPORTED_MODULE_4__project_page_base__["a" /* ProjectPageBase */]));

//# sourceMappingURL=projects.js.map

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Marker; });
var Marker = /** @class */ (function () {
    function Marker(item) {
        this.id = '';
        this.x = 0;
        this.y = 0;
        this.temperature = null;
        if (!!item) {
            Object.assign(this, item);
            this.id = item.id || Math.random().toString().substr(2);
        }
    }
    Object.defineProperty(Marker.prototype, "hasValue", {
        get: function () {
            return !isNaN(parseFloat(String(this.temperature)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marker.prototype, "position", {
        get: function () {
            return "translate(" + this.x + "px," + this.y + "px)";
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Marker.prototype, "transform", {
        get: function () {
            return "matrix(1 0 0 1 " + (this.temperature.toString().length === 1 ? 150 : this.temperature.toString().length === 2 ? 120 : 90) + " 228)";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Marker.prototype, "color", {
        get: function () {
            return this.temperature < 0
                ? 'cold'
                : this.temperature < 100
                    ? 'templade'
                    : 'warm';
        },
        enumerable: true,
        configurable: true
    });
    return Marker;
}());

//# sourceMappingURL=marker.js.map

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IMAGES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__non_picture__ = __webpack_require__(174);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__non_picture__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__insulation__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mechanical__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__surface__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__co2__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__increase__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__like__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logo__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tbi__ = __webpack_require__(480);










var IMAGES = {
    NON_PICTURE: __WEBPACK_IMPORTED_MODULE_0__non_picture__["a" /* NON_PICTURE */],
    INSULATION: __WEBPACK_IMPORTED_MODULE_1__insulation__["a" /* INSULATION */],
    MECHANICAL: __WEBPACK_IMPORTED_MODULE_2__mechanical__["a" /* MECHANICAL */],
    SURFACE: __WEBPACK_IMPORTED_MODULE_3__surface__["a" /* SURFACE */],
    CO2: __WEBPACK_IMPORTED_MODULE_4__co2__["a" /* CO2 */],
    INCREASE: __WEBPACK_IMPORTED_MODULE_5__increase__["a" /* INCREASE */],
    LIKE: __WEBPACK_IMPORTED_MODULE_6__like__["a" /* LIKE */],
    LOGO: __WEBPACK_IMPORTED_MODULE_7__logo__["a" /* LOGO */],
    TBI: __WEBPACK_IMPORTED_MODULE_8__tbi__["a" /* TBI */]
};
//# sourceMappingURL=index.js.map

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TbiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fields__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__marker__ = __webpack_require__(77);



var TbiComponent = /** @class */ (function () {
    function TbiComponent(project, item, validation) {
        var _this = this;
        this.id = '';
        this.project = null;
        this.reports = [];
        this.fields = new __WEBPACK_IMPORTED_MODULE_1__fields__["a" /* Fields */]();
        this.date = new Date();
        this.validation = '';
        this.validationReport = null;
        this.project = project;
        if (!!item) {
            this.fields = new __WEBPACK_IMPORTED_MODULE_1__fields__["a" /* Fields */](item.fields);
            this.project = project;
            if (!!item.date)
                this.date = item.date instanceof Date ? item.date : new Date(String(item.date));
            this.id = item.id || Math.random().toString().substr(2);
            this.reports = (item.reports || []).map(function (r) { return new __WEBPACK_IMPORTED_MODULE_0__report_base__["a" /* ReportBase */](project, _this, r); });
            this.markers = (item.markers || []).map(function (m) { return new __WEBPACK_IMPORTED_MODULE_2__marker__["a" /* Marker */](m); });
            this.validation = item.validation;
            var report = this.reports.find(function (r) { return !!(r.path).match(/(surface|pipe|valve|flange)/gi); });
            this.result = !!report ? report.result : null;
            this.validationReport = validation;
        }
    }
    TbiComponent.prototype.flatten = function (arr) {
        return [].concat.apply([], arr);
    };
    Object.defineProperty(TbiComponent.prototype, "is_hot", {
        get: function () {
            return (this.fields.surface_temp || 0) > 35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TbiComponent.prototype, "insulated", {
        get: function () {
            var report = this.reports.find(function (r) { return !!r.insulated; });
            return !!report;
        },
        enumerable: true,
        configurable: true
    });
    TbiComponent.prototype.reports_by_type = function (type) {
        var _this = this;
        var result = this.reports.filter(function (r) { return !!r.path.match(new RegExp('(' + type + ')', 'gi')); });
        if (type.lastIndexOf('hot') != -1) {
            var r = this.reports.find(function (r) { return !!r.path.match(/(surface|pipe|valve|flange)/gi) && (_this.is_hot); });
            if (!!r)
                result.push(r);
        }
        return result;
    };
    Object.defineProperty(TbiComponent.prototype, "pictures", {
        get: function () {
            return this.flatten(this.reports.map(function (r) { return r.pictures; }));
        },
        enumerable: true,
        configurable: true
    });
    TbiComponent.prototype.all_markers = function (report) {
        var _this = this;
        return ((this.markers || []).filter(function (m) { return m.temperature != null; }) || [])
            .concat(this.flatten(this.reports.filter(function (r) { return r.id != report.id; }).map(function (r) { return _this.flatten(r.pictures.map(function (p) { return p.markers; })); })))
            .concat(this.flatten(report.pictures.map(function (p) { return p.markers; })));
    };
    TbiComponent.prototype.has_markers = function (report) {
        return !!this.all_markers(report).length;
    };
    TbiComponent.prototype.min_temp = function (report) {
        if (!this.has_markers(report))
            return 0;
        return this.all_markers(report).map(function (m) { return Number(m.temperature); }).sort(function (a, b) { return Number(a) > Number(b) ? 1 : -1; })[0];
    };
    TbiComponent.prototype.max_temp = function (report) {
        if (!this.has_markers(report))
            return 0;
        return this.all_markers(report).map(function (m) { return Number(m.temperature); }).sort(function (a, b) { return Number(a) > Number(b) ? -1 : 1; })[0];
    };
    TbiComponent.prototype.medium_temp = function (report) {
        if (!this.has_markers(report))
            return 0;
        var markers = this.all_markers(report).map(function (m) { return parseFloat(m.temperature.toString()); });
        return Number((markers.reduce(function (a, t) { return a + Number(t); }, 0) / this.all_markers(report).length).toFixed(2));
    };
    // private update_surface_temp(): TbiComponent {
    //     const surface_temp = this.pictures.map(p => p.surface_temp).filter(p => p !== null);
    //     if (surface_temp.length === 0) return;
    //     this.fields.surface_temp = eval(surface_temp.join('+')) / surface_temp.length
    //     return this;
    // }
    TbiComponent.prototype.get_reports_by_type = function (type) {
        return this.reports.filter(function (r) { return !!r.path.match(new RegExp('(' + type + ')', 'gi')); });
    };
    return TbiComponent;
}());

//# sourceMappingURL=component.js.map

/***/ }),
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Result; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(172);

var Result = /** @class */ (function () {
    function Result(result) {
        this.headLost = new __WEBPACK_IMPORTED_MODULE_0__value__["a" /* Value */]();
        this.previousHeadLost = new __WEBPACK_IMPORTED_MODULE_0__value__["a" /* Value */]();
        this.savingPotentialMin = new __WEBPACK_IMPORTED_MODULE_0__value__["a" /* Value */]();
        this.savingPotentialMax = new __WEBPACK_IMPORTED_MODULE_0__value__["a" /* Value */]();
        this.advise = '';
        this.co2 = [0, 0, 0, 0]; //Last index for previous
        if (!result)
            return;
        Object.assign(this, result);
        this.advise = result.advise;
        this.headLost = new __WEBPACK_IMPORTED_MODULE_0__value__["a" /* Value */](result.headLost);
        if (!!result.previousHeadLost)
            this.previousHeadLost = new __WEBPACK_IMPORTED_MODULE_0__value__["a" /* Value */](result.previousHeadLost);
        this.savingPotentialMin = new __WEBPACK_IMPORTED_MODULE_0__value__["a" /* Value */](result.savingPotentialMin);
        this.savingPotentialMax = new __WEBPACK_IMPORTED_MODULE_0__value__["a" /* Value */](result.savingPotentialMax);
        this.co2 = result.co2 || [0, 0, 0];
        this.annual_saving_from = result.annual_saving_from || 0;
        this.annual_saving_to = result.annual_saving_to || 0;
    }
    return Result;
}());

//# sourceMappingURL=result.js.map

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Picture; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__marker__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_with_picture__ = __webpack_require__(299);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Picture = /** @class */ (function (_super) {
    __extends(Picture, _super);
    function Picture(item) {
        var _this = _super.call(this, item) || this;
        _this.markers = [];
        if (!!item) {
            Object.assign(_this, item);
            _this.markers = (item.markers || []).map(function (m) { return new __WEBPACK_IMPORTED_MODULE_0__marker__["a" /* Marker */](m); });
        }
        return _this;
    }
    Object.defineProperty(Picture.prototype, "file", {
        get: function () {
            var _split = (this.picture || '').split('/');
            if (_split.length < 2)
                return '';
            return _split[_split.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Picture.prototype, "folder", {
        get: function () {
            if (!this.picture)
                return '';
            return this.picture.replace(this.file, '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Picture.prototype, "has_markers", {
        get: function () {
            return !!this.markers.filter(function (m) { return m.hasValue; }).length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Picture.prototype, "markers_with_values", {
        get: function () {
            return this.markers.filter(function (m) { return m.hasValue; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Picture.prototype, "min_temp", {
        get: function () {
            return !this.has_markers ? null : this.markers.filter(function (m) { return m.hasValue; }).map(function (m) { return Number(m.temperature); }).sort(function (a, b) { return Number(a) > Number(b) ? 1 : -1; })[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Picture.prototype, "max_temp", {
        get: function () {
            return !this.has_markers ? null : this.markers.filter(function (m) { return m.hasValue; }).map(function (m) { return Number(m.temperature); }).sort(function (a, b) { return Number(a) > Number(b) ? -1 : 1; })[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Picture.prototype, "surface_temp", {
        get: function () {
            return !this.has_markers ? null : eval(this.markers.filter(function (m) { return m.hasValue; }).map(function (m) { return Number(m.temperature); }).join('+')) / this.markers.filter(function (m) { return m.hasValue; }).length;
        },
        enumerable: true,
        configurable: true
    });
    return Picture;
}(__WEBPACK_IMPORTED_MODULE_1__model_with_picture__["a" /* ModelWithPicture */]));

//# sourceMappingURL=picture.js.map

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LicencesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var LicencesService = /** @class */ (function () {
    function LicencesService(http) {
        this.http = http;
        this.lock = false;
        this._projects = [];
    }
    LicencesService.prototype.validate = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        if (code.toLocaleLowerCase() == 'pro') {
                            resolve({ ok: true, message: 'Validation code is valid.' });
                            _this.type = 'PRO';
                        }
                        else {
                            _this.type = 'BASIC';
                            resolve({ ok: false, message: 'Validation code is invalid.' });
                        }
                    })
                    //let result  = await this.http.post("http://eiif.testengineonline.com/tbi-app/validate-code", {code: code}).toPromise();
                    //debugger;
                    //return (<any>result).message.toString();
                ];
            });
        });
    };
    Object.defineProperty(LicencesService.prototype, "type", {
        get: function () {
            return localStorage.getItem('tbi-licence') || 'BASIC';
        },
        set: function (type) {
            localStorage.setItem('tbi-licence', type);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LicencesService.prototype, "projects", {
        get: function () {
            return this._projects;
        },
        set: function (projects) {
            this.lock = this.type == 'BASIC' && this.projects.reduce(function (a, p) { return a.concat(p.components); }, []).length >= 1;
            this._projects = projects;
        },
        enumerable: true,
        configurable: true
    });
    LicencesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], LicencesService);
    return LicencesService;
}());

//# sourceMappingURL=licences.service.js.map

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__summary_edit__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_report_router__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reports__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_pdf_export__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__progress_kendo_drawing__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__projects_projects__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_opener__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__const_images__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__init_init__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__projects_edit__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
















var SummaryPage = /** @class */ (function () {
    function SummaryPage(navParams, alertCtrl, actionSheetCtrl, modalCtrl, service, navCtrl, opener, message, licences, file, cdRef) {
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.service = service;
        this.navCtrl = navCtrl;
        this.opener = opener;
        this.message = message;
        this.licences = licences;
        this.file = file;
        this.cdRef = cdRef;
        this.creating_pdf = false;
        this.images = __WEBPACK_IMPORTED_MODULE_13__const_images__["a" /* IMAGES */];
        this.components = [];
        this.heat_lost = new __WEBPACK_IMPORTED_MODULE_2__models__["f" /* Value */]();
        this.saving_potential_min = new __WEBPACK_IMPORTED_MODULE_2__models__["f" /* Value */]();
        this.saving_potential_max = new __WEBPACK_IMPORTED_MODULE_2__models__["f" /* Value */]();
        this.advises = new Map([
            ['', ''],
            ['System OK', 'OK'],
            ['Insulation recommended', 'Recommended'],
            ['SAFETY-Insulation recommended', 'SAFETY-Recommended'],
            ['Savings can be achieved by increasing insulation performance or thickness', 'SAVINGS-achieved']
        ]);
        this.totals = new __WEBPACK_IMPORTED_MODULE_2__models__["e" /* Result */]();
    }
    SummaryPage_1 = SummaryPage;
    SummaryPage.prototype.go_to_projects = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__projects_projects__["a" /* ProjectsPage */]);
    };
    SummaryPage.prototype.go_to_reports = function (component) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__reports__["w" /* ReportsPage */], {
            project: this.project,
            component: component,
            parent: this
        });
    };
    SummaryPage.prototype.ellipsis = function (text, size) {
        if (size === void 0) { size = 40; }
        return text.length + 3 <= size ? text : text.substr(0, size) + '...';
    };
    SummaryPage.prototype.add_report = function (type, component, event) {
        event.cancelBubble = true;
        event.preventDefault();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__reports__["w" /* ReportsPage */], {
            project: this.project,
            parent: this,
            to: type,
            component: component
        });
    };
    SummaryPage.prototype.actions = function (cl, event) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var actionSheet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        event.cancelBubble = true;
                        return [4 /*yield*/, this.actionSheetCtrl.create({
                                buttons: [
                                    {
                                        text: 'Add report',
                                        icon: 'ios-add-circle',
                                        handler: function () {
                                            _this.go_to_reports(cl);
                                        }
                                    }, {
                                        text: 'Edit',
                                        icon: 'ios-create',
                                        handler: function () {
                                            _this.edit(cl);
                                        }
                                    }, {
                                        text: 'Duplicate',
                                        icon: 'ios-copy',
                                        handler: function () {
                                            _this.duplicate(cl);
                                        }
                                    }, {
                                        text: 'Validate',
                                        icon: 'checkmark-circle',
                                        handler: function () {
                                            _this.validate(cl);
                                        }
                                    }, {
                                        text: 'Delete',
                                        role: 'ios-destructive',
                                        icon: 'trash',
                                        handler: function () {
                                            _this.remove(cl, event);
                                        }
                                    }, {
                                        text: 'Cancel',
                                        icon: 'close',
                                        role: 'cancel',
                                        handler: function () {
                                            console.log('Cancel clicked');
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        if (this.licences.type != 'PRO') {
                            actionSheet.data.buttons.splice(3, 1);
                            actionSheet.data.buttons.splice(2, 1);
                            actionSheet.data.buttons.splice(0, 1);
                        }
                        if (this.licences.type == 'PRO' && !!cl.validationReport
                            || cl.reports.find(function (r) { return r.insulated; })
                            || (!cl.reports.filter(function (r) { return r.path.match(/(surface|pipe|valve|flange)/gi); }).length)) {
                            actionSheet.data.buttons.splice(3, 1);
                        }
                        if (this.licences.type == 'PRO' && !!cl.validationReport) {
                            actionSheet.data.buttons.splice(1, 1);
                        }
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SummaryPage.prototype.duplicate = function (c) {
        var _this = this;
        var component = new __WEBPACK_IMPORTED_MODULE_7__models_component__["a" /* TbiComponent */](c.project, c);
        component.id = Math.random().toString().substr(2);
        component.validationReport = null;
        component.fields.location += ' Copy';
        component.date = new Date();
        this.project.components.push(component);
        this.service.save(this.project).then(function (p) {
            _this.navCtrl.setRoot(SummaryPage_1, { project: _this.project });
        });
    };
    SummaryPage.prototype.validate = function (c) {
        var component = new __WEBPACK_IMPORTED_MODULE_7__models_component__["a" /* TbiComponent */](c.project, c);
        component.id = '';
        component.date = new Date();
        component.validation = c.id;
        component.result = null;
        var report = new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* ReportBase */](component.project, component, c.reports.find(function (r) { return !!r.path.match(/(surface|pipe|valve|flange)/gi); }));
        report.result = null;
        component.reports.push(report);
        component.fields = new __WEBPACK_IMPORTED_MODULE_2__models__["b" /* Fields */]({
            unknow_surface_temp: 0,
            location: component.fields.location,
            operational_time: component.fields.operational_time,
            nominal_diameter: component.fields.nominal_diameter,
            number: c.fields.number,
            surface: report.name == "Uninsulated Surface" ? component.fields.surface : null
        });
        this.open(report, null, c.result);
    };
    SummaryPage.prototype.remove = function (cl, event) {
        var _this = this;
        event.preventDefault();
        event.cancelBubble = true;
        var confirm = this.alertCtrl.create({
            //title: `Remove`,
            message: "Do you agree to remove permanently '" + cl.fields.location + "' component?",
            buttons: [
                {
                    text: 'Yes',
                    handler: function () {
                        _this.components = _this.components.filter(function (c) { return c !== cl; });
                        _this.project.components = _this.project.components.filter(function (c) { return c !== cl; });
                        _this.service.save(_this.project).then(function () { return _this.navCtrl.setRoot(SummaryPage_1, { project: _this.project }); });
                    }
                },
                {
                    text: 'No',
                    role: 'cancel'
                }
            ]
        });
        confirm.present();
    };
    SummaryPage.prototype.hide_svg = function (pdf) {
        // Array.from(pdf.element.nativeElement.getElementsByTagName('svg'))
        //   .forEach((svg: any, i: number) => {
        //     if (i < 3) svg.style.fill = '#fff';
        //     let img = document.createElement('img');
        //     img.src = `data:image/svg+xml;base64,${window.btoa(new XMLSerializer().serializeToString(svg))}`;
        //     img.width = svg.getBoundingClientRect().width;
        //     //img.height = svg.getBoundingClientRect().height;
        //     svg.parentElement.appendChild(img);
        //   });
        return new Promise(function (resolve) {
            //let chart_zoom = getComputedStyle(document.querySelector(".result-chart")).zoom;
            document.querySelector(".result-chart").className = 'result-chart zoom-normal';
            pdf.element.nativeElement.className = 'print';
            resolve(true);
        });
    };
    SummaryPage.prototype.show_svg = function (pdf, restore) {
        // Array.from(pdf.element.nativeElement.getElementsByTagName('img'))
        //   .forEach((img: any) => img.remove());
        return new Promise(function (resolve) {
            document.querySelector(".result-chart").className = 'result-chart';
            pdf.element.nativeElement.className = '';
            resolve(true);
        });
    };
    SummaryPage.prototype.export_pdf = function () {
        var _this = this;
        this.creating_pdf = true;
        this.hide_svg(this.pdf).then(function (restores) {
            _this.pdf.export().then(function (g) {
                Object(__WEBPACK_IMPORTED_MODULE_9__progress_kendo_drawing__["b" /* exportPDF */])(g).then(function (data) {
                    _this.file.create_pdf(data, "TBI-\"" + _this.project.name + "\"").then(function (r) {
                        _this.opener.open(r, 'application/pdf');
                        _this.show_svg(_this.pdf, restores).then(function () { return _this.creating_pdf = false; });
                    });
                });
            });
        });
    };
    SummaryPage.prototype.open = function (report, event, result) {
        if (event)
            event.cancelBubble = true;
        (new __WEBPACK_IMPORTED_MODULE_5__models_report_router__["a" /* ReportRouter */](report.component.project, report.component, this.navCtrl)).navigate_to_report(report.path, report.summary_id, report, null, result);
    };
    SummaryPage.prototype.edit_validation = function (cl) {
        return this.edit(Object.assign(cl.validationReport, { project: cl.project }), cl.result);
    };
    SummaryPage.prototype.edit = function (cl, result) {
        var _this = this;
        if (!!cl.validationReport)
            return;
        if (cl.reports.length == 1) {
            (new __WEBPACK_IMPORTED_MODULE_5__models_report_router__["a" /* ReportRouter */](cl.project, cl, this.navCtrl)).navigate_to_report(cl.reports[0].path, cl.reports[0].summary_id, cl.reports[0], null, result);
            return this;
        }
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__summary_edit__["a" /* SummaryEditPage */], {
            tbi_component: cl
        }, {
            cssClass: "modal-window-summary",
            showBackdrop: true,
            enableBackdropDismiss: false
        });
        modal.onDidDismiss(function (v) {
            if (!v)
                return _this;
            var report = cl.reports.find(function (r) { return r.id == v; });
            (new __WEBPACK_IMPORTED_MODULE_5__models_report_router__["a" /* ReportRouter */](cl.project, cl, _this.navCtrl)).navigate_to_report(report.path, report.summary_id, report);
        });
        modal.present();
        return this;
    };
    SummaryPage.prototype.next_action = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, actionSheet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        event.cancelBubble = true;
                        user = !!this.navParams.get('parent') && this.navParams.get('parent').hasOwnProperty('report') ? localStorage.getItem('tbi-user') : '';
                        actionSheet = this.licences.type != 'PRO'
                            ? this.create_action_sheet_basic(user)
                            : this.create_action_sheet(user);
                        return [4 /*yield*/, actionSheet.present()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SummaryPage.prototype.create_action_sheet = function (user) {
        var _this = this;
        if (user === void 0) { user = ''; }
        var action_sheet = this.actionSheetCtrl.create({
            title: !!user ? "The component " + this.navParams.data.parent.report.component.fields.location + " has been saved by " + user : null,
            subTitle: 'What do you want to do next?',
            buttons: [
                {
                    text: 'Change user',
                    //icon: 'person',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__init_init__["a" /* InitPage */]);
                    }
                },
                {
                    text: 'Continue',
                    //icon: 'add-circle',
                    handler: function () {
                        _this.go_to_reports(null);
                    }
                },
                {
                    text: 'Change project',
                    //icon: 'checkmark-circle',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__projects_projects__["a" /* ProjectsPage */]);
                        // this.navCtrl.push(EditProjectPage, {
                        //   project: this.project,
                        //   parent: this
                        // });
                    }
                },
                {
                    text: 'New project',
                    //icon: 'checkmark-circle',
                    handler: function () {
                        //this.navCtrl.setRoot(ProjectsPage);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__projects_edit__["a" /* EditProjectPage */], {
                            project: new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* Project */](),
                            parent: SummaryPage_1
                        });
                    }
                },
                {
                    text: 'Cancel',
                    //icon: 'close',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        return action_sheet;
    };
    SummaryPage.prototype.create_action_sheet_basic = function (user) {
        var _this = this;
        var action_sheet = this.actionSheetCtrl.create({
            //title: !!user ? `The component reported by ${user} have been saved` : null,
            //title: !!user ? `The component ${this.navParams.data.parent.report.component.fields.location} has been saved by ${user}` : null,
            //subTitle: 'What do you want to do next?',
            title: 'What do you want to do next?',
            cssClass: 'basic_sheet',
            buttons: [
                {
                    text: 'Delete & New Component',
                    //icon: 'add-circle',
                    handler: function () {
                        _this.project.components = [];
                        _this.go_to_reports(null);
                    }
                },
                {
                    text: 'Edit project',
                    //icon: 'create',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__projects_edit__["a" /* EditProjectPage */], {
                            project: _this.project,
                            parent: _this
                        });
                    }
                },
                {
                    text: 'Purchase TBI-Pro',
                    //icon: 'open',
                    handler: function () {
                        window.open('http://www.eiif.org/tbi', '_system', 'location=yes');
                    }
                },
                {
                    text: 'Insert TBI-Pro code',
                    //icon: 'information-circle',
                    handler: function () {
                        _this.alertCtrl.create({
                            message: 'Please, type your TBI-app code.',
                            cssClass: "ion-dialog-horizontal margin-top",
                            enableBackdropDismiss: false,
                            inputs: [
                                {
                                    name: 'code',
                                    value: ''
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                },
                                {
                                    text: 'Validate',
                                    role: 'submit',
                                    handler: function (data) {
                                        _this.licences.validate(data.code).then(function (result) {
                                            _this.alertCtrl.create({
                                                message: result.message,
                                                cssClass: "ion-dialog-horizontal margin-top",
                                                enableBackdropDismiss: false,
                                                buttons: [{
                                                        text: 'OK',
                                                        role: 'submit',
                                                        handler: function () {
                                                            if (result.ok) {
                                                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__projects_projects__["a" /* ProjectsPage */], { animate: true, direction: 'backward' });
                                                            }
                                                        }
                                                    }]
                                            }).present();
                                        });
                                    }
                                }
                            ]
                        }).present();
                    }
                },
                {
                    text: 'Cancel',
                    //icon: 'close',
                    role: 'cancel'
                }
            ]
        });
        return action_sheet;
    };
    SummaryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.service.get(this.navParams.get('project').id).then(function (p) {
            _this.project = p;
            _this.get_project();
            _this.get_report();
            _this.content.scrollToTop(500);
            _this.cdRef.detectChanges();
            // if (this.navParams.get('parent').hasOwnProperty('report')) {
            //   debugger;
            //   this.create_action_sheet(localStorage.getItem('tbi-user')).present();
            // }
        });
    };
    SummaryPage.prototype.get_report = function () {
        this.report = new __WEBPACK_IMPORTED_MODULE_2__models__["d" /* ReportBase */](this.project, this.components[0], null);
        this.report.result = this.totals;
    };
    SummaryPage.prototype.get_project = function () {
        var _this = this;
        this.totals.headLost.power = 0;
        this.totals.headLost.money = 0;
        this.totals.savingPotentialMin.power = 0;
        this.totals.savingPotentialMin.money = 0;
        this.totals.savingPotentialMax.power = 0;
        this.totals.savingPotentialMax.money = 0;
        this.totals.co2 = [0, 0, 0];
        this.components = (this.project.components || []).filter(function (c) { return !c.validation; }).sort(function (a, b) { return a.date > b.date ? 1 : -1; });
        this.components.filter(function (c) { return !!c.result && !c.fields.unknow_surface; })
            .map(function (c) { return c.result; })
            .forEach(function (r) {
            _this.totals.headLost.power += r.headLost.power;
            _this.totals.headLost.money += r.headLost.money;
            _this.totals.savingPotentialMin.power += r.savingPotentialMin.power;
            _this.totals.savingPotentialMin.money += r.savingPotentialMin.money;
            _this.totals.savingPotentialMax.power += r.savingPotentialMax.power;
            _this.totals.savingPotentialMax.money += r.savingPotentialMax.money;
            _this.totals.co2[0] += r.co2[0];
            _this.totals.co2[1] += r.co2[1];
            _this.totals.co2[2] += r.co2[2];
        });
        //});
    };
    SummaryPage.prototype.down = function (value) {
        return value > 1000 ? Math.floor(Math.trunc(value) / 100) * 100 : Math.floor(Math.trunc(value) / 10) * 10;
    };
    SummaryPage.prototype.up = function (value) {
        return value > 1000 ? Math.ceil(Math.trunc(value) / 100) * 100 : Math.ceil(Math.trunc(value) / 10) * 10;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('pdf'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_pdf_export__["a" /* PDFExportComponent */])
    ], SummaryPage.prototype, "pdf", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('report_result', { read: __WEBPACK_IMPORTED_MODULE_6__reports__["s" /* ReportResultComponent */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__reports__["s" /* ReportResultComponent */])
    ], SummaryPage.prototype, "report_result", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], SummaryPage.prototype, "content", void 0);
    SummaryPage = SummaryPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-summary',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\summary\summary.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>Summary - {{project?.name}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button on-tap="export_pdf()">\n\n        <ion-icon name="document-pdf"></ion-icon><span hidden-xs>&nbsp;PDF</span>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content [ngClass]="{\'creating-pdf\': creating_pdf}">\n\n  <div class="hide-pdf"></div>\n\n  <kendo-pdf-export #pdf paperSize="A4" margin=".5cm" [scale]="0.5" landscape="true" forcePageBreak=".page-break">\n\n    <div class="table-container">\n\n      <table class="data">\n\n        <colgroup>\n\n          <col style="width: 50px">\n\n          <col style="width: 100px">\n\n          <col style="width: 50px">\n\n          <col style="width: 50px">\n\n          <col style="width: 50px">\n\n          <col style="width: 10px">\n\n          <col style="width: 50px">\n\n          <col style="width: 50px">\n\n          <col style="width: 10px">\n\n          <col style="width: 100px">\n\n          <col style="width: 100px">\n\n          <col style="width: 100px">\n\n          <col style="width: 80px">\n\n          <col style="width: 50px">\n\n          <col style="width: 50px">\n\n          <col style="width: 10px">\n\n          <col style="width: 30px">\n\n          <col style="width: 30px">\n\n          <col style="width: 30px">\n\n          <col style="width: 30px">\n\n          <col style="width: 30px">\n\n        </colgroup>\n\n        <thead>\n\n          <tr>\n\n            <th colspan="2"></th>\n\n            <th colspan="6" style="border: 2px solid #fff; color:#fff; border-width: 0 2px 4px 0; background-color: rgb(112,173,71)">Energy\n\n              & CO2 analysis per year</th>\n\n            <th rowspan="2"></th>\n\n            <th rowspan="2" style="background-color: rgb(48,84,150); border: 2px solid #fff; color:#fff; border-width: 0 2px 4px 2px">\n\n              <!-- <span svg="safety"></span> -->\n\n              Safety</th>\n\n            <th rowspan="2" style="background-color: rgb(48,84,150); border: 2px solid #fff; color:#fff; border-width: 0 2px 4px 2px">\n\n              <!-- <span svg="maintenance"></span> -->\n\n              Maintenance</th>\n\n            <th rowspan="2" style="background-color: rgb(48,84,150); border: 2px solid #fff; color:#fff; border-width: 0 2px 4px 2px">\n\n              <!-- <span svg="custom"></span> -->\n\n              Others</th>\n\n            <th rowspan="2" style="background-color: rgb(48,84,150); border: 2px solid #fff; color:#fff; border-width: 0 2px 4px 2px">TBI Advice</th>\n\n            <th rowspan="2" colspan="2" style="background-color: rgb(48,84,150); border: 2px solid #fff; color:#fff; border-width: 0 2px 4px 2px">Validation</th>\n\n            <th rowspan="2"></th>\n\n            <th colspan="5" style="background-color: rgb(48,84,150); border: 2px solid #fff; color:#fff; border-width: 0 0 4px 2px">Input</th>\n\n          </tr>\n\n          <tr>\n\n            <th colspan="2">Component / Location</th>\n\n            <th colspan="2" style="background-color:rgb(217,217,217); border: 2px solid #fff; border-width: 0 2px 4px 0">Current\n\n              Losses<br>& Emissions</th>\n\n            <th colspan="4" style="background-color:rgb(217,217,217); border: 2px solid #fff; border-width: 0 2px 4px 2px">Potential<br>savings\n\n              year</th>\n\n            <th class="vertical">\n\n              <div><span one-line>Insulated</span></div>\n\n            </th>\n\n            <th class="vertical">\n\n              <div><span one-line>Surface (m<sup>2</sup>)</span></div>\n\n            </th>\n\n            <th class="vertical">\n\n              <div><span one-line>Diameter</span></div>\n\n            </th>\n\n            <th class="vertical">\n\n              <div><span one-line>Length</span></div>\n\n            </th>\n\n            <th class="vertical">\n\n              <div><span one-line>Items number</span></div>\n\n            </th>\n\n          </tr>\n\n        </thead>\n\n        <tbody *ngFor="let c of components; let i=index">\n\n          <tr [class.disabled]="c.fields.unknow_surface">\n\n            <td rowspan="3" (click)="actions(c, $event)" double-border text-center style="white-space: nowrap; padding-right: 1rem">\n\n              <ion-icon slot="icon-only" name="md-more" style="margin: 0 .25rem 0; float: left"></ion-icon>\n\n              {{i+1}}-\n\n            </td>\n\n            <td rowspan="3" on-tap="edit(c)" double-border>{{ellipsis(c.fields.location)}}</td>\n\n            <td [class.gray-text]="!!c.result && c.fields.unknow_surface" *ngIf="!!c.result" text-right>{{c.result.headLost.power\n\n              / 1000 | number: \'1.2-2\'}}</td>\n\n            <td [class.gray-text]="!!c.result && c.fields.unknow_surface" *ngIf="!!c.result">{{project.s_measure}}<span *ngIf="c.fields.unknow_surface">/m<sup>2</sup></span></td>\n\n            <td [class.gray-text]="!!c.result && c.fields.unknow_surface" *ngIf="!!c.result" text-right>{{c.result.savingPotentialMin?.power\n\n              / 1000 | number: \'1.2-2\'}}</td>\n\n            <td [class.gray-text]="!!c.result && c.fields.unknow_surface" *ngIf="!!c.result" text-center class="p-0"\n\n              style="padding: 0; white-space: nowrap">\n\n              <!-- <ion-icon name="md-arrow-forward"></ion-icon> -->\n\n              --\n\n            </td>\n\n            <td [class.gray-text]="!!c.result && c.fields.unknow_surface" *ngIf="!!c.result" text-left>{{c.result.savingPotentialMax?.power\n\n              / 1000 | number: \'1.2-2\'}}</td>\n\n            <td [class.gray-text]="!!c.result && c.fields.unknow_surface" *ngIf="!!c.result" class="mesure">{{project.s_measure}}<span\n\n                *ngIf="c.fields.unknow_surface">/m<sup>2</sup></span></td>\n\n            <td *ngIf="!c.result" colspan="2" double-border rowspan="3"></td>\n\n            <td *ngIf="!c.result" colspan="4" double-border rowspan="3"></td>\n\n            <td rowspan="3"></td>\n\n            <td rowspan="3" style="background: rgb(180,198,231)" double-border text-center>\n\n              <ng-container *ngFor="let r of c.reports_by_type(\'safety|hot\')">\n\n                <a href="#" (click)="open(r, $event)" *ngIf="!r.component.is_hot">{{r.summary_id}}</a>\n\n                <a href="#" (click)="open(r, $event)" *ngIf="!!r.component.is_hot">Hot surface</a>\n\n              </ng-container>\n\n              <ion-icon name="md-add-circle" (click)="add_report(\'safety\', c, $event)"></ion-icon>\n\n            </td>\n\n            <td rowspan="3" style="background: rgb(217,225,242)" double-border text-center>\n\n              <a href="#" (click)="open(r, $event)" *ngFor="let r of c.reports_by_type(\'maintenance|condensation|damaged\')">{{r.summary_id}}</a>\n\n              <ion-icon name="md-add-circle" (click)="add_report(\'maintenance\',c , $event)"></ion-icon>\n\n            </td>\n\n            <td rowspan="3" style="background: rgb(231,235,247)" double-border text-center>\n\n              <a href="#" (click)="open(r, $event)" *ngFor="let r of c.reports_by_type(\'generic|custom\')">{{r.summary_id}}</a>\n\n              <a href="#" (click)="edit(c, $event)" *ngIf="!!c.fields.space_warning"><strong style="white-space: nowrap">No\n\n                  Space</strong></a>\n\n              <ion-icon name="md-add-circle" (click)="add_report(\'maintenance\', c, $event)"></ion-icon>\n\n            </td>\n\n            <td rowspan="3" *ngIf="!!c.result" double-border text-center>\n\n              <ng-container [ngSwitch]="advises.get(c.result.advise)">\n\n                <!-- <span advise-picture *ngSwitchCase="\'Recommended\'" svg="insulation"></span> -->\n\n                <span advise-picture *ngSwitchCase="\'Recommended\'"><img src="{{images.INSULATION}}"></span>\n\n                <span advise-picture *ngSwitchCase="\'Maintenance\'"><img src="{{images.MECHANICAL}}"></span>\n\n                <span advise-picture *ngSwitchCase="\'Unknow surface\'"><img src="{{images.SURFACE}}"></span>\n\n                <span advise-picture *ngSwitchCase="\'OK\'"><img src="{{images.LIKE}}"></span>\n\n                <span advise-picture *ngSwitchCase="\'SAVINGS-achieved\'"><img src="{{images.INCREASE}}"></span>\n\n              </ng-container>\n\n            </td>\n\n            <td double-border rowspan="3" *ngIf="!c.validationReport" style="background: #fff"></td>\n\n            <td double-border rowspan="3" *ngIf="!c.validationReport" style="background: #fff"></td>\n\n            <td *ngIf="!!c.validationReport" on-tap="edit_validation(c)" text-right>{{c.validationReport.reports[0].result.headLost.power\n\n              / 1000 | number: \'1.2-2\'}}</td>\n\n            <td *ngIf="!!c.validationReport" on-tap="edit_validation(c)" class="measure">{{project.s_measure}}</td>\n\n            <td rowspan="3"></td>\n\n            <td rowspan="3" *ngIf="!c.result" double-border text-center></td>\n\n            <td rowspan="3" double-border text-center>{{!!c.insulated ? \'Y\' : \'N\'}}</td>\n\n            <td *ngIf="null!=c.fields.surface_temp" rowspan="3" double-border text-center>{{c.fields.surface}}</td>\n\n            <td *ngIf="null==c.fields.surface_temp" rowspan="3" double-border text-center>&nbsp;</td>\n\n            <td rowspan="3" double-border text-center>\n\n              <!-- <span *ngIf="!!c.surface">{{c.fields.surface}} m<sup>2</sup></span> -->\n\n              <span>{{c.fields.main_dimension || c.fields.nominal_diameter}}</span>\n\n            </td>\n\n            <td rowspan="3" double-border text-center>{{c.fields.length}}</td>\n\n            <td rowspan="3" double-border text-center>{{c.fields.number}}</td>\n\n          </tr>\n\n\n\n          <tr [class.gray-text]="!!c.result && c.fields.unknow_surface" *ngIf="!!c.result" [class.disabled]="c.fields.unknow_surface">\n\n            <td text-right>{{c.result.headLost?.money | number: \'1.0-0\'}}</td>\n\n            <td class="mesure">{{project.currency}}<span *ngIf="c.fields.unknow_surface">/m<sup>2</sup></span></td>\n\n            <td text-right>{{c.result.savingPotentialMin?.money | number: \'1.0-0\'}}</td>\n\n            <td text-center class="p-0" style="padding: 0; white-space: nowrap;">--</td>\n\n            <td text-left>{{c.result.savingPotentialMax?.money | number: \'1.0-0\'}}</td>\n\n            <td class="mesure">{{project.currency}}<span *ngIf="c.fields.unknow_surface">/m<sup>2</sup></span></td>\n\n            <td *ngIf="!!c.validationReport" on-tap="edit_validation(c)" text-right>{{c.validationReport.reports[0].result.headLost?.money\n\n              | number: \'1.0-0\'}}</td>\n\n            <td *ngIf="!!c.validationReport" on-tap="edit_validation(c)" class="measure">{{project.currency}}</td>\n\n          </tr>\n\n\n\n          <tr [class.gray-text]="!!c.result && c.fields.unknow_surface" *ngIf="!!c.result" [class.disabled]="c.fields.unknow_surface">\n\n            <td double-border text-right>{{c.result.co2[0] | number: \'1.2-2\'}}</td>\n\n            <td double-border class="mesure">tn CO<sub>2</sub><span *ngIf="c.fields.unknow_surface">/m<sup>2</sup></span></td>\n\n            <td double-border text-right>{{c.result.co2[0] - c.result.co2[1] | number: \'1.2-2\'}}</td>\n\n            <td double-border text-center class="p-0" style="padding: 0; white-space: nowrap;">--</td>\n\n            <td double-border text-left>{{c.result.co2[0] - c.result.co2[2] | number: \'1.2-2\'}}</td>\n\n            <td double-border class="mesure">tn CO<sub>2</sub><span *ngIf="c.fields.unknow_surface">/m<sup>2</sup></span></td>\n\n            <td *ngIf="!!c.validationReport" on-tap="edit_validation(c)" double-border text-right>{{c.validationReport.reports[0].result.co2[0]\n\n              | number: \'1.2-2\'}}</td>\n\n            <td *ngIf="!!c.validationReport" on-tap="edit_validation(c)" double-border class="mesure">tn CO<sub>2</sub></td>\n\n          </tr>\n\n\n\n\n\n        </tbody>\n\n        <tfoot *ngIf="!!components.length && !!report_result">\n\n          <tr>\n\n            <td rowspan="3" colspan="2" double-border text-right>\n\n              TOTAL PROJECT\n\n              <small style="display: block;">(Rounded figures)</small>\n\n            </td>\n\n            <td text-right>{{(totals.headLost.power / 1000) | number: \'1.2-2\'}}</td>\n\n            <td>{{project.s_measure}}</td>\n\n            <td text-right>{{totals.savingPotentialMin?.power / 1000 | number: \'1.2-2\'}}</td>\n\n            <td text-center class="p-0" style="padding: 0; white-space: nowrap">--</td>\n\n            <td text-left>{{totals.savingPotentialMax?.power / 1000 | number: \'1.2-2\'}}</td>\n\n            <td class="mesure">{{project.s_measure}}</td>\n\n            <td rowspan="3"></td>\n\n            <td double-border colspan="6" rowspan="3">\n\n              <ion-grid>\n\n                <ion-row class="legend">\n\n                  <ion-col no-padding col-6><span advise-picture><img src="{{images.INSULATION}}"></span>Insulation recommended</ion-col>\n\n                  <ion-col no-padding col-6><span advise-picture><img src="{{images.MECHANICAL}}"></span>Maintenance</ion-col>\n\n                  <ion-col no-padding col-6><span advise-picture><img src="{{images.SURFACE}}"></span>Surface unknown</ion-col>\n\n                  <ion-col no-padding col-6><span advise-picture><img src="{{images.LIKE}}"></span>System OK</ion-col>\n\n                  <ion-col no-padding col-12><span advise-picture><img src="{{images.INCREASE}}"></span>Increase performance or thickness</ion-col>\n\n              </ion-row>\n\n              </ion-grid>\n\n            </td>\n\n            <td rowspan="3"></td>\n\n            <td double-border rowspan="3" colspan="5"></td>\n\n          </tr>\n\n\n\n          <tr>\n\n            <td text-right>{{report_result.bars.current.losses[1] | number: \'1.0-0\'}}</td>\n\n            <td class="mesure">{{project.currency}}</td>\n\n            <td text-right>{{report_result.bars.basic.savings[1] | number: \'1.0-0\'}}</td>\n\n            <td text-center class="p-0" style="padding: 0; white-space: nowrap;">--</td>\n\n            <td text-left>{{report_result.bars.economical.savings[1] | number: \'1.0-0\'}}</td>\n\n            <td class="mesure">{{project.currency}}</td>\n\n          </tr>\n\n\n\n          <tr>\n\n            <td double-border text-right>{{totals.co2[0] | number: \'1.2-2\'}}</td>\n\n            <td double-border class="mesure">tn CO<sub>2</sub></td>\n\n            <td double-border text-right>{{totals.co2[0] - totals.co2[1] | number: \'1.2-2\'}}</td>\n\n            <td double-border text-center class="p-0" style="padding: 0; white-space: nowrap;">--</td>\n\n            <td double-border text-left>{{totals.co2[0] - totals.co2[2] | number: \'1.2-2\'}}</td>\n\n            <td double-border class="mesure">tn CO<sub>2</sub></td>\n\n          </tr>\n\n        </tfoot>\n\n      </table>\n\n    </div>\n\n\n\n    <div no-padding class="chart text-center" style="padding: 1rem 0" [ngClass]="{\'page-break\': 1 == 1}">\n\n      <div report-result #report_result *ngIf="!!report && !!totals.headLost.power" [parent]="this" [currency]="project.currency" [show_advise]="false"></div>\n\n    </div>\n\n\n\n    <ng-template kendoPDFTemplate >\n\n      <div class="page-template">\n\n        <div class="header">\n\n            <ion-grid class="header" style="border-bottom: 2px solid rgb(48,84,150)">\n\n                <ion-row>\n\n                  <ion-col col-3>\n\n\n\n                  </ion-col>\n\n                  <ion-col col-6>\n\n                    <h3 col-12 text-center class="tickcheck">\n\n                      <span>TIPCHECK Based inspection</span>\n\n                      <img src="{{images.TBI}}">\n\n                    </h3>\n\n                  </ion-col>\n\n                  <ion-col col-3 class="engineer">\n\n                      <strong>Insulation expert (TIPCHECK engineer)</strong>\n\n                      <span>Luis Lopez Bunner</span>\n\n                      <a href="mailto:luis.lopez@eiig.org">\n\n                        <ion-icon name="mail"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;luis.lopez@eiig.org\n\n                      </a>\n\n                      <a href="phone:+32499219797">\n\n                        <ion-icon name="call"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+32499219797\n\n                      </a>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n        </div>\n\n        <div class="footer">\n\n            <ion-grid class="footer" style="border-top: 1px solid #ccc">\n\n                <ion-row>\n\n                    <ion-col col-12>\n\n                        <b>Disclaimer:</b> Tbi is a reporting tool developed by the European Industrial \n\n                        Insulation Fundation to estimate energy losses and potential savings and report \n\n                        about safety, maintenance or any others relevant issues to insulation. Estimations \n\n                        are based on basic heat transfer formulation and inputs provided by \n\n                        the user, assuming some scenarios which that not necessary reflect the real life \n\n                        (wind speed, orientation, ...). EiiF does not warrant any outcome of the tool and \n\n                        shall not be liable for any damage incurred by the user or third party resulting \n\n                        from the use of this reporting tool. Tbi does not provide or recommend any technical \n\n                        solutions or insulation material.\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n        </div>\n\n      </div>\n\n    </ng-template>\n\n\n\n  </kendo-pdf-export>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-grid no-padding>\n\n    <ion-row no-padding>\n\n      <ion-col col-4 no-padding>\n\n        <!-- <button ion-button small color="light" (click)="go_to_projects()">\n\n            <ion-icon visible-xs name="arrow-back"></ion-icon>\n\n            <span hidden-xs>Home</span>\n\n        </button> -->\n\n      </ion-col>\n\n      <ion-col col-4 text-center>\n\n        <tools></tools>\n\n      </ion-col>\n\n      <ion-col col-4 text-right>\n\n        <button tabindex="15" ion-button small color="primary" (click)="next_action()">\n\n            <ion-icon visible-xs name="arrow-forward"></ion-icon>\n\n            <span hidden-xs>Next</span>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\summary\summary.html"*/,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].Default
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_11__services__["d" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_11__services__["b" /* LicencesService */],
            __WEBPACK_IMPORTED_MODULE_11__services__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], SummaryPage);
    return SummaryPage;
    var SummaryPage_1;
}());

//# sourceMappingURL=summary.js.map

/***/ }),
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_projects__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InitPage = /** @class */ (function () {
    function InitPage(appCtrl, license, cd) {
        this.appCtrl = appCtrl;
        this.license = license;
        this.cd = cd;
        this.user_name = 'Dev';
        this.isPro = -1;
        this.code = '';
        this.isPro = license.type == 'PRO' ? 1 : -1;
        //this.save();
    }
    InitPage.prototype.onVersionSelected = function (e) {
        debugger;
        if (e == 0)
            this.save();
    };
    InitPage.prototype.onCodeChange = function (e) {
        if ((e.value || '').toLowerCase() == 'pro')
            this.save();
    };
    InitPage.prototype.save = function () {
        //if(form.invalid) return;
        localStorage.setItem('tbi-user', this.user_name);
        if (!!this.isPro && this.code == 'PRO')
            this.license.type = 'PRO';
        //this.appCtrl.setRoot(ProjectsPage, { user_name: this.user_name, summary: true, project: '6243045674937677'});
        this.appCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__projects_projects__["a" /* ProjectsPage */], { user_name: this.user_name });
    };
    InitPage.prototype.ngAfterViewInit = function () {
        this.cd.detectChanges();
    };
    InitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-init',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\init\init.html"*/'<!-- <ion-header text-right>\n  <small>\n    Build v7.2.1 25/02/2019 01:20\n  </small>\n</ion-header> -->\n<ion-content class="init">\n  <form (ngSubmit)="save(f.form)" #f="ngForm" novalidate style="background: #fff">\n    <ion-grid padding>\n      <ion-row>\n        <ion-col col-12 col-md-8 offset-md-2>\n          <ion-item no-padding [ngClass]="{\'error\': true}">\n            <ion-label stacked>\n              <h2 class="welcome" style="padding-bottom: 1rem">Please insert your name</h2>\n            </ion-label>\n            <ion-input type="text" name="user_name" [(ngModel)]="user_name" placeholder="Your name" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-md-8 offset-md-2 style="margin: 1rem auto 2rem" *ngIf="license.type!=\'PRO\'">\n            <ion-label stacked>\n              <h2 class="welcome" style="padding-bottom: 1rem">Please select</h2>\n              </ion-label>\n          <ion-list radio-group name="version-type" [(ngModel)]="isPro" (ionChange)="onVersionSelected($event)">\n            <ion-item hidden>\n              <ion-label>Non version</ion-label>\n              <ion-radio value="-1" checked="{{isPro==-1}}"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label>Version Easy</ion-label>\n              <ion-radio value="0" checked="{{isPro==0}}"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label>Version Pro</ion-label>\n              <ion-radio value="1" checked="{{isPro==1}}"></ion-radio>\n            </ion-item>\n          </ion-list>\n          <ion-item *ngIf="isPro==1" style="margin-top: -2rem">\n            <ion-label stacked>Enter Pro version code validation</ion-label>\n            <ion-input type="text" name="pro-code" #proCode [(ngModel)]="code" (ionChange)="onCodeChange($event)" placeholder="Enter code"></ion-input>\n          </ion-item>\n        </ion-col>\n        <!-- <ion-col col-12 col-md-8 offset-md-2>\n          <small>technology powered by</small>\n        </ion-col> -->\n        <ion-col col-12 class="bg-logo-eiif" style="height: 120px">\n          <!-- <h5>Tap to select logo</h5> -->\n        </ion-col>\n        <!-- <ion-col col-12 col-md-8 offset-md-2 text-right>\n          <small>a member of</small>\n          <div class="bg-logo-eiif"></div>\n        </ion-col>\n        <ion-col col-4 col-sm-6 col-md-6>\n        </ion-col> -->\n        <!-- <ion-col col-8 col-sm-6 col-md-4 text-right>\n          <button ion-button block small color="primary" type="submit" [disabled]="f.invalid">\n            Start\n          </button>\n        </ion-col> -->\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\init\init.html"*/,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services__["b" /* LicencesService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], InitPage);
    return InitPage;
}());

//# sourceMappingURL=init.js.map

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return People; });
/* unused harmony export Contact */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Project; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_with_picture__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__const_more_more__ = __webpack_require__(63);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var People = /** @class */ (function () {
    function People(people) {
        this.leader = new Contact();
        this.energy_manager = new Contact();
        this.maintenance_manager = new Contact();
        this.hse_manager = new Contact();
        if (!people)
            return;
        Object.assign(this, people);
    }
    return People;
}());

var Contact = /** @class */ (function () {
    function Contact(contact) {
        this.name = '';
        this.email = '';
        this.phone = '';
        if (!contact)
            return;
        Object.assign(this, contact);
    }
    return Contact;
}());

var Project = /** @class */ (function (_super) {
    __extends(Project, _super);
    function Project(project) {
        var _this = _super.call(this, project) || this;
        _this.name = '';
        _this.desc = '';
        _this.date = new Date();
        _this.user = '';
        _this.documents = [];
        _this.components = [];
        _this.price = null;
        _this.price_delta = 1;
        _this.people = new People();
        _this.co2 = null;
        _this.currency = "€";
        _this.currency_index = 1;
        _this.co2_index = 0;
        if (!project)
            return _this;
        _this.name = project.name || '';
        _this.desc = project.desc || '';
        _this.date = project.date || new Date();
        _this.user = project.user || '';
        _this.currency = project.currency || "€";
        _this.price = Number(project.price) || null;
        _this.price_delta = Number(project.price_delta) || 1;
        _this.documents = (project.documents || []).map(function (d) { return new __WEBPACK_IMPORTED_MODULE_0____["a" /* Document */](d); });
        _this.components = (project.components || []).map(function (c) { return new __WEBPACK_IMPORTED_MODULE_1__component__["a" /* TbiComponent */](_this, c, project.components.find(function (p) { return p.validation == c.id; })); });
        _this.people = new People(project.people);
        _this.co2 = project.co2;
        _this.currency_index = project.currency_index || 1;
        _this.co2_index = project.co2_index || 0;
        return _this;
    }
    Object.defineProperty(Project.prototype, "measure", {
        get: function () {
            return this.price_delta == 1 ? "kWh" : "GJ";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "m_measure", {
        get: function () {
            return this.price_delta == 1 || 1 == 1 ? "kWh" : "GJ";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "s_measure", {
        get: function () {
            return "MWh";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "price_measure", {
        get: function () {
            var _this = this;
            //return `${this.currency}/${String(More.MEASURES.find(m => m[1] == this.price_delta)[0])}`;
            return __WEBPACK_IMPORTED_MODULE_3__const_more_more__["a" /* More */].MEASURES.find(function (m) { return m[1] == _this.price_delta; })[0];
        },
        enumerable: true,
        configurable: true
    });
    Project.prototype.flatten = function (arr) {
        return [].concat.apply([], arr);
    };
    Project.prototype.get_reports_by_type = function (type) {
        var reports = this.components.map(function (c) { return c.reports.filter(function (r) { return !!r.readonly_summary_id.match(new RegExp(type, 'gi')); }); });
        return this.flatten(reports);
    };
    Project.prototype.get_reports_by_types = function (types) {
        var _this = this;
        var result = [];
        types.forEach(function (type) {
            var filter = _this.components.map(function (c) { return c.reports.filter(function (r) { return !!r.readonly_summary_id.match(new RegExp(type, 'gi')); }); });
            _this.flatten(filter).forEach(function (r) { return result.push(r); });
        });
        return result;
    };
    return Project;
}(__WEBPACK_IMPORTED_MODULE_2__model_with_picture__["a" /* ModelWithPicture */]));

//# sourceMappingURL=project.js.map

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Value; });
var Value = /** @class */ (function () {
    function Value(value) {
        this.power = 0;
        this.money = 0;
        if (!value)
            return;
        Object.assign(this, value);
    }
    return Value;
}());

//# sourceMappingURL=value.js.map

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fields; });
var Fields = /** @class */ (function () {
    function Fields(f) {
        this.location = '';
        this.operational_time = null;
        this.surface = null;
        this.surface_material = null;
        this.ambient_temp = null;
        this.surface_temp = null;
        this.medium_temp = null;
        this.length = null;
        this.number = null;
        this.dimension = null;
        this.emissivity = null;
        this.leakage = '';
        this.comment = '';
        this.nominal_diameter = null;
        this.main_dimension = null;
        this.damaged_cladding_selection = 4;
        this.damaged_insulation_selection = 4;
        this.damaged_comment = '';
        this.space_warning = false;
        this.operational_time_index = 0;
        this.surface_material_index = 0;
        this._condensation_ice_block = false;
        this._condensation_wet_surface = false;
        // private _condensation_other: boolean = true;
        // public get condensation_other(): boolean {
        //   return this._condensation_other;
        // };
        // public set condensation_other(value: boolean) {
        //   this._condensation_other = value;
        //   if (!value) {
        //     //this.condensation_other_text = '';
        //   } else {
        //     this.condensation_ice_block = this.condensation_wet_surface = false;
        //   }
        // };
        this.condensation_comment = '';
        this.unknow_surface = false;
        this.unknow_surface_temp = 0;
        this._damaged_cladding = false;
        this._damaged_insulation = false;
        if (!f)
            return;
        this.location = f.location;
        this.operational_time = this.number_or_null(f.operational_time);
        this.surface = this.number_or_null(f.surface);
        this.surface_material = this.number_or_null(f.surface_material);
        this.ambient_temp = this.number_or_null(f.ambient_temp);
        this.surface_temp = this.number_or_null(f.surface_temp);
        this.medium_temp = this.number_or_null(f.medium_temp);
        this.length = this.number_or_null(f.length);
        this.number = this.number_or_null(f.number);
        this.dimension = this.number_or_null(f.dimension);
        this.emissivity = this.number_or_null(f.emissivity);
        this.nominal_diameter = this.number_or_null(f.nominal_diameter);
        this.leakage = f.leakage;
        this.comment = f.comment;
        this.main_dimension = this.number_or_null(f.main_dimension);
        this.damaged_cladding = !!f.damaged_cladding;
        this.damaged_insulation = !!f.damaged_insulation;
        this.damaged_cladding_selection = this.number_or_null(f.damaged_cladding_selection);
        this.damaged_insulation_selection = this.number_or_null(f.damaged_insulation_selection);
        this.damaged_comment = f.damaged_comment;
        this.condensation_ice_block = !!f.condensation_ice_block;
        this.condensation_wet_surface = !!f.condensation_wet_surface;
        this.condensation_comment = f.condensation_comment || '';
        this.unknow_surface = !!f.unknow_surface;
        this.unknow_surface_temp = Number(f.unknow_surface_temp || '0');
        this.space_warning = f.space_warning;
        this.operational_time_index = f.operational_time_index || 0;
        this.surface_material_index = f.surface_material_index || 0;
    }
    Object.defineProperty(Fields.prototype, "condensation_ice_block", {
        get: function () {
            return this._condensation_ice_block;
        },
        set: function (value) {
            this._condensation_ice_block = value;
            if (!!value) {
                this.condensation_wet_surface = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Fields.prototype, "condensation_wet_surface", {
        get: function () {
            return this._condensation_wet_surface;
        },
        set: function (value) {
            this._condensation_wet_surface = value;
            if (!!value) {
                this.condensation_ice_block = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Fields.prototype, "damaged_cladding", {
        get: function () {
            return this._damaged_cladding;
        },
        set: function (value) {
            this._damaged_cladding = value;
            //if (!!value) this.damaged_insulation = false;
            //this.damaged_insulation_other = '';
            this.damaged_cladding_selection = !value ? null : 1;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Fields.prototype, "damaged_insulation", {
        get: function () {
            return this._damaged_insulation;
        },
        set: function (value) {
            this._damaged_insulation = value;
            //if (!!value) this.damaged_cladding = false;
            //this.damaged_cladding_selection = null;
            //this.damaged_cladding_other = '';
            this.damaged_insulation_selection = !value ? null : 1;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Fields.prototype.number_or_null = function (value) {
        if (value === null || value === '' || typeof value === 'undefined')
            return null;
        if (isNaN(Number(value)))
            return null;
        return Number(value);
    };
    return Fields;
}());

//# sourceMappingURL=fields.js.map

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NON_PICTURE; });
var NON_PICTURE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoCAYAAAB65WHVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA0VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUM5ODJBOTNGRDEyMTFFODg1M0VCNjk3MkYzMkI1RTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUM5ODJBOTJGRDEyMTFFODg1M0VCNjk3MkYzMkI1RTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MGQwNjllZmMtMmZiNy00ODQyLWI4YWYtNDJhNzYzNTE0N2Y0IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MGQwNjllZmMtMmZiNy00ODQyLWI4YWYtNDJhNzYzNTE0N2Y0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hw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";
//# sourceMappingURL=non-picture.js.map

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectPageBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scroll_to_component_class__ = __webpack_require__(176);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ProjectPageBase = /** @class */ (function (_super) {
    __extends(ProjectPageBase, _super);
    function ProjectPageBase(alertCtrl, service, keyboard) {
        var _this = _super.call(this, keyboard) || this;
        _this.alertCtrl = alertCtrl;
        _this.service = service;
        _this.keyboard = keyboard;
        _this.remove_mode = false;
        return _this;
    }
    ProjectPageBase.prototype.delete_project = function (project, event) {
        var _this = this;
        !!event && event.stopPropagation();
        this.remove_mode = true;
        var confirm = this.alertCtrl.create({
            //title: `Remove`,
            message: "Do you agree to remove permanently '" + project.name + "'?",
            buttons: [
                {
                    text: 'Yes',
                    handler: function () {
                        _this.delete(project);
                    }
                },
                {
                    text: 'No',
                    role: 'candel'
                }
            ]
        });
        confirm.present();
    };
    ProjectPageBase.prototype.delete = function (project) {
        var _this = this;
        this.service.delete(project).then(function () { return _this.after_delete(); });
    };
    ProjectPageBase.prototype.after_delete = function () { };
    return ProjectPageBase;
}(__WEBPACK_IMPORTED_MODULE_0__scroll_to_component_class__["a" /* ScrollToComponent */]));

//# sourceMappingURL=project-page-base.js.map

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollToComponent; });
var ScrollToComponent = /** @class */ (function () {
    function ScrollToComponent(keyboard) {
        this.keyboard = keyboard;
    }
    ScrollToComponent.prototype.on_keypress = function (event) {
        if (event.which === 13) {
            event.currentTarget.closest('.scroll-content').scrollTo(0, 0);
            document.getElementById('submit-button').focus();
            //this.keyboard.hideFormAccessoryBar(true);
        }
    };
    ScrollToComponent.prototype.scrollTo = function (position) {
        Array.from(document.getElementsByClassName('scroll-content')).forEach(function (e) { return e.scrollTo(0, position); });
    };
    ScrollToComponent.prototype.on_focus = function (event) {
        setTimeout(function () {
            event._elementRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(function () {
                event._elementRef.nativeElement.closest('.scroll-content').scrollTop -= 30;
            }, 250);
        }, 500);
        // const elm = event._elementRef.nativeElement
        // const offset = 60;
        // elm.closest('.scroll-content').scrollTo(0, elm.closest('.scroll-content').scrollTop - 50);
        // this.scroll(elm.closest('.scroll-content'), elm.closest('.scroll-content').scrollTop + elm.closest('ion-item').getBoundingClientRect().top - offset);
    };
    ScrollToComponent.prototype.scroll = function (elm, top) {
        var _this = this;
        if (elm.scrollTop < top) {
            elm.scrollTo(0, elm.scrollTop += 50);
            setTimeout(function () { return _this.scroll(elm, top); }, 1);
        }
        else {
            elm.scrollTo(0, top);
        }
    };
    return ScrollToComponent;
}());

//# sourceMappingURL=scroll_to_component.class.js.map

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProjectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_page_base__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_messages_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_file_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__const_more_more__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_calculators_calculator_factory__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__projects__ = __webpack_require__(76);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var EditProjectPage = /** @class */ (function (_super) {
    __extends(EditProjectPage, _super);
    function EditProjectPage(navCtrl, navParams, alertCtrl, service, file, actionSheetCtrl, picture, message, keyboard, opener) {
        var _this = _super.call(this, alertCtrl, service, keyboard) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.alertCtrl = alertCtrl;
        _this.service = service;
        _this.file = file;
        _this.actionSheetCtrl = actionSheetCtrl;
        _this.picture = picture;
        _this.message = message;
        _this.keyboard = keyboard;
        _this.opener = opener;
        _this.segment = 'properties';
        _this.edit_mode = false;
        _this.error = '';
        _this.initial_values = {
            price: 0,
            price_delta: 1
        };
        _this.edit_co2 = false;
        _this.more = __WEBPACK_IMPORTED_MODULE_9__const_more_more__["a" /* More */];
        _this.project = navParams.get("project");
        _this.initial_values.price = _this.project.price;
        _this.initial_values.price_delta = _this.project.price_delta;
        _this.edit_mode = false;
        _this.change_measures_more();
        return _this;
        //this.project.documents.push(new Document({ file: 'lolo.pdf' }))
        //this.keyboard.onClose(() => document.querySelectorAll('.scroll-content').forEach((x) => x.scrollTo(0, 0)));
    }
    EditProjectPage.prototype.scroll = function (elm, top) {
        setTimeout(function () { return elm.scrollIntoView({ behavior: "smooth" }); }, 500);
    };
    Object.defineProperty(EditProjectPage.prototype, "energy_validation", {
        get: function () {
            return !!this.form && this.form.submitted && (null == this.form.controls.price.value || isNaN(this.form.controls.price.value) || Number(this.form.controls.price.value.toString()) <= 0) ? null : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProjectPage.prototype, "co2_validation", {
        get: function () {
            return !!this.form && this.form.submitted && (null == this.form.controls.co2.value || isNaN(this.form.controls.co2.value) || Number(this.form.controls.co2.value.toString()) <= 0) ? null : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProjectPage.prototype, "currency_validation", {
        get: function () {
            return !!this.form && this.form.submitted && (null == this.form.controls.currency.value || !this.form.controls.currency.value.length) ? null : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProjectPage.prototype, "showError", {
        get: function () {
            return {
                required_name: !!this.form && this.form.submitted && this.form.controls.name.invalid,
                energy_validation: !!this.form && this.form.submitted && this.form.controls.energy_validation.invalid,
                co2_validation: !!this.form && this.form.submitted && this.form.controls.co2_validation.invalid,
                required_currency: !!this.form && this.form.submitted && this.form.controls.currency_validation.invalid
            };
        },
        enumerable: true,
        configurable: true
    });
    EditProjectPage.prototype.change_measures_more = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_9__const_more_more__["a" /* More */].MEASURES.forEach(function (m) {
            var split = m[0].split("/");
            m[0] = _this.project.currency + "/" + split[split.length - 1];
        });
    };
    EditProjectPage.prototype.hide_keyboard = function () {
        this.keyboard.close();
    };
    EditProjectPage.prototype.save = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.form.valid)
                return;
            // if (this.project.price != this.initial_values.price || this.project.price_delta != this.initial_values.price_delta) {
            // this.project.components.forEach(c => {
            //   c.reports.forEach(r => (new CalculatorFactory()).calculate(new ReportBase(this.project, c, r)));
            // });
            // }
            _this.service.save(_this.project, false).then(function () {
                _this.project.components.forEach(function (c) {
                    c.result = null;
                    c.reports = c.reports.filter(function (r) { return !r.result; }).concat(c.reports.filter(function (r) { return !!r.result; }).map(function (r) { return (new __WEBPACK_IMPORTED_MODULE_10__models_calculators_calculator_factory__["a" /* CalculatorFactory */]()).calculate(r, null); }));
                });
                _this.service.save(_this.project, true).then(function () {
                    //this.navCtrl.setRoot(this.navParams.data.parent, { project: this.project}, {animate: true, direction: 'forward'});
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__projects__["a" /* ProjectsPage */], {}, { animate: true, direction: 'forward' });
                });
            });
        }, 500);
    };
    EditProjectPage.prototype.delete_file = function (file) {
        this.project.documents = this.project.documents.filter(function (f) { return f != file; });
        this.file.delete(file);
        this.edit_mode = !!this.project.documents.length;
    };
    EditProjectPage.prototype.open_camera = function () {
        var _this = this;
        this.picture.take_picture()
            .then(function (d) { return _this.project.picture = d; });
    };
    EditProjectPage.prototype.open_gallery = function () {
        var _this = this;
        this.picture.get_picture()
            .then(function (d) { return _this.project.picture = d; })
            .catch(function (ex) {
            _this.message.alert('Error take picture', JSON.stringify(ex, null, 2));
        });
    };
    EditProjectPage.prototype.ask_for_change_picture = function (project) {
        var _this = this;
        var action_sheet = this.actionSheetCtrl.create({
            cssClass: 'picture-action-sheet',
            buttons: [
                {
                    text: 'Take picture',
                    icon: 'camera',
                    handler: function () {
                        _this.open_camera();
                    }
                },
                {
                    text: 'From gallery',
                    icon: 'images',
                    handler: function () {
                        _this.open_gallery();
                    }
                },
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: 'trash',
                    cssClass: 'disable',
                    handler: function () {
                        project.picture = '';
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        action_sheet.present();
    };
    EditProjectPage.prototype.open_file = function (file) {
        var _this = this;
        this.opener.open(file.folder + "/" + file.file, file.mime)
            .then(function () { return console.log('File opened'); })
            .catch(function (err) { return _this.message.alert('Open', err.message + "\n" + file.folder + "/" + file.file); });
    };
    EditProjectPage.prototype.choose_file = function () {
        var _this = this;
        this.file.select_file().then(function (d) {
            _this.project.documents.push(d);
        });
    };
    EditProjectPage.prototype.ask_for_delete = function (file) {
        var _this = this;
        this.remove_mode = true;
        var confirm = this.alertCtrl.create({
            //title: `Remove`,
            message: "Do you agree to remove '" + file.file + "'?",
            buttons: [
                {
                    text: 'Yes',
                    handler: function () {
                        _this.delete_file(file);
                    }
                },
                {
                    text: 'No',
                    role: 'cancel'
                }
            ]
        });
        confirm.present();
    };
    EditProjectPage.prototype.after_delete = function () {
        var _this = this;
        this.service.get(this.project.id).then(function (p) {
            (function (p) { return _this.project; });
            _this.navCtrl.pop();
        });
    };
    EditProjectPage.prototype.set_measure = function (measure) {
        this.project.price_delta = measure.value;
    };
    EditProjectPage.prototype.set_currency = function (currency, focused) {
        this.project.currency = currency.value;
        this.project.currency_index = currency.index;
        if (!currency.index)
            setTimeout(function () { return focused.setFocus(); }, 750);
    };
    EditProjectPage.prototype.set_co2 = function (co2, focused) {
        this.project.co2 = co2.value;
        this.project.co2_index = co2.index;
        if (!co2.index)
            setTimeout(function () { return focused.setFocus(); }, 750);
    };
    EditProjectPage.prototype.edit = function () {
        this.edit_mode = true;
    };
    EditProjectPage.prototype.friendy_more = function (type, index) {
        var _more = __WEBPACK_IMPORTED_MODULE_9__const_more_more__["a" /* More */][type].find(function (m) { return m[2] == index; });
        return _more[0];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* NgForm */])
    ], EditProjectPage.prototype, "form", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('co2_input'),
        __metadata("design:type", Object)
    ], EditProjectPage.prototype, "co2_input", void 0);
    EditProjectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-edit-project',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\projects\edit.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton>\n\n    <ion-title>\n\n      {{ !project.id ? \'New project\' : \'Edit project\' }}\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button color="light" (click)="open_camera(project)">\n\n        <ion-icon name="md-camera"></ion-icon><span hidden-xs>&nbsp;Take a picture</span>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-segment [(ngModel)]="segment">\n\n    <ion-segment-button value="properties">\n\n      Properties\n\n    </ion-segment-button>\n\n    <ion-segment-button value="files">\n\n      Files\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row *ngIf="segment==\'properties\'">\n\n      <ion-col col-12>\n\n        <form novalidate id="ngForm" #form="ngForm" style="margin-bottom: 100vw" (ngSubmit)="save()">\n\n          <ion-row>\n\n            <ion-col col-md-8 col-12>\n\n              <ion-row>\n\n                <ion-item col-10>\n\n                  <ion-label stacked>Name</ion-label>\n\n                  <ion-input tabindex="1" (ionFocus)="on_focus($event)" type="text" [(ngModel)]="project.name" name="name"\n\n                    required></ion-input>\n\n                </ion-item>\n\n                <ion-item no-lines class="error" *ngIf="showError.required_name">Please input project name</ion-item>\n\n                <ion-item col-10 [hidden]="!project.currency_index" >\n\n                  <ion-label stacked>Currency</ion-label>\n\n                    <ion-input tabindex="1" readonly [value]="friendy_more(\'CURRENCIES\', project.currency_index)"></ion-input>\n\n                </ion-item>\n\n                <ion-item col-10 [hidden]="!!project.currency_index" >\n\n                  <ion-label stacked>Currency</ion-label>\n\n                    <ion-input required #currency_free maxlength="3" tabindex="1" type="text" (keyup)="change_measures_more($event)" [(ngModel)]="project.currency" name="currency"></ion-input>\n\n                </ion-item>\n\n                <ion-col col-2>\n\n                  <more pull-left #currency (change)="set_currency(currency, currency_free);change_measures_more($event)" [type]="\'currencies\'" modal-button></more>\n\n                </ion-col>\n\n                <input type="hidden" [(ngModel)]="currency_validation" name="currency_validation" required>\n\n                <ion-item no-lines class="error" *ngIf="showError.required_currency">Please input currency</ion-item>\n\n                <ion-item col-6>\n\n                  <ion-label stacked>Energy price</ion-label>\n\n                  <ion-input tabindex="2" type="tel" [(ngModel)]="project.price" name="price"\n\n                    scroll="40"></ion-input>\n\n                  <input type="hidden" [(ngModel)]="energy_validation" name="energy_validation" required>\n\n                </ion-item>\n\n                <ion-item col-4>\n\n                  <ion-label stacked>Units</ion-label>\n\n                  <ion-input readonly value={{project.price_measure}}></ion-input>\n\n                </ion-item>\n\n                <ion-col col-2>\n\n                  <more pull-left #measure [type]="\'measures\'" (change)="set_measure($event)" modal-button></more>\n\n                </ion-col>\n\n                <ion-item col-12 no-lines class="error" *ngIf="showError.energy_validation">Energy price must be > 0</ion-item>\n\n                <ion-col col-10 no-padding>\n\n                  <ion-item [hidden]="!project.co2_index" >\n\n                    <ion-label stacked>CO<sub>2</sub> emissions [grCO<sub>2</sub>/kWh]</ion-label>\n\n                    <ion-input tabindex="3" readonly="readonly" [value]="friendy_more(\'CO2\', project.co2_index)"></ion-input>\n\n                  </ion-item>\n\n                  <ion-item [hidden]="!!project.co2_index" >\n\n                    <ion-label stacked>CO<sub>2</sub> emissions [grCO<sub>2</sub>/kWh]</ion-label>\n\n                    <ion-input tabindex="3" required #co2_free type="tel" [(ngModel)]="project.co2" name="co2"></ion-input>\n\n                  </ion-item>\n\n                </ion-col>\n\n                <ion-col col-2>\n\n                  <more pull-left #emissitivity (change)="set_co2($event, co2_free)" [type]="\'co2\'" modal-button></more>\n\n                </ion-col>\n\n                <input type="hidden" [(ngModel)]="co2_validation" name="co2_validation" required>\n\n                <ion-item col-12 no-lines class="error" *ngIf="showError.co2_validation">CO<sub>2</sub> emmision must be > 0</ion-item>\n\n              </ion-row>\n\n            </ion-col>\n\n            <ion-col col-md-4 col-12>\n\n              <ion-item text-center border-none no-padding>\n\n                <img [src]="project.picture" (click)="ask_for_change_picture(project)">\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row small-title>\n\n            <ion-col col-12>\n\n              <ion-row mb-3>\n\n                <ion-title class="label" col-12 text-left>Project Leader</ion-title>\n\n                <ion-item col-md-5 col-12>\n\n                  <ion-input tabindex="5" (ionFocus)="on_focus($event)" [(ngModel)]="project.people.leader.name"\n\n                    placeholder="Name" name="leader-name" scroll="60"></ion-input>\n\n                </ion-item>\n\n                <ion-item col-md-4 col-12>\n\n                  <ion-input tabindex="6" (ionFocus)="on_focus($event)" type="email" [(ngModel)]="project.people.leader.email"\n\n                    placeholder="Email" name="leader-email" scroll="60"></ion-input>\n\n                </ion-item>\n\n                <ion-item col-md-3 col-12>\n\n                  <ion-input tabindex="7" (ionFocus)="on_focus($event)" type="phone" [(ngModel)]="project.people.leader.phone"\n\n                    placeholder="Phone" name="leader-phone" scroll="60"></ion-input>\n\n                </ion-item>\n\n              </ion-row>\n\n            </ion-col>\n\n            <ion-col col-12>\n\n              <ion-row mb-3>\n\n                <ion-title class="label" col-12 text-left>Energy Manager</ion-title>\n\n                <ion-item col-md-5 col-12>\n\n                  <ion-input tabindex="8" (ionFocus)="on_focus($event)" [(ngModel)]="project.people.energy_manager.name"\n\n                    placeholder="Name" name="energy-name" scroll="20"></ion-input>\n\n                </ion-item>\n\n                <ion-item col-md-4 col-12>\n\n                  <ion-input tabindex="9" (ionFocus)="on_focus($event)" type="email" [(ngModel)]="project.people.energy_manager.email"\n\n                    placeholder="Email" name="energy-email" scroll="20"></ion-input>\n\n                </ion-item>\n\n                <ion-item col-md-3 col-12>\n\n                  <ion-input tabindex="10" (ionFocus)="on_focus($event)" type="phone" [(ngModel)]="project.people.energy_manager.phone"\n\n                    placeholder="Phone" name="energy-phone" scroll="20"></ion-input>\n\n                </ion-item>\n\n              </ion-row>\n\n            </ion-col>\n\n            <ion-col col-12>\n\n              <ion-row mb-3>\n\n                <ion-title class="label" col-12 text-left>Maintenance Manager</ion-title>\n\n                <ion-item col-md-5 col-12>\n\n                  <ion-input tabindex="11" (ionFocus)="on_focus($event)" [(ngModel)]="project.people.maintenance_manager.name"\n\n                    placeholder="Name" name="maintenance-name" scroll="-20"></ion-input>\n\n                </ion-item>\n\n                <ion-item col-md-4 col-12>\n\n                  <ion-input tabindex="12" (ionFocus)="on_focus($event)" type="email" [(ngModel)]="project.people.maintenance_manager.email"\n\n                    placeholder="Email" name="maintenance-email" scroll="-20"></ion-input>\n\n                </ion-item>\n\n                <ion-item col-md-3 col-12>\n\n                  <ion-input tabindex="13" (ionFocus)="on_focus($event)" type="phone" [(ngModel)]="project.people.maintenance_manager.phone"\n\n                    placeholder="Phone" name="maintenance-phone" scroll="-20"></ion-input>\n\n                </ion-item>\n\n              </ion-row>\n\n            </ion-col>\n\n            <ion-col col-12>\n\n              <ion-row>\n\n                <ion-title class="label" col-12 text-left>HSE Manager</ion-title>\n\n                <ion-item col-md-5 col-12>\n\n                  <ion-input tabindex="14" (ionFocus)="on_focus($event)" [(ngModel)]="project.people.hse_manager.name"\n\n                    placeholder="Name" name="hse-name" scroll="-60"></ion-input>\n\n                </ion-item>\n\n                <ion-item col-md-4 col-12>\n\n                  <ion-input tabindex="15" (ionFocus)="on_focus($event)" type="email" [(ngModel)]="project.people.hse_manager.email"\n\n                    placeholder="Email" name="hse-email" scroll="-60"></ion-input>\n\n                </ion-item>\n\n                <ion-item col-md-3 col-12>\n\n                  <ion-input tabindex="16" (ionFocus)="on_focus($event)" (keyup.enter)="on_keypress($event)" type="phone"\n\n                    [(ngModel)]="project.people.hse_manager.phone" placeholder="Phone" name="hse-phone" scroll="-60"></ion-input>\n\n                </ion-item>\n\n              </ion-row>\n\n            </ion-col>\n\n          </ion-row>\n\n        </form>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngIf="segment==\'files\'">\n\n      <ion-col col-12>\n\n        <ion-list id="document-list" [class.editable]="edit_mode">\n\n          <ion-item *ngFor="let f of project.documents">\n\n            <ion-icon name="document-{{f.extension}}" color="gray" item-start></ion-icon>\n\n            <span (click)="open_file(f)">{{f.file}}</span>\n\n            <ion-icon (click)="ask_for_delete(f)" name="md-trash" color="red" item-end></ion-icon>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-grid no-padding>\n\n    <ion-row no-padding>\n\n      <ion-col col-4 no-padding>\n\n        <button tabindex="17" ion-button small color="light" (click)="after_delete()">\n\n          <ion-icon name="arrow-back"></ion-icon>\n\n          <span hidden-xs>&nbsp;Back</span>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-4 text-center>\n\n        <tools></tools>\n\n      </ion-col>\n\n      <ion-col col-4 text-right no-padding>\n\n        <button *ngIf="segment==\'files\'" tabindex="18" ion-button small color="light" (tap)="choose_file()">\n\n          <ion-icon name="document"></ion-icon>\n\n          <span hidden-xs>Choose file</span>\n\n        </button>\n\n        <button form="ngForm" id="submit-button" id="submit-button" tabindex="19" *ngIf="segment==\'properties\'"\n\n          ion-button small color="primary">\n\n          <ion-icon name="checkmark-circle-outline"></ion-icon>\n\n          <span hidden-xs>Save</span>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\projects\edit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_6__services_file_service__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_8__services__["e" /* PictureService */],
            __WEBPACK_IMPORTED_MODULE_5__services_messages_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__["a" /* FileOpener */]])
    ], EditProjectPage);
    return EditProjectPage;
}(__WEBPACK_IMPORTED_MODULE_2__project_page_base__["a" /* ProjectPageBase */]));

//# sourceMappingURL=edit.js.map

/***/ }),
/* 178 */,
/* 179 */,
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadindService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadindService = /** @class */ (function () {
    function LoadindService(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoadindService.prototype.show = function (message) {
        if (!!this.loading)
            return true;
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent',
            enableBackdropDismiss: false,
            showBackdrop: true,
            content: message || 'Loading, please wait...',
            dismissOnPageChange: true
        });
        console.log('Loading');
        this.loading.present();
        return true;
    };
    LoadindService.prototype.hide = function (wait) {
        var _this = this;
        if (wait === void 0) { wait = 0; }
        setTimeout(function () {
            if (!_this.loading)
                return;
            _this.loading.dismissAll();
            _this.loading = null;
        }, wait);
        return true;
    };
    LoadindService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], LoadindService);
    return LoadindService;
}());

//# sourceMappingURL=loading.service.js.map

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_service__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentService = /** @class */ (function () {
    function ComponentService(service) {
        this.service = service;
    }
    ComponentService.prototype.save = function (component) {
        var _this = this;
        return new Promise(function (resolve) {
            if (!!component.project.components.find(function (r) { return component.id == r.id; }))
                _this.remove(component);
            if (!component.id)
                component.id = Math.random().toString().substr(2);
            component.project.components.push(component);
            _this.service.save(component.project).then(function () { return resolve(component.project); });
        });
    };
    ComponentService.prototype.remove = function (component) {
        component.project.components = component.project.components.filter(function (r) { return r.id !== component.id; });
        return component.project;
    };
    ComponentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__project_service__["a" /* ProjectService */]])
    ], ComponentService);
    return ComponentService;
}());

//# sourceMappingURL=component.service.js.map

/***/ }),
/* 182 */,
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REPORT; });
var REPORT = {
    INSULATION: {
        UNINSULATED_EQUIPMENTS: {
            SURFACE: "Insulation\\Un-Insulated Equipments\\Surface",
            PIPE: "Insulation\\Un-Insulated Equipments\\Pipe",
            FLANGE: "Insulation\\Un-Insulated Equipments\\Flange",
            VALVE: "Insulation\\Un-Insulated Equipments\\Valve",
            CUSTOM: "Insulation\\Un-Insulated Equipments\\Custom"
        },
        INSULATED_EQUIPMENTS: {
            SURFACE: "Insulation\\Insulated Equipments\\Surface",
            PIPE: "Insulation\\Insulated Equipments\\Pipe",
            DAMAGED: "Insulation\\Insulated Equipments\\Generic",
        },
        COLD_INSULATION: {
            ENERGY: "Insulation\\Cold insulation\\Energy",
            CONDENSATION: "Insulation\\Cold insulation\\Condensation",
            DAMAGED: "Insulation\\Cold insulation\\Damaged",
        }
    },
    SAFETY: {
        FIRE_PROTECTION: "Safety\\Fire Protection",
        HOUSEKEEPING: "Safety\\Housekeeping",
        TRAFFIC: "Safety\\Traffic",
        OTHER: "Safety\\Other",
        HOT_SURFACE: {
            UNINSULATED_EQUIPMENTS: {
                SURFACE: "Safety\\Hot Surface\\Insulation\\Un-Insulated Equipments\\Surface",
                PIPE: "Safety\\Hot Surface\\Insulation\\Un-Insulated Equipments\\Pipe",
                FLANGE: "Safety\\Hot Surface\\Insulation\\Un-Insulated Equipments\\Flange",
                VALVE: "Safety\\Hot Surface\\Insulation\\Un-Insulated Equipments\\Valve",
                GENERIC: "Safety\\Hot Surface\\Insulation\\Un-Insulated Equipments\\Generic"
            },
            INSULATED_EQUIPMENTS: {
                SURFACE: "Safety\\Hot Surface\\Insulation\\Insulated Equipments\\Surface",
                PIPE: "Safety\\Hot Surface\\Insulation\\Insulated Equipments\\Pipe",
                DAMAGED: "Safety\\Hot Surface\\Insulation\\Insulated Equipments\\Damaged",
            }
        }
    },
    MANTENANCE: {
        LEAKAGE: 'Maintenance\\Leakege',
        DAMAGED: "Maintenance\\Damaged",
        CONDENSATION: "Maintenance\\Condensation",
        STRUCTURAL: "Maintenance\\Structural",
        MECHANICAL: "Maintenance\\Mechanical",
        ELECTRICAL: "Maintenance\\Electrical",
    },
    CUSTOM: "Custom",
    DAMAGED: 'Damaged',
    CONDENSATION: 'Condensation'
};
//# sourceMappingURL=report.const.js.map

/***/ }),
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 216;

/***/ }),
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 258;

/***/ }),
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelWithPicture; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const_images__ = __webpack_require__(78);

var ModelWithPicture = /** @class */ (function () {
    function ModelWithPicture(item) {
        this.id = !!item ? item.id || Math.random().toString().substr(2) : Math.random().toString().substr(2);
        this.picture = !!item && !!item.picture ? item.picture : __WEBPACK_IMPORTED_MODULE_0__const_images__["b" /* NON_PICTURE */];
    }
    return ModelWithPicture;
}());

//# sourceMappingURL=model-with-picture.js.map

/***/ }),
/* 300 */,
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PictureService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_service__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PictureService = /** @class */ (function () {
    function PictureService(camera, file, message) {
        this.camera = camera;
        this.file = file;
        this.message = message;
    }
    PictureService.prototype.take_picture = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.camera.getPicture({
                quality: 80,
                sourceType: _this.camera.PictureSourceType.CAMERA,
                destinationType: _this.camera.DestinationType.NATIVE_URI,
                encodingType: _this.camera.EncodingType.JPEG,
                mediaType: _this.camera.MediaType.PICTURE,
                correctOrientation: true,
                allowEdit: false
            }).then(function (uri) {
                _this.file.create_picture(uri)
                    .then(function (d) { return resolve(d.folder + "/" + d.file); })
                    .catch(function (ex) { return _this.message.alert('Error take picture', JSON.stringify(ex, null, 2)); });
            });
        });
    };
    PictureService.prototype.get_picture = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.camera.getPicture({
                quality: 80,
                sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                destinationType: _this.camera.DestinationType.NATIVE_URI,
                encodingType: _this.camera.EncodingType.JPEG,
                mediaType: _this.camera.MediaType.PICTURE,
                correctOrientation: true,
                allowEdit: false
            }).then(function (uri) {
                _this.file.create_picture(uri)
                    .then(function (d) { return resolve(d.folder + "/" + d.file); })
                    .catch(function (ex) { return _this.message.alert('Error take picture', JSON.stringify(ex, null, 2)); });
            });
        });
    };
    PictureService.prototype.delete_picture = function (picture) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.file.delete(picture);
            resolve(picture);
        });
    };
    PictureService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__file_service__["a" /* FileService */], __WEBPACK_IMPORTED_MODULE_3__messages_service__["a" /* MessageService */]])
    ], PictureService);
    return PictureService;
}());

//# sourceMappingURL=picture.service.js.map

/***/ }),
/* 302 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__const__ = __webpack_require__(500);


var CalculatorFactory = /** @class */ (function () {
    function CalculatorFactory() {
        this.decorators = new Map();
        this.decorators.set(__WEBPACK_IMPORTED_MODULE_1__const__["a" /* REPORT */].INSULATION.UNINSULATED_EQUIPMENTS.SURFACE, function () { return new __WEBPACK_IMPORTED_MODULE_0____["e" /* SurfaceDecorator */](); });
        this.decorators.set(__WEBPACK_IMPORTED_MODULE_1__const__["a" /* REPORT */].INSULATION.UNINSULATED_EQUIPMENTS.FLANGE, function () { return new __WEBPACK_IMPORTED_MODULE_0____["a" /* FlangeDecorator */](); });
        this.decorators.set(__WEBPACK_IMPORTED_MODULE_1__const__["a" /* REPORT */].INSULATION.UNINSULATED_EQUIPMENTS.PIPE, function () { return new __WEBPACK_IMPORTED_MODULE_0____["d" /* PipeDecorator */](); });
        this.decorators.set(__WEBPACK_IMPORTED_MODULE_1__const__["a" /* REPORT */].INSULATION.UNINSULATED_EQUIPMENTS.VALVE, function () { return new __WEBPACK_IMPORTED_MODULE_0____["f" /* ValveDecorator */](); });
        this.decorators.set(__WEBPACK_IMPORTED_MODULE_1__const__["a" /* REPORT */].INSULATION.INSULATED_EQUIPMENTS.SURFACE, function () { return new __WEBPACK_IMPORTED_MODULE_0____["c" /* ISurfaceDecorator */](); });
        this.decorators.set(__WEBPACK_IMPORTED_MODULE_1__const__["a" /* REPORT */].INSULATION.INSULATED_EQUIPMENTS.PIPE, function () { return new __WEBPACK_IMPORTED_MODULE_0____["b" /* IPipeDecorator */](); });
    }
    CalculatorFactory.prototype.calculate = function (report, result) {
        try {
            var calculated_report = this.decorators.get(report.path)().calculate(report);
            if (!!result) {
                calculated_report.result.previousHeadLost = result.headLost;
                calculated_report.result.co2[3] = result.co2[0];
            }
            return calculated_report;
        }
        catch (ex) {
            return report;
        }
    };
    return CalculatorFactory;
}());

//# sourceMappingURL=calculator.factory.js.map

/***/ }),
/* 303 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ipipe_class__ = __webpack_require__(494);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__ipipe_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isurface_class__ = __webpack_require__(495);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__isurface_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__valve_class__ = __webpack_require__(496);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__valve_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipe_class__ = __webpack_require__(497);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__pipe_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flange_class__ = __webpack_require__(498);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__flange_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__surface_class__ = __webpack_require__(499);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__surface_class__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),
/* 304 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportInsulatedPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_reports__ = __webpack_require__(21);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ReportInsulatedPipe = /** @class */ (function (_super) {
    __extends(ReportInsulatedPipe, _super);
    function ReportInsulatedPipe(project, component, item) {
        var _this = _super.call(this, project, component, item) || this;
        _this.project = project;
        _this.component = component;
        _this.page = __WEBPACK_IMPORTED_MODULE_1__pages_reports__["l" /* ReportInsulatedPipePage */];
        _this.name = "Insulated Pipe";
        //public path = REPORT.INSULATION.INSULATED_EQUIPMENTS.PIPE;
        _this.insulated = true;
        return _this;
        // this.component.fields.location = 'Test ipipe borrar';
        // this.component.fields.operational_time = 8760;
        // this.component.fields.nominal_diameter = 200;
        // this.component.fields.length = 1;
        // this.component.fields.surface_material = 0.9;
        // this.component.fields.ambient_temp = 12;
        // this.component.fields.surface_temp = 36;
    }
    return ReportInsulatedPipe;
}(__WEBPACK_IMPORTED_MODULE_0__report_base__["a" /* ReportBase */]));

//# sourceMappingURL=report-ipipe.class.js.map

/***/ }),
/* 305 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_reports__ = __webpack_require__(21);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ReportPipe = /** @class */ (function (_super) {
    __extends(ReportPipe, _super);
    function ReportPipe(project, component, item) {
        var _this = _super.call(this, project, component, item) || this;
        _this.project = project;
        _this.component = component;
        _this.page = __WEBPACK_IMPORTED_MODULE_1__pages_reports__["r" /* ReportPipePage */];
        _this.name = "Uninsulated Pipe";
        //public path = REPORT.INSULATION.UNINSULATED_EQUIPMENTS.PIPE;
        _this.insulated = true;
        return _this;
    }
    return ReportPipe;
}(__WEBPACK_IMPORTED_MODULE_0__report_base__["a" /* ReportBase */]));

//# sourceMappingURL=report-pipe.class.js.map

/***/ }),
/* 306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calculators_calculator_factory__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__picture__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_reports__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__const_more_more__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_scroll_to_component_class__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__const_images__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__const_patterns__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_summary_summary__ = __webpack_require__(104);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var BaseReportPage = /** @class */ (function (_super) {
    __extends(BaseReportPage, _super);
    //#endregion
    function BaseReportPage(report, navParam, navCtrl, service, alertCtrl, picture, message, keyboard, modalCtrl) {
        var _this = _super.call(this, keyboard) || this;
        _this.report = report;
        _this.navParam = navParam;
        _this.navCtrl = navCtrl;
        _this.service = service;
        _this.alertCtrl = alertCtrl;
        _this.picture = picture;
        _this.message = message;
        _this.keyboard = keyboard;
        _this.modalCtrl = modalCtrl;
        _this.can_remove = false;
        _this.unknow_surface = false;
        _this.calculator = new __WEBPACK_IMPORTED_MODULE_3__calculators_calculator_factory__["a" /* CalculatorFactory */]();
        _this.edit_surface_material = false;
        _this.view = 'form';
        _this.editing_picture = new __WEBPACK_IMPORTED_MODULE_4__picture__["a" /* Picture */]();
        _this.segment = 'input';
        _this.patterns = __WEBPACK_IMPORTED_MODULE_10__const_patterns__["a" /* Patterns */];
        _this.more = __WEBPACK_IMPORTED_MODULE_6__const_more_more__["a" /* More */];
        _this.editable = false;
        _this._average_temp = null;
        _this._original_component = _this.report.component;
        _this.report.component = new __WEBPACK_IMPORTED_MODULE_7__component__["a" /* TbiComponent */](_this._original_component.project, _this._original_component);
        _this.report.component.id = _this._original_component.id;
        //this.can_remove = !!this.report.id && 1 == 2;
        _this.editable = !_this.report.component.reports.filter(function (r) { return !!r.path.match(/(surface|pipe|valve|flange)/gi) && !!r.result; }).length;
        _this.is_energy_report = !!_this.report.path.match(/(pipe|surface|valve|flange)/gi);
        return _this;
        // this.report.pictures.push(new Picture({
        //   picture: "data:image/jpeg;base64,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"
        // }))
    }
    Object.defineProperty(BaseReportPage.prototype, "picture_qty", {
        //#region Custom Validations
        get: function () {
            return !!this.report.pictures.length ? this.report.pictures.length : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseReportPage.prototype, "compare_insulated_temp", {
        get: function () {
            var c = this.report.component.fields;
            return (!c || (c.surface_temp == null || c.surface_temp.toString() == '')
                || (c.medium_temp == null || c.medium_temp.toString() == '')
                || (c.ambient_temp == null || c.ambient_temp.toString() == ''))
                ? 1
                : Number(c.surface_temp) < Number(c.medium_temp)
                    && Number(c.surface_temp) < Number(c.ambient_temp) ? null : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseReportPage.prototype, "surface_temp_abs", {
        get: function () {
            var c = this.report.component.fields;
            return (!c || (c.medium_temp == null || c.medium_temp.toString() == '' || c.unknow_surface)
                || (c.surface_temp == null || c.surface_temp.toString() == ''))
                ? 1
                : Math.abs(Number(c.medium_temp) - Number(c.surface_temp)) < 15
                    ? null
                    : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseReportPage.prototype, "surface_material_range", {
        get: function () {
            var c = this.report.component.fields;
            return (!c || (c.surface_material == null || c.surface_material.toString() == ''))
                ? 1
                : Number(c.surface_material) < 0 || Number(c.surface_material) > 1
                    ? null
                    : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseReportPage.prototype, "operational_time_range", {
        get: function () {
            var c = this.report.component.fields;
            return (!c || (c.operational_time == null || c.operational_time.toString() == ''))
                ? 1
                : Number(c.operational_time) < 0 || Number(c.operational_time) > 8760
                    ? null
                    : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseReportPage.prototype, "temp_range_diff", {
        get: function () {
            var c = this.report.component.fields;
            return (!c || (c.ambient_temp == null || c.ambient_temp.toString() == '')
                || (c.surface_temp == null || c.surface_temp.toString() == ''))
                ? 1
                : Math.abs(Number(c.surface_temp) - Number(c.ambient_temp)) < 5
                    ? null
                    : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseReportPage.prototype, "diameter_low", {
        get: function () {
            var c = this.report.component.fields;
            return (!c || (c.nominal_diameter == null || c.nominal_diameter.toString() == ''))
                ? 1
                : Number(c.nominal_diameter) <= 0
                    ? null
                    : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseReportPage.prototype, "length_low", {
        get: function () {
            var c = this.report.component.fields;
            return (!c || (c.length == null || c.length.toString() == ''))
                ? 1
                : Number(c.length) <= 0
                    ? null
                    : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseReportPage.prototype, "items_low", {
        get: function () {
            var c = this.report.component.fields;
            return (!c || (c.number == null || c.number.toString() == ''))
                ? 1
                : Number(c.number) <= 0
                    ? null
                    : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseReportPage.prototype, "surface_low", {
        get: function () {
            var c = this.report.component.fields;
            return (!c || (c.surface == null || c.surface.toString() == '' || c.unknow_surface))
                ? 1
                : Number(c.surface) <= 0
                    ? null
                    : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseReportPage.prototype, "surface_temp_range", {
        get: function () {
            var c = this.report.component.fields;
            return (!c || (c.surface_temp == null || c.surface_temp.toString() == ''))
                ? 1
                : Number(c.surface_temp) >= 1000
                    ? null
                    : 1;
        },
        enumerable: true,
        configurable: true
    });
    BaseReportPage.prototype.ngAfterViewInit = function () {
        //const wait: number = 1000;
        // if (!!this.time && !!this.after_time) {
        //   this.time.change.subscribe(v => {
        //     setTimeout(() => this.after_time.setFocus(), wait);
        //   })
        // }
        // if (!!this.material) {
        //   this.material.change.subscribe(v => {
        //     setTimeout(() => this.after_material.setFocus(), wait);
        //   })
        // }
    };
    BaseReportPage.prototype.ngOnInit = function () {
        var _this = this;
        if (!!this.report.result.headLost.power && !!this.report.id && !!this.report.path.match(/(pipe|surface|valve|flange)/gi))
            setTimeout(function () { return _this.calculate(); }, 250);
    };
    BaseReportPage.prototype.remove_report = function () {
        debugger;
    };
    Object.defineProperty(BaseReportPage.prototype, "first_picture", {
        get: function () {
            return this.report.pictures.length ? this.report.pictures[0].picture : __WEBPACK_IMPORTED_MODULE_9__const_images__["b" /* NON_PICTURE */];
        },
        enumerable: true,
        configurable: true
    });
    BaseReportPage.prototype.set_length = function (message, default_value) {
        var _this = this;
        var alert = this.alertCtrl.create({
            cssClass: 'ion-dialog-horizontal margin-top',
            message: "Equivalent length<br><small>" + message + "</small>",
            inputs: [
                {
                    name: 'length',
                    placeholder: 'm',
                    type: 'number',
                    value: null != this.report.component.fields.length ? this.report.component.fields.length.toString() : default_value.toString()
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Report',
                    cssClass: 'royal',
                    handler: function (data) {
                        _this.report.component.fields.length = ('' != data.length) ? parseFloat(data.length) : default_value;
                    }
                }
            ]
        });
        alert.present();
    };
    BaseReportPage.prototype.toggle_surface_material = function (value) {
        var _this = this;
        //if (!this.editable) return;
        this.edit_surface_material = value;
        value && setTimeout(function () {
            _this.surface_material.setFocus();
        }, 150);
    };
    BaseReportPage.prototype.start_changes_observer = function () {
        var _this = this;
        this.errors.form = this.form;
        this.errors.on_change.subscribe(function (form) {
            _this.view = 'form';
            _this.report.result = null;
        });
    };
    BaseReportPage.prototype.save = function () {
        var _this = this;
        if (!!this.form.invalid)
            return;
        var project = this.report.component.project;
        if (!this.report.component.reports.find(function (c) { return c.id === _this.report.id; }))
            this.report.component.reports.push(this.report);
        if (!project.components.find(function (c) { return c.id === _this.report.component.id; }))
            project.components.push(this.report.component);
        //this.confirm_space().then(space => {
        //this.report.component.fields.space_warning = space;
        this.service.save(this.report).then(function (p) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_summary_summary__["a" /* SummaryPage */], { project: p, summary: true, parent: _this, report: _this.report }, { animate: true, direction: 'backward' });
        });
        //});
        //this.ask_for_more_reports(project);
        //this.navCtrl.push(ProjectPage, { project: project });
    };
    BaseReportPage.prototype.ask_for_more_reports = function (project) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            //title: `Create report`,
            cssClass: "ion-dialog-horizontal",
            message: "Do you want to add another report associated to this component?",
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_reports__["w" /* ReportsPage */], {
                            project: project,
                            message: "\u201C" + _this.report.component.fields.location + "\u201D has been saved. You are going to start reports on a new component."
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_reports__["w" /* ReportsPage */], {
                            component: _this.report.component,
                            report: _this.report,
                            project: project
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    Object.defineProperty(BaseReportPage.prototype, "has_results", {
        get: function () {
            return !this.form.invalid && this.report.result !== null;
        },
        enumerable: true,
        configurable: true
    });
    BaseReportPage.prototype.go_back = function () {
        var _this = this;
        if (this.view === 'edit_picture') {
            //(document.getElementsByTagName('ion-buttons')[0] as any).style.display = 'initial';
            this.view = 'form';
        }
        else {
            if (this.form.dirty || !this.form.pristine) {
                var confirm_1 = this.alertCtrl.create({
                    //title: `Leave report`,
                    cssClass: "ion-dialog-horizontal",
                    message: "Do you want to leave this report?",
                    enableBackdropDismiss: false,
                    buttons: [
                        {
                            text: 'Yes',
                            handler: function () {
                                _this.report.component = _this._original_component;
                                _this.navCtrl.pop();
                            }
                        },
                        {
                            text: 'No',
                            role: 'cancel'
                        }
                    ]
                });
                confirm_1.present();
            }
            else {
                this.report.component = this._original_component;
                this.navCtrl.pop();
            }
        }
        return this;
    };
    ;
    BaseReportPage.prototype.calculate = function () {
        // const _elm = document.getElementById('result-grid');
        // _elm.closest('.scroll-content').scrollTo(0, _elm.closest('.scroll-content').scrollTop - 150);
        var _this = this;
        this.start_changes_observer();
        this.errors.page = this;
        if (!this.form.invalid) {
            this.view = 'result';
            this.report = this.calculator.calculate(this.report, this.navParam.data.result);
            setTimeout(function () {
                _this.content.scrollToBottom(400).then(function () {
                    //Array.from(document.getElementsByClassName('scroll-content'))[2].scrollTop = window.innerHeight + 200;
                });
            }, 500);
            return this.report;
        }
        else {
            this.view = 'form';
        }
        setTimeout(function () { return _this.content.scrollTo(0, 2000, 1500); }, 150);
    };
    BaseReportPage.prototype.remove_picture = function (include_markers) {
        var _this = this;
        //He comentado lo de eliminar fisicamente el archivo
        //porque si no guarda los cambios, el usuario,
        //ya se habrá perdido el archivo.
        //this.picture.delete_picture(this.editing_picture).then(picture => {
        if (!include_markers) {
            this.report.component.markers = (this.report.component.markers || []).concat(this.editing_picture.markers);
        }
        this.report.pictures = this.report.pictures.filter(function (p) { return p.picture != _this.editing_picture.picture; });
        this.view = 'form';
        this.editing_picture = null;
        //});
    };
    BaseReportPage.prototype.delete_picture = function () {
        var _this = this;
        var _message = this.editing_picture.has_markers
            ? 'Do you want to remove this pictures and its measurements'
            : 'Do you want to remove this picture?';
        var _buttons = !this.editing_picture.has_markers
            ? [{ text: 'Yes', handler: function () { return _this.remove_picture(false); } }, { text: 'No', role: 'cancel' }]
            : [{ text: 'Yes', handler: function () { return _this.remove_picture(true); } }, { text: 'No', handler: function () { return _this.remove_picture(false); } }, { text: 'Cancel', role: 'cancel' }];
        var confirm = this.alertCtrl.create({
            message: _message,
            cssClass: "ion-dialog-horizontal",
            enableBackdropDismiss: false,
            buttons: _buttons
        });
        confirm.present();
    };
    BaseReportPage.prototype.scrollToBottom = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () { return _this.content.scrollToBottom(400).then(function () { return resolve(true); }); }, 500);
        });
    };
    BaseReportPage.prototype.on_picture_start_edit = function (picture) {
        //(document.getElementsByTagName('ion-buttons')[0] as any).style.display = 'none';
        this.editing_picture = picture;
        this.view = 'edit_picture';
    };
    BaseReportPage.prototype.alert = function (message) {
        var confirm = this.alertCtrl.create({
            //title: `Create report`,
            message: message,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok'
                }
            ]
        });
        confirm.present();
    };
    BaseReportPage.prototype.take_picture = function () {
        var _this = this;
        this.picture.take_picture().then(function (d) { return _this.report.pictures.push(new __WEBPACK_IMPORTED_MODULE_4__picture__["a" /* Picture */]({ picture: d })); })
            .catch(function (ex) { return _this.message.alert('Error take picture', JSON.stringify(ex, null, 2)); });
    };
    BaseReportPage.prototype.toggle_know = function () {
        if (!!this.report.component.fields.unknow_surface)
            this.report.component.fields.surface = null;
    };
    BaseReportPage.prototype.toggle_know_temp = function () {
        var _this = this;
        if (!!this.report.component.fields.unknow_surface_temp) {
            var known_temp = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_reports__["b" /* KnownTempPage */], { medium_temp: this.report.component.fields.surface_temp }, {
                showBackdrop: true,
                enableBackdropDismiss: false,
                cssClass: 'known-temp'
            });
            known_temp.onDidDismiss(function (r) {
                if (!!r) {
                    _this.report.component.fields.surface_temp = Number(r.temp);
                    _this.report.component.fields.unknow_surface_temp = Number(r.gas);
                }
                else {
                    _this.report.component.fields.unknow_surface_temp = 0;
                }
            });
            known_temp.present();
        }
    };
    BaseReportPage.prototype.before_calculate = function (temp) {
        this.report.component.fields.surface_temp = temp;
    };
    Object.defineProperty(BaseReportPage.prototype, "average_temp", {
        get: function () {
            if (!this.report.has_markers) {
                this._average_temp = null;
            }
            this._average_temp = this.report.surface_temp;
            return this._average_temp;
        },
        set: function (value) {
            this._average_temp = value;
        },
        enumerable: true,
        configurable: true
    });
    BaseReportPage.prototype.ask_calculate = function () {
        var _this = this;
        if (isNaN(this.report.component.fields.surface_temp)
            || !this.report.has_markers)
            return this.calculate();
        var confirm = this.alertCtrl.create({
            //title: `Temperature`,
            message: "Which temperature would you like to use for calculation?",
            cssClass: "ion-dialog-horizontal",
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: "Average " + this.report.surface_temp + "\u00BAC",
                    handler: function () { return _this.before_calculate(_this.report.component.fields.surface_temp = _this.report.surface_temp); }
                },
                {
                    text: "Minimum " + this.report.min_temp + "\u00BAC",
                    handler: function () { return _this.before_calculate(_this.report.component.fields.surface_temp = _this.report.min_temp); }
                },
                {
                    text: "Maximum " + this.report.max_temp + "\u00BAC",
                    handler: function () { return _this.before_calculate(_this.report.component.fields.surface_temp = _this.report.max_temp); }
                }
            ]
        });
        confirm.present();
    };
    BaseReportPage.prototype.confirm_space = function () {
        var _this = this;
        return (!this.report.insulated || this.report.is_validation)
            ? new Promise(function (resolve) {
                resolve(false);
            })
            : new Promise(function (resolve) {
                var confirm = _this.alertCtrl.create({
                    message: "Is there enough space to place the insulation?",
                    enableBackdropDismiss: false,
                    buttons: [
                        {
                            text: 'Yes',
                            handler: function () { return resolve(false); }
                        }, {
                            text: 'No',
                            handler: function () { return resolve(true); }
                        }
                    ]
                });
                confirm.present();
            });
    };
    BaseReportPage.prototype.friendy_more = function (type, index) {
        var _more = __WEBPACK_IMPORTED_MODULE_6__const_more_more__["a" /* More */][type].find(function (m) { return m[2] == index; });
        return _more[0];
    };
    BaseReportPage.prototype.set_operational_time = function (more) {
        var _this = this;
        this.report.component.fields.operational_time = more.value;
        this.report.component.fields.operational_time_index = more.index;
        setTimeout(function () { return ((more.index == 0) ? _this.before_time : _this.after_time).setFocus(); }, 650);
    };
    BaseReportPage.prototype.set_surface_material = function (more) {
        var _this = this;
        this.report.component.fields.surface_material = more.value;
        this.report.component.fields.surface_material_index = more.index;
        console.log(more);
        setTimeout(function () { return ((more.index == 0) ? _this.before_material : _this.after_material).setFocus(); }, 650);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_9" /* ViewChild */])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgForm */])
    ], BaseReportPage.prototype, "form", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_9" /* ViewChild */])('errors'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__pages_reports__["h" /* ReportErrorsComponent */])
    ], BaseReportPage.prototype, "errors", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_9" /* ViewChild */])('after_time'),
        __metadata("design:type", Object)
    ], BaseReportPage.prototype, "after_time", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_9" /* ViewChild */])('before_time'),
        __metadata("design:type", Object)
    ], BaseReportPage.prototype, "before_time", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_9" /* ViewChild */])('after_material'),
        __metadata("design:type", Object)
    ], BaseReportPage.prototype, "after_material", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_9" /* ViewChild */])('before_material'),
        __metadata("design:type", Object)
    ], BaseReportPage.prototype, "before_material", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_9" /* ViewChild */])('time', { read: __WEBPACK_IMPORTED_MODULE_5__pages_reports__["p" /* ReportMoreButtonComponent */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__pages_reports__["p" /* ReportMoreButtonComponent */])
    ], BaseReportPage.prototype, "time", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_9" /* ViewChild */])('material', { read: __WEBPACK_IMPORTED_MODULE_5__pages_reports__["p" /* ReportMoreButtonComponent */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__pages_reports__["p" /* ReportMoreButtonComponent */])
    ], BaseReportPage.prototype, "material", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_9" /* ViewChild */])('surface_material'),
        __metadata("design:type", Object)
    ], BaseReportPage.prototype, "surface_material", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Content */])
    ], BaseReportPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_9" /* ViewChild */])('resultGrid'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ElementRef */])
    ], BaseReportPage.prototype, "resultGrid", void 0);
    return BaseReportPage;
}(__WEBPACK_IMPORTED_MODULE_8__pages_scroll_to_component_class__["a" /* ScrollToComponent */]));

//# sourceMappingURL=base-report-page.class.js.map

/***/ }),
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Patterns; });
var Patterns;
(function (Patterns) {
    Patterns["REQUIRED_NUMBER"] = "^(-?\\d+(\\.\\d+)?)$";
    Patterns["UNREQUIRED_NUMBER"] = "^(\\s*|-?\\d+(\\.\\d+)?)$";
})(Patterns || (Patterns = {}));
//# sourceMappingURL=patterns.js.map

/***/ }),
/* 308 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SummaryEditPage = /** @class */ (function () {
    function SummaryEditPage(viewCtrl, params) {
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.reports = [];
        this.component = this.params.data.tbi_component;
        this.reports = this.component.reports;
        this.report_selected = this.reports[0].id;
    }
    SummaryEditPage.prototype.edit = function () {
        this.viewCtrl.dismiss(this.report_selected);
    };
    SummaryEditPage.prototype.close = function () {
        this.viewCtrl.dismiss(null);
    };
    SummaryEditPage.prototype.friendly_path = function (report) {
        return report.path.split(/(\\|\/)/gi)[0];
    };
    SummaryEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-summary',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\summary\summary-edit.html"*/'<ion-list radio-group [(ngModel)]="report_selected">\n\n  <ion-list-header>\n\n    Reports\n\n  </ion-list-header>\n\n\n\n  <ion-item *ngFor="let r of reports; let i=index" [attr.title]="r.summary_id">\n\n    <ion-label>{{friendly_path(r)}}</ion-label>\n\n    <ion-radio checked="true" value="{{r.id}}"></ion-radio>\n\n  </ion-item>\n\n\n\n</ion-list>\n\n<ion-footer>\n\n  <ion-grid no-padding>\n\n    <ion-row no-padding>\n\n      <ion-col col-5 no-padding>\n\n        <button (click)="close()" ion-button small block color="light">Cancel</button>\n\n      </ion-col>\n\n      <ion-col offset-2 col-5 no-padding text-right>\n\n        <button (click)="edit()" [disabled]="!this.report_selected" block ion-button small>Edit</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-footer>'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\summary\summary-edit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SummaryEditPage);
    return SummaryEditPage;
}());

var ReportListItem = /** @class */ (function () {
    function ReportListItem(report) {
        var segments = report.path.split('\\');
        this.id = report.id;
        this.name = segments[segments.length - 1];
    }
    return ReportListItem;
}());
//# sourceMappingURL=summary-edit.js.map

/***/ }),
/* 309 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const_report_const__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reports__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reports_report_generic_class__ = __webpack_require__(310);




var ReportRouter = /** @class */ (function () {
    function ReportRouter(project, component, navCtrl) {
        this.project = project;
        this.component = component;
        this.navCtrl = navCtrl;
        this.component = this.component || new __WEBPACK_IMPORTED_MODULE_1__component__["a" /* TbiComponent */](this.project);
    }
    ReportRouter.prototype.navigate_to_report = function (path, summary_id, report, event, result) {
        var r = this.create_report(path, summary_id, report);
        this.navCtrl.push(r.page, {
            project: this.project,
            component: this.component,
            report: r,
            result: result
        });
        return this;
    };
    ReportRouter.prototype.create_report = function (path, summary_id, report) {
        var _report = report;
        //if (!!_report) return _report;
        switch (path) {
            case __WEBPACK_IMPORTED_MODULE_0__const_report_const__["a" /* REPORT */].INSULATION.UNINSULATED_EQUIPMENTS.SURFACE:
            case __WEBPACK_IMPORTED_MODULE_0__const_report_const__["a" /* REPORT */].SAFETY.HOT_SURFACE.UNINSULATED_EQUIPMENTS.SURFACE:
                _report = new __WEBPACK_IMPORTED_MODULE_2__reports__["h" /* ReportSurface */](this.project, this.component, report);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__const_report_const__["a" /* REPORT */].INSULATION.INSULATED_EQUIPMENTS.SURFACE:
            case __WEBPACK_IMPORTED_MODULE_0__const_report_const__["a" /* REPORT */].SAFETY.HOT_SURFACE.INSULATED_EQUIPMENTS.SURFACE:
                _report = new __WEBPACK_IMPORTED_MODULE_2__reports__["f" /* ReportInsulatedSurface */](this.project, this.component, report);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__const_report_const__["a" /* REPORT */].INSULATION.UNINSULATED_EQUIPMENTS.FLANGE:
            case __WEBPACK_IMPORTED_MODULE_0__const_report_const__["a" /* REPORT */].SAFETY.HOT_SURFACE.UNINSULATED_EQUIPMENTS.FLANGE:
                _report = new __WEBPACK_IMPORTED_MODULE_2__reports__["d" /* ReportFlange */](this.project, this.component, report);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__const_report_const__["a" /* REPORT */].INSULATION.UNINSULATED_EQUIPMENTS.PIPE:
            case __WEBPACK_IMPORTED_MODULE_0__const_report_const__["a" /* REPORT */].SAFETY.HOT_SURFACE.UNINSULATED_EQUIPMENTS.PIPE:
                _report = new __WEBPACK_IMPORTED_MODULE_2__reports__["g" /* ReportPipe */](this.project, this.component, report);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__const_report_const__["a" /* REPORT */].INSULATION.INSULATED_EQUIPMENTS.PIPE:
            case __WEBPACK_IMPORTED_MODULE_0__const_report_const__["a" /* REPORT */].SAFETY.HOT_SURFACE.INSULATED_EQUIPMENTS.PIPE:
                _report = new __WEBPACK_IMPORTED_MODULE_2__reports__["e" /* ReportInsulatedPipe */](this.project, this.component, report);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__const_report_const__["a" /* REPORT */].INSULATION.UNINSULATED_EQUIPMENTS.VALVE:
            case __WEBPACK_IMPORTED_MODULE_0__const_report_const__["a" /* REPORT */].SAFETY.HOT_SURFACE.UNINSULATED_EQUIPMENTS.VALVE:
                _report = new __WEBPACK_IMPORTED_MODULE_2__reports__["i" /* ReportValve */](this.project, this.component, report);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__const_report_const__["a" /* REPORT */].INSULATION.INSULATED_EQUIPMENTS.DAMAGED:
            case __WEBPACK_IMPORTED_MODULE_0__const_report_const__["a" /* REPORT */].INSULATION.COLD_INSULATION.DAMAGED:
            case __WEBPACK_IMPORTED_MODULE_0__const_report_const__["a" /* REPORT */].SAFETY.HOT_SURFACE.INSULATED_EQUIPMENTS.DAMAGED:
            case __WEBPACK_IMPORTED_MODULE_0__const_report_const__["a" /* REPORT */].MANTENANCE.DAMAGED:
                _report = new __WEBPACK_IMPORTED_MODULE_2__reports__["c" /* ReportDamaged */](this.project, this.component, report);
                break;
            case __WEBPACK_IMPORTED_MODULE_0__const_report_const__["a" /* REPORT */].INSULATION.COLD_INSULATION.CONDENSATION:
            case __WEBPACK_IMPORTED_MODULE_0__const_report_const__["a" /* REPORT */].MANTENANCE.CONDENSATION:
                _report = new __WEBPACK_IMPORTED_MODULE_2__reports__["b" /* ReportCondensation */](this.project, this.component, report);
                break;
            // case REPORT.MANTENANCE.LEAKAGE:
            //   _report = new ReportLeakage(this.project, this.component, report);
            //   break;
            default:
                _report = new __WEBPACK_IMPORTED_MODULE_3__reports_report_generic_class__["a" /* ReportGeneric */](this.project, this.component, report);
                break;
        }
        _report.path = path;
        _report.summary_id = summary_id;
        _report.readonly_summary_id = summary_id;
        return _report;
    };
    return ReportRouter;
}());

//# sourceMappingURL=report-router.js.map

/***/ }),
/* 310 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportGeneric; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_reports__ = __webpack_require__(21);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ReportGeneric = /** @class */ (function (_super) {
    __extends(ReportGeneric, _super);
    //public path = REPORT.INSULATION.UNINSULATED_EQUIPMENTS.GENERIC;
    function ReportGeneric(project, component, item) {
        var _this = _super.call(this, project, component, item) || this;
        _this.project = project;
        _this.component = component;
        _this.page = __WEBPACK_IMPORTED_MODULE_1__pages_reports__["a" /* GenericReportPage */];
        _this.name = "Generic";
        return _this;
    }
    return ReportGeneric;
}(__WEBPACK_IMPORTED_MODULE_0__report_base__["a" /* ReportBase */]));

//# sourceMappingURL=report-generic.class.js.map

/***/ }),
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportAreaModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportAreaModalComponent = /** @class */ (function () {
    function ReportAreaModalComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.radius = null;
        this.height = null;
        this.width = null;
        this.deep = null;
        this.segment = {
            value: 'cube',
            cube: 0,
            cilinder: 1,
            circle: 2
        };
    }
    ReportAreaModalComponent.prototype.ionViewDidLoad = function () {
        this.on_segment_change();
    };
    ReportAreaModalComponent.prototype.close = function () {
        this.viewCtrl.dismiss(null);
        return this;
    };
    ReportAreaModalComponent.prototype.key_enter = function () {
        document.getElementById('area_calculate_btn').focus();
    };
    ReportAreaModalComponent.prototype.get_surface = function () {
        switch (this.segment.value) {
            case 'cilinder':
                return 2 * Math.PI * (this.radius || 0) * (this.height || 0);
            case 'circle':
                return Math.PI * Math.sqrt(this.radius || 0);
            case 'rectangle':
                return (this.width || 0) * (this.height || 0);
            default:
                return 2 * ((this.width || 0) * (this.height || 0) + (this.deep || 0) * (this.height || 0));
        }
    };
    ReportAreaModalComponent.prototype.calculate = function () {
        this.viewCtrl.dismiss(Number(this.get_surface().toFixed(2)));
        return this;
    };
    ReportAreaModalComponent.prototype.on_segment_change = function () {
    };
    ReportAreaModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'area-modal',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\components\area\report-area-modal.component.html"*/'<ion-toolbar>\n  <ion-segment [(ngModel)]="segment.value" color="primary" (ionChange)="on_segment_change($event)">\n    <ion-segment-button value="cube">\n      Prism\n    </ion-segment-button>\n    <ion-segment-button value="rectangle">\n      Rectangle\n    </ion-segment-button>\n    <ion-segment-button value="cilinder">\n      Cilinder\n    </ion-segment-button>\n    <ion-segment-button value="circle">\n      Circle\n    </ion-segment-button>\n  </ion-segment>\n</ion-toolbar>\n\n<ion-content>\n   <form [hidden]="segment.value!=\'cube\'">\n    <ion-grid>\n      <ion-row>\n          <ion-col col-12 style="padding-top: 1rem">\n            <strong>* Only lateral walls</strong>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-md-8>\n          <div svg="area-cube" padding></div>\n        </ion-col>\n        <ion-col col-12 col-md-4>\n          <ion-row>\n            <ion-col col-12>\n              <ion-item>\n                <ion-label stacked>a (m)</ion-label>\n                <ion-input type="number" tabindex="101" name="cube_a" id="cube_a" [(ngModel)]="width"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12>\n              <ion-item>\n                <ion-label stacked>b (m)</ion-label>\n                <ion-input type="number" tabindex="102" name="cube_deep" [(ngModel)]="deep"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12>\n              <ion-item>\n                <ion-label stacked>h (m)</ion-label>\n                <ion-input type="number" tabindex="103" (keyup.enter)="key_enter()" name="cube_height" [(ngModel)]="height"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  <form  [hidden]="segment.value!=\'rectangle\'">\n    <ion-grid>\n      <ion-col col-12 style="padding-top: 1rem">\n          <strong>&nbsp;</strong>\n      </ion-col>\n    <ion-row>\n      <ion-col col-12 col-md-8>\n        <div svg="area-rectangle" padding></div>\n      </ion-col>\n      <ion-col col-12 col-md-4>\n        <ion-row>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label stacked>a (m)</ion-label>\n              <ion-input type="number" tabindex="106" name="rectangle-a" id="rectangle-a" [(ngModel)]="width"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label stacked>b (m)</ion-label>\n              <ion-input type="number" tabindex="107" name="rectangle-b" id="rectangle-b" (keyup.enter)="key_enter()" [(ngModel)]="height"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n  </form>\n  <form [hidden]="segment.value!=\'cilinder\'">\n    <ion-grid>\n        <ion-col col-12 style="padding-top: 1rem">\n            <strong>* Only lateral walls</strong>\n        </ion-col>\n      <ion-row>\n        <ion-col col-12 col-md-8>\n          <div svg="area-cilinder" padding></div>\n        </ion-col>\n        <ion-col col-12 col-md-4>\n          <ion-row>\n            <ion-col col-12>\n              <ion-item>\n                <ion-label stacked>h (m)</ion-label>\n                <ion-input type="number" tabindex="108" name="cilinder-h" id="cilinder-h" [(ngModel)]="height"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12>\n              <ion-item>\n                <ion-label stacked>r (m)</ion-label>\n                <ion-input type="number" tabindex="109" name="cilinder-radius" (keyup.enter)="key_enter()" [(ngModel)]="radius"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  <form [hidden]="segment.value!=\'circle\'">\n    <ion-grid>\n        <ion-col col-12 style="padding-top: 1rem">\n            <strong>&nbsp;</strong>\n        </ion-col>\n      <ion-row>\n        <ion-col col-12 col-md-8>\n          <div svg="area-circle" padding></div>\n        </ion-col>\n        <ion-col col-12 col-md-4>\n          <ion-row>\n            <ion-col col-12>\n              <ion-item>\n                <ion-label stacked>r (m)</ion-label>\n                <ion-input type="number" tabindex="110" name="circel-r" id="circel-r" (keyup.enter)="key_enter()" [(ngModel)]="radius"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n\n<ion-footer>\n  <ion-grid no-padding>\n    <ion-row no-padding>\n      <ion-col col-6 no-padding>\n        <button (click)="close()" tabindex="200" ion-button small color="light">\n            <ion-icon name="arrow-back"></ion-icon>\n            <span hidden-xs>&nbsp;Back</span>\n          </button>\n      </ion-col>\n      <ion-col col-6 no-padding>\n        <button (click)="calculate()" tabindex="201" id="area_calculate_btn" ion-button small pull-right>\n            <ion-icon visible-xs name="arrow-forward"></ion-icon>\n            <span hidden-xs>Report</span>\n          </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\components\area\report-area-modal.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], ReportAreaModalComponent);
    return ReportAreaModalComponent;
}());

//# sourceMappingURL=report-area-modal.component.js.map

/***/ }),
/* 363 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportLeakagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_reports__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_report_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_messages_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_reports_report_leakage__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services__ = __webpack_require__(14);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReportLeakagePage = /** @class */ (function (_super) {
    __extends(ReportLeakagePage, _super);
    function ReportLeakagePage(navCtrl, navParams, service, alertCtrl, picture, message, keyboard) {
        var _this = _super.call(this, new __WEBPACK_IMPORTED_MODULE_5__models_reports_report_leakage__["a" /* ReportLeakage */](navParams.data.project, navParams.data.component, navParams.data.report), navParams, navCtrl, service, alertCtrl, picture, message, keyboard) || this;
        _this.navCtrl = navCtrl;
        _this.service = service;
        _this.alertCtrl = alertCtrl;
        _this.picture = picture;
        _this.message = message;
        _this.keyboard = keyboard;
        return _this;
    }
    ReportLeakagePage.prototype.calculate = function () {
        this.start_changes_observer();
        if (!this.form.invalid) {
            this.save();
        }
        else {
            this.view = 'form';
        }
        return null;
    };
    ReportLeakagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-report-leakage',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\leakage\report-leakage.component.html"*/'<report-header [parent]="this"></report-header>\n\n\n\n<ion-content #content>\n\n\n\n  <ion-grid [hidden]="view==\'edit_picture\'" class="fixed-col">\n\n    <ion-row>\n\n      <ion-col col-12 col-md-8 no-padding>\n\n        <form novalidate #form="ngForm" [hidden]="segment!=\'input\'" (submit)="calculate()">\n\n          <ion-row>\n\n            <ion-col col-10 col-md-8>\n\n              <ion-item>\n\n                <ion-label stacked>Component/Location</ion-label>\n\n                <ion-input [disabled]="!editable" tabindex="1" (ionFocus)="on_focus($event)" name="location" required\n\n                  data-val-required="Please input Component/Location" [(ngModel)]="report.component.fields.location"\n\n                  type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2></ion-col>\n\n          </ion-row>\n\n          <ion-row [hidden]="true">\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-input type="hidden" name="pictures" required data-val-required="Please take a picture" [(ngModel)]="picture_qty"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-12 col-md-10>\n\n              <ion-item>\n\n                <ion-label stacked>Summary Id</ion-label>\n\n                <ion-input tabindex="2" (ionFocus)="on_focus($event)" name="summary_id" [(ngModel)]="report.summary_id"\n\n                  required data-val-required="Please input summary id" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10 col-md-8>\n\n              <ion-item>\n\n                <ion-label stacked>Operational time (hrs/yrs)</ion-label>\n\n                <ion-input [disabled]="!editable" tabindex="3" (ionFocus)="on_focus($event)" name="operational_time"\n\n                  [(ngModel)]="report.component.fields.operational_time"  type="tel" [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Operational time" ></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <more pull-left *ngIf="editable" #time (change)="report.component.fields.operational_time=time.value"\n\n                [type]="\'time\'" modal-button></more>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-12 col-md-10>\n\n              <ion-item>\n\n                <ion-label stacked>Medium</ion-label>\n\n                <ion-input #after_time [disabled]="!editable" tabindex="4" (ionFocus)="on_focus($event)" (keyup.enter)="on_keypress($event)"\n\n                  name="medium" [(ngModel)]="report.component.fields.medium" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-12 col-md-10>\n\n              <ion-item>\n\n                <ion-label stacked>Medium temperature (<sup>º</sup>C)</ion-label>\n\n                <ion-input [disabled]="!editable" tabindex="5" (ionFocus)="on_focus($event)" name="surface_temp"\n\n                  [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Medium temperature"\n\n                  [(ngModel)]="report.component.fields.surface_temp" type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-12 col-md-10>\n\n              <ion-item>\n\n                <ion-label stacked>Comment</ion-label>\n\n                <ion-textarea rows="6" tabindex="6" (ionFocus)="on_focus($event)" (keyup.enter)="on_keypress($event)"\n\n                  [(ngModel)]="report.comment" name="comment"></ion-textarea>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n        </form>\n\n      </ion-col>\n\n\n\n      <ion-col col-12 col-md-4 no-padding>\n\n        <ion-row>\n\n          <ion-col col-12 picture-slide [parent]="this"   [report]="report"\n\n            [editable]="editable" (onStartEdit)="on_picture_start_edit($event)">\n\n          </ion-col>\n\n        </ion-row>\n\n        <report-errors padding #errors col-12 [hidden]="view==\'!result\' && report.result"></report-errors>\n\n        <div report-result col-12 [parent]="this" *ngIf="view==\'result\' && (!!form && !form.invalid)"></div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <edit-picture *ngIf="view==\'edit_picture\'" [report]="report" [picture]="editing_picture"></edit-picture>\n\n\n\n</ion-content>\n\n\n\n<report-footer [parent]="this" [calculate_text]="\'Report\'"></report-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\leakage\report-leakage.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_report_service__["a" /* ReportService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__services__["e" /* PictureService */],
            __WEBPACK_IMPORTED_MODULE_4__services_messages_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Keyboard */]])
    ], ReportLeakagePage);
    return ReportLeakagePage;
}(__WEBPACK_IMPORTED_MODULE_1__models_reports__["a" /* BaseReportPage */]));

//# sourceMappingURL=report-leakage.component.js.map

/***/ }),
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(424);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_locales_en__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_tooltips__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_init_init__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_download_download__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_projects_projects__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_projects_edit__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_projects_project__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_summary_summary__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_summary_summary_edit__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_camera__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_chooser__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_path__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_file_opener__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_file__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_screen_orientation__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_unique_device_id__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_file_transfer__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_report_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_component_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_file_device_service__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_file_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_file_local_service__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_messages_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_picture_service__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_licences_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__validations__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_svg_svg_insulation_component__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_svg_svg_co2_component__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_svg_svg_custom_component__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_svg_svg_safety_component__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_svg_svg_maintenance_component__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_svg_svg_flange_component__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_svg_svg_hot_surface_component__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_svg_svg_fire_protection_component__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_svg_svg_traffic_component__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_svg_svg_damage_insulation_component__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_svg_svg_damage_cladding_component__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_svg_svg_ice_wet_component__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__components_svg_svg_mechanical_component__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__components_svg_svg_electrical_component__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_svg_svg_leakage_component__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__components_svg_svg_other_safety_component__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__components_svg_svg_cold_component__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__components_svg_svg_pipe_insulation_component__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__components_svg_svg_pipe_component__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__components_svg_svg_valve_component__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__components_svg_svg_surface_component__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__components_svg_svg_damaged_cladding_component__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__components_svg_svg_damaged_insulation_component__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__components_svg_svg_energy_component__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__components_svg_svg_insulated_surface_component__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__components_svg_svg_others_component__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__components_svg_svg_insulated_others_component__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__components_svg_svg_cilinder_area_component__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__components_svg_svg_cube_area_component__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__components_svg_svg_circle_area_component__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__components_svg_svg_housekeeping_component__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__components_svg_svg_structural_component__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__components_svg_svg_rectangle_area_component__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__components_svg_svg_like_component__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__components_svg_svg_increase_component__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__components_svg_svg_empty_component__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__pages_reports__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__pipes_surface_material_pipe__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__progress_kendo_angular_pdf_export__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__components_tools_tools_component__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__ionic_native_flashlight__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__pages_summary_components_header__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__angular_common__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__models_errors_global_error__ = __webpack_require__(719);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object(__WEBPACK_IMPORTED_MODULE_80__angular_common__["i" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_2__angular_common_locales_en__["a" /* default */]);








/*Pages*/










/*Plugins*/










/*Services*/









// import { ReportSafetSurfacePage } from '../pages/reports/safety/surface';
/*Custom Validators */

/*Components*/




































//Reports

//Pipes

//import { GlobalErrorHandler } from '../models/errors/global-error';






//import { GlobalErrorHandler } from '../models/errors/global-error';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_download_download__["a" /* DownloadPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* ProjectReportsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_projects_projects__["a" /* ProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_projects_edit__["a" /* EditProjectPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_projects_project__["a" /* ProjectPage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["a" /* GenericReportPage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["w" /* ReportsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_init_init__["a" /* InitPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_summary_summary__["a" /* SummaryPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_summary_summary_edit__["a" /* SummaryEditPage */],
                __WEBPACK_IMPORTED_MODULE_79__pages_summary_components_header__["a" /* SummaryHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["b" /* KnownTempPage */],
                //Pipes
                __WEBPACK_IMPORTED_MODULE_75__pipes_surface_material_pipe__["a" /* SurfaceMaterialPipe */],
                //Reports
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["g" /* ReportEditPictureComponent */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["q" /* ReportPictureSlideComponent */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["k" /* ReportHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["j" /* ReportFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["c" /* ReportAreaButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["d" /* ReportAreaModalComponent */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["p" /* ReportMoreButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["o" /* ReportMediumTempButtonsComponent */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["u" /* ReportTempMarkersWindowComponent */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["h" /* ReportErrorsComponent */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["s" /* ReportResultComponent */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["t" /* ReportSurfacePage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["m" /* ReportInsulatedSurfacePage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["i" /* ReportFlangePage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["r" /* ReportPipePage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["l" /* ReportInsulatedPipePage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["v" /* ReportValvePage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["f" /* ReportDamagedPage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["e" /* ReportCondensationPage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["n" /* ReportLeakagePage */],
                //Custom Validators
                __WEBPACK_IMPORTED_MODULE_37__validations__["a" /* InsulatedCompareTempValidator */],
                //Components
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["x" /* SurfaceMaterialComponent */],
                __WEBPACK_IMPORTED_MODULE_77__components_tools_tools_component__["a" /* ToolsComponent */],
                __WEBPACK_IMPORTED_MODULE_73__components_svg_svg_empty_component__["a" /* SvgEmptyComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_svg_svg_insulation_component__["a" /* SvgInsulationComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_svg_svg_co2_component__["a" /* SvgCO2Component */],
                __WEBPACK_IMPORTED_MODULE_40__components_svg_svg_custom_component__["a" /* SvgCustomComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_svg_svg_safety_component__["a" /* SvgSafetyComponent */],
                __WEBPACK_IMPORTED_MODULE_42__components_svg_svg_maintenance_component__["a" /* SvgMaintenanceComponent */],
                __WEBPACK_IMPORTED_MODULE_43__components_svg_svg_flange_component__["a" /* SvgFlangeComponent */],
                __WEBPACK_IMPORTED_MODULE_44__components_svg_svg_hot_surface_component__["a" /* SvgHotSurfaceComponent */],
                __WEBPACK_IMPORTED_MODULE_45__components_svg_svg_fire_protection_component__["a" /* SvgFireProtectionComponent */],
                __WEBPACK_IMPORTED_MODULE_46__components_svg_svg_traffic_component__["a" /* SvgTrafficComponent */],
                __WEBPACK_IMPORTED_MODULE_47__components_svg_svg_damage_insulation_component__["a" /* SvgDamageInsulationComponent */],
                __WEBPACK_IMPORTED_MODULE_48__components_svg_svg_damage_cladding_component__["a" /* SvgDamageCladdingComponent */],
                __WEBPACK_IMPORTED_MODULE_50__components_svg_svg_mechanical_component__["a" /* SvgMechanicalComponent */],
                __WEBPACK_IMPORTED_MODULE_51__components_svg_svg_electrical_component__["a" /* SvgElectricalComponent */],
                __WEBPACK_IMPORTED_MODULE_49__components_svg_svg_ice_wet_component__["a" /* SvgIceWetComponent */],
                __WEBPACK_IMPORTED_MODULE_52__components_svg_svg_leakage_component__["a" /* SvgLeakageComponent */],
                __WEBPACK_IMPORTED_MODULE_53__components_svg_svg_other_safety_component__["a" /* SvgOtherSafetyComponent */],
                __WEBPACK_IMPORTED_MODULE_54__components_svg_svg_cold_component__["a" /* SvgColdComponent */],
                __WEBPACK_IMPORTED_MODULE_55__components_svg_svg_pipe_insulation_component__["a" /* SvgPipeInsultationComponent */],
                __WEBPACK_IMPORTED_MODULE_56__components_svg_svg_pipe_component__["a" /* SvgPipeComponent */],
                __WEBPACK_IMPORTED_MODULE_57__components_svg_svg_valve_component__["a" /* SvgValveComponent */],
                __WEBPACK_IMPORTED_MODULE_58__components_svg_svg_surface_component__["a" /* SvgSurfaceComponent */],
                __WEBPACK_IMPORTED_MODULE_59__components_svg_svg_damaged_cladding_component__["a" /* SvgDamagedCladdingComponent */],
                __WEBPACK_IMPORTED_MODULE_60__components_svg_svg_damaged_insulation_component__["a" /* SvgDamagedInsulationComponent */],
                __WEBPACK_IMPORTED_MODULE_61__components_svg_svg_energy_component__["a" /* SvgEnergyComponent */],
                __WEBPACK_IMPORTED_MODULE_62__components_svg_svg_insulated_surface_component__["a" /* SvgInsulatedSurfaceComponent */],
                __WEBPACK_IMPORTED_MODULE_63__components_svg_svg_others_component__["a" /* SvgOthersComponent */],
                __WEBPACK_IMPORTED_MODULE_64__components_svg_svg_insulated_others_component__["a" /* SvgInsulatedOthersComponent */],
                __WEBPACK_IMPORTED_MODULE_65__components_svg_svg_cilinder_area_component__["a" /* SvgCilinderAreaComponent */],
                __WEBPACK_IMPORTED_MODULE_66__components_svg_svg_cube_area_component__["a" /* SvgCubeAreaComponent */],
                __WEBPACK_IMPORTED_MODULE_67__components_svg_svg_circle_area_component__["a" /* SvgCircleAreaComponent */],
                __WEBPACK_IMPORTED_MODULE_70__components_svg_svg_rectangle_area_component__["a" /* SvgRectangleAreaComponent */],
                __WEBPACK_IMPORTED_MODULE_68__components_svg_svg_housekeeping_component__["a" /* SvgHousekeepingComponent */],
                __WEBPACK_IMPORTED_MODULE_69__components_svg_svg_structural_component__["a" /* SvgStructuralComponent */],
                __WEBPACK_IMPORTED_MODULE_71__components_svg_svg_like_component__["a" /* SvgLikeComponent */],
                __WEBPACK_IMPORTED_MODULE_72__components_svg_svg_increase_component__["a" /* SvgIncreaseComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_80__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {
                    iconMode: 'ios',
                    modalEnter: 'modal-slide-in',
                    modalLeave: 'modal-slide-out',
                    tabsPlacement: 'bottom',
                    pageTransition: 'ios-transition',
                    scrollPadding: false,
                    scrollAssist: true,
                    autoFocusAssist: true
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_7_ionic_tooltips__["a" /* TooltipsModule */],
                __WEBPACK_IMPORTED_MODULE_76__progress_kendo_angular_pdf_export__["b" /* PDFExportModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_download_download__["a" /* DownloadPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* ProjectReportsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_projects_projects__["a" /* ProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_projects_edit__["a" /* EditProjectPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_projects_project__["a" /* ProjectPage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["a" /* GenericReportPage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["w" /* ReportsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_init_init__["a" /* InitPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_summary_summary__["a" /* SummaryPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_summary_summary_edit__["a" /* SummaryEditPage */],
                __WEBPACK_IMPORTED_MODULE_79__pages_summary_components_header__["a" /* SummaryHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["b" /* KnownTempPage */],
                //Reports
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["x" /* SurfaceMaterialComponent */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["k" /* ReportHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["j" /* ReportFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["d" /* ReportAreaModalComponent */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["u" /* ReportTempMarkersWindowComponent */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["t" /* ReportSurfacePage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["m" /* ReportInsulatedSurfacePage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["i" /* ReportFlangePage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["r" /* ReportPipePage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["l" /* ReportInsulatedPipePage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["v" /* ReportValvePage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["f" /* ReportDamagedPage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["e" /* ReportCondensationPage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_reports__["n" /* ReportLeakagePage */],
                __WEBPACK_IMPORTED_MODULE_77__components_tools_tools_component__["a" /* ToolsComponent */]
            ],
            providers: [
                /*App services*/
                __WEBPACK_IMPORTED_MODULE_34__services_messages_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_29__services_report_service__["a" /* ReportService */],
                __WEBPACK_IMPORTED_MODULE_28__services__["f" /* ProjectService */],
                __WEBPACK_IMPORTED_MODULE_30__services_component_service__["a" /* ComponentService */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                //PictureLocalService,
                __WEBPACK_IMPORTED_MODULE_31__services_file_device_service__["a" /* FileDeviceService */],
                __WEBPACK_IMPORTED_MODULE_33__services_file_local_service__["a" /* FileLocalService */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_file_transfer__["a" /* FileTransfer */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_81__models_errors_global_error__["a" /* GlobalErrorHandler */], deps: [__WEBPACK_IMPORTED_MODULE_34__services_messages_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]] },
                //{ provide: ErrorHandler, useClass: IonicErrorHandler },
                //Mock services
                //{ provide: PictureService, useClass: PictureDeviceService },
                __WEBPACK_IMPORTED_MODULE_36__services_licences_service__["a" /* LicencesService */],
                __WEBPACK_IMPORTED_MODULE_35__services_picture_service__["a" /* PictureService */],
                __WEBPACK_IMPORTED_MODULE_78__ionic_native_flashlight__["a" /* Flashlight */],
                __WEBPACK_IMPORTED_MODULE_28__services__["c" /* LoadindService */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* LoadingController */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* LOCALE_ID */], useValue: "en-US" },
                { provide: __WEBPACK_IMPORTED_MODULE_32__services_file_service__["a" /* FileService */], useClass: __WEBPACK_IMPORTED_MODULE_31__services_file_device_service__["a" /* FileDeviceService */] }
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ComponentLocation */
var ComponentLocation = /** @class */ (function () {
    function ComponentLocation(component) {
        var _this = this;
        this.component = component;
        this.reports = new Map();
        this.insulated = false;
        ['Insulation', 'Safety', 'Maintenance', 'Custom'].forEach(function (key) {
            _this.reports[key] = _this.component.reports.filter(function (r) { return r.path.startsWith(key); });
        });
        this.name = this.component.fields.location;
        this.section_input = new SectionInput(component);
        this.section_energy = new SectionEnergy(component.reports.find(function (r) { return r.path.startsWith('Insulation'); }));
        this.insulated = !!this.reports['Insulation'].length && this.reports['Insulation'].find(function (r) { return -1 !== r.path.lastIndexOf('\\Insulated'); });
    }
    return ComponentLocation;
}());

var SectionInput = /** @class */ (function () {
    function SectionInput(component) {
        this.fields = component.fields;
        this.dimension = !!this.fields.surface ? this.fields.surface : !!this.fields.length ? this.fields.length : null;
    }
    return SectionInput;
}());
var SectionEnergy = /** @class */ (function () {
    function SectionEnergy(report) {
        this.advises = new Map([
            ['System OK', 'OK'],
            ['Insulation recommended', 'Recommended'],
            ['SAFETY-Insulation recommended', 'SAFETY-Recommended']
        ]);
        this.heat_lost = report.result.headLost;
        this.saving_potential_max = report.result.savingPotentialMax;
        this.saving_potential_min = report.result.savingPotentialMin;
        this.insulated = report.path.startsWith('Insulation\Insulated') ? 'Yes' : 'No';
        this.tbi = this.advises.get(report.result.advise);
    }
    return SectionEnergy;
}());
//# sourceMappingURL=component-location.js.map

/***/ }),
/* 472 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Document; });
var Document = /** @class */ (function () {
    function Document(document) {
        this.folder = '';
        this.file = '';
        this.size = 0;
        if (!!document)
            Object.assign(this, document);
    }
    Object.defineProperty(Document.prototype, "extension", {
        get: function () {
            try {
                return this.file.substr(this.file.lastIndexOf('.') + 1, this.file.length - 1).toLowerCase();
            }
            catch (_a) {
                return 'unknown';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "mime", {
        get: function () {
            switch (this.extension) {
                case 'pdf': return 'application/pdf';
                case 'doc': return 'application/msword';
                case 'docx': return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
                case 'xls': return 'application/vnd.ms-excel';
                case 'xlsx': return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                case 'ppt': return 'application/vnd.ms-powerpoint';
                case 'pps': return 'application/vnd.ms-powerpoint';
                case 'pptx': return 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
                case 'ppsx': return 'application/vnd.openxmlformats-officedocument.presentationml.slideshow';
                case 'jpg': 'image/jpeg';
                case 'bmp': 'image/bmp';
                case 'png': 'image/png';
                case 'txt': return 'text/*';
                default: return 'application/octet-stream';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Document;
}());

//# sourceMappingURL=document.class.js.map

/***/ }),
/* 473 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INSULATION; });
var INSULATION = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAEYAAABGAEgTm+IAAAD3ElEQVRoge2ZsZLbNhCGP9y4P5bpzDJNJqrTiO4zY/kJTnmCKE9g+QmsN4j8BJHLVKaeIHddSrpLkxnmCTYFFgJEUiQAyY5yo38GwxMJYvcHdpe7e0ZEeA64+68VuBRuRK4NNyLXhhfnLmCMKYAFMNORgxrYichjtiIikj2AFdACcqFRA7MsXTIJFMBOhbfABqiC5xWwDZ4vJ9ZaKInJ+ZcmUgc7WIzMmwGPOndSOWAZnHASmRwSGxW0TTg9R2bSbJR8qyPazFJJVKrQ49hJnCDTAk3Me2pqAjzGyjD6InCIQGORZw3MgV+UzBBaGYg+xpgF8BvwTkTWIzLc/C3wALzDmvC4nBP2ee5osc5edHa61udlwimOydkcnYgxZgb8AfyDjUYPyvONLpaCGdY05sBnYOF2zhizBH5NXA9gT/9UVsA98EpEakdkB7w+3DRmBbwHPojIMkNwqPRnLLkyUGYTuYxTtmeOwebvRaRCBfSiENYx29So1lljpWvvSIxE+O/QyegYzJkZFfYeb0aVCl4CPwNvRGQXuYM9GGNqrJnBcZCYYf1gCJW+M2oRYQABy6rFn4xz1h/17/WZp7IkL2DUkesLUL/Af33XSvQD1tm/C3YnGyKyNcY0A48Gw3QG9thDsLuO9YkmZIl+xM45kS89VE8J65GXePvd40/q5QV27UuiBl9Y/alXR6TFhr3/DRyRbzr3L2G7XxWOyF+d++VX1uNsuFL3W726hLG8pBBjTBWsX+g4lZyWDPvl4Qs+hLBmd6mEE+gc/ilW4SFoRv1pZMoTx/lcoyPEnNOowBLZ648aeDDGrLGO/rsukJo0drHQ60d8jrXD1hrV1MtBTtWcmFIA+zusY8/xH8S32Cz4b/1dJ6ndx1KvaxGpVaF74gOKs5LmxPPvgeYOr2gFvMLmLRXwg96vyYT6xhxr307xSq+xRNz8nh6aa4E94UMBUwdfS3cvO/vVNRpsllANZKyTxZXOP6kHPqsuuouvOr+zEkbdRddw2AT3CxJqcXzt3kvl8f2DtYivEN3u3WP9w33VuxElBgXWbqGThmsgeQv8JCLbqYWCEuAjfVNc6bUUkTZkOMPX1OfW6zsCc+qaK3GdlCpCzqFISzWZLYEJJr67SXkXb5pV1PxEZUpymmeJfapgw3bRMjJ21ikVRYbjzmEZMd/V+WlNwFQiKmwZkFlEKDVJmn5jPKkrf9RpTIG2ezbYCPek5hA2Flb45G+sM1liHXsRrFWJSFq0zDmRjs9suUx3siHj3wlnn0iIiJ7xFM5uRFyEyDXg2fwz9Ebk2nAjcm24Ebk2PBsi/wKPyibQO6uoPgAAAABJRU5ErkJggg==";
//# sourceMappingURL=insulation.js.map

/***/ }),
/* 474 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MECHANICAL; });
var MECHANICAL = "data:image/png;base64,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";
//# sourceMappingURL=mechanical.js.map

/***/ }),
/* 475 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SURFACE; });
var SURFACE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAmCAYAAACGeMg8AAAACXBIWXMAAAF7AAABewHg/ioYAAACyUlEQVRYhe2Z3XHTQBDHf8fkHXcQdRB1gKgAd4DowB3gDvADBagDnAqidCDemUHpQHlnZnnQHt6sTx/GhAjG/5kbSXe3e/vf3fuyERGWXoAc2APiSgVkIkLQjotFCGENfNHPW6DR9xx4BzwC+b9ApAWugbf0xm+AFtgBGfAJuH3xtJlIqYI+hWqg1PdGiYgS6YCXN3aCyJanc6JzBDcaGbl6poz4U6j1Weiz1Wdu2rfA4+LniEcIIacn0NET/A7cXoUQikT/TkQaI7wG1vQ5+cb0u6f30l5E9iODr+hzvKD35rU2PUR51dHOJIHaU+n7Do7XZgFqk4utqW9VUSy2rQFyl+Mr+tB3VrcrdtwdsBrZSzotuZIQYBezKm4sBU9XiY2+d2pMNjBAxmFSdsDakGiMA8qRSb02pBpPZoREZfogwNZUWA81QwRmeKz1umfoiAbWI3obT2KKyN55rHIpsfMkTURjKV3UrHwVo+d0xKNIod8xUoWOOZSiSSKtpob1bIxQ7epKZ0gcOOauHVw4nhfes1l0pDowpv4qYby1JUmk4GlItxznbWHaMxe9xpFqooedfGz3zohRiU4oOcxhX6ohIltl/ysvR3K6sN4fWACqEXm7IOTOBjFtk+VoZxeRbQhhA7wGPtj9JNG3DiE8cNh5Izr6Ve9BRMoR+U7HulMdcawa+Ah8Br4NyVsMHVFKNaKaoaMG3ru6gt4RmylhdQb00fH4ISL1DBt4NVB/w2EHnUKbqLNnobnIE3XZXOEjIubIMphSM1AATB05HFIRmY2hiMB5RAC+nil/EsaInIvuGXUfIUUklauLR4rIWbn6UnjO1PqruBBZGi5EloYLkaXhQmRpuBBZGv4bIvGqm5kLVfY7itxvyPHHi1OwMjpOPoFHIu85vnefijv3fX+i/E1Cx2xc0f+llcLcG2JF+m5+SkSGbGjnKvgJ6O/ZEoLzC/sAAAAASUVORK5CYII=";
//# sourceMappingURL=surface.js.map

/***/ }),
/* 476 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CO2; });
var CO2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAmCAYAAACGeMg8AAAACXBIWXMAAAEhAAABIQENv7RXAAAEH0lEQVRYhc2Y23XiSBCGP3zm3c7AbATDRIAcwTARWBvBMO+qs5pTASyOwCIC4wgGIlgUwUIGEIH3oUsgpG5dgGX3P4cHWt1V9XfXrXvw8fHBtSAiEyACRsA4MG0FrIFMVdfX0j24lIiIPABTIAYeey7fAqmqZhcZwYVE7ARm9CdQxRaIVXV5roC7cxeKSAa8cTkJTMYvEZmdK6D3iZgrLYHPDdNym7MGNjY2xMVO1LJ2rqpxL6M4j8i6wZA5zuc3LTKGQAo8h+T0JdOLiLmTT3kOTNoIeOQNgQX+jXlR1WlXWZ2JWGC/eT6d5QoV2Rn+DXrqmgA6BbvFhS8QLyYBYDLmnk9ZVxlds9aUenbKr0GigMnKK8OPItJJR1ciPmGdFPSET2baZWErERGJqJ/G/JrtRQGTWXWxRxEZta1tJGIkfLFxduHqAK8+y3BBeLOW7cAMf+O3VdVGoZdCRDb4O4Z3YOpL87UTEZEp8Bfh7nV5toXdEdLxFVj7EsAJEet1/mxQkOMy2L+NKfUMVuAeeK2SORCxD98Di7fACxCp6u5iM1tgOiLTuQ1Me7UiDViMWCCtcWzL2ON6p2BwWzxt2giKyLBvC1NaG+Ni1mffUFV3BZGMeouwx51ALc0Gmr7aJcmyXsppvOU2b9GTzAhX6at92VxV40GSJEPg7x4kRrhgrO7OiWDbxdcG237vezNs0P3bHYFq2lDwspKgOfDEaRF7thMrSOyBnzbvh/0H5+NRRw7AoWCmnk+TQZIkS06Pfq+qDz5BlQ74Rzl2zPgYd4HacUwcX8qbUtnVd1U9BGxXiMiO01NZfaJeL7IGGYdWoZoALJBTU7S04ffqyarq2mLyOy4zFbWrIDTrED/F+gJjX4tyzR5qExgvMty9iKS42jW231s5rQZQs9FHJKT85FuLfxeGhgwq1pYLbM4xftqK7qY68KllQRULjvl8ISKxqi4sQ8W4HV3hjv4rrnPNcP3RDg63wXFJ3pDjo0SKc5neRdd3IlFoshlT7NY9zg0+cBmqMG5nabVoMZ6BjYgsLUiL2pPj4iE2nROOft8WIzUb76j3NI3+aUZ+4+gGZaw4pvPI/oMjPeaYaXJO250Jx3Q971BfqjbmgyRJZtR7rE6XfouTCOcKy0ABLeZEuCBdlrNSpXDuca67C7VFJu9XZfhlkCTJCNe2l5Grauut7BpoeCfzVv7A/C93touryofPFpS3QGr6y7+XAImMOomVqq6LptF3KuBuZPEtWvcm2HNUhsuEVTyp6vJw1bXC9Idn4h63a9mtCRmB2PT7mtSfqppC5c7e8OJXIOeMHH8mHujx2F17fOhA5v+A2gtnrSDahFCd+K+xB775Xji971qW54e4+0PoznxLbHG2DEOdcafXeMtqIxy5W2IDrLu8av4Dnifw+AreGVUAAAAASUVORK5CYII=";
//# sourceMappingURL=co2.js.map

/***/ }),
/* 477 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INCREASE; });
var INCREASE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAEUAAABFAH7OeD/AAABiklEQVRoge2ay3GDMBBA3ya52x2EDqIOQgkuwdfcXILTgTuIS3EJpIPklqNTgXKATIgHzAqEWRi9Gc1g9EEPFq3GtnjvsYKIHABXfdx57wt1Z++9iQIcAV8rZ8Cp+08t0CIRLGNR4txHxqKEA7ahMuYkavVBMlNJqCYZsgCYlQiVMS0RImNeQiszCwmNzBQSHtgBObAOGMdVfYrGJXtkiU2DRL0UGpmWm/FP5o5xcR31T5RPp4u3jvrVg24+vTlSyqwvzjtg1XPMd8pwqlPc5GVvCJUTf2GxV7Svh1He1Gbs0LoZScQaScQaScQa0RKiiDjKLYmGLNZ1f4kiUkmc6J+tBxMrtDZMKAERQ6vGJ+Ue6xpb4DHmRccQ+fDe7681EJGcyCKLWbWSiDUWI9L6sle54aAcJ4symwE0iohIxsQJLpS20MqYkQTo88hrR30OPA+byjBUIooEt2dikcWsWknEGknEGknEGknEGosRgfJHl8v/f8ypnAEn1cGsdroNfN8DX+i/IbTKyw8XIJrMHtlZUgAAAABJRU5ErkJggg==";
//# sourceMappingURL=increase.js.map

/***/ }),
/* 478 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LIKE; });
var LIKE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA0CAYAAADIZmusAAAACXBIWXMAAAEcAAABHAHfs+iaAAADK0lEQVRogdVa/5WbMAz+dO/+v2xQNigbhE5QOkHpBhkhG5QR6Aa5DZwNyAbcBmQC9Q/Enewz5Ac2F+s9vxhbtvwhW5YUwMyIXQBUADoALKUFUAWVsQKInQLgFgNgE0IOibBoREQtgO8zLEdmLpbKeVo6wRWkQfwA8AvAUbVtiahaKmQNIBYx80E0oMFUS+ddHYiiWtW3SyeLCoSIsplu4/BulsiKrZFK1c/MbMYHZu4d3nyJoDWBNLrD1ZYGeQ9FAyKW6Jtqqh2WLKS8mBqpVP3IzJ3TX6j6aamwKECIqIBtiRoPW6nqZrHQSG6JwYcb0nn6M9iuSvlwvpZnkZ+cQ9j+Vx9CboytpQ/1GcDBw1OougkhNCgQORs/VVPtuS8AG4gP6O0U82zA46JjuPj01sseamsRUQnbUu0ntJGp+tljlu+i5xCTiJ/UqKYTMzd+bssVaWV8Lu2Z/E75XQaA8XoBgbbUAfZ2KWZ494qvhz9yvFQ6ONYwBAg3lK0v8Bd3Lt5XmnHeRaEuEe0A/FVNJ9GG72zocb7w94ThTbfybFTfuN1Kz7g/zNws0UQF++30APIbxm8waGdyG06MywWs5TncC8I1oTeBCLCdC0d+/m61JD4oMW0xIAs2+Hx7F8zcekdEIGY2RKSbNj5LcmvZraUJpZHMWUMOzCfQLprBtUF4XnzPzHgWIJpe8WE5XNoBeFHPYfyk26lT9ZcxbPba5ZlDri+x2Tsj8tbS62gsIHeo1XwFEFmHdSS+MkG3lBr9kDIQHfMnDWSv6uckgXhyZockgcAJzgDsUwWiqWXmLlUgRtW3QKKHnT2hbpJAJNFhUZJAYPuHJyBBIETUwE471UBiQGRL/VZN72mnpIDAzom9QaVeUwOiqWOVrUkNiM4nWCmnZIBIWrZSTUb3PznM1/xFrHlmE3GhSEJZgwth9tX5KQzBjOY3GNzpHSTZhkBf+4i80iPTG2KTLEbb5ZB0xnQiY6Re8WRSNpj+ougfM1e+Djeh8Kilx0wOjZh5PBs1rtPMK4b9mclzIb8Z7GAnFB1FXsMzyfEoH57Ji3FTr3N/4LjUYbgnzLUy/wMp4FcI5mJV0AAAAABJRU5ErkJggg==";
//# sourceMappingURL=like.js.map

/***/ }),
/* 479 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOGO; });
var LOGO = "data:image/png;base64,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";
//# sourceMappingURL=logo.js.map

/***/ }),
/* 480 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TBI; });
var TBI = "data:image/png;base64,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";
//# sourceMappingURL=tbi.js.map

/***/ }),
/* 481 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ReportCategory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums__ = __webpack_require__(482);

var ReportCategory = /** @class */ (function () {
    function ReportCategory(item) {
        this.id = 0;
        this.name = '';
        this.categories = null;
        this.reports = null;
        this.type = __WEBPACK_IMPORTED_MODULE_0__enums__["a" /* ReportCategories */].OTHERS;
        if (!!item) {
            Object.assign(this, item);
        }
    }
    return ReportCategory;
}());

//# sourceMappingURL=report-category.js.map

/***/ }),
/* 482 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_categories_enum__ = __webpack_require__(483);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__report_categories_enum__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),
/* 483 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportCategories; });
var ReportCategories;
(function (ReportCategories) {
    ReportCategories[ReportCategories["OTHERS"] = 0] = "OTHERS";
    ReportCategories[ReportCategories["INSULATION"] = 1] = "INSULATION";
    ReportCategories[ReportCategories["SAFETY"] = 2] = "SAFETY";
    ReportCategories[ReportCategories["MANTENANCE"] = 3] = "MANTENANCE";
    ReportCategories[ReportCategories["ENERGY_AND_SAVINGS"] = 4] = "ENERGY_AND_SAVINGS";
    ReportCategories[ReportCategories["ENERGY"] = 5] = "ENERGY";
    ReportCategories[ReportCategories["HOT_SURFACE"] = 6] = "HOT_SURFACE";
})(ReportCategories || (ReportCategories = {}));
//# sourceMappingURL=report-categories.enum.js.map

/***/ }),
/* 484 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectJson; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__project__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_json__ = __webpack_require__(485);


var ProjectJson = /** @class */ (function () {
    function ProjectJson(project) {
        this.id = '';
        this.name = '';
        this.desc = '';
        this.date = new Date();
        this.user = '';
        this.picture = '';
        this.documents = [];
        this.components = [];
        this.price = null;
        this.price_delta = 1;
        this.people = new __WEBPACK_IMPORTED_MODULE_0__project__["a" /* People */]();
        this.currency = "€";
        this.currency_index = 1;
        this.co2_index = 0;
        this.id = project.id;
        this.name = project.name;
        this.desc = project.desc;
        this.date = project.date;
        this.user = project.user;
        this.price = project.price;
        this.currency = project.currency || "€";
        this.price_delta = project.price_delta;
        this.picture = project.picture;
        this.components = project.components.map(function (c) { return new __WEBPACK_IMPORTED_MODULE_1__component_json__["a" /* TbiComponentJson */](c); });
        this.documents = project.documents || [];
        this.people = new __WEBPACK_IMPORTED_MODULE_0__project__["a" /* People */](project.people);
        this.co2 = project.co2;
        this.currency_index = project.currency_index || 1;
        this.co2_index = project.co2_index || 0;
    }
    ProjectJson.prototype.flatten = function (arr) {
        return [].concat.apply([], arr);
    };
    ProjectJson.prototype.get_reports_by_type = function (type) {
        var reports = this.components.map(function (c) { return c.reports.filter(function (r) { return !!r.path.match(new RegExp(type, 'gi')); }); });
        return this.flatten(reports);
    };
    return ProjectJson;
}());

//# sourceMappingURL=project.json.js.map

/***/ }),
/* 485 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TbiComponentJson; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fields__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__report_base_json__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__marker__ = __webpack_require__(77);



var TbiComponentJson = /** @class */ (function () {
    function TbiComponentJson(item) {
        this.id = '';
        this.reports = [];
        this.fields = new __WEBPACK_IMPORTED_MODULE_0__fields__["a" /* Fields */]();
        this.validation = '';
        this.id = item.id;
        this.reports = (item.reports || []).map(function (r) { return new __WEBPACK_IMPORTED_MODULE_1__report_base_json__["a" /* ReportBaseJson */](r); });
        this.fields = new __WEBPACK_IMPORTED_MODULE_0__fields__["a" /* Fields */](item.fields);
        this.markers = (item.markers || []).map(function (m) { return new __WEBPACK_IMPORTED_MODULE_2__marker__["a" /* Marker */](m); });
        this.date = item.date || new Date();
        this.validation = item.validation;
    }
    return TbiComponentJson;
}());

//# sourceMappingURL=component.json.js.map

/***/ }),
/* 486 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportBaseJson; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__result__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__picture__ = __webpack_require__(102);


var ReportBaseJson = /** @class */ (function () {
    function ReportBaseJson(item) {
        this.id = '';
        this.name = '';
        this.path = '';
        this.result = null;
        this.pictures = [];
        this.insulated = false;
        this.summary_id = '';
        this.readonly_summary_id = '';
        this.comment = '';
        this.id = item.id;
        this.name = item.name;
        this.path = item.path;
        this.summary_id = item.summary_id;
        this.comment = item.comment;
        this.readonly_summary_id = item.readonly_summary_id || item.summary_id;
        this.insulated = !!item.insulated;
        this.result = new __WEBPACK_IMPORTED_MODULE_0__result__["a" /* Result */](item.result);
        this.pictures = (item.pictures || []).map(function (p) { return new __WEBPACK_IMPORTED_MODULE_1__picture__["a" /* Picture */](p); });
    }
    return ReportBaseJson;
}());

//# sourceMappingURL=report-base.json.js.map

/***/ }),
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IPipeDecorator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_calculator_class__ = __webpack_require__(64);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var IPipeDecorator = /** @class */ (function () {
    function IPipeDecorator() {
    }
    IPipeDecorator.prototype.calculate = function (report) {
        return new IPipeCalculator(report).execute();
    };
    return IPipeDecorator;
}());

var IPipeCalculator = /** @class */ (function (_super) {
    __extends(IPipeCalculator, _super);
    function IPipeCalculator(report) {
        var _this = this;
        var r45 = report.component.fields.surface_temp < report.component.fields.ambient_temp ? .8 : 1;
        var r46 = report.component.fields.surface_temp < report.component.fields.ambient_temp ? .8 : 1;
        _this = _super.call(this, report, [
            // /*02*/() => this.hcv = 1.74 * Math.pow(this.Δθ, 1 / 3),
            // /*04*/() => this.q = this.hse * this.Δθ,
            function () { _this.θse_min = 55; _this.θse_max = 35; _this.θa_min = 35; _this.θa_max = 1; },
            /**00*/ function () { return _this.Δθ = Math.abs(_this.θse - _this.θa); },
            /*01*/ function () { return _this.hr = _this.ε * _this.δ * (Math.pow(_this.θse + 273, 4) - Math.pow(_this.θa + 273, 4)) / ((_this.θse + 273) - (_this.θa + 273)); },
            /*01min*/ function () { return _this.hr_min = _this.ε_default * _this.δ * (Math.pow(_this.θse_min + 273, 4) - Math.pow(_this.θa_min + 273, 4)) / ((_this.θse_min + 273) - (_this.θa_min + 273)); },
            /**07*/ function () { return _this.θm_min = (_this.θse + _this.θa + 35) / 2; },
            /**08*/ function () { return _this.θm_max = (_this.θse + _this.θa + 20) / 2; },
            /**09*/ function () { return _this.λm_min = _this.a + _this.b * _this.θm_min + _this.c * Math.pow(_this.θm_min, 2) + _this.d * Math.pow(_this.θm_min, 3); },
            /**10*/ function () { return _this.λm_max = _this.a + _this.b * _this.θm_max + _this.c * Math.pow(_this.θm_max, 2) + _this.d * Math.pow(_this.θm_max, 3); },
            /**11*/ function () { return _this.λdes_min = _this.λm_min * _this.Ft; },
            /**12*/ function () { return _this.λdes_max = _this.λm_max * _this.Ft; },
            /**13*/ function () { return _this.e_min = _this.get_l(0); },
            /**14*/ function () { return _this.e_max = _this.get_l(1); },
            /*36*/ function () { return _this.De_min = _this.De; },
            /*37*/ function () { return _this.De_max = _this.De; },
            /*32*/ function () { return _this.lort = Math.pow(_this.De, 3) * _this.Δθ; },
            /*32min*/ function () { return _this.lort_min = Math.pow(_this.De, 3) * Math.abs(_this.θse_min - _this.θa_min); },
            /*33*/ function () { return _this.hcv_laminar = 1.25 * Math.pow(_this.Δθ / _this.De, 0.25); },
            /*33min*/ function () { return _this.hcv_laminar_min = 1.25 * Math.pow(Math.abs(_this.θse_min - _this.θa_min) / _this.De_min, 0.25); },
            ///**33min*/() => this.hcv_laminar_max = 1.25 * Math.pow(Math.abs(this.θse_max - this.θa_max) / this.De_max, 0.25),
            /**34*/ function () { return _this.hcv_turbulent = 1.21 * Math.pow(_this.Δθ, 0.33); },
            /**34min*/ function () { return _this.hcv_turbulent_min = 1.21 * Math.pow(Math.abs(_this.θse_min - _this.θa_min), 0.33); },
            /**35*/ function () { return _this.hse = _this.hr + (_this.lort < 10 ? _this.hcv_laminar : _this.hcv_turbulent); },
            /**35min*/ function () { return _this.hse_min = _this.hr_min + (_this.lort < 10 ? _this.hcv_laminar_min : _this.hcv_turbulent); },
            /**35max*/ function () { return _this.hse_max = _this.hr + (_this.lort < 10 ? _this.hcv_laminar_max : _this.hcv_turbulent); },
            /**42*/ function () { return _this.Rle = 1 / (_this.hse * Math.PI * _this.De); },
            /**42min*/ function () { return _this.Rle_min = 1 / (_this.hse_min * Math.PI * _this.De_min); },
            /**42max*/ function () { return _this.Rle_max = 1 / (_this.hse_max * Math.PI * _this.De_max); },
            ///*41*/() => this.qref_pb = this.q - ((10000 * this.Cpb_surface_pipe) / this.Ot / this.Σ),
            /**43*/ function () { return _this.ql = _this.Δθ / _this.Rle; },
            /**38*/ function () { return _this.Rins_min = (Math.log(_this.De_min / _this.De)) / (2 * Math.PI * _this.λdes_min); },
            /**39*/ function () { return _this.Rins_max = (Math.log(_this.De_max / _this.De)) / (2 * Math.PI * _this.λdes_max); },
            /**45*/ function () { return _this.ql_min = (_this.θse < _this.θa) ? _this.ql * .7 : (Math.abs(_this.θse_min - _this.θa_min)) / (_this.Rle_min + _this.Rins_min); },
            /**46*/ function () { return _this.ql_max = (_this.θse < _this.θa) ? _this.ql * .45 : _this.ql_min * .85; },
            //*47*/() => this.Qkwh = this.ql * this.l * this.Ot * this.l * 1 / 1000,
            /**40*/ function () { return _this.Sp = Math.PI * _this.De_min; },
            /**44*/ function () { return _this.Qkwh = _this.ql * _this.l * _this.Ot * 1 / 1000; },
            /**44min*/ function () { return _this.Qkwh_min = _this.ql_min * _this.l * _this.Ot * 1 / 1000; },
            /**44max*/ function () { return _this.Qkwh_max = _this.ql_max * _this.l * _this.Ot * 1 / 1000; },
            /*48*/ function () { return _this.ql_ref_pb = _this.ql - ((10000 * _this.Cpb_surface_pipe * _this.Sp) / (_this.Ot * _this.Σ)); },
            /*06*/ function () { return _this.Qε = _this.Qkwh * _this.Σ; },
            /*24*/ function () { return _this.Qε_min = _this.Qkwh_min * _this.Σ; },
            /*25*/ function () { return _this.Qε_max = _this.Qkwh_max * _this.Σ; },
            /*26*/ function () { return _this.Savingkwh_min = _this.Qkwh - _this.Qkwh_min; },
            /*27*/ function () { return _this.Savingkwh_max = _this.Qkwh - _this.Qkwh_max; },
            /*28*/ function () { return _this.Savingε_min = _this.Qε - _this.Qε_min; },
            /*29*/ function () { return _this.Savingε_max = _this.Qε - _this.Qε_max; },
            /*30*/ function () { return _this.Insulation_advice = _this.ql_ref_pb > _this.ql_min ? 'Savings can be achieved by increasing the insulant performance or thickness' : 'System OK'; },
        ]) || this;
        return _this;
    }
    return IPipeCalculator;
}(__WEBPACK_IMPORTED_MODULE_0__base_calculator_class__["a" /* BaseCalculator */]));
//# sourceMappingURL=ipipe.class.js.map

/***/ }),
/* 495 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ISurfaceDecorator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_calculator_class__ = __webpack_require__(64);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ISurfaceDecorator = /** @class */ (function () {
    function ISurfaceDecorator() {
    }
    ISurfaceDecorator.prototype.calculate = function (report) {
        return new ISurfaceCalculator(report).execute();
    };
    return ISurfaceDecorator;
}());

var ISurfaceCalculator = /** @class */ (function (_super) {
    __extends(ISurfaceCalculator, _super);
    function ISurfaceCalculator(report) {
        var _this = _super.call(this, report, [
            function () { _this.θse_min = 55; _this.θse_max = 35; _this.θa_min = 35; _this.θa_max = 1; },
            /*00*/ function () { return _this.Δθ = Math.abs(_this.θse - _this.θa); },
            /*01*/ function () { return _this.hr = _this.ε * _this.δ * (Math.pow(_this.θse + 273, 4) - Math.pow(_this.θa + 273, 4)) / ((_this.θse + 273) - (_this.θa + 273)); },
            /*01min*/ function () { return _this.hr_min = .8 * _this.δ * (Math.pow(_this.θse_min + 273, 4) - Math.pow(_this.θa_min + 273, 4)) / ((_this.θse_min + 273) - (_this.θa_min + 273)); },
            /*02*/ function () { return _this.hcv = 1.74 * Math.pow(_this.Δθ, 1 / 3); },
            /*02min*/ function () { return _this.hcv_min = 1.74 * Math.pow(Math.abs(_this.θse_min - _this.θa_min), 1 / 3); },
            /*03*/ function () { return _this.hse = _this.hr + _this.hcv; },
            /*03min*/ function () { return _this.hse_min = _this.hr_min + _this.hcv_min; },
            /*04*/ function () { return _this.q = _this.hse * _this.Δθ; },
            /*05*/ function () { return _this.Qkwh = _this.q * _this.S * _this.Ot * 1 / 1000; },
            /*06*/ function () { return _this.Qε = _this.Qkwh * _this.Σ; },
            /*07*/ function () { return _this.θm_min = (_this.θse_min + (_this.θa + 35)) / 2; },
            /*08*/ function () { return _this.θm_max = (_this.θse_max + (_this.θa + 20)) / 2; },
            /*09*/ function () { return _this.λm_min = _this.a + _this.b * _this.θm_min + _this.c * Math.pow(_this.θm_min, 2) + _this.d * Math.pow(_this.θm_min, 3); },
            /*10*/ function () { return _this.λm_max = _this.a + _this.b * _this.θm_max + _this.c * Math.pow(_this.θm_max, 2) + _this.d * Math.pow(_this.θm_max, 3); },
            /*11*/ function () { return _this.λdes_min = _this.λm_min * _this.Ft; },
            /*12*/ function () { return _this.λdes_max = _this.λm_max * _this.Ft; },
            /*13*/ function () { return _this.e_min = _this.get_l(0); },
            /*14*/ function () { return _this.e_max = _this.get_l(1); },
            /*15*/ function () { return _this.Rse_min = 1 / _this.hse; },
            /*16*/ function () { return _this.Rse_max = 1 / _this.hse; },
            /*17*/ function () { return _this.Rins_min = _this.e_min / _this.λdes_min; },
            /*18*/ function () { return _this.Rins_max = _this.e_max / _this.λdes_max; },
            /*19*/ function () { return _this.qref_pb = _this.q - ((10000 * _this.Cpb_surface_pipe) / _this.Ot / _this.Σ); },
            /*20*/ function () { return _this.q_min = (_this.θse < _this.θa) ? _this.q * .7 : _this.hse_min * Math.abs(_this.θse_min - _this.θa_min); },
            /*21*/ function () { return _this.q_max = (_this.θse < _this.θa) ? _this.q * .45 : 90; },
            /*22*/ function () { return _this.Qkwh_min = _this.q_min * _this.S * _this.Ot * 1 / 1000; },
            /*23*/ function () { return _this.Qkwh_max = _this.q_max * _this.S * _this.Ot * 1 / 1000; },
            /*24*/ function () { return _this.Qε_min = _this.Qkwh_min * _this.Σ; },
            /*25*/ function () { return _this.Qε_max = _this.Qkwh_max * _this.Σ; },
            /*26*/ function () { return _this.Savingkwh_min = _this.Qkwh - _this.Qkwh_min; },
            /*27*/ function () { return _this.Savingkwh_max = _this.Qkwh - _this.Qkwh_max; },
            /*28*/ function () { return _this.Savingε_min = _this.Qε - _this.Qε_min; },
            /*29*/ function () { return _this.Savingε_max = _this.Qε - _this.Qε_max; },
            /*30*/ function () { return _this.Insulation_advice = _this.qref_pb > _this.q_min ? 'Savings can be achieved by increasing insulation performance or thickness' : 'System OK'; }
        ]) || this;
        return _this;
    }
    return ISurfaceCalculator;
}(__WEBPACK_IMPORTED_MODULE_0__base_calculator_class__["a" /* BaseCalculator */]));
//# sourceMappingURL=isurface.class.js.map

/***/ }),
/* 496 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValveDecorator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_calculator_class__ = __webpack_require__(64);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ValveDecorator = /** @class */ (function () {
    function ValveDecorator() {
    }
    ValveDecorator.prototype.calculate = function (report) {
        return new ValveCalculator(report).execute();
    };
    return ValveDecorator;
}());

var ValveCalculator = /** @class */ (function (_super) {
    __extends(ValveCalculator, _super);
    function ValveCalculator(report) {
        var _this = _super.call(this, report, [
            // /*02*/() => this.hcv = 1.74 * Math.pow(this.Δθ, 1 / 3),
            // /*04*/() => this.q = this.hse * this.Δθ,
            /*00*/ function () { return _this.Δθ = Math.abs(_this.θse - _this.θa); },
            /*01*/ function () { return _this.hr = _this.ε * _this.δ * (Math.pow(_this.θse + 273, 4) - Math.pow(_this.θa + 273, 4)) / ((_this.θse + 273) - (_this.θa + 273)); },
            /*07*/ function () { return _this.θm_min = (_this.θse + _this.θa + 35) / 2; },
            /*08*/ function () { return _this.θm_max = (_this.θse + _this.θa + 20) / 2; },
            /*09*/ function () { return _this.λm_min = _this.a + _this.b * _this.θm_min + _this.c * Math.pow(_this.θm_min, 2) + _this.d * Math.pow(_this.θm_min, 3); },
            /*10*/ function () { return _this.λm_max = _this.a + _this.b * _this.θm_max + _this.c * Math.pow(_this.θm_max, 2) + _this.d * Math.pow(_this.θm_max, 3); },
            /*11*/ function () { return _this.λdes_min = _this.λm_min * _this.Ft; },
            /*12*/ function () { return _this.λdes_max = _this.λm_max * _this.Ft; },
            /*13*/ function () { return _this.e_min = _this.get_l(0); },
            /*14*/ function () { return _this.e_max = _this.get_l(1); },
            /*36*/ function () { return _this.De_min = _this.De + 2 * _this.e_min; },
            /*37*/ function () { return _this.De_max = _this.De + 2 * _this.e_max; },
            /**32*/ function () { return _this.lort = Math.pow(_this.De, 3) * _this.Δθ; },
            /**32min*/ function () { return _this.lort_min = Math.pow(_this.De_min, 3) * _this.Δθ; },
            /**32max*/ function () { return _this.lort_max = Math.pow(_this.De_max, 3) * _this.Δθ; },
            /**33*/ function () { return _this.hcv_laminar = 1.25 * Math.pow(_this.Δθ / _this.De, 0.25); },
            /**33min*/ function () { return _this.hcv_laminar_min = 1.25 * Math.pow(_this.Δθ / _this.De_min, 0.25); },
            /**33max*/ function () { return _this.hcv_laminar_max = 1.25 * Math.pow(_this.Δθ / _this.De_max, 0.25); },
            /**34*/ function () { return _this.hcv_turbulent = 1.21 * Math.pow(_this.Δθ, 0.33); },
            /**35*/ function () { return _this.hse = _this.hr + (_this.lort < 10 ? _this.hcv_laminar : _this.hcv_turbulent); },
            /**35min*/ function () { return _this.hse_min = _this.hr + (_this.lort_min < 10 ? _this.hcv_laminar_min : _this.hcv_turbulent); },
            /**35max*/ function () { return _this.hse_max = _this.hr + (_this.lort_max < 10 ? _this.hcv_laminar_max : _this.hcv_turbulent); },
            /**42*/ function () { return _this.Rle = 1 / (_this.hse * Math.PI * _this.De); },
            /**43*/ function () { return _this.ql = _this.Δθ / _this.Rle; },
            /**42min*/ function () { return _this.Rle_min = 1 / (_this.hse_min * Math.PI * _this.De_min); },
            /**42max*/ function () { return _this.Rle_max = 1 / (_this.hse_max * Math.PI * _this.De_max); },
            /**38*/ function () { return _this.Rins_min = (Math.log(_this.De_min / _this.De)) / (2 * Math.PI * _this.λdes_min); },
            /**39*/ function () { return _this.Rins_max = (Math.log(_this.De_max / _this.De)) / (2 * Math.PI * _this.λdes_max); },
            /**45*/ function () { return _this.ql_min = _this.Δθ / (_this.Rle_min + _this.Rins_min); },
            /**46*/ function () { return _this.ql_max = _this.Δθ / (_this.Rle_max + _this.Rins_max); },
            //*47*/() => this.Qkwh = this.ql * this.l * this.Ot * this.l * 1 / 1000,
            ///*41*/() => this.qref_pb = this.q - ((10000 * this.Cpb_surface_pipe) / this.Ot / this.Σ),
            /*40*/ function () { return _this.Sp = Math.PI * _this.De_min; },
            /*44*/ function () { return _this.Qkwh = (_this.ql * _this.l * _this.n * _this.Ot * 1 / 1000) * (!Number(report.component.fields.unknow_surface_temp) ? 1 : Number(report.component.fields.unknow_surface_temp)); },
            /*44min*/ function () { return _this.Qkwh_min = _this.ql_min * _this.l * _this.n * _this.Ot / 1000; },
            /*44max*/ function () { return _this.Qkwh_max = _this.ql_max * _this.l * _this.n * _this.Ot / 1000; },
            /*48*/ function () { return _this.ql_ref_pb = _this.ql - ((10000 * _this.Cpb_surface_pipe * _this.Sp) / (_this.Ot * _this.Σ)); },
            /*06*/ function () { return _this.Qε = _this.Qkwh * _this.Σ; },
            /*24*/ function () { return _this.Qε_min = _this.Qkwh_min * _this.Σ; },
            /*25*/ function () { return _this.Qε_max = _this.Qkwh_max * _this.Σ; },
            /*26*/ function () { return _this.Savingkwh_min = _this.Qkwh - _this.Qkwh_min; },
            /*27*/ function () { return _this.Savingkwh_max = _this.Qkwh - _this.Qkwh_max; },
            /*28*/ function () { return _this.Savingε_min = _this.Qε - _this.Qε_min; },
            /*29*/ function () { return _this.Savingε_max = _this.Qε - _this.Qε_max; },
            /*30*/ function () { return _this.Insulation_advice = _this.ql_ref_pb > _this.ql_min ? 'SAFETY-Insulation recommended' : 'System OK'; },
        ]) || this;
        return _this;
    }
    return ValveCalculator;
}(__WEBPACK_IMPORTED_MODULE_0__base_calculator_class__["a" /* BaseCalculator */]));
//# sourceMappingURL=valve.class.js.map

/***/ }),
/* 497 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipeDecorator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_calculator_class__ = __webpack_require__(64);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PipeDecorator = /** @class */ (function () {
    function PipeDecorator() {
    }
    PipeDecorator.prototype.calculate = function (report) {
        return new PipeCalculator(report).execute();
    };
    return PipeDecorator;
}());

var PipeCalculator = /** @class */ (function (_super) {
    __extends(PipeCalculator, _super);
    function PipeCalculator(report) {
        var _this = _super.call(this, report, [
            // /*02*/() => this.hcv = 1.74 * Math.pow(this.Δθ, 1 / 3),
            // /*04*/() => this.q = this.hse * this.Δθ,
            /**00*/ function () { return _this.Δθ = Math.abs(_this.θse - _this.θa); },
            /**01*/ function () { return _this.hr = _this.ε * _this.δ * (Math.pow(_this.θse + 273, 4) - Math.pow(_this.θa + 273, 4)) / ((_this.θse + 273) - (_this.θa + 273)); },
            /**07*/ function () { return _this.θm_min = (_this.θse + _this.θa + 35) / 2; },
            /**08*/ function () { return _this.θm_max = (_this.θse + _this.θa + 20) / 2; },
            /**09*/ function () { return _this.λm_min = _this.a + _this.b * _this.θm_min + _this.c * Math.pow(_this.θm_min, 2) + _this.d * Math.pow(_this.θm_min, 3); },
            /**10*/ function () { return _this.λm_max = _this.a + _this.b * _this.θm_max + _this.c * Math.pow(_this.θm_max, 2) + _this.d * Math.pow(_this.θm_max, 3); },
            /**11*/ function () { return _this.λdes_min = _this.λm_min * _this.Ft; },
            /**12*/ function () { return _this.λdes_max = _this.λm_max * _this.Ft; },
            /**13*/ function () { return _this.e_min = _this.get_l(0); },
            /**14*/ function () { return _this.e_max = _this.get_l(1); },
            /**32*/ function () { return _this.lort = Math.pow(_this.De, 3) * _this.Δθ; },
            /**36*/ function () { return _this.De_min = _this.De + 2 * _this.e_min; },
            /**37*/ function () { return _this.De_max = _this.De + 2 * _this.e_max; },
            /**33*/ function () { return _this.hcv_laminar = 1.25 * Math.pow(_this.Δθ / _this.De, 0.25); },
            /**33min*/ function () { return _this.hcv_laminar_min = 1.25 * Math.pow(_this.Δθ / _this.De_min, 0.25); },
            /**34min*/ function () { return _this.hcv_laminar_max = 1.25 * Math.pow(_this.Δθ / _this.De_max, 0.25); },
            /**34*/ function () { return _this.hcv_turbulent = 1.21 * Math.pow(_this.Δθ, 0.33); },
            /**35*/ function () { return _this.hse = _this.hr + (_this.lort < 10 ? _this.hcv_laminar : _this.hcv_turbulent); },
            /**35min*/ function () { return _this.hse_min = _this.hr + (_this.lort < 10 ? _this.hcv_laminar_min : _this.hcv_turbulent); },
            /**35max*/ function () { return _this.hse_max = _this.hr + (_this.lort < 10 ? _this.hcv_laminar_max : _this.hcv_turbulent); },
            /**42*/ function () { return _this.Rle = 1 / (_this.hse * Math.PI * _this.De); },
            /**43*/ function () { return _this.ql = _this.Δθ / _this.Rle; },
            ///*41*/() => this.qref_pb = this.q - ((10000 * this.Cpb_surface_pipe) / this.Ot / this.Σ),
            /**42min*/ function () { return _this.Rle_min = 1 / (_this.hse_min * Math.PI * _this.De_min); },
            /**42max*/ function () { return _this.Rle_max = 1 / (_this.hse_max * Math.PI * _this.De_max); },
            /**38*/ function () { return _this.Rins_min = (Math.log(_this.De_min / _this.De)) / (2 * Math.PI * _this.λdes_min); },
            /**39*/ function () { return _this.Rins_max = (Math.log(_this.De_max / _this.De)) / (2 * Math.PI * _this.λdes_max); },
            /**45*/ function () { return _this.ql_min = _this.Δθ / (_this.Rle_min + _this.Rins_min); },
            /**46*/ function () { return _this.ql_max = _this.Δθ / (_this.Rle_max + _this.Rins_max); },
            //*47*/() => this.Qkwh = this.ql * this.l * this.Ot * this.l * 1 / 1000,
            /**40*/ function () { return _this.Sp = Math.PI * _this.De_min; },
            /**44*/ function () { return _this.Qkwh = (_this.ql * _this.l * _this.Ot / 1000) * (!Number(report.component.fields.unknow_surface_temp) ? 1 : Number(report.component.fields.unknow_surface_temp)); },
            /**44min*/ function () { return _this.Qkwh_min = _this.ql_min * _this.l * _this.Ot * 1 / 1000; },
            /**44max*/ function () { return _this.Qkwh_max = _this.ql_max * _this.l * _this.Ot * 1 / 1000; },
            /*48*/ function () { return _this.ql_ref_pb = _this.ql - ((10000 * _this.Cpb_surface_pipe * _this.Sp) / (_this.Ot * _this.Σ)); },
            /*06*/ function () { return _this.Qε = _this.Qkwh * _this.Σ; },
            /*24*/ function () { return _this.Qε_min = _this.Qkwh_min * _this.Σ; },
            /*25*/ function () { return _this.Qε_max = _this.Qkwh_max * _this.Σ; },
            /*26*/ function () { return _this.Savingkwh_min = _this.Qkwh - _this.Qkwh_min; },
            /*27*/ function () { return _this.Savingkwh_max = _this.Qkwh - _this.Qkwh_max; },
            /*28*/ function () { return _this.Savingε_min = _this.Qε - _this.Qε_min; },
            /*29*/ function () { return _this.Savingε_max = _this.Qε - _this.Qε_max; },
            /*30*/ function () { return _this.Insulation_advice = _this.ql_ref_pb > _this.ql_min ? 'Insulation recommended' : 'System OK'; },
        ]) || this;
        return _this;
    }
    return PipeCalculator;
}(__WEBPACK_IMPORTED_MODULE_0__base_calculator_class__["a" /* BaseCalculator */]));
//# sourceMappingURL=pipe.class.js.map

/***/ }),
/* 498 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlangeDecorator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_calculator_class__ = __webpack_require__(64);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FlangeDecorator = /** @class */ (function () {
    function FlangeDecorator() {
    }
    FlangeDecorator.prototype.calculate = function (report) {
        return new FlangeCalculator(report).execute();
    };
    return FlangeDecorator;
}());

var FlangeCalculator = /** @class */ (function (_super) {
    __extends(FlangeCalculator, _super);
    function FlangeCalculator(report) {
        var _this = _super.call(this, report, [
            /*00*/ function () { return _this.Δθ = Math.abs(_this.θse - _this.θa); },
            /*01*/ function () { return _this.hr = _this.ε * _this.δ * (Math.pow(_this.θse + 273, 4) - Math.pow(_this.θa + 273, 4)) / ((_this.θse + 273) - (_this.θa + 273)); },
            /*02*/ function () { return _this.hcv = 1.74 * Math.pow(_this.Δθ, 1 / 3); },
            /*04*/ function () { return _this.q = _this.hse * _this.Δθ; },
            /*07*/ function () { return _this.θm_min = (_this.θse + _this.θa + 35) / 2; },
            /*08*/ function () { return _this.θm_max = (_this.θse + _this.θa + 20) / 2; },
            /*09*/ function () { return _this.λm_min = _this.a + _this.b * _this.θm_min + _this.c * Math.pow(_this.θm_min, 2) + _this.d * Math.pow(_this.θm_min, 3); },
            /*10*/ function () { return _this.λm_max = _this.a + _this.b * _this.θm_max + _this.c * Math.pow(_this.θm_max, 2) + _this.d * Math.pow(_this.θm_max, 3); },
            /*11*/ function () { return _this.λdes_min = _this.λm_min * _this.Ft; },
            /*12*/ function () { return _this.λdes_max = _this.λm_max * _this.Ft; },
            /**13*/ function () { return _this.e_min = _this.get_l(0); },
            /**14*/ function () { return _this.e_max = _this.get_l(1); },
            /*32*/ function () { return _this.lort = Math.pow(_this.De, 3) * _this.Δθ; },
            /**36*/ function () { return _this.De_min = _this.De + 2 * _this.e_min; },
            /**37*/ function () { return _this.De_max = _this.De + 2 * _this.e_max; },
            /*33*/ function () { return _this.hcv_laminar = 1.25 * Math.pow(_this.Δθ / _this.De, 0.25); },
            /*33min*/ function () { return _this.hcv_laminar_min = 1.25 * Math.pow(_this.Δθ / _this.De_min, 0.25); },
            /*34min*/ function () { return _this.hcv_laminar_max = 1.25 * Math.pow(_this.Δθ / _this.De_max, 0.25); },
            /*34*/ function () { return _this.hcv_turbulent = 1.21 * Math.pow(_this.Δθ, 0.33); },
            /*35*/ function () { return _this.hse = _this.hr + (_this.lort < 10 ? _this.hcv_laminar : _this.hcv_turbulent); },
            /*35min*/ function () { return _this.hse_min = _this.hr + (_this.lort < 10 ? _this.hcv_laminar_min : _this.hcv_turbulent); },
            /*35max*/ function () { return _this.hse_max = _this.hr + (_this.lort < 10 ? _this.hcv_laminar_max : _this.hcv_turbulent); },
            /**42*/ function () { return _this.Rle = 1 / (_this.hse * Math.PI * _this.De); },
            /*43*/ function () { return _this.ql = _this.Δθ / _this.Rle; },
            /**42min*/ function () { return _this.Rle_min = 1 / (_this.hse_min * Math.PI * _this.De_min); },
            /**42max*/ function () { return _this.Rle_max = 1 / (_this.hse_max * Math.PI * _this.De_max); },
            /**38*/ function () { return _this.Rins_min = (Math.log(_this.De_min / _this.De)) / (2 * Math.PI * _this.λdes_min); },
            /**39*/ function () { return _this.Rins_max = (Math.log(_this.De_max / _this.De)) / (2 * Math.PI * _this.λdes_max); },
            /*45*/ function () { return _this.ql_min = _this.Δθ / (_this.Rle_min + _this.Rins_min); },
            /*46*/ function () { return _this.ql_max = _this.Δθ / (_this.Rle_max + _this.Rins_max); },
            /*47*/ function () { return _this.Qkwh = (_this.ql * _this.l * _this.Ot * _this.n * 1 / 1000) * (!Number(report.component.fields.unknow_surface_temp) ? 1 : Number(report.component.fields.unknow_surface_temp)); },
            /*40*/ function () { return _this.Sp = Math.PI * _this.De_min; },
            /*48*/ function () { return _this.ql_ref_pb = _this.ql - (10000 * _this.Cpb_valve_flange * _this.Sp / _this.Ot / _this.Σ); },
            /*06*/ function () { return _this.Qε = _this.Qkwh * _this.Σ; },
            /*22*/ function () { return _this.Qkwh_min = _this.ql_min * _this.l * _this.Ot * _this.n / 1000; },
            /*23*/ function () { return _this.Qkwh_max = _this.ql_max * _this.l * _this.Ot * _this.n / 1000; },
            /*24*/ function () { return _this.Qε_min = _this.Qkwh_min * _this.Σ; },
            /*25*/ function () { return _this.Qε_max = _this.Qkwh_max * _this.Σ; },
            /*26*/ function () { return _this.Savingkwh_min = _this.Qkwh - _this.Qkwh_min; },
            /*27*/ function () { return _this.Savingkwh_max = _this.Qkwh - _this.Qkwh_max; },
            /*28*/ function () { return _this.Savingε_min = _this.Qε - _this.Qε_min; },
            /*29*/ function () { return _this.Savingε_max = _this.Qε - _this.Qε_max; },
            /*30*/ function () { return _this.Insulation_advice = _this.ql_ref_pb > _this.ql_min ? 'Insulation recommended' : 'System OK'; },
        ]) || this;
        return _this;
    }
    Object.defineProperty(FlangeCalculator.prototype, "default_length", {
        get: function () {
            return .5;
        },
        enumerable: true,
        configurable: true
    });
    return FlangeCalculator;
}(__WEBPACK_IMPORTED_MODULE_0__base_calculator_class__["a" /* BaseCalculator */]));
//# sourceMappingURL=flange.class.js.map

/***/ }),
/* 499 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurfaceDecorator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_calculator_class__ = __webpack_require__(64);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SurfaceDecorator = /** @class */ (function () {
    function SurfaceDecorator() {
    }
    SurfaceDecorator.prototype.calculate = function (report) {
        return new SurfaceCalculator(report).execute();
    };
    return SurfaceDecorator;
}());

var SurfaceCalculator = /** @class */ (function (_super) {
    __extends(SurfaceCalculator, _super);
    function SurfaceCalculator(report) {
        var _this = _super.call(this, report, [
            /*00*/ function () { return _this.Δθ = Math.abs(_this.θse - _this.θa); },
            /*01*/ function () { return _this.hr = _this.ε * _this.δ * (Math.pow(_this.θse + 273, 4) - Math.pow(_this.θa + 273, 4)) / ((_this.θse + 273) - (_this.θa + 273)); },
            /*02*/ function () { return _this.hcv = 1.74 * Math.pow(_this.Δθ, 1 / 3); },
            /*03*/ function () { return _this.hse = _this.hr + _this.hcv; },
            /*04*/ function () { return _this.q = _this.hse * _this.Δθ; },
            /*05*/ function () { return _this.Qkwh = (_this.q * _this.S * _this.Ot * 1 / 1000) * (!Number(report.component.fields.unknow_surface_temp) ? 1 : Number(report.component.fields.unknow_surface_temp)); },
            /*06*/ function () { return _this.Qε = _this.Qkwh * _this.Σ; },
            /*07*/ function () { return _this.θm_min = (_this.θse_min + (_this.θa + 35)) / 2; },
            /*08*/ function () { return _this.θm_max = (_this.θse_max + (_this.θa + 20)) / 2; },
            /*09*/ function () { return _this.λm_min = _this.a + _this.b * _this.θm_min + _this.c * Math.pow(_this.θm_min, 2) + _this.d * Math.pow(_this.θm_min, 3); },
            /*10*/ function () { return _this.λm_max = _this.a + _this.b * _this.θm_max + _this.c * Math.pow(_this.θm_max, 2) + _this.d * Math.pow(_this.θm_max, 3); },
            /*11*/ function () { return _this.λdes_min = _this.λm_min * _this.Ft; },
            /*12*/ function () { return _this.λdes_max = _this.λm_max * _this.Ft; },
            /*13*/ function () { return _this.e_min = _this.get_l(0); },
            /*14*/ function () { return _this.e_max = _this.get_l(1); },
            /*15*/ function () { return _this.Rse_min = 1 / _this.hse; },
            /*16*/ function () { return _this.Rse_max = 1 / _this.hse; },
            /*17*/ function () { return _this.Rins_min = _this.e_min / _this.λdes_min; },
            /*18*/ function () { return _this.Rins_max = _this.e_max / _this.λdes_max; },
            /*19*/ function () { return _this.qref_pb = _this.q - ((10000 * _this.Cpb_surface_pipe) / _this.Ot / _this.Σ); },
            /*20*/ function () { return _this.q_min = _this.Δθ / (_this.Rse_min + _this.Rins_min); },
            /*21*/ function () { return _this.q_max = _this.Δθ / (_this.Rse_max + _this.Rins_max); },
            /*22*/ function () { return _this.Qkwh_min = _this.q_min * _this.S * _this.Ot * 1 / 1000; },
            /*23*/ function () { return _this.Qkwh_max = _this.q_max * _this.S * _this.Ot * 1 / 1000; },
            /*24*/ function () { return _this.Qε_min = _this.Qkwh_min * _this.Σ; },
            /*25*/ function () { return _this.Qε_max = _this.Qkwh_max * _this.Σ; },
            /*26*/ function () { return _this.Savingkwh_min = _this.Qkwh - _this.Qkwh_min; },
            /*27*/ function () { return _this.Savingkwh_max = _this.Qkwh - _this.Qkwh_max; },
            /*28*/ function () { return _this.Savingε_min = _this.Qε - _this.Qε_min; },
            /*29*/ function () { return _this.Savingε_max = _this.Qε - _this.Qε_max; },
            /*30*/ function () { return _this.Insulation_advice = _this.qref_pb > _this.q_min ? 'Insulation recommended' : 'System OK'; }
        ]) || this;
        return _this;
    }
    return SurfaceCalculator;
}(__WEBPACK_IMPORTED_MODULE_0__base_calculator_class__["a" /* BaseCalculator */]));
//# sourceMappingURL=surface.class.js.map

/***/ }),
/* 500 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_const__ = __webpack_require__(183);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__report_const__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),
/* 501 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurfaceMaterialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_reports__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SurfaceMaterialComponent = /** @class */ (function () {
    function SurfaceMaterialComponent() {
    }
    SurfaceMaterialComponent.prototype.setFocus = function () {
        this.surface_material.setFocus();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_reports__["a" /* BaseReportPage */])
    ], SurfaceMaterialComponent.prototype, "parent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('surface_material'),
        __metadata("design:type", Object)
    ], SurfaceMaterialComponent.prototype, "surface_material", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('#material'),
        __metadata("design:type", Object)
    ], SurfaceMaterialComponent.prototype, "material", void 0);
    SurfaceMaterialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[surface-material]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\components\surface-material\surface-material.component.html"*/'<ion-col col-10>\n\n  <ion-item class="edit_surface_material" [class.editable]="parent.edit_surface_material">\n\n    <ion-label stacked>Surface material [ε]</ion-label>\n\n    <ion-input tabindex="5" class="literal" (ionFocus)="parent.on_focus($event);parent.toggle_surface_material(true)" [value]="parent.report.component.fields.surface_material_friendly"\n\n      type="text"></ion-input>\n\n    <ion-input #surface_material tabindex="5" (ionFocus)="parent.on_focus($event)" class="numeric" (focusout)="parent.toggle_surface_material(false)"\n\n      (ionFocus)="parent.on_focus($event)" name="surface_material" required data-val-required="Please input Surface emissivity"\n\n      [ngModel]="parent.report.component.fields.surface_material | number: \'1.2-4\'"  type="tel" [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Surface emissivity" ></ion-input>\n\n  </ion-item>\n\n</ion-col>\n\n<ion-col col-2>\n\n  <more pull-left #material (change)="parent.set_surface_material(material.value, $event)" [type]="\'materials\'" modal-button></more>\n\n</ion-col>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\components\surface-material\surface-material.component.html"*/
        })
    ], SurfaceMaterialComponent);
    return SurfaceMaterialComponent;
}());

//# sourceMappingURL=surface-material.component.js.map

/***/ }),
/* 502 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportCondensation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_reports__ = __webpack_require__(21);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ReportCondensation = /** @class */ (function (_super) {
    __extends(ReportCondensation, _super);
    function ReportCondensation(project, component, item) {
        var _this = _super.call(this, project, component, item) || this;
        _this.project = project;
        _this.component = component;
        _this.page = __WEBPACK_IMPORTED_MODULE_1__pages_reports__["e" /* ReportCondensationPage */];
        _this.name = "Condensation";
        return _this;
        // this.component.fields.location = 'Test flange borrar';
        // this.component.fields.operational_time = 8760;
        // this.component.fields.nominal_diameter = 200;
        // this.component.fields.number = 1;
        // this.component.fields.surface_material = 0.8;
        // this.component.fields.ambient_temp = 12;
        // this.component.fields.surface_temp = 250;
    }
    return ReportCondensation;
}(__WEBPACK_IMPORTED_MODULE_0__report_base__["a" /* ReportBase */]));

//# sourceMappingURL=report-condensation.class.js.map

/***/ }),
/* 503 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportDamaged; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_reports__ = __webpack_require__(21);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ReportDamaged = /** @class */ (function (_super) {
    __extends(ReportDamaged, _super);
    function ReportDamaged(project, component, item) {
        var _this = _super.call(this, project, component, item) || this;
        _this.project = project;
        _this.component = component;
        _this.page = __WEBPACK_IMPORTED_MODULE_1__pages_reports__["f" /* ReportDamagedPage */];
        _this.name = "Damaged";
        return _this;
        // this.component.fields.location = 'Test flange borrar';
        // this.component.fields.operational_time = 8760;
        // this.component.fields.nominal_diameter = 200;
        // this.component.fields.number = 1;
        // this.component.fields.surface_material = 0.8;
        // this.component.fields.ambient_temp = 12;
        // this.component.fields.surface_temp = 250;
    }
    return ReportDamaged;
}(__WEBPACK_IMPORTED_MODULE_0__report_base__["a" /* ReportBase */]));

//# sourceMappingURL=report-damaged.class.js.map

/***/ }),
/* 504 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportInsulatedSurface; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_reports__ = __webpack_require__(21);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ReportInsulatedSurface = /** @class */ (function (_super) {
    __extends(ReportInsulatedSurface, _super);
    function ReportInsulatedSurface(project, component, item) {
        var _this = _super.call(this, project, component, item) || this;
        _this.project = project;
        _this.component = component;
        _this.page = __WEBPACK_IMPORTED_MODULE_1__pages_reports__["m" /* ReportInsulatedSurfacePage */];
        _this.name = "Insulated Surface";
        //public path = REPORT.INSULATION.INSULATED_EQUIPMENTS.SURFACE;
        _this.insulated = true;
        return _this;
        // this.component.fields.location = 'Test isurface borrar';
        // this.component.fields.operational_time = 8760;
        // this.component.fields.surface = 20;
        // this.component.fields.surface_material = 0.6;
        // this.component.fields.ambient_temp = 12;
        // this.component.fields.surface_temp = 89;
    }
    Object.defineProperty(ReportInsulatedSurface.prototype, "potential_measure", {
        get: function () {
            return (!this.component || !this.component.fields || null == this.component.fields.surface) ? 'kWh/m2' : 'kWh';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportInsulatedSurface.prototype, "money_measure", {
        get: function () {
            return (!this.component || !this.component.fields || null == this.component.fields.surface) ? '€/m2' : '€';
        },
        enumerable: true,
        configurable: true
    });
    return ReportInsulatedSurface;
}(__WEBPACK_IMPORTED_MODULE_0__report_base__["a" /* ReportBase */]));

//# sourceMappingURL=report-isurface.class.js.map

/***/ }),
/* 505 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportValve; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_reports__ = __webpack_require__(21);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ReportValve = /** @class */ (function (_super) {
    __extends(ReportValve, _super);
    function ReportValve(project, component, item) {
        var _this = _super.call(this, project, component, item) || this;
        _this.project = project;
        _this.component = component;
        _this.page = __WEBPACK_IMPORTED_MODULE_1__pages_reports__["v" /* ReportValvePage */];
        _this.name = "Uninsulated Valve";
        return _this;
        // this.component.fields.location = 'Test valve borrar';
        // this.component.fields.operational_time = 8760;
        // this.component.fields.nominal_diameter = 200;
        // this.component.fields.length = 1;
        // this.component.fields.number = 1;
        // this.component.fields.surface_material = 0.8;
        // this.component.fields.ambient_temp = 25;
        // this.component.fields.surface_temp = 250;
    }
    return ReportValve;
}(__WEBPACK_IMPORTED_MODULE_0__report_base__["a" /* ReportBase */]));

//# sourceMappingURL=report-valve.class.js.map

/***/ }),
/* 506 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportFlange; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_reports__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calculators__ = __webpack_require__(303);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ReportFlange = /** @class */ (function (_super) {
    __extends(ReportFlange, _super);
    function ReportFlange(project, component, item) {
        var _this = _super.call(this, project, component, item) || this;
        _this.project = project;
        _this.component = component;
        _this.page = __WEBPACK_IMPORTED_MODULE_1__pages_reports__["i" /* ReportFlangePage */];
        _this.name = "Uninsulated Flange";
        //public path = REPORT.INSULATION.UNINSULATED_EQUIPMENTS.FLANGE;
        _this.calculator = new __WEBPACK_IMPORTED_MODULE_2__calculators__["a" /* FlangeDecorator */];
        return _this;
        // this.component.fields.location = 'Test flange borrar';
        // this.component.fields.operational_time = 8760;
        // this.component.fields.nominal_diameter = 200;
        // this.component.fields.number = 1;
        // this.component.fields.surface_material = 0.8;
        // this.component.fields.ambient_temp = 12;
        // this.component.fields.surface_temp = 250;
    }
    return ReportFlange;
}(__WEBPACK_IMPORTED_MODULE_0__report_base__["a" /* ReportBase */]));

//# sourceMappingURL=report-flange.class.js.map

/***/ }),
/* 507 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportSurface; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_reports__ = __webpack_require__(21);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ReportSurface = /** @class */ (function (_super) {
    __extends(ReportSurface, _super);
    function ReportSurface(project, component, item) {
        var _this = _super.call(this, project, component, item) || this;
        _this.project = project;
        _this.component = component;
        _this.page = __WEBPACK_IMPORTED_MODULE_1__pages_reports__["t" /* ReportSurfacePage */];
        _this.name = "Uninsulated Surface";
        return _this;
    }
    Object.defineProperty(ReportSurface.prototype, "potential_measure", {
        //public path = REPORT.INSULATION.UNINSULATED_EQUIPMENTS.SURFACE;
        get: function () {
            return (!this.component || !this.component.fields || null == this.component.fields.surface) ? 'kWh/m2' : 'kWh';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportSurface.prototype, "money_measure", {
        get: function () {
            return (!this.component || !this.component.fields || null == this.component.fields.surface) ? '€/m2' : '€';
        },
        enumerable: true,
        configurable: true
    });
    return ReportSurface;
}(__WEBPACK_IMPORTED_MODULE_0__report_base__["a" /* ReportBase */]));

//# sourceMappingURL=report-surface.class.js.map

/***/ }),
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_reports__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportFooterComponent = /** @class */ (function () {
    function ReportFooterComponent() {
    }
    ReportFooterComponent.prototype.ngOnInit = function () {
        this.calculate_text = this.calculate_text || 'Calculate';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_reports__["a" /* BaseReportPage */])
    ], ReportFooterComponent.prototype, "parent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ReportFooterComponent.prototype, "calculate_text", void 0);
    ReportFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'report-footer',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\components\report-footer\report-footer.component.html"*/'<ion-footer>\n\n  <ion-grid no-padding>\n\n    <ion-row no-padding>\n\n      <ion-col col-4 no-padding>\n\n        <button tabindex="22" *ngIf="(parent.view!=\'edit_picture\') || (parent.view==\'edit_picture\' && !parent.is_energy_report)"\n\n          ion-button small color="light" (click)="parent.go_back()">\n\n          <ion-icon name="arrow-back"></ion-icon>\n\n          <span hidden-xs>&nbsp;Back</span>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-4 text-center>\n\n        <tools></tools>\n\n      </ion-col>\n\n      <ion-col col-4 text-right no-padding *ngIf="parent.view!=\'edit_picture\' && parent.segment===\'input\'">\n\n        <button *ngIf="!!parent.can_remove" tabindex="20" ion-button small color="danger" (click)="parent.remove_report()">\n\n          <ion-icon visible-xs name="trash"></ion-icon>\n\n          <span hidden-xs>Remove</span>\n\n        </button>\n\n        <button id="submit-button" tabindex="21" ion-button small pull-right color="primary" (click)="parent.calculate()"\n\n          *ngIf="parent.view!=\'edit_picture\' && parent.view!=\'result\'">\n\n          <ion-icon visible-xs name="arrow-forward">\n\n          </ion-icon><span hidden-xs>Next</span>          \n\n        </button>\n\n        <button id="submit-button" tabindex="22" ion-button small pull-right color="primary" (click)="parent.save()"\n\n          *ngIf="parent.view==\'result\' && !parent.form.invalid">\n\n            <ion-icon visible-xs name="arrow-forward">\n\n            </ion-icon><span hidden-xs>Next</span>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-4 text-right no-padding *ngIf="parent.view==\'edit_picture\' && parent.is_energy_report">\n\n        <button tabindex="23" ion-button small color="royal" (click)="parent.go_back(); parent.scrollToBottom()">\n\n          <ion-icon visible-xs name="arrow-forward">\n\n          </ion-icon><span hidden-xs>Next</span>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\components\report-footer\report-footer.component.html"*/
        })
    ], ReportFooterComponent);
    return ReportFooterComponent;
}());

//# sourceMappingURL=report-footer.component.js.map

/***/ }),
/* 597 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_reports__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_report_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_reports_report_pipe_class__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_messages_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services__ = __webpack_require__(14);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReportPipePage = /** @class */ (function (_super) {
    __extends(ReportPipePage, _super);
    function ReportPipePage(navCtrl, navParams, service, alertCtrl, picture, message, keyboard, modalCtrl) {
        var _this = _super.call(this, new __WEBPACK_IMPORTED_MODULE_4__models_reports_report_pipe_class__["a" /* ReportPipe */](navParams.data.project, navParams.data.component, navParams.data.report), navParams, navCtrl, service, alertCtrl, picture, message, keyboard, modalCtrl) || this;
        _this.navCtrl = navCtrl;
        _this.service = service;
        _this.alertCtrl = alertCtrl;
        _this.picture = picture;
        _this.message = message;
        _this.keyboard = keyboard;
        _this.modalCtrl = modalCtrl;
        return _this;
    }
    ReportPipePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-report-pipe',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\pipe\report-pipe.component.html"*/'<report-header [parent]="this"></report-header>\n\n\n\n<ion-content #content>\n\n  <ion-grid [hidden]="view==\'edit_picture\'" class="fixed-col">\n\n    <ion-row>\n\n      <ion-col col-12 col-md-8 no-padding>\n\n        <form novalidate #form="ngForm" [hidden]="segment!=\'input\'" (submit)="calculate()">\n\n          <ion-input type="hidden" name="surface_material_range" [(ngModel)]="surface_material_range" required data-val-required="Surface material emissivity must be between 0 and 1"></ion-input>\n\n          <ion-input type="hidden" name="operational_time_range" [(ngModel)]="operational_time_range" required data-val-required="Operational time must be between 0 and 8760 hours"></ion-input>\n\n          <ion-input type="hidden" name="temp_range_diff" [(ngModel)]="temp_range_diff" required data-val-required="Surface temperature must be at least 5°C diferent than ambient temperature"></ion-input>\n\n          <ion-input type="hidden" name="diameter_low" [(ngModel)]="diameter_low" required data-val-required="Diameter must be > 0mm"></ion-input>\n\n          <ion-input type="hidden" name="length_low" [(ngModel)]="length_low" required data-val-required="Length must be > 0 m"></ion-input>\n\n          <ion-input type="hidden" name="surface_temp_range" [(ngModel)]="surface_temp_range" required data-val-required="Surface temperature must be < 1000°C"></ion-input>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Component/Location</ion-label>\n\n                <ion-input [disabled]="!!report.component.validation" tabindex="1" (ionFocus)="on_focus($event)" name="location" required data-val-required="Please input Component/Location"\n\n                  [(ngModel)]="report.component.fields.location" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Operational time (hrs/yrs)</ion-label>\n\n                <ion-input [disabled]="!!report.component.validation" readonly tabindex="2" *ngIf="!!report.component.fields.operational_time_index"\n\n                  [value]="friendy_more(\'TIMES\',  report.component.fields.operational_time_index)"></ion-input>\n\n                <ion-input #before_time *ngIf="!report.component.fields.operational_time_index" [disabled]="!!report.component.validation" tabindex="3" \n\n                  required data-val-required="Please input Operational time"\n\n                  [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Operational time"\n\n                  name="operational_time" [(ngModel)]="report.component.fields.operational_time" type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <more pull-left [hidden]="!!report.component.validation" #time (change)="set_operational_time(time)" [type]="\'time\'"\n\n                modal-button></more>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-md-7 col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Diameter (mm)</ion-label>\n\n                <ion-input #after_time tabindex="4" (ionFocus)="on_focus($event)" name="nominal_diameter" required\n\n                  data-val-required="Please input Diameter" [(ngModel)]="report.component.fields.nominal_diameter" \n\n                  [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Diameter"\n\n                  type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-md-4 col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Length (m)</ion-label>\n\n                <ion-input tabindex="5" min="0" (ionFocus)="on_focus($event)" name="number" required data-val-required="Please input Length"\n\n                [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Length" [(ngModel)]="report.component.fields.length" type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item class="edit_surface_material" [class.editable]="edit_surface_material">\n\n                <ion-label stacked>Surface material [ε]</ion-label>\n\n                <ion-input readonly tabindex="6" *ngIf="!!report.component.fields.surface_material_index"\n\n                [value]="friendy_more(\'MATERIALS\', report.component.fields.surface_material_index)"></ion-input>\n\n                <ion-input #before_material *ngIf="!report.component.fields.surface_material_index" tabindex="6" name="surface_material" \n\n                required data-val-required="Please input Surface emissivity"\n\n                [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Surface emissivity"\n\n                [(ngModel)]="report.component.fields.surface_material" type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <more pull-left #material (change)="set_surface_material(material)" [type]="\'materials\'" modal-button></more>\n\n            </ion-col>\n\n        </ion-row>\n\n          <ion-row>\n\n              <ion-col col-md-7 col-7 class="pr-0">\n\n                <ion-item class="pr-0">\n\n                  <ion-label stacked>Surface temp<span hidden-xs>erature</span> (<sup>º</sup>C)</ion-label>\n\n                  <ion-input tabindex="8"  [style.visibility]="report.component.fields.unknow_surface_temp ? \'hidden\' : \'visible\'" #after_material (ionFocus)="on_focus($event)" scroll="-80" name="surface_temp"\n\n                    required data-val-required="Please input Surface temperature" [pattern]="patterns.REQUIRED_NUMBER"\n\n                    data-val-pattern="Please input a valid Surface temperature" [(ngModel)]="report.component.fields.surface_temp"\n\n                    type="tel"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n              <ion-col col-md-3 col-4 toggle-container>\n\n                <ion-item>\n\n                  <ion-label stacked>Unknown</ion-label>\n\n                  <ion-toggle [disabled]="!!report.component.validation" style="padding-left:0" [(ngModel)]="report.component.fields.unknow_surface_temp" (ionChange)="toggle_know_temp()"\n\n                    name="unknow_surface_temp"></ion-toggle>\n\n                </ion-item>\n\n              </ion-col>\n\n              <ion-col col-2>\n\n                <medium-temp #medium [report]="report" modal-button pull-left></medium-temp>\n\n              </ion-col>\n\n            </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Ambient temperature (<sup>º</sup>C)</ion-label>\n\n                <ion-input tabindex="9" (ionFocus)="on_focus($event)" (keyup.enter)="on_keypress($event)" name="ambient_temp"\n\n                  [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Ambient temperature"\n\n                  required data-val-required="Please input Ambient temperature" [(ngModel)]="report.component.fields.ambient_temp"\n\n                  type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2></ion-col>\n\n          </ion-row>\n\n        </form>\n\n      </ion-col>\n\n\n\n      <ion-col col-12 col-md-4 no-padding text-center>\n\n        <ion-row>\n\n          <ion-col col-12 picture-slide [parent]="this" [input]="after_material"  [report]="report" [editable]="editable"\n\n            (onStartEdit)="on_picture_start_edit($event)">\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n\n\n      <ion-col col-12 no-padding>\n\n        <div report-result col-12 [parent]="this" *ngIf="view==\'result\' && (!!form && !form.invalid)"></div>\n\n      </ion-col>\n\n      <ion-col col-12 padding>\n\n        <report-errors padding #errors col-12 [hidden]="view==\'!result\' && report.result"></report-errors>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <edit-picture *ngIf="view==\'edit_picture\'" [report]="report" [picture]="editing_picture"></edit-picture>\n\n\n\n</ion-content>\n\n\n\n<report-footer [parent]="this"></report-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\pipe\report-pipe.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_report_service__["a" /* ReportService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__services__["e" /* PictureService */],
            __WEBPACK_IMPORTED_MODULE_5__services_messages_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */]])
    ], ReportPipePage);
    return ReportPipePage;
}(__WEBPACK_IMPORTED_MODULE_1__models_reports__["a" /* BaseReportPage */]));

//# sourceMappingURL=report-pipe.component.js.map

/***/ }),
/* 598 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportFlangePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_reports__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_report_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_messages_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__(14);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportFlangePage = /** @class */ (function (_super) {
    __extends(ReportFlangePage, _super);
    function ReportFlangePage(navCtrl, navParams, service, alertCtrl, picture, message, keyboard, modalCtrl) {
        var _this = _super.call(this, new __WEBPACK_IMPORTED_MODULE_1__models_reports__["d" /* ReportFlange */](navParams.data.project, navParams.data.component, navParams.data.report), navParams, navCtrl, service, alertCtrl, picture, message, keyboard, modalCtrl) || this;
        _this.navCtrl = navCtrl;
        _this.service = service;
        _this.alertCtrl = alertCtrl;
        _this.picture = picture;
        _this.message = message;
        _this.keyboard = keyboard;
        _this.modalCtrl = modalCtrl;
        _this.unknow_length = true;
        return _this;
    }
    ReportFlangePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-report-flange',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\flange\report-flange.component.html"*/'<report-header [parent]="this"></report-header>\n\n\n\n<ion-content #content>\n\n\n\n  <ion-grid [hidden]="view==\'edit_picture\'" class="fixed-col">\n\n    <ion-row>\n\n      <ion-col col-12 col-md-8 no-padding>\n\n        <form novalidate #form="ngForm" [hidden]="segment!=\'input\'" (submit)="calculate()">\n\n          <ion-input type="hidden" name="surface_material_range" [(ngModel)]="surface_material_range" required data-val-required="Surface material emissivity must be between 0 and 1"></ion-input>\n\n          <ion-input type="hidden" name="operational_time_range" [(ngModel)]="operational_time_range" required data-val-required="Operational time must be between 0 and 8760 hours"></ion-input>\n\n          <ion-input type="hidden" name="temp_range_diff" [(ngModel)]="temp_range_diff" required data-val-required="Surface temperature must be at least 5°C diferent than ambient temperature"></ion-input>\n\n          <ion-input type="hidden" name="diameter_low" [(ngModel)]="diameter_low" required data-val-required="Diameter must be > 0mm"></ion-input>\n\n          <ion-input type="hidden" name="length_low" [(ngModel)]="length_low" required data-val-required="Length must be > 0 m"></ion-input>\n\n          <ion-input type="hidden" name="items_low" [(ngModel)]="items_low" required data-val-required="Number of items must be > 0"></ion-input>\n\n          <ion-input type="hidden" name="surface_temp_range" [(ngModel)]="surface_temp_range" required data-val-required="Surface temperature must be < 1000°C"></ion-input>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Component/Location</ion-label>\n\n                <ion-input [disabled]="!!report.component.validation" tabindex="1" (ionFocus)="on_focus($event)" name="location" required data-val-required="Please input Component/Location"\n\n                  [(ngModel)]="report.component.fields.location" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Number of items</ion-label>\n\n                <ion-input [disabled]="!!report.component.validation" min="0" tabindex="2" (ionFocus)="on_focus($event)" name="number" required data-val-required="Please input Number of items"\n\n                  [(ngModel)]="report.component.fields.number" type="tel" [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Number of items" ></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Operational time (hrs/yrs)</ion-label>\n\n                <ion-input [disabled]="!!report.component.validation" readonly tabindex="3" *ngIf="!!report.component.fields.operational_time_index"\n\n                  [value]="friendy_more(\'TIMES\',  report.component.fields.operational_time_index)"></ion-input>\n\n                <ion-input #before_time *ngIf="!report.component.fields.operational_time_index" [disabled]="!!report.component.validation" tabindex="3" \n\n                  required data-val-required="Please input Operational time"\n\n                  [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Operational time"\n\n                  name="operational_time" [(ngModel)]="report.component.fields.operational_time" type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <more pull-left [hidden]="!!report.component.validation" #time (change)="set_operational_time(time)" [type]="\'time\'"\n\n                modal-button></more>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Diameter (mm)</ion-label>\n\n                <ion-input  [disabled]="!!report.component.validation" #after_time tabindex="4" (ionFocus)="on_focus($event)" name="nominal_diameter" required\n\n                  data-val-required="Please input Diameter" [(ngModel)]="report.component.fields.nominal_diameter"\n\n                  type="tel" [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Diameter" ></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item class="edit_surface_material" [class.editable]="edit_surface_material">\n\n                <ion-label stacked>Surface material [ε]</ion-label>\n\n                <ion-input readonly tabindex="5" *ngIf="!!report.component.fields.surface_material_index"\n\n                [value]="friendy_more(\'MATERIALS\', report.component.fields.surface_material_index)"></ion-input>\n\n                <ion-input #before_material *ngIf="!report.component.fields.surface_material_index" tabindex="5" name="surface_material" \n\n                required data-val-required="Please input Surface emissivity"\n\n                [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Surface emissivity"\n\n                [(ngModel)]="report.component.fields.surface_material" type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <more pull-left #material (change)="set_surface_material(material)" [type]="\'materials\'" modal-button></more>\n\n            </ion-col>\n\n        </ion-row>\n\n          <ion-row>\n\n              <ion-col col-md-7 col-6 class="pr-0">\n\n                <ion-item class="pr-0">\n\n                  <ion-label stacked>Surface temperature (<sup>º</sup>C)</ion-label>\n\n                  <ion-input tabindex="7"  [style.visibility]="report.component.fields.unknow_surface_temp ? \'hidden\' : \'visible\'" #after_material (ionFocus)="on_focus($event)" scroll="-80" name="surface_temp"\n\n                    required data-val-required="Please Surface temperature" [pattern]="patterns.REQUIRED_NUMBER"\n\n                    data-val-pattern="Please input a valid Surface temperature" [(ngModel)]="report.component.fields.surface_temp"\n\n                    type="tel"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n              <ion-col col-md-3 col-4 toggle-container>\n\n                <ion-item>\n\n                  <ion-label stacked>Unknown</ion-label>\n\n                  <ion-toggle [disabled]="!!report.component.validation" style="padding-left:0" [(ngModel)]="report.component.fields.unknow_surface_temp" (ionChange)="toggle_know_temp()"\n\n                    name="unknow_surface_temp"></ion-toggle>\n\n                </ion-item>\n\n              </ion-col>\n\n              <ion-col col-2>\n\n                <!-- <medium-temp #medium (change)="report.component.fields.surface_temp=medium.value" modal-button pull-left></medium-temp> -->\n\n                <medium-temp #medium [report]="report" modal-button pull-left></medium-temp>\n\n              </ion-col>\n\n            </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Ambient temperature (<sup>º</sup>C)</ion-label>\n\n                <ion-input tabindex="8" (ionFocus)="on_focus($event)" (keyup.enter)="on_keypress($event)" name="ambient_temp"\n\n                  [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Ambient temperature"\n\n                  required data-val-required="Please input Ambient temperature" [(ngModel)]="report.component.fields.ambient_temp"\n\n                  type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2></ion-col>\n\n          </ion-row>\n\n        </form>\n\n      </ion-col>\n\n\n\n      <ion-col col-12 col-md-4 no-padding>\n\n        <ion-row>\n\n          <ion-col col-12 picture-slide [parent]="this" [input]="after_material" [report]="report" [editable]="editable" (onStartEdit)="on_picture_start_edit($event)">\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12 no-padding>\n\n        <div report-result col-12 [parent]="this" *ngIf="view==\'result\' && (!!form && !form.invalid)"></div>\n\n      </ion-col>\n\n      <ion-col col-12 padding>\n\n        <report-errors padding #errors col-12 [hidden]="view==\'!result\' && report.result"></report-errors>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <edit-picture *ngIf="view==\'edit_picture\'" [report]="report" [picture]="editing_picture"></edit-picture>\n\n\n\n</ion-content>\n\n\n\n<report-footer [parent]="this"></report-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\flange\report-flange.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_report_service__["a" /* ReportService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__services__["e" /* PictureService */],
            __WEBPACK_IMPORTED_MODULE_4__services_messages_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */]])
    ], ReportFlangePage);
    return ReportFlangePage;
}(__WEBPACK_IMPORTED_MODULE_1__models_reports__["a" /* BaseReportPage */]));

//# sourceMappingURL=report-flange.component.js.map

/***/ }),
/* 599 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportEditPictureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_picture__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_marker__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportEditPictureComponent = /** @class */ (function () {
    function ReportEditPictureComponent(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.max_markers = 10;
    }
    ReportEditPictureComponent.prototype.create_marker = function (event) {
        if ((this.report.component.markers.length + this.picture.markers.length) < this.max_markers) {
            this.show_prompt(event, null);
        }
        else {
            var alert_1 = this.alertCtrl.create({
                //title: 'Temperature',
                message: "This component already has " + this.max_markers + " temperature markers",
                cssClass: "ion-dialog-horizontal",
                enableBackdropDismiss: false,
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel'
                    }
                ]
            });
            alert_1.present();
        }
    };
    ReportEditPictureComponent.prototype.edit_marker = function (marker) {
        this.show_prompt(null, marker);
    };
    ReportEditPictureComponent.prototype.show_prompt = function (event, marker) {
        var _this = this;
        if (!this.report.path.match(/(surface|pipe|valve|flange)/gi))
            return;
        var alert = this.alertCtrl.create({
            message: 'Measurement',
            cssClass: "ion-dialog-horizontal margin-top",
            enableBackdropDismiss: false,
            inputs: [
                {
                    name: 'temperature',
                    placeholder: 'ºC',
                    type: 'tel',
                    value: !isNaN(parseFloat(String(marker))) ? marker.temperature.toString() : ''
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Ok',
                    role: 'submit',
                    handler: function (data) {
                        if (isNaN(parseFloat(String(data.temperature))))
                            return;
                        if (!!marker) {
                            marker.temperature = data.temperature;
                        }
                        else {
                            var marker_size = {
                                width: 32,
                                height: 83
                            };
                            _this.picture.markers.push(new __WEBPACK_IMPORTED_MODULE_2__models_marker__["a" /* Marker */]({
                                x: event.offsetX - marker_size.width,
                                y: event.offsetY - marker_size.height,
                                temperature: data.temperature
                            }));
                        }
                    }
                }
            ]
        });
        if (!!marker) {
            alert.addButton({
                text: 'Remove',
                role: 'remove',
                handler: function () { _this.picture.markers = _this.picture.markers.filter(function (m) { return m !== marker; }); }
            });
        }
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_picture__["a" /* Picture */])
    ], ReportEditPictureComponent.prototype, "picture", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__models__["d" /* ReportBase */])
    ], ReportEditPictureComponent.prototype, "report", void 0);
    ReportEditPictureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'edit-picture',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\components\edit-picture\edit-picture.component.html"*/'<ng-container>\n\n<svg *ngFor="let marker of picture?.markers_with_values"\n\n  (click)="edit_marker(marker)"\n\n  version="1.1" \n\n  xmlns="http://www.w3.org/2000/svg" \n\n  xmlns:xlink="http://www.w3.org/1999/xlink" \n\n  x="0" y="0"\n\n  viewBox="0 0 366.1 485.2" \n\n  xml:space="preserve"\n\n  [style.transform]="marker.position">\n\n  <g [attr.class]="marker.color">\n\n    <circle cx="183.1" cy="181" r="130.8"/>\n\n    <path d="M184,0C83.5,0,2,81.5,2,182s151.6,303.3,182,303.3c30.3,0,182-202.8,182-303.3S284.4,0,184,0z M184,303.3\n\n	c-66.9,0-121.3-54.4-121.3-121.3S117.1,60.7,184,60.7c66.9,0,121.3,54.4,121.3,121.3S250.9,303.3,184,303.3z" />\n\n    <text [attr.transform]="marker.transform">{{marker.temperature}}</text>\n\n  </g>\n\n</svg>\n\n<img [src]="picture?.picture" width="100%" height="auto" (click)="create_marker($event)">\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\components\edit-picture\edit-picture.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */]])
    ], ReportEditPictureComponent);
    return ReportEditPictureComponent;
}());

//# sourceMappingURL=edit-picture.component.js.map

/***/ }),
/* 600 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPictureSlideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__const_images__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_reports_base_report_page_class__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportPictureSlideComponent = /** @class */ (function () {
    function ReportPictureSlideComponent() {
        this.onStartEdit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.can_edit = false;
        this.NON_PICTURE = __WEBPACK_IMPORTED_MODULE_2__const_images__["b" /* NON_PICTURE */];
    }
    ReportPictureSlideComponent.prototype.ngOnInit = function () {
        this.can_edit = !!this.report.path.match(/(surface|pipe|valve|flange)/gi);
    };
    ReportPictureSlideComponent.prototype.edit = function (picture) {
        this.onStartEdit.emit(picture);
    };
    ReportPictureSlideComponent.prototype.set_button_color = function (who) {
        return this.report.component.fields.surface_temp == this.report.component[who](this.report) ? 'royal' : 'light';
    };
    ReportPictureSlideComponent.prototype.set_temperature = function (who) {
        this.report.component.fields.surface_temp = this.report.component[who](this.report);
        if (!!this.input)
            this.input.setFocus();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models__["d" /* ReportBase */])
    ], ReportPictureSlideComponent.prototype, "report", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ReportPictureSlideComponent.prototype, "editable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ReportPictureSlideComponent.prototype, "onStartEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models_reports_base_report_page_class__["a" /* BaseReportPage */])
    ], ReportPictureSlideComponent.prototype, "parent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* TextInput */])
    ], ReportPictureSlideComponent.prototype, "input", void 0);
    ReportPictureSlideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[picture-slide]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\components\picture-slide\picture-slide.component.html"*/'<ion-row>\n\n  <ion-col col-12 text-center>\n\n    <img [src]="NON_PICTURE" class="non-picture" on-tap="parent.take_picture()" *ngIf="!report || !report.pictures.length"/>\n\n    <ion-slides no-padding pager="true" zoom="true" *ngIf="!!report && !!report.pictures.length">\n\n      <ion-slide *ngFor="let picture of report.pictures">\n\n        <img [src]="picture.picture" (click)="edit(picture)">\n\n        <div *ngIf="!!can_edit" class="markers">Measurements: {{picture.markers.length}}</div>\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </ion-col>\n\n</ion-row>\n\n<ion-row *ngIf="!!report.component && !!report.component.has_markers && !!report.component.has_markers(report) && !!can_edit" text-center>\n\n    <ion-col col-8 offset-2>\n\n      <button ion-button outline small [attr.color]="set_button_color(\'min_temp\')" (click)="set_temperature(\'min_temp\')">\n\n        Minimun<br>{{report.component.min_temp(report) | number: \'1.2-2\'}}ºC\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-8 offset-2>\n\n      <button ion-button outline small [attr.color]="set_button_color(\'medium_temp\')" (click)="set_temperature(\'medium_temp\')">\n\n        Average<br>{{report.component.medium_temp(report) | number: \'1.2-2\'}}ºC\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-8 offset-2>\n\n      <button ion-button outline small [attr.color]="set_button_color(\'max_temp\')" (click)="set_temperature(\'max_temp\')">\n\n        Maximun<br>{{report.component.max_temp(report) | number: \'1.2-2\'}}ºC\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\components\picture-slide\picture-slide.component.html"*/
        })
    ], ReportPictureSlideComponent);
    return ReportPictureSlideComponent;
}());

//# sourceMappingURL=picture-slide.component.js.map

/***/ }),
/* 601 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportErrorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportErrorsComponent = /** @class */ (function () {
    function ReportErrorsComponent() {
        this.errors = [];
        this.on_change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    Object.defineProperty(ReportErrorsComponent.prototype, "form", {
        set: function (form) {
            var _this = this;
            if (!!this._form)
                return;
            this._form = form;
            form.valueChanges.subscribe(function (ev) {
                _this.on_change.emit(form);
                _this.update();
            });
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    ;
    ReportErrorsComponent.prototype.get = function () {
        return this._form;
    };
    ReportErrorsComponent.prototype.understood = function () {
        this.page.view = 'form';
    };
    ReportErrorsComponent.prototype.update = function () {
        var _this = this;
        this.errors = [];
        Object.keys(this._form.controls).forEach(function (key) {
            var controlErrors = _this._form.controls[key].errors;
            if (controlErrors != null) {
                Object.keys(controlErrors).forEach(function (error) {
                    _this.errors.push({
                        key: key,
                        error: error,
                        message: Array.from(document.getElementsByName(key))[1].attributes["data-val-" + error].value
                    });
                });
            }
        });
        return this;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgForm */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgForm */]])
    ], ReportErrorsComponent.prototype, "form", null);
    ReportErrorsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'report-errors',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\components\errors\report-errors.component.html"*/'<ion-col col-12 no-padding *ngIf="!!errors?.length">\n  <ion-title col-12>Warnings</ion-title>\n  <!-- <p>Report contains error, resuelva los errores para poder realizar el cálculo.</p> -->\n  <ul>\n    <li *ngFor="let e of errors">\n      {{e.message}}\n    </li>\n  </ul>\n  <!-- <button (tap)="understood()" style="margin-top: 2rem" offset-3 col-6 block ion-button small outline color="danger">Understood</button> -->\n</ion-col>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\components\errors\report-errors.component.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], ReportErrorsComponent);
    return ReportErrorsComponent;
}());

//# sourceMappingURL=report-errors.component.js.map

/***/ }),
/* 602 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const_report_const__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projects_projects__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_report_router__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__summary_summary__ = __webpack_require__(104);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { Segment } from './segment/segment.class';

var ReportsPage = /** @class */ (function (_super) {
    __extends(ReportsPage, _super);
    function ReportsPage(navCtrl, navParams, alertCtrl, service) {
        var _this = _super.call(this, navParams.get('project'), navParams.get('component'), navCtrl) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.alertCtrl = alertCtrl;
        _this.service = service;
        _this.type = "";
        _this.report_name = "";
        //public segment: Segment = new Segment();
        _this.REPORT = __WEBPACK_IMPORTED_MODULE_0__const_report_const__["a" /* REPORT */];
        _this.type = navParams.get('type') || '';
        _this.report = navParams.get('report');
        _this.report_name = navParams.get('report_name');
        //this.segment.set(this.type);
        if (!!navParams.get('to'))
            _this.navigate_to(navParams.get('to'), '');
        return _this;
    }
    ReportsPage_1 = ReportsPage;
    ReportsPage.prototype.ionViewDidLoad = function () {
        if (!this.navParams.get('message'))
            return;
        var toast = this.alertCtrl.create({
            title: null,
            message: this.navParams.get('message'),
            buttons: [{
                    text: 'OK'
                }]
        });
        toast.present();
    };
    ReportsPage.prototype.disabled_for = function (family) {
        switch (family) {
            // case 'custom':
            //   return this.component.reports.filter(r => r.path == REPORT.CUSTOM).length >= 2;
            // case 'safety':
            //   return this.component.reports.filter(r => !!r.path.match(/safety/gi)).length >= 2;
            // case 'maintenance':
            //   return this.component.reports.filter(r => !!r.path.match(/maintenance/gi)).length >= 2;
            case 'insulation':
                return this.component.reports.filter(function (r) { return !!r.path.match(/insulation/gi); }).length >= 1;
            default:
                return false;
        }
    };
    ReportsPage.prototype.open_summary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__summary_summary__["a" /* SummaryPage */], { project: this.project, parent: this });
    };
    ReportsPage.prototype.navigate_to = function (name, report_name) {
        // let page: any = null
        // let params: any = { project: this.project, parent: this, component: this.component };
        // switch (name) {
        //   default:
        //     page = ReportsPage;
        //     params.type = name;
        // }
        //this.navCtrl.push(page, params);
        this.navCtrl.push(ReportsPage_1, { type: name, project: this.project, parent: this, component: this.component, report_name: report_name });
    };
    ReportsPage.prototype.go_back = function () {
        //debugger;
        // if (!this.type)
        //   this.navigate_to_projects();
        // else if (!this.type.match(/insulation-/g))
        //   this.navigate_to('', 'insulation');
        // else
        //   this.navigate_to('', this.type);
        this.navCtrl.pop();
    };
    ReportsPage.prototype.navigate_to_projects = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__projects_projects__["a" /* ProjectsPage */], {
            project: this.project,
            parent: this.navParams.get('parent')
        });
    };
    ReportsPage = ReportsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-reports',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\reports.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton>\n\n    <ion-title>\n\n      {{project.name}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <!-- <ion-segment [(ngModel)]="segment.value">\n\n    <ion-segment-button *ngFor="let option of segment.options; let i=index" [value]="i">\n\n      {{option}}\n\n    </ion-segment-button>\n\n  </ion-segment> -->\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-grid [ngSwitch]="type" v-center style="margin-top: -1rem">\n\n    <ng-container *ngSwitchCase="\'\'">\n\n      <ion-row>\n\n        <ion-col card-container col-md-8 offset-md-2 col-12 offset-0>\n\n          <ion-card (click)="navigate_to(\'insulation\')" [class.disabled]="disabled_for(\'insulation\')">\n\n            <span svg="insulation"></span>\n\n            <h1>Insulation</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-8 offset-md-2 col-12 offset-0>\n\n          <ion-card [class.disabled]="disabled_for(\'safety\')" (click)="navigate_to(\'safety\')">\n\n            <span svg="safety"></span>\n\n            <h1>Safety</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-8 offset-md-2 col-12 offset-0>\n\n          <ion-card [class.disabled]="disabled_for(\'maintenance\')" (click)="navigate_to(\'maintenance\')">\n\n            <span svg="maintenance"></span>\n\n            <h1>Maintenance</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-8 offset-md-2 col-12 offset-0>\n\n          <ion-card [class.disabled]="disabled_for(\'custom\')" on-tap="navigate_to_report(REPORT.CUSTOM, \'Others\')">\n\n            <span svg="custom"></span>\n\n            <h1>Custom</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ng-container>\n\n\n\n    <ng-container *ngSwitchCase="\'insulation\'">\n\n      <ion-row>\n\n        <ion-col card-container col-md-8 offset-md-2 col-12 offset-0>\n\n          <ion-card on-tap="navigate_to(\'insulation-uninsulated\')">\n\n            <span svg="empty"></span>\n\n            <h1>Uninsulated</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-8 offset-md-2 col-12 offset-0>\n\n          <ion-card on-tap="navigate_to(\'insulation-insulated\')">\n\n            <span svg="empty"></span>\n\n            <h1>Insulated</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-8 offset-md-2 col-12 offset-0 *ngIf="report_name!=\'hot-surface\'">\n\n          <ion-card on-tap="navigate_to(\'insulation\', \'hot-surface\' )">\n\n            <span svg="empty"></span>\n\n            <h1>Cold Insulation</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ng-container>\n\n\n\n    <ng-container *ngSwitchCase="\'insulation-uninsulated\'">\n\n      <ion-row>\n\n        <ion-col card-container col-md-8 offset-md-2 col-12 offset-0>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.INSULATION.UNINSULATED_EQUIPMENTS.PIPE, \'Uninsulated pipe\')">\n\n            <span svg="pipe"></span>\n\n            <h1>Pipe</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-8 offset-md-2 col-12 offset-0>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.INSULATION.UNINSULATED_EQUIPMENTS.VALVE, \'Uninsulated valve\')">\n\n            <span svg="valve"></span>\n\n            <h1>Valve</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-8 offset-md-2 col-12 offset-0>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.INSULATION.UNINSULATED_EQUIPMENTS.FLANGE, \'Uninsulated flange\')">\n\n            <span svg="flange"></span>\n\n            <h1>Flange</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-8 offset-md-2 col-12 offset-0>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.INSULATION.UNINSULATED_EQUIPMENTS.SURFACE, \'Uninsulated surface\')">\n\n            <span svg="surface"></span>\n\n            <h1>Surface</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ng-container>\n\n\n\n    <ng-container *ngSwitchCase="\'insulation-insulated\'">\n\n      <ion-row>\n\n        <ion-col card-container col-md-8 offset-md-2 col-12 offset-0>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.INSULATION.INSULATED_EQUIPMENTS.PIPE, \'Insulated pipe\')">\n\n            <span svg="pipe-insulation"></span>\n\n            <h1>Pipe</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-8 offset-md-2 col-12 offset-0>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.INSULATION.INSULATED_EQUIPMENTS.SURFACE, \'Insulated surface\')">\n\n            <span svg="surface"></span>\n\n            <h1>Surface</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-8 offset-md-2 col-12 offset-0>\n\n          <ion-icon name="information-circle-outline" duration="3000" arrow tooltip="Damaged insulation and/or cladding"\n\n            positionV="top"></ion-icon>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.MANTENANCE.DAMAGED, \'Damaged\')">\n\n            <span svg="damaged-insulation"></span>\n\n            <h1>Damaged</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ng-container>\n\n\n\n    <ng-container *ngSwitchCase="\'cold-insulation\'">\n\n      <ion-row>\n\n        <ion-col card-container col-md-8 offset-md-2 col-12 offset-0>\n\n          <!-- <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.INSULATION.COLD_INSULATION.ENERGY, \'Cold energy\')"> -->\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to(\'insulation\')">\n\n            <span svg="cold"></span>\n\n            <h1>Energy</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-8 offset-md-2 col-12 offset-0>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.INSULATION.COLD_INSULATION.CONDENSATION, \'Condensation\')">\n\n            <span svg="ice-wet"></span>\n\n            <h1>Condensation</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-8 offset-md-2 col-12 offset-0>\n\n          <ion-icon name="information-circle-outline" duration="3000" arrow tooltip="Damaged insulation and/or cladding"\n\n            positionV="top"></ion-icon>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.INSULATION.COLD_INSULATION.DAMAGED, \'Damaged\')">\n\n            <span svg="damaged-insulation"></span>\n\n            <h1>Damaged</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ng-container>\n\n\n\n    <ng-container *ngSwitchCase="\'safety\'">\n\n      <ion-row>\n\n        <ion-col card-container col-md-8 offset-md-2 col-12 offset-0>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" (click)="navigate_to(\'insulation\', \'hot-surface\' )">\n\n            <span svg="hot-surface"></span>\n\n            <h1>Hot Surface</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-8 offset-md-2 col-12 offset-0>\n\n          <ion-card [class.disabled]="disabled_for(\'safety\')" on-tap="navigate_to_report(REPORT.SAFETY.FIRE_PROTECTION, \'Fire Protect\')">\n\n            <span svg="fire-protection"></span>\n\n            <h1>Fire Protection</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-8 offset-md-2 col-12 offset-0>\n\n          <ion-card [class.disabled]="disabled_for(\'safety\')" on-tap="navigate_to_report(REPORT.SAFETY.HOUSEKEEPING, \'Housekeeping\')">\n\n            <span svg="housekeeping"></span>\n\n            <h1>Housekeeping</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-8 offset-md-2 col-12 offset-0>\n\n          <ion-card [class.disabled]="disabled_for(\'safety\')" on-tap="navigate_to_report(REPORT.SAFETY.OTHER, \'Others\')">\n\n            <span svg="safety"></span>\n\n            <h1>Other</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n      <!-- <ion-row>\n\n        <ion-col  card-container col-md-3 col-sm-6 offset-md-3>\n\n          <ion-card [class.disabled]="disabled_for(\'safety\')" on-tap="navigate_to_report(REPORT.SAFETY.TRAFFIC, \'Traffic\')">\n\n            <span svg="traffic"></span>\n\n            <h1>Traffic</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        \n\n      </ion-row> -->\n\n    </ng-container>\n\n\n\n    <ng-container *ngSwitchCase="\'maintenance\'">\n\n      <ion-row>\n\n        <ion-col card-container col-md-8 offset-md-2 col-12 offset-0>\n\n          <ion-icon name="information-circle-outline" duration="3000" arrow tooltip="Damaged insulation and/or cladding"\n\n            positionV="top"></ion-icon>\n\n          <ion-card [class.disabled]="disabled_for(\'maintenance\')" on-tap="navigate_to_report(REPORT.MANTENANCE.DAMAGED, \'Damaged\')">\n\n            <span svg="damage-insulation"></span>\n\n            <h1>Damaged</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-8 offset-md-2 col-12 offset-0>\n\n          <ion-card [class.disabled]="disabled_for(\'maintenance\')" on-tap="navigate_to_report(REPORT.MANTENANCE.CONDENSATION, \'Condensation\')">\n\n            <span svg="ice-wet"></span>\n\n            <h1>Condensation</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-8 offset-md-2 col-12 offset-0>\n\n          <ion-card [class.disabled]="disabled_for(\'maintenance\')" on-tap="navigate_to_report(REPORT.MANTENANCE.LEAKAGE, \'Leakage\')">\n\n            <span svg="leakage"></span>\n\n            <h1>Leakage</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-8 offset-md-2 col-12 offset-0>\n\n          <ion-card [class.disabled]="disabled_for(\'custom\')" on-tap="navigate_to_report(REPORT.CUSTOM, \'Others\')">\n\n            <span svg="maintenance"></span>\n\n            <h1>Others</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <!-- <ion-col  card-container col-md-3 col-sm-6 offset-md-2>\n\n          <ion-card [class.disabled]="disabled_for(\'maintenance\')" on-tap="navigate_to_report(REPORT.MANTENANCE.STRUCTURAL, \'Structural\')">\n\n            <span svg="structural"></span>\n\n            <h1>Structural</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col  card-container col-md-3 col-sm-6>\n\n          <ion-card [class.disabled]="disabled_for(\'maintenance\')" on-tap="navigate_to_report(REPORT.MANTENANCE.MECHANICAL, \'Mechanical\')">\n\n            <span svg="mechanical"></span>\n\n            <h1>Mechanical</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col  card-container col-md-3 col-sm-6>\n\n            <ion-card [class.disabled]="disabled_for(\'maintenance\')" on-tap="navigate_to_report(REPORT.MANTENANCE.ELECTRICAL, \'Electrical\')">\n\n            <span svg="electrical"></span>\n\n            <h1>Electrical</h1>\n\n          </ion-card>\n\n        </ion-col> -->\n\n      </ion-row>\n\n    </ng-container>\n\n\n\n    <!-- <ng-container *ngSwitchCase="\'hot-surface\'">\n\n      <ion-row *ngIf="segment.value==0">\n\n        <ion-col card-container offset-md-3 col-md-3 col-sm-6>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.SAFETY.HOT_SURFACE.UNINSULATED_EQUIPMENTS.PIPE, \'Uninsulated pipe\')">\n\n            <span svg="pipe"></span>\n\n            <h1>Pipe</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-3 col-sm-6>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.SAFETY.HOT_SURFACE.UNINSULATED_EQUIPMENTS.VALVE, \'Uninsulated valve\')">\n\n            <span svg="valve"></span>\n\n            <h1>Valve</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col [class.disabled]="disabled_for(\'insulation\')" card-container offset-md-3 col-md-3 col-sm-6>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.SAFETY.HOT_SURFACE.UNINSULATED_EQUIPMENTS.FLANGE, \'Uninsulated flange\')">\n\n            <span svg="flange"></span>\n\n            <h1>Flange</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-3 col-sm-6>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.SAFETY.HOT_SURFACE.UNINSULATED_EQUIPMENTS.SURFACE, \'Uninsulated surface\')">\n\n            <span svg="surface"></span>\n\n            <h1>Surface</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row *ngIf="segment.value==1">\n\n        <ion-col card-container col-md-3 col-sm-6 offset-md-2>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.SAFETY.HOT_SURFACE.INSULATED_EQUIPMENTS.PIPE, \'Insulated pipe\')">\n\n            <span svg="pipe-insulation"></span>\n\n            <h1>Pipe</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-3 col-sm-6>\n\n          <ion-icon name="information-circle-outline" duration="3000" arrow tooltip="Damaged insulation and/or cladding"\n\n            positionV="top"></ion-icon>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.SAFETY.HOT_SURFACE.INSULATED_EQUIPMENTS.DAMAGED, \'Damaged\')">\n\n            <span svg="damaged-insulation"></span>\n\n            <h1>Damaged</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-3 col-sm-6>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.SAFETY.HOT_SURFACE.INSULATED_EQUIPMENTS.SURFACE, \'Insulated surface\')">\n\n            <span svg="surface"></span>\n\n            <h1>Surface</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </ng-container> -->\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-grid no-padding>\n\n    <ion-row no-padding>\n\n      <ion-col col-4 no-padding>\n\n        <button ion-button small color="light" (click)="go_back()">\n\n          <ion-icon name="arrow-back"></ion-icon>\n\n          <span hidden-xs>&nbsp;Back</span>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-4 text-center>\n\n        <tools></tools>\n\n      </ion-col>\n\n      <ion-col col-4 no-padding text-right *ngIf="!component?.id">\n\n        <button *ngIf="type==\'\'" ion-button small color="royal" on-tap="open_summary()">\n\n          <ion-icon name="document-summary"></ion-icon>\n\n          <span hidden-xs>&nbsp;Summary</span>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\reports.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__services_project_service__["a" /* ProjectService */]])
    ], ReportsPage);
    return ReportsPage;
    var ReportsPage_1;
}(__WEBPACK_IMPORTED_MODULE_5__models_report_router__["a" /* ReportRouter */]));

//# sourceMappingURL=reports.js.map

/***/ }),
/* 603 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_report_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_reports_report_generic_class__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_reports__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_messages_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services__ = __webpack_require__(14);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GenericReportPage = /** @class */ (function (_super) {
    __extends(GenericReportPage, _super);
    function GenericReportPage(navCtrl, navParams, service, alertCtrl, picture, message, keyboard) {
        var _this = _super.call(this, new __WEBPACK_IMPORTED_MODULE_3__models_reports_report_generic_class__["a" /* ReportGeneric */](navParams.data.project, navParams.data.component, navParams.data.report), navParams, navCtrl, service, alertCtrl, picture, message, keyboard) || this;
        _this.navCtrl = navCtrl;
        _this.service = service;
        _this.alertCtrl = alertCtrl;
        _this.picture = picture;
        _this.message = message;
        _this.keyboard = keyboard;
        return _this;
    }
    GenericReportPage.prototype.calculate = function () {
        this.start_changes_observer();
        if (!this.form.invalid) {
            this.save();
        }
        else {
            this.view = 'form';
        }
        return null;
    };
    GenericReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-generic-report',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\generic\generic.html"*/'<report-header [parent]="this"></report-header>\n\n<ion-content #content>\n\n  <ion-grid [hidden]="view==\'edit_picture\'" class="fixed-col">\n    <ion-row>\n      <ion-col col-12 col-md-8 no-padding>\n\n        <form novalidate #form="ngForm" [hidden]="segment!=\'input\'" (submit)="calculate()">\n          <ion-row>\n            <ion-col col-11 col-md-10>\n              <ion-item>\n                <ion-label stacked>Component/Location</ion-label>\n                <ion-input [disabled]="!editable" tabindex="1" (ionFocus)="on_focus($event)" name="location" required data-val-required="Please input Component/Location"\n                  [(ngModel)]="report.component.fields.location" type="text"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-11 col-md-10>\n              <ion-item>\n                <ion-label stacked>Summary Id</ion-label>\n                <ion-input tabindex="2" maxlength="12" (ionFocus)="on_focus($event)" name="summary_id" [(ngModel)]="report.summary_id" required data-val-required="Please input summary id"\n                  type="text"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row [hidden]="true">\n            <ion-col>\n              <ion-item>\n                <ion-input type="hidden" name="pictures" required data-val-required="Please take a picture" [(ngModel)]="picture_qty"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-11 col-md-10>\n              <ion-item>\n                <ion-label stacked>Comment</ion-label>\n                <ion-textarea rows="6" tabindex="3"  (ionFocus)="on_focus($event)" [(ngModel)]="report.comment"\n                  name="comment"></ion-textarea>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-col>\n\n      <ion-col col-12 col-md-4 no-padding>\n          <ion-row>\n              <ion-col col-12 picture-slide [parent]="this"    [report]="report" [editable]="editable"  (onStartEdit)="on_picture_start_edit($event)">\n          </ion-col>\n        </ion-row>\n        <report-errors padding #errors col-12 [hidden]="view==\'!result\' && report.result"></report-errors>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col col-12 no-padding>\n        <div report-result col-12 [parent]="this" *ngIf="view==\'result\' && (!!form && !form.invalid)"></div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <edit-picture *ngIf="view==\'edit_picture\'" [report]="report"  [picture]="editing_picture" ></edit-picture>\n\n</ion-content>\n\n<report-footer [parent]="this" [calculate_text]="\'Report\'"></report-footer>'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\generic\generic.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_report_service__["a" /* ReportService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__services__["e" /* PictureService */],
            __WEBPACK_IMPORTED_MODULE_5__services_messages_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Keyboard */]])
    ], GenericReportPage);
    return GenericReportPage;
}(__WEBPACK_IMPORTED_MODULE_4__models_reports__["a" /* BaseReportPage */]));

//# sourceMappingURL=generic.js.map

/***/ }),
/* 604 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportSurfacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_reports__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_report_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_messages_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__(14);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportSurfacePage = /** @class */ (function (_super) {
    __extends(ReportSurfacePage, _super);
    function ReportSurfacePage(navCtrl, navParams, service, alertCtrl, picture, message, keyboard, modalCtrl) {
        var _this = _super.call(this, new __WEBPACK_IMPORTED_MODULE_1__models_reports__["h" /* ReportSurface */](navParams.data.project, navParams.data.component, navParams.data.report), navParams, navCtrl, service, alertCtrl, picture, message, keyboard, modalCtrl) || this;
        _this.navCtrl = navCtrl;
        _this.service = service;
        _this.alertCtrl = alertCtrl;
        _this.picture = picture;
        _this.message = message;
        _this.keyboard = keyboard;
        _this.modalCtrl = modalCtrl;
        return _this;
    }
    ReportSurfacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-report-surface',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\surface\report-surface.component.html"*/'<report-header [parent]="this"></report-header>\n\n\n\n<ion-content #content>\n\n\n\n  <ion-grid [hidden]="view==\'edit_picture\'" class="fixed-col">\n\n    <ion-row>\n\n      <ion-col col-12 col-md-8 no-padding>\n\n        <form novalidate #form="ngForm" [hidden]="segment!=\'input\'" (submit)="calculate()">\n\n            <ion-input type="hidden" name="surface_material_range" [(ngModel)]="surface_material_range" required data-val-required="Surface material emissivity must be between 0 and 1"></ion-input>\n\n            <ion-input type="hidden" name="operational_time_range" [(ngModel)]="operational_time_range" required data-val-required="Operational time must be between 0 and 8760 hours"></ion-input>\n\n            <ion-input type="hidden" name="temp_range_diff" [(ngModel)]="temp_range_diff" required data-val-required="Surface temperature must be at least 5°C diferent than ambient temperature"></ion-input>\n\n            <ion-input type="hidden" name="surface_low" [(ngModel)]="surface_low" required data-val-required="Surface must be > 0 m"></ion-input>\n\n            <ion-input type="hidden" name="surface_temp_range" [(ngModel)]="surface_temp_range" required data-val-required="Surface temperature must be < 1000°C"></ion-input>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Component/Location</ion-label>\n\n                <ion-input [disabled]="!!report.component.validation" tabindex="1" name="location" required data-val-required="Please input Component/Location"\n\n                  [(ngModel)]="report.component.fields.location" (ionFocus)="on_focus($event)" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-12></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Operational time (hrs/yrs)</ion-label>\n\n                <ion-input [disabled]="!!report.component.validation" readonly tabindex="2" *ngIf="!!report.component.fields.operational_time_index"\n\n                  [value]="friendy_more(\'TIMES\',  report.component.fields.operational_time_index)"></ion-input>\n\n                <ion-input #before_time *ngIf="!report.component.fields.operational_time_index" [disabled]="!!report.component.validation" tabindex="3" \n\n                  required data-val-required="Please input Operational time"\n\n                  [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Operational time"\n\n                  name="operational_time" [(ngModel)]="report.component.fields.operational_time" type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <more pull-left [hidden]="!!report.component.validation" #time (change)="set_operational_time(time)" [type]="\'time\'"\n\n                modal-button></more>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-md-7 col-6 class="pr-0">\n\n              <ion-item class="pr-0">\n\n                <ion-label stacked>Surface (m<sup>2</sup>)</ion-label>\n\n                <ion-input  [disabled]="!!report.component.validation" tabindex="4" #after_time (ionFocus)="on_focus($event)" [disabled]="report.component.fields.unknow_surface"\n\n                  name="surface" required data-val-required="Please input Surface in m²" [(ngModel)]="report.component.fields.surface"\n\n                  type="tel" [(ngModel)]="surface"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-md-3 col-4 toggle-container>\n\n              <ion-item>\n\n                <ion-label stacked>Unknown</ion-label>\n\n                <ion-toggle style="padding-left:0" [(ngModel)]="report.component.fields.unknow_surface" (ionChange)="toggle_know()"\n\n                  name="unknow_surface"></ion-toggle>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <area [hidden]="unknow_surface" pull-left #area (change)="report.component.fields.surface=area.value"\n\n                modal-button />\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n              <ion-col col-10>\n\n                <ion-item>\n\n                  <ion-label stacked>Surface material [ε]</ion-label>\n\n                  <ion-input readonly tabindex="5" *ngIf="report.component.fields.surface_material_index!=0"\n\n                  [value]="friendy_more(\'MATERIALS\', report.component.fields.surface_material_index)"></ion-input>\n\n                  <ion-input #before_material *ngIf="report.component.fields.surface_material_index==0" tabindex="5" name="surface_material" \n\n                  required data-val-required="Please input Surface emissivity"\n\n                  [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Surface emissivity"\n\n                  [(ngModel)]="report.component.fields.surface_material" type="tel"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n              <ion-col col-2>\n\n                <more pull-left #material (change)="set_surface_material($event)" [type]="\'materials\'" modal-button></more>\n\n              </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-md-7 col-7 class="pr-0">\n\n              <ion-item class="pr-0">\n\n                <ion-label stacked>Surface temp<span hidden-xs>erature</span> (<sup>º</sup>C)</ion-label>\n\n                <ion-input tabindex="7" [style.visibility]="report.component.fields.unknow_surface_temp ? \'hidden\' : \'visible\'" #after_material (ionFocus)="on_focus($event)" scroll="-80" name="surface_temp"\n\n                  required data-val-required="Please Surface temperature" [pattern]="patterns.REQUIRED_NUMBER"\n\n                  data-val-pattern="Please input a valid Surface temperature" [(ngModel)]="report.component.fields.surface_temp"\n\n                  type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-md-3 col-4 toggle-container>\n\n              <ion-item>\n\n                <ion-label stacked>Unknown</ion-label>\n\n                <ion-toggle [disabled]="!!report.component.validation" [(ngModel)]="report.component.fields.unknow_surface_temp" (ionChange)="toggle_know_temp()"\n\n                  name="unknow_surface_temp"></ion-toggle>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <!-- <medium-temp #medium (change)="report.component.fields.surface_temp=medium.value" modal-button pull-left></medium-temp> -->\n\n              <medium-temp #medium [report]="report" modal-button pull-left></medium-temp>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Ambient temperature (<sup>º</sup>C)</ion-label>\n\n                <ion-input tabindex="8" (ionFocus)="on_focus($event)" scroll="-90" (keyup.enter)="on_keypress($event)"\n\n                  name="ambient_temp" [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Ambient temperature"\n\n                  required data-val-required="Please input Ambient temperature" [(ngModel)]="report.component.fields.ambient_temp"\n\n                  type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2></ion-col>\n\n          </ion-row>\n\n        </form>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-4 no-padding>\n\n        <ion-row>\n\n          <ion-col col-12 picture-slide [parent]="this" [input]="after_material" [report]="report" [editable]="editable" (onStartEdit)="on_picture_start_edit($event)">\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12 no-padding>\n\n        <div report-result col-12 [parent]="this" *ngIf="view==\'result\' && (!!form && !form.invalid)"></div>\n\n      </ion-col>\n\n      <ion-col col-12 padding>\n\n        <report-errors padding #errors col-12 *ngIf="!(view==\'!result\' && report.result)"></report-errors>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <edit-picture *ngIf="view==\'edit_picture\'" [report]="report" [picture]="editing_picture"></edit-picture>\n\n\n\n</ion-content>\n\n\n\n<report-footer [parent]="this"></report-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\surface\report-surface.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_report_service__["a" /* ReportService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__services__["e" /* PictureService */],
            __WEBPACK_IMPORTED_MODULE_4__services_messages_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */]])
    ], ReportSurfacePage);
    return ReportSurfacePage;
}(__WEBPACK_IMPORTED_MODULE_1__models_reports__["a" /* BaseReportPage */]));

//# sourceMappingURL=report-surface.component.js.map

/***/ }),
/* 605 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_reports__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportHeaderComponent = /** @class */ (function () {
    function ReportHeaderComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_reports__["a" /* BaseReportPage */])
    ], ReportHeaderComponent.prototype, "parent", void 0);
    ReportHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'report-header',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\components\header\report-header.component.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-title>\n      {{parent.report.name}}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button *ngIf="parent.view!=\'edit_picture\'" color="light" on-tap="parent.take_picture()">\n        <ion-icon name="md-camera"></ion-icon><span hidden-xs>&nbsp;Take a picture</span>\n      </button>\n      <button ion-button *ngIf="parent.view==\'edit_picture\'" color="light" on-tap="parent.delete_picture()">\n        <ion-icon name="md-trash"></ion-icon><span hidden-xs>&nbsp;Remove</span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\components\header\report-header.component.html"*/,
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        })
    ], ReportHeaderComponent);
    return ReportHeaderComponent;
}());

//# sourceMappingURL=report-header.component.js.map

/***/ }),
/* 606 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportAreaButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_area_modal_component__ = __webpack_require__(362);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportAreaButtonComponent = /** @class */ (function () {
    function ReportAreaButtonComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.value = null;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ReportAreaButtonComponent.prototype.show_modal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__report_area_modal_component__["a" /* ReportAreaModalComponent */], null, {
            cssClass: "modal-window-area",
            showBackdrop: true,
            enableBackdropDismiss: false
        });
        modal.onDidDismiss(function (v) {
            if (null === v || 'undefined' === typeof v)
                return;
            _this.value = v;
            _this.change.next(_this.value);
        });
        modal.present();
        return this;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ReportAreaButtonComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('change'),
        __metadata("design:type", Object)
    ], ReportAreaButtonComponent.prototype, "change", void 0);
    ReportAreaButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'area',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\components\area\report-area-button.component.html"*/'<div  (click)="show_modal()" tabindex="-1" with-action no-padding ion-button small color="light">\n    <ion-icon name="cube"></ion-icon>\n</div>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\components\area\report-area-button.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], ReportAreaButtonComponent);
    return ReportAreaButtonComponent;
}());

//# sourceMappingURL=report-area-button.component.js.map

/***/ }),
/* 607 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportMoreButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__const_more_more__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportMoreButtonComponent = /** @class */ (function () {
    function ReportMoreButtonComponent(actionSheetCtrl) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.value = null;
        this.index = 0;
        this.type = '';
        this.cancelable = true;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.options = {
            cancel: [{
                    text: 'Cancel',
                    role: 'cancel',
                }],
            time: __WEBPACK_IMPORTED_MODULE_2__const_more_more__["a" /* More */].TIMES,
            materials: __WEBPACK_IMPORTED_MODULE_2__const_more_more__["a" /* More */].MATERIALS,
            co2: __WEBPACK_IMPORTED_MODULE_2__const_more_more__["a" /* More */].CO2,
            currencies: __WEBPACK_IMPORTED_MODULE_2__const_more_more__["a" /* More */].CURRENCIES,
            measures: __WEBPACK_IMPORTED_MODULE_2__const_more_more__["a" /* More */].MEASURES
            // "€": More.MEASURES["€"],
            // "$": More.MEASURES["$"],
            // "£": More.MEASURES["£"]
        };
    }
    ReportMoreButtonComponent.prototype.show_options = function () {
        var _this = this;
        var buttons = this.options[this.type].map(function (b) {
            return ({
                text: b[0],
                handler: function () {
                    // setTimeout(() => {
                    //   const _elem = (this.type == 'time')
                    //   ? document.querySelector('input[name="surface"]') || document.querySelector('input[name="nominal_diameter"]')
                    //   : document.querySelector('input[name="surface_temp"]');
                    //   if (!!_elem) {
                    //     _elem.dispatchEvent(new FocusEvent('focus'));
                    //     //(<any>_elem).focus();
                    //     //setTimeout(()=>document.querySelector('.input-has-focus').getElementsByTagName('input')[0].focus(), 100);
                    //     //(<any>_elem).select();
                    //   }
                    //   }, 1000);
                    _this.value = b[1];
                    _this.index = b[2];
                    _this.change.next({ value: b[1], index: b[2] });
                }
            });
        });
        if (!!this.cancelable) {
            buttons = buttons.concat(this.options.cancel);
        }
        var actionSheet = this.actionSheetCtrl.create({
            buttons: buttons,
            cssClass: 'action-width-45'
        });
        actionSheet.present();
        return actionSheet;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ReportMoreButtonComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Number)
    ], ReportMoreButtonComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ReportMoreButtonComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ReportMoreButtonComponent.prototype, "cancelable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('change'),
        __metadata("design:type", Object)
    ], ReportMoreButtonComponent.prototype, "change", void 0);
    ReportMoreButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'more',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\components\more\more-button.component.html"*/'<div (click)="show_options()" tabindex="-1" with-action no-padding ion-button small color="light">\n    <ion-icon name="document-dropdown"></ion-icon>\n</div>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\components\more\more-button.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ReportMoreButtonComponent);
    return ReportMoreButtonComponent;
}());

//# sourceMappingURL=more-button.component.js.map

/***/ }),
/* 608 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportMediumTempButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportMediumTempButtonsComponent = /** @class */ (function () {
    function ReportMediumTempButtonsComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.show = { markers: true, pictures: true };
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ReportMediumTempButtonsComponent.prototype.show_markers = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2____["u" /* ReportTempMarkersWindowComponent */], {
            report: this.report
        }, {
            cssClass: "modal-window-markers",
            showBackdrop: true,
            enableBackdropDismiss: false
        });
        modal.onDidDismiss(function (v) {
            if (!v || !v.length)
                return;
            _this.value = eval(v.map(function (m) { return m.temperature; }).join('+')) / v.length;
            _this.change.next(_this.value);
        });
        modal.present();
        return this;
    };
    ReportMediumTempButtonsComponent.prototype.show_pictures = function () {
        return this;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])('change'),
        __metadata("design:type", Object)
    ], ReportMediumTempButtonsComponent.prototype, "change", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models__["d" /* ReportBase */])
    ], ReportMediumTempButtonsComponent.prototype, "report", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Number)
    ], ReportMediumTempButtonsComponent.prototype, "value", void 0);
    ReportMediumTempButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'medium-temp',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\components\medium-temp\medium-temp-buttons.component.html"*/'<div style="display: none" (click)="show_markers()" tabindex="-1" pull-left no-padding ion-button small color="light" class="with-action">\n  <ion-icon name="ios-pin"></ion-icon>\n</div>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\components\medium-temp\medium-temp-buttons.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], ReportMediumTempButtonsComponent);
    return ReportMediumTempButtonsComponent;
}());

//# sourceMappingURL=medium-temp-buttons.component.js.map

/***/ }),
/* 609 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportTempMarkersWindowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_marker__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scroll_to_component_class__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__const_patterns__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(16);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportTempMarkersWindowComponent = /** @class */ (function (_super) {
    __extends(ReportTempMarkersWindowComponent, _super);
    function ReportTempMarkersWindowComponent(viewCtrl, params, keyboard) {
        var _this = _super.call(this, keyboard) || this;
        _this.viewCtrl = viewCtrl;
        _this.params = params;
        _this.keyboard = keyboard;
        _this.patterns = __WEBPACK_IMPORTED_MODULE_4__const_patterns__["a" /* Patterns */];
        _this.markers = [];
        _this.flatMap = function (arr, f) { return arr.reduce(function (x, y) { return x.concat(f(y)); }, []); };
        var others_reports_markers = _this.flatten(_this.params.data.report.component.reports.filter(function (r) { return r != _this.params.data.report; })).map(function (r) { return _this.flatMap(r.pictures, (function (p) { return p.markers.map(function (m) { return ({ parent: p, marker: m, order: "2" + (m.hasValue ? 0 : 1) }); }); })); });
        var report_marker = _this.flatMap(_this.params.data.report.pictures, (function (p) { return p.markers.map(function (m) { return ({ parent: p, marker: m, order: "1" + (m.hasValue ? 0 : 1) }); }); }));
        params.data.report.component.markers = params.data.report.component.markers.concat(Array.apply(null, { length: 10 }).slice(others_reports_markers.length + report_marker.length + params.data.report.component.markers.length, 10).map(function (x) { return new __WEBPACK_IMPORTED_MODULE_1__models_marker__["a" /* Marker */](); }));
        var component_markers = params.data.report.component.markers.map(function (m) { return ({ parent: params.data.report.component, marker: m, order: "3" + (m.hasValue ? 0 : 1) }); });
        var markers = component_markers.concat(report_marker).concat(others_reports_markers);
        _this.markers = markers.sort(function (a, b) { return a.order > b.order ? 1 : -1; });
        return _this;
    }
    Object.defineProperty(ReportTempMarkersWindowComponent.prototype, "disabled", {
        get: function () {
            return this.markers.filter(function (m) { return m.hasValue; }).length === 0;
        },
        enumerable: true,
        configurable: true
    });
    // public on_focus(event: FocusEvent) {
    //   const elm = (event.currentTarget || event.target) as HTMLElement
    //   elm.closest('.scroll-content').scrollTo(0, 0);
    //   elm.closest('.scroll-content').scrollTo(0, elm.closest('ion-item').getBoundingClientRect().top - 100);
    // }
    ReportTempMarkersWindowComponent.prototype.on_focus = function (event) {
        var elm = event._elementRef.nativeElement;
        var offset = 100;
        elm.closest('.scroll-content').scrollTo(0, elm.closest('.scroll-content').scrollTop - offset);
        this.scroll(elm.closest('.scroll-content'), elm.closest('.scroll-content').scrollTop + elm.closest('ion-item').getBoundingClientRect().top - offset);
    };
    ReportTempMarkersWindowComponent.prototype.on_keypress = function (event) {
        if (event.which === 13) {
            event.currentTarget.closest('.scroll-content').scrollTo(0, 0);
            this.calculate();
        }
    };
    ReportTempMarkersWindowComponent.prototype.flatten = function (arr) {
        return [].concat.apply([], arr);
    };
    ReportTempMarkersWindowComponent.prototype.calculate = function () {
        this.markers.forEach(function (m) {
            m.parent.markers = m.parent.markers.filter(function (pm) { return pm.hasValue; });
        });
        // this.params.data.pictures.forEach((p: Picture) => p.markers = p.markers.sort(m => m.temperature).reverse());
        // this.params.data.pictures.filter((p: Picture) => !!p.picture).forEach((p: Picture) => p.markers = p.markers.filter(m => m.hasValue));
        this.viewCtrl.dismiss(this.markers.filter(function (m) { return m.hasValue; }));
        return this;
    };
    ReportTempMarkersWindowComponent.prototype.close = function () {
        this.viewCtrl.dismiss(null);
        return this;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* NgForm */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* NgForm */])
    ], ReportTempMarkersWindowComponent.prototype, "form", void 0);
    ReportTempMarkersWindowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'markers-window',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\components\medium-temp\temp-marker-window.component.html"*/'<ion-content>\n  <form novalidate #form="ngForm">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 *ngFor="let m of markers; let i=index">\n        <ion-item>\n          <ion-label stacked>P{{(i + 1).toString().padStart(2, \'0\')}}</ion-label>\n          <ion-input (ionFocus)="on_focus($event)" (keyup.enter)="on_keypress($event)" [ngModelOptions]="{standalone: true}" [name]="\'point_\' + i" \n          [(ngModel)]="m.marker.temperature" \n          [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid temperature" \n          type="tel"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n</ion-grid>\n</form>\n</ion-content>\n<ion-footer>\n  <ion-grid no-padding>\n    <ion-row no-padding>\n      <!-- <ion-col col-6 no-padding>\n        <button (click)="close()" ion-button small block pull-right color="light">Cancel</button>\n      </ion-col> -->\n      <ion-col col-12 no-padding text-center>\n        <button id="submit-button" (click)="calculate()" ion-button small color="royal">Report</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\components\medium-temp\temp-marker-window.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Keyboard */]])
    ], ReportTempMarkersWindowComponent);
    return ReportTempMarkersWindowComponent;
}(__WEBPACK_IMPORTED_MODULE_3__scroll_to_component_class__["a" /* ScrollToComponent */]));

//# sourceMappingURL=temp-marker-window.component.js.map

/***/ }),
/* 610 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__const_images_non_picture__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_reports__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__const_images__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportResultComponent = /** @class */ (function () {
    function ReportResultComponent() {
        this.show_advise = true;
        this.unknow_surface = false;
        this.is_validation = false;
        this.images = __WEBPACK_IMPORTED_MODULE_3__const_images__["a" /* IMAGES */];
        this.zoom = .5;
        this.bars = {
            current: {
                losses: [0, 0],
            },
            basic: {
                savings: [0, 0],
                losses: [0, 0]
            },
            economical: {
                savings: [0, 0],
                losses: [0, 0]
            }
        };
        this.scale = {
            min: 0,
            medium: 0,
            max: 0
        };
    }
    Object.defineProperty(ReportResultComponent.prototype, "first_picture", {
        get: function () {
            return this.parent.report.pictures.length ? this.parent.report.pictures[0].picture : __WEBPACK_IMPORTED_MODULE_1__const_images_non_picture__["a" /* NON_PICTURE */];
        },
        enumerable: true,
        configurable: true
    });
    ReportResultComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        setTimeout(function () { return _this.initialize_values(); }, 250);
    };
    ReportResultComponent.prototype.go_top = function () {
        document.getElementsByClassName('scroll-content')[3].scrollTo(0, 0);
    };
    ReportResultComponent.prototype.initialize_values = function () {
        this.is_validation = !!this.parent
            && !!this.parent.report
            && !!this.parent.report.component
            && !!this.parent.report.component.validation;
        var height = 200;
        this.unknow_surface = this.parent.report.component && this.parent.report.component.fields.unknow_surface;
        var _max = this.parent.report.result.headLost.power;
        if (!!this.parent.report.result.previousHeadLost.power && this.parent.report.result.previousHeadLost.power > this.parent.report.result.headLost.power)
            _max = this.parent.report.result.previousHeadLost.power;
        this.scale.max = this.up(_max / 100);
        this.scale.medium = Math.ceil(this.scale.max / 1.5);
        this.scale.min = Math.ceil(this.scale.max / 2);
        this.scale.max;
        this.currency = this.currency || this.parent.report.component.project.currency;
        if (!this.parent.report.result.previousHeadLost.power)
            this.set_values(height);
        else
            this.set_validation_values(height);
    };
    ReportResultComponent.prototype.set_validation_values = function (height) {
        this.bars.current.losses = [
            this.get_delta() * (this.parent.report.result.previousHeadLost.power / 100 * height / (this.scale.max)),
            this.get_delta() * this.down(this.parent.report.result.previousHeadLost.money)
        ];
        this.bars.basic.losses = [
            (this.parent.report.result.headLost.power / 100 * height / (this.scale.max)),
            this.up(this.parent.report.result.headLost.money)
        ];
        this.bars.basic.savings = [
            (this.bars.current.losses[0] - this.bars.basic.losses[0]),
            (this.bars.current.losses[1] - this.bars.basic.losses[1])
        ];
    };
    ReportResultComponent.prototype.get_delta = function () {
        return !this.parent.report || !this.parent.report.component
            ? 1
            : !Number(this.parent.report.component.fields.unknow_surface_temp)
                ? 1
                : Number(this.parent.report.component.fields.unknow_surface_temp);
    };
    ReportResultComponent.prototype.set_values = function (height) {
        this.bars.current.losses = [
            (this.parent.report.result.headLost.power / 100 * height / (this.scale.max)),
            this.down(this.parent.report.result.headLost.money)
        ];
        this.bars.basic.losses = [
            (this.parent.report.result.headLost.power - this.parent.report.result.savingPotentialMin.power) / 100 * height / (this.scale.max),
            this.up(this.parent.report.result.headLost.money - this.parent.report.result.savingPotentialMin.money)
            //this.up(this.parent.report.result.savingPotentialMin.money)
        ];
        this.bars.basic.savings = [
            (this.bars.current.losses[0] - this.bars.basic.losses[0]),
            (this.bars.current.losses[1] - this.bars.basic.losses[1])
        ];
        this.bars.economical.losses = [
            (this.parent.report.result.headLost.power - this.parent.report.result.savingPotentialMax.power) / 100 * height / (this.scale.max),
            //this.up(this.bars.current.losses[1] - this.parent.report.result.savingPotentialMax.money)
            this.up(this.parent.report.result.headLost.money - this.parent.report.result.savingPotentialMax.money)
        ];
        this.bars.economical.savings = [
            (this.bars.current.losses[0] - this.bars.economical.losses[0]),
            (this.bars.current.losses[1] - this.bars.economical.losses[1])
        ];
        //if (!this.parent.report.result.annual_saving_from || !this.parent.report.result.annual_saving_from) {
        this.parent.report.result.annual_saving_from = this.bars.basic.savings[1];
        this.parent.report.result.annual_saving_to = this.bars.economical.savings[1];
        //}
    };
    Object.defineProperty(ReportResultComponent.prototype, "show_savings", {
        get: function () {
            return !!this.parent.report.annual_saving
                && (!!this.parent.report.component && !this.parent.report.component.validation)
                && !(Number(String(this.parent.report.result.annual_saving_from || 0)) < 0
                    && Number(String(this.parent.report.result.annual_saving_to || 0)) < 0
                    && !!this.parent.report.name.match(/Insulated/));
        },
        enumerable: true,
        configurable: true
    });
    ReportResultComponent.prototype.down = function (value) {
        return value > 1000 ? Math.floor((value) / 100) * 100 : Math.floor((value) / 10) * 10;
    };
    ReportResultComponent.prototype.up = function (value) {
        return value > 1000 ? Math.ceil((value) / 100) * 100 : Math.ceil((value) / 10) * 10;
    };
    ReportResultComponent.prototype.do_zoom = function (value) {
        this.zoom += value;
    };
    Object.defineProperty(ReportResultComponent.prototype, "saving_lower", {
        get: function () {
            return this.parent.report.result.annual_saving_from < 0
                || this.parent.report.result.annual_saving_to < 0;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_reports__["a" /* BaseReportPage */])
    ], ReportResultComponent.prototype, "parent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ReportResultComponent.prototype, "show_advise", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ReportResultComponent.prototype, "currency", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ReportResultComponent.prototype, "bars", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ReportResultComponent.prototype, "scale", void 0);
    ReportResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[report-result]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\components\result\report-result.component.html"*/'<div class="view-port">\n\n<ion-grid id="result-grid" #resultGrid>\n\n  <ion-row *ngIf="show_savings">\n\n      <ion-col text-center col-12 no-padding>\n\n        <h5 *ngIf="!saving_lower" class="annual-saving-message"><small><strong>Annual saving potential</strong></small>\n\n          from {{(parent.report.result.annual_saving_from || 0) | number}} {{currency}} to {{(parent.report.result.annual_saving_to || 0)| number}} {{currency}}\n\n        </h5>\n\n        <h5 *ngIf="!!saving_lower" class="annual-saving-message">\n\n          Insulation System Ok\n\n        </h5>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col text-center style="overflow: auto">\n\n      <table [style.zoom]="zoom" cellspacing="0" cellpadding="0" border="0" class="result-chart" [class.saving_lower]="saving_lower">\n\n        <thead>\n\n          <tr>\n\n            <th><div style="width: 25px; height: 1px"></div></th>\n\n            <th><div style="width: 0; height: 1px"></div></th>\n\n            <th><div style="width: 130px; height: 1px"></div></th>\n\n            <th><div style="width: 130px; height: 1px"></div></th>\n\n            <th><div style="width: 130px; height: 1px"></div></th>\n\n          </tr>\n\n          <tr>\n\n            <th class="scale" colspan="2" style="height: 20px; border-right: 1px solid #7f7f7f; text-align: right">\n\n              <span>{{scale.max / 10 | number: \'1.1-1\'}}</span>\n\n            </th>\n\n            <th class="dashed-right">\n\n              <!-- <div class="x-title white">Current</div> -->\n\n            </th>\n\n            <th>\n\n              <div *ngIf="!is_validation" class="x-title" style="color: #4b71c1; margin-top: 18px">basic<br/>insulation</div>\n\n              <div *ngIf="!!is_validation" class="x-title" style="color: #4b71c1; margin-top: 18px">after<br>insulation</div>\n\n            </th>\n\n            <th *ngIf="!is_validation">\n\n              <div class="x-title" style="color: #6daf3d; margin-top: 18px">good<br/>insulation</div>\n\n            </th>\n\n          </tr>\n\n        </thead>\n\n        <tbody>\n\n          <tr>\n\n            <td class="section" rowspan="2"><strong>Annual Consumption</strong></td>\n\n            <td class="scale"></td>\n\n            <td class="b-line bar" rowspan="2">\n\n                <div style.height="{{bars.current.losses[0]}}px" class="gray">\n\n                  <span class="x-price">\n\n                    <strong style="display: block; padding: 0!important; text-align: center">{{!is_validation ? \'current\' : \'before\'}}</strong>\n\n                    {{bars.current.losses[1] | number: \'1.0-0\'}}{{currency}}<span *ngIf="unknow_surface">/m<sup>2</sup></span>\n\n                  </span>\n\n                </div>\n\n            </td>\n\n            <td class="b-line bar dashed-left" rowspan="2">\n\n              <div style.height="{{bars.basic.losses[0]}}px" class="blue pattern">\n\n                <span style="color: #4b71c1">{{bars.basic.losses[1] | number: \'1.0-0\'}}{{currency}}<span *ngIf="unknow_surface">/m<sup>2</sup></span></span>\n\n              </div>\n\n            </td>\n\n            <td *ngIf="!is_validation" class="b-line bar" rowspan="2">\n\n              <div style.height="{{bars.economical.losses[0]}}px" class="green pattern">\n\n                <span style="color: #6daf3d">{{bars.economical.losses[1] | number: \'1.0-0\'}}{{currency}}<span *ngIf="unknow_surface">/m<sup>2</sup></span></span>\n\n              </div>\n\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td class="scale">\n\n              <span>{{scale.min / 10 | number: \'1.1-1\'}} </span><span class="kwh">MWh<span *ngIf="unknow_surface">/m<sup>2</sup></span></span>\n\n            </td>\n\n          </tr>\n\n        </tbody>\n\n        <tbody class="inverse">\n\n          <tr>\n\n            <td class="section" rowspan="2"><strong>Annual Saving</strong></td>\n\n            <td class="scale inverse">\n\n              <span>{{scale.min / 10 | number: \'1.1-1\'}}</span>\n\n            </td>\n\n            <td class="bar" rowspan="2">\n\n                <div style.height="{{bars.current.losses[0]}}px" class="gray opaque">\n\n                    <span class="x-price">\n\n                      <strong style="display: block; padding: 0!important; text-align: center">{{!is_validation ? \'current\' : \'before\'}}</strong>\n\n                      {{bars.current.losses[1] | number: \'1.0-0\'}}{{currency}}<span *ngIf="unknow_surface">/m<sup>2</sup></span>\n\n                    </span>\n\n                  </div>\n\n            </td>\n\n            <td class="bar dashed-left" rowspan="2">\n\n              <div style.height="{{bars.basic.savings[0]}}px" class="blue">\n\n                <span style.marginTop="{{bars.basic.savings[0] + 3}}px">{{bars.basic.savings[1] | number: \'1.0-0\'}}{{currency}}<span *ngIf="unknow_surface">/m<sup>2</sup></span></span>\n\n              </div>\n\n            </td>\n\n            <td *ngIf="!is_validation" class="bar" rowspan="2">\n\n              <div style.height="{{bars.economical.savings[0]}}px" class="green">\n\n                <span style.marginTop="{{bars.economical.savings[0] + 3}}px">{{bars.economical.savings[1] | number:\n\n                  \'1.0-0\'}}{{currency}}<span *ngIf="unknow_surface">/m<sup>2</sup></span></span>\n\n              </div>\n\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td class="scale inverse"></td>\n\n          </tr>\n\n          <tr>\n\n            <th colspan="2" style="border-right: 1px solid #7f7f7f; height: 20px; text-align: right; padding-right: 5px">\n\n              <span>{{scale.max / 10 | number: \'1.1-1\'}}</span>\n\n            </th>\n\n            <th colspan="3"></th>\n\n          </tr>\n\n        </tbody>\n\n        <tfoot>\n\n          <tr>\n\n            <th colspan="2" style="padding-top: 2rem">\n\n                <img src="{{images.CO2}}">\n\n            </th>\n\n            <th style="padding-top: 2rem" class="color">{{parent.report.result.co2[!is_validation ? 0 : 3 ] | number: !show_advise ? \'1.2-2\' : \'1.2-2\'}} t<span *ngIf="unknow_surface">/m<sup>2</sup></span></th>\n\n            <th style="padding-top: 2rem" class="color">{{parent.report.result.co2[!is_validation ? 1: 0] | number: !show_advise ? \'1.2-2\' : \'1.2-2\'}} t<span *ngIf="unknow_surface">/m<sup>2</sup></span></th>\n\n            <th style="padding-top: 2rem" *ngIf="!is_validation" class="color">{{parent.report.result.co2[2] | number: !show_advise ? \'1.2-2\' : \'1.2-2\'}} t<span *ngIf="unknow_surface">/m<sup>2</sup></span></th>\n\n          </tr>\n\n        </tfoot>\n\n      </table>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row *ngIf="!!show_advise && 1 == 2 && !parent.report.component.validation">\n\n    <ion-col class="result-advise">\n\n        <h4>\n\n          <ion-icon name="information-circle-outline"></ion-icon>\n\n          {{parent.report.result.advise}}\n\n      </h4>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col col-12 text-right>\n\n      <button *ngIf="!!show_advise" ion-button id="scroll_button" outline (click)="parent.content.scrollToTop(500)">\n\n        <strong>^</strong>\n\n        <strong>TOP</strong>\n\n      </button>\n\n      <div class="row zoom-buttons">\n\n        <button ion-button small icon-only clear color="royal" [disabled]="zoom==3" (click)="do_zoom(.1)">\n\n          <ion-icon name="add-circle-outline"></ion-icon>\n\n        </button>\n\n        <button ion-button small icon-only clear color="royal" [disabled]="zoom==.5" (click)="do_zoom(-.1)">\n\n          <ion-icon name="remove-circle-outline"></ion-icon>\n\n        </button>\n\n      </div>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n\n\n</div>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\components\result\report-result.component.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ReportResultComponent);
    return ReportResultComponent;
}());

//# sourceMappingURL=report-result.component.js.map

/***/ }),
/* 611 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportValvePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_reports__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_report_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_messages_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__(14);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportValvePage = /** @class */ (function (_super) {
    __extends(ReportValvePage, _super);
    function ReportValvePage(navCtrl, navParams, service, alertCtrl, picture, message, keyboard, modalCtrl) {
        var _this = _super.call(this, new __WEBPACK_IMPORTED_MODULE_1__models_reports__["i" /* ReportValve */](navParams.data.project, navParams.data.component, navParams.data.report), navParams, navCtrl, service, alertCtrl, picture, message, keyboard, modalCtrl) || this;
        _this.navCtrl = navCtrl;
        _this.service = service;
        _this.alertCtrl = alertCtrl;
        _this.picture = picture;
        _this.message = message;
        _this.keyboard = keyboard;
        _this.modalCtrl = modalCtrl;
        _this.unknow_length = true;
        return _this;
    }
    ReportValvePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-report-valve',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\valve\report-valve.component.html"*/'<report-header [parent]="this"></report-header>\n\n\n\n<ion-content #content>\n\n\n\n  <ion-grid [hidden]="view==\'edit_picture\'" class="fixed-col">\n\n    <ion-row>\n\n      <ion-col col-12 col-md-8 no-padding>\n\n        <form novalidate #form="ngForm" [hidden]="segment!=\'input\'" (submit)="calculate()">\n\n          <ion-input type="hidden" name="surface_material_range" [(ngModel)]="surface_material_range" required data-val-required="Surface material emissivity must be between 0 and 1"></ion-input>\n\n          <ion-input type="hidden" name="operational_time_range" [(ngModel)]="operational_time_range" required data-val-required="Operational time must be between 0 and 8760 hours"></ion-input>\n\n          <ion-input type="hidden" name="temp_range_diff" [(ngModel)]="temp_range_diff" required data-val-required="Surface temperature must be at least 5°C diferent than ambient temperature"></ion-input>\n\n          <ion-input type="hidden" name="diameter_low" [(ngModel)]="diameter_low" required data-val-required="Diameter must be > 0mm"></ion-input>\n\n          <ion-input type="hidden" name="length_low" [(ngModel)]="length_low" required data-val-required="Length must be > 0 m"></ion-input>\n\n          <ion-input type="hidden" name="items_low" [(ngModel)]="items_low" required data-val-required="Number of items must be > 0"></ion-input>\n\n          <ion-input type="hidden" name="surface_temp_range" [(ngModel)]="surface_temp_range" required data-val-required="Surface temperature must be < 1000°C"></ion-input>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Component/Location</ion-label>\n\n                <ion-input [disabled]="!!report.component.validation" tabindex="1" (ionFocus)="on_focus($event)" name="location" required data-val-required="Please input Component/Location"\n\n                  [(ngModel)]="report.component.fields.location" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Number of items</ion-label>\n\n                <ion-input [disabled]="!!report.component.validation" tabindex="3" (ionFocus)="on_focus($event)" name="number" required data-val-required="Please input Number of items"\n\n                  [(ngModel)]="report.component.fields.number"  type="tel" [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Number of items"  min="0"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Operational time (hrs/yrs)</ion-label>\n\n                <ion-input [disabled]="!!report.component.validation" readonly tabindex="2" *ngIf="!!report.component.fields.operational_time_index"\n\n                  [value]="friendy_more(\'TIMES\',  report.component.fields.operational_time_index)"></ion-input>\n\n                <ion-input #before_time *ngIf="!report.component.fields.operational_time_index" [disabled]="!!report.component.validation" tabindex="3" \n\n                  required data-val-required="Please input Operational time"\n\n                  [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Operational time"\n\n                  name="operational_time" [(ngModel)]="report.component.fields.operational_time" type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <more pull-left [hidden]="!!report.component.validation" #time (change)="set_operational_time(time)" [type]="\'time\'"\n\n                modal-button></more>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Diameter (mm)</ion-label>\n\n                <ion-input [disabled]="!!report.component.validation" tabindex="5" #after_time (ionFocus)="on_focus($event)" name="nominal_diameter" required\n\n                  data-val-required="Please input Diameter" [(ngModel)]="report.component.fields.nominal_diameter"  type="tel" [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Diameter" ></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item class="edit_surface_material" [class.editable]="edit_surface_material">\n\n                <ion-label stacked>Surface material [ε]</ion-label>\n\n                <ion-input readonly tabindex="6" *ngIf="!!report.component.fields.surface_material_index"\n\n                [value]="friendy_more(\'MATERIALS\', report.component.fields.surface_material_index)"></ion-input>\n\n                <ion-input #before_material *ngIf="!report.component.fields.surface_material_index" tabindex="6" name="surface_material" \n\n                required data-val-required="Please input Surface emissivity"\n\n                [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Surface emissivity"\n\n                [(ngModel)]="report.component.fields.surface_material" type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <more pull-left #material (change)="set_surface_material(material)" [type]="\'materials\'" modal-button></more>\n\n            </ion-col>\n\n        </ion-row>\n\n          <ion-row>\n\n            <ion-col col-md-7 col-7 class="pr-0">\n\n              <ion-item class="pr-0">\n\n                <ion-label stacked>Surface temp<span hidden-xs>erature</span> (<sup>º</sup>C)</ion-label>\n\n                <ion-input tabindex="7" [style.visibility]="report.component.fields.unknow_surface_temp ? \'hidden\' : \'visible\'"\n\n                  #after_material (ionFocus)="on_focus($event)" scroll="-80" name="surface_temp" required\n\n                  data-val-required="Please input Surface temperature" [pattern]="patterns.REQUIRED_NUMBER"\n\n                  data-val-pattern="Please input a valid  Surface temperature" [(ngModel)]="report.component.fields.surface_temp"\n\n                  type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-md-3 col-4 toggle-container>\n\n              <ion-item>\n\n                <ion-label stacked>Unknown</ion-label>\n\n                <ion-toggle [disabled]="!!report.component.validation" style="padding-left:0" [(ngModel)]="report.component.fields.unknow_surface_temp"\n\n                  (ionChange)="toggle_know_temp()" name="unknow_surface_temp"></ion-toggle>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <!-- <medium-temp #medium (change)="report.component.fields.surface_temp=medium.value" modal-button pull-left></medium-temp> -->\n\n              <medium-temp #medium [report]="report" modal-button pull-left></medium-temp>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Ambient temperature (<sup>º</sup>C)</ion-label>\n\n                <ion-input tabindex="8" (ionFocus)="on_focus($event)" (keyup.enter)="on_keypress($event)" name="ambient_temp"\n\n                  [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Ambient temperature"\n\n                  required data-val-required="Please input Ambient temperature" [(ngModel)]="report.component.fields.ambient_temp"\n\n                  type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2></ion-col>\n\n          </ion-row>\n\n        </form>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-4 no-padding>\n\n        <ion-row>\n\n          <ion-col col-12 picture-slide [parent]="this" [input]="after_material" [report]="report" [editable]="editable" (onStartEdit)="on_picture_start_edit($event)">\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12 no-padding>\n\n        <div report-result col-12 [parent]="this" *ngIf="view==\'result\' && (!!form && !form.invalid)"></div>\n\n      </ion-col>\n\n      <ion-col col-12 padding>\n\n        <report-errors padding #errors col-12 [hidden]="view==\'!result\' && report.result"></report-errors>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <edit-picture *ngIf="view==\'edit_picture\'" [report]="report" [picture]="editing_picture"></edit-picture>\n\n\n\n</ion-content>\n\n\n\n<report-footer [parent]="this"></report-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\valve\report-valve.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_report_service__["a" /* ReportService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__services__["e" /* PictureService */],
            __WEBPACK_IMPORTED_MODULE_4__services_messages_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */]])
    ], ReportValvePage);
    return ReportValvePage;
}(__WEBPACK_IMPORTED_MODULE_1__models_reports__["a" /* BaseReportPage */]));

//# sourceMappingURL=report-valve.component.js.map

/***/ }),
/* 612 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportInsulatedSurfacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_reports__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_report_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_messages_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__(14);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportInsulatedSurfacePage = /** @class */ (function (_super) {
    __extends(ReportInsulatedSurfacePage, _super);
    function ReportInsulatedSurfacePage(navCtrl, navParams, service, alertCtrl, picture, message, keyboard) {
        var _this = _super.call(this, new __WEBPACK_IMPORTED_MODULE_1__models_reports__["f" /* ReportInsulatedSurface */](navParams.data.project, navParams.data.component, navParams.data.report), navParams, navCtrl, service, alertCtrl, picture, message, keyboard) || this;
        _this.navCtrl = navCtrl;
        _this.service = service;
        _this.alertCtrl = alertCtrl;
        _this.picture = picture;
        _this.message = message;
        _this.keyboard = keyboard;
        _this.unknow_surface = false;
        return _this;
    }
    ReportInsulatedSurfacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-report-surface',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\isurface\report-isurface.component.html"*/'<report-header [parent]="this"></report-header>\n\n\n\n<ion-content #content>\n\n\n\n  <ion-grid [hidden]="view==\'edit_picture\'" class="fixed-col">\n\n    <ion-row>\n\n      <ion-col col-12 col-md-8 no-padding>\n\n        <form novalidate #form="ngForm" [hidden]="segment!=\'input\'" (submit)="calculate()">\n\n          <ion-input type="hidden" name="compare_temp" [(ngModel)]="compare_insulated_temp" required data-val-required="Please check temperatures"></ion-input>\n\n          <ion-input type="hidden" name="surface_temp_abs" [(ngModel)]="surface_temp_abs" required data-val-required="It is an un-insulated system, change selection"></ion-input>\n\n          <ion-input type="hidden" name="surface_material_range" [(ngModel)]="surface_material_range" required data-val-required="Surface material emissivity must be between 0 and 1"></ion-input>\n\n          <ion-input type="hidden" name="operational_time_range" [(ngModel)]="operational_time_range" required data-val-required="Operational time must be between 0 and 8760 hours"></ion-input>\n\n          <ion-input type="hidden" name="temp_range_diff" [(ngModel)]="temp_range_diff" required data-val-required="Surface temperature must be at least 5°C diferent than ambient temperature"></ion-input>\n\n          <ion-input type="hidden" name="surface_low" [(ngModel)]="surface_low" required data-val-required="Surface must be > 0 m"></ion-input>\n\n          <ion-input type="hidden" name="surface_temp_range" [(ngModel)]="surface_temp_range" required data-val-required="Surface temperature must be < 1000°C"></ion-input>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Component/Location</ion-label>\n\n                <ion-input [disabled]="!!report.component.validation" tabindex="1" (ionFocus)="on_focus($event)" name="location" required data-val-required="Please input Component/Location"\n\n                  [(ngModel)]="report.component.fields.location" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-12></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Operational time (hrs/yrs)</ion-label>\n\n                <ion-input [disabled]="!!report.component.validation" readonly tabindex="2" *ngIf="!!report.component.fields.operational_time_index"\n\n                  [value]="friendy_more(\'TIMES\',  report.component.fields.operational_time_index)"></ion-input>\n\n                <ion-input #before_time *ngIf="!report.component.fields.operational_time_index" [disabled]="!!report.component.validation" tabindex="2" \n\n                  required data-val-required="Please input Operational time"\n\n                  [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Operational time"\n\n                  name="operational_time" [(ngModel)]="report.component.fields.operational_time" type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <more pull-left [hidden]="!!report.component.validation" #time (change)="set_operational_time(time)" [type]="\'time\'"\n\n                modal-button></more>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-md-7 col-6 class="pr-0">\n\n              <ion-item class="pr-0">\n\n                <ion-label stacked>Surface (m<sup>2</sup>)</ion-label>\n\n                <ion-input #after_time tabindex="3" (ionFocus)="on_focus($event)" [disabled]="report.component.fields.unknow_surface"\n\n                  name="surface" required data-val-required="Please input Surface in m²" [(ngModel)]="report.component.fields.surface"\n\n                  type="tel" [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Surface" [(ngModel)]="surface"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-md-3 col-4 toggle-container>\n\n              <ion-item>\n\n                <ion-label stacked>Unknown</ion-label>\n\n                <ion-toggle [disabled]="!!report.component.validation" style="padding-left:0" [(ngModel)]="report.component.fields.unknow_surface" (ionChange)="toggle_know()" name="unknow_surface"></ion-toggle>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <area [hidden]="unknow_surface" pull-left #area (change)="report.component.fields.surface=area.value"\n\n                modal-button />\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item class="edit_surface_material" [class.editable]="edit_surface_material">\n\n                <ion-label stacked>Surface material [ε]</ion-label>\n\n                <ion-input readonly tabindex="5" *ngIf="!!report.component.fields.surface_material_index"\n\n                [value]="friendy_more(\'MATERIALS\', report.component.fields.surface_material_index)"></ion-input>\n\n                <ion-input #before_material *ngIf="!report.component.fields.surface_material_index" tabindex="5" name="surface_material" \n\n                required data-val-required="Please input Surface emissivity"\n\n                [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Surface emissivity"\n\n                [(ngModel)]="report.component.fields.surface_material" type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <more pull-left #material (change)="set_surface_material(material)" [type]="\'materials\'" modal-button></more>\n\n            </ion-col>\n\n        </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Surface temperature (<sup>º</sup>C)</ion-label>\n\n                <ion-input #after_material tabindex="7" (ionFocus)="on_focus($event)" name="surface_temp" [pattern]="patterns.REQUIRED_NUMBER"\n\n                  data-val-pattern="Please input a valid Surface temperature" required data-val-required="Please input Surface temperature"\n\n                  [(ngModel)]="report.component.fields.surface_temp" type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <medium-temp #medium [report]="report" modal-button pull-left></medium-temp>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Medium temperature (<sup>º</sup>C)</ion-label>\n\n                <ion-input tabindex="8" (ionFocus)="on_focus($event)" name="medium_temp" [pattern]="patterns.REQUIRED_NUMBER"\n\n                  data-val-pattern="Please input a valid Medium temperature" required data-val-required="Please input Medium temperature"\n\n                  [(ngModel)]="report.component.fields.medium_temp" type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Ambient temperature (<sup>º</sup>C)</ion-label>\n\n                <ion-input tabindex="9" (ionFocus)="on_focus($event)" (keyup.enter)="on_keypress($event)" name="ambient_temp"\n\n                  [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Ambient temperature"\n\n                  required data-val-required="Please input Ambient temperature" [(ngModel)]="report.component.fields.ambient_temp"\n\n                  type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2></ion-col>\n\n          </ion-row>\n\n        </form>\n\n      </ion-col>\n\n\n\n      <ion-col col-12 col-md-4 no-padding>\n\n        <ion-row>\n\n          <ion-col col-12 picture-slide [parent]="this" [input]="after_material" [report]="report" [editable]="editable" (onStartEdit)="on_picture_start_edit($event)">\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12 no-padding>\n\n        <div report-result col-12 [parent]="this" *ngIf="view==\'result\' && (!!form && !form.invalid)"></div>\n\n      </ion-col>\n\n      <ion-col col-12 padding>\n\n        <report-errors padding #errors col-12 [hidden]="view==\'!result\' && report.result"></report-errors>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <edit-picture *ngIf="view==\'edit_picture\'" [report]="report" [picture]="editing_picture"></edit-picture>\n\n\n\n</ion-content>\n\n\n\n<report-footer [parent]="this"></report-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\isurface\report-isurface.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_report_service__["a" /* ReportService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__services__["e" /* PictureService */],
            __WEBPACK_IMPORTED_MODULE_4__services_messages_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Keyboard */]])
    ], ReportInsulatedSurfacePage);
    return ReportInsulatedSurfacePage;
}(__WEBPACK_IMPORTED_MODULE_1__models_reports__["a" /* BaseReportPage */]));

//# sourceMappingURL=report-isurface.component.js.map

/***/ }),
/* 613 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportInsulatedPipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_reports__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_report_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_reports_report_ipipe_class__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_messages_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services__ = __webpack_require__(14);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReportInsulatedPipePage = /** @class */ (function (_super) {
    __extends(ReportInsulatedPipePage, _super);
    function ReportInsulatedPipePage(navCtrl, navParams, service, alertCtrl, picture, message, keyboard) {
        var _this = _super.call(this, new __WEBPACK_IMPORTED_MODULE_4__models_reports_report_ipipe_class__["a" /* ReportInsulatedPipe */](navParams.data.project, navParams.data.component, navParams.data.report), navParams, navCtrl, service, alertCtrl, picture, message, keyboard) || this;
        _this.navCtrl = navCtrl;
        _this.service = service;
        _this.alertCtrl = alertCtrl;
        _this.picture = picture;
        _this.message = message;
        _this.keyboard = keyboard;
        return _this;
    }
    ReportInsulatedPipePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-report-pipe',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\ipipe\report-ipipe.component.html"*/'<report-header [parent]="this"></report-header>\n\n\n\n<ion-content #content>\n\n\n\n  <ion-grid [hidden]="view==\'edit_picture\'" class="fixed-col">\n\n    <ion-row>\n\n      <ion-col col-12 col-md-8 no-padding>\n\n        <form novalidate #form="ngForm" [hidden]="segment!=\'input\'" (submit)="calculate()">\n\n          <ion-input type="hidden" name="compare_temp" [(ngModel)]="compare_insulated_temp" required data-val-required="Please check temperatures"></ion-input>\n\n          <ion-input type="hidden" name="surface_temp_abs" [(ngModel)]="surface_temp_abs" required data-val-required="It is an un-insulated system, change selection"></ion-input>\n\n          <ion-input type="hidden" name="surface_material_range" [(ngModel)]="surface_material_range" required data-val-required="Surface material emissivity must be between 0 and 1"></ion-input>\n\n          <ion-input type="hidden" name="operational_time_range" [(ngModel)]="operational_time_range" required data-val-required="Operational time must be between 0 and 8760 hours"></ion-input>\n\n          <ion-input type="hidden" name="temp_range_diff" [(ngModel)]="temp_range_diff" required data-val-required="Surface temperature must be at least 5°C diferent than ambient temperature"></ion-input>\n\n          <ion-input type="hidden" name="diameter_low" [(ngModel)]="diameter_low" required data-val-required="Diameter must be > 0mm"></ion-input>\n\n          <ion-input type="hidden" name="length_low" [(ngModel)]="length_low" required data-val-required="Length must be > 0 m"></ion-input>\n\n          <ion-input type="hidden" name="surface_temp_range" [(ngModel)]="surface_temp_range" required data-val-required="Surface temperature must be < 1000°C"></ion-input>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Component/Location</ion-label>\n\n                <ion-input [disabled]="!!report.component.validation" tabindex="1" (ionFocus)="on_focus($event)" name="location"\n\n                  required data-val-required="Please input Component/Location" [(ngModel)]="report.component.fields.location"\n\n                  type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Operational time (hrs/yrs)</ion-label>\n\n                <ion-input [disabled]="!!report.component.validation" readonly tabindex="2" *ngIf="!!report.component.fields.operational_time_index"\n\n                  [value]="friendy_more(\'TIMES\',  report.component.fields.operational_time_index)"></ion-input>\n\n                <ion-input #before_time *ngIf="!report.component.fields.operational_time_index" [disabled]="!!report.component.validation" tabindex="2" \n\n                  required data-val-required="Please input Operational time"\n\n                  [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Operational time"\n\n                  name="operational_time" [(ngModel)]="report.component.fields.operational_time" type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <more pull-left [hidden]="!!report.component.validation" #time (change)="set_operational_time(time)" [type]="\'time\'"\n\n                modal-button></more>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-sm-7 col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Diameter (mm)</ion-label>\n\n                <ion-input #after_time tabindex="3" (ionFocus)="on_focus($event)" name="nominal_diameter" required\n\n                  data-val-required="Please input Diameter" [(ngModel)]="report.component.fields.nominal_diameter"\n\n                  type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-sm-4 col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Length (m)</ion-label>\n\n                <ion-input tabindex="4" (ionFocus)="on_focus($event)" name="number" required data-val-required="Please input Length"\n\n                  [(ngModel)]="report.component.fields.length" type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item class="edit_surface_material" [class.editable]="edit_surface_material">\n\n                <ion-label stacked>Surface material [ε]</ion-label>\n\n                <ion-input readonly tabindex="6" *ngIf="!!report.component.fields.surface_material_index"\n\n                [value]="friendy_more(\'MATERIALS\', report.component.fields.surface_material_index)"></ion-input>\n\n                <ion-input #before_material *ngIf="!report.component.fields.surface_material_index" tabindex="6" name="surface_material" \n\n                required data-val-required="Please input Surface emissivity"\n\n                [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Surface emissivity"\n\n                [(ngModel)]="report.component.fields.surface_material" type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <more pull-left #material (change)="set_surface_material(material)" [type]="\'materials\'" modal-button></more>\n\n            </ion-col>\n\n        </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Surface temperature (<sup>º</sup>C)</ion-label>\n\n                <ion-input #after_material tabindex="7" (ionFocus)="on_focus($event)" name="surface_temp" [pattern]="patterns.REQUIRED_NUMBER"\n\n                  data-val-pattern="Please input a valid Surface temperature" required data-val-required="Please input Surface temperature"\n\n                  [(ngModel)]="report.component.fields.surface_temp" type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <medium-temp #medium [report]="report" modal-button pull-left></medium-temp>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Medium temperature (<sup>º</sup>C)</ion-label>\n\n                <ion-input  tabindex="8" (ionFocus)="on_focus($event)" name="medium_temp" [pattern]="patterns.REQUIRED_NUMBER"\n\n                  data-val-pattern="Please input a valid Medium temperature" required data-val-required="Please input Medium temperature"\n\n                  [(ngModel)]="report.component.fields.medium_temp" type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Ambient temperature (<sup>º</sup>C)</ion-label>\n\n                <ion-input tabindex="9" (ionFocus)="on_focus($event)" (keyup.enter)="on_keypress($event)" name="ambient_temp"\n\n                  [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Ambient temperature"\n\n                  required data-val-required="Please input Ambient temperature" [(ngModel)]="report.component.fields.ambient_temp"\n\n                  type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2></ion-col>\n\n          </ion-row>\n\n        </form>\n\n      </ion-col>\n\n\n\n      <ion-col col-12 col-md-4 no-padding>\n\n        <ion-row>\n\n          <ion-col col-12 picture-slide [parent]="this" [input]="after_material" [report]="report" [editable]="editable" (onStartEdit)="on_picture_start_edit($event)">\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12 no-padding>\n\n        <div report-result col-12 [parent]="this" *ngIf="view==\'result\' && (!!form && !form.invalid)"></div>\n\n      </ion-col>\n\n      <ion-col col-12 padding>\n\n        <report-errors padding #errors col-12 [hidden]="view==\'!result\' && report.result"></report-errors>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <edit-picture *ngIf="view==\'edit_picture\'" [report]="report" [picture]="editing_picture"></edit-picture>\n\n\n\n</ion-content>\n\n\n\n<report-footer [parent]="this"></report-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\ipipe\report-ipipe.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_report_service__["a" /* ReportService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__services__["e" /* PictureService */],
            __WEBPACK_IMPORTED_MODULE_5__services_messages_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Keyboard */]])
    ], ReportInsulatedPipePage);
    return ReportInsulatedPipePage;
}(__WEBPACK_IMPORTED_MODULE_1__models_reports__["a" /* BaseReportPage */]));

//# sourceMappingURL=report-ipipe.component.js.map

/***/ }),
/* 614 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportDamagedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_reports__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_report_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_messages_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__(14);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportDamagedPage = /** @class */ (function (_super) {
    __extends(ReportDamagedPage, _super);
    function ReportDamagedPage(navCtrl, navParams, service, alertCtrl, picture, message, keyboard) {
        var _this = _super.call(this, new __WEBPACK_IMPORTED_MODULE_1__models_reports__["c" /* ReportDamaged */](navParams.data.project, navParams.data.component, navParams.data.report), navParams, navCtrl, service, alertCtrl, picture, message, keyboard) || this;
        _this.navCtrl = navCtrl;
        _this.service = service;
        _this.alertCtrl = alertCtrl;
        _this.picture = picture;
        _this.message = message;
        _this.keyboard = keyboard;
        _this.damaged_cladding = [!1, !1, !1, !1, !1, !1];
        _this.damaged_insulation = [!1, !1, !1, !1, !1, !1];
        if (!!_this.report.component.fields.damaged_cladding_selection)
            _this.damaged_cladding[_this.report.component.fields.damaged_cladding_selection] = !0;
        if (!!_this.report.component.fields.damaged_insulation_selection)
            _this.damaged_insulation[_this.report.component.fields.damaged_insulation_selection] = !0;
        return _this;
    }
    ReportDamagedPage.prototype.set_damaged_cladding = function (index, event) {
        var _this = this;
        this.report.component.fields.damaged_cladding_selection = Boolean(event.currentTarget.children[1].attributes['aria-checked'].value) ? index : null;
        this.damaged_cladding.forEach(function (c, i) {
            _this.damaged_cladding[i] = i == _this.report.component.fields.damaged_cladding_selection;
        });
    };
    ReportDamagedPage.prototype.set_damaged_insulation = function (index, event) {
        var _this = this;
        this.report.component.fields.damaged_insulation_selection = Boolean(event.currentTarget.children[1].attributes['aria-checked'].value) ? index : null;
        this.damaged_insulation.forEach(function (c, i) {
            _this.damaged_insulation[i] = i == _this.report.component.fields.damaged_insulation_selection;
        });
    };
    ReportDamagedPage.prototype.calculate = function () {
        this.start_changes_observer();
        if (!this.form.invalid) {
            //this.view = 'result';
            this.save();
        }
        else {
            this.view = 'form';
        }
        return null;
    };
    ReportDamagedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-report-damaged',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\damaged\report-damaged.component.html"*/'<report-header [parent]="this"></report-header>\n\n\n\n<ion-content #content>\n\n\n\n  <ion-grid [hidden]="view==\'edit_picture\'" class="fixed-col">\n\n    <ion-row>\n\n      <ion-col col-12 col-md-8 no-padding>\n\n        <form novalidate #form="ngForm" [hidden]="segment!=\'input\'" (submit)="calculate()">\n\n          <ion-row>\n\n            <ion-col col-11 col-md-10>\n\n              <ion-item>\n\n                <ion-label stacked>Component/Location</ion-label>\n\n                <ion-input [disabled]="!editable" tabindex="1" (ionFocus)="on_focus($event)" name="location" required\n\n                  data-val-required="Please input Component/Location" [(ngModel)]="report.component.fields.location"\n\n                  type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-11 col-md-10></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-11 col-md-10>\n\n              <ion-item>\n\n                <ion-label stacked>Summary Id</ion-label>\n\n                <ion-input tabindex="2" (ionFocus)="on_focus($event)" name="summary_id" [(ngModel)]="report.summary_id"\n\n                  required data-val-required="Please input summary id" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row [hidden]="true">\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-input type="hidden" name="pictures" required data-val-required="Please take a picture" [(ngModel)]="picture_qty"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-11 col-md-10>\n\n              <ion-item>\n\n                <ion-label stacked style="margin-top: 1.4rem;color: #999;">Damaged cladding</ion-label>\n\n                <ion-toggle [(ngModel)]="report.component.fields.damaged_cladding" name="damaged_cladding"></ion-toggle>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row *ngIf="report.component.fields.damaged_cladding">\n\n            <ion-col col-10 offset-1 col-md-9>\n\n              <ion-list radio-group [(ngModel)]="report.component.fields.damaged_cladding_selection" name="radio-cladding">\n\n                <ion-item>\n\n                  <ion-label>Lack of cladding</ion-label>\n\n                  <ion-checkbox value="1"></ion-checkbox>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                  <ion-label>Foot traffic/Dent</ion-label>\n\n                  <ion-checkbox value="2"></ion-checkbox>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                  <ion-label>Highly corred</ion-label>\n\n                  <ion-checkbox value="3"></ion-checkbox>\n\n                </ion-item>\n\n              </ion-list>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n\n\n          <ion-row>\n\n            <ion-col col-11 col-md-10>\n\n              <ion-item>\n\n                <ion-label stacked style="margin-top: 1.4rem;color: #999;">Damaged insulation</ion-label>\n\n                <ion-toggle [(ngModel)]="report.component.fields.damaged_insulation" name="damaged_insulation"></ion-toggle>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row *ngIf="report.component.fields.damaged_insulation">\n\n            <ion-col col-10 col-md-9 offset-1>\n\n              <ion-list radio-group [(ngModel)]="report.component.fields.damaged_insulation_selection" name="radio-cladding">\n\n                <ion-item>\n\n                  <ion-label>Lack of insulation</ion-label>\n\n                  <ion-checkbox value="1"></ion-checkbox>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                  <ion-label>Wet insulation</ion-label>\n\n                  <ion-checkbox value="2"></ion-checkbox>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                  <ion-label>Old insulation</ion-label>\n\n                  <ion-checkbox value="3"></ion-checkbox>\n\n                </ion-item>\n\n\n\n                \n\n              </ion-list>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <ion-col col-11 col-md-10>\n\n              <ion-item>\n\n                <ion-label stacked>Comments</ion-label>\n\n                <ion-input type="text" tabindex="8" (ionFocus)="on_focus($event)" (keyup.enter)="on_keypress($event)"\n\n                  name="Comments" [(ngModel)]="report.component.fields.damaged_comment"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n        </form>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-4 no-padding>\n\n        <ion-row>\n\n          <ion-col col-12 picture-slide [parent]="this"   [report]="report" [editable]="false" (onStartEdit)="on_picture_start_edit($event)"></ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n    \n\n    <report-errors padding #errors col-12 [hidden]="view==\'!result\' && report.result"></report-errors>\n\n<!--\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-row col-12 p-4 *ngIf="view==\'result\' && (!!form && !form.invalid)" mx-3>\n\n          <ion-col col-8 class="damaged-result" *ngIf="report.component.fields.damaged_cladding">Cladding holds\n\n            insualtion in place an protect it from external agents ensuring its performance.</ion-col>\n\n          <ion-col col-12 class="damaged-result" *ngIf="report.component.fields.damaged_cladding_selection == 1">The\n\n            insulation is not protected anymore, water or other agent could get in.</ion-col>\n\n          <ion-col col-12 class="damaged-result" *ngIf="report.component.fields.damaged_cladding_selection == 2">There\n\n            is a reduction of the insulation thickness, higher energy conmsuption. The system is not watertight\n\n            anhmore.</ion-col>\n\n          <ion-col col-12 class="damaged-result" *ngIf="report.component.fields.damaged_cladding_selection == 3">Probably,\n\n            there is a leak above in the system. Jacketing as a protecting layer gets weaker.</ion-col>\n\n\n\n          <ion-col col-8 class="damaged-result" *ngIf="report.component.fields.damaged_insulation">Any damage in the\n\n            insulant leads to reduce its thermal performance and to increase the energy consumption.</ion-col>\n\n          <ion-col col-12 class="damaged-result" *ngIf="report.component.fields.damaged_insulation_selection == 1">A\n\n            lack of insulation in a system means an easy way out/in for the heat increasing the energy consumption.</ion-col>\n\n          <ion-col col-12 class="damaged-result" *ngIf="report.component.fields.damaged_insulation_selection == 2">Moisture\n\n            inside the insulation structure can reduce the thermal performance up to 50% and increase the risk of CUI.</ion-col>\n\n          <ion-col col-12 class="damaged-result" *ngIf="report.component.fields.damaged_insulation_selection == 3">Heat\n\n            cycles and external condition changes affect the estructure of the insulant reducing its performance.</ion-col>\n\n\n\n        </ion-row>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n    -->\n\n  </ion-grid>\n\n\n\n  <edit-picture *ngIf="view==\'edit_picture\'" [report]="report" [picture]="editing_picture"></edit-picture>\n\n\n\n</ion-content>\n\n\n\n<report-footer [parent]="this" [calculate_text]="\'Validate\'"></report-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\damaged\report-damaged.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_report_service__["a" /* ReportService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__services__["e" /* PictureService */],
            __WEBPACK_IMPORTED_MODULE_4__services_messages_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Keyboard */]])
    ], ReportDamagedPage);
    return ReportDamagedPage;
}(__WEBPACK_IMPORTED_MODULE_1__models_reports__["a" /* BaseReportPage */]));

//# sourceMappingURL=report-damaged.component.js.map

/***/ }),
/* 615 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportCondensationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_reports__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_report_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_messages_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__(14);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportCondensationPage = /** @class */ (function (_super) {
    __extends(ReportCondensationPage, _super);
    function ReportCondensationPage(navCtrl, navParams, service, alertCtrl, picture, message, keyboard) {
        var _this = _super.call(this, new __WEBPACK_IMPORTED_MODULE_1__models_reports__["b" /* ReportCondensation */](navParams.data.project, navParams.data.component, navParams.data.report), navParams, navCtrl, service, alertCtrl, picture, message, keyboard) || this;
        _this.navCtrl = navCtrl;
        _this.service = service;
        _this.alertCtrl = alertCtrl;
        _this.picture = picture;
        _this.message = message;
        _this.keyboard = keyboard;
        return _this;
    }
    ReportCondensationPage.prototype.calculate = function () {
        this.start_changes_observer();
        if (!this.form.invalid) {
            //this.view = 'result';
            this.save();
        }
        else {
            this.view = 'form';
        }
        return null;
    };
    ReportCondensationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-report-condensation',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\condensation\report-condensation.component.html"*/'<report-header [parent]="this"></report-header>\n\n\n\n<ion-content #content>\n\n\n\n  <ion-grid [hidden]="view==\'edit_picture\'">\n\n    <ion-row>\n\n      <ion-col col-12 col-md-8 no-padding>\n\n        <form novalidate #form="ngForm" [hidden]="segment!=\'input\'" (submit)="calculate()">\n\n          <ion-row>\n\n            <ion-col col-11 col-md-10>\n\n              <ion-item>\n\n                <ion-label stacked>Component/Location</ion-label>\n\n                <ion-input tabindex="1" (ionFocus)="on_focus($event)" name="location" required data-val-required="Please input Component/Location"\n\n                  [(ngModel)]="report.component.fields.location" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row [hidden]="true">\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-input type="hidden" name="pictures" required data-val-required="Please take a picture" [(ngModel)]="picture_qty"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-11 col-md-10>\n\n              <ion-item>\n\n                <ion-label stacked>Summary Id</ion-label>\n\n                <ion-input tabindex="2" (ionFocus)="on_focus($event)" name="summary_id" [(ngModel)]="report.summary_id"\n\n                  required data-val-required="Please input summary id" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-11 col-md-10>\n\n              <ion-item>\n\n                <ion-label stacked style="margin-top: 1.4rem;color: #999;">Ice block</ion-label>\n\n                <ion-toggle tabindex="7" [(ngModel)]="report.component.fields.condensation_ice_block" name="ice_block"></ion-toggle>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-11 col-md-10>\n\n              <ion-item>\n\n                <ion-label stacked style="margin-top: 1.4rem;color: #999;">Wet surface</ion-label>\n\n                <ion-toggle tabindex="8" [(ngModel)]="report.component.fields.condensation_wet_surface" name="wet_surface"></ion-toggle>\n\n              </ion-item>\n\n            </ion-col>\n\n            <!-- <ion-col col-6>\n\n              <ion-item>\n\n                <ion-label stacked style="margin-top: 1.4rem;color: #999;">Others</ion-label>\n\n                <ion-toggle tabindex="9" [(ngModel)]="report.component.fields.condensation_other" name="other"></ion-toggle>\n\n              </ion-item>\n\n            </ion-col> -->\n\n          </ion-row>\n\n          <ion-row>\n\n              <ion-col col-11 col-md-10>\n\n                <ion-item>\n\n                  <ion-label stacked>Comments</ion-label>\n\n                  <ion-input type="text" tabindex="8" (ionFocus)="on_focus($event)" (keyup.enter)="on_keypress($event)"\n\n                    name="Comments" [(ngModel)]="report.component.fields.condensation_comment"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n  \n\n        </form>\n\n      </ion-col>\n\n      <ion-col col-12 col-md-4 no-padding>\n\n        <ion-row>\n\n            <ion-col col-12 picture-slide [parent]="this" [report]="report" [editable]="false"  (onStartEdit)="on_picture_start_edit($event)"></ion-col>\n\n        </ion-row>\n\n        <!-- <ion-row col-12 p-4 *ngIf="view==\'result\' && (!!form && !form.invalid)">\n\n          <ion-col col-4 img-container [style.backgroundImage]="\'url(\'+ first_picture +\')\'"></ion-col>\n\n          <ion-col col-8 class="damaged-result">Insulation in cold systems is critical not only for energy efficiency but for safety and process requirements.</ion-col>\n\n          <ion-col col-8 class="damaged-result" *ngIf="report.component.fields.condensation_ice_block">Ice block indicates the failure of the insulation system (or the lack of it). A part from the potential energy savings, its weight represents a risk for the installation break down.</ion-col>\n\n          <ion-col col-8 class="damaged-result" *ngIf="report.component.fields.condensation_wet_surface">Condensations indicates the need of a better insulation solution to bring the surface temperature above the dew point.</ion-col>\n\n        </ion-row> -->\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n\n\n    <report-errors padding #errors col-12 [hidden]="view==\'!result\' && report.result"></report-errors>\n\n\n\n  </ion-grid>\n\n\n\n  <edit-picture *ngIf="view==\'edit_picture\'" [report]="report" [picture]="editing_picture"></edit-picture>\n\n\n\n</ion-content>\n\n\n\n<report-footer [parent]="this" [calculate_text]="\'Validate\'"></report-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\condensation\report-condensation.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_report_service__["a" /* ReportService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__services__["e" /* PictureService */],
            __WEBPACK_IMPORTED_MODULE_4__services_messages_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Keyboard */]])
    ], ReportCondensationPage);
    return ReportCondensationPage;
}(__WEBPACK_IMPORTED_MODULE_1__models_reports__["a" /* BaseReportPage */]));

//# sourceMappingURL=report-condensation.component.js.map

/***/ }),
/* 616 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportLeakage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_reports_leakage_report_leakage_component__ = __webpack_require__(363);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ReportLeakage = /** @class */ (function (_super) {
    __extends(ReportLeakage, _super);
    //public path = REPORT.MANTENANCE.LEAKAGE;
    function ReportLeakage(project, component, item) {
        var _this = _super.call(this, project, component, item) || this;
        _this.project = project;
        _this.component = component;
        _this.page = __WEBPACK_IMPORTED_MODULE_1__pages_reports_leakage_report_leakage_component__["a" /* ReportLeakagePage */];
        _this.name = "Leakage";
        return _this;
    }
    return ReportLeakage;
}(__WEBPACK_IMPORTED_MODULE_0__report_base__["a" /* ReportBase */]));

//# sourceMappingURL=report-leakage.js.map

/***/ }),
/* 617 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KnownTempPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KnownTempPage = /** @class */ (function () {
    function KnownTempPage(viewCtrl, params, alertCtrl) {
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.medium_temp = 0;
        this.gas = '1';
        this.medium_temp = params.get('medium_temp') || '';
    }
    KnownTempPage.prototype.isNumber = function () {
        return this.medium_temp.toString() != '' && !isNaN(this.medium_temp);
    };
    KnownTempPage.prototype.close = function () {
        this.viewCtrl.dismiss(null);
        return this;
    };
    KnownTempPage.prototype.ok = function () {
        // if (this.gas == '1') {
        //   this.alertCtrl.create({
        //     message: 'The properties of the gas affect the heat transfer calculation. Outputs are just an estimation, please contact your insulation expert to have a more accurate calculation',
        //     buttons: ['Agree']
        //   }).present();
        // };
        this.viewCtrl.dismiss({ temp: this.medium_temp, gas: Number(this.gas) });
        return this;
    };
    KnownTempPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.medium_temp_field.setFocus();
        }, 500);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('medium_temp_field'),
        __metadata("design:type", Object)
    ], KnownTempPage.prototype, "medium_temp_field", void 0);
    KnownTempPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'unknown-temp',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\unknown-temp\unknown-temp.component.html"*/'<ion-content>\n\n  <form>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label stacked>Medium temperature (<sup>º</sup>C)</ion-label>\n\n            <ion-input tabindex="1" #medium_temp_field name="medium_temp" required data-val-required="Please input Medium temperature"\n\n              data-val-pattern="Please input a valid Medium temperature" [(ngModel)]="medium_temp" type="tel"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-item border-none style="min-height: auto">\n\n            <ion-label stacked style="color:#999!important">Medium</ion-label>\n\n          </ion-item>\n\n          <ion-list radio-group [(ngModel)]="gas" name="state">\n\n            <ion-item border-none>\n\n              <ion-label>Liquid</ion-label>\n\n              <ion-radio value="1"></ion-radio>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>Gas</ion-label>\n\n              <ion-radio value="0.7"></ion-radio>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-grid no-padding>\n\n    <ion-row no-padding>\n\n      <ion-col col-6 no-padding>\n\n        <button (click)="close()" tabindex="200" ion-button small color="light">Cancel</button>\n\n      </ion-col>\n\n      <ion-col col-6 no-padding>\n\n        <button (click)="ok()" tabindex="201" [disabled]="!isNumber()" ion-button small pull-right>Next</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\unknown-temp\unknown-temp.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], KnownTempPage);
    return KnownTempPage;
}());

//# sourceMappingURL=unknown-temp.component.js.map

/***/ }),
/* 618 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_init_init__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__ = __webpack_require__(367);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, orientation) {
        this.orientation = orientation;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_init_init__["a" /* InitPage */];
        platform.ready().then(function () {
            //throw 'error'
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.hide();
            splashScreen.hide();
            // this.orientation.lock(this.orientation.ORIENTATIONS.PORTRAIT)
            // this.orientation.onChange().subscribe(() => {
            //   document.getElementsByTagName('html')[0].className = !!this.orientation.type.match(/landscape/i) ? 'landscape' : '';
            // })
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 619 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DownloadPage = /** @class */ (function () {
    function DownloadPage(file, service) {
        var _this = this;
        this.file = file;
        this.service = service;
        this.files = [];
        this.pictures = [];
        // for (let i = 1; i < 11; i++) {
        //   this.files.push(new Document({ 
        //     file: `Files ${i}`, 
        //     folder: `${this.file.working_folder}${i}`,
        //   }));
        // }
        //this.file.get_documents().then(d => this.files = d);
        service.get_all().then(function (projects) {
            projects.forEach(function (p) {
                _this.files = _this.files.concat(p.documents);
                p.components.forEach(function (c) { return c.reports.forEach(function (r) { return _this.pictures = _this.pictures.concat(r.pictures); }); });
            });
        });
    }
    DownloadPage.prototype.create_file = function () {
        this.service.create_database().then(function (blob) {
            console.log(blob);
            //   var a = document.createElement("a"),
            //     url = URL.createObjectURL(blob);
            //   a.href = url;
            //   a.download = 'db.zip';
            //   a.click();
            //   setTimeout(function () {
            //     window.URL.revokeObjectURL(url);
            //   }, 0);
        });
    };
    DownloadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-download',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\download\download.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>Database</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n        <ion-col text-center col-6><h3>Files</h3></ion-col>\n        <ion-col text-center col-6><h3>Pictures</h3></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n          <ion-list padding>\n              <ion-item-sliding *ngFor="let f of files">\n                <ion-item>\n                  <ion-icon name="document-{{f.extension}}" color="gray" item-start></ion-icon>\n                  {{f.file}}<br>\n                  <small>{{f.folder}}</small>\n                </ion-item>\n                <ion-item-options side="right">\n                  <button ion-button color="danger" on-tap="remove_file(f)">\n                    Remove\n                    <ion-icon name="ios-trash-outline"></ion-icon>\n                  </button>\n                </ion-item-options>\n              </ion-item-sliding>\n          </ion-list>\n      </ion-col>\n      <ion-col col-6>\n        <ion-list padding>\n          <ion-item-sliding *ngFor="let f of pictures">\n            <ion-item>\n              <!-- <ion-icon name="document-picture" color="gray" item-start></ion-icon> -->\n              <img src="{{f.picture}}" style="float: left; width: 72px; height: auto; margin-right: 1rem">\n              {{f.file}}<br>\n              <small>{{f.folder}}</small>\n            </ion-item>\n            <ion-item-options side="right">\n              <button ion-button color="danger" on-tap="remove_file(f)">\n                Remove\n                <ion-icon name="ios-trash-outline"></ion-icon>\n              </button>\n            </ion-item-options>\n          </ion-item-sliding>\n      </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n\n<ion-footer>\n  <ion-grid no-padding>\n    <ion-row no-padding>\n      <ion-col col-6 no-padding>\n        <button tabindex="22" ion-button small color="light" (click)="navCtrl.pop()">\n          <ion-icon name="arrow-back"></ion-icon>&nbsp;Back\n        </button>\n      </ion-col>\n      <ion-col col-6 text-right no-padding>\n        <button tabindex="22" ion-button small color="royal" (click)="download()">\n            Download now\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\download\download.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services__["a" /* FileService */], __WEBPACK_IMPORTED_MODULE_1__services__["f" /* ProjectService */]])
    ], DownloadPage);
    return DownloadPage;
}());

//# sourceMappingURL=download.js.map

/***/ }),
/* 620 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projects_project_page_base__ = __webpack_require__(175);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactPage = /** @class */ (function (_super) {
    __extends(ContactPage, _super);
    function ContactPage(navCtrl, navParams, alertCtrl, service, keyboard) {
        var _this = _super.call(this, alertCtrl, service, keyboard) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.alertCtrl = alertCtrl;
        _this.service = service;
        _this.keyboard = keyboard;
        _this.project = new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* Project */]();
        _this.original_project = navParams.get("project");
        _this.project = new __WEBPACK_IMPORTED_MODULE_2__models__["c" /* Project */](_this.original_project);
        return _this;
    }
    ContactPage.prototype.save = function () {
        this.original_project = this.project;
        this.service.save(this.project);
        this.navCtrl.pop();
    };
    ContactPage.prototype.after_delete = function () {
        this.navCtrl.pop();
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n      <ion-buttons start>\n        <button ion-button color="royal" (click)="after_delete()">Cancel</button>\n      </ion-buttons>\n    <ion-title>\n      {{ project.name }}\n    </ion-title>\n    <ion-buttons end>\n        <button ion-button color="royal" (click)="save()">OK</button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n\n        <ion-item>\n          <ion-label>Name</ion-label>\n          <ion-input type="text" [(ngModel)]="project.name"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Description</ion-label>\n          <ion-textarea rows="5" [(ngModel)]="project.desc"></ion-textarea>\n        </ion-item>\n\n      </ion-list>\n\n      <div padding>\n          <button (click)="delete_project(project)" ion-button color="danger" block>Remove</button>\n      </div>\n</ion-content>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__services__["f" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Keyboard */]])
    ], ContactPage);
    return ContactPage;
}(__WEBPACK_IMPORTED_MODULE_4__projects_project_page_base__["a" /* ProjectPageBase */]));

//# sourceMappingURL=contact.js.map

/***/ }),
/* 621 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectReportsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(182);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectReportsPage = /** @class */ (function () {
    function ProjectReportsPage(navCtrl, navParams, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.interval = null;
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true
        };
        this.base64Image = '';
        this.project = navParams.get("project");
    }
    ProjectReportsPage.prototype.goto_component = function (component) {
        // this.navCtrl.push(ComponentTypePage, {
        //   component: component,
        //   caller: this
        // });
    };
    ProjectReportsPage.prototype.back = function () {
        //this.appCtrl.getRootNav().setRoot(HomeTabsPage, {}, {animate: true, direction: 'forward'});
    };
    // on_touch_start(component: ReportCategory){
    //   this.interval = setTimeout(()=>component.show_long_desc = !component.show_long_desc, 1500)
    // }
    ProjectReportsPage.prototype.on_touch_end = function () {
        clearTimeout(this.interval);
    };
    ProjectReportsPage.prototype.takePicture = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    ProjectReportsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{project.name}}\n    </ion-title>\n    <!-- <ion-buttons end>\n      <button ion-button icon-only (click)="takePicture()">\n        <ion-icon name="camera"></ion-icon>\n      </button>\n    </ion-buttons> -->\n    <!-- <ion-buttons start>\n        <button ion-button color="royal" (click)="back()">\n          <ion-icon name="arrow-back"></ion-icon>&nbsp;Back\n        </button>\n      </ion-buttons> -->\n    <ion-buttons end>\n      <button ion-button color="royal" (click)="takePicture()">Docs</button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content id="page2">\n    <ion-list style="margin-top: 1.5rem" *ngFor="let cg of project.components_groups">\n      <ion-list-header>\n        <h2>{{cg.name}}</h2>\n      </ion-list-header>\n      <ion-item (touchend)="on_touch_end()" (touchstart)="on_touch_start(c)" *ngFor="let c of cg.components" (click)="goto_component(c)">\n        <ion-thumbnail item-start>\n          <img [src]="c.icon">\n        </ion-thumbnail>\n        <h2>{{c.name}}</h2>\n        <p style="white-space: normal">{{c.show_long_desc ? c.long_desc : c.short_desc}}</p>\n        <ion-badge item-end>{{c.reports.length}}</ion-badge>\n      </ion-item>\n    </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
    ], ProjectReportsPage);
    return ProjectReportsPage;
}());

//# sourceMappingURL=home.js.map

/***/ }),
/* 622 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectPage = /** @class */ (function () {
    function ProjectPage(navCtrl, navParams, alertCtrl, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.segment = 'reports';
        this.filter = '';
        this.project = navParams.get("project");
    }
    ProjectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-project',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\projects\project.html"*/'<ion-header [ngSwitch]="segment">\n  <ion-navbar *ngSwitchCase="\'reports\'">\n    <ion-title>\n      {{project.name}}\n    </ion-title>\n  </ion-navbar>\n  <ion-navbar *ngSwitchCase="\'summary\'">\n    <ion-title>\n      {{project.name}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content [ngSwitch]="segment">\n  <ion-grid *ngSwitchCase="\'reports\'" [ngSwitch]="filter">\n    <ion-row *ngSwitchCase="\'\'">\n      <ion-col text-center col-6 col-xs-12>\n        <ion-card>\n          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            viewBox="0 0 480 480" style="enable-background:new 0 0 480 480;" xml:space="preserve">\n            <path d="M480,252h-64v-32h-48v16h-32v16h-24v-24h16v-48h-56v-32h26.576l23.864-16H456V76H317.6l-24.328,16H272V76\n              c0-13.255-10.745-24-24-24h-16c-13.255,0-24,10.745-24,24v16h-24v56h24v32h-56v48h16v24h-24v-16h-32v-16H64v32H0v144h64v32h48v-16\n              h32v-16h192v16h32v16h48v-32h64V252z M224,76c0-4.418,3.582-8,8-8h16c4.418,0,8,3.582,8,8v16h-32V76z M200,132v-24h8h64h26.064\n              L322.4,92H440v24H317.6l-23.896,16H272h-64H200z M224,148h32v32h-32V148z M168,196h40h64h40v16h-8H176h-8V196z M16,380V268h48v112\n              H16z M80,412v-16V252v-16h16v176H80z M128,396h-16V252h16v8v128V396z M144,380V268h32c4.418,0,8-3.582,8-8v-32h112v32\n              c0,4.418,3.582,8,8,8h32v112H144z M352,396v-8V260v-8h16v144H352z M400,412h-16V236h16v16v144V412z M464,380h-48V268h48V380z"/>\n          </svg>\n          <h1>Insulation Report</h1>\n        </ion-card>\n      </ion-col>\n      <ion-col text-center col-6 col-xs-12>\n          <ion-card (click)="set_filter(\'safety\')">\n              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n              viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve">\n                 <path d="M499.058,2.53c-2.49-2.074-5.775-2.937-8.965-2.349L320.791,31.31c-5.184,0.954-8.947,5.472-8.947,10.742v3.55h-52.976\n                   v-9.648c0-12.748-10.371-23.12-23.12-23.12h-46.604c-6.308,0-12.029,2.545-16.205,6.656c-7.69-6.743-17.752-10.843-28.759-10.843\n                   c-24.091,0-43.691,19.6-43.691,43.691c0,10.146,3.487,19.488,9.312,26.912c-46.71,14.423-80.746,58.003-80.746,109.385v24.749\n                   h-9.12c-6.033,0-10.923,4.89-10.923,10.923v98.304c0,6.033,4.89,10.923,10.923,10.923h43.691c6.033,0,10.923-4.89,10.923-10.923\n                   v-98.304c0-6.033-4.89-10.923-10.923-10.923H50.901v-24.749c0-51.063,41.543-92.607,92.606-92.607l0.016-0.016\n                   c0.22,0.003,0.437,0.016,0.656,0.016c7.955,0,15.414-2.147,21.845-5.878v32.034c-38.002,2.132-68.267,33.714-68.267,72.239\n                   v283.989c0,18.521,15.067,33.587,33.587,33.587h162.202c18.52,0,33.587-15.067,33.587-33.587v-283.99\n                   c0-38.525-30.265-70.107-68.267-72.239v-11.046h52.975v3.55c0,5.27,3.763,9.789,8.947,10.742l169.301,31.13\n                   c0.658,0.121,1.318,0.18,1.976,0.18c2.533,0,5.012-0.883,6.989-2.53c2.491-2.075,3.933-5.15,3.933-8.393V10.923\n                   C502.99,7.681,501.549,4.605,499.058,2.53z M52.703,235.23v76.459H30.858V235.23H52.703z M189.146,34.68h46.604\n                   c0.703,0,1.275,0.571,1.275,1.275v86.107h-49.152V35.955h-0.001C187.871,35.252,188.442,34.68,189.146,34.68z M144.18,74.184\n                   c-12.046,0-21.845-9.8-21.845-21.845s9.8-21.845,21.845-21.845s21.845,9.8,21.845,21.845S156.226,74.184,144.18,74.184z\n                    M305.29,478.413c0,6.475-5.267,11.742-11.742,11.742H131.346c-6.475,0-11.742-5.267-11.742-11.742v-18.842H305.29V478.413z\n                    M305.29,295.185h-48.06c-6.031,0-10.923,4.89-10.923,10.923s4.891,10.923,10.923,10.923h48.06v20.871h-90.112\n                   c-6.033,0-10.923,4.89-10.923,10.923s4.89,10.923,10.923,10.923h90.112v77.979H119.604V224.734H305.29V295.185z M305.29,194.424\n                   v8.465H119.604v-8.465c0-27.855,22.662-50.517,50.517-50.517h84.651C282.628,143.906,305.29,166.569,305.29,194.424z\n                    M311.843,89.293h-52.975V67.448h52.975V89.293z M481.145,132.704l-147.456-27.113V51.15l147.456-27.113V132.704z"/>\n                 <path d="M214.086,317.031h1.092c6.033,0,10.923-4.89,10.923-10.923s-4.89-10.923-10.923-10.923h-1.092\n                   c-6.033,0-10.923,4.89-10.923,10.923S208.053,317.031,214.086,317.031z"/>\n              </svg>\n            <h1>Safety Report</h1>\n          </ion-card>\n      </ion-col>\n      <ion-col text-center col-6 col-xs-12>\n          <ion-card>\n            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n              viewBox="0 0 480 480" style="enable-background:new 0 0 480 480;" xml:space="preserve">\n               <path d="M440,32h-56v-8c0-13.232-10.768-24-24-24s-24,10.768-24,24v8H144v-8c0-13.232-10.768-24-24-24S96,10.768,96,24v8H40\n                 C17.944,32,0,49.944,0,72v368c0,22.056,17.944,40,40,40h400c22.056,0,40-17.944,40-40V72C480,49.944,462.056,32,440,32z M352,24\n                 c0-4.416,3.584-8,8-8c4.416,0,8,3.584,8,8v64c0,4.416-3.584,8-8,8c-4.416,0-8-3.584-8-8V24z M336.04,88.4\n                 c0.224,13.048,10.864,23.6,23.96,23.6s23.736-10.552,23.96-23.6C393.096,90.24,400,98.328,400,108c0,11.032-8.968,20-20,20h-40\n                 c-11.032,0-20-8.968-20-20C320,98.328,326.904,90.24,336.04,88.4z M112,24c0-4.416,3.584-8,8-8s8,3.584,8,8v64\n                 c0,4.416-3.584,8-8,8s-8-3.584-8-8V24z M96.04,88.4C96.264,101.448,106.904,112,120,112s23.736-10.552,23.96-23.6\n                 C153.096,90.24,160,98.328,160,108c0,11.032-8.968,20-20,20h-40c-11.032,0-20-8.968-20-20C80,98.328,86.904,90.24,96.04,88.4z\n                  M464,440c0,13.232-10.768,24-24,24H40c-13.232,0-24-10.768-24-24V176h448V440z M464,160H16V72c0-13.232,10.768-24,24-24h56\n                 v24.408C78.048,74.424,64,89.52,64,108c0,19.848,16.152,36,36,36h40c19.848,0,36-16.152,36-36c0-18.48-14.048-33.576-32-35.592V48\n                 h192v24.408C318.048,74.424,304,89.52,304,108c0,19.848,16.152,36,36,36h40c19.848,0,36-16.152,36-36\n                 c0-18.48-14.048-33.576-32-35.592V48h56c13.232,0,24,10.768,24,24V160z"/>\n               <rect x="96" y="192" width="16" height="16"/>\n               <rect x="64" y="192" width="16" height="16"/>\n               <rect x="32" y="192" width="16" height="16"/>\n               <path d="M433.312,376.112l-48-8c-2.528-0.408-5.144,0.408-6.968,2.232L372.688,376H264v-16c0-4.424-3.576-8-8-8h-33\n                 c-2.208,0-4.32,0.912-5.832,2.528l-9.512,10.152l-11.168-10.504C195,352.784,193.04,352,191,352H48c-4.424,0-8,3.576-8,8v80\n                 c0,4.424,3.576,8,8,8h144c2.128,0,4.16-0.84,5.656-2.344L208,435.312l10.344,10.344C219.84,447.16,221.872,448,224,448h32\n                 c4.424,0,8-3.576,8-8v-16h108.688l5.656,5.656c1.512,1.512,3.552,2.344,5.656,2.344c0.44,0,0.872-0.04,1.312-0.112l48-8\n                 c3.856-0.64,6.688-3.976,6.688-7.888v-32C440,380.088,437.168,376.752,433.312,376.112z M248,384v32v16h-20.688l-13.656-13.656\n                 c-3.128-3.128-8.184-3.128-11.312,0L188.688,432H56v-64h131.832l14.688,13.832c1.544,1.456,3.664,2.344,5.736,2.168\n                 c2.128-0.064,4.136-0.968,5.584-2.52L226.472,368H248V384z M424,409.224l-37.256,6.2l-5.088-5.088\n                 C380.16,408.84,378.128,408,376,408H264v-16h112c2.128,0,4.16-0.84,5.656-2.344l5.088-5.088L424,390.776V409.224z"/>\n                <path d="M424,296h-52l-18-24l18-24h52c3.08,0,5.872-1.768,7.208-4.528c1.328-2.776,0.96-6.064-0.96-8.472l-32-40\n                 c-1.52-1.896-3.816-3-6.248-3h-48c-2.128,0-4.16,0.84-5.656,2.344L292.688,240H64c-17.648,0-32,14.352-32,32s14.352,32,32,32\n                 h228.688l45.656,45.656C339.84,351.16,341.872,352,344,352h48c2.432,0,4.728-1.104,6.248-3l32-40\n                 c1.92-2.408,2.288-5.696,0.96-8.472C429.872,297.768,427.08,296,424,296z M388.16,335.992h-40.84l-45.656-45.656\n                 C300.16,288.84,298.128,288,296,288H64c-8.824,0-16-7.176-16-16c0-8.824,7.176-16,16-16h232c2.128,0,4.16-0.84,5.656-2.344\n                 L347.312,208h40.84l19.192,24H368c-2.512,0-4.888,1.184-6.4,3.2l-24,32c-2.136,2.84-2.136,6.752,0,9.592l24,32\n                 c1.504,2.016,3.88,3.2,6.4,3.2h39.352L388.16,335.992z"/>\n               <rect x="72" y="384" width="56" height="16"/>\n               <rect x="144" y="384" width="16" height="16"/>\n            </svg>\n            <h1>Maintenance Report</h1>\n          </ion-card>\n      </ion-col>\n      <ion-col text-center col-6 col-xs-12>\n          <ion-card>\n            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n              viewBox="0 0 508 508" style="enable-background:new 0 0 508 508;" xml:space="preserve">\n               <rect x="49.2" y="221.2" width="262.2" height="16.4"/>\n               <rect x="49.2" y="286.8" width="237.6" height="16.4"/>\n               <rect x="49.2" y="352.3" width="163.9" height="16.4"/>\n               <rect x="49.2" y="417.9" width="16.4" height="16.4"/>\n               <rect x="81.9" y="417.9" width="16.4" height="16.4"/>\n               <rect x="114.7" y="417.9" width="16.4" height="16.4"/>\n               <path d="M500.8,202.4l-23.2-23.2c-9.3-9.3-25.5-9.3-34.8,0l-82.3,82.3V0H144.1L0,144.1V508h360.5V377.5l140.3-140.3\n                 C510.4,227.6,510.4,212,500.8,202.4z M139.3,28v111.3H28L139.3,28z M16.4,491.6V155.7h139.3V16.4h188.5V278L221,401.2l-14.5,72.4\n                 l72.4-14.5l65.2-65.2v97.7H16.4z M233.5,421.8l24.7,24.7l-30.9,6.2L233.5,421.8z M274.9,440l-34.8-34.8L402.3,243l34.8,34.8\n                 L274.9,440z M448.7,266.2l-34.8-34.8l11.6-11.6l34.8,34.8L448.7,266.2z M489.2,225.6L471.8,243L437,208.2l17.4-17.4\n                 c3.1-3.1,8.5-3.1,11.6,0l23.2,23.2C492.4,217.2,492.4,222.4,489.2,225.6z"/>\n               <polygon points="254,90.1 254,41 237.6,41 237.6,90.1 188.5,90.1 188.5,106.5 237.6,106.5 237.6,155.7 254,155.7 254,106.5\n                 303.2,106.5 303.2,90.1 		"/>\n            </svg>\n            <h1>Custom Report</h1>\n          </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngSwitchCase="\'safety\'">\n      <ion-col text-center col-6 col-xs-12>\n        <ion-card (click)="navigate_to(\'selection\')">\n          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            viewBox="0 0 511.989 511.989" style="enable-background:new 0 0 511.989 511.989;" xml:space="preserve">\n             <path d="M181.178,71.178c-8.768-17.728-15.68-31.723-0.427-54.613c3.264-4.907,1.92-11.52-2.965-14.784\n               c-4.843-3.243-11.499-1.941-14.784,2.965c-22.101,33.109-10.368,56.832-0.939,75.883c8.811,17.835,15.189,30.72,0.939,52.117\n               c-3.285,4.907-1.941,11.52,2.944,14.784c1.813,1.216,3.883,1.792,5.931,1.792c3.435,0,6.805-1.664,8.853-4.757\n               C201.829,112.949,190.394,89.781,181.178,71.178z"/>\n             <path d="M266.17,71.178c-8.789-17.728-15.701-31.723-0.448-54.613c3.264-4.907,1.92-11.52-2.965-14.784\n               c-4.843-3.243-11.52-1.941-14.784,2.965c-22.08,33.131-10.347,56.853-0.939,75.904c8.811,17.835,15.189,30.72,0.939,52.096\n               c-3.264,4.907-1.92,11.52,2.965,14.784c1.813,1.216,3.861,1.792,5.909,1.792c3.435,0,6.805-1.664,8.875-4.757\n               C286.821,112.949,275.386,89.781,266.17,71.178z"/>\n             <path d="M351.141,71.178c-8.789-17.728-15.701-31.723-0.448-54.613c3.264-4.907,1.92-11.52-2.965-14.784\n               c-4.843-3.243-11.52-1.941-14.784,2.965c-22.08,33.131-10.347,56.853-0.939,75.904c8.811,17.835,15.189,30.72,0.939,52.096\n               c-3.264,4.907-1.92,11.52,2.965,14.784c1.813,1.216,3.861,1.792,5.909,1.792c3.456,0,6.827-1.664,8.875-4.757\n               C371.792,112.949,360.357,89.781,351.141,71.178z"/>\n             <path d="M437.328,170.655H74.661c-29.419,0-53.333,23.936-53.333,53.333v192c0,29.397,23.915,53.333,53.333,53.333h362.667\n               c29.419,0,53.333-23.936,53.333-53.333v-192C490.661,194.591,466.746,170.655,437.328,170.655z M469.328,415.989\n               c0,17.643-14.357,32-32,32H74.661c-17.643,0-32-14.357-32-32v-192c0-17.643,14.357-32,32-32h362.667c17.643,0,32,14.357,32,32\n               V415.989z"/>\n             <path d="M95.994,213.322c-5.888,0-10.667,4.779-10.667,10.667v192c0,5.888,4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667\n               v-192C106.661,218.101,101.882,213.322,95.994,213.322z"/>\n             <path d="M159.994,213.322c-5.888,0-10.667,4.779-10.667,10.667v192c0,5.888,4.779,10.667,10.667,10.667\n               s10.667-4.779,10.667-10.667v-192C170.661,218.101,165.882,213.322,159.994,213.322z"/>\n             <path d="M223.994,213.322c-5.888,0-10.667,4.779-10.667,10.667v192c0,5.888,4.779,10.667,10.667,10.667\n               s10.667-4.779,10.667-10.667v-192C234.661,218.101,229.882,213.322,223.994,213.322z"/>\n             <path d="M287.994,213.322c-5.888,0-10.667,4.779-10.667,10.667v192c0,5.888,4.779,10.667,10.667,10.667\n               s10.667-4.779,10.667-10.667v-192C298.661,218.101,293.882,213.322,287.994,213.322z"/>\n             <path d="M351.994,213.322c-5.888,0-10.667,4.779-10.667,10.667v192c0,5.888,4.779,10.667,10.667,10.667\n               c5.888,0,10.667-4.779,10.667-10.667v-192C362.661,218.101,357.882,213.322,351.994,213.322z"/>\n             <path d="M415.994,213.322c-5.888,0-10.667,4.779-10.667,10.667v192c0,5.888,4.779,10.667,10.667,10.667\n               c5.888,0,10.667-4.779,10.667-10.667v-192C426.661,218.101,421.882,213.322,415.994,213.322z"/>\n             <path d="M117.328,447.989c-5.888,0-10.667,4.779-10.667,10.667v42.667c0,5.888,4.779,10.667,10.667,10.667\n               s10.667-4.779,10.667-10.667v-42.667C127.994,452.767,123.216,447.989,117.328,447.989z"/>\n             <path d="M394.661,447.989c-5.888,0-10.667,4.779-10.667,10.667v42.667c0,5.888,4.779,10.667,10.667,10.667\n               s10.667-4.779,10.667-10.667v-42.667C405.328,452.767,400.549,447.989,394.661,447.989z"/>\n          </svg>\n          <h1>Hot Surface</h1>\n        </ion-card>\n      </ion-col>\n      <ion-col text-center col-6 col-xs-12>\n          <ion-card>\n              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n              viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve">\n                 <path d="M499.058,2.53c-2.49-2.074-5.775-2.937-8.965-2.349L320.791,31.31c-5.184,0.954-8.947,5.472-8.947,10.742v3.55h-52.976\n                   v-9.648c0-12.748-10.371-23.12-23.12-23.12h-46.604c-6.308,0-12.029,2.545-16.205,6.656c-7.69-6.743-17.752-10.843-28.759-10.843\n                   c-24.091,0-43.691,19.6-43.691,43.691c0,10.146,3.487,19.488,9.312,26.912c-46.71,14.423-80.746,58.003-80.746,109.385v24.749\n                   h-9.12c-6.033,0-10.923,4.89-10.923,10.923v98.304c0,6.033,4.89,10.923,10.923,10.923h43.691c6.033,0,10.923-4.89,10.923-10.923\n                   v-98.304c0-6.033-4.89-10.923-10.923-10.923H50.901v-24.749c0-51.063,41.543-92.607,92.606-92.607l0.016-0.016\n                   c0.22,0.003,0.437,0.016,0.656,0.016c7.955,0,15.414-2.147,21.845-5.878v32.034c-38.002,2.132-68.267,33.714-68.267,72.239\n                   v283.989c0,18.521,15.067,33.587,33.587,33.587h162.202c18.52,0,33.587-15.067,33.587-33.587v-283.99\n                   c0-38.525-30.265-70.107-68.267-72.239v-11.046h52.975v3.55c0,5.27,3.763,9.789,8.947,10.742l169.301,31.13\n                   c0.658,0.121,1.318,0.18,1.976,0.18c2.533,0,5.012-0.883,6.989-2.53c2.491-2.075,3.933-5.15,3.933-8.393V10.923\n                   C502.99,7.681,501.549,4.605,499.058,2.53z M52.703,235.23v76.459H30.858V235.23H52.703z M189.146,34.68h46.604\n                   c0.703,0,1.275,0.571,1.275,1.275v86.107h-49.152V35.955h-0.001C187.871,35.252,188.442,34.68,189.146,34.68z M144.18,74.184\n                   c-12.046,0-21.845-9.8-21.845-21.845s9.8-21.845,21.845-21.845s21.845,9.8,21.845,21.845S156.226,74.184,144.18,74.184z\n                    M305.29,478.413c0,6.475-5.267,11.742-11.742,11.742H131.346c-6.475,0-11.742-5.267-11.742-11.742v-18.842H305.29V478.413z\n                    M305.29,295.185h-48.06c-6.031,0-10.923,4.89-10.923,10.923s4.891,10.923,10.923,10.923h48.06v20.871h-90.112\n                   c-6.033,0-10.923,4.89-10.923,10.923s4.89,10.923,10.923,10.923h90.112v77.979H119.604V224.734H305.29V295.185z M305.29,194.424\n                   v8.465H119.604v-8.465c0-27.855,22.662-50.517,50.517-50.517h84.651C282.628,143.906,305.29,166.569,305.29,194.424z\n                    M311.843,89.293h-52.975V67.448h52.975V89.293z M481.145,132.704l-147.456-27.113V51.15l147.456-27.113V132.704z"/>\n                 <path d="M214.086,317.031h1.092c6.033,0,10.923-4.89,10.923-10.923s-4.89-10.923-10.923-10.923h-1.092\n                   c-6.033,0-10.923,4.89-10.923,10.923S208.053,317.031,214.086,317.031z"/>\n              </svg>\n            <h1>Fire Protection</h1>\n          </ion-card>\n      </ion-col>\n      <ion-col text-center col-6 col-xs-12>\n          <ion-card>\n            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n			<path d="M267.477,377.446c-4.471-1.604-9.327,0.725-10.914,5.171c-1.57,4.437,0.742,9.327,5.18,10.906\n				c4.787,1.707,8.542,5.427,10.291,10.206c1.263,3.456,4.54,5.606,8.013,5.606c0.981,0,1.971-0.171,2.935-0.529\n				c4.429-1.621,6.699-6.519,5.086-10.94C284.561,388.301,277.06,380.86,267.477,377.446z"/>\n			<path d="M63.531,100.966c12.186,8.124,21.803,14.532,21.803,44.1c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533\n				c0-38.699-15.616-49.109-29.397-58.3C62.089,79.497,53.231,73.591,51.507,51.2H128c4.719,0,8.533-3.823,8.533-8.533\n				c0-14.114,11.486-25.6,25.6-25.6h187.733c14.114,0,25.6,11.486,25.6,25.6c0,4.71,3.814,8.533,8.533,8.533h76.493\n				c-1.724,22.391-10.581,28.297-21.495,35.567c-13.781,9.19-29.397,19.601-29.397,58.3c0,4.71,3.814,8.533,8.533,8.533\n				c4.719,0,8.533-3.823,8.533-8.533c0-29.568,9.617-35.977,21.803-44.1c13.781-9.19,29.397-19.601,29.397-58.3\n				c0-4.71-3.814-8.533-8.533-8.533h-77.67C387.712,14.686,370.466,0,349.867,0H162.133c-20.599,0-37.845,14.686-41.796,34.133\n				h-77.67c-4.719,0-8.533,3.823-8.533,8.533C34.133,81.365,49.749,91.776,63.531,100.966z"/>\n			<path d="M256,341.333c-37.641,0-68.267,30.626-68.267,68.267c0,37.641,30.626,68.267,68.267,68.267\n				c37.641,0,68.267-30.626,68.267-68.267C324.267,371.959,293.641,341.333,256,341.333z M256,460.8\n				c-28.237,0-51.2-22.963-51.2-51.2c0-28.237,22.963-51.2,51.2-51.2c28.237,0,51.2,22.963,51.2,51.2\n				C307.2,437.837,284.237,460.8,256,460.8z"/>\n			<path d="M267.477,223.846c-4.471-1.604-9.327,0.725-10.914,5.171c-1.57,4.437,0.742,9.327,5.18,10.906\n				c4.787,1.707,8.542,5.427,10.291,10.206c1.263,3.456,4.54,5.606,8.013,5.606c0.981,0,1.971-0.171,2.935-0.529\n				c4.429-1.621,6.699-6.519,5.086-10.94C284.561,234.701,277.06,227.26,267.477,223.846z"/>\n			<path d="M256,187.733c-37.641,0-68.267,30.626-68.267,68.267c0,37.641,30.626,68.267,68.267,68.267\n				c37.641,0,68.267-30.626,68.267-68.267C324.267,218.359,293.641,187.733,256,187.733z M256,307.2\n				c-28.237,0-51.2-22.963-51.2-51.2s22.963-51.2,51.2-51.2c28.237,0,51.2,22.963,51.2,51.2S284.237,307.2,256,307.2z"/>\n			<path d="M469.333,187.733h-76.8V76.8c0-4.71-3.814-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v119.467\n				c0,4.71,3.814,8.533,8.533,8.533h76.493c-1.724,22.391-10.581,28.297-21.495,35.567c-13.781,9.19-29.397,19.601-29.397,58.3\n				c0,4.71,3.814,8.533,8.533,8.533c4.719,0,8.533-3.823,8.533-8.533c0-29.568,9.617-35.977,21.803-44.1\n				c13.781-9.19,29.397-19.601,29.397-58.3C477.867,191.556,474.052,187.733,469.333,187.733z"/>\n			<path d="M267.477,70.246c-4.471-1.596-9.327,0.734-10.914,5.171c-1.57,4.437,0.742,9.327,5.18,10.906\n				c4.787,1.707,8.542,5.427,10.291,10.206c1.263,3.456,4.54,5.606,8.013,5.606c0.981,0,1.971-0.171,2.935-0.529\n				c4.429-1.621,6.699-6.519,5.086-10.948C284.561,81.101,277.06,73.66,267.477,70.246z"/>\n			<path d="M469.333,341.333h-76.8V230.4c0-4.71-3.814-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v119.467\n				c0,4.71,3.814,8.533,8.533,8.533h76.493c-1.724,22.391-10.581,28.297-21.495,35.567c-13.781,9.19-29.397,19.601-29.397,58.3\n				c0,4.71,3.814,8.533,8.533,8.533c4.719,0,8.533-3.823,8.533-8.533c0-29.568,9.617-35.977,21.803-44.1\n				c13.781-9.19,29.397-19.601,29.397-58.3C477.867,345.156,474.052,341.333,469.333,341.333z"/>\n			<path d="M73.003,393.967c-10.914-7.27-19.772-13.175-21.495-35.567H128c4.719,0,8.533-3.823,8.533-8.533V230.4\n				c0-4.71-3.814-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v110.933h-76.8c-4.719,0-8.533,3.823-8.533,8.533\n				c0,38.699,15.616,49.109,29.397,58.3c12.186,8.124,21.803,14.532,21.803,44.1c0,4.71,3.814,8.533,8.533,8.533\n				s8.533-3.823,8.533-8.533C102.4,413.568,86.784,403.157,73.003,393.967z"/>\n			<path d="M384,375.467c-4.719,0-8.533,3.823-8.533,8.533v85.333c0,14.114-11.486,25.6-25.6,25.6H162.133\n				c-14.114,0-25.6-11.486-25.6-25.6V384c0-4.71-3.814-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v85.333\n				c0,23.526,19.14,42.667,42.667,42.667h187.733c23.526,0,42.667-19.14,42.667-42.667V384\n				C392.533,379.29,388.719,375.467,384,375.467z"/>\n			<path d="M63.531,254.566c12.186,8.124,21.803,14.532,21.803,44.1c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533\n				c0-38.699-15.616-49.109-29.397-58.3c-10.914-7.27-19.772-13.175-21.495-35.567H128c4.719,0,8.533-3.823,8.533-8.533V76.8\n				c0-4.71-3.814-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v110.933h-76.8c-4.719,0-8.533,3.823-8.533,8.533\n				C34.133,234.965,49.749,245.376,63.531,254.566z"/>\n			<path d="M256,34.133c-37.641,0-68.267,30.626-68.267,68.267c0,37.641,30.626,68.267,68.267,68.267\n				c37.641,0,68.267-30.626,68.267-68.267C324.267,64.759,293.641,34.133,256,34.133z M256,153.6c-28.237,0-51.2-22.963-51.2-51.2\n				c0-28.237,22.963-51.2,51.2-51.2c28.237,0,51.2,22.963,51.2,51.2C307.2,130.637,284.237,153.6,256,153.6z"/>\n            </svg>\n            <h1>Traffic</h1>\n          </ion-card>\n      </ion-col>\n      <ion-col text-center col-6 col-xs-12>\n          <ion-card>\n            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n              viewBox="0 0 508 508" style="enable-background:new 0 0 508 508;" xml:space="preserve">\n               <rect x="49.2" y="221.2" width="262.2" height="16.4"/>\n               <rect x="49.2" y="286.8" width="237.6" height="16.4"/>\n               <rect x="49.2" y="352.3" width="163.9" height="16.4"/>\n               <rect x="49.2" y="417.9" width="16.4" height="16.4"/>\n               <rect x="81.9" y="417.9" width="16.4" height="16.4"/>\n               <rect x="114.7" y="417.9" width="16.4" height="16.4"/>\n               <path d="M500.8,202.4l-23.2-23.2c-9.3-9.3-25.5-9.3-34.8,0l-82.3,82.3V0H144.1L0,144.1V508h360.5V377.5l140.3-140.3\n                 C510.4,227.6,510.4,212,500.8,202.4z M139.3,28v111.3H28L139.3,28z M16.4,491.6V155.7h139.3V16.4h188.5V278L221,401.2l-14.5,72.4\n                 l72.4-14.5l65.2-65.2v97.7H16.4z M233.5,421.8l24.7,24.7l-30.9,6.2L233.5,421.8z M274.9,440l-34.8-34.8L402.3,243l34.8,34.8\n                 L274.9,440z M448.7,266.2l-34.8-34.8l11.6-11.6l34.8,34.8L448.7,266.2z M489.2,225.6L471.8,243L437,208.2l17.4-17.4\n                 c3.1-3.1,8.5-3.1,11.6,0l23.2,23.2C492.4,217.2,492.4,222.4,489.2,225.6z"/>\n               <polygon points="254,90.1 254,41 237.6,41 237.6,90.1 188.5,90.1 188.5,106.5 237.6,106.5 237.6,155.7 254,155.7 254,106.5\n                 303.2,106.5 303.2,90.1 		"/>\n            </svg>\n            <h1>Any Other Safety Report</h1>\n          </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list *ngSwitchCase="\'summary\'">\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="segment">\n      <ion-segment-button value="reports">\n        Reports\n      </ion-segment-button>\n      <ion-segment-button value="summary">\n        Summary\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\projects\project.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */]])
    ], ProjectPage);
    return ProjectPage;
}());

//# sourceMappingURL=project.js.map

/***/ }),
/* 623 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileDeviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__messages_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__file_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_chooser__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jszip__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jszip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jszip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__loading_service__ = __webpack_require__(180);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var FileDeviceService = /** @class */ (function (_super) {
    __extends(FileDeviceService, _super);
    function FileDeviceService(file, message, chooser, path, transfer, loading) {
        var _this = _super.call(this, loading) || this;
        _this.file = file;
        _this.message = message;
        _this.chooser = chooser;
        _this.path = path;
        _this.transfer = transfer;
        _this.loading = loading;
        _this.download_emiter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        _this.total_files = [];
        _this.working_folder = _this.file.dataDirectory;
        //this.file.externalRootDirectory
        _this.create_folder('files');
        _this.create_folder('pictures');
        _this.create_folder('temp');
        return _this;
    }
    FileDeviceService.prototype.get_documents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.files_in("files")
                            .then(function (files) {
                            return resolve(files.map(function (f) { return new __WEBPACK_IMPORTED_MODULE_6__models__["a" /* Document */]({
                                file: f.name,
                                folder: f.fullPath.replace(f.name, '')
                            }); }));
                        });
                    })];
            });
        });
    };
    FileDeviceService.prototype.create_picture = function (uri) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.path.resolveNativePath(uri)
                .then(function (path) {
                var file = path.substring(path.lastIndexOf('/') + 1, path.length);
                _this.transfer.create().download(uri, _this.working_folder + "pictures/" + file)
                    .then(function () { return resolve(new __WEBPACK_IMPORTED_MODULE_6__models__["a" /* Document */]({ file: file, folder: _this.working_folder + "pictures" })); })
                    .catch(function (ex) {
                    throw ex;
                });
            });
        });
    };
    FileDeviceService.prototype.copy_file = function (uri) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.path.resolveNativePath(uri)
                .then(function (path) {
                //let folder = path.substring(0, path.lastIndexOf('/'));
                var file = path.substring(path.lastIndexOf('/') + 1, path.length);
                _this.transfer.create().download(uri, _this.working_folder + "files/" + file)
                    .then(function () { return resolve(new __WEBPACK_IMPORTED_MODULE_6__models__["a" /* Document */]({ file: file, folder: _this.working_folder + "files" })); })
                    .catch(function (ex) { throw ex; })
                    .catch(function (ex) { throw ex; });
            });
        });
    };
    FileDeviceService.prototype.create_folder = function (type) {
        try {
            this.file.createDir(this.working_folder, type, false);
        }
        catch (ex) {
            throw ex;
        }
    };
    FileDeviceService.prototype.select_file = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.chooser.open()
                .then(function (uri) {
                _this.copy_file(uri).then(function (d) { return resolve(d); });
            })
                .catch(function (e) { return _this.message.alert('File', e.message); });
        });
    };
    FileDeviceService.prototype.create_file = function (filename) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.file.writeFile(_this.working_folder, filename + ".json", '', { append: true })
                .then(function (r) { return resolve(r); })
                .catch(function (_) {
                _this.file.writeFile(_this.working_folder, filename + ".json", '', { replace: true })
                    .then(function (r) { return resolve(r); })
                    .catch(function (ex) {
                    reject(ex.message);
                    throw ex;
                });
            });
        });
    };
    FileDeviceService.prototype.split_path = function (path) {
        var _split = path.split('/');
        return {
            file: _split[_split.length - 1],
            folder: path.replace(_split[_split.length - 1], '')
        };
    };
    FileDeviceService.prototype.delete = function (file) {
        var _this = this;
        var _folder = file instanceof __WEBPACK_IMPORTED_MODULE_6__models__["a" /* Document */] ? file.folder : this.split_path(file.picture).folder;
        var _file = file instanceof __WEBPACK_IMPORTED_MODULE_6__models__["a" /* Document */] ? file.file : this.split_path(file.picture).file;
        return new Promise(function (resolve, reject) {
            _this.file.removeFile(_folder, _file)
                .then(function (r) { return resolve(r.success); })
                .catch(function (ex) {
                reject(ex.message);
                throw ex;
            });
        });
    };
    FileDeviceService.prototype.read_text = function (filename, hide) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        !hide && this.loading.show();
                        return [4 /*yield*/, this.create_file(filename)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this.file.readAsText(_this.working_folder, filename + ".json")
                                    .then(function (r) {
                                    !hide && _this.loading.hide();
                                    resolve(r);
                                })
                                    .catch(function (ex) {
                                    !hide && _this.loading.hide();
                                    reject(ex.message);
                                    throw ex;
                                });
                            })];
                }
            });
        });
    };
    FileDeviceService.prototype.write_text = function (filename, content, hide) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        !hide && this.loading.show();
                        return [4 /*yield*/, this.create_file(filename)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this.file.writeFile(_this.working_folder, filename + ".json", content, { replace: true })
                                    .then(function () {
                                    !hide && _this.loading.hide();
                                    resolve(true);
                                })
                                    .catch(function (ex) {
                                    !hide && _this.loading.hide();
                                    reject(ex);
                                    throw ex;
                                });
                            })];
                }
            });
        });
    };
    FileDeviceService.prototype.zip_ready = function (zip) {
        this.message.alert('Zip', 'Zip ready');
    };
    FileDeviceService.prototype.create_database = function (filename) {
        var _this = this;
        var zip = new __WEBPACK_IMPORTED_MODULE_8_jszip__();
        this.download_emiter.subscribe(function (filename) {
            //this.set_percent();
            _this.total_files = _this.total_files.filter(function (f) { return f != filename; });
            if (!_this.total_files.length)
                _this.zip_ready(zip);
        });
        return new Promise(function (resolve, reject) {
            _this.create_database_structure(filename).then(function (files) {
                var folders = {
                    data: zip.folder('data'),
                    files: zip.folder('files'),
                    pictures: zip.folder('pictures')
                };
                _this.total_files = files.map(function (f) { return f.entry.name; });
                files.forEach(function (f) {
                    _this.add_to_zip((f.folder == 'data') ? zip : folders[f.folder], f);
                });
            });
        });
    };
    FileDeviceService.prototype.add_to_zip = function (folder, file) {
        var _this = this;
        this.file.readAsArrayBuffer("" + this.working_folder + file.folder, file.entry.name).then(function (buffer) {
            folder.file(file.entry.name, buffer);
            _this.download_emiter.emit(file.entry.name);
        }).catch(function (ex) { return _this.message.alert('Read', JSON.stringify(file.entry, null, 2)); });
    };
    FileDeviceService.prototype.create_database_structure = function (filename) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var result = [];
                        _this.files_in('').then(function (data) {
                            result = result.concat(data.filter(function (f) { return f.isFile && f.name == filename + ".json"; }).map(function (f) { return ({ folder: 'data', entry: f }); }));
                            _this.files_in('files').then(function (files) {
                                result = result.concat(files.filter(function (f) { return f.isFile; }).map(function (f) { return ({ folder: 'files', entry: f }); }));
                                _this.files_in('pictures').then(function (pictures) {
                                    result = result.concat(pictures.filter(function (f) { return f.isFile; }).map(function (f) { return ({ folder: 'pictures', entry: f }); }));
                                    resolve(result);
                                });
                            });
                        });
                    })];
            });
        });
    };
    FileDeviceService.prototype.files_in = function (folder) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.file.listDir(_this.working_folder, folder)
                .then(function (e) { return resolve(e); })
                .catch(function (ex) { throw ex; });
        });
    };
    FileDeviceService.prototype.base64_to_uint = function (base64) {
        var arr = base64.split(','), bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return u8arr;
    };
    FileDeviceService.prototype.create_pdf = function (base64, filename) {
        return this.after_check_pdf(base64, filename);
        //window.open('http://www.google.es', '_blank');
        // return new Promise<string>((resolve, reject) => {
        //     this.file.removeFile(this.working_folder, `${filename}.pdf`).then(() => {
        //         resolve(this.after_check_pdf(base64, filename));
        //     }).catch(() => {
        //         resolve(this.after_check_pdf(base64, filename));
        //     });
        // });
    };
    FileDeviceService.prototype.after_check_pdf = function (base64, filename) {
        var _this = this;
        filename = filename + "-" + (new Date()).toLocaleString().replace(/(\/| |:)/g, '');
        return new Promise(function (resolve, reject) {
            _this.file.writeFile(_this.working_folder + "temp", filename + ".pdf", _this.base64_to_uint(base64).buffer, { replace: false })
                .then(function (r) {
                resolve(_this.working_folder + "temp/" + filename + ".pdf");
            })
                .catch(function (ex) {
                reject(ex.message);
                throw ex;
            });
        });
    };
    FileDeviceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1__messages_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_9__loading_service__["a" /* LoadindService */]])
    ], FileDeviceService);
    return FileDeviceService;
}(__WEBPACK_IMPORTED_MODULE_3__file_service__["a" /* FileService */]));

//# sourceMappingURL=file-device.service.js.map

/***/ }),
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 630 */,
/* 631 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileLocalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_service__ = __webpack_require__(180);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileLocalService = /** @class */ (function (_super) {
    __extends(FileLocalService, _super);
    function FileLocalService(loading) {
        var _this = _super.call(this, loading) || this;
        _this.loading = loading;
        _this.working_folder = 'D:\\Sofware Factory\\tbi\\src\\assets\\';
        return _this;
    }
    FileLocalService.prototype.create_pdf = function (base64, filename) {
        var _this = this;
        filename = filename + "-" + (new Date()).toLocaleString().replace(/(\/| |:)/g, '');
        this.loading.show();
        return new Promise(function (resolve, reject) {
            var blob = new Blob([_this.base64_to_uint(base64)], { type: 'application/pdf' });
            var newWindow = window.open(filename, '_blank');
            newWindow.location.href = URL.createObjectURL(blob);
            _this.loading.hide();
            resolve(filename);
        });
    };
    FileLocalService.prototype.base64_to_uint = function (base64) {
        var arr = base64.split(','), bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return u8arr;
    };
    FileLocalService.prototype.create_picture = function (uri) {
        throw new Error("Method not implemented.");
    };
    FileLocalService.prototype.get_documents = function () {
        throw new Error("Method not implemented.");
    };
    FileLocalService.prototype.delete = function (file) {
        throw new Error("Method not implemented.");
    };
    FileLocalService.prototype.select_file = function () {
        throw new Error("Method not implemented.");
    };
    FileLocalService.prototype.read_text = function (filename, hide) {
        var _this = this;
        !hide && this.loading.show();
        return new Promise(function (resolve, reject) {
            !hide && _this.loading.hide();
            resolve(localStorage.getItem(filename));
        });
    };
    FileLocalService.prototype.write_text = function (filename, content, hide) {
        var _this = this;
        !hide && this.loading.show();
        return new Promise(function (resolve, reject) {
            localStorage.setItem(filename, content);
            !hide && _this.loading.hide();
            resolve(true);
        });
    };
    FileLocalService.prototype.create_database = function (filename) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.read_text(filename).then(function (d) { return resolve(new Blob([d], { type: 'text' })); });
        });
    };
    FileLocalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__loading_service__["a" /* LoadindService */]])
    ], FileLocalService);
    return FileLocalService;
}(__WEBPACK_IMPORTED_MODULE_1__file_service__["a" /* FileService */]));

//# sourceMappingURL=file-local.service.js.map

/***/ }),
/* 678 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__insulated_compare_temp_directive__ = __webpack_require__(679);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__insulated_compare_temp_directive__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),
/* 679 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsulatedCompareTempValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function validateInsulatedCompareTempFactory() {
    return function (c) {
        return c.value
            ? null
            : {
                insulatedCompareTemp: {
                    valid: false
                }
            };
    };
}
var InsulatedCompareTempValidator = /** @class */ (function () {
    function InsulatedCompareTempValidator() {
        this.validator = validateInsulatedCompareTempFactory();
    }
    InsulatedCompareTempValidator_1 = InsulatedCompareTempValidator;
    InsulatedCompareTempValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    InsulatedCompareTempValidator = InsulatedCompareTempValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[insulatedCompareTemp][ngModel]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: InsulatedCompareTempValidator_1, multi: true }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], InsulatedCompareTempValidator);
    return InsulatedCompareTempValidator;
    var InsulatedCompareTempValidator_1;
}());

//# sourceMappingURL=insulated-compare-temp.directive.js.map

/***/ }),
/* 680 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgInsulationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgInsulationComponent = /** @class */ (function () {
    function SvgInsulationComponent() {
    }
    SvgInsulationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="insulation"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\insulation.svg"*/'<svg version="1.1" id="insulation" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 viewBox="0 0 506 506" style="enable-background:new 0 0 506 506;" xml:space="preserve">\n\n<path d="M45,298c-17,0-25-31-25-60s8-60,25-60s25,31,25,60S62,298,45,298z M45,192c-3,2-11,17-11,46s8,44,11,46\n\n	s11-17,11-46S48,194,45,192z"/>\n\n<path d="M472,131h-63c-21-42-53-66-88-66H201c-35,0-67,24-88,66H43c-28,3-43,56-43,106s16,105,45,105h68\n\n	c21,41,52,65,87,65h121c36,0,67-25,88-64h61c0,0,36-22,36-107S473,132,472,131z M321,80c31,0,59,23,78,62H295c-13-28-31-49-50-62h77\n\n	H321z M401,156l-20,21l-112,4l25-25H401z M202,80c33,0,63,25,81,68l-24,23c-13-25-34-40-57-40h-73C147,98,172,80,202,80z M12,238\n\n	c0-57,20-92,33-92s30,35,30,92s-18,89-30,89S12,295,12,238z M129,342h73c29,0,55-26,65-66l30-3c-11,70-50,121-96,121\n\n	C174,393,148,375,129,342z M321,393h-75c33-22,58-66,65-122l105-2C407,340,367,393,321,393z M466,329h-50c8.7-21.4,14.1-44,16-67v-8\n\n	l-120,3l-58,6v5c-8,36-30,60-53,60H68c15-19,22-56,22-92s-8-73-23-92h135c20,0,38,15,48,40l4,10l133-4l33-35l0,0l-4-10h50\n\n	c5,5,26,22,26,92S471,326,466,329z"/>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\insulation.svg"*/
        })
    ], SvgInsulationComponent);
    return SvgInsulationComponent;
}());

//# sourceMappingURL=svg-insulation.component.js.map

/***/ }),
/* 681 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgCO2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgCO2Component = /** @class */ (function () {
    function SvgCO2Component() {
    }
    SvgCO2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="co2"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\co2.svg"*/'<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 viewBox="0 0 489.5 489.5" style="enable-background:new 0 0 489.5 489.5;" xml:space="preserve">\n\n<path d="M366.7,360.3h-42.9c-3.6,0-6.9-2.2-8.3-5.5s-0.7-7.2,1.9-9.8l32.1-32.6c1-1.5,1.6-3.3,1.6-5.1c0-5-4.1-9.1-9.1-9.1\n\n	s-9.1,4.1-9.1,9.1s-4,9-9,9s-9-4-9-9c0-14.9,12.1-27.1,27.1-27.1c14.9,0,27.1,12.1,27.1,27.1c0,6-1.9,11.6-5.5,16.4\n\n	c-0.2,0.3-0.5,0.6-0.7,0.9l-17.5,17.8h21.3c5,0,9,4,9,9C375.7,356.3,371.7,360.3,366.7,360.3z"/>\n\n<path d="M259.9,340.6c-28.4,0-51.5-23.1-51.5-51.5s23.1-51.5,51.5-51.5s51.5,23.1,51.5,51.5S288.3,340.6,259.9,340.6z M259.9,258.5\n\n	c-16.9,0-30.6,13.7-30.6,30.6s13.7,30.6,30.6,30.6s30.6-13.7,30.6-30.6S276.8,258.5,259.9,258.5z"/>\n\n<path d="M164.2,338.5c-27.8,0-50.5-22.6-50.5-50.5c0-27.8,22.6-50.5,50.5-50.5c15.9,0,31.1,7.7,40.6,20.5c3.4,4.6,2.5,11.2-2.2,14.6\n\n	c-4.6,3.4-11.2,2.5-14.6-2.2c-5.6-7.6-14.3-12-23.8-12c-16.3,0-29.6,13.3-29.6,29.6c0,16.3,13.3,29.6,29.6,29.6\n\n	c8.2,0,16.2-3.5,21.8-9.5c3.9-4.3,10.5-4.5,14.8-0.6s4.5,10.5,0.6,14.8C191.8,332.6,178.3,338.5,164.2,338.5z"/>\n\n<path d="M363.4,428H126C56.2,428,0,371.8,0,302c0-54.2,34.4-102.1,84.4-118.7c19.7-71.9,85.3-121.9,160.3-121.9\n\n	s140.6,51,160.4,122.9c51,17.7,84.4,64.6,84.4,118.7C489.5,371.9,433.2,428,363.4,428z M244.7,102.1c-60.4,0-111.5,42.7-122.9,102.1\n\n	c-1,8.3-7.3,14.6-15.6,16.7c-38.5,9.4-65.6,42.7-65.6,82.3c0,46.9,38.5,85.4,85.4,85.4h237.5c46.9,0,85.4-38.5,85.4-85.4\n\n	c0-39.6-27.1-74-65.6-82.3c-8.3-2.1-13.5-8.3-15.6-16.7C356.2,144.8,305.1,102.1,244.7,102.1z"/>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\co2.svg"*/
        })
    ], SvgCO2Component);
    return SvgCO2Component;
}());

//# sourceMappingURL=svg-co2.component.js.map

/***/ }),
/* 682 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgCustomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgCustomComponent = /** @class */ (function () {
    function SvgCustomComponent() {
    }
    SvgCustomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="custom"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\custom.svg"*/'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n	 viewBox="0 0 508 508" style="enable-background:new 0 0 508 508;" xml:space="preserve">\n<rect x="49.2" y="221.2" width="262.2" height="16.4"/>\n<rect x="49.2" y="286.8" width="237.6" height="16.4"/>\n<rect x="49.2" y="352.3" width="163.9" height="16.4"/>\n<rect x="49.2" y="417.9" width="16.4" height="16.4"/>\n<rect x="81.9" y="417.9" width="16.4" height="16.4"/>\n<rect x="114.7" y="417.9" width="16.4" height="16.4"/>\n<path d="M500.8,202.4l-23.2-23.2c-9.3-9.3-25.5-9.3-34.8,0l-82.3,82.3V0H144.1L0,144.1V508h360.5V377.5l140.3-140.3\n	C510.4,227.6,510.4,212,500.8,202.4z M139.3,28v111.3H28L139.3,28z M16.4,491.6V155.7h139.3V16.4h188.5V278L221,401.2l-14.5,72.4\n	l72.4-14.5l65.2-65.2v97.7L16.4,491.6L16.4,491.6z M233.5,421.8l24.7,24.7l-30.9,6.2L233.5,421.8z M274.9,440l-34.8-34.8L402.3,243\n	l34.8,34.8L274.9,440z M448.7,266.2l-34.8-34.8l11.6-11.6l34.8,34.8L448.7,266.2z M489.2,225.6L471.8,243L437,208.2l17.4-17.4\n	c3.1-3.1,8.5-3.1,11.6,0l23.2,23.2C492.4,217.2,492.4,222.4,489.2,225.6z"/>\n<polygon points="254,90.1 254,41 237.6,41 237.6,90.1 188.5,90.1 188.5,106.5 237.6,106.5 237.6,155.7 254,155.7 254,106.5\n	303.2,106.5 303.2,90.1 "/>\n</svg>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\custom.svg"*/
        })
    ], SvgCustomComponent);
    return SvgCustomComponent;
}());

//# sourceMappingURL=svg-custom.component.js.map

/***/ }),
/* 683 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgSafetyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgSafetyComponent = /** @class */ (function () {
    function SvgSafetyComponent() {
    }
    SvgSafetyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="safety"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\safety.svg"*/'<svg id="safety" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496"><path d="M40,311H472a32,32,0,0,0,16-60A232,232,0,0,0,320,32h0A24,24,0,0,0,296,7H216a24,24,0,0,0-24,24h0A232,232,0,0,0,24,251,32,32,0,0,0,40,311Zm0-48H440V247H40A216,216,0,0,1,160,62V199h16V54l16-6V231h16V31a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V231h16V49l16,6V199h16V62A216,216,0,0,1,472,247H456v16h16a16,16,0,0,1,0,32H40A16,16,0,0,1,40,263Z" transform="translate(-8 -7)"/><rect x="328" y="208" width="16" height="16"/><rect x="152" y="208" width="16" height="16"/><path d="M416,327H96a56,56,0,0,0-51,32H8V471H45a56,56,0,0,0,51,32h88a47,47,0,0,0,42-26l3-5a31,31,0,0,1,55,0l3,5a47,47,0,0,0,42,26h88a56,56,0,0,0,51-32h37V359H467A56,56,0,0,0,416,327ZM24,455V407H40v40a56,56,0,0,0,1,8H24Zm16-72v8H24V375H41A56,56,0,0,0,40,383Zm416,64a40,40,0,0,1-40,40H328a31,31,0,0,1-28-17l-3-5a47,47,0,0,0-84,0l-3,5a31,31,0,0,1-28,17H96a40,40,0,0,1-40-40V383a40,40,0,0,1,40-40H416a40,40,0,0,1,40,40v64Zm32-72v16H472v-8a56,56,0,0,0-1-8h17Zm-16,72V407h16v48H471A56,56,0,0,0,472,447Z" transform="translate(-8 -7)"/><rect x="224" y="352" width="16" height="16"/><path d="M72,383v56H88V383a8,8,0,0,1,8-8H216V359H96A24,24,0,0,0,72,383Z" transform="translate(-8 -7)"/></svg>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\safety.svg"*/
        })
    ], SvgSafetyComponent);
    return SvgSafetyComponent;
}());

//# sourceMappingURL=svg-safety.component.js.map

/***/ }),
/* 684 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgMaintenanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgMaintenanceComponent = /** @class */ (function () {
    function SvgMaintenanceComponent() {
    }
    SvgMaintenanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="maintenance"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\maintenance.svg"*/'<svg id="maintenance" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480"><title>maintenance</title><path d="M440,32H384V24a24,24,0,0,0-48,0v8H144V24a24,24,0,0,0-48,0v8H40A40,40,0,0,0,0,72V440a40,40,0,0,0,40,40H440a40,40,0,0,0,40-40V72A40,40,0,0,0,440,32Zm-88-8a8,8,0,0,1,16,0V88a8,8,0,0,1-16,0V24ZM336,88a24,24,0,0,0,48,0,20,20,0,0,1-4,40H340A20,20,0,0,1,336,88ZM112,24a8,8,0,0,1,16,0V88a8,8,0,0,1-16,0V24ZM96,88a24,24,0,0,0,48,0,20,20,0,0,1-4,40H100A20,20,0,0,1,96,88ZM464,440a24,24,0,0,1-24,24H40a24,24,0,0,1-24-24V176H464V440Zm0-280H16V72A24,24,0,0,1,40,48H96V72a36,36,0,0,0,4,72h40a36,36,0,0,0,4-72V48H336V72a36,36,0,0,0,4,72h40a36,36,0,0,0,4-72V48h56a24,24,0,0,1,24,24v88Z"/><rect x="96" y="192" width="16" height="16"/><rect x="64" y="192" width="16" height="16"/><rect x="32" y="192" width="16" height="16"/><path d="M433,376l-48-8a8,8,0,0,0-7,2l-6,6H264V360a8,8,0,0,0-8-8H223l-6,3-10,10-11-11-5-2H48a8,8,0,0,0-8,8v80a8,8,0,0,0,8,8H192l6-2,10-10,10,10,6,2h32a8,8,0,0,0,8-8V424H373l6,6,6,2h1l48-8a8,8,0,0,0,7-8V384A8,8,0,0,0,433,376Zm-185,8v48H227l-14-14a8,8,0,0,0-11,0l-14,14H56V368H188l15,14,6,2,6-3,13-13h22v16Zm176,25-37,6-5-5-6-2H264V392H376l6-2,5-5,37,6v18Z"/><path d="M424,296H372l-18-24,18-24h52a8,8,0,0,0,6-13l-32-40a8,8,0,0,0-6-3H344l-6,2-46,46H64a32,32,0,0,0,0,64H293l46,46,6,2h48a8,8,0,0,0,6-3l32-40A8,8,0,0,0,424,296Zm-36,40H347l-46-46-6-2H64a16,16,0,0,1,0-32H296l6-2,46-46h41l19,24H368a8,8,0,0,0-6,3l-24,32a8,8,0,0,0,0,10l24,32a8,8,0,0,0,6,3h39Z"/><rect x="72" y="384" width="56" height="16"/><rect x="144" y="384" width="16" height="16"/></svg>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\maintenance.svg"*/
        })
    ], SvgMaintenanceComponent);
    return SvgMaintenanceComponent;
}());

//# sourceMappingURL=svg-maintenance.component.js.map

/***/ }),
/* 685 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgFlangeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgFlangeComponent = /** @class */ (function () {
    function SvgFlangeComponent() {
    }
    SvgFlangeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="flange"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\flange.svg"*/'<svg version="1.1" id="flange" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<ellipse cx="280" cy="251" rx="8" ry="19"/>\n\n<ellipse cx="244" cy="147" rx="8" ry="19"/>\n\n<ellipse cx="244" cy="365" rx="8" ry="19"/>\n\n<path d="M48,200c-17,0-25,31-25,60s8,60,25,60s25-31,25-60S65,200,48,200z M48,306c-3-2-11-17-11-46s8-44,11-46s11,17,11,46\n\n	S51,308,48,306z"/>\n\n<path d="M477,152h-33.4c0.6,2.4,1.4,4.9,2.3,7.3C428.7,119.5,400.3,86,357,86H205c-18,0-37,8-52,20s-27,28-37,48H45\n\n	c-27,2-42,54-42,104s15,99,41,104h74c21,41,54,65,88,65h160c25.2,0,59.5-21.2,81.2-64H475c0,0,36-22,36-107S478,153,477,152z\n\n	 M52,350h-8c-11-7-26-40-26-91c0-57,17-91,30-91s30,35,30,92S63,344,52,350z M71,349c14-19,22-56,22-91s-8-72-22-91h135\n\n	c6,5,37,23,37,93s-31,86-36,89H71z M206,416c-28,1-55-19-74-53h24v1c0,11,4,19,8,19s8-9,8-19c0-0.4,0-0.7,0-1h38v-2h1\n\n	c4-1,46-17,46-102s-44-105-45-106h-40c0.1-2,0.1-4,0-6c0-10-4-19-8-19s-8,9-8,19c-0.1,2-0.1,4,0,6h-26c19-34,47-55,76-55\n\n	c55,0,100,72,100,160s-39,149-89,158H206z M285,376c21-32,32-75,32-120s-11-87-32-120c-11-17-23-29-37-38h68.6\n\n	c7.1,5.2,20.8,16.5,34.6,34.2c18.2,23.4,40,63,40.3,118.8c0.4,67-20.1,108.8-37.4,132c-14.1,19-28.4,29.1-34.6,32.9H246\n\n	C261,407,274,393,285,376z M357,416h-20.3c7.3-5.9,16.2-14.5,25.1-26.4C380.2,365,402,321.1,401.6,251\n\n	c-0.4-58.6-23.3-100.2-42.4-124.9c-9.5-12.3-19-21.6-26.5-28.1h30c46.4,0,89,69,94.4,159C462.2,344.8,412,416,357,416z M471,350\n\n	h-17.9c10.1-24.9,16.2-55.9,14.9-93c-0.9-24.6-6.8-59.9-19.7-92.1c0.2,0.4,0.3,0.7,0.5,1.1H471c5,5,26,22,26,92S476,347,471,350z"/>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\flange.svg"*/
        })
    ], SvgFlangeComponent);
    return SvgFlangeComponent;
}());

//# sourceMappingURL=svg-flange.component.js.map

/***/ }),
/* 686 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgHotSurfaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgHotSurfaceComponent = /** @class */ (function () {
    function SvgHotSurfaceComponent() {
    }
    SvgHotSurfaceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="hot-surface"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\hot-surface.svg"*/'<svg version="1.1" id="hot-surface" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"\n\n	 y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<path d="M313.6,186.1l-45.2,63.3c0,0-129.5,9-134,21.1c-4.5,12,3,12,4.5,12c1.5,0,31.6-7.5,16.6,3c-5.1,3.6-34.6,12-39.2,19.6\n\n	c0,0-7.5,15.1,9,13.6s45.2-19.6,45.2-19.6l-40.7,42.2c0,0-4.5,19.6,13.6,10.5s82.8-69.3,117.5-57.2c11.7,4.1,9,13.6,9,13.6\n\n	l-24.1,40.7c0,0-6,19.6,19.6,12l79.8-131L313.6,186.1z"/>\n\n<path d="M253.1,21L0,465.3h510.9L253.1,21z M253.6,57.8L476.7,447H31.1L253.6,57.8z"/>\n\n<path d="M186,376c2.9-1.9,4.6-5.1,4.7-8.5c0-1.9-1.6-3.5-3.5-3.5s-3.5,1.6-3.5,3.5c0,1.2-0.5,1.7-2.2,3.1c-2.9,1.9-4.6,5.1-4.7,8.5\n\n	c0.1,3.4,1.9,6.6,4.7,8.5c1.7,1.4,2.2,2,2.2,3.1c0,1.1-0.4,1.6-2.2,3.1c-2.9,1.9-4.6,5.1-4.7,8.5c0,1.9,1.6,3.5,3.5,3.5\n\n	s3.5-1.6,3.5-3.5c0-1.1,0.4-1.6,2.2-3.1c2.9-1.9,4.6-5.1,4.7-8.5c-0.1-3.4-1.9-6.6-4.7-8.5c-1.7-1.4-2.2-2-2.2-3.1\n\n	S184.3,377.4,186,376z"/>\n\n<path d="M203.4,376c2.9-1.9,4.6-5.1,4.7-8.5c0-1.9-1.6-3.5-3.5-3.5c-1.9,0-3.5,1.6-3.5,3.5c0,1.2-0.5,1.7-2.2,3.1\n\n	c-2.9,1.9-4.6,5.1-4.7,8.5c0.1,3.4,1.9,6.6,4.7,8.5c1.7,1.4,2.2,2,2.2,3.1c0,1.1-0.4,1.6-2.2,3.1c-2.9,1.9-4.6,5.1-4.7,8.5\n\n	c0,1.9,1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5c0-1.1,0.4-1.6,2.2-3.1c2.9-1.9,4.6-5.1,4.7-8.5c-0.1-3.4-1.9-6.6-4.7-8.5\n\n	c-1.7-1.4-2.2-2-2.2-3.1S201.7,377.4,203.4,376z"/>\n\n<path d="M147.6,376c2.9-1.9,4.6-5.1,4.7-8.5c0-1.9-1.6-3.5-3.5-3.5s-3.5,1.6-3.5,3.5c0,1.2-0.5,1.7-2.2,3.1\n\n	c-2.9,1.9-4.6,5.1-4.7,8.5c0.1,3.4,1.9,6.6,4.7,8.5c1.7,1.4,2.2,2,2.2,3.1c0,1.1-0.4,1.6-2.2,3.1c-2.9,1.9-4.6,5.1-4.7,8.5\n\n	c0,1.9,1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5c0-1.1,0.4-1.6,2.2-3.1c2.9-1.9,4.6-5.1,4.7-8.5c-0.1-3.4-1.9-6.6-4.7-8.5\n\n	c-1.7-1.4-2.2-2-2.2-3.1S146,377.4,147.6,376z"/>\n\n<path d="M165.1,376c2.9-1.9,4.6-5.1,4.7-8.5c0-1.9-1.6-3.5-3.5-3.5s-3.5,1.6-3.5,3.5c0,1.2-0.5,1.7-2.2,3.1\n\n	c-2.9,1.9-4.6,5.1-4.7,8.5c0.1,3.4,1.9,6.6,4.7,8.5c1.7,1.4,2.2,2,2.2,3.1c0,1.1-0.4,1.6-2.2,3.1c-2.9,1.9-4.6,5.1-4.7,8.5\n\n	c0,1.9,1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5c0-1.1,0.4-1.6,2.2-3.1c2.9-1.9,4.6-5.1,4.7-8.5c-0.1-3.4-1.9-6.6-4.7-8.5\n\n	c-1.7-1.4-2.2-2-2.2-3.1S163.4,377.4,165.1,376z"/>\n\n<path d="M260,376c2.9-1.9,4.6-5.1,4.7-8.5c0-1.9-1.6-3.5-3.5-3.5c-1.9,0-3.5,1.6-3.5,3.5c0,1.2-0.5,1.7-2.2,3.1\n\n	c-2.9,1.9-4.6,5.1-4.7,8.5c0.1,3.4,1.9,6.6,4.7,8.5c1.7,1.4,2.2,2,2.2,3.1c0,1.1-0.4,1.6-2.2,3.1c-2.9,1.9-4.6,5.1-4.7,8.5\n\n	c0,1.9,1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5c0-1.1,0.4-1.6,2.2-3.1c2.9-1.9,4.6-5.1,4.7-8.5c-0.1-3.4-1.9-6.6-4.7-8.5\n\n	c-1.7-1.4-2.2-2-2.2-3.1S258.3,377.4,260,376z"/>\n\n<path d="M277.4,376c2.9-1.9,4.6-5.1,4.7-8.5c0-1.9-1.6-3.5-3.5-3.5c-1.9,0-3.5,1.6-3.5,3.5c0,1.2-0.5,1.7-2.2,3.1\n\n	c-2.9,1.9-4.6,5.1-4.7,8.5c0.1,3.4,1.9,6.6,4.7,8.5c1.7,1.4,2.2,2,2.2,3.1c0,1.1-0.4,1.6-2.2,3.1c-2.9,1.9-4.6,5.1-4.7,8.5\n\n	c0,1.9,1.6,3.5,3.5,3.5c1.9,0,3.5-1.6,3.5-3.5c0-1.1,0.4-1.6,2.2-3.1c2.9-1.9,4.6-5.1,4.7-8.5c-0.1-3.4-1.9-6.6-4.7-8.5\n\n	c-1.7-1.4-2.2-2-2.2-3.1S275.7,377.4,277.4,376z"/>\n\n<path d="M221.6,376c2.9-1.9,4.6-5.1,4.7-8.5c0-1.9-1.6-3.5-3.5-3.5s-3.5,1.6-3.5,3.5c0,1.2-0.5,1.7-2.2,3.1\n\n	c-2.9,1.9-4.6,5.1-4.7,8.5c0.1,3.4,1.9,6.6,4.7,8.5c1.7,1.4,2.2,2,2.2,3.1c0,1.1-0.4,1.6-2.2,3.1c-2.9,1.9-4.6,5.1-4.7,8.5\n\n	c0,1.9,1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5c0-1.1,0.4-1.6,2.2-3.1c2.9-1.9,4.6-5.1,4.7-8.5c-0.1-3.4-1.9-6.6-4.7-8.5\n\n	c-1.7-1.4-2.2-2-2.2-3.1S220,377.4,221.6,376z"/>\n\n<path d="M239.1,376c2.9-1.9,4.6-5.1,4.7-8.5c0-1.9-1.6-3.5-3.5-3.5s-3.5,1.6-3.5,3.5c0,1.2-0.5,1.7-2.2,3.1\n\n	c-2.9,1.9-4.6,5.1-4.7,8.5c0.1,3.4,1.9,6.6,4.7,8.5c1.7,1.4,2.2,2,2.2,3.1c0,1.1-0.4,1.6-2.2,3.1c-2.9,1.9-4.6,5.1-4.7,8.5\n\n	c0,1.9,1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5c0-1.1,0.4-1.6,2.2-3.1c2.9-1.9,4.6-5.1,4.7-8.5c-0.1-3.4-1.9-6.6-4.7-8.5\n\n	c-1.7-1.4-2.2-2-2.2-3.1S237.4,377.4,239.1,376z"/>\n\n<rect x="109" y="414" width="192" height="19"/>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\hot-surface.svg"*/
        })
    ], SvgHotSurfaceComponent);
    return SvgHotSurfaceComponent;
}());

//# sourceMappingURL=svg-hot-surface.component.js.map

/***/ }),
/* 687 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgFireProtectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgFireProtectionComponent = /** @class */ (function () {
    function SvgFireProtectionComponent() {
    }
    SvgFireProtectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="fire-protection"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\fire-protection.svg"*/'<svg xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink" id="Layer_1" style="enable-background:new 0 0 512.001 512.001;" version="1.1" viewBox="0 0 512.001 512.001" x="0px" xmlns="http://www.w3.org/2000/svg" y="0px">\n            <path d="M499.058,2.53c-2.49-2.074-5.775-2.937-8.965-2.349L320.791,31.31c-5.184,0.954-8.947,5.472-8.947,10.742v3.55h-52.976\n                   v-9.648c0-12.748-10.371-23.12-23.12-23.12h-46.604c-6.308,0-12.029,2.545-16.205,6.656c-7.69-6.743-17.752-10.843-28.759-10.843\n                   c-24.091,0-43.691,19.6-43.691,43.691c0,10.146,3.487,19.488,9.312,26.912c-46.71,14.423-80.746,58.003-80.746,109.385v24.749\n                   h-9.12c-6.033,0-10.923,4.89-10.923,10.923v98.304c0,6.033,4.89,10.923,10.923,10.923h43.691c6.033,0,10.923-4.89,10.923-10.923\n                   v-98.304c0-6.033-4.89-10.923-10.923-10.923H50.901v-24.749c0-51.063,41.543-92.607,92.606-92.607l0.016-0.016\n                   c0.22,0.003,0.437,0.016,0.656,0.016c7.955,0,15.414-2.147,21.845-5.878v32.034c-38.002,2.132-68.267,33.714-68.267,72.239\n                   v283.989c0,18.521,15.067,33.587,33.587,33.587h162.202c18.52,0,33.587-15.067,33.587-33.587v-283.99\n                   c0-38.525-30.265-70.107-68.267-72.239v-11.046h52.975v3.55c0,5.27,3.763,9.789,8.947,10.742l169.301,31.13\n                   c0.658,0.121,1.318,0.18,1.976,0.18c2.533,0,5.012-0.883,6.989-2.53c2.491-2.075,3.933-5.15,3.933-8.393V10.923\n                   C502.99,7.681,501.549,4.605,499.058,2.53z M52.703,235.23v76.459H30.858V235.23H52.703z M189.146,34.68h46.604\n                   c0.703,0,1.275,0.571,1.275,1.275v86.107h-49.152V35.955h-0.001C187.871,35.252,188.442,34.68,189.146,34.68z M144.18,74.184\n                   c-12.046,0-21.845-9.8-21.845-21.845s9.8-21.845,21.845-21.845s21.845,9.8,21.845,21.845S156.226,74.184,144.18,74.184z\n                    M305.29,478.413c0,6.475-5.267,11.742-11.742,11.742H131.346c-6.475,0-11.742-5.267-11.742-11.742v-18.842H305.29V478.413z\n                    M305.29,295.185h-48.06c-6.031,0-10.923,4.89-10.923,10.923s4.891,10.923,10.923,10.923h48.06v20.871h-90.112\n                   c-6.033,0-10.923,4.89-10.923,10.923s4.89,10.923,10.923,10.923h90.112v77.979H119.604V224.734H305.29V295.185z M305.29,194.424\n                   v8.465H119.604v-8.465c0-27.855,22.662-50.517,50.517-50.517h84.651C282.628,143.906,305.29,166.569,305.29,194.424z\n                    M311.843,89.293h-52.975V67.448h52.975V89.293z M481.145,132.704l-147.456-27.113V51.15l147.456-27.113V132.704z"></path>\n            <path d="M214.086,317.031h1.092c6.033,0,10.923-4.89,10.923-10.923s-4.89-10.923-10.923-10.923h-1.092\n                   c-6.033,0-10.923,4.89-10.923,10.923S208.053,317.031,214.086,317.031z"></path>\n          </svg>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\fire-protection.svg"*/
        })
    ], SvgFireProtectionComponent);
    return SvgFireProtectionComponent;
}());

//# sourceMappingURL=svg-fire-protection.component.js.map

/***/ }),
/* 688 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgTrafficComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgTrafficComponent = /** @class */ (function () {
    function SvgTrafficComponent() {
    }
    SvgTrafficComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="traffic"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\traffic.svg"*/'<svg id="traffice" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M499,404H457V30a10,10,0,0,0-21,0V287H357L265,37a11,11,0,0,0-10-7H74A10,10,0,0,0,64,41V284L1,388a10,10,0,0,0,4,14h5a10,10,0,0,0,9-5L80,298H183l19,56a10,10,0,0,0,10,7h64l6-2,71-51h82V415a10,10,0,0,0,10,10h53A10,10,0,1,0,499,404ZM273,340H220l-19-56a10,10,0,0,0-10-7H85V51H248l68,183H273l-18-46,16-9a10,10,0,0,0-11-18l-53,32a10,10,0,0,0-4,14,11,11,0,0,0,9,5h5l19-11,20,50a10,10,0,0,0,10,7h57l14,39Z"/><path d="M201,234H146l-18-78a10,10,0,1,0-20,5l20,86a10,10,0,0,0,10,8h64a11,11,0,0,0,11-11A10,10,0,0,0,201,234Z"/><path d="M265,405H181a10,10,0,0,0,0,21h84A10,10,0,1,0,265,405Z"/><path d="M95,351a64,64,0,0,0-63,64c0,36,28,64,63,64a64,64,0,0,0,64-64C159,380,130,351,95,351Zm0,107c-23,0-42-20-42-43a43,43,0,0,1,42-43c24,0,43,19,43,43S119,458,95,458Z"/><path d="M350,351a64,64,0,0,0-63,64c0,36,28,64,63,64a64,64,0,0,0,64-64C414,380,386,351,350,351Zm0,107c-23,0-42-20-42-43a43,43,0,0,1,42-43c24,0,43,19,43,43S374,458,350,458Z"/></svg>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\traffic.svg"*/
        })
    ], SvgTrafficComponent);
    return SvgTrafficComponent;
}());

//# sourceMappingURL=svg-traffic.component.js.map

/***/ }),
/* 689 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgDamageInsulationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgDamageInsulationComponent = /** @class */ (function () {
    function SvgDamageInsulationComponent() {
    }
    SvgDamageInsulationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="damage-insulation"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\damage-insulation.svg"*/'<svg id="damage-insulation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47,181c-17,0-25,31-25,60s8,60,25,60,25-31,25-60S64,181,47,181Zm0,106c-3-2-11-17-11-46s8-44,11-46,11,17,11,46S50,285,47,287Z" transform="translate(0 0)" fill="#211915"/><path d="M477,134H442l-9-15c-17-26-39-43-62-49H322L304,94l-8,30-14,10H270v-4l-5-2c-14-4-32-15-35-22h0L214,67H137c-12,1-24,8-35,20s-20,28-28,48H44C17,138,2,190,2,239S17,339,43,344H75c15,40,38,64,63,66H353c31,0,59-18,81-51l8-14h35c4-2,35-18,35-105S478,135,477,134Zm-170-3,9-32,13-18h34l-12,25,8,28H303Zm-39,16h95l-17,40-37,45H281l-21-35ZM48,330H46c-13-2-29-36-29-91s18-91,30-91,30,34,30,91S61,328,48,330Zm22,0c14-19,21-56,21-91s-7-72-22-91h45c5,4,37,27,37,93s-32,85-36,89H70Zm72,66c-21,0-40-19-54-52h33c4-2,46-15,46-102s-44-105-45-106H87c14-34,34-54,55-54,41,0,73,71,73,158S183,396,142,396Zm211,0H176c10-9,19-21,27-38,15-32,24-75,24-120s-9-88-24-120c-8-16-17-29-27-38h30l13,31c4,13,26,23,38,28l-10,60,27,45,41,2,43-52,20-46-12-41,11-23c43,17,76,79,76,153C452,325,407,396,353,396Zm119-65H448c12-27,18-59,18-93s-6-64-17-91h22c5,4,26,26,26,92S476,327,471,331Z" transform="translate(0 0)" fill="#211915"/></svg>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\damage-insulation.svg"*/
        })
    ], SvgDamageInsulationComponent);
    return SvgDamageInsulationComponent;
}());

//# sourceMappingURL=svg-damage-insulation.component.js.map

/***/ }),
/* 690 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgDamageCladdingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgDamageCladdingComponent = /** @class */ (function () {
    function SvgDamageCladdingComponent() {
    }
    SvgDamageCladdingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="damage-cladding"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\damage-cladding.svg"*/'<svg id="damage-cladding" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47,181c-17,0-25,31-25,60s8,60,25,60,25-31,25-60S64,181,47,181Zm0,106c-3-2-11-17-11-46s8-44,11-46,11,17,11,46S50,285,47,287Z" transform="translate(-1 -1)" fill="#211915"/><path d="M478,134H443l-9-15c-17-27-39-44-64-50h0L343,87l-35-9-23,34-13,4L248,89,213,67H137c-12,1-24,8-35,20s-20,28-28,48H44C17,138,2,190,2,239S17,339,43,344H75c15,40,38,64,63,66h70l23-17,41,8,22-34,13-4,24,28,33,20h1c26-4,51-22,69-51l8-14h35c4-2,35-18,35-105S479,135,478,134ZM48,330H46c-13-2-29-36-29-91s18-91,30-91,30,34,30,91S61,328,48,330Zm22,0c14-19,21-56,21-91s-7-72-22-91h45c5,4,37,27,37,93s-32,85-36,89H70Zm72,66c-21,0-40-19-54-52h33c4-2,46-15,46-102s-44-105-45-106H87c14-34,34-54,55-54,41,0,73,71,73,158S183,396,142,396Zm224-1-26-15-28-33-26,9-20,31-38-7-24,18H176c10-9,19-21,27-38,15-32,24-75,24-120s-9-88-24-120c-8-16-17-29-27-38h35l29,18,28,33,26-9,20-30,32,8,27-18c46,14,81,78,81,155S415,385,366,394Zm107-64H449c12-27,18-59,18-93s-6-64-17-91h22c5,4,26,26,26,92S477,327,472,331Z" transform="translate(-1 -1)" fill="#211915"/></svg>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\damage-cladding.svg"*/
        })
    ], SvgDamageCladdingComponent);
    return SvgDamageCladdingComponent;
}());

//# sourceMappingURL=svg-damage-cladding.component.js.map

/***/ }),
/* 691 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgIceWetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgIceWetComponent = /** @class */ (function () {
    function SvgIceWetComponent() {
    }
    SvgIceWetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="ice-wet"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\ice-wet.svg"*/'<svg version="1.1" id="ice-wet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<path d="M46,210c-17,0-25,31-25,60s8,60,25,60s25-31,25-60S63,210,46,210z M46,316c-3-2-11-17-11-46s8-44,11-46s11,17,11,46\n\n	S49,318,46,316z"/>\n\n<path d="M234,214l-60-27l-60,27l-8,4l-3,2v88l27,15l42,23l0,0l3,2l3-2l0,0l42-23l27-15v-89l-3-2L234,214z M168,330l-54-30v-68l54,30\n\n	V330z M174,252l-19-10l-34-19l53-24l53,24l-34,19L174,252z M234,300l-54,30v-68l54-30V300z"/>\n\n<path d="M399,250c-3,3-31,33-31,50c0,19.3,15.7,35,35,35s35-15.7,35-35c0-18-28-47-31-50C404.7,248,401.3,248,399,250z M403,324\n\n	c-12.7,0-23-10.3-23-23l0,0c0-9,13-26,23-38c10,12,23,29,23,38C426,313.7,415.7,324,403,324L403,324z"/>\n\n<path d="M440,198L440,198c-3,4-19,22-19,33c0,12.7,10.3,23,23,23s23-10.3,23-23c0-11-16-29-19-33C445.7,196,442.3,196,440,198z\n\n	 M444,243c-6.6,0-12-5.4-12-12c0-4,5-12,12-20c6,8,12,16,12,20C456,237.6,450.6,243,444,243z"/>\n\n<path d="M391,231c0-11-16-29-19-33c-2.3-2-5.7-2-8,0l0,0c-3,4-19,22-19,33c0,12.7,10.3,23,23,23S391,243.7,391,231z M356,231\n\n	c0-4,5-12,12-20c6,8,12,16,12,20c-1.9,6.4-8.6,10-14.9,8.1c-3.9-1.2-6.9-4.2-8.1-8.1H356z"/>\n\n<circle cx="409" cy="301" r="6"/>\n\n<path d="M165.1,294.2l1.2-1.6c-0.3-0.7-0.9-1.1-1.6-1.2l-6.8,2.5l-13.6-10L155,279l6,4h2c0.4-0.6,0.4-1.4,0-2l-5-3l6-3\n\n	c0.7-0.4,1.1-1.2,1-2h-2l-6,3v-6c0.1-0.8-0.3-1.6-1-2h-2v8l-11,5v-15l7-3c0.7-0.4,1.1-1.2,1-2h-2l-5,2v-7c0.1-0.8-0.3-1.6-1-2h-2v7\n\n	l-5-3h-2c-0.4,0.6-0.4,1.4,0,2l6,4l-0.1,16.5l-11.7-8.6l1.7-7.4c0.1-0.8-0.3-1.6-1-2l-1.2,1.6l-1.3,5.2l-5.7-4.1\n\n	c-0.6-0.6-1.5-0.7-2.2-0.4l-1.2,1.6l5.7,4.1l-5.4,2.3l-1.2,1.6c0.3,0.7,0.9,1.1,1.6,1.2l6.8-2.5l13.6,10l-10.6,4.8l-6-4h-2\n\n	c-0.4,0.6-0.4,1.4,0,2l5,3l-6,3c-0.7,0.4-1.1,1.2-1,2h2l6-3v6c-0.1,0.8,0.3,1.6,1,2h2v-8l11-5v15l-7,3c-0.7,0.4-1.1,1.2-1,2h2l5-2v7\n\n	c-0.1,0.8,0.3,1.6,1,2h2v-7l5,3h2c0.4-0.6,0.4-1.4,0-2l-6-4l0.1-16.5l11.7,8.6l-1.7,7.4c-0.1,0.8,0.3,1.6,1,2l1.2-1.6l1.3-5.2\n\n	l5.7,4.1c0.6,0.6,1.5,0.7,2.2,0.4l1.2-1.6l-5.7-4.1L165.1,294.2z"/>\n\n<path d="M478,162H44c-28,3-43,57-43,107s16,105,45,105l430,1c0,0,36-21,36-106S479,163,478,162z M46,359c-12,0-33-32-33-89\n\n	s20-92,33-92s30,35,30,92S58,359,46,359z M472,360l-403,1v-1c15-19,22-56,22-92s-8-73-23-92h404c5,5,26,23,26,93S477,357,472,360z"\n\n	/>\n\n<polyline points="281,188 281,256.8 292.3,256.8 292.3,188 "/>\n\n<polyline points="281,80 281,148.8 292.3,148.8 292.3,80 "/>\n\n<polyline points="281,281 281,349.8 292.3,349.8 292.3,281 "/>\n\n<polyline points="281,380 281,448.8 292.3,448.8 292.3,380 "/>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\ice-wet.svg"*/
        })
    ], SvgIceWetComponent);
    return SvgIceWetComponent;
}());

//# sourceMappingURL=svg-ice-wet.component.js.map

/***/ }),
/* 692 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgMechanicalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgMechanicalComponent = /** @class */ (function () {
    function SvgMechanicalComponent() {
    }
    SvgMechanicalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="mechanical"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\mechanical.svg"*/'<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>mechanical</title><path d="M32,188a110,110,0,0,0,116,25L299,364A110,110,0,0,0,402,512h0a111,111,0,0,0,46-10,10,10,0,0,0,3-16l-40-40,3-33,33-3,40,40a10,10,0,0,0,16-3,110,110,0,0,0-22-123,110,110,0,0,0-116-25L213,148A110,110,0,0,0,110,0h0A111,111,0,0,0,64,10a10,10,0,0,0-3,16l40,40L98,99l-33,3L26,61a10,10,0,0,0-16,3A110,110,0,0,0,32,188Zm76-70a10,10,0,0,0,9-9l4-46a10,10,0,0,0-3-8L86,23a91,91,0,0,1,24-3,90,90,0,0,1,82,126,10,10,0,0,0,2,11L355,318a10,10,0,0,0,11,2A90,90,0,0,1,489,426l-32-32a10,10,0,0,0-8-3l-46,4a10,10,0,0,0-9,9l-4,46a10,10,0,0,0,3,8l32,32a91,91,0,0,1-24,3,90,90,0,0,1-82-126,10,10,0,0,0-2-11L157,194a10,10,0,0,0-11-2A90,90,0,0,1,23,86l32,32a10,10,0,0,0,8,3" fill="#050206"/><path d="M289,447l-7,48H229l-7-48a8,8,0,0,0-7-7,185,185,0,0,1-60-25,8,8,0,0,0-10,0l-39,29L69,407l29-39a8,8,0,0,0,0-10,185,185,0,0,1-25-60,8,8,0,0,0-7-7l-48-7V231l48-7a8,8,0,0,0,6-3,116,116,0,0,1-24-11L9,215a8,8,0,0,0-7,8v68a8,8,0,0,0,7,8l50,7a202,202,0,0,0,23,55L51,402a8,8,0,0,0,1,11l48,48a8,8,0,0,0,11,1l40-30a201,201,0,0,0,55,23l7,50a8,8,0,0,0,8,7h68a8,8,0,0,0,8-7l6-39a117,117,0,0,1-12-24A8,8,0,0,0,289,447Z" fill="#030104"/><path d="M222,68l7-48h53l7,48a8,8,0,0,0,7,7,185,185,0,0,1,60,25,8,8,0,0,0,10,0l39-29,38,38-29,39a8,8,0,0,0,0,10,185,185,0,0,1,25,60,8,8,0,0,0,7,7l48,7v53l-48,7h-2a116,116,0,0,1,26,13l35-5a8,8,0,0,0,7-8V224a8,8,0,0,0-7-8l-50-7a202,202,0,0,0-23-55l30-40a8,8,0,0,0-1-11L411,54a8,8,0,0,0-11-1L360,83a201,201,0,0,0-55-23l-7-50a8,8,0,0,0-8-7H222a8,8,0,0,0-8,7l-5,35a117,117,0,0,1,13,26V68Z" fill="#030104"/><path d="M226,125A136,136,0,0,1,388,286h17A153,153,0,0,0,256,105l-28,3A117,117,0,0,1,226,125Z" fill="#030104"/><path d="M285,390A136,136,0,0,1,124,226H106A153,153,0,0,0,256,410l29-3A117,117,0,0,1,285,390Z" fill="#030104"/></svg>'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\mechanical.svg"*/
        })
    ], SvgMechanicalComponent);
    return SvgMechanicalComponent;
}());

//# sourceMappingURL=svg-mechanical.component.js.map

/***/ }),
/* 693 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgElectricalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgElectricalComponent = /** @class */ (function () {
    function SvgElectricalComponent() {
    }
    SvgElectricalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="electrical"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\electrical.svg"*/'<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>electrical</title><path d="M32,188a110,110,0,0,0,116,25L299,364A110,110,0,0,0,402,512h0a111,111,0,0,0,46-10,10,10,0,0,0,3-16l-40-40,3-33,33-3,40,40a10,10,0,0,0,16-3,110,110,0,0,0-22-123,110,110,0,0,0-116-25L213,148A110,110,0,0,0,110,0h0A111,111,0,0,0,64,10a10,10,0,0,0-3,16l40,40L98,99l-33,3L26,61a10,10,0,0,0-16,3A110,110,0,0,0,32,188Zm76-70a10,10,0,0,0,9-9l4-46a10,10,0,0,0-3-8L86,23a91,91,0,0,1,24-3,90,90,0,0,1,82,126,10,10,0,0,0,2,11L355,318a10,10,0,0,0,11,2A90,90,0,0,1,489,426l-32-32a10,10,0,0,0-8-3l-46,4a10,10,0,0,0-9,9l-4,46a10,10,0,0,0,3,8l32,32a91,91,0,0,1-24,3,90,90,0,0,1-82-126,10,10,0,0,0-2-11L157,194a10,10,0,0,0-11-2A90,90,0,0,1,23,86l32,32a10,10,0,0,0,8,3" fill="#050206"/><path d="M108,389h40a9,9,0,0,0,7-4,8,8,0,0,0,0-8L89,247h0a8,8,0,0,0-7-4H12a8,8,0,0,0-7,4,7,7,0,0,0,0,8l48,76H8a8,8,0,0,0-7,5,8,8,0,0,0,1,8H2L142,509h0l6,2h4c3-2,4-6,3-9ZM25,346H68a8,8,0,0,0,7-4,7,7,0,0,0,0-8L27,258H78l58,116H96a9,9,0,0,0-6,3h0a8,8,0,0,0-1,7l32,75Z" fill="#010002"/><path d="M387,70a11,11,0,0,0-11,11v53a68,68,0,0,0,57,67c2,36,43,69,80,69V245c-24,0-55-20-57-43a68,68,0,0,0,57-67V81a11,11,0,0,0-11-11H490V11a11,11,0,1,0-23,0V70H420V11a11,11,0,1,0-23,0V70H387Zm12,64V93h91v41a45,45,0,0,1-45,45h0a45,45,0,0,1-45-45h0Z" fill="#030104"/></svg>'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\electrical.svg"*/
        })
    ], SvgElectricalComponent);
    return SvgElectricalComponent;
}());

//# sourceMappingURL=svg-electrical.component.js.map

/***/ }),
/* 694 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgLeakageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgLeakageComponent = /** @class */ (function () {
    function SvgLeakageComponent() {
    }
    SvgLeakageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="leakage"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\leakage.svg"*/'<svg version="1.1" id="flange" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<ellipse cx="280" cy="181" rx="8" ry="19"/>\n\n<ellipse cx="244" cy="77" rx="8" ry="19"/>\n\n<ellipse cx="244" cy="295" rx="8" ry="19"/>\n\n<path d="M48,130c-17,0-25,31-25,60s8,60,25,60s25-31,25-60S65,130,48,130z M48,236c-3-2-11-17-11-46s8-44,11-46s11,17,11,46\n\n	S51,238,48,236z"/>\n\n<path d="M477,82h-33.4c0.6,2.4,1.4,4.9,2.3,7.3C428.7,49.5,400.3,16,357,16H205c-18,0-37,8-52,20s-27,28-37,48H45C18,86,3,138,3,188\n\n	s15,99,41,104h74c21,41,54,65,88,65h160c25.2,0,59.5-21.2,81.2-64H475c0,0,36-22,36-107S478,83,477,82z M52,280h-8\n\n	c-11-7-26-40-26-91c0-57,17-91,30-91s30,35,30,92S63,274,52,280z M71,279c14-19,22-56,22-91s-8-72-22-91h135c6,5,37,23,37,93\n\n	s-31,86-36,89H71z M206,346c-28,1-55-19-74-53h24v1c0,11,4,19,8,19s8-9,8-19c0-0.4,0-0.7,0-1h38v-2h1c4-1,46-17,46-102\n\n	S213,84,212,83h-40c0.1-2,0.1-4,0-6c0-10-4-19-8-19s-8,9-8,19c-0.1,2-0.1,4,0,6h-26c19-34,47-55,76-55c55,0,100,72,100,160\n\n	s-39,149-89,158H206z M285,306c21-32,32-75,32-120s-11-87-32-120c-11-17-23-29-37-38h68.6c7.1,5.2,20.8,16.5,34.6,34.2\n\n	c18.2,23.4,40,63,40.3,118.8c0.4,67-20.1,108.8-37.4,132c-14.1,19-28.4,29.1-34.6,32.9H246C261,337,274,323,285,306z M357,346h-20.3\n\n	c7.3-5.9,16.2-14.5,25.1-26.4C380.2,295,402,251.1,401.6,181c-0.4-58.6-23.3-100.2-42.4-124.9c-9.5-12.3-19-21.6-26.5-28.1h30\n\n	c46.4,0,89,69,94.4,159C462.2,274.8,412,346,357,346z M471,280h-17.9c10.1-24.9,16.2-55.9,14.9-93c-0.9-24.6-6.8-59.9-19.7-92.1\n\n	c0.2,0.4,0.3,0.7,0.5,1.1H471c5,5,26,22,26,92S476,277,471,280z"/>\n\n<path d="M200,509c-29.8,0-54-24.2-54-54l0,0c0-28,44-85,49-91l4-2l4,2c5,6,49,63,49,91C252,484.1,229,507.9,200,509z M200,377\n\n	c-15,20-42,60-42,78c0,23.5,19,42.5,42.5,42.5s42.5-19,42.5-42.5C242,437,215,397,200,377z"/>\n\n<path d="M200,486c-3,1.3-6.6-0.1-7.9-3.1c-1.3-3,0.1-6.6,3.1-7.9c1.5-0.7,3.3-0.7,4.8,0c10.5,0,19-8.5,19-19l0,0\n\n	c1.3-3,4.9-4.4,7.9-3.1c1.4,0.6,2.5,1.7,3.1,3.1C229.5,472.3,216.3,485.5,200,486z"/>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\leakage.svg"*/
        })
    ], SvgLeakageComponent);
    return SvgLeakageComponent;
}());

//# sourceMappingURL=svg-leakage.component.js.map

/***/ }),
/* 695 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgOtherSafetyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgOtherSafetyComponent = /** @class */ (function () {
    function SvgOtherSafetyComponent() {
    }
    SvgOtherSafetyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="other-safety"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\question.svg"*/'<svg version="1.1" id="others" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<style type="text/css">\n\n	.st0{font-family:\'ArialMT\';}\n\n	.st1{font-size:150px;}\n\n	.st2{font-size:70px;}\n\n</style>\n\n<path d="M272.6,340.1c-5.8-5.8-13.7-9-21.5-9s-15.7,3.2-21.5,9c-5.8,5.8-9,13.7-9,21.5s3.2,15.7,9,21.5c5.8,5.8,13.7,9,21.5,9\n\n	s15.7-3.2,21.5-9c5.8-5.8,9-13.7,9-21.5C281.6,353.8,278.4,345.9,272.6,340.1z M265.4,375.8c-3.7,3.7-9,5.8-14.1,5.8\n\n	s-10.6-2.1-14.1-5.8c-3.7-3.7-5.8-9-5.8-14.1c0-5.1,2.1-10.6,5.8-14.1c3.7-3.7,9-5.8,14.1-5.8s10.6,2.1,14.1,5.8s5.8,8.8,5.8,14.1\n\n	S269.1,372.3,265.4,375.8z"/>\n\n<path d="M372.7,143.6C372.7,76.1,317.9,22,251.1,22c-67.5,0-121.6,54.8-121.6,121.6c0,16.9,13.7,30.5,30.5,30.5s30.5-13.7,30.5-30.5\n\n	c0-33.1,26.8-60.1,60.1-60.1c33.1,0,60.1,26.8,60.1,60.1s-26.8,60.1-60.1,60.1c-16.9,0-30.5,13.7-30.5,30.5v46.3\n\n	c0,16.9,13.7,30.5,30.5,30.5s30.5-13.7,31.7-30.5v-19.4h-0.2C336.4,247.9,372.7,201,372.7,143.6z M274.5,251.6c-2.4,0.5-4,2.6-4,5.3\n\n	v23.1c0,11.1-9,20.1-20.1,20.1c-11.1,0-20.1-9-20.1-20.1v-46.3c0-11.1,9-20.1,20.1-20.1c39,0,70.5-31.7,70.5-70.5\n\n	s-31.7-70.5-70.5-70.5s-70.5,31.7-71.7,71c0,11.1-9,20.1-20.1,20.1c-11.1,0-20.1-9-20.1-20.1c0-61.5,50-111.2,111.2-111.2\n\n	c61.5,0,111.2,50,111.2,111.2C361,197.3,326.3,241,274.5,251.6z"/>\n\n<text transform="matrix(1 0 0 1 345 481.5)" class="st0 st1">m</text>\n\n<text transform="matrix(1 0 0 1 460 434.5)" class="st0 st2">2</text>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\question.svg"*/
        })
    ], SvgOtherSafetyComponent);
    return SvgOtherSafetyComponent;
}());

//# sourceMappingURL=svg-other-safety.component.js.map

/***/ }),
/* 696 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgColdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgColdComponent = /** @class */ (function () {
    function SvgColdComponent() {
    }
    SvgColdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="cold"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\cold.svg"*/'<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 viewBox="0 0 512 513" style="enable-background:new 0 0 512 513;" xml:space="preserve">\n\n<style type="text/css">\n\n</style>\n\n<path d="M353,304l-25-14l21-12c3-2,4-6,2-9c-2.1-2.8-5.9-3.7-9-2l-28,16l-44-26l44-25l28,16h3c2.3-0.1,4.5-1.2,6-3c2-3,1-8-2-9\n\n	l-21-12l25-14c2.8-2.1,3.7-5.9,2-9c-2.1-2.8-5.9-3.7-9-2l-25,14v-27c0-3.9-3.1-7-7-7s-7,3.1-7,7v33l-44,25v-52l28-16\n\n	c3.2-1.8,4.5-5.7,3-9c-2.1-2.8-5.9-3.7-9-2l-21,12v-28c0-3.9-3.1-7-7-7s-7,3.1-7,7v28l-22-12c-3.1-1.7-6.9-0.8-9,2\n\n	c-1.5,3.3-0.2,7.2,3,9l28,16v51l-45-26v-31c0-4-3-7-7-7l0,0c-3.9,0-7,3.1-7,7v24l-24-14c-3.1-1.7-6.9-0.8-9,2c-1.7,3.1-0.8,6.9,2,9\n\n	l24,14l-21,13c-3,2-4,6-2,9c1.2,2.1,3.6,3.3,6,3h4l28-17l45,26l-45,26l-28-17c-3-2-8-1-9,2c-1.7,3.1-0.8,6.9,2,9l21,13l-24,14\n\n	c-2.8,2.1-3.7,5.9-2,9c1.2,2.1,3.6,3.3,6,3h3l24-14v24c0,3.9,3.1,7,7,7l0,0c3.9,0,7-3.1,7-7v-30l45-26v51l-28,16\n\n	c-3.2,1.8-4.5,5.7-3,9c1.2,2.1,3.6,3.3,6,3h3l22-12v29c0,3.9,3.1,7,7,7s7-3.1,7-7v-29l21,12h3c2.4,0.3,4.8-0.9,6-3\n\n	c1.5-3.3,0.2-7.2-3-9l-28-16v-51l44,25v33c0,3.9,3.1,7,7,7s7-3.1,7-7v-25l25,15h4c2.4,0.3,4.8-0.9,6-3\n\n	C358.4,309.4,356.6,305.4,353,304z"/>\n\n<line class="st0" x1="256" y1="2" x2="256" y2="36"/>\n\n<line class="st0" x1="256" y1="42" x2="256" y2="86"/>\n\n<line class="st0" x1="256" y1="92" x2="256" y2="136"/>\n\n<line class="st0" x1="256" y1="379" x2="256" y2="413"/>\n\n<line class="st0" x1="256" y1="419" x2="256" y2="463"/>\n\n<line class="st0" x1="256" y1="469" x2="256" y2="513"/>\n\n<line class="st0" x1="10" y1="255" x2="44" y2="255"/>\n\n<line class="st0" x1="50" y1="255" x2="94" y2="255"/>\n\n<line class="st0" x1="100" y1="255" x2="144" y2="255"/>\n\n<line class="st0" x1="369" y1="255" x2="403" y2="255"/>\n\n<line class="st0" x1="409" y1="255" x2="453" y2="255"/>\n\n<line class="st0" x1="459" y1="255" x2="503" y2="255"/>\n\n<path d="M200,143L200,143V40l0,0c-3-13-33-23-68-23s-66,8-69,22l0,0v19H43v3l0,0v8H29v3l0,0v95h4V73h10v87h4V73h16v69l0,0\n\n	c3,13,32,23,68,23S197,157,200,143z M48,68v-6h15v6H48z M176,61v8l-13,3v-7L176,61z M162,76l13-3v6l-13,3V76L162,76z M162,87l13-3v6\n\n	l-13,3V87L162,87z M162,98l13-3v6l-13,3V98L162,98z M162,109l13-3v6l-13,3V109L162,109z M162,120l13-3v6l-13,3V120L162,120z\n\n	 M162,131l13-3v6l-13,3V131L162,131z M162,142l13-3v6l-13,3V142z M162,153l13-3v6l-13,3v-7V153z M195,143L195,143c-1,4-6,8-15,12V60\n\n	c5.5-1.7,10.5-4.4,15-8v89l0,0V143z M69,41L69,41c2-9,27-20,63-20s62,10,63,20l0,0c0,10-26,21-63,21S68,52,68,42h1V41z M69,142\n\n	L69,142V52c9,9,31,16,63,16l26-2v93l-26,2c-36,0-62-10-63-20V142z"/>\n\n<path d="M101,48v7h11v-7c5-1,9-3,9-6s-8-7-15-7s-15,2-15,7S96,48,101,48z M108,51h-3v-2h3v3V51z M107,39c7,0,10,2,11,3s-3,2-7,2h-6\n\n	c-5,0-7-2-7-2s4-2,11-2l0,0L107,39z"/>\n\n<path d="M127,37v7h11v-7c5-1,9-3,9-6s-8-7-15-7s-15,2-15,7S121,37,127,37z M134,40h-3v-2h3v3V40z M133,28c7,0,10,2,11,3s-3,2-7,2h-6\n\n	c-5,0-7-2-7-2s4-2,10-2l0,0L133,28z"/>\n\n<path class="st1" d="M371,49"/>\n\n<path class="st2" d="M371,49"/>\n\n<path class="st3" d="M307,113c-7,0-10-12-10-24s3-24,10-24s10,12,10,24S314,113,307,113z M307,71c-1,1-4,7-4,18s3,18,4,18s4-7,4-18\n\n	S308,72,307,71z"/>\n\n<path class="st1" d="M411,100"/>\n\n<path class="st1" d="M392,67"/>\n\n<path class="st3" d="M478,47h-26c-8-17-21-26-35-26h-48c-14,0-27,10-35,26h-28c-11,1-17,22-17,42s6,42,18,42h27c8,16,21,26,35,26h48\n\n	c14,0,27-10,35-26h24c0,0,14-9,14-43S478,47,478,47z M417,26c12,0,24,9,31,25h-41c-5-11-12-20-20-25H417z M449,56l-8,8l-45,2l10-10\n\n	H449z M370,26c13,0,25,10,32,27l-10,9c-5-10-14-16-23-16h-28C348,33,358,26,370,26z M294,89c0-23,8-37,13-37s12,14,12,37\n\n	s-7,36-12,36S294,112,294,89z M341,130h29c12,0,22-10,26-26h12c-4,28-20,48-38,48s-22-8-29-21V130z M418,150h-31c13-9,23-26,26-49\n\n	h42c-3,29-19,50-38,50L418,150z M476,124h-21c3.4-8.6,5.4-17.7,6-27v-1h-47l-23,2v2c-3,14-12,24-21,24h-54c6-8,9-22,9-37s-3-29-9-37\n\n	h54c8,0,15,6,19,16l2,4l53-2l13-14l0,0l-2-4h20c2,2,10,9,10,37s-8,37-10,39L476,124z"/>\n\n<ellipse class="st4" cx="123" cy="383" rx="3" ry="8"/>\n\n<ellipse class="st4" cx="123" cy="436" rx="3" ry="8"/>\n\n<ellipse class="st4" cx="95" cy="466" rx="3" ry="8"/>\n\n<ellipse class="st4" cx="95" cy="357" rx="3" ry="8"/>\n\n<path class="st4" d="M207,368h-15l-4-7c-9-14-21-21-33-21H95c-7,0-15,3-22,8s-11,12-15,20H29c-11,1-17,23-17,43s6,41,17,43h30\n\n	c9,17,22,27,37,27h59c12,0,24-8,33-21l4-6h15c2,0,15-8,15-44S208,368,207,368z M96,374c2,2,15,10,15,39s-13,36-15,37H40\n\n	c6-8,9-23,9-38s-3-30-9-38H96z M18,412c0-24,7-38,12-38l0,0c5,0,12,15,12,38s-6,35-11,37h-3C24,447,18,433,18,412z M98,455\n\n	c2,0,19-7,19-42s-18-44-19-44H64c8-14,20-23,31-23c23,0,42,30,42,66s-16,62-37,66h-4c-12,0-23-8-31-23 M112,477c6-4,12-9,16-17\n\n	s13-31,13-50s-5-36-13-50c-3.8-6.4-8.9-11.8-15-16h3c23,0,42,29,42,66s-19,66-42,66h-4V477z M133,477c6.4-4.1,11.9-9.6,16-16\n\n	c9-13,13-31,13-50s-5-36-13-50c-4-6.5-9.5-12-16-16l0,0c23,0,42,29,42,66S156,477,133,477h-1H133z M154,477h-4\n\n	c6.4-4.1,11.9-9.6,16-16c9-13,13-31,13-50s-5-36-13-50c-4-6.5-9.5-12-16-16h4c23,0,42,29,42,66s-19,66-41,66H154z M204,450h-10\n\n	c5-11,7-25,7-39c0.2-13-2.2-25.9-7-38h11c2,2,11,9,11,38s-9,38-11,39H204z"/>\n\n<path class="st4" d="M40,412c0-12-3-25-10-25s-10,13-10,25s3,25,10,25S40,424,40,412z M25,412c0-12,3-18,5-19s5,7,5,19s-3,20-5,19\n\n	S25,424,25,412z"/>\n\n<path class="st4" d="M449,418v-3c0-5.5-4.5-10-10-10s-10,4.5-10,10v3h-11l-6-6h-2v-17h7c5.5,0,10-4.5,10-10s-4.5-10-10-10h-14v-7h7\n\n	c1.7,0,3-1.3,3-3v-9h20c5.5,0,10-4.5,10-10s-4.5-10-10-10h-85c-5.5,0-10,4.5-10,10s4.5,10,10,10h20v10c0,1.7,1.3,3,3,3h7v7h-14\n\n	c-5.5,0-10,4.5-10,10s4.5,10,10,10h7v16h-2l-6,6h-12v-3c0-5.5-4.5-10-10-10s-10,4.5-10,10v3h-39v46h39v3c0,5.5,4.5,10,10,10\n\n	s10-4.5,10-10v-3h12c12.5,15.4,35.2,17.8,50.6,5.3c0.1-0.1,0.2-0.2,0.4-0.3l5-5h12v3c0,5.5,4.5,10,10,10s10-4.5,10-10v-3h39v-46H449\n\n	z M331,457h-33v-32h33v33V457z M344,467c0,1.9-1.6,3.5-3.5,3.5s-3.5-1.6-3.5-3.5v-52c0-1.7,1.3-3,3-3h2v55H344z M347,349\n\n	c-1.9,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5h85c1.9,0,3.5,1.6,3.5,3.5s-1.6,3.5-3.5,3.5h-84H347z M373,362v-7h33v7h-32H373z M396,369v7\n\n	h-12v-7h13H396z M363,389c-1.7,0-3-1.3-3-3v-2h55c1.7,0,3,1.3,3,3v2h-54H363z M429,458h-15c-9.4,12.9-27.6,15.8-40.5,6.4\n\n	c-0.2-0.1-0.3-0.2-0.5-0.4l-6-6h-16v-33h16c2.4-3.3,5.5-6,9-8c1.3-0.4,2.1-1.7,2-3v-19h26v18c-0.1,1.3,0.7,2.6,2,3l3,2l6,6h16v33\n\n	L429,458z M442,468c0,1.9-1.6,3.5-3.5,3.5s-3.5-1.6-3.5-3.5v-56h2c1.7,0,3,1.3,3,3v53H442z M481,458h-32v-33h33v33H481z"/>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\cold.svg"*/
        })
    ], SvgColdComponent);
    return SvgColdComponent;
}());

//# sourceMappingURL=svg-cold.component.js.map

/***/ }),
/* 697 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgPipeInsultationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgPipeInsultationComponent = /** @class */ (function () {
    function SvgPipeInsultationComponent() {
    }
    SvgPipeInsultationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="pipe-insulation"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\pipe-insulation.svg"*/'<svg version="1.1" id="pipe-insulation" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"\n\n	 y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<g>\n\n	<g>\n\n		<path d="M476,126.2h-63c-21-44.4-53-69.7-88-69.7H205c-35,0-67,25.3-88,69.7H47c-28,3.2-43,59.1-43,111.9S20,349,49,349h68\n\n			c21,43.3,52,68.6,87,68.6h121c36,0,67-26.4,88-67.6h61c0,0,36-23.2,36-113S477,127.2,476,126.2z M325,72.3c31,0,59,24.3,78,65.5\n\n			H299c-6.8-15.5-15-28.9-24-40.2l0.3-0.7l-1.6-0.8c-7.8-9.6-16.2-17.5-24.8-23.8H325z M405,152.6l-20,22.2L273,179l25-26.4H405z\n\n			 M210,70.6c12.4-3.8,38.9,11.7,77,73.5l-24,24.3c-3.5-7.1-7.5-13.3-12-18.7l-8.5-8.7l-15.3-10.2c-0.1,0-0.1,0-0.2-0.1l-5.1-1.9\n\n			l-11.1-2.5l-17.8-0.2l-12.1,0.2h-18.8v-0.1h-13.6H135C173.6,56.5,210,70.6,210,70.6z M51.9,332.5l-3.4,0.5l-3-0.7\n\n			c-1-0.4-2-1.1-3-1.9l-0.1-0.1l0,0c-11.8-9.2-26.4-41-26.4-91.3c0-54,16.1-89.3,28.8-95.9l0,0l2.3-1.4h4.8l0.9,1.1\n\n			C65.1,149.1,79,184.5,79,239C79,294.7,63.7,327.7,51.9,332.5z M227,399.8l-10.8,3.1c-3.7,0.7-7.4,1-11.2,1\n\n			c-3.7-0.1-7.3-0.6-10.9-1.5l-13.1-4.3c-7.1-3.2-14-7.7-20.5-13.4L144,366.3c-3.9-5.3-7.5-11-11-17.3h6.1h11.4h15h11.6H195h12\n\n			c6.4-0.1,12.8-1.7,18.9-4.4l9.6-4.5l0.4-0.4l-0.4-0.8c1.5-1.1,3-2.3,4.5-3.6l10.2-10.7l7-10.3l9.2-19.5l4.5-15\n\n			c0-0.2,0.1-0.3,0.1-0.5l30-3.2c-2.2,14.7-5.5,28.5-9.7,41.4l-5.1,13.8c-2.8,6.8-5.8,13.1-9.1,19.1l-6.6,11.1\n\n			c-4.6,7-9.6,13.2-14.9,18.6l-8.5,7.9C240.7,393.1,234,397,227,399.8z M325,402.8h-75c33-23.2,58-69.7,65-128.8l105-2.1\n\n			C411,346.9,371,402.8,325,402.8z M470,335.2h-50c8.7-22.6,14.1-46.5,16-70.8V256l-120,3.2l-58,6.3v5.3c-8,38-30,63.4-53,63.4H72\n\n			c15-20.1,22-59.1,22-97.2c0-38.1-8-77.1-23-97.2h135c20,0,38,15.8,48,42.2l4,10.6l133-4.2l33-37l-4-10.6h50c5,5.3,26,23.2,26,97.2\n\n			S475,332.1,470,335.2z"/>\n\n		<g>\n\n			<path d="M54,173.9c0,0-1.1-1.6-4-1.6c-3.9,0-4.5,0.7-4.5,0.7c-14.9,3.8-22,35.6-22,65.5c0,29.9,7.1,61.7,22,65.5\n\n				c0,0,2.3,0.8,4.2,0.8c1.9,0,5.4-1.5,5.4-1.5c12.3-7.8,18.4-37.6,18.4-64.9C73.5,210.3,67.3,180.5,54,173.9z M48.5,289\n\n				c-3-2.2-11-18.7-11-50.5s8-48.3,11-50.5c3,2.2,11,18.7,11,50.5S51.5,291.2,48.5,289z"/>\n\n		</g>\n\n	</g>\n\n</g>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\pipe-insulation.svg"*/
        })
    ], SvgPipeInsultationComponent);
    return SvgPipeInsultationComponent;
}());

//# sourceMappingURL=svg-pipe-insulation.component.js.map

/***/ }),
/* 698 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgPipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgPipeComponent = /** @class */ (function () {
    function SvgPipeComponent() {
    }
    SvgPipeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="pipe"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\pipe.svg"*/'<svg version="1.1" id="pipe" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n<path d="M45,312c-17,0-25-31-25-60s8-60,25-60s25,31,25,60S62,312,45,312z M45,206c-3,2-11,17-11,46s8,44,11,46\n	s11-17,11-46S48,208,45,206z"/>\n<path d="M472,144H43c-28,3-43,57-43,107s16,105,45,105h425c0,0,36-21,36-106S473,145,472,144z M45,341\n	c-12,0-33-32-33-89s20-92,33-92s30,35,30,92S57,341,45,341z M466,342H68c15-19,22-56,22-92s-8-73-23-92h399c5,5,26,23,26,93\n	S471,339,466,342z"/>\n</svg>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\pipe.svg"*/
        })
    ], SvgPipeComponent);
    return SvgPipeComponent;
}());

//# sourceMappingURL=svg-pipe.component.js.map

/***/ }),
/* 699 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgValveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgValveComponent = /** @class */ (function () {
    function SvgValveComponent() {
    }
    SvgValveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="valve"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\valve.svg"*/'<svg id="valve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M409,296v-9a26,26,0,1,0-51,0v9H328a88,88,0,0,0-16-15l-5-4V236h17a26,26,0,1,0,0-51H290V168h17a9,9,0,0,0,9-9V134h51a26,26,0,0,0,0-51H145a26,26,0,0,0,0,51h51v26a9,9,0,0,0,9,9h17v17H188a26,26,0,1,0,0,51h17v41l-5,4a88,88,0,0,0-16,15H154v-9a26,26,0,1,0-51,0v9H0V415H103v9a26,26,0,1,0,51,0v-9h30a93,93,0,0,0,132,13l13-13h30v9a26,26,0,0,0,51,0v-9H511V296H409ZM103,398H17V313h85v85Zm34,26a9,9,0,1,1-17,0V287a9,9,0,0,1,9-9l6,3a8,8,0,0,1,2,6V424Zm9-306a9,9,0,0,1,0-17H366a9,9,0,0,1,0,17H145Zm68,34V134h85v17H213Zm60,17v17H239V168h34Zm-85,51a9,9,0,0,1-9-9,8,8,0,0,1,3-6l6-2H324a9,9,0,0,1,9,9,8,8,0,0,1-3,6l-6,2H188ZM358,398H324a9,9,0,0,0-7,3,76,76,0,0,1-122,0,9,9,0,0,0-7-3H154V313h34a9,9,0,0,0,7-3,76,76,0,0,1,23-20,9,9,0,0,0,4-7V236h68v46a9,9,0,0,0,4,7l8,5a71,71,0,0,1,15,15,9,9,0,0,0,7,3h34v85Zm34,26a9,9,0,1,1-17,0V287a8,8,0,0,1,3-6l6-2a9,9,0,0,1,9,9V424Zm102-26H409V313h85v85Z" transform="translate(0 -1)" fill="#030104"/></svg>'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\valve.svg"*/
        })
    ], SvgValveComponent);
    return SvgValveComponent;
}());

//# sourceMappingURL=svg-valve.component.js.map

/***/ }),
/* 700 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgSurfaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgSurfaceComponent = /** @class */ (function () {
    function SvgSurfaceComponent() {
    }
    SvgSurfaceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="surface"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\surface.svg"*/'<svg version="1.1" id="surface" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<path d="M379.7,375.5h-45.2V239c0-13.5-1.1-23.2-3.1-28.8c-1.9-5.2-5.3-9.3-10.5-12.5c-5.2-3.3-11.4-4.9-18.6-4.9\n\n	c-13.4,0-24.2,4.3-33,13.2c-8.7,8.7-13.1,23.3-13.1,43.4v126.3h-45.4V234.8c0-14.6-2.6-25.5-7.7-32.4c-4.8-6.6-12.8-9.8-24.3-9.8\n\n	c-9,0-17.4,2.4-25,7.1c-7.6,4.7-12.9,11.4-16.3,20.5c-3.6,9.5-5.4,23.6-5.4,41.9v113.3H86.8V156.7h41.6v19.8\n\n	c5.4-5.7,11.6-10.5,18.7-14.6c11.6-6.6,24.9-10,39.6-10c16.4,0,30.1,3.5,40.8,10.4c8.3,5.4,14.8,12.5,19.3,21.2\n\n	c16.7-21,38-31.6,63.4-31.6c22,0,39.3,6.3,51.4,18.7c12,12.4,18.1,31.4,18.1,56.5V375.5z M344.5,365.5h25.2V227.2\n\n	c0-22.4-5.1-39-15.3-49.5c-10.1-10.4-25-15.7-44.2-15.7c-24.9,0-44.7,11.2-60.3,34.4l-5.6,8.2l-3.3-9.4\n\n	c-3.7-10.6-9.9-18.5-18.9-24.4c-9-5.9-20.9-8.8-35.3-8.8c-12.9,0-24.6,2.9-34.7,8.7c-10.1,5.8-18.3,13.5-24.4,23l-9.2,14.4v-41.4\n\n	H96.8v198.8h25.4V262.2c0-19.8,2-34.6,6-45.4c4.2-11.1,11-19.7,20.4-25.5c9.2-5.7,19.4-8.6,30.3-8.6c14.7,0,25.6,4.7,32.3,13.8\n\n	c6.4,8.7,9.6,21.6,9.6,38.3v130.6h25.4V249.2c0-22.8,5.4-39.7,16-50.4c10.6-10.7,24.1-16.1,40.1-16.1c9,0,17.1,2.2,23.9,6.5\n\n	c7,4.4,11.8,10.3,14.5,17.5c2.5,6.9,3.7,17.4,3.7,32.3V365.5z"/>\n\n<path d="M459.8,211.4h-79.7l0.6-5.5c0.8-7.6,3.3-14.9,7.4-21.7c4-6.7,11.6-15.1,23-25.7c10.7-9.9,14.4-14.2,15.6-16\n\n	c2.1-3.2,3.2-6.3,3.2-9.2c0-3-0.7-5.2-2.1-6.6c-1.4-1.4-3.4-2.1-6.3-2.1c-3.7,0-5.3,1.3-6.3,2.2c-1.1,1.1-2.4,3.6-2.8,9.2l-0.3,5.2\n\n	l-29.8-3l0.5-5c1.3-12.2,5.7-21.2,12.9-26.8c7-5.4,15.8-8.1,26.2-8.1c11.4,0,20.6,3.2,27.4,9.6c6.8,6.4,10.3,14.5,10.3,24.1\n\n	c0,5.2-1,10.3-2.8,15.1c-1.8,4.6-4.7,9.5-8.6,14.4c-2.6,3.3-7,7.8-13.5,13.7c-4.2,3.8-6.9,6.4-8.7,8.2h33.6V211.4z M391.6,201.4\n\n	h58.1v-8.3H407l4.3-7.5c1.2-2.1,2.7-4.2,4.6-6.3c1.8-2,5.8-5.9,12.2-11.7c6-5.5,10.2-9.7,12.4-12.5c3.3-4.2,5.7-8.2,7.2-11.9\n\n	c1.4-3.6,2.1-7.4,2.1-11.4c0-6.8-2.3-12.3-7.1-16.8c-4.9-4.6-11.6-6.8-20.5-6.8c-8.2,0-14.8,2-20.1,6.1c-4.1,3.1-6.9,8.1-8.3,14.9\n\n	l9.5,1c0.9-4.5,2.5-7.9,5-10.4c3.4-3.5,7.9-5.2,13.4-5.2c5.5,0,10,1.7,13.3,5c3.3,3.3,5,7.9,5,13.7c0,5-1.7,10-4.9,14.8\n\n	c-1.5,2.1-4.8,6.2-17.1,17.7c-10.6,9.9-17.8,17.8-21.3,23.6C394.4,193.2,392.7,197.2,391.6,201.4z"/>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\surface.svg"*/
        })
    ], SvgSurfaceComponent);
    return SvgSurfaceComponent;
}());

//# sourceMappingURL=svg-surface.component.js.map

/***/ }),
/* 701 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgDamagedCladdingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgDamagedCladdingComponent = /** @class */ (function () {
    function SvgDamagedCladdingComponent() {
    }
    SvgDamagedCladdingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="damaged-cladding"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\damage-cladding.svg"*/'<svg id="damage-cladding" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47,181c-17,0-25,31-25,60s8,60,25,60,25-31,25-60S64,181,47,181Zm0,106c-3-2-11-17-11-46s8-44,11-46,11,17,11,46S50,285,47,287Z" transform="translate(-1 -1)" fill="#211915"/><path d="M478,134H443l-9-15c-17-27-39-44-64-50h0L343,87l-35-9-23,34-13,4L248,89,213,67H137c-12,1-24,8-35,20s-20,28-28,48H44C17,138,2,190,2,239S17,339,43,344H75c15,40,38,64,63,66h70l23-17,41,8,22-34,13-4,24,28,33,20h1c26-4,51-22,69-51l8-14h35c4-2,35-18,35-105S479,135,478,134ZM48,330H46c-13-2-29-36-29-91s18-91,30-91,30,34,30,91S61,328,48,330Zm22,0c14-19,21-56,21-91s-7-72-22-91h45c5,4,37,27,37,93s-32,85-36,89H70Zm72,66c-21,0-40-19-54-52h33c4-2,46-15,46-102s-44-105-45-106H87c14-34,34-54,55-54,41,0,73,71,73,158S183,396,142,396Zm224-1-26-15-28-33-26,9-20,31-38-7-24,18H176c10-9,19-21,27-38,15-32,24-75,24-120s-9-88-24-120c-8-16-17-29-27-38h35l29,18,28,33,26-9,20-30,32,8,27-18c46,14,81,78,81,155S415,385,366,394Zm107-64H449c12-27,18-59,18-93s-6-64-17-91h22c5,4,26,26,26,92S477,327,472,331Z" transform="translate(-1 -1)" fill="#211915"/></svg>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\damage-cladding.svg"*/
        })
    ], SvgDamagedCladdingComponent);
    return SvgDamagedCladdingComponent;
}());

//# sourceMappingURL=svg-damaged-cladding.component.js.map

/***/ }),
/* 702 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgDamagedInsulationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgDamagedInsulationComponent = /** @class */ (function () {
    function SvgDamagedInsulationComponent() {
    }
    SvgDamagedInsulationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="damaged-insulation"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\damage-insulation.svg"*/'<svg id="damage-insulation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47,181c-17,0-25,31-25,60s8,60,25,60,25-31,25-60S64,181,47,181Zm0,106c-3-2-11-17-11-46s8-44,11-46,11,17,11,46S50,285,47,287Z" transform="translate(0 0)" fill="#211915"/><path d="M477,134H442l-9-15c-17-26-39-43-62-49H322L304,94l-8,30-14,10H270v-4l-5-2c-14-4-32-15-35-22h0L214,67H137c-12,1-24,8-35,20s-20,28-28,48H44C17,138,2,190,2,239S17,339,43,344H75c15,40,38,64,63,66H353c31,0,59-18,81-51l8-14h35c4-2,35-18,35-105S478,135,477,134Zm-170-3,9-32,13-18h34l-12,25,8,28H303Zm-39,16h95l-17,40-37,45H281l-21-35ZM48,330H46c-13-2-29-36-29-91s18-91,30-91,30,34,30,91S61,328,48,330Zm22,0c14-19,21-56,21-91s-7-72-22-91h45c5,4,37,27,37,93s-32,85-36,89H70Zm72,66c-21,0-40-19-54-52h33c4-2,46-15,46-102s-44-105-45-106H87c14-34,34-54,55-54,41,0,73,71,73,158S183,396,142,396Zm211,0H176c10-9,19-21,27-38,15-32,24-75,24-120s-9-88-24-120c-8-16-17-29-27-38h30l13,31c4,13,26,23,38,28l-10,60,27,45,41,2,43-52,20-46-12-41,11-23c43,17,76,79,76,153C452,325,407,396,353,396Zm119-65H448c12-27,18-59,18-93s-6-64-17-91h22c5,4,26,26,26,92S476,327,471,331Z" transform="translate(0 0)" fill="#211915"/></svg>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\damage-insulation.svg"*/
        })
    ], SvgDamagedInsulationComponent);
    return SvgDamagedInsulationComponent;
}());

//# sourceMappingURL=svg-damaged-insulation.component.js.map

/***/ }),
/* 703 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgEnergyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgEnergyComponent = /** @class */ (function () {
    function SvgEnergyComponent() {
    }
    SvgEnergyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="energy"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\electrical.svg"*/'<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>electrical</title><path d="M32,188a110,110,0,0,0,116,25L299,364A110,110,0,0,0,402,512h0a111,111,0,0,0,46-10,10,10,0,0,0,3-16l-40-40,3-33,33-3,40,40a10,10,0,0,0,16-3,110,110,0,0,0-22-123,110,110,0,0,0-116-25L213,148A110,110,0,0,0,110,0h0A111,111,0,0,0,64,10a10,10,0,0,0-3,16l40,40L98,99l-33,3L26,61a10,10,0,0,0-16,3A110,110,0,0,0,32,188Zm76-70a10,10,0,0,0,9-9l4-46a10,10,0,0,0-3-8L86,23a91,91,0,0,1,24-3,90,90,0,0,1,82,126,10,10,0,0,0,2,11L355,318a10,10,0,0,0,11,2A90,90,0,0,1,489,426l-32-32a10,10,0,0,0-8-3l-46,4a10,10,0,0,0-9,9l-4,46a10,10,0,0,0,3,8l32,32a91,91,0,0,1-24,3,90,90,0,0,1-82-126,10,10,0,0,0-2-11L157,194a10,10,0,0,0-11-2A90,90,0,0,1,23,86l32,32a10,10,0,0,0,8,3" fill="#050206"/><path d="M108,389h40a9,9,0,0,0,7-4,8,8,0,0,0,0-8L89,247h0a8,8,0,0,0-7-4H12a8,8,0,0,0-7,4,7,7,0,0,0,0,8l48,76H8a8,8,0,0,0-7,5,8,8,0,0,0,1,8H2L142,509h0l6,2h4c3-2,4-6,3-9ZM25,346H68a8,8,0,0,0,7-4,7,7,0,0,0,0-8L27,258H78l58,116H96a9,9,0,0,0-6,3h0a8,8,0,0,0-1,7l32,75Z" fill="#010002"/><path d="M387,70a11,11,0,0,0-11,11v53a68,68,0,0,0,57,67c2,36,43,69,80,69V245c-24,0-55-20-57-43a68,68,0,0,0,57-67V81a11,11,0,0,0-11-11H490V11a11,11,0,1,0-23,0V70H420V11a11,11,0,1,0-23,0V70H387Zm12,64V93h91v41a45,45,0,0,1-45,45h0a45,45,0,0,1-45-45h0Z" fill="#030104"/></svg>'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\electrical.svg"*/
        })
    ], SvgEnergyComponent);
    return SvgEnergyComponent;
}());

//# sourceMappingURL=svg-energy.component.js.map

/***/ }),
/* 704 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgInsulatedSurfaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgInsulatedSurfaceComponent = /** @class */ (function () {
    function SvgInsulatedSurfaceComponent() {
    }
    SvgInsulatedSurfaceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="insulated-surface"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\surface-insulate.svg"*/'<svg version="1.1" id="surface" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<path d="M379.7,375.5h-45.2V239c0-13.5-1.1-23.2-3.1-28.8c-1.9-5.2-5.3-9.3-10.5-12.5c-5.2-3.3-11.4-4.9-18.6-4.9\n\n	c-13.4,0-24.2,4.3-33,13.2c-8.7,8.7-13.1,23.3-13.1,43.4v126.3h-45.4V234.8c0-14.6-2.6-25.5-7.7-32.4c-4.8-6.6-12.8-9.8-24.3-9.8\n\n	c-9,0-17.4,2.4-25,7.1c-7.6,4.7-12.9,11.4-16.3,20.5c-3.6,9.5-5.4,23.6-5.4,41.9v113.3H86.8V156.7h41.6v19.8\n\n	c5.4-5.7,11.6-10.5,18.7-14.6c11.6-6.6,24.9-10,39.6-10c16.4,0,30.1,3.5,40.8,10.4c8.3,5.4,14.8,12.5,19.3,21.2\n\n	c16.7-21,38-31.6,63.4-31.6c22,0,39.3,6.3,51.4,18.7c12,12.4,18.1,31.4,18.1,56.5V375.5z M344.5,365.5h25.2V227.2\n\n	c0-22.4-5.1-39-15.3-49.5c-10.1-10.4-25-15.7-44.2-15.7c-24.9,0-44.7,11.2-60.3,34.4l-5.6,8.2l-3.3-9.4\n\n	c-3.7-10.6-9.9-18.5-18.9-24.4c-9-5.9-20.9-8.8-35.3-8.8c-12.9,0-24.6,2.9-34.7,8.7c-10.1,5.8-18.3,13.5-24.4,23l-9.2,14.4v-41.4\n\n	H96.8v198.8h25.4V262.2c0-19.8,2-34.6,6-45.4c4.2-11.1,11-19.7,20.4-25.5c9.2-5.7,19.4-8.6,30.3-8.6c14.7,0,25.6,4.7,32.3,13.8\n\n	c6.4,8.7,9.6,21.6,9.6,38.3v130.6h25.4V249.2c0-22.8,5.4-39.7,16-50.4c10.6-10.7,24.1-16.1,40.1-16.1c9,0,17.1,2.2,23.9,6.5\n\n	c7,4.4,11.8,10.3,14.5,17.5c2.5,6.9,3.7,17.4,3.7,32.3V365.5z"/>\n\n<path d="M459.8,211.4h-79.7l0.6-5.5c0.8-7.6,3.3-14.9,7.4-21.7c4-6.7,11.6-15.1,23-25.7c10.7-9.9,14.4-14.2,15.6-16\n\n	c2.1-3.2,3.2-6.3,3.2-9.2c0-3-0.7-5.2-2.1-6.6c-1.4-1.4-3.4-2.1-6.3-2.1c-3.7,0-5.3,1.3-6.3,2.2c-1.1,1.1-2.4,3.6-2.8,9.2l-0.3,5.2\n\n	l-29.8-3l0.5-5c1.3-12.2,5.7-21.2,12.9-26.8c7-5.4,15.8-8.1,26.2-8.1c11.4,0,20.6,3.2,27.4,9.6c6.8,6.4,10.3,14.5,10.3,24.1\n\n	c0,5.2-1,10.3-2.8,15.1c-1.8,4.6-4.7,9.5-8.6,14.4c-2.6,3.3-7,7.8-13.5,13.7c-4.2,3.8-6.9,6.4-8.7,8.2h33.6V211.4z M391.6,201.4\n\n	h58.1v-8.3H407l4.3-7.5c1.2-2.1,2.7-4.2,4.6-6.3c1.8-2,5.8-5.9,12.2-11.7c6-5.5,10.2-9.7,12.4-12.5c3.3-4.2,5.7-8.2,7.2-11.9\n\n	c1.4-3.6,2.1-7.4,2.1-11.4c0-6.8-2.3-12.3-7.1-16.8c-4.9-4.6-11.6-6.8-20.5-6.8c-8.2,0-14.8,2-20.1,6.1c-4.1,3.1-6.9,8.1-8.3,14.9\n\n	l9.5,1c0.9-4.5,2.5-7.9,5-10.4c3.4-3.5,7.9-5.2,13.4-5.2c5.5,0,10,1.7,13.3,5c3.3,3.3,5,7.9,5,13.7c0,5-1.7,10-4.9,14.8\n\n	c-1.5,2.1-4.8,6.2-17.1,17.7c-10.6,9.9-17.8,17.8-21.3,23.6C394.4,193.2,392.7,197.2,391.6,201.4z"/>\n\n<path d="M487,432H44V67h443V432z M54,422h423V77H54V422z"/>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\surface-insulate.svg"*/
        })
    ], SvgInsulatedSurfaceComponent);
    return SvgInsulatedSurfaceComponent;
}());

//# sourceMappingURL=svg-insulated-surface.component.js.map

/***/ }),
/* 705 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgOthersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgOthersComponent = /** @class */ (function () {
    function SvgOthersComponent() {
    }
    SvgOthersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="others"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\question.svg"*/'<svg version="1.1" id="others" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<style type="text/css">\n\n	.st0{font-family:\'ArialMT\';}\n\n	.st1{font-size:150px;}\n\n	.st2{font-size:70px;}\n\n</style>\n\n<path d="M272.6,340.1c-5.8-5.8-13.7-9-21.5-9s-15.7,3.2-21.5,9c-5.8,5.8-9,13.7-9,21.5s3.2,15.7,9,21.5c5.8,5.8,13.7,9,21.5,9\n\n	s15.7-3.2,21.5-9c5.8-5.8,9-13.7,9-21.5C281.6,353.8,278.4,345.9,272.6,340.1z M265.4,375.8c-3.7,3.7-9,5.8-14.1,5.8\n\n	s-10.6-2.1-14.1-5.8c-3.7-3.7-5.8-9-5.8-14.1c0-5.1,2.1-10.6,5.8-14.1c3.7-3.7,9-5.8,14.1-5.8s10.6,2.1,14.1,5.8s5.8,8.8,5.8,14.1\n\n	S269.1,372.3,265.4,375.8z"/>\n\n<path d="M372.7,143.6C372.7,76.1,317.9,22,251.1,22c-67.5,0-121.6,54.8-121.6,121.6c0,16.9,13.7,30.5,30.5,30.5s30.5-13.7,30.5-30.5\n\n	c0-33.1,26.8-60.1,60.1-60.1c33.1,0,60.1,26.8,60.1,60.1s-26.8,60.1-60.1,60.1c-16.9,0-30.5,13.7-30.5,30.5v46.3\n\n	c0,16.9,13.7,30.5,30.5,30.5s30.5-13.7,31.7-30.5v-19.4h-0.2C336.4,247.9,372.7,201,372.7,143.6z M274.5,251.6c-2.4,0.5-4,2.6-4,5.3\n\n	v23.1c0,11.1-9,20.1-20.1,20.1c-11.1,0-20.1-9-20.1-20.1v-46.3c0-11.1,9-20.1,20.1-20.1c39,0,70.5-31.7,70.5-70.5\n\n	s-31.7-70.5-70.5-70.5s-70.5,31.7-71.7,71c0,11.1-9,20.1-20.1,20.1c-11.1,0-20.1-9-20.1-20.1c0-61.5,50-111.2,111.2-111.2\n\n	c61.5,0,111.2,50,111.2,111.2C361,197.3,326.3,241,274.5,251.6z"/>\n\n<text transform="matrix(1 0 0 1 345 481.5)" class="st0 st1">m</text>\n\n<text transform="matrix(1 0 0 1 460 434.5)" class="st0 st2">2</text>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\question.svg"*/
        })
    ], SvgOthersComponent);
    return SvgOthersComponent;
}());

//# sourceMappingURL=svg-others.component.js.map

/***/ }),
/* 706 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgInsulatedOthersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgInsulatedOthersComponent = /** @class */ (function () {
    function SvgInsulatedOthersComponent() {
    }
    SvgInsulatedOthersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="insulated-others"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\others-insulation.svg"*/'<svg id="others-insulation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>others-insultation</title><path d="M328,245V221l-43,21V229l31-17-31-16v-7H273l-9-5-6,11,15,8v20l-14,8,3,6-31-15v25H136V221L93,242V229l32-18L93,195v-7H81l-8-4-6,11,14,7v20l-14,8,4,6L39,221v25H2V511H363V245H328Zm-35,6,23-11v23l-23-12h0Zm-8-42,6,3-6,3v-6Zm-12,27v6l-5-3Zm-30,4,23,11h0l-23,12V240ZM101,251l23-11v23l-23-12h0Zm-8-43,7,3-7,4v-7ZM81,236v5l-5-2Zm-30,4,23,11h0L51,263V240ZM14,257H39v26l48-25,48,25V257h40V368H151l24,49-24,49h25v33H14V257ZM170,454l11-23,12,23H170Zm0-74h23l-12,23ZM351,499H188V466h25l-22-43h25v9h12v-9h8V411h-8V401H216v10H192l22-43H188V257h43v26l48-25,48,25V257h23V499Z" fill="#211915"/><path d="M334,44" fill="none" stroke="#201813" stroke-miterlimit="10" stroke-width="6"/><path d="M334,44" fill="#fff" stroke="#201813" stroke-miterlimit="10" stroke-width="6"/><path d="M241,137c-10,0-15-18-15-35s5-35,15-35,15,18,15,35S251,137,241,137Zm0-62c-2,1-6,10-6,27s5,26,6,27,6-10,6-27S243,77,241,76Z" fill="#201813"/><path d="M392,118" fill="none" stroke="#201813" stroke-miterlimit="10" stroke-width="6"/><path d="M364,71" fill="none" stroke="#201813" stroke-miterlimit="10" stroke-width="6"/><path d="M489,40H453C440,16,422,2,402,2H332c-20,0-39,14-51,38H240c-16,2-25,33-25,62s9,61,26,61h40c12,24,30,38,51,38h70c21,0,39-15,51-37h35s21-13,21-62S490,41,489,40ZM402,11c18,0,34,13,45,36H386c-8-16-18-28-29-36h44Zm46,44L436,67l-65,2,15-15h62ZM332,11c19,0,37,15,47,40L366,64c-8-15-20-23-33-23H290C300,21,315,11,332,11ZM222,103c0-33,12-53,19-53s17,20,17,53-10,52-17,52S222,136,222,103Zm68,60h42c17,0,32-15,38-38l17-2c-6,41-29,70-56,70C316,193,301,182,290,163Zm112,30H358c19-13,34-38,38-71h61C451,162,428,193,402,193Zm84-37H457a133,133,0,0,0,9-39v-5l-70,2-34,3v3c-5,21-17,35-31,35H255c9-11,13-33,13-53s-5-42-13-53h78c12,0,22,9,28,23l2,6,77-2,19-20h0l-2-6h29c3,3,15,13,15,53S489,154,486,155Z" fill="#201813"/></svg>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\others-insulation.svg"*/
        })
    ], SvgInsulatedOthersComponent);
    return SvgInsulatedOthersComponent;
}());

//# sourceMappingURL=svg-insulated-others.component.js.map

/***/ }),
/* 707 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgCilinderAreaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgCilinderAreaComponent = /** @class */ (function () {
    function SvgCilinderAreaComponent() {
    }
    SvgCilinderAreaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="area-cilinder"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\surface-cilinder.svg"*/'<svg id="cilinder" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><ellipse cx="261" cy="433" rx="181" ry="58" fill="none" stroke="#211915" stroke-miterlimit="10" stroke-width="10"/><line x1="261" y1="442" x2="261" y2="75" fill="none" stroke="#c23334" stroke-miterlimit="10" stroke-width="10"/><line x1="438" y1="79" x2="257" y2="79" fill="none" stroke="#c23334" stroke-miterlimit="10" stroke-width="10"/><ellipse cx="261" cy="75" rx="181" ry="58" fill="none" stroke="#211915" stroke-miterlimit="10" stroke-width="10"/><line x1="80" y1="75" x2="80" y2="433" fill="none" stroke="#211915" stroke-miterlimit="10" stroke-width="10"/><line x1="442" y1="75" x2="442" y2="433" fill="none" stroke="#211915" stroke-miterlimit="10" stroke-width="10"/><text transform="translate(323 65)" font-size="57.6" fill="#c13234" stroke="#c13234" font-family="Myriad Pro">r</text><text transform="translate(273 270)" font-size="57.6" fill="#c13234" stroke="#c13234" font-family="Myriad Pro">h</text></svg>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\surface-cilinder.svg"*/
        })
    ], SvgCilinderAreaComponent);
    return SvgCilinderAreaComponent;
}());

//# sourceMappingURL=svg-cilinder-area.component.js.map

/***/ }),
/* 708 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgCubeAreaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgCubeAreaComponent = /** @class */ (function () {
    function SvgCubeAreaComponent() {
    }
    SvgCubeAreaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="area-cube"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\surface-cube.svg"*/'<svg version="1.1" id="cube" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<style type="text/css">\n\n	.st0{fill:none;stroke:#211915;stroke-width:10;stroke-miterlimit:10;}\n\n	.st1{fill:none;stroke:#C23334;stroke-width:10;stroke-miterlimit:10;}\n\n	.st2{fill:#C23334;}\n\n	.st3{font-family:\'ArialMT\';}\n\n	.st4{font-size:57.6px;}\n\n</style>\n\n<rect x="149.8" y="16" class="st0" width="355.2" height="355.5"/>\n\n<rect x="37.9" y="104.6" class="st0" width="355.2" height="355.5"/>\n\n<line class="st0" x1="392.2" y1="106.5" x2="505.1" y2="16"/>\n\n<line class="st0" x1="35.9" y1="104.6" x2="146.9" y2="16"/>\n\n<line class="st1" x1="37.9" y1="460.8" x2="149.8" y2="371.2"/>\n\n<line class="st0" x1="396" y1="460.8" x2="507" y2="371.2"/>\n\n<line class="st1" x1="34" y1="459.8" x2="399" y2="459.8"/>\n\n<line class="st1" x1="37.9" y1="460.8" x2="37.9" y2="103.6"/>\n\n<text transform="matrix(1 0 0 1 210 500)" class="st2 st3 st4">a</text>\n\n<text transform="matrix(1 0 0 1 80 395)" class="st2 st3 st4">b</text>\n\n<text transform="matrix(1 0 0 1 1 269)" class="st2 st3 st4">h</text>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\surface-cube.svg"*/
        })
    ], SvgCubeAreaComponent);
    return SvgCubeAreaComponent;
}());

//# sourceMappingURL=svg-cube-area.component.js.map

/***/ }),
/* 709 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgCircleAreaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgCircleAreaComponent = /** @class */ (function () {
    function SvgCircleAreaComponent() {
    }
    SvgCircleAreaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="area-circle"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\surface-circle.svg"*/'<svg id="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>surface-circle</title><rect width="512" height="512" fill="none"/><line x1="496" y1="258" x2="252" y2="258" fill="none" stroke="#c23334" stroke-miterlimit="10" stroke-width="10"/><circle cx="258" cy="256" r="240" fill="none" stroke="#211915" stroke-miterlimit="10" stroke-width="10"/><text transform="translate(360 235)" font-size="57.6" fill="#c13234" stroke="#c13234" font-family="Myriad Pro">r</text></svg>'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\surface-circle.svg"*/
        })
    ], SvgCircleAreaComponent);
    return SvgCircleAreaComponent;
}());

//# sourceMappingURL=svg-circle-area.component.js.map

/***/ }),
/* 710 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgHousekeepingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgHousekeepingComponent = /** @class */ (function () {
    function SvgHousekeepingComponent() {
    }
    SvgHousekeepingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="housekeeping"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\housekeeping.svg"*/'<svg version="1.1" id="housekeeping" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"\n\n	 y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<g>\n\n	<g>\n\n		<path d="M78.6,422.8c-5.5,0-10,4.5-10,10v0.4c0,5.5,4.5,10,10,10c5.5,0,10-4.5,10-10v-0.4C88.6,427.2,84.1,422.8,78.6,422.8z"/>\n\n	</g>\n\n</g>\n\n<g>\n\n	<g>\n\n		<path d="M268.9,422.8c-5.5,0-10,4.5-10,10v0.4c0,5.5,4.5,10,10,10s10-4.5,10-10v-0.4C278.9,427.2,274.5,422.8,268.9,422.8z"/>\n\n	</g>\n\n</g>\n\n<g>\n\n	<g>\n\n		<path d="M481,156.4h-7.7c-2.2-10-7.8-18.9-16.1-25.4c-8.3-6.6-18.5-9.9-28.7-9.7c-6.6-17-23.2-28.9-42.1-28.9\n\n			c-11.2,0-21.7,4.1-29.8,11.3c-8.9-7.1-21.2-11.3-34.1-11.3c-14.4,0-35.9,8.7-46,23.4c-15.4-3.8-31.6-0.8-44.1,8.5\n\n			c-8.4,6.2-14.1,14.6-16.7,24.2V27.4c0-15.1-12.3-27.4-27.4-27.4h-34.5c-15.1,0-27.4,12.3-27.4,27.4v242h-17.2c-5.5,0-10,4.5-10,10\n\n			v42.5H55.3c-14.2,0-20.2,11.3-23.7,18.1l-15.5,29.6c-3,5.6-4.7,15.1,0.1,23c1.3,2.2,3.8,5.2,8,7.4l-12.3,41.9\n\n			c-5.9,17.5-10.7,41.5-0.6,56.8c3.6,5.5,10.7,12.2,24.3,13.3c0.3,0,0.5,0,0.8,0h274.8c0.3,0,0.5,0,0.8,0c4.6-0.4,8.5-1.4,11.7-2.8\n\n			h103.4c15.7,0,28.5-10.6,29.9-24.6L480,247h1c13,0,23.6-10.6,23.6-23.6V180C504.6,167,494,156.4,481,156.4z M244.4,140.4\n\n			c9.1-6.8,22.2-8,33.2-3.1c2.7,1.2,5.7,1.1,8.3-0.1s4.6-3.6,5.4-6.4c2.6-9.3,20.1-18.3,31.3-18.3c10.8,0,21.7,4.9,26,11.6\n\n			c1.8,2.9,5,4.6,8.4,4.6s6.6-1.7,8.4-4.6c4.6-7.2,12.5-11.6,21.1-11.6c12.3,0,23,9.2,24.8,21.4c0.4,2.8,2,5.3,4.3,6.8\n\n			s5.2,2.1,8,1.4c7.5-1.8,15.3-0.1,21.4,4.7c3.3,2.6,5.8,5.9,7.5,9.6H234.5C235.6,150,238.9,144.4,244.4,140.4z M146.5,27.4\n\n			c0-4.1,3.3-7.4,7.4-7.4h34.5c4,0,7.4,3.4,7.4,7.4v242h-49.2V27.4z M119.3,289.4h103.5v32.5H119.3V289.4z M33.8,378.8l15.5-29.6\n\n			c3.5-6.7,4.4-7.4,6-7.4H293c1.7,0,2.6,1,6,7.4l13.6,26c2.1,4,1.9,6,1.6,6.5c-0.3,0.5-1.4,1-2.7,1H311c0,0-0.1,0-0.1,0H36.7\n\n			c-2.3,0-3.2-0.5-3.4-0.6C33.1,381.7,33.2,380.1,33.8,378.8z M319.6,487.6c-1.1,1.6-3.1,3.8-8.8,4.4h-31.4v-27.9\n\n			c0-5.5-4.5-10-10-10s-10,4.5-10,10V492h-75.6v-47.5c0-5.5-4.5-10-10-10c-5.5,0-10,4.5-10,10V492H88.1v-27.9c0-5.5-4.5-10-10-10\n\n			s-10,4.5-10,10V492H36.8c-5.7-0.5-7.8-2.7-8.8-4.4c-4.3-6.5-3.2-21.3,2.9-39.6c0-0.1,0.1-0.2,0.1-0.4l13.2-44.9h259.1l13.2,44.9\n\n			c0,0.1,0.1,0.2,0.1,0.4C322.8,466.3,323.9,481.1,319.6,487.6z M437.1,482.6c-0.3,3.2-4.1,6.5-10,6.5h-86.7\n\n			c4-14.6-0.1-33.1-4.8-47.3l-12.4-42.1c3.3-1.8,6.1-4.4,8-7.6c2.5-4.2,5.8-13.2-1-26.1l-13.6-26c-3.5-6.8-9.5-18.1-23.7-18.1h-50.1\n\n			v-42.5c0-5.5-4.5-10-10-10h-17.2V247h41.2c4.9,37.2,36.8,66,75.3,66c38.5,0,70.4-28.8,75.3-66H460L437.1,482.6z M277.1,247h110.2\n\n			c-4.7,26.1-27.6,46-55.1,46C304.8,293,281.9,273.2,277.1,247z M481,227H215.7v-50.6h8.6c0,0,0,0,0,0c0,0,0,0,0,0H481\n\n			c1.9,0,3.6,1.6,3.6,3.6v43.5h0C484.6,225.4,482.9,227,481,227z"/>\n\n	</g>\n\n</g>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\housekeeping.svg"*/
        })
    ], SvgHousekeepingComponent);
    return SvgHousekeepingComponent;
}());

//# sourceMappingURL=svg-housekeeping.component.js.map

/***/ }),
/* 711 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgStructuralComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgStructuralComponent = /** @class */ (function () {
    function SvgStructuralComponent() {
    }
    SvgStructuralComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="structural"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\structural.svg"*/'<svg version="1.1" id="structural" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<g>\n\n	<path d="M512,59.2V8.5c0-0.1-0.1-0.2-0.1-0.4c0.2-0.7,0.2-1.5-0.2-2.1l-0.4-0.7c0-0.1-0.1-0.1-0.1-0.2c-0.4-0.8-0.9-1.6-1.5-2.3\n\n		c-0.2-0.2-0.4-0.4-0.7-0.6c-0.5-0.5-1.1-0.9-1.8-1.2c-0.3-0.1-0.5-0.3-0.8-0.4c-0.9-0.4-2-0.6-3-0.6H230.5c-2.3,0-4.4,0.9-6,2.5\n\n		L2.5,224.3l0,0c-0.7,0.7-1.2,1.5-1.6,2.4c-0.4,1-0.6,2-0.7,3.1c0,0.2-0.1,0.3-0.1,0.5v51.2c0,4.7,3.8,8.5,8.5,8.5h64\n\n		c21.2,0,38.4,17.2,38.4,38.4v9.3L2.5,446c-1.6,1.6-2.5,3.8-2.5,6v51.4c0,4.7,3.8,8.5,8.5,8.5h273.1c1.2,0,2.3-0.2,3.3-0.7\n\n		c0.1,0,0.2-0.2,0.3-0.2c0.9-0.4,1.7-1,2.4-1.7l0.1-0.1L458.2,330l51.2-51.3c1.6-1.6,2.5-3.8,2.5-6v-51.3c0-0.1-0.1-0.2-0.1-0.4\n\n		c0.2-0.7,0.2-1.5-0.2-2.1l-0.4-0.8c0-0.1-0.1-0.1-0.1-0.2c-0.8-1.7-2.2-3.2-4-4.1c-0.3-0.1-0.5-0.3-0.8-0.4c-0.9-0.4-2-0.6-3-0.6\n\n		h-64c-0.7,0-1.4,0.2-2.1,0.4c-0.7-0.2-1.4-0.4-2.1-0.4c-19.9-0.1-36.5-15.4-38.1-35.2L509.5,65.3C511.1,63.7,512,61.5,512,59.2z\n\n		 M233.5,17h249.2l-205,205H28.5L233.5,17z M111,362.2v43.4c0,21.2-17.2,38.4-38.4,38.4H29.2L111,362.2z M273,495H17v-34h55.5\n\n		c30.6,0,55.5-24.8,55.5-55.3v-77.5c0-30.5-24.9-55.2-55.5-55.3H17v-34h256v34h-55.5c-30.6,0-55.5,24.8-55.5,55.3v77.5\n\n		c0,30.5,24.9,55.2,55.5,55.3H273V495L273,495z M495,269.4l-48.9,48.9L290,482.2v-26.5L458.3,279l36.7-36.7V269.4L495,269.4z\n\n		 M436.1,230c0.7,0,1.5-0.2,2.1-0.4c0.7,0.2,1.4,0.4,2.1,0.4h41.8l-36.7,36.7L277.6,443h-60.2c-21.2,0-38.3-17.2-38.3-38.3v-76.1\n\n		c0-21.3,17.3-38.5,38.6-38.6H282c2.3,0,4.5-0.9,6.1-2.5l95.5-95.5C391,214.7,412.2,230,436.1,230z M495,56L382.2,168.9l0,0L290,261\n\n		v-27L495,29V56L495,56z"/>\n\n</g>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\structural.svg"*/
        })
    ], SvgStructuralComponent);
    return SvgStructuralComponent;
}());

//# sourceMappingURL=svg-structural.component.js.map

/***/ }),
/* 712 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgRectangleAreaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgRectangleAreaComponent = /** @class */ (function () {
    function SvgRectangleAreaComponent() {
    }
    SvgRectangleAreaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="area-rectangle"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\rectangle.svg"*/'<svg version="1.1" id="cube" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<style type="text/css">\n\n	.st0{fill:none;stroke:#211915;stroke-width:10;stroke-miterlimit:10;}\n\n	.st1{fill:none;stroke:#C23334;stroke-width:10;stroke-miterlimit:10;}\n\n	.st2{fill:#C23334;}\n\n	.st3{font-family:\'ArialMT\';}\n\n	.st4{font-size:57.6px;}\n\n</style>\n\n<rect x="48.8" y="23.2" class="st0" width="436.4" height="436.7"/>\n\n<line class="st1" x1="43.9" y1="459.6" x2="489.2" y2="459.6"/>\n\n<line class="st1" x1="48.8" y1="456.9" x2="48.8" y2="18.1"/>\n\n<text transform="matrix(1 0 0 1 252.0765 500)" class="st2 st3 st4">a</text>\n\n<text transform="matrix(1 0 0 1 11 252.8755)" class="st2 st3 st4">b</text>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\rectangle.svg"*/
        })
    ], SvgRectangleAreaComponent);
    return SvgRectangleAreaComponent;
}());

//# sourceMappingURL=svg-rectangle-area.component.js.map

/***/ }),
/* 713 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgLikeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgLikeComponent = /** @class */ (function () {
    function SvgLikeComponent() {
    }
    SvgLikeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="like"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\like.svg"*/'<svg version="1.1" id="like" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<path d="M492.8,348.1c10.5-13.4,15.5-27.7,14.9-42.5c-0.6-16.3-7.9-29-13.9-36.8c7-17.3,9.6-44.6-13.6-65.8\n\n	c-17-15.5-45.9-22.5-86-20.6c-28.2,1.3-51.7,6.5-52.7,6.7h-0.1c-5.4,1-11,2.1-16.8,3.4c-0.4-6.9,0.7-23.9,13.4-62.2\n\n	c15-45.6,14.1-80.5-2.8-103.9C317.4,1.9,289,0,280.7,0c-8,0-15.4,3.3-20.7,9.4c-11.9,13.8-10.5,39.3-9,51.1\n\n	c-14.1,37.9-53.7,130.8-87.3,156.6c-0.6,0.4-1.2,1-1.7,1.5c-9.9,10.4-16.5,21.6-21,31.5c-6.3-3.4-13.5-5.4-21.2-5.4H54.5\n\n	c-24.6,0-44.5,20-44.5,44.5v174c0,24.6,20,44.5,44.5,44.5h65.3c9.5,0,18.4-3,25.7-8.1l25.2,3c3.9,0.5,72.4,9.2,142.7,7.8\n\n	c12.7,1,24.7,1.5,35.9,1.5c19.2,0,35.9-1.5,49.8-4.5c32.8-7,55.1-20.9,66.5-41.3c8.7-15.6,8.7-31.2,7.3-41\n\n	c21.3-19.3,25.1-40.6,24.3-55.6C496.7,360.9,494.8,353.5,492.8,348.1z M54.5,478.9c-8.7,0-15.6-7.1-15.6-15.6V289.2\n\n	c0-8.7,7.1-15.6,15.6-15.6h65.3c8.7,0,15.6,7.1,15.6,15.6v174c0,8.7-7.1,15.6-15.6,15.6H54.5V478.9z M465.4,335.6\n\n	c-4.5,4.7-5.4,11.9-1.9,17.5c0,0.1,4.4,7.6,4.9,17.9c0.7,14-6,26.4-20.1,37c-5,3.9-7.1,10.5-4.9,16.5c0,0.1,4.6,14.2-2.9,27.6\n\n	c-7.2,12.8-23.1,22.1-47.3,27.2c-19.4,4.2-45.7,4.9-78.1,2.4c-0.4,0-1,0-1.5,0c-68.8,1.5-138.4-7.5-139.2-7.6h-0.1l-10.8-1.3\n\n	c0.6-3,1-6.2,1-9.4V289.2c0-4.6-0.7-9.1-2-13.3c1.9-7.2,7.3-23.1,19.9-36.7c48.1-38.1,95.1-166.7,97.1-172.3\n\n	c0.9-2.2,1.1-4.7,0.6-7.2c-1.8-12-1.2-26.7,1.4-31c5.7,0.1,21,1.7,30.2,14.5c10.9,15.1,10.5,42.1-1.3,77.8\n\n	c-18,54.5-19.5,83.2-5.2,95.8c7.1,6.3,16.5,6.6,23.3,4.2c6.5-1.5,12.7-2.8,18.6-3.7c0.4-0.1,1-0.2,1.4-0.3\n\n	c32.9-7.2,91.8-11.6,112.2,7.1c17.3,15.8,5,36.8,3.6,39.1c-4,6-2.8,13.8,2.6,18.6c0.1,0.1,11.3,10.7,11.9,24.9\n\n	C479.2,316.2,474.7,325.9,465.4,335.6z"/>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\like.svg"*/
        })
    ], SvgLikeComponent);
    return SvgLikeComponent;
}());

//# sourceMappingURL=svg-like.component.js.map

/***/ }),
/* 714 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgIncreaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgIncreaseComponent = /** @class */ (function () {
    function SvgIncreaseComponent() {
    }
    SvgIncreaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="increase"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\increase.svg"*/'<svg version="1.1" id="increase" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<path d="M497,482h-45V151h45c13.3,0,20-16.1,10.6-25.6l-120-121c-5.9-5.9-15.4-5.9-21.3,0l-120,121c-9.4,9.4-2.7,25.6,10.7,25.6h45\n\n	v90H195c-8.3,0-15,6.7-15,15v75H75c-8.3,0-15,6.7-15,15v136H15c-8.3,0-15,6.7-15,15s6.7,15,15,15h482c8.3,0,15-6.7,15-15\n\n	C512,488.7,505.3,482,497,482z M180,482H90V361h90V482z M302,482h-92V271h92V482z M422,136v346h-90V136c0-8.3-6.7-15-15-15h-24\n\n	l84-84.7l84,84.7h-24C428.7,121,422,127.7,422,136z"/>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\increase.svg"*/
        })
    ], SvgIncreaseComponent);
    return SvgIncreaseComponent;
}());

//# sourceMappingURL=svg-increase.component.js.map

/***/ }),
/* 715 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgEmptyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvgEmptyComponent = /** @class */ (function () {
    function SvgEmptyComponent() {
    }
    SvgEmptyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[svg="empty"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\empty.svg"*/'<svg version="1.1" id="empty" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"\n\n	 y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\empty.svg"*/
        })
    ], SvgEmptyComponent);
    return SvgEmptyComponent;
}());

//# sourceMappingURL=svg-empty.component.js.map

/***/ }),
/* 716 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurfaceMaterialPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__const_more_more__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SurfaceMaterialPipe = /** @class */ (function () {
    function SurfaceMaterialPipe() {
    }
    SurfaceMaterialPipe.prototype.transform = function (field) {
        var material = __WEBPACK_IMPORTED_MODULE_1__const_more_more__["a" /* More */].MATERIALS.find(function (t) { return t[1] == field.surface_material_index; });
        return !!material ? "" + material[0] : "" + (field.surface_material || '');
    };
    SurfaceMaterialPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'surface_material' })
    ], SurfaceMaterialPipe);
    return SurfaceMaterialPipe;
}());

//# sourceMappingURL=surface-material.pipe.js.map

/***/ }),
/* 717 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_flashlight__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToolsComponent = /** @class */ (function () {
    function ToolsComponent(flashlight, message) {
        this.flashlight = flashlight;
        this.message = message;
        this.calc_path = '';
        this.external_app = window.startApp;
    }
    ToolsComponent.prototype.ngOnInit = function () {
        var _this = this;
        try {
            this.flashlight_on = this.flashlight.isSwitchedOn();
            window.plugins.packagemanager.show(true, function (apps) {
                var calc = apps.find((function (a) { return !!a.match(/calc/g); })).split('/');
                _this.calc_path = calc[calc.length - 1].split(';')[1];
            });
        }
        catch (ex) {
            console.log(ex.message);
        }
    };
    ToolsComponent.prototype.toggle_light = function () {
        if (!this.flashlight.isSwitchedOn()) {
            this.flashlight.switchOn();
            this.flashlight_on = true;
        }
        else {
            this.flashlight.switchOff();
            this.flashlight_on = false;
        }
    };
    ToolsComponent.prototype.open_calculator = function () {
        this.external_app.set({ "application": this.calc_path }).start();
    };
    ToolsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tools',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\components\tools\tools.component.html"*/'  <button ion-button small icon-only color="light" (click)="open_calculator()">\n\n    <ion-icon name="ios-calculator"></ion-icon>\n\n  </button>\n\n  <button ion-button small icon-only color="light" [class.pushed]="flashlight_on" (click)="toggle_light()">\n\n    <ion-icon name="document-flashlight"></ion-icon>\n\n  </button>'/*ion-inline-end:"D:\Sofware Factory\tbi\src\components\tools\tools.component.html"*/,
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_flashlight__["a" /* Flashlight */], __WEBPACK_IMPORTED_MODULE_2__services__["d" /* MessageService */]])
    ], ToolsComponent);
    return ToolsComponent;
}());

//# sourceMappingURL=tools.component.js.map

/***/ }),
/* 718 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SummaryHeaderComponent = /** @class */ (function () {
    function SummaryHeaderComponent() {
    }
    SummaryHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'summary-header',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\summary\components\header.html"*/''/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\summary\components\header.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SummaryHeaderComponent);
    return SummaryHeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ }),
/* 719 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);


var GlobalErrorHandler = /** @class */ (function () {
    function GlobalErrorHandler(message, http) {
        this.message = message;
        this.http = http;
    }
    GlobalErrorHandler.prototype.handleError = function (err) {
        var _this = this;
        //this.message.alert('ERROR', `${err.message || err.toString()}<br>${err.stack || ''}`);
        var _message = {
            text: "User: " + localStorage.getItem('tbi-user'),
            attachments: [
                {
                    color: 'danger',
                    fields: [
                        //{ title: 'Message', value: err.message || err.toString(), short: false },
                        { title: 'Stack', value: err.stack || '', short: false },
                    ]
                }
            ]
        };
        var _headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        _headers.append("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
        try {
            console.log(err);
            this.http.post('https://hooks.slack.com/services/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', "payload=" + JSON.stringify(_message, null, 2), {
                headers: _headers
            })
                .toPromise()
                .catch(function (ex) { return _this.message.alert('Error', ex.toString()); });
        }
        catch (ex) {
            //
        }
    };
    return GlobalErrorHandler;
}());

//# sourceMappingURL=global-error.js.map

/***/ })
],[401]);
//# sourceMappingURL=main.js.map