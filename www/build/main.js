webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Picture; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__marker__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_with_picture__ = __webpack_require__(296);
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

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TbiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fields__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__marker__ = __webpack_require__(75);



var TbiComponent = /** @class */ (function () {
    function TbiComponent(project, item) {
        var _this = this;
        this.id = '';
        this.project = null;
        this.reports = [];
        this.fields = new __WEBPACK_IMPORTED_MODULE_1__fields__["a" /* Fields */]();
        this.date = new Date();
        this.project = project;
        if (!!item) {
            this.fields = new __WEBPACK_IMPORTED_MODULE_1__fields__["a" /* Fields */](item.fields);
            this.project = project;
            if (!!item.date)
                this.date = item.date instanceof Date ? item.date : new Date(String(item.date));
            this.id = item.id || Math.random().toString().substr(2);
            this.reports = (item.reports || []).map(function (r) { return new __WEBPACK_IMPORTED_MODULE_0__report_base__["a" /* ReportBase */](project, _this, r); });
            this.markers = (item.markers || []).map(function (m) { return new __WEBPACK_IMPORTED_MODULE_2__marker__["a" /* Marker */](m); });
            var report = this.reports.find(function (r) { return !!(r.path).match(/(surface|pipe|valve|flange)/gi); });
            this.result = !!report ? report.result : null;
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
            var report = this.reports.find(function (r) { return !!r.path.match(/\\insulated/gi); });
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

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LicencesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LicencesService = /** @class */ (function () {
    function LicencesService(http) {
        this.http = http;
        this.lock = false;
        this._licence_type = 'PRO';
        this._projects = [];
    }
    Object.defineProperty(LicencesService.prototype, "type", {
        get: function () {
            return this._licence_type;
        },
        set: function (type) {
            this._licence_type = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LicencesService.prototype, "projects", {
        get: function () {
            return this._projects;
        },
        set: function (projects) {
            this.lock = this.type == 'BASIC' && this.projects.reduce(function (a, p) { return a.concat(p.components); }, []).length >= 5;
            this._projects = projects;
        },
        enumerable: true,
        configurable: true
    });
    LicencesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], LicencesService);
    return LicencesService;
}());

//# sourceMappingURL=licences.service.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MessageService);
    return MessageService;
}());

//# sourceMappingURL=messages.service.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return People; });
/* unused harmony export Contact */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Project; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_with_picture__ = __webpack_require__(296);
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
        _this.people = new People();
        if (!project)
            return _this;
        _this.name = project.name || '';
        _this.desc = project.desc || '';
        _this.date = project.date || new Date();
        _this.user = project.user || '';
        _this.price = Number(project.price) || null;
        _this.documents = (project.documents || []).map(function (d) { return new __WEBPACK_IMPORTED_MODULE_0____["a" /* Document */](d); });
        _this.components = project.components.map(function (c) { return new __WEBPACK_IMPORTED_MODULE_1__component__["a" /* TbiComponent */](_this, c); });
        _this.people = new People(project.people);
        return _this;
    }
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

/***/ 168:
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

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fields; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const_more_more__ = __webpack_require__(98);

var Fields = /** @class */ (function () {
    function Fields(f) {
        this.location = '';
        this.operational_time = null;
        this.surface = null;
        this.surface_material = null;
        this.surface_material_index = null;
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
    }
    Object.defineProperty(Fields.prototype, "surface_material_friendly", {
        get: function () {
            var _this = this;
            var material = __WEBPACK_IMPORTED_MODULE_0__const_more_more__["a" /* More */].MATERIALS.find(function (t) { return t[1] == _this.surface_material_index; });
            return !!material ? "" + material[0] : "" + (this.surface_material || '');
        },
        enumerable: true,
        configurable: true
    });
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

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__project_service__ = __webpack_require__(53);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__project_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_service__ = __webpack_require__(175);
/* unused harmony reexport ComponentService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_service__ = __webpack_require__(54);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__file_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_service__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__messages_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__licences_service__ = __webpack_require__(102);
/* unused harmony reexport LicencesService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__picture_service__ = __webpack_require__(300);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__picture_service__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__non_picture__ = __webpack_require__(297);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__non_picture__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectPageBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scroll_to_component_class__ = __webpack_require__(172);
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
        event.stopPropagation();
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

/***/ 172:
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
    ScrollToComponent.prototype.on_focus = function (event) {
        return;
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

/***/ 175:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__project_service__["a" /* ProjectService */]])
    ], ComponentService);
    return ComponentService;
}());

//# sourceMappingURL=component.service.js.map

/***/ }),

/***/ 178:
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
        LEAKAGE: 'Mantenance\\Leakege',
        DAMAGED: "Mantenance\\Damaged",
        CONDENSATION: "Mantenance\\Condensation",
        STRUCTURAL: "Mantenance\\Structural",
        MECHANICAL: "Mantenance\\Mechanical",
        ELECTRICAL: "Mantenance\\Electrical",
    },
    CUSTOM: "Custom",
    DAMAGED: 'Damaged',
    CONDENSATION: 'Condensation'
};
//# sourceMappingURL=report.const.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_project_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__summary_edit__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_report_router__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reports__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__progress_kendo_drawing__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__projects_projects__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_opener__ = __webpack_require__(173);
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
    function SummaryPage(navParams, alertCtrl, actionSheetCtrl, modalCtrl, service, navCtrl, message, opener, file, orientation) {
        var _this = this;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.service = service;
        this.navCtrl = navCtrl;
        this.message = message;
        this.opener = opener;
        this.file = file;
        this.components = [];
        this.heat_lost = new __WEBPACK_IMPORTED_MODULE_3__models__["e" /* Value */]();
        this.saving_potential_min = new __WEBPACK_IMPORTED_MODULE_3__models__["e" /* Value */]();
        this.saving_potential_max = new __WEBPACK_IMPORTED_MODULE_3__models__["e" /* Value */]();
        this.advises = new Map([
            ['', ''],
            ['System OK', 'OK'],
            ['Insulation recommended', 'Recommended'],
            ['SAFETY-Insulation recommended', 'SAFETY-Recommended'],
            ['Savings can be achieved by increasing the insulant performance or thickness', 'SAVINGS-achieved']
        ]);
        this.totals = new __WEBPACK_IMPORTED_MODULE_3__models__["d" /* Result */]();
        this.orientation = orientation.type;
        orientation.onChange().subscribe(function () { return _this.orientation = orientation.type; });
    }
    SummaryPage.prototype.go_to_projects = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__projects_projects__["a" /* ProjectsPage */]);
    };
    SummaryPage.prototype.go_to_reports = function (component) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__reports__["v" /* ReportsPage */], {
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__reports__["v" /* ReportsPage */], {
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
        var component = new __WEBPACK_IMPORTED_MODULE_8__models_component__["a" /* TbiComponent */](c.project, c);
        component.id = '';
        component.fields.location += ' Copy';
        component.date = new Date();
        this.project.components.push(component);
        this.service.save(this.project).then(function (p) {
            _this.get_project();
        });
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
                        _this.service.save(_this.project).then(function () { return _this.get_project(); });
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
    SummaryPage.prototype.export_pdf = function (pdf) {
        var _this = this;
        pdf.export().then(function (g) {
            Object(__WEBPACK_IMPORTED_MODULE_9__progress_kendo_drawing__["b" /* exportPDF */])(g).then(function (data) {
                _this.file.create_pdf(data, 'prueba').then(function (r) { return _this.opener.open(r, 'application/pdf'); });
            });
        });
    };
    SummaryPage.prototype.open = function (report, event) {
        event.cancelBubble = true;
        (new __WEBPACK_IMPORTED_MODULE_6__models_report_router__["a" /* ReportRouter */](report.component.project, report.component, this.navCtrl)).navigate_to_report(report.path, report.summary_id, report);
    };
    SummaryPage.prototype.edit = function (cl) {
        var _this = this;
        if (cl.reports.length == 1) {
            (new __WEBPACK_IMPORTED_MODULE_6__models_report_router__["a" /* ReportRouter */](cl.project, cl, this.navCtrl)).navigate_to_report(cl.reports[0].path, cl.reports[0].summary_id, cl.reports[0]);
            return this;
        }
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__summary_edit__["a" /* SummaryEditPage */], {
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
            (new __WEBPACK_IMPORTED_MODULE_6__models_report_router__["a" /* ReportRouter */](cl.project, cl, _this.navCtrl)).navigate_to_report(report.path, report.summary_id, report);
        });
        modal.present();
        return this;
    };
    SummaryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        setTimeout(function () { return _this.get_project(); }, 0);
    };
    SummaryPage.prototype.get_project = function () {
        var _this = this;
        this.totals.headLost.power = 0;
        this.totals.headLost.money = 0;
        this.totals.savingPotentialMin.power = 0;
        this.totals.savingPotentialMin.money = 0;
        this.totals.savingPotentialMax.power = 0;
        this.totals.savingPotentialMax.money = 0;
        this.service.get(this.navParams.get('project').id).then(function (project) {
            _this.project = project;
            //this.project = this.navParams.get('project');
            _this.components = [].concat((_this.project.components || [])).sort(function (a, b) { return a.date > b.date ? 1 : -1; });
            _this.components.filter(function (c) { return !!c.result && !c.fields.unknow_surface; })
                .map(function (c) { return c.result; })
                .forEach(function (r) {
                _this.totals.headLost.power += r.headLost.power;
                _this.totals.headLost.money += r.headLost.money;
                _this.totals.savingPotentialMin.power += r.savingPotentialMin.power;
                _this.totals.savingPotentialMin.money += r.savingPotentialMin.money;
                _this.totals.savingPotentialMax.power += r.savingPotentialMax.power;
                _this.totals.savingPotentialMax.money += r.savingPotentialMax.money;
            });
        });
    };
    SummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-summary',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\summary\summary.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>Summary - {{project?.name}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button on-tap="export_pdf(pdf)">\n\n        <!-- <ion-icon name="document-pdf"></ion-icon>&nbsp;PDF -->\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <kendo-pdf-export #pdf paperSize="A4" margin=".5cm" [scale]="0.5" landscape="true">\n\n\n\n    <!-- <ion-grid class="summary-total" *ngIf="!!totals">\n\n      <ion-row>\n\n        <ion-col col-12 text-center>\n\n          <table class="total red">\n\n            <tr>\n\n              <td class="c-red">Energy loss per year</td>\n\n              <td text-right>{{totals.headLost.power | number: \'1.0-0\'}}</td>\n\n              <td>kWh</td>\n\n            </tr>\n\n            <tr>\n\n              <td>Money loss per year</td>\n\n              <td text-right>{{totals.headLost.money | number: \'1.0-0\'}}</td>\n\n              <td>€</td>\n\n            </tr>\n\n          </table>\n\n\n\n          <table class="total green">\n\n            <tr>\n\n              <td>Potential energy saving per year</td>\n\n              <td text-right>{{totals.savingPotentialMin.power | number: \'1.0-0\'}}</td>\n\n              <td text-center>\n\n                <ion-icon name="md-arrow-forward"></ion-icon>\n\n              </td>\n\n              <td text-right>{{totals.savingPotentialMax.power | number: \'1.0-0\'}}</td>\n\n              <td>kWh</td>\n\n            </tr>\n\n            <tr>\n\n              <td>Potential money saving per year</td>\n\n              <td text-right>{{totals.savingPotentialMin.money | number: \'1.0-0\'}}</td>\n\n              <td text-center>\n\n                <ion-icon name="md-arrow-forward"></ion-icon>\n\n              </td>\n\n              <td text-right>{{totals.savingPotentialMax.money | number: \'1.0-0\'}}</td>\n\n              <td>€</td>\n\n            </tr>\n\n          </table>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid> -->\n\n    <table class="data">\n\n      <thead>\n\n        <tr>\n\n          <th colspan="2"></th>\n\n          <th colspan="6" class="bg-green" style="border-bottom: 5px solid #fff;">Energy analysis</th>\n\n          <th rowspan="2" class="bg-red">\n\n            <span svg="safety"></span>\n\n            Safety\n\n          </th>\n\n          <th rowspan="2" class="bg-blue">\n\n            <span svg="maintenance"></span>\n\n            Maintenance\n\n          </th>\n\n          <th rowspan="2" class="bg-gray">\n\n            <span svg="custom"></span>\n\n            Others\n\n          </th>\n\n          <th class="bg-blue-light">TBI</th>\n\n          <th class="bg-green-light" colspan="5">Input</th>\n\n        </tr>\n\n        <tr>\n\n          <th colspan="2" style="border-right: 1px solid #444">Component / Location</th>\n\n          <th colspan="2" style="border-top: 1px solid #444; border-right: 1px solid #444; color: red">Energy Loss<br>per\n\n            year</th>\n\n          <th colspan="4" style="border-top: 1px solid #444; border-right: 1px solid #444; color: #375623">Potential\n\n            Savings<br>per\n\n            year</th>\n\n          <th>Insulation<br>Advise</th>\n\n          <th class="vertical">\n\n            <div><span one-line>Insulated</span></div>\n\n          </th>\n\n          <th class="vertical">\n\n            <div><span one-line>Surface (m<sup>2</sup>)</span></div>\n\n          </th>\n\n          <th class="vertical">\n\n            <div><span one-line>DN or Øe</span></div>\n\n          </th>\n\n          <th class="vertical">\n\n            <div><span one-line>Length</span></div>\n\n          </th>\n\n          <th class="vertical">\n\n            <div><span one-line>Items number</span></div>\n\n          </th>\n\n        </tr>\n\n      </thead>\n\n      <tbody *ngFor="let c of components; let i=index">\n\n        <tr [class.disabled]="c.fields.unknow_surface">\n\n          <td rowspan="2" (click)="actions(c, $event)" double-border text-center style="white-space: nowrap; padding-right: 1rem">\n\n            <ion-icon name="md-menu" style="margin: 0 .25rem 0; float: left"></ion-icon>\n\n            {{i+1}}-\n\n          </td>\n\n          <td rowspan="2" double-border class="b-right" style="min-width: 10vw">\n\n            {{ellipsis(c.fields.location)}}\n\n          </td>\n\n          <td *ngIf="!!c.result" text-right class="bg-light-red c-red">{{c.result.headLost.power / 1000 | number:\n\n            \'1.1-1\'}}</td>\n\n          <td *ngIf="!!c.result" class="bg-light-red c-red b-right">MWh<span *ngIf="c.fields.unknow_surface">/m<sup>2</sup></span></td>\n\n          <td *ngIf="!!c.result" text-right class="bg-green c-gree">{{c.result.savingPotentialMin?.power / 1000 |\n\n            number: \'1.1-1\'}}</td>\n\n          <td *ngIf="!!c.result" text-center class="bg-green c-gree p-0" style="width: 15px; padding: 0; white-space: nowrap">\n\n            <!-- <ion-icon name="md-arrow-forward"></ion-icon> -->\n\n            --\n\n          </td>\n\n          <td *ngIf="!!c.result" text-left class="bg-green c-gree">{{c.result.savingPotentialMax?.power / 1000 |\n\n            number: \'1.1-1\'}}</td>\n\n          <td *ngIf="!!c.result" class="bg-green c-gree mesure b-right">MWh<span *ngIf="c.fields.unknow_surface">/m<sup>2</sup></span></td>\n\n          <td *ngIf="!c.result" colspan="2" class="b-right"></td>\n\n          <td *ngIf="!c.result" colspan="4" class="b-right"></td>\n\n\n\n          <td rowspan="2" double-border text-center class="bg-red">\n\n            <ng-container *ngFor="let r of c.reports_by_type(\'safety|hot\')">\n\n              <a href="#" (click)="open(r, $event)" *ngIf="!r.component.is_hot">{{r.summary_id}}</a>\n\n              <a href="#" (click)="open(r, $event)" *ngIf="!!r.component.is_hot">Hot surface</a>\n\n            </ng-container>\n\n            <ion-icon name="md-add-circle" (click)="add_report(\'safety\', c, $event)"></ion-icon>\n\n          </td>\n\n          <td rowspan="2" double-border text-center class="bg-blue">\n\n            <a href="#" (click)="open(r, $event)" *ngFor="let r of c.reports_by_type(\'mantenance|condensation|damaged\')">{{r.summary_id}}</a>\n\n            <ion-icon name="md-add-circle" (click)="add_report(\'maintenance\',c , $event)"></ion-icon>\n\n          </td>\n\n          <td rowspan="2" double-border text-center class="bg-gray">\n\n            <a href="#" (click)="open(r, $event)" *ngFor="let r of c.reports_by_type(\'generic|custom\')">{{r.summary_id}}</a>\n\n            <ion-icon name="md-add-circle" (click)="add_report(\'maintenance\', c, $event)"></ion-icon>\n\n          </td>\n\n          <td rowspan="2" *ngIf="!!c.result" double-border text-center>\n\n            <ng-container [ngSwitch]="advises.get(c.result.advise)">\n\n              <span advise-picture *ngSwitchCase="\'Recommended\'" svg="insulation"></span>\n\n              <span advise-picture *ngSwitchCase="\'Maintenance\'" svg="mechanical"></span>\n\n              <span advise-picture *ngSwitchCase="\'Unknow surface\'" svg="surface"></span>\n\n              <span advise-picture *ngSwitchCase="\'OK\'" svg="like"></span>\n\n              <span advise-picture *ngSwitchCase="\'Increase\'" svg="increase"></span>\n\n            </ng-container>\n\n          </td>\n\n          <td rowspan="2" *ngIf="!c.result" double-border text-center></td>\n\n          <td rowspan="2" double-border text-center>{{!!c.insulated ? \'Y\' : \'N\'}}</td>\n\n          <td *ngIf="null!=c.fields.surface_temp" rowspan="2" double-border text-center>{{c.fields.surface_temp}}</td>\n\n          <td *ngIf="null==c.fields.surface_temp" rowspan="2" double-border text-center>&nbsp;</td>\n\n          <td rowspan="2" double-border text-center>\n\n            <span *ngIf="!!c.surface">{{c.fields.surface}} m<sup>2</sup></span>\n\n            <span>{{c.fields.main_dimension || c.fields.nominal_diameter}}</span>\n\n          </td>\n\n          <td rowspan="2" double-border text-center>{{c.fields.length}}</td>\n\n          <td rowspan="2" double-border text-center>{{c.fields.number}}</td>\n\n        </tr>\n\n\n\n        <tr *ngIf="!!c.result" [class.disabled]="c.fields.unknow_surface">\n\n          <td double-border text-right class="c-red">{{c.result.headLost?.money | number: \'1.0-0\'}}</td>\n\n          <td double-border class="c-red mesure b-right">€<span *ngIf="c.fields.unknow_surface">/m<sup>2</sup></span></td>\n\n          <td double-border text-right class="c-gree">{{c.result.savingPotentialMin?.money | number: \'1.0-0\'}}</td>\n\n          <td double-border text-center class="c-gree p-0" style="width: 15px; padding: 0; white-space: nowrap;">\n\n            <!-- <ion-icon name="md-arrow-forward"></ion-icon> -->\n\n            --\n\n          </td>\n\n          <td double-border text-left class="c-gree">{{c.result.savingPotentialMax?.money | number: \'1.0-0\'}}</td>\n\n          <td double-border class="c-gree mesure b-right">€<span *ngIf="c.fields.unknow_surface">/m<sup>2</sup></span></td>\n\n        </tr>\n\n        <tr *ngIf="!c.result" [class.disabled]="c.fields.unknow_surface">\n\n          <td double-border colspan="2" class="b-right"></td>\n\n          <td double-border colspan="4" class="b-right"></td>\n\n        </tr>\n\n      </tbody>\n\n      <tfoot>\n\n        <tr>\n\n          <td rowspan="2" colspan="2" double-border class="b-right" text-right>\n\n            TOTAL PROJECT\n\n          </td>\n\n          <td text-right class="bg-light-red c-red">{{totals.headLost.power / 1000 | number: \'1.1-1\'}}</td>\n\n          <td class="bg-light-red c-red b-right">MWh</td>\n\n          <td text-right class="bg-green c-gree">{{totals.savingPotentialMin?.power / 1000 | number: \'1.1-1\'}}</td>\n\n          <td text-center class="bg-green c-gree p-0" style="width: 15px; padding: 0; white-space: nowrap">--</td>\n\n          <td text-left class="bg-green c-gree">{{totals.savingPotentialMax?.power / 1000 | number: \'1.1-1\'}}</td>\n\n          <td class="bg-green c-gree mesure b-right">MWh</td>\n\n        </tr>\n\n\n\n        <tr>\n\n          <td double-border text-right class="c-red">{{totals.headLost?.money | number: \'1.0-0\'}}</td>\n\n          <td double-border class="c-red mesure b-right">€</td>\n\n          <td double-border text-right class="c-gree">{{totals.savingPotentialMin?.money | number: \'1.0-0\'}}</td>\n\n          <td double-border text-center class="c-gree p-0" style="width: 15px; padding: 0; white-space: nowrap;">--</td>\n\n          <td double-border text-left class="c-gree">{{totals.savingPotentialMax?.money | number: \'1.0-0\'}}</td>\n\n          <td double-border class="c-gree mesure b-right">€</td>\n\n        </tr>\n\n      </tfoot>\n\n    </table>\n\n\n\n    <!-- <ion-grid style="margin-top: 2rem">\n\n      <ion-row>\n\n        <ion-col col-6 col-lg-4>\n\n          <span class="legend" advise-picture svg="like"></span><strong>System OK</strong>\n\n        </ion-col>\n\n        <ion-col col-6 col-lg-4>\n\n          <span class="legend" advise-picture svg="insulation"></span><strong>Insulation recommended</strong>\n\n        </ion-col>\n\n        <ion-col col-6 col-lg-4>\n\n          <span class="legend" advise-picture svg="mechanical"></span><strong>Maintenace</strong>\n\n        </ion-col>\n\n        <ion-col col-6 col-lg-4>\n\n          <span class="legend" advise-picture svg="surface"></span><strong>Surface unknown</strong>\n\n        </ion-col>\n\n        <ion-col col-6 col-lg-4>\n\n          <span class="legend" advise-picture svg="increase"></span><strong>Increace performance or thickness</strong>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid> -->\n\n\n\n    <ion-grid legend>\n\n      <ion-row>\n\n        <ion-col col-1 class="icon"><div svg="insulation" style="margin:.4rem 0 -.4rem"></div></ion-col>\n\n        <ion-col col-11 class="text">Insulation recommended</ion-col>\n\n        <ion-col col-1 class="icon"><div svg="surface" style="margin:.2rem 0 -.2rem"></div></ion-col>\n\n        <ion-col col-11 class="text">Surface unknown</ion-col>\n\n        <ion-col col-1 class="icon"><div svg="maintenance"></div></ion-col>\n\n        <ion-col col-11 class="text">Maintenance</ion-col>\n\n        <ion-col col-1 class="icon"><div svg="like"></div></ion-col>\n\n        <ion-col col-11 class="text">System OK</ion-col>\n\n        <ion-col col-1 class="icon"><div svg="increase"></div></ion-col>\n\n        <ion-col col-11 class="text">Increase performance or thickness</ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n  </kendo-pdf-export>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-grid no-padding>\n\n    <ion-row no-padding>\n\n      <ion-col col-6 no-padding>\n\n        <button ion-button small color="light" (click)="go_to_projects()">\n\n          HOME\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6 text-right>\n\n        <button tabindex="15" ion-button small color="primary" (click)="go_to_reports()">\n\n          New component\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\summary\summary.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_11__services__["b" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_11__services__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], SummaryPage);
    return SummaryPage;
}());

//# sourceMappingURL=summary.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_report_footer_report_footer_component__ = __webpack_require__(482);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__components_report_footer_report_footer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipe_report_pipe_component__ = __webpack_require__(498);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_1__pipe_report_pipe_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flange_report_flange_component__ = __webpack_require__(499);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__flange_report_flange_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_edit_picture_edit_picture_component__ = __webpack_require__(500);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__components_edit_picture_edit_picture_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_picture_slide_picture_slide_component__ = __webpack_require__(501);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_4__components_picture_slide_picture_slide_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_errors_report_errors_component__ = __webpack_require__(502);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__components_errors_report_errors_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reports__ = __webpack_require__(503);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_6__reports__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__generic_generic__ = __webpack_require__(587);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_7__generic_generic__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__surface_report_surface_component__ = __webpack_require__(588);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_8__surface_report_surface_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_header_report_header_component__ = __webpack_require__(589);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__components_header_report_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_area_report_area_button_component__ = __webpack_require__(590);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_10__components_area_report_area_button_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_area_report_area_modal_component__ = __webpack_require__(356);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_11__components_area_report_area_modal_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_more_more_button_component__ = __webpack_require__(591);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_12__components_more_more_button_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_medium_temp_medium_temp_buttons_component__ = __webpack_require__(592);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_13__components_medium_temp_medium_temp_buttons_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_medium_temp_temp_marker_window_component__ = __webpack_require__(593);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_14__components_medium_temp_temp_marker_window_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_result_report_result_component__ = __webpack_require__(594);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_15__components_result_report_result_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__valve_report_valve_component__ = __webpack_require__(595);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_16__valve_report_valve_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__isurface_report_isurface_component__ = __webpack_require__(596);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_17__isurface_report_isurface_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ipipe_report_ipipe_component__ = __webpack_require__(597);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_18__ipipe_report_ipipe_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__damaged_report_damaged_component__ = __webpack_require__(598);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_19__damaged_report_damaged_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__condensation_report_condensation_component__ = __webpack_require__(599);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_20__condensation_report_condensation_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__leakage_report_leakage_component__ = __webpack_require__(357);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_21__leakage_report_leakage_component__["a"]; });






















//# sourceMappingURL=index.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_condensation_class__ = __webpack_require__(483);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__report_condensation_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__report_damaged_class__ = __webpack_require__(484);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__report_damaged_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_ipipe_class__ = __webpack_require__(301);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__report_ipipe_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_isurface_class__ = __webpack_require__(485);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__report_isurface_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__report_valve_class__ = __webpack_require__(486);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__report_valve_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__report_pipe_class__ = __webpack_require__(302);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__report_pipe_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__report_flange_class__ = __webpack_require__(487);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__report_flange_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__report_surface_class__ = __webpack_require__(494);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__report_surface_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_report_page_class__ = __webpack_require__(495);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_8__base_report_page_class__["a"]; });









//# sourceMappingURL=index.js.map

/***/ }),

/***/ 212:
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
webpackEmptyAsyncContext.id = 212;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__result__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__picture__ = __webpack_require__(100);


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
        }
    }
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
    return ReportBase;
}());

//# sourceMappingURL=report-base.js.map

/***/ }),

/***/ 254:
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
webpackEmptyAsyncContext.id = 254;

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_projects__ = __webpack_require__(74);
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
    function InitPage(appCtrl) {
        this.appCtrl = appCtrl;
        this.user_name = 'Dev';
        this.save();
    }
    InitPage.prototype.save = function () {
        localStorage.setItem('tbi-user', this.user_name);
        this.appCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__projects_projects__["a" /* ProjectsPage */], { user_name: this.user_name });
    };
    InitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-init',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\init\init.html"*/'<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-8 offset-2 class="bg-logo">\n      </ion-col>\n      <ion-col col-8 offset-2>\n        <ion-list>\n          <ion-item padding>\n            <ion-label stacked>Name</ion-label>\n            <ion-input type="text" [(ngModel)]="user_name" placeholder="Type your name"></ion-input>\n          </ion-item>\n          </ion-list>\n      </ion-col>\n      <ion-col col-8 offset-2>\n          <p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.\n          </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <small style="position:fixed;right:2rem;bottom:1rem;color:#666">\n    Build v5.1.3 16/11/2018 01:10\n  </small>\n  <p offset-md-3 col-md-6>\n    <button ion-button block small color="primary" [disabled]="!user_name" (click)="save()">\n      Start\n    </button>\n  </p>\n</ion-content>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\init\init.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], InitPage);
    return InitPage;
}());

//# sourceMappingURL=init.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelWithPicture; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const_images__ = __webpack_require__(170);

var ModelWithPicture = /** @class */ (function () {
    function ModelWithPicture(item) {
        this.id = !!item ? item.id || Math.random().toString().substr(2) : Math.random().toString().substr(2);
        this.picture = !!item && !!item.picture ? item.picture : __WEBPACK_IMPORTED_MODULE_0__const_images__["a" /* NON_PICTURE */];
    }
    return ModelWithPicture;
}());

//# sourceMappingURL=model-with-picture.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NON_PICTURE; });
var NON_PICTURE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASoAAAEcCAYAAABwGfmfAAAABGdBTUEAALGOfPtRkwAAACBjSFJNAACHDwAAjA8AAP1SAACBQAAAfXkAAOmLAAA85QAAGcxzPIV3AAAKOWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAEjHnZZ3VFTXFofPvXd6oc0wAlKG3rvAANJ7k15FYZgZYCgDDjM0sSGiAhFFRJoiSFDEgNFQJFZEsRAUVLAHJAgoMRhFVCxvRtaLrqy89/Ly++Osb+2z97n77L3PWhcAkqcvl5cGSwGQyhPwgzyc6RGRUXTsAIABHmCAKQBMVka6X7B7CBDJy82FniFyAl8EAfB6WLwCcNPQM4BOB/+fpFnpfIHomAARm7M5GSwRF4g4JUuQLrbPipgalyxmGCVmvihBEcuJOWGRDT77LLKjmNmpPLaIxTmns1PZYu4V8bZMIUfEiK+ICzO5nCwR3xKxRoowlSviN+LYVA4zAwAUSWwXcFiJIjYRMYkfEuQi4uUA4EgJX3HcVyzgZAvEl3JJS8/hcxMSBXQdli7d1NqaQffkZKVwBALDACYrmcln013SUtOZvBwAFu/8WTLi2tJFRbY0tba0NDQzMv2qUP91829K3NtFehn4uWcQrf+L7a/80hoAYMyJarPziy2uCoDOLQDI3fti0zgAgKSobx3Xv7oPTTwviQJBuo2xcVZWlhGXwzISF/QP/U+Hv6GvvmckPu6P8tBdOfFMYYqALq4bKy0lTcinZ6QzWRy64Z+H+B8H/nUeBkGceA6fwxNFhImmjMtLELWbx+YKuGk8Opf3n5r4D8P+pMW5FonS+BFQY4yA1HUqQH7tBygKESDR+8Vd/6NvvvgwIH554SqTi3P/7zf9Z8Gl4iWDm/A5ziUohM4S8jMX98TPEqABAUgCKpAHykAd6ABDYAasgC1wBG7AG/iDEBAJVgMWSASpgA+yQB7YBApBMdgJ9oBqUAcaQTNoBcdBJzgFzoNL4Bq4AW6D+2AUTIBnYBa8BgsQBGEhMkSB5CEVSBPSh8wgBmQPuUG+UBAUCcVCCRAPEkJ50GaoGCqDqqF6qBn6HjoJnYeuQIPQXWgMmoZ+h97BCEyCqbASrAUbwwzYCfaBQ+BVcAK8Bs6FC+AdcCXcAB+FO+Dz8DX4NjwKP4PnEIAQERqiihgiDMQF8UeikHiEj6xHipAKpAFpRbqRPuQmMorMIG9RGBQFRUcZomxRnqhQFAu1BrUeVYKqRh1GdaB6UTdRY6hZ1Ec0Ga2I1kfboL3QEegEdBa6EF2BbkK3oy+ib6Mn0K8xGAwNo42xwnhiIjFJmLWYEsw+TBvmHGYQM46Zw2Kx8lh9rB3WH8vECrCF2CrsUexZ7BB2AvsGR8Sp4Mxw7rgoHA+Xj6vAHcGdwQ3hJnELeCm8Jt4G749n43PwpfhGfDf+On4Cv0CQJmgT7AghhCTCJkIloZVwkfCA8JJIJKoRrYmBRC5xI7GSeIx4mThGfEuSIemRXEjRJCFpB+kQ6RzpLuklmUzWIjuSo8gC8g5yM/kC+RH5jQRFwkjCS4ItsUGiRqJDYkjiuSReUlPSSXK1ZK5kheQJyeuSM1J4KS0pFymm1HqpGqmTUiNSc9IUaVNpf+lU6RLpI9JXpKdksDJaMm4ybJkCmYMyF2TGKQhFneJCYVE2UxopFykTVAxVm+pFTaIWU7+jDlBnZWVkl8mGyWbL1sielh2lITQtmhcthVZKO04bpr1borTEaQlnyfYlrUuGlszLLZVzlOPIFcm1yd2WeydPl3eTT5bfJd8p/1ABpaCnEKiQpbBf4aLCzFLqUtulrKVFS48vvacIK+opBimuVTyo2K84p6Ss5KGUrlSldEFpRpmm7KicpFyufEZ5WoWiYq/CVSlXOavylC5Ld6Kn0CvpvfRZVUVVT1Whar3qgOqCmrZaqFq+WpvaQ3WCOkM9Xr1cvUd9VkNFw08jT6NF454mXpOhmai5V7NPc15LWytca6tWp9aUtpy2l3audov2Ax2yjoPOGp0GnVu6GF2GbrLuPt0berCehV6iXo3edX1Y31Kfq79Pf9AAbWBtwDNoMBgxJBk6GWYathiOGdGMfI3yjTqNnhtrGEcZ7zLuM/5oYmGSYtJoct9UxtTbNN+02/R3Mz0zllmN2S1zsrm7+QbzLvMXy/SXcZbtX3bHgmLhZ7HVosfig6WVJd+y1XLaSsMq1qrWaoRBZQQwShiXrdHWztYbrE9Zv7WxtBHYHLf5zdbQNtn2iO3Ucu3lnOWNy8ft1OyYdvV2o/Z0+1j7A/ajDqoOTIcGh8eO6o5sxybHSSddpySno07PnU2c+c7tzvMuNi7rXM65Iq4erkWuA24ybqFu1W6P3NXcE9xb3Gc9LDzWepzzRHv6eO7yHPFS8mJ5NXvNelt5r/Pu9SH5BPtU+zz21fPl+3b7wX7efrv9HqzQXMFb0ekP/L38d/s/DNAOWBPwYyAmMCCwJvBJkGlQXlBfMCU4JvhI8OsQ55DSkPuhOqHC0J4wybDosOaw+XDX8LLw0QjjiHUR1yIVIrmRXVHYqLCopqi5lW4r96yciLaILoweXqW9KnvVldUKq1NWn46RjGHGnIhFx4bHHol9z/RnNjDn4rziauNmWS6svaxnbEd2OXuaY8cp40zG28WXxU8l2CXsTphOdEisSJzhunCruS+SPJPqkuaT/ZMPJX9KCU9pS8Wlxqae5Mnwknm9acpp2WmD6frphemja2zW7Fkzy/fhN2VAGasyugRU0c9Uv1BHuEU4lmmfWZP5Jiss60S2dDYvuz9HL2d7zmSue+63a1FrWWt78lTzNuWNrXNaV78eWh+3vmeD+oaCDRMbPTYe3kTYlLzpp3yT/LL8V5vDN3cXKBVsLBjf4rGlpVCikF84stV2a9021DbutoHt5turtn8sYhddLTYprih+X8IqufqN6TeV33zaEb9joNSydP9OzE7ezuFdDrsOl0mX5ZaN7/bb3VFOLy8qf7UnZs+VimUVdXsJe4V7Ryt9K7uqNKp2Vr2vTqy+XeNc01arWLu9dn4fe9/Qfsf9rXVKdcV17w5wD9yp96jvaNBqqDiIOZh58EljWGPft4xvm5sUmoqbPhziHRo9HHS4t9mqufmI4pHSFrhF2DJ9NProje9cv+tqNWytb6O1FR8Dx4THnn4f+/3wcZ/jPScYJ1p/0Pyhtp3SXtQBdeR0zHYmdo52RXYNnvQ+2dNt293+o9GPh06pnqo5LXu69AzhTMGZT2dzz86dSz83cz7h/HhPTM/9CxEXbvUG9g5c9Ll4+ZL7pQt9Tn1nL9tdPnXF5srJq4yrndcsr3X0W/S3/2TxU/uA5UDHdavrXTesb3QPLh88M+QwdP6m681Lt7xuXbu94vbgcOjwnZHokdE77DtTd1PuvriXeW/h/sYH6AdFD6UeVjxSfNTws+7PbaOWo6fHXMf6Hwc/vj/OGn/2S8Yv7ycKnpCfVEyqTDZPmU2dmnafvvF05dOJZ+nPFmYKf5X+tfa5zvMffnP8rX82YnbiBf/Fp99LXsq/PPRq2aueuYC5R69TXy/MF72Rf3P4LeNt37vwd5MLWe+x7ys/6H7o/ujz8cGn1E+f/gUDmPP8usTo0wAAAAlwSFlzAAAOxAAADsQBlSsOGwAANJVJREFUeF7t3XmvZFUV9/HCeUIUURx6gkYQkG5ajUYjDsHE+IeJEjWaiDjgFOIfvoPnDRgTY0KcNcYhatQYEucENDHODI0gyNBNI4gyCDhPz8PncDdPdfcdzt51qs4+56xvUrm3q29Vndp7rd9ea+3hHPN/H2AWBEFQMQ9b+xkEQVAtIVRBEFRPCFUQBNUTQhUEQfWEUAVBUD0hVEEQVE8IVRAE1RNCFQRB9YRQBUFQPSFUQRBUTwhVEATVE0IVBEH1hFAFQVA9IVRBEFRPCFUQBNUTQhUEQfWEUAVBUD0hVEEQVE8IVRAE1RNCFQRB9cTNHYJ1YRb//e9/Z//+979n//nPf5qH3z3n8b///e+hv9mMhz/84bNjjjlm9rCHPaz53eORj3zk7BGPeETz8Hv6myDYiBCqCaPr//Wvf83+/ve/z/7xj380v//zn/9sBCkJ1Lwo+dkFRGtevJJgeTz60Y+ePepRj5o95jGPmT32sY9tfg8RC0KoJgKRIUh//etfZ3/7298aYUrilMQoQUDmxSTRlWDMm9y8CB55DUQsiZbH4x73uNnjH//4RsDmrysYPyFUI0U0dP/99zcP4kSUREtESZcnIUiCVFvU4hqTgCUhdY2uWdRFuIjWscce2zxEZcF4CaEaCbqRKP35z3+e/eUvf2miJsLkeWLEkZMoDZkkXoQ4iRfhEm094QlPmD3pSU9qhGvo3zM4nBCqAcNZ77777tm9997biJOoSfRBkNR7/JwCBEtNzU8Rl2iLaB133HGz448/PqKtERBCNTCI05/+9KdGnERQoiakmbTgwTYiXBBtibCI1lOf+tRoo4ESQjUARAp33XXXQ9GTArjURqF5KlFTKdpOezFz7ZWirKc85SnRdgMihKpipHN//OMfZ/fcc08zYxfitBjzomXm8MlPfvLsaU97WpMmBnUTQlUZnIk43XnnnbP77ruv+TdxUnsJukMtj2gR/Sc+8YmzE044oRGtGATqJISqEtRUfv/73zcpnhk7tRR1p5i9Wi7MPy1uNXMoJXzWs57VtH1QDyFUPSOlu/XWW5v6kxFe9BQF334gVqkP1LG2bdvWpIhB/4RQ9YRFmIcOHWoESnpndkp6F93RLyJYaaHZVGkgwdq+fXuzuDTojxCqFSOCOnDgQCNQIFAcovZucH3pGtPv8/9ej5S2+pke8/+uGddnAEnLPwjWrl27IsLqiRCqFcHgCZQiOQhUbc7KMecfiSQs81tu5n/f6HskMfNeaRuMf/s9/V/Ce80/asJ1JsFSdCdY+i9YHSFUS4ZTEqg77rijcVSrpjlin83us12Lmky6DteUCvhqNBzR7+nf6Xd/42+TQG0kUgnvnx7pMz04viJ2evi3+lAqbCdRS9eVPrMvfLZrsvrftZx44omNYMVs7GoIoVoiZvEUyjkggeqrBuUzOX+KZFwH8UknEqQNvsTJ830JgmvTVkTLzKc0OT087/pdm+snXn1cp890HQRLWym4myUMlksI1RKw/unGG29strikyGTVzZwiF5/LqdP+t3TiAIESGQwBkQzhsgDWw0QE8fL9CIfv57FKfG6KBLXn7t27m/VYwXIIoeoQjkOgLNjkOERqlc2b0iZORJg4kIcTBfy7jwhkGWhTEY3tRAYF4kW4CFpKT1f1XX1O2gwuHTz55JNXLppTIISqI9Sg1KKkKOlgt1U0LWHymdIhUZK9bLaGGN2HEjEtinYmWo648VPERThSXW3ZECsiSSylg2pXRCvojhCqBRHFXH/99c2K8lWleZyQOHEQqZyIyWyU38cSNS2CCMvsKuEiWvqDgCy78K3tUzpohfupp566EqGcAiFUCyCKkuoZTVexvoY4iaCkcaIm4iSCCnFaH6atTuhYHOvWpGjSMqK1bERXIlq1q4iuFieEqgDCdN111zUOsMwoigCJnozQkM45U8nm2WVHB2NDn6kd6jN1Lf2l77TjsvouRVf67LTTTptMKr4MQqgyYeS//e1vGwNUE1oGjFzk5DNEAFZFP/OZz2wK48HiiLJuv/32Jl3XzgRLOy/LFcxY+oznPOc5MTNYSAhVBrfccsvs4MGDjVEzvK6bbl6gpCciJwLls4LuEfFY6ybSkhZq52VEx/pVn+rbnTt3znbs2LH2P0FbQqhaIG245pprmhFYFNV1ujAvUJxFTcMiwpjmXg3Sa4Kl5qi2pAbYdYSlj32O6Eqh/YwzzohUMIMQqi0wa/Sb3/xmKaleMt60yvnpT396s9I56k/9YECyk0BaaOKCYC2jhpVSwTPPPDNOZWhJCNUmGGF/97vfNcbaZapHoLxXmhkSQUkHYiq7Dgwe0vw//OEPze9mdFOfdYH3MvB572c/+9kxK9iCEKoNsHhTPYqRdpkGJCOV6lleYCVz1KDqRD/dfPPNzZosA0qX/cQO2IDBSt3KItFgY0KojkBzmNVTYBWWM9AumigZpjTP7N1JJ53ULNQM6scsofVyZny7rF+xCemm8oKJE7OCnguOJoRqDqH4/v37G4PsunZAoIieGpRHGOTwuO2225ooO6WDXUKsLF0466yzoka5DiFUa5iqvvLKKxtBUTTvasSMLRXjQn/ecMMNnS/2ZSuK7CK2vXv3hp0cQQjVA6gTEKk0UnbVJN5XmiDNi4LpuFAauOmmm5p0vqvoilixGREVseo6ahsykxcq9QfpHiPpYmbP+6RaVERR40Y/25Cu2N5V7Yr9iMC9jzQwdiM8yKSFyu56a6TSjE4XRkagvI9ZnDj5cRpYdyW60v8Eqws7IlYK7dZaxaTLhIXKbdKJlFHQYssumkGNQX3LquMI26eFlO3aa69tjpjpYiKGWKXTMoiV0zKmzCSFKkVSagGLihSDUttiqOpQUj3PBdODHSm0mx00UC2aCiaxYl9Tj6wmJ1RqUldddVVnIsWQzAQ5d8gG4iCwop1gdbGjYV6s9uzZM9ma1aSEyloVs3tqUl2IVJqhMdpF0TOYRwooajeILbrcJYmVmpXZwCnuD5yMUClOXn755Y3BdDHKpXqUmZmY1QvWQ33p6quv7mQBMZtjw37u27evseEpMQmhYjBEyqjUxTop7+PUxlNOOWXtmSBYH7ZmS5YFogY2QlOK14riZQPESg1sKoz+QByGYp2U0agLkYL3mJKRBOUQl9NPP73ZNiUKl76VihW7Y8NsmU13YctDYfRC5cA79YKutsVA2H3o0KFmsV8QtMEpGR4iIhH+ImLFltk0254KoxYqMy/pVM6uRx/vaaFfiFXQFlGV86csCu5CrNg2G58CoxUqR8taz6JDl4VbpBMrh+sFQRue8YxnNKmg9M2MYKlYgW2zcbY+dkYpVBZ0OvDMdgZLEZYJsWIsEVkFbTER4+yptAavVKzYNhtn62x+zIxOqHS8e+4pdi+6MrgtxMoivxCroC1diBXbTnbO5r3PWBmdUNlvpcO62r/XFutkQqyCHNKNSYlVac2KjbN1Ns/2x8qohMpxsULgZRTP20CsosAe5OAIYuvxFNhtkykVKzbP9vnAGBmNUFlQl4rnfYhUItLAIBcF9rR0wTqrEpJY8QG+MDZGIVTCXucB2cpSWjw3kgnBPUqLm4lIA4Nc0ln6FoWWwvb5AF8YW71qFEKVComldSnCxECcyHn88cc3v4dYBatGVCUVtHm+NAVM9So+MSYGL1RWiN99993F22MYhJBbyuYsKcVNdwMpNZZ5QqyCXNjfcccdVzxY8gG+wCf4xlgYtFARE51hLUkJDMHCO9O7jmpJOBHBIWW2KYRYBauEvbFF27TSaQkl8Am+wUfGwKCFygyHEYTQ5MIATAkrXhrF5o9q8X/Pfe5zm+NfI7IKVg17tnqdbUvjSuzPe3j9WGYBBytURgvTsaWH6XuNKeGN7licxMr/hVgFq0YpQs3K5E7JTCD75ht8ZAwp4CCFSk3p1ltvXSjlUwN4+tOfvunxwUms1AxCrIJVwz4tXVhkcoeP8BU+M2QGKVSmXy2OK035RFJGLDvZt8LfR80q6Atn8RsoCU2J7fERvsJnhszghIqTl87y6Wh1Kdhn1bbj/V2qWYVYBauErbFVZ/OX1Kv4SJoFZHNDZVBCJVd3pIXCd4lYpLrUzp07m87LYV6sIg0MVokZQDarXpU7OIOt8hm+U7ryvW8GJVQHDx5s8vWShZ06y2tPOOGE4jsYJ7GKAnuwatSqbGIuSQH5Cp9h/3xoiAxGqHTQHXfcUTTLp2ONRkamNnWpzQixCvrC5mU2XLLNi8/wHT40xML6YITKSKC+JFfPRSfJ74XP8+ulSlmWWI1t20PQLQrjbJgtl6RwfIcPDTGqGoRQ3XPPPc350KXRlBFEyueW612xDLEy2oVYBZthL6BHaQrIh/gSnxoSgxCqdCZ0yckIRh9RlMVzXRNiFfQBW5YCsu1ckg8N7Zz16oXqzjvvXGgFuv1Sjs/QscsgxCpYNQbe7du3N7WqXFJUxaf41lCoXqicmFkSSREMIkVASmf52rIssYoCe7ARZgEtlbHcpsTe+BTfGgpVC9Uf//jH2b333lsUDSk2Gj127Nix9sxyWYZYRYE92AyFdXZm5XkufIpv8bEhULVQiSoof67T+3sjjXUnhGNVLEOsIg0MNuLYY49tbLwkqvL3fIt9DYFqhcrMxH333dcof25tyhSsPN6Is2pCrIJVsmvXrmYxZ9oa1hY+xbf4GF+rnWMeuOD8CvUK+M1vftMU/HL39BEGAqHYqBP7wjVfffXVzXcgNos2s+9keYWzs9rAAH/wgx80m6/HivTe49xzz13aZMkQsC7qlltuybYzvmKZg0F1/uDIGqlSqDgZJzdS5EYkRhYh7b59+4pOV+iSPsWKAX7oQx9qtk04B36oe7y2gq0Qqle+8pVrz0wPNarLL7/8oUwiBzZp9lAW4AjuWqlSqMx2KfLl3voqRVMOw7MkoQZcv+jQArs+xOrTn/50I1ZmiMYoVmmj7oUXXpi90XxMOHPKrd1Loir2YRGpewbUSnU1KksKOHVJbcoCOOK22WF4q4YhCKuF110dEdO2ZsVx3/Wudz10zEfJMo/aYSf333//7Kc//enaM9OEzUvzc9dW8TFtyOf4Xq1UZ7mm5DV27p4+AuB1oo3aHNK1Ca27PM+KWP32t79de2ZjLO4jVgScMY5NrDialEWKLYKcKvpVVGSwzrUvvsZ3+F6tVGW1jM4MhDy7NJpyfGuNJLFSL+pKrKTHuZHVGMUqRVU/+clP1p6ZJmyfD+RureFrfE7Unet3q6Iqi7WkX76cWxDk9EYEa0r6LqBvhuuUBvYRWY1ZrFJUdc0110w6qhIZiar4Qq5t8Tn1z1q31VQnVCXOa7bDqGpbQe34fl2ngSKrHLEy6o6tZhVR1YOIqqT7ueuqwBZDqLZAIc9UsyUJOWhcI4jbsedGYn2RxEoaaBRblNzI6p3vfGfzmjGJVURVD8IH+EJJVMX3+GCNRfVqrFRUoHFzi+im3L2m1trURjCilAYSq1yjOhIzPlMXq4iqHsSEEp/IXY6Siuo17v+rxkLVTdSXcot51N/thDjd0JiPrKSBi5IrVtLAMYkV22ELU4+q9Kl2yI2MtB8f5Iu1UYV1GgU5aknqpnGFukNGZNVVGpgjVmoZKbIaS4Fd+hJR1aw50TZ30Acf5IvasCaqsExLEmwDyHUUBUOFYbN9QyalgX2I1dgK7JxTrcpugClHVYTKAJS7VEH/88XaNir3bpUMy7k4lDx3BNAJnHsMkcB8GthHZJXSwLaRlfqH9nfEiCUlRuH5h+f8n79Z9dYd38c1TDmq0odsKXf2jw/yRT5ZEpEti973+jGo/fv3N42TU1B22ZzA7dY5Zd9wxlQUX+97GKVELW3WeVllLbohHIuifRVX3W13KwjLpz71qXX3BjJ4NQ/FVkixCIICtp9Hfq/0997Tw+v0mdd5TUman0OKJN7whjc025fSdS8T38+DPeZOCi0D9si39M2QfQu9C5XjKRxTwSlzLoXhaUSNWQMikY997GON064XkUhDCMZb3/rW6sXKRmZGrn3VKgiWQ9qkE/aUOdqZ8xNegrORUxJngkX4jNC33XZbc1MBa3VMg8P3y12S0gZ9wEY8VhVxayft9+53v7uauik70tYGh7YQNf3vPLdVnZC7Fb0LVUlDguM7b6qWUxI44ic/+ckNhcpzxIyzv/3tb88SK4KxaDcxPKuW24iVtv3MZz7TOJ1TGtTPLKbN7aONIB7SUnUkg5R6iPf2PbVTlyZJPFZl4kmoTFCISGvAqQoHDhxoapE5iIbV+pQjaqBXodIYV155ZaPgOaOeSzZa79mzJ7sDlgWh4twbCRU8L5roS6xyIivChi4ius3Qj8TqZz/7WfNTG5la71qwVkESqgsuuKAaoTLoXHXVVU17bmSX65EEfu/evZ0NUIuwmph4AxwoVxKay585UC0i1RadT6SIFVFrU+jsa52V9l22SEHa6D51b3nLW5ozpZwlRphF2RvV+4L28BH9nltU55N8k4/WQK9CVbpWwyhs1B0iSaykOzlipeaRopxFYLRt9wauGu3yxje+sREs3zftVsgdyILD4SvsrET0a1lP1ZsFCCtFCbmzP15nFBZlDJUkViKHtmKlTtSVWImU2kZWfWBdnNT4ta99bZO6qO2tMrIyEBLIPpZWLANpKD/L/S5ew0drSMF7EyoOxwhzp3E5NUcz4zRkGA3hyYmsuhSrnDSwL9QgL7rooka4RFccZhmCld5T9GDwIFRmItmmtvYc0RpqZJf8pY2NzeP789Eu7G1Remt5RlESjnqNqfJVjrDLojSySotCF22DmtPAhBqL6OoFL3jB7E9/+lPnqaD3MqljwLDs4s1vfnMza/eOd7yjefjsl770pU3frDqy6xI+kytUvqvX1JD+9RpRlRicxuNgY6EkspovsC/qOIumgaIc4qE/XU96cP4u06ZXv/rVs/POO6+ZXbUuqwux0nYiBjN13ptIWfKS1oeZ7dI3hOp973tfc0KHQWWIkVXp4O671hBR9bI8wUeaMmUkOTWqZPhnn312dm1r2bRZnrAZXkOsCJBRvM33sw7Ja7qYnSMubZcu4Je//GWzdMISC8JBYFNq5qfnObq1OL6ThYPWYi06U3vo0KHZF7/4xaadfe9FxFCK53u/6U1vanWzWt/LZ1u4euTKffh3bcsTElLXK664ovkOOeUWr9Nn0vBFB8VF6GVoMAIbcUvqU2m0GxuM3OhtxP7sZz/bGMhWdF2zykkDLSO4/fbbZzfeeONDUWAyZD9dP/F2Cyd3iPnqV7/aLIj9yle+0hzD0ub7rYcby55//vmNICwSWblG1yelbHtHba953ete1zgu+x0SfIbvEOcc+Kjvymf7pBehkvMy1Fwj08hjSvuOZF6sRGerFqucNNBnfvCDH2xWu4tKFJ9FUenh3xxayiGiEmEwelumvvnNbzbbjX74wx82UXUutvFYd+U7c6KSkZ7j2Qb04he/eO2ZdmgjqbfvXPK5fcJ3coWKj7LDvutUvQiVkVAImgvD6CLNqZkkVgq3fUVWbcVK+qXgTIza1G4ImFQwHctjNfrFF188+/GPf5ztQFJJyxcsSMx9LQik4rnvkAuhIsQln9snfKdEXPkqn+2TXoRK2J7bYBxY+Mopxk7fkVVKA6+99tq1ZzYmV6zA8Dk6wVLHuuyyy2Yf//jHs+8rRzCkbup0ufZEZAhVCb4rp28z8VETrpsPsa8ctC2f7ZOVCxUjNZrl1qcYFqdg4FNgPrLqKw20HCBHrERLbcUKbIHjmE1jE2pYP/rRj9b+tx1mA0VX2im3lFBqSz6H/ZZkBX1iUNBXuZGg76p/+vy+Kxcqo5D6QKlQlYSuQ2VoYmW2MieySvieXue6RVcK7jmj/utf//pG8DhTjn2ko2Zy0Q8ijFwbrgF1wxKh4rN9RpArFyrG5AvnCg41X3Rqe4gMMbIqESv9yyFEVzfccMPsc5/7XGvHkKq+/OUvzxIe0ZTCfglSVG2r5jY09FFuZMRX9QXf7YtehIqi5woVox/6tplSppAGJjiRmURLHz7/+c+3jqye97znNSmgJQdtbIstOcQvty6GX//619nfqxZ879xr1558dlJCVVKUY6xGr6kKFYYmVtLAUrHyXYmVhZXWX7XlVa96VeNQbcQtXdP3v//9rAjjuuuua9aO+W5DhA/xpbYDwDx9FtRXLlRy3dxoSqOqQdRwgFefDFGsStJAJLG6/vrrZz/4wQ/Wnt0cK993797dKqoiTsSGGH7jG99Ye3Zz/O0ll1zStEOuDdcCHyqd+eO7fdGLUJUYrcbNfd0YmRcrZ5vXLlY2+JZGVrBp++c//3lznG4bzjnnnMap2jgisbIQlRiqiWnT9RCluaPNF77whcYOS+o8taAP1OdyhcrrJiNUGodjlQjV1KOpeZJYWexYu1jpt9I0kBhIU0yifPvb325VXLdfUa3KSuq2UY92sRbL8ogvf/nLzUJU+ygdk+1zrfGybELR3rXkOnltlAoVO+vru69UqIxMvmxu2MxgQ6gOJ4mVNIeDtRUrEUqXYmXf3lYsUmDX99JHQnLppZeuPbs5z3/+8xtRaxv1pM9IqaDPkeIRKRuv2a22NivZ9j1rhi/lfg8+y8a0RR+sVKiEjhwsN6LSSELu4HC0pVFekbPtVP4ZZ5zRqVg5/71tZFUqVr6n/YJO3CDMW+GoFsKSs3GY47Iz7Skd9PCZjvEVgYxBoBK+T26woL/0Q1/p30qFqlSRNarGDQ5Hu0hxHM2Ss8aMWPWVBpaKlYGKILe5+7F0Ufrn++U65BTQliXtkjKiPli5UKWRqy3+nkFH6nc0aZQvuQnrMtLAZYqV7yq6sTSgzXoe3897jykS6gp9kNs2fNbfT0Ko2qYn82gcjRqp39EwGg5vGr+ErtPAZYuVqNrq8zYnO2iTVd3KfWjwpVIRL/HhLli5UOU2jr9XxGxrzFNCKuQEgkXS4iGlgWxBYb6NUGkTItznIsVa4U8lEwP+fhJCVVKfSkLlERwOo3GI3KIMKQ1Ui/P+bQ5yswC0L8eqGe1cIlSYxKyfWYPcIp7G1LARUR2NtnQ0bxcsIw1ss3RhXqwsQdiqnzmYQ9za7NHbtm1b2M06JH/KFSr2xof7YKW9uEhEFRwOg+Hkbe4Y7UYMhGMrlrF0IUes1JTaRFYc5uDBg2v/2hjiJ1XsKwqomYioNqEkokKMikcjpeGEbZYlWGFti0ibwnKfYmUFO+HdSqwUgzfa7jKPtgmhWp8Sn5pMRFXyJVPqFxyOtuSEW52JxEn9DeGxkXkIYrVVGuj7qFFtJUD+LoRqfbRtSUQ1CaEqpSQKGzucT8SwVdtYwqCmY7re3sAhiJU0UGS1kVhJW9rcwslrCVVfzlUzQ/OplQpVCE53cL6toikQKqJm9LQMIYlVm+0lyxCrnNnAjWpW7Mh3ajOjp41CqIbPSoWKs4RYrRZOmtrd70ms3IqrD7HKmQ3cKA30XXynktQlGCYrFapg9Rw5MMyLVZ+RVe5s4HppYAjVdFipUKWRMFgd2vzIdk9iZTtKTmRlFXxfBfZ5sfJdfKcjhSsYLyvt6RCp7uCkbWs0662ZIVaOMcmJrE4//fQqIisi5Tu12f+pjULQhs8gejAE7mg4n31sW7WNPW8cfb0p+hRZOeOp9jTQ90hi5S7OblKwlVD5fk5aiAXDRzM0n1qpUJWMbEZPBhccDudrc2Cev3N65UZ/V5oG9ilWXuP7bCVA/kYbRUR1NPqdb+XSV1uuXKhKlDyE6miSULU5HcBplZudI6R9pYEiqyGI1QUXXDDbu3fv2jMbY/2Y9mmzjGNqlPgU352EUJWE4FQ/VhYfTRKqNncH3rlz55YDRBKrIcwGKuq/4AUvWPvXxhBe3yMiqqPhUyURVYkPd0H1EVVK/SKqOhpt0ua25G6TrqazleB7v5QG5ohVH7OBbXAn5KHVYlZB8qdcoYqIahNSRBVCdTSKyW59vhVqVMSkzRG+2llklSNWZgO7Fiu3q1oUd5SJtO9o+FNEVJvAaHIbJwnVVtHAFDGbx6nbnGPtBhBSxTbtX4NYWYawSGTlmq2Ct9cvOBz9WyJU/r4v4V+5UOWicTRsG2ecGgrLakptzpoiVLajtD1DvJbIqlSs7rjjjuba26y1mhp8Sf/mChUmIVSMRuPk1A2SULVxlKmR2mb//v1rz2yMkxZ2797dFJjbGmgtYlWSBqbXlDjj2NGPuULFZ/19X8K/cqEqyXE1UkRUR6NdOLOCepvU+CUveUmTCuW0ZQ1ilZsG+lw3gFCbyxkUp4KouqRd+O4khEqqYtaA8eegUdumLFNDnYojtzma1xlPe/bsaX0jhUSpWPWxdAGciSD/5S9/iaUJ62CgyhUqNqAt+XAfrLQXkyLnNpKQM1K/9dE26ga/+MUv1p7ZnFe84hXNEgQnZOaE/keKVZuFpstYutAmDeRM73rXuzY9fG/K8KWcvgefLc2IumClPchgfNnciMrrIqJaHwYkxZH+tSmqE7XXvOY1zVKF3JnUebFqu4J9GWlgW7Ha7IiYKaPfcttD3/Pdvtpx5Z/KgEqFKvd1U0H7EKzLLrts7ZnN2bVr1+yFL3xhI2y5I+u8WH36059uFVn1LVa2EIVYPYj+k/qVCFVfaR96Earc1E+jatxI/9ZHe0pzbrzxxmZavg2vetWrZqeeempzEkGJ0RIr6aPIqnaxcp5ViNWD8KESoWJjkxKqkgV4GtVOeJtMg/XRRuoH3/ve99ae2Zo3vvGNzZ2WFxGrlAaGWA0DPsSXStqgz8WzK+8x63k4VG5UxTFCqDYmRVVqVZdffvnas5vDWM8///zm1ufEapE0sG2BPcSqX/iQfsuBbfHZNveQXBa9CJWCbq5QcaI2jjB1rD6/9NJLWwuBvnBsyimnnNLcJj13a8V8GhhiVT8mUUpm/NjJpITKF2YwuTNOFL3Nptopw6AYkxrE17/+9bVnt4bDvulNb5q9/OUvbxyY6OQ48bxYRRpYL+xD3+QuMeCr2o3v9sXKe4mac6YSodLIUVDfHKLBCaWA3/3ud9eebcfLXvay2YUXXtj0j+iK4LUdfSMNrB8z56VCxSZyI7Eu6aWHFOVyUz/GxHGM2sHmaFuLOn/5y1+2ctx5nF31nve8p4muDAqWMDDwNkZamga6i7NV5ItSIlaudypipV9KZ/z6LKSjl95xiFuJOmuwLkbfKWDUtNjxW9/61uzWW29de7YdXnvOOefM3v/+989e9KIXNc8RLNHSRmevJ0rEyskOJ554Yi9ipT43lciK7+QGCOCrfLZPeukZK6lLVqhzoC6MeQowSPsAOe4XvvCFJpXLRbh/7rnnzt773vfOXve618127NjRpAH33HNPs1+QGKkbirgIWHr49xOe8IRmJvHDH/5wIwJbkcSqrzRwCpEV38lN+/goX+WzffLw//MAa7+vDI3FKBh0bsNxBKlC7uuWjTTpiiuuaAqOfeby8xArjujnr371q9lJJ53UzArmoq3Vks4888xmUzPBYrjSAd/V+zPo9Luf2oHwEA3XYL3WVtjETPgIodcsgtc70oZzspfN8P3OOuus2fXXX98IsGv2PXLxGvZ59tlnNyJfE1K+Q4cONUKcY5++j37Wf33a9TEPNG5+j3TADTfc0Kyizs19pRKnnXZaY9Q1ke6N5/vUNiq7HutnOO15553XRC9dQaA4gUeCQRuFPUqM2xEtbENUtgg+23cWLT33uc9de3ZjfAezlgZR9pUb8ft79pnSyZqQuhPiEn8z4Fi+0ie9eZRRK9cQQFejoJ6HdlZjsCD0a1/7WvZs4GYQQSkmUUmPFEWVjsBdpYFsxfWIkq6++uq1ZzeGsEoDTUSMLQ0k2CUxCdvRn33TW09IHaQHuY3nNSFU+TA44iGFMxvYdr1TXxCrLmYD2RdHI1ZtalZJrERhjpUZg1ilwT13HZTXeU3f9Sn0GlGVrKfScNKYmP3Lh+GJcgiAVOCjH/1oq2OM+6Kv2cCxRVbJX3KFKq2fmnRExWGE5fO1jTYwGq9RcA3KIFhqKIzQ8oVUl6mRvmYDxxRZiSaJTm4qzs/4aGkK3yW9tn5JSJnCUcXroJyUCoquOO/HP/7x2Ve/+tXGqGujqzQQSaxya1ZDFiu+UjpLXkPah15b3oJEzpJbVCdUjDb2/i0G0fewZEHkcPPNNzeC9aUvfWl24MCB7H4pQVrSph+7TANLCuxmAYcoVtpWNOp75JAGMj5aA722utkis1Gl6V+t6crQSLUr6aCHOwx/8YtfnH3iE5+Yfec732lujZ7bR5th/RwhvOSSS2YXX3xxc1Jomz2cXaWBvm+uWFlyMESx4iP6riTt45t8tAZ6W0eVsHnWHVSE5DmXwrBFAm3Wx6yCmtdRlUJQkihoa476rGc9a7Zt27ZmqYMal+h2o+9rVGbwRnU3SrXgkAhydrNQXie1ECXpfzdkaOMYXa2zgu+Xs87qc5/7XHP9662z8u/a1lGZLNG+oqO2EDXtsnPnzmZxbw30LlQaUWMatXJU32VbNWtFcQ2zEmMUqnk4qcGBeOknhu+7ehCXNKPk/1LfcFqv8dPr4HXzfw/tZXLECO70hqGKVW1CtYhv+Z58q4v27YLePYrIMFCGnYOG9xoGEywfxs5oOXSaMeSYIiN7+mx89hA1+ek5juJv/G1KK/X3vEjB3/g/9apPfvKTWWmgz1gU1zTGNND1lcz28Ss+WUMAkOi9lTWiNIKC5zYog2dg86NasBo4KKcVUTFqIjb/8Jz/8zdtnDmJleimb7HaKskYglhpT9/HtebAB/kin8z1x2VSRQub/jV9mis4OoFhR1Q1DvS/iK3vyMo6q6GLlQW92vHI6HUr9AFf5JM1UUXrKqgahSl5LlQ/hGo81BJZtV0USqxsS6pNrMz2lUREfJAv1rJ+KlFNyzJOuXFu4yq8KmQz7GAcpMhKn1oisWqx4qg5aeDb3va2qiIr7cYn2kxKzMP3+CBfrI3eZ/0SjNF5Tjo6p7M1rhDXeTknn3zy2rOrxwj2kY98pCkc15YGDBXtSDC06UUXXdSI11Z0ORvIrjitc7i2GkA5uK1Iltp84AMf2PIMrGXiRrS33357UyfMcW8DhIfztHJFbtlUI1S49tprG8NUhM0hzWxo4NziYVcImX/3u981nx9C1R3qJZzOvQfdir4NxMqs46KzVmxKhEasLF3YSqwsTWDD+/btW3tm9bDDdF/H3G0zrt9g4Bz72qhKqBQAr7vuumYEzYEBCXcZ8vbt29eeDaZMX2LVN6ULqGFhrkMp1dxqo6qhX56vgXOL6jrEQkKGmXtsTDBOUs1q0dol25JGWpDaZjawT6SfBnu+kHudfI7v8cEaqUqojFZCT42WO3JJudQUSm5iEIwT0YFaUVdi1bbA3hdsnw/klj/4Gp/je7VGjNUVU9xXzoiQGxkxHh0kqlIQDAIsI7KqUazYvEmEkmiKr3kd36uV6oTKbIN6gFnAXHXX2OoJNr4GQUJk1aVY2WBdWxrI5kujKb7G52qb6Zunyukpym7mLDcyYjg6Sggctapgni7FSi2npshKbcrMaEk0xcf4mlnVmqlSqBwpYq9RaVRl9iL37sDB+OlarERWNYgVW7e0oDSa4mu1rUQ/kiqFCilfzjUCfy+EFVXlzh4G42dsYkVo1KbYfImvoObaVKJaobIpUmRVElXZiJlOkQyCIxmTWFkzZUDO3Xycoik+VtsG5PWoVqjAmOTQJSOF1e3WlMQ9AIP1GINY+Uw2ztZLfIRvaYMhULVQWQOTalW52D6gM4w4QbAexEraM1SxsgpdZFSyZSvVpvrck5hD1UIFsxG5s39gLEYaszNmRIJgPU499dRBRlZuuOGzSmpT4FO1z/TNU71QWdLvlj1mNXJrVTAL6HjcKKwHGzG0NFA0ZKavZN0TH+JLfKrW7TLrUb1QwZ1PUBJZmbLVsTfddNPaM0FwNEMSK/dfNPDmLkdA8qHkU0NhEEJl1ayZiZKoiqE4jcHWGo8g2IghiJWlCArobDr3fVM0xZf41JAYhFDBPcZMwZasOFdsNPoorFvFGwQbUXOBXRTFhtlySRmE7/AhvjQ0BiNURhCjXWlUpVYlBbzhhhvWng2C9VFgr1GsHMzIhku2yqRoig/lnvdWA4MRKhgJHK+aboKZg47VQcLmmAUMtqI2sTLL50z23OOFwVf4jNcOMZrCoIRKCqcIKAQu6XAdZjQSPhuZgmAzuhar0o3M9q6yWbN8uQM0fB6f4Tsla65qYHBXzXAc8KXzSqIq+b1c3VG1JWIXTIsuxarkPCt/x1bBdnNtlo/wFT7jewyVQcqru81YeV5SGNfRUkC3E3K3jiDYiq7FShq4f//+VqKjLuWMtZJtMuAjfKXPOzR1wSCFitBs27atKQ6WoMPl62pVcXRx0Iau00AD5VaRlcPw2GdJXSrBR/jKEAvo8wwzYX0Ad5tZZMW6XF29ykLQLm5aGYyfVRbY/Z+FnSKpEvv2Gr7BR8ZwZ6bBChV2797ddEhpCpjWo7gXW6yvCtqwigK7wrfbxhlMrXtaT8i2gj2zbT4yBgYtVDraaLFICmgmxQxg7bdCCuphWTWrBFskNKUbjsEn+AYfGQNV3YC0FCOSzi7N5Y080j9HXrhrSRC04frrr29qSIuKAftzYwY3/vS7rV6L2LL3kvK5YepYGIVQCZV//etfNx1bsmo3YYRUeBz6DEmwOroUq7S2rzSS8h5pMfTznve8prQxFgad+iV0CHEhWCUnLCSMYo7PiBtDBG3pMg00yC4y0LJ9PsAXxiRSGIVQQdj8zGc+swl7jSglKF6axjUTGNtsgrYksepz9jilfHyAL4yN0QgVzHDIzUvFykhmcZwpYZuX41iYoC3EyomZi0ZWJSSRYvtjmeU7klEJFU4//fQm7C3ZuAxiZUpYCG6K2CbmIGhDV2lgDmycrbN5tj9WRidUOsyZQqZ301qSXIiV9yFW9lmFWAVtWWUayLaTnbP5sdWl5hmdUEEIfNJJJzVrSUqL6yFWQSnESq1o2WLFttk4W2fzY2aUQgVHWqTieilJrEwXW70eBfagLc9+9rObmtUyxSoVz4d2/nkJoxUqnHLKKc350KXFdaSalQK7neyxdCFoSyqwLzJYrgdb9p5sm41PgVEs+NwMX++KK65oCpyL7EJnHM6xcrZPLAoNcjhw4EBzEoLIfFGSSFlgevbZZxcPwENj1BEVdORZZ53VGEnJYXsJAmedVVoUKhUcucYHHVE6qXMk3oMNs2U2PRWRwugjqoTtCZdffnkjLqVbFOYRoT3xiU9s9lNJDYPgSKwSt9lYBLRINA+ixIb93LdvXyfR2ZCYjFCBuFx55ZUPnUW1qOEwQMX2M888s9kFHwSJ+++/vzkFQbnAbodFbc1aKbN8e/fuHc2JCDlMSqjAgK666qpmBXoXYmWUY4yKmtbPBIF6lGOu0/KWLkSKje3Zs2d27LHHrv3PtJicUMGRMEa7rsRKDULtwFQxwfJcMD3YkdMU3M1YFMW+uhIpUfvY10ptxiSFCk5WJFZpu0wXzSC1lALayjD0M6qDPAxU11xzzUP1qEVJImUQJFJDuwV710xWqJAiKzWrLgrsjMtKYe9j+YI1NMH4cXNQSxD0f+ndYubxPkoKalJTj6QSkxYqqFmZmWEcXYmVUZBgnXDCCc2iv5gVHCdm9aR6d911VyNQ+rkrkfI+liBMtSZ1JJMXKgjbzQZ2MUMzj/dlvKIrxxwH40Edyl1iDEpdpflEis2obZndi/LB/yeEag2jI7ESCS265iXB8LyvEdJhZgrtY97hPgXmoygRuP7sylbUt0RmRCrs5HBCqOYQUUkD77vvvs7XqqSRcufOnc3sYDAsuEk6plrtiKB0SVpALN1jJ8HhhFAdgeZwrIvTPYmVQnsXTTRfu2KQTmKM+sMwSDcDVc/sqhYFNkH0iFS6A5LngqMJodoAszgHDx5s6gRdGWYizegotjtLaGrbIYaCfnJ+/p133tnYQBeTLYk0cIm0Rdm7du1a+59gPUKoNkHB1NEuQvGujdR7pXTQivYdO3ZEyF8J6lC33HJL0/8GFINV6rMu8F5EUKnBuVUnnnji2v8EGxFCtQXCcmutGFYXC/nmYbCMVTpo0al1V46QkW4Gq0dfqEG5T5/FltI8g0fXLqJobuCzRmqK+/ZKCKFqgVHVqmMzPcSqa+NNaQAx5BxGWKc2RoS1GrS9RZsiKH1ARLpO99OgRKQceHfGGWfEgJRBCFUG0gF1q67rFQnGnJYzECwFVoIVU9XLQTvbQGziRAS1DIFCSvUIonqUND/II4QqE0sXzAoyvK5TwcR8hMVxjMDSwpgl7AazdwTq7rvvbtp5WQKVSKmeWT0zvkE+IVQFSAXTPf8YYFeL/o4kpQsEy++M3MJRkVakDXloR5GTPjPYQN8towaF+ehYn7mdVfRZOSFUC6Cm4dyhNDO0bNJuemnh8ccf3ziAKItTBEfDtO+9995meYHTMkxaiJxMXCwbM7qEyXq5mNVbnBCqBVnWlorNEB0QLQJl1sjuemuy4pTRB8XJTC1xslDT754jTsuenJiPoqTrNqRHfbEbQqg6QnRlkSgBEV0ZTVfRtBzDgxMSreOOO64RLj+nEmmJaKVzoiYRlJoQMSdOIqhlo51dgyjKZ1q8GVFUt4RQdYi0zEpmokU4pGiral6f4/OJFpEkliIsdS2i5VrGIly+qzROxKQw7uHfnidMq4xitKnPJozEyUkZqxDHqRFCtQSM7mpXHGhV6eCREC2P5LyES8RFvDzMWA6luCtaESVpT6mcuw8TB9+PUPh+qxYHn5vSPHVCtaiY0VseIVRLxCJCK52Xucq5DT6TUxv1/e46pCjEKz0IF1H1fF+Rl2vTVpyfIBEjAuWn512/a3P9hKmP6/SZrsM1aSs7CaZwS/W+CaFaMoxa7SrtGyNYq6pfbYTPdi3Ey0/O55o4v+iPA6ZIMD38O0Uu/tZr0mMzfFZ6pM9MdTXik34nTunf6brg/ec/sy98tmsiUK5FmqcWRTSD5RNCtSI4IsEyGwWO36fjrQdHnH8kXKcHp/STo/p9XrDWY16gUjQ3//u86Xmv+UdNuE79B7OrBEr/BasjhGrFmBkiWFZFg8FzzNq7wfWla0y/z/97PZKAJTE78t814/qIahIo69YIlDQ5WD0hVD2hBnPo0KFGsDgEwRKlRHf0C4ES8REoAwiB2r59e5xy0DMhVD0jwlJwJ1hqNOpDajLB6lEb0wdqchZsKpRHBFUHIVSVoIhsltAKdzNdqbBde4o0dJh/KuCb+SRQcWJFfYRQVYY00OZZRXfrsfxblBWzS90ivRM9Se+sf1Ikj83e9RJCVTEWNhItW0OkiKIrohXOVAbRJ05MXkrnNunEKfZI1k8I1QDgYFJCdSx72ThbiFY75sVJe9lOpEAuxYu2Gw4hVANDLcWZSgTLlpI0fa6mEkX4B0mLSmE21RYXAuVYnGijYRJCNWA4ZIqy0v43tReRAuGaSsQgaiJMfqrlWf0vnUvRU4jT8AmhGgm6UYTlRAGiZeZQtOV5gsVZ/Rz6LKLvQ5CItJ++j6jJjB1xcsRNHCY4PkKoRgpHJlzpxAHRFuFK21eIVpttMH3hGpMoueYkSq6ZMKWN1ETJI6KmcRNCNRE4uplDopVOJPBQaE5CkCBeScD8THQlZvMm53OTIB15DURJAVwq50GYrBAnUvPXFYyfEKoJo+sJFQFLoiXqUu9JiyCTiCUx6YJ5ESRGoiE1NQ/RUhInguT32qK9YPWEUAXrwiyIVBIsD797bl68/L4ZhGhelDzSDGUSqPQ3QbARIVRBEFRPJPpBEFRPCFUQBNUTQhUEQfWEUAVBUD0hVEEQVE8IVRAE1RNCFQRB9YRQBUFQPSFUQRBUTwhVEATVE0IVBEH1hFAFQVA9IVRBEFRPCFUQBNUTQhUEQfWEUAVBUD0hVEEQVE8IVRAE1RNCFQRB9YRQBUFQObPZ/wMhJQYtZFAryAAAAABJRU5ErkJggg==";
//# sourceMappingURL=non-picture.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProjectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_page_base__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_messages_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_file_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services__ = __webpack_require__(17);
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
        _this.project = navParams.get("project");
        _this.edit_mode = false;
        return _this;
        //this.project.documents.push(new Document({ file: 'lolo.pdf' }))
        //this.keyboard.onClose(() => document.querySelectorAll('.scroll-content').forEach((x) => x.scrollTo(0, 0)));
    }
    EditProjectPage.prototype.on_focus = function (event, scroll) {
        if (scroll === void 0) { scroll = 0; }
        var elm = event._elementRef.nativeElement;
        var offset = 170 - scroll;
        elm.closest('.scroll-content').scrollTo(0, elm.closest('.scroll-content').scrollTop - 50);
        this.scroll(elm.closest('.scroll-content'), elm.closest('.scroll-content').scrollTop + elm.closest('ion-item').getBoundingClientRect().top - offset);
    };
    EditProjectPage.prototype.scroll = function (elm, top) {
        var _this = this;
        if (elm.scrollTop < top) {
            elm.scrollTo(0, top);
            setTimeout(function () { return _this.scroll(elm, top); }, 1);
        }
        else {
            elm.scrollTo(0, top);
        }
    };
    EditProjectPage.prototype.hide_keyboard = function () {
        this.keyboard.close();
    };
    EditProjectPage.prototype.save = function () {
        var _this = this;
        this.service.save(this.project).then(function () { return _this.navCtrl.pop(); });
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
    EditProjectPage.prototype.edit = function () {
        this.edit_mode = true;
    };
    EditProjectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-project',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\projects\edit.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton>\n\n    <ion-title class="label" >\n\n      {{ !project.id ? \'New project\' : \'Edit project\' }}\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button color="light" (click)="open_camera(project)">\n\n        <ion-icon name="md-camera"></ion-icon>&nbsp;Take a picture\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-segment [(ngModel)]="segment">\n\n    <ion-segment-button value="properties">\n\n      Properties\n\n    </ion-segment-button>\n\n    <ion-segment-button value="files">\n\n      Files\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row *ngIf="segment==\'properties\'">\n\n      <ion-col col-12>\n\n        <form novalidate #form="ngForm" style="margin-bottom: 10vw">\n\n        <ion-row>\n\n          <ion-col col-md-6 col-12>\n\n            <ion-row>\n\n              <ion-title class="label"  col-12 col-12 text-left>Name</ion-title>\n\n              <ion-item>\n\n                <ion-input tabindex="1" (ionFocus)="on_focus($event)"  type="text" [(ngModel)]="project.name" name="name"></ion-input>\n\n              </ion-item>\n\n              <ion-title class="label"  col-12 col-12 text-left>Energy Price (&euro;/kWh)</ion-title>\n\n              <ion-item>\n\n                <ion-input tabindex="2" (ionFocus)="on_focus($event)" type="number" [(ngModel)]="project.price" name="price" scroll="40"></ion-input>\n\n              </ion-item>\n\n            </ion-row>\n\n          </ion-col>\n\n          <ion-col col-md-6 col-12>\n\n            <ion-item text-center border-none no-padding>\n\n              <img [src]="project.picture" (click)="ask_for_change_picture(project)">\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row small-title>\n\n          <ion-col col-12>\n\n            <ion-row mb-3>\n\n              <ion-title class="label"  col-12 col-12 text-left>Project Leader</ion-title>\n\n              <ion-item col-md-5 col-12>\n\n                  <ion-input tabindex="4" (ionFocus)="on_focus($event)"  [(ngModel)]="project.people.leader.name" placeholder="Name" name="leader-name" scroll="60"></ion-input>\n\n              </ion-item>\n\n              <ion-item col-md-4 col-12>\n\n                  <ion-input tabindex="4" (ionFocus)="on_focus($event)"  type="email" [(ngModel)]="project.people.leader.email" placeholder="Email" name="leader-email" scroll="60"></ion-input>\n\n              </ion-item>\n\n              <ion-item col-md-3 col-12>\n\n                  <ion-input tabindex="4" (ionFocus)="on_focus($event)"  type="phone" [(ngModel)]="project.people.leader.phone" placeholder="Phone" name="leader-phone" scroll="60"></ion-input>\n\n              </ion-item>\n\n            </ion-row>\n\n          </ion-col>\n\n          <!-- <ion-col col-12>\n\n            <ion-row mb-3>\n\n              <ion-title class="label"  col-12 col-12 text-left>Energy Manager</ion-title>\n\n              <ion-item col-md-5 col-12>\n\n                  <ion-input tabindex="6" (ionFocus)="on_focus($event)"  [(ngModel)]="project.people.energy_manager.name" placeholder="Name" name="energy-name" scroll="20"></ion-input>\n\n              </ion-item>\n\n              <ion-item col-md-4 col-12>\n\n                <ion-input tabindex="6" (ionFocus)="on_focus($event)"  type="email" [(ngModel)]="project.people.energy_manager.email" placeholder="Email" name="energy-email" scroll="20"></ion-input>\n\n              </ion-item>\n\n              <ion-item col-md-3 col-12>\n\n                <ion-input tabindex="6" (ionFocus)="on_focus($event)"  type="phone" [(ngModel)]="project.people.energy_manager.phone" placeholder="Phone" name="energy-phone" scroll="20"></ion-input>\n\n              </ion-item>\n\n            </ion-row>\n\n          </ion-col> -->\n\n          <ion-col col-12>\n\n            <ion-row mb-3>\n\n              <ion-title class="label"  col-12 col-12 text-left>Maintenance Manager</ion-title>\n\n              <ion-item col-md-5 col-12>\n\n                <ion-input tabindex="8" (ionFocus)="on_focus($event)"  [(ngModel)]="project.people.maintenance_manager.name" placeholder="Name" name="maintenance-name" scroll="-20"></ion-input>\n\n              </ion-item>\n\n              <ion-item col-md-4 col-12>\n\n                <ion-input tabindex="8" (ionFocus)="on_focus($event)"  type="email" [(ngModel)]="project.people.maintenance_manager.email" placeholder="Email" name="maintenance-email" scroll="-20"></ion-input>\n\n              </ion-item>\n\n              <ion-item col-md-3 col-12>\n\n                <ion-input tabindex="8" (ionFocus)="on_focus($event)"  type="phone" [(ngModel)]="project.people.maintenance_manager.phone" placeholder="Phone" name="maintenance-phone" scroll="-20"></ion-input>\n\n              </ion-item>\n\n            </ion-row>\n\n          </ion-col>\n\n          <ion-col col-12>\n\n            <ion-row>\n\n              <ion-title class="label"  col-12 text-left>HSE Manager</ion-title>\n\n              <ion-item col-md-5 col-12>\n\n                <ion-input tabindex="10" (ionFocus)="on_focus($event)"  [(ngModel)]="project.people.hse_manager.name" placeholder="Name" name="hse-name" scroll="-60"></ion-input>\n\n              </ion-item>\n\n              <ion-item col-md-4 col-12>\n\n                <ion-input tabindex="10" (ionFocus)="on_focus($event)"  type="email" [(ngModel)]="project.people.hse_manager.email" placeholder="Email" name="hse-email" scroll="-60"></ion-input>\n\n              </ion-item>\n\n              <ion-item col-md-3 col-12>\n\n                <ion-input tabindex="10" (ionFocus)="on_focus($event)"  (keyup.enter)="on_keypress($event)"  type="phone" [(ngModel)]="project.people.hse_manager.phone" placeholder="Phone" name="hse-phone" scroll="-60"></ion-input>\n\n              </ion-item>\n\n            </ion-row>\n\n          </ion-col>\n\n        </ion-row>\n\n        </form>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngIf="segment==\'files\'">\n\n      <ion-col col-12>\n\n        <ion-list id="document-list" [class.editable]="edit_mode">\n\n          <ion-item *ngFor="let f of project.documents">\n\n            <ion-icon name="document-{{f.extension}}" color="gray" item-start></ion-icon>\n\n            <span (click)="open_file(f)">{{f.file}}</span>\n\n            <ion-icon (click)="ask_for_delete(f)" name="md-trash" color="red" item-end></ion-icon>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-grid no-padding>\n\n    <ion-row no-padding>\n\n      <ion-col col-3 no-padding>\n\n        <button tabindex="16" ion-button small color="light" (click)="after_delete()">\n\n          <ion-icon name="arrow-back"></ion-icon>&nbsp;Back\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-9 text-right no-padding>\n\n        <button *ngIf="segment==\'files\'" ion-button small color="light" (tap)="choose_file()">\n\n          Choose file\n\n        </button>\n\n        <button id="submit-button" id="submit-button" tabindex="15" *ngIf="segment==\'properties\'" ion-button small color="primary" (click)="save()">\n\n          Save\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\projects\edit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_5__services_file_service__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_7__services__["c" /* PictureService */],
            __WEBPACK_IMPORTED_MODULE_4__services_messages_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__["a" /* FileOpener */]])
    ], EditProjectPage);
    return EditProjectPage;
}(__WEBPACK_IMPORTED_MODULE_2__project_page_base__["a" /* ProjectPageBase */]));

//# sourceMappingURL=edit.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_service__ = __webpack_require__(175);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__component_service__["a" /* ComponentService */]])
    ], ReportService);
    return ReportService;
}());

//# sourceMappingURL=report.service.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PictureService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_service__ = __webpack_require__(16);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__file_service__["a" /* FileService */], __WEBPACK_IMPORTED_MODULE_3__messages_service__["a" /* MessageService */]])
    ], PictureService);
    return PictureService;
}());

//# sourceMappingURL=picture.service.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportInsulatedPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_reports__ = __webpack_require__(20);
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
        _this.page = __WEBPACK_IMPORTED_MODULE_1__pages_reports__["k" /* ReportInsulatedPipePage */];
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

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_reports__ = __webpack_require__(20);
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
        _this.page = __WEBPACK_IMPORTED_MODULE_1__pages_reports__["q" /* ReportPipePage */];
        _this.name = "Uninsulated Pipe";
        //public path = REPORT.INSULATION.UNINSULATED_EQUIPMENTS.PIPE;
        _this.insulated = true;
        return _this;
    }
    return ReportPipe;
}(__WEBPACK_IMPORTED_MODULE_0__report_base__["a" /* ReportBase */]));

//# sourceMappingURL=report-pipe.class.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ipipe_class__ = __webpack_require__(488);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__ipipe_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isurface_class__ = __webpack_require__(489);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__isurface_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__valve_class__ = __webpack_require__(490);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__valve_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipe_class__ = __webpack_require__(491);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__pipe_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flange_class__ = __webpack_require__(492);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__flange_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__surface_class__ = __webpack_require__(493);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__surface_class__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 304:
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

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const_report_const__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reports__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reports_report_generic_class__ = __webpack_require__(306);




var ReportRouter = /** @class */ (function () {
    function ReportRouter(project, component, navCtrl) {
        this.project = project;
        this.component = component;
        this.navCtrl = navCtrl;
        this.component = this.component || new __WEBPACK_IMPORTED_MODULE_1__component__["a" /* TbiComponent */](this.project);
    }
    ReportRouter.prototype.navigate_to_report = function (path, summary_id, report, event) {
        var r = this.create_report(path, summary_id, report);
        this.navCtrl.push(r.page, {
            project: this.project,
            component: this.component,
            report: r
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

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportGeneric; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_reports__ = __webpack_require__(20);
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

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-summary',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\summary\summary-edit.html"*/'<ion-list radio-group [(ngModel)]="report_selected">\n\n  <ion-list-header>\n\n    Reports\n\n  </ion-list-header>\n\n\n\n  <ion-item *ngFor="let r of reports; let i=index" [attr.title]="r.summary_id">\n\n    <ion-label>{{friendly_path(r)}}</ion-label>\n\n    <ion-radio checked="true" value="{{r.id}}"></ion-radio>\n\n  </ion-item>\n\n\n\n</ion-list>\n\n<ion-footer>\n\n  <ion-grid no-padding>\n\n    <ion-row no-padding>\n\n      <ion-col col-5 no-padding>\n\n        <button (click)="close()" ion-button small block color="light">Cancel</button>\n\n      </ion-col>\n\n      <ion-col offset-2 col-5 no-padding text-right>\n\n        <button (click)="edit()" [disabled]="!this.report_selected" block ion-button small>Edit</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-footer>'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\summary\summary-edit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
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

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportAreaModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'area-modal',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\components\area\report-area-modal.component.html"*/'<ion-toolbar>\n  <ion-segment [(ngModel)]="segment.value" color="primary" (ionChange)="on_segment_change($event)">\n    <ion-segment-button value="cube">\n      Prism\n    </ion-segment-button>\n    <ion-segment-button value="rectangle">\n      Rectangle\n    </ion-segment-button>\n    <ion-segment-button value="cilinder">\n      Cilinder\n    </ion-segment-button>\n    <ion-segment-button value="circle">\n      Circle\n    </ion-segment-button>\n  </ion-segment>\n</ion-toolbar>\n\n<ion-content>\n   <form [hidden]="segment.value!=\'cube\'">\n    <ion-grid>\n      <ion-row>\n          <ion-col col-12 style="padding-top: 1rem">\n            <strong>* Only lateral walls</strong>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-md-8>\n          <div svg="area-cube" padding></div>\n        </ion-col>\n        <ion-col col-12 col-md-4>\n          <ion-row>\n            <ion-col col-12>\n              <ion-item>\n                <ion-label stacked>a (m)</ion-label>\n                <ion-input type="number" tabindex="101" name="cube_a" id="cube_a" [(ngModel)]="width"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12>\n              <ion-item>\n                <ion-label stacked>b (m)</ion-label>\n                <ion-input type="number" tabindex="102" name="cube_deep" [(ngModel)]="deep"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12>\n              <ion-item>\n                <ion-label stacked>h (m)</ion-label>\n                <ion-input type="number" tabindex="103" (keyup.enter)="key_enter()" name="cube_height" [(ngModel)]="height"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  <form  [hidden]="segment.value!=\'rectangle\'">\n    <ion-grid>\n      <ion-col col-12 style="padding-top: 1rem">\n          <strong>&nbsp;</strong>\n      </ion-col>\n    <ion-row>\n      <ion-col col-12 col-md-8>\n        <div svg="area-rectangle" padding></div>\n      </ion-col>\n      <ion-col col-12 col-md-4>\n        <ion-row>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label stacked>a (m)</ion-label>\n              <ion-input type="number" tabindex="106" name="rectangle-a" id="rectangle-a" [(ngModel)]="width"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label stacked>b (m)</ion-label>\n              <ion-input type="number" tabindex="107" name="rectangle-b" id="rectangle-b" (keyup.enter)="key_enter()" [(ngModel)]="height"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n  </form>\n  <form [hidden]="segment.value!=\'cilinder\'">\n    <ion-grid>\n        <ion-col col-12 style="padding-top: 1rem">\n            <strong>* Only lateral walls</strong>\n        </ion-col>\n      <ion-row>\n        <ion-col col-12 col-md-8>\n          <div svg="area-cilinder" padding></div>\n        </ion-col>\n        <ion-col col-12 col-md-4>\n          <ion-row>\n            <ion-col col-12>\n              <ion-item>\n                <ion-label stacked>h (m)</ion-label>\n                <ion-input type="number" tabindex="108" name="cilinder-h" id="cilinder-h" [(ngModel)]="height"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12>\n              <ion-item>\n                <ion-label stacked>r (m)</ion-label>\n                <ion-input type="number" tabindex="109" name="cilinder-radius" (keyup.enter)="key_enter()" [(ngModel)]="radius"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  <form [hidden]="segment.value!=\'circle\'">\n    <ion-grid>\n        <ion-col col-12 style="padding-top: 1rem">\n            <strong>&nbsp;</strong>\n        </ion-col>\n      <ion-row>\n        <ion-col col-12 col-md-8>\n          <div svg="area-circle" padding></div>\n        </ion-col>\n        <ion-col col-12 col-md-4>\n          <ion-row>\n            <ion-col col-12>\n              <ion-item>\n                <ion-label stacked>r (m)</ion-label>\n                <ion-input type="number" tabindex="110" name="circel-r" id="circel-r" (keyup.enter)="key_enter()" [(ngModel)]="radius"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n\n<ion-footer>\n  <ion-grid no-padding>\n    <ion-row no-padding>\n      <ion-col col-6 no-padding>\n        <button (click)="close()" tabindex="200" ion-button small color="light"><ion-icon name="arrow-back"></ion-icon>&nbsp;Back</button>\n      </ion-col>\n      <ion-col col-6 no-padding>\n        <button (click)="calculate()" tabindex="201" id="area_calculate_btn" ion-button small pull-right>Report</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\components\area\report-area-modal.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], ReportAreaModalComponent);
    return ReportAreaModalComponent;
}());

//# sourceMappingURL=report-area-modal.component.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportLeakagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_reports__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_report_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_messages_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_reports_report_leakage__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services__ = __webpack_require__(17);
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
        var _this = _super.call(this, new __WEBPACK_IMPORTED_MODULE_5__models_reports_report_leakage__["a" /* ReportLeakage */](navParams.data.project, navParams.data.component, navParams.data.report), navCtrl, service, alertCtrl, picture, message, keyboard) || this;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report-leakage',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\leakage\report-leakage.component.html"*/'<report-header [parent]="this"></report-header>\n\n\n\n<ion-content #content>\n\n\n\n  <ion-grid [hidden]="view==\'edit_picture\'" class="fixed-col">\n\n    <ion-row>\n\n      <ion-col col-12 col-lg-6 no-padding>\n\n        <form novalidate #form="ngForm" [hidden]="segment!=\'input\'" (submit)="calculate()">\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Component/Location</ion-label>\n\n                <ion-input [disabled]="!editable" tabindex="1" (ionFocus)="on_focus($event)" name="location" required\n\n                  data-val-required="Please input Component/Location" [(ngModel)]="report.component.fields.location"\n\n                  type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2></ion-col>\n\n          </ion-row>\n\n          <ion-row [hidden]="true">\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-input type="hidden" name="pictures" required data-val-required="Please take a picture" [(ngModel)]="picture_qty"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Summary Id</ion-label>\n\n                <ion-input tabindex="2" (ionFocus)="on_focus($event)" name="summary_id" [(ngModel)]="report.summary_id"\n\n                  required data-val-required="Please input summary id" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Operational time (hours)</ion-label>\n\n                <ion-input [disabled]="!editable" tabindex="3" (ionFocus)="on_focus($event)" name="operational_time"\n\n                  [(ngModel)]="report.component.fields.operational_time" type="number"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <more pull-left *ngIf="editable" #time (change)="report.component.fields.operational_time=time.value"\n\n                [type]="\'time\'" modal-button></more>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Medium</ion-label>\n\n                <ion-input #after_time [disabled]="!editable" tabindex="4" (ionFocus)="on_focus($event)" (keyup.enter)="on_keypress($event)"\n\n                  name="medium" [(ngModel)]="report.component.fields.medium" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Medium temperature (<sup>º</sup>C)</ion-label>\n\n                <ion-input [disabled]="!editable" tabindex="5" (ionFocus)="on_focus($event)" name="surface_temp"\n\n                  [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Medium temperature"\n\n                  [(ngModel)]="report.component.fields.surface_temp" type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Comment</ion-label>\n\n                <ion-textarea rows="6" tabindex="6" (ionFocus)="on_focus($event)" (keyup.enter)="on_keypress($event)"\n\n                  [(ngModel)]="report.comment" name="comment"></ion-textarea>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n        </form>\n\n      </ion-col>\n\n\n\n      <ion-col col-12 col-lg-6 no-padding>\n\n        <ion-row>\n\n          <ion-col col-12 picture-slide [report]="report"\n\n            [editable]="editable" (onStartEdit)="on_picture_start_edit($event)">\n\n          </ion-col>\n\n        </ion-row>\n\n        <report-errors padding #errors col-12 [hidden]="view==\'!result\' && report.result"></report-errors>\n\n        <report-result col-12 [parent]="this" *ngIf="view==\'result\' && (!!form && !form.invalid)"></report-result>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <edit-picture *ngIf="view==\'edit_picture\'" [report]="report" [picture]="editing_picture"></edit-picture>\n\n\n\n</ion-content>\n\n\n\n<report-footer [parent]="this" [calculate_text]="\'Report\'"></report-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\leakage\report-leakage.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_report_service__["a" /* ReportService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__services__["c" /* PictureService */],
            __WEBPACK_IMPORTED_MODULE_4__services_messages_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Keyboard */]])
    ], ReportLeakagePage);
    return ReportLeakagePage;
}(__WEBPACK_IMPORTED_MODULE_1__models_reports__["a" /* BaseReportPage */]));

//# sourceMappingURL=report-leakage.component.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(17);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-download',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\download\download.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>Database</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n        <ion-col text-center col-6><h3>Files</h3></ion-col>\n        <ion-col text-center col-6><h3>Pictures</h3></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n          <ion-list padding>\n              <ion-item-sliding *ngFor="let f of files">\n                <ion-item>\n                  <ion-icon name="document-{{f.extension}}" color="gray" item-start></ion-icon>\n                  {{f.file}}<br>\n                  <small>{{f.folder}}</small>\n                </ion-item>\n                <ion-item-options side="right">\n                  <button ion-button color="danger" on-tap="remove_file(f)">\n                    Remove\n                    <ion-icon name="ios-trash-outline"></ion-icon>\n                  </button>\n                </ion-item-options>\n              </ion-item-sliding>\n          </ion-list>\n      </ion-col>\n      <ion-col col-6>\n        <ion-list padding>\n          <ion-item-sliding *ngFor="let f of pictures">\n            <ion-item>\n              <!-- <ion-icon name="document-picture" color="gray" item-start></ion-icon> -->\n              <img src="{{f.picture}}" style="float: left; width: 72px; height: auto; margin-right: 1rem">\n              {{f.file}}<br>\n              <small>{{f.folder}}</small>\n            </ion-item>\n            <ion-item-options side="right">\n              <button ion-button color="danger" on-tap="remove_file(f)">\n                Remove\n                <ion-icon name="ios-trash-outline"></ion-icon>\n              </button>\n            </ion-item-options>\n          </ion-item-sliding>\n      </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n\n<ion-footer>\n  <ion-grid no-padding>\n    <ion-row no-padding>\n      <ion-col col-6 no-padding>\n        <button tabindex="22" ion-button small color="light" (click)="navCtrl.pop()">\n          <ion-icon name="arrow-back"></ion-icon>&nbsp;Back\n        </button>\n      </ion-col>\n      <ion-col col-6 text-right no-padding>\n        <button tabindex="22" ion-button small color="royal" (click)="download()">\n            Download now\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\download\download.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services__["a" /* FileService */], __WEBPACK_IMPORTED_MODULE_1__services__["d" /* ProjectService */]])
    ], DownloadPage);
    return DownloadPage;
}());

//# sourceMappingURL=download.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(420);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_tooltips__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_init_init__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_download_download__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_projects_projects__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_projects_edit__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_projects_project__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_summary_summary__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_summary_summary_edit__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_pictures_pictures__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_camera__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_chooser__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_path__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_file_opener__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_file__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_screen_orientation__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_unique_device_id__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_file_transfer__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_report_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_component_service__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_file_device_service__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_file_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_file_local_service__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_messages_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_picture_service__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_licences_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_svg_svg_insulation_component__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_svg_svg_custom_component__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_svg_svg_safety_component__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_svg_svg_maintenance_component__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_svg_svg_flange_component__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_svg_svg_hot_surface_component__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_svg_svg_fire_protection_component__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_svg_svg_traffic_component__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_svg_svg_damage_insulation_component__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_svg_svg_damage_cladding_component__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_svg_svg_ice_wet_component__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_svg_svg_mechanical_component__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_svg_svg_electrical_component__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__components_svg_svg_leakage_component__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__components_svg_svg_other_safety_component__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_svg_svg_cold_component__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__components_svg_svg_pipe_insulation_component__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__components_svg_svg_pipe_component__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__components_svg_svg_valve_component__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__components_svg_svg_surface_component__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__components_svg_svg_damaged_cladding_component__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__components_svg_svg_damaged_insulation_component__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__components_svg_svg_energy_component__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__components_svg_svg_insulated_surface_component__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__components_svg_svg_others_component__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__components_svg_svg_insulated_others_component__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__components_svg_svg_cilinder_area_component__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__components_svg_svg_cube_area_component__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__components_svg_svg_circle_area_component__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__components_svg_svg_housekeeping_component__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__components_svg_svg_structural_component__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__components_svg_svg_rectangle_area_component__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__components_svg_svg_like_component__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__components_svg_svg_increase_component__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__components_svg_svg_empty_component__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_reports__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__pipes_surface_material_pipe__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__progress_kendo_angular_pdf_export__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__components_tools_tools_component__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__ionic_native_flashlight__ = __webpack_require__(396);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







/*Pages*/











/*Plugins*/










/*Services*/









// import { ReportSafetSurfacePage } from '../pages/reports/safety/surface';
/*Components*/



































//Reports

//Pipes

//import { GlobalErrorHandler } from '../models/errors/global-error';



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_download_download__["a" /* DownloadPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* ProjectReportsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_projects_projects__["a" /* ProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_projects_edit__["a" /* EditProjectPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_projects_project__["a" /* ProjectPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["a" /* GenericReportPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["v" /* ReportsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_init_init__["a" /* InitPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_pictures_pictures__["a" /* PicturesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_summary_summary__["a" /* SummaryPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_summary_summary_edit__["a" /* SummaryEditPage */],
                //Pipes
                __WEBPACK_IMPORTED_MODULE_73__pipes_surface_material_pipe__["a" /* SurfaceMaterialPipe */],
                //Reports
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["f" /* ReportEditPictureComponent */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["p" /* ReportPictureSlideComponent */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["j" /* ReportHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["i" /* ReportFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["b" /* ReportAreaButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["c" /* ReportAreaModalComponent */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["o" /* ReportMoreButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["n" /* ReportMediumTempButtonsComponent */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["t" /* ReportTempMarkersWindowComponent */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["g" /* ReportErrorsComponent */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["r" /* ReportResultComponent */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["s" /* ReportSurfacePage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["l" /* ReportInsulatedSurfacePage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["h" /* ReportFlangePage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["q" /* ReportPipePage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["k" /* ReportInsulatedPipePage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["u" /* ReportValvePage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["e" /* ReportDamagedPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["d" /* ReportCondensationPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["m" /* ReportLeakagePage */],
                //Components
                __WEBPACK_IMPORTED_MODULE_75__components_tools_tools_component__["a" /* ToolsComponent */],
                __WEBPACK_IMPORTED_MODULE_71__components_svg_svg_empty_component__["a" /* SvgEmptyComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_svg_svg_insulation_component__["a" /* SvgInsulationComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_svg_svg_custom_component__["a" /* SvgCustomComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_svg_svg_safety_component__["a" /* SvgSafetyComponent */],
                __WEBPACK_IMPORTED_MODULE_40__components_svg_svg_maintenance_component__["a" /* SvgMaintenanceComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_svg_svg_flange_component__["a" /* SvgFlangeComponent */],
                __WEBPACK_IMPORTED_MODULE_42__components_svg_svg_hot_surface_component__["a" /* SvgHotSurfaceComponent */],
                __WEBPACK_IMPORTED_MODULE_43__components_svg_svg_fire_protection_component__["a" /* SvgFireProtectionComponent */],
                __WEBPACK_IMPORTED_MODULE_44__components_svg_svg_traffic_component__["a" /* SvgTrafficComponent */],
                __WEBPACK_IMPORTED_MODULE_45__components_svg_svg_damage_insulation_component__["a" /* SvgDamageInsulationComponent */],
                __WEBPACK_IMPORTED_MODULE_46__components_svg_svg_damage_cladding_component__["a" /* SvgDamageCladdingComponent */],
                __WEBPACK_IMPORTED_MODULE_48__components_svg_svg_mechanical_component__["a" /* SvgMechanicalComponent */],
                __WEBPACK_IMPORTED_MODULE_49__components_svg_svg_electrical_component__["a" /* SvgElectricalComponent */],
                __WEBPACK_IMPORTED_MODULE_47__components_svg_svg_ice_wet_component__["a" /* SvgIceWetComponent */],
                __WEBPACK_IMPORTED_MODULE_50__components_svg_svg_leakage_component__["a" /* SvgLeakageComponent */],
                __WEBPACK_IMPORTED_MODULE_51__components_svg_svg_other_safety_component__["a" /* SvgOtherSafetyComponent */],
                __WEBPACK_IMPORTED_MODULE_52__components_svg_svg_cold_component__["a" /* SvgColdComponent */],
                __WEBPACK_IMPORTED_MODULE_53__components_svg_svg_pipe_insulation_component__["a" /* SvgPipeInsultationComponent */],
                __WEBPACK_IMPORTED_MODULE_54__components_svg_svg_pipe_component__["a" /* SvgPipeComponent */],
                __WEBPACK_IMPORTED_MODULE_55__components_svg_svg_valve_component__["a" /* SvgValveComponent */],
                __WEBPACK_IMPORTED_MODULE_56__components_svg_svg_surface_component__["a" /* SvgSurfaceComponent */],
                __WEBPACK_IMPORTED_MODULE_57__components_svg_svg_damaged_cladding_component__["a" /* SvgDamagedCladdingComponent */],
                __WEBPACK_IMPORTED_MODULE_58__components_svg_svg_damaged_insulation_component__["a" /* SvgDamagedInsulationComponent */],
                __WEBPACK_IMPORTED_MODULE_59__components_svg_svg_energy_component__["a" /* SvgEnergyComponent */],
                __WEBPACK_IMPORTED_MODULE_60__components_svg_svg_insulated_surface_component__["a" /* SvgInsulatedSurfaceComponent */],
                __WEBPACK_IMPORTED_MODULE_61__components_svg_svg_others_component__["a" /* SvgOthersComponent */],
                __WEBPACK_IMPORTED_MODULE_62__components_svg_svg_insulated_others_component__["a" /* SvgInsulatedOthersComponent */],
                __WEBPACK_IMPORTED_MODULE_63__components_svg_svg_cilinder_area_component__["a" /* SvgCilinderAreaComponent */],
                __WEBPACK_IMPORTED_MODULE_64__components_svg_svg_cube_area_component__["a" /* SvgCubeAreaComponent */],
                __WEBPACK_IMPORTED_MODULE_65__components_svg_svg_circle_area_component__["a" /* SvgCircleAreaComponent */],
                __WEBPACK_IMPORTED_MODULE_68__components_svg_svg_rectangle_area_component__["a" /* SvgRectangleAreaComponent */],
                __WEBPACK_IMPORTED_MODULE_66__components_svg_svg_housekeeping_component__["a" /* SvgHousekeepingComponent */],
                __WEBPACK_IMPORTED_MODULE_67__components_svg_svg_structural_component__["a" /* SvgStructuralComponent */],
                __WEBPACK_IMPORTED_MODULE_69__components_svg_svg_like_component__["a" /* SvgLikeComponent */],
                __WEBPACK_IMPORTED_MODULE_70__components_svg_svg_increase_component__["a" /* SvgIncreaseComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {
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
                __WEBPACK_IMPORTED_MODULE_6_ionic_tooltips__["a" /* TooltipsModule */],
                __WEBPACK_IMPORTED_MODULE_74__progress_kendo_angular_pdf_export__["a" /* PDFExportModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_download_download__["a" /* DownloadPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* ProjectReportsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_projects_projects__["a" /* ProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_projects_edit__["a" /* EditProjectPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_projects_project__["a" /* ProjectPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["a" /* GenericReportPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["v" /* ReportsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_init_init__["a" /* InitPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_pictures_pictures__["a" /* PicturesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_summary_summary__["a" /* SummaryPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_summary_summary_edit__["a" /* SummaryEditPage */],
                //Reports
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["j" /* ReportHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["i" /* ReportFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["c" /* ReportAreaModalComponent */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["t" /* ReportTempMarkersWindowComponent */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["s" /* ReportSurfacePage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["l" /* ReportInsulatedSurfacePage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["h" /* ReportFlangePage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["q" /* ReportPipePage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["k" /* ReportInsulatedPipePage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["u" /* ReportValvePage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["e" /* ReportDamagedPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["d" /* ReportCondensationPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_reports__["m" /* ReportLeakagePage */],
                __WEBPACK_IMPORTED_MODULE_75__components_tools_tools_component__["a" /* ToolsComponent */]
            ],
            providers: [
                /*App services*/
                __WEBPACK_IMPORTED_MODULE_34__services_messages_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_29__services_report_service__["a" /* ReportService */],
                __WEBPACK_IMPORTED_MODULE_28__services__["d" /* ProjectService */],
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
                //{ provide: ErrorHandler, useClass: GlobalErrorHandler, deps: [MessageService, Http] },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* IonicErrorHandler */] },
                //Mock services
                //{ provide: PictureService, useClass: PictureDeviceService },
                __WEBPACK_IMPORTED_MODULE_36__services_licences_service__["a" /* LicencesService */],
                __WEBPACK_IMPORTED_MODULE_35__services_picture_service__["a" /* PictureService */],
                __WEBPACK_IMPORTED_MODULE_76__ionic_native_flashlight__["a" /* Flashlight */],
                { provide: __WEBPACK_IMPORTED_MODULE_32__services_file_service__["a" /* FileService */], useClass: __WEBPACK_IMPORTED_MODULE_31__services_file_device_service__["a" /* FileDeviceService */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(168);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__value__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fields__ = __webpack_require__(169);
/* unused harmony reexport Fields */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result__ = __webpack_require__(99);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__result__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_location__ = __webpack_require__(467);
/* unused harmony reexport ComponentLocation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__project__ = __webpack_require__(167);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__project__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__document_class__ = __webpack_require__(468);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__document_class__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__report_base__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__report_base__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__report_category__ = __webpack_require__(469);
/* unused harmony reexport ReportCategory */








//# sourceMappingURL=index.js.map

/***/ }),

/***/ 467:
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

/***/ 468:
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

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ReportCategory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums__ = __webpack_require__(470);

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

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_categories_enum__ = __webpack_require__(471);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__report_categories_enum__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 471:
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

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectJson; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__project__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_json__ = __webpack_require__(473);


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
        this.people = new __WEBPACK_IMPORTED_MODULE_0__project__["a" /* People */]();
        this.id = project.id;
        this.name = project.name;
        this.desc = project.desc;
        this.date = project.date;
        this.user = project.user;
        this.price = project.price;
        this.picture = project.picture;
        this.components = project.components.map(function (c) { return new __WEBPACK_IMPORTED_MODULE_1__component_json__["a" /* TbiComponentJson */](c); });
        this.documents = project.documents || [];
        this.people = new __WEBPACK_IMPORTED_MODULE_0__project__["a" /* People */](project.people);
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

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TbiComponentJson; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fields__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__report_base_json__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__marker__ = __webpack_require__(75);



var TbiComponentJson = /** @class */ (function () {
    function TbiComponentJson(item) {
        this.id = '';
        this.reports = [];
        this.fields = new __WEBPACK_IMPORTED_MODULE_0__fields__["a" /* Fields */]();
        this.id = item.id;
        this.reports = (item.reports || []).map(function (r) { return new __WEBPACK_IMPORTED_MODULE_1__report_base_json__["a" /* ReportBaseJson */](r); });
        this.fields = new __WEBPACK_IMPORTED_MODULE_0__fields__["a" /* Fields */](item.fields);
        this.markers = (item.markers || []).map(function (m) { return new __WEBPACK_IMPORTED_MODULE_2__marker__["a" /* Marker */](m); });
        this.date = item.date || new Date();
    }
    return TbiComponentJson;
}());

//# sourceMappingURL=component.json.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportBaseJson; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__result__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__picture__ = __webpack_require__(100);


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

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_reports__ = __webpack_require__(21);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_reports__["a" /* BaseReportPage */])
    ], ReportFooterComponent.prototype, "parent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ReportFooterComponent.prototype, "calculate_text", void 0);
    ReportFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'report-footer',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\components\report-footer\report-footer.component.html"*/'<ion-footer>\n\n  <ion-grid no-padding>\n\n    <ion-row no-padding>\n\n      <ion-col col-6 no-padding>\n\n        <button tabindex="22" *ngIf="(parent.view!=\'edit_picture\') || (parent.view==\'edit_picture\' && !parent.is_energy_report)" ion-button small color="light" (click)="parent.go_back()">\n\n          <ion-icon name="arrow-back"></ion-icon>&nbsp;Back\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6 text-right no-padding *ngIf="parent.view==\'edit_picture\' && parent.is_energy_report">\n\n        <button tabindex="22" ion-button small color="royal" (click)="parent.go_back()">\n\n          Next\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6 text-right no-padding *ngIf="parent.view!=\'edit_picture\' && parent.segment===\'input\'">\n\n        <button id="submit-button" tabindex="20" ion-button small pull-right color="primary" (click)="parent.calculate()" *ngIf="parent.view!=\'edit_picture\' && parent.view!=\'result\'">\n\n          <!-- {{calculate_text}} -->\n\n          Next\n\n        </button>\n\n        <button id="submit-button" tabindex="21" ion-button small pull-right color="primary" (click)="parent.save()" *ngIf="parent.view==\'result\' && !parent.form.invalid">\n\n          Next\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\components\report-footer\report-footer.component.html"*/
        })
    ], ReportFooterComponent);
    return ReportFooterComponent;
}());

//# sourceMappingURL=report-footer.component.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportCondensation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_reports__ = __webpack_require__(20);
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
        _this.page = __WEBPACK_IMPORTED_MODULE_1__pages_reports__["d" /* ReportCondensationPage */];
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

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportDamaged; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_reports__ = __webpack_require__(20);
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
        _this.page = __WEBPACK_IMPORTED_MODULE_1__pages_reports__["e" /* ReportDamagedPage */];
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

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportInsulatedSurface; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_reports__ = __webpack_require__(20);
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
        _this.page = __WEBPACK_IMPORTED_MODULE_1__pages_reports__["l" /* ReportInsulatedSurfacePage */];
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

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportValve; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_reports__ = __webpack_require__(20);
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
        _this.page = __WEBPACK_IMPORTED_MODULE_1__pages_reports__["u" /* ReportValvePage */];
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

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportFlange; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_reports__ = __webpack_require__(20);
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
        _this.page = __WEBPACK_IMPORTED_MODULE_1__pages_reports__["h" /* ReportFlangePage */];
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

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IPipeDecorator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_calculator_class__ = __webpack_require__(63);
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
        var _this = _super.call(this, report, [
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
            /**45*/ function () { return _this.ql_min = (Math.abs(_this.θse_min - _this.θa_min)) / (_this.Rle_min + _this.Rins_min); },
            /**46*/ function () { return _this.ql_max = 114; },
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

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ISurfaceDecorator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_calculator_class__ = __webpack_require__(63);
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
            /*01min*/ function () { return _this.hr_min = _this.ε * _this.δ * (Math.pow(_this.θse_min + 273, 4) - Math.pow(_this.θa_min + 273, 4)) / ((_this.θse_min + 273) - (_this.θa_min + 273)); },
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
            /*20*/ function () { return _this.q_min = _this.hse_min * Math.abs(_this.θse_min - _this.θa_min); },
            /*21*/ function () { return _this.q_max = 90; },
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

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValveDecorator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_calculator_class__ = __webpack_require__(63);
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
            /*44*/ function () { return _this.Qkwh = _this.ql * _this.l * _this.n * _this.Ot * 1 / 1000; },
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

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipeDecorator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_calculator_class__ = __webpack_require__(63);
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
            /*30*/ function () { return _this.Insulation_advice = _this.ql_ref_pb > _this.ql_min ? 'Insulation recommended' : 'System OK'; },
        ]) || this;
        return _this;
    }
    return PipeCalculator;
}(__WEBPACK_IMPORTED_MODULE_0__base_calculator_class__["a" /* BaseCalculator */]));
//# sourceMappingURL=pipe.class.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlangeDecorator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_calculator_class__ = __webpack_require__(63);
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
            /*47*/ function () { return _this.Qkwh = _this.ql * _this.l * _this.Ot * _this.n * 1 / 1000; },
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

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurfaceDecorator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_calculator_class__ = __webpack_require__(63);
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

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportSurface; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_reports__ = __webpack_require__(20);
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
        _this.page = __WEBPACK_IMPORTED_MODULE_1__pages_reports__["s" /* ReportSurfacePage */];
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

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calculators_calculator_factory__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__picture__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_reports__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__const_more_more__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_scroll_to_component_class__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__const_images__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__const_patterns__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_projects_projects__ = __webpack_require__(74);
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
    function BaseReportPage(report, navCtrl, service, alertCtrl, picture, message, keyboard) {
        var _this = _super.call(this, keyboard) || this;
        _this.report = report;
        _this.navCtrl = navCtrl;
        _this.service = service;
        _this.alertCtrl = alertCtrl;
        _this.picture = picture;
        _this.message = message;
        _this.keyboard = keyboard;
        _this.calculator = new __WEBPACK_IMPORTED_MODULE_3__calculators_calculator_factory__["a" /* CalculatorFactory */]();
        _this.edit_surface_material = false;
        _this.view = 'form';
        _this.editing_picture = new __WEBPACK_IMPORTED_MODULE_4__picture__["a" /* Picture */]();
        _this.segment = 'input';
        _this.patterns = __WEBPACK_IMPORTED_MODULE_10__const_patterns__["a" /* Patterns */];
        _this.unknow_surface = false;
        _this.editable = false;
        _this._average_temp = null;
        _this._original_component = _this.report.component;
        _this.report.component = new __WEBPACK_IMPORTED_MODULE_7__component__["a" /* TbiComponent */](_this._original_component.project, _this._original_component);
        _this.report.component.id = _this._original_component.id;
        _this.editable = !_this.report.component.reports.filter(function (r) { return !!r.path.match(/(surface|pipe|valve|flange)/gi) && !!r.result; }).length;
        _this.is_energy_report = !!_this.report.path.match(/(pipe|surface|valve|flange)/gi);
        return _this;
        // this.report.pictures.push(new Picture({
        //   picture: "data:image/jpeg;base64,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"
        // }))
    }
    Object.defineProperty(BaseReportPage.prototype, "picture_qty", {
        get: function () {
            return !!this.report.pictures.length ? this.report.pictures.length : null;
        },
        enumerable: true,
        configurable: true
    });
    BaseReportPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        var wait = 1000;
        if (!!this.time) {
            this.time.change.subscribe(function (v) {
                setTimeout(function () { return _this.after_time.setFocus(); }, wait);
            });
        }
        if (!!this.material) {
            this.material.change.subscribe(function (v) {
                setTimeout(function () { return _this.after_material.setFocus(); }, wait);
            });
        }
    };
    BaseReportPage.prototype.ngOnInit = function () {
        var _this = this;
        if (!!this.report.id && !!this.report.path.match(/(pipe|surface|valve|flange)/gi))
            setTimeout(function () { return _this.calculate(); }, 250);
    };
    BaseReportPage.prototype.set_operational_time = function () {
        var _this = this;
        this.report.component.fields.operational_time = this.time.value;
        setTimeout(function () { return _this.after_time.setFocus(); }, 400);
    };
    Object.defineProperty(BaseReportPage.prototype, "first_picture", {
        get: function () {
            return this.report.pictures.length ? this.report.pictures[0].picture : __WEBPACK_IMPORTED_MODULE_9__const_images__["a" /* NON_PICTURE */];
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
        if (!this.editable)
            return;
        this.edit_surface_material = value;
        setTimeout(function () {
            if (!!value)
                document.getElementsByName('surface_material')[1].focus();
        }, 200);
    };
    BaseReportPage.prototype.set_surface_material = function (index, event) {
        var material = __WEBPACK_IMPORTED_MODULE_6__const_more_more__["a" /* More */].MATERIALS.find(function (c) { return c[1] == index; });
        this.report.component.fields.surface_material_index = typeof event == 'object' ? null : index;
        this.report.component.fields.surface_material = !!material ? Number(material[2]) : !!index ? Number(index) : index;
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
        this.service.save(this.report).then(function (p) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_projects_projects__["a" /* ProjectsPage */], { project: p, summary: true }, { animate: true, direction: 'backward' });
        });
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
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_reports__["v" /* ReportsPage */], {
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
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_reports__["v" /* ReportsPage */], {
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
        //const _contents = document.getElementsByClassName('scroll-content');
        //_contents[_contents.length - 1].scrollTo(100000, 0);
        //this.content.scrollToTop(500);
        //setTimeout(()=>this.content.scrollToBottom(250), 500);
        this.start_changes_observer();
        this.errors.page = this;
        if (!this.form.invalid) {
            this.view = 'result';
            //this.content.scrollToBottom(500);
            return this.calculator.calculate(this.report);
        }
        else {
            this.view = 'form';
        }
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
        //this.alert('Hacer foto');
        this.picture.take_picture().then(function (d) { return _this.report.pictures.push(new __WEBPACK_IMPORTED_MODULE_4__picture__["a" /* Picture */]({ picture: d })); })
            .catch(function (ex) { return _this.message.alert('Error take picture', JSON.stringify(ex, null, 2)); });
    };
    BaseReportPage.prototype.toggle_know = function () {
        if (!!this.report.component.fields.unknow_surface)
            this.report.component.fields.surface = null;
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgForm */])
    ], BaseReportPage.prototype, "form", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])('errors'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__pages_reports__["g" /* ReportErrorsComponent */])
    ], BaseReportPage.prototype, "errors", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])('time', { read: __WEBPACK_IMPORTED_MODULE_5__pages_reports__["o" /* ReportMoreButtonComponent */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__pages_reports__["o" /* ReportMoreButtonComponent */])
    ], BaseReportPage.prototype, "time", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])('after_time'),
        __metadata("design:type", Object)
    ], BaseReportPage.prototype, "after_time", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])('material', { read: __WEBPACK_IMPORTED_MODULE_5__pages_reports__["o" /* ReportMoreButtonComponent */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__pages_reports__["o" /* ReportMoreButtonComponent */])
    ], BaseReportPage.prototype, "material", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])('after_material'),
        __metadata("design:type", Object)
    ], BaseReportPage.prototype, "after_material", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Content */])
    ], BaseReportPage.prototype, "content", void 0);
    return BaseReportPage;
}(__WEBPACK_IMPORTED_MODULE_8__pages_scroll_to_component_class__["a" /* ScrollToComponent */]));

//# sourceMappingURL=base-report-page.class.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__const__ = __webpack_require__(497);


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
    CalculatorFactory.prototype.calculate = function (report) {
        return this.decorators.get(report.path)().calculate(report);
    };
    return CalculatorFactory;
}());

//# sourceMappingURL=calculator.factory.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_const__ = __webpack_require__(178);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__report_const__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_reports__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_report_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_reports_report_pipe_class__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_messages_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services__ = __webpack_require__(17);
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
    function ReportPipePage(navCtrl, navParams, service, alertCtrl, picture, message, keyboard) {
        var _this = _super.call(this, new __WEBPACK_IMPORTED_MODULE_4__models_reports_report_pipe_class__["a" /* ReportPipe */](navParams.data.project, navParams.data.component, navParams.data.report), navCtrl, service, alertCtrl, picture, message, keyboard) || this;
        _this.navCtrl = navCtrl;
        _this.service = service;
        _this.alertCtrl = alertCtrl;
        _this.picture = picture;
        _this.message = message;
        _this.keyboard = keyboard;
        return _this;
    }
    ReportPipePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report-pipe',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\pipe\report-pipe.component.html"*/'<report-header [parent]="this"></report-header>\n\n\n\n<ion-content #content>\n\n\n\n  <ion-grid [hidden]="view==\'edit_picture\'" class="fixed-col">\n\n    <ion-row>\n\n      <ion-col col-7 col-lg-6 no-padding>\n\n        <form novalidate #form="ngForm" [hidden]="segment!=\'input\'" (submit)="calculate()">\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Component/Location</ion-label>\n\n                <ion-input tabindex="1" (ionFocus)="on_focus($event)" name="location" required data-val-required="Please input Component/Location"\n\n                  [(ngModel)]="report.component.fields.location" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Operational time (hours)</ion-label>\n\n                <ion-input tabindex="2" (ionFocus)="on_focus($event)" required data-val-required="Please input operational time"\n\n                  name="operational_time" [(ngModel)]="report.component.fields.operational_time" type="number"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <more pull-left #time (change)="report.component.fields.operational_time=time.value" [type]="\'time\'"\n\n                modal-button></more>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-7>\n\n              <ion-item>\n\n                <ion-label stacked>Diameter (mm)</ion-label>\n\n                <ion-input #after_time tabindex="4" (ionFocus)="on_focus($event)" name="nominal_diameter" required\n\n                  data-val-required="Please input Diameter" [(ngModel)]="report.component.fields.nominal_diameter"\n\n                  type="number"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n              <ion-item>\n\n                <ion-label stacked>Length (m)</ion-label>\n\n                <ion-input tabindex="5" min="0" (ionFocus)="on_focus($event)" name="number" required data-val-required="Please input length"\n\n                  [(ngModel)]="report.component.fields.length" type="number"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item class="edit_surface_material" [class.editable]="edit_surface_material">\n\n                <ion-label stacked>Surface material [ε]</ion-label>\n\n                <ion-input tabindex="6" class="literal" (ionFocus)="on_focus($event);toggle_surface_material(true)"\n\n                  [value]="report.component.fields.surface_material_friendly" type="text"></ion-input>\n\n                <ion-input tabindex="7" class="numeric" (ionFocus)="on_focus($event)" (focusout)="toggle_surface_material(false)"\n\n                  (ionFocus)="on_focus($event)" name="surface_material" required data-val-required="Please input surface emissivity"\n\n                  [(ngModel)]="report.component.fields.surface_material" type="number" (change)="set_surface_material(report.component.fields.surface_material, $event)"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <more pull-left #material (change)="set_surface_material(material.value, $event)" [type]="\'materials\'"\n\n                modal-button></more>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Medium or Surface temperature (<sup>º</sup>C)</ion-label>\n\n                <ion-input #after_material tabindex="8" (ionFocus)="on_focus($event)" name="surface_temp" [pattern]="patterns.REQUIRED_NUMBER"\n\n                  data-val-pattern="Please input a valid Medium or Surface temperature" required data-val-required="Please input Medium or Surface temperature"\n\n                  [(ngModel)]="report.component.fields.surface_temp" type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <!-- <medium-temp #medium (change)="report.component.fields.surface_temp=medium.value" modal-button pull-left></medium-temp> -->\n\n              <medium-temp #medium [report]="report" modal-button pull-left></medium-temp>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Ambient temperature (<sup>º</sup>C)</ion-label>\n\n                <ion-input tabindex="9" (ionFocus)="on_focus($event)" (keyup.enter)="on_keypress($event)" name="ambient_temp"\n\n                  [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Ambient temperature"\n\n                  required data-val-required="Please input Ambient temperature" [(ngModel)]="report.component.fields.ambient_temp"\n\n                  type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2></ion-col>\n\n          </ion-row>\n\n        </form>\n\n      </ion-col>\n\n\n\n      <ion-col col-5 col-lg-6 no-padding text-center>\n\n        <ion-row>\n\n          <ion-col col-12 picture-slide [report]="report" [editable]="editable"\n\n            (onStartEdit)="on_picture_start_edit($event)">\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n\n\n      <ion-col col-12 padding>\n\n        <report-result col-12 [parent]="this" *ngIf="view==\'result\' && (!!form && !form.invalid)"></report-result>\n\n      </ion-col>\n\n      <ion-col col-12 padding>\n\n        <report-errors padding #errors col-12 [hidden]="view==\'!result\' && report.result"></report-errors>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <edit-picture *ngIf="view==\'edit_picture\'" [report]="report" [picture]="editing_picture"></edit-picture>\n\n\n\n</ion-content>\n\n\n\n<report-footer [parent]="this"></report-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\pipe\report-pipe.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_report_service__["a" /* ReportService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__services__["c" /* PictureService */],
            __WEBPACK_IMPORTED_MODULE_5__services_messages_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Keyboard */]])
    ], ReportPipePage);
    return ReportPipePage;
}(__WEBPACK_IMPORTED_MODULE_1__models_reports__["a" /* BaseReportPage */]));

//# sourceMappingURL=report-pipe.component.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportFlangePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_reports__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_report_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_messages_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__(17);
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
    function ReportFlangePage(navCtrl, navParams, service, alertCtrl, picture, message, keyboard) {
        var _this = _super.call(this, new __WEBPACK_IMPORTED_MODULE_1__models_reports__["d" /* ReportFlange */](navParams.data.project, navParams.data.component, navParams.data.report), navCtrl, service, alertCtrl, picture, message, keyboard) || this;
        _this.navCtrl = navCtrl;
        _this.service = service;
        _this.alertCtrl = alertCtrl;
        _this.picture = picture;
        _this.message = message;
        _this.keyboard = keyboard;
        _this.unknow_length = true;
        return _this;
    }
    ReportFlangePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report-flange',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\flange\report-flange.component.html"*/'<report-header [parent]="this"></report-header>\n\n\n\n<ion-content #content>\n\n\n\n  <ion-grid [hidden]="view==\'edit_picture\'" class="fixed-col">\n\n    <ion-row>\n\n      <ion-col col-7 col-lg-6 no-padding>\n\n\n\n        <form novalidate #form="ngForm" [hidden]="segment!=\'input\'" (submit)="calculate()">\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Component/Location</ion-label>\n\n                <ion-input tabindex="1" (ionFocus)="on_focus($event)" name="location" required data-val-required="Please input Component/Location"\n\n                  [(ngModel)]="report.component.fields.location" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Item number</ion-label>\n\n                <ion-input min="0" tabindex="2" (ionFocus)="on_focus($event)" name="number" required data-val-required="Please input Item number"\n\n                  [(ngModel)]="report.component.fields.number" type="number"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Operational time (hours)</ion-label>\n\n                <ion-input tabindex="3" (ionFocus)="on_focus($event)" required data-val-required="Please input operational time"\n\n                  name="operational_time" [(ngModel)]="report.component.fields.operational_time" type="number"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <more pull-left #time (change)="report.component.fields.operational_time=time.value" [type]="\'time\'"\n\n                modal-button></more>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Diameter (mm)</ion-label>\n\n                <ion-input #after_time tabindex="4" (ionFocus)="on_focus($event)" name="nominal_diameter" required\n\n                  data-val-required="Please input Diameter" [(ngModel)]="report.component.fields.nominal_diameter"\n\n                  type="number"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <!-- <ion-col col-2>\n\n              <div (click)="set_length(\'Default value for flanges 0.5m\', 0.5)" tabindex="-1" pull-left no-padding\n\n                ion-button small color="light" class="with-action">\n\n                <ion-icon name="custom-flange"></ion-icon>\n\n              </div>\n\n            </ion-col> -->\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item class="edit_surface_material" [class.editable]="edit_surface_material">\n\n                <ion-label stacked>Surface material [ε]</ion-label>\n\n                <ion-input tabindex="5" class="literal" (focus)="toggle_surface_material(true)" [value]="report.component.fields.surface_material_friendly"\n\n                  type="text"></ion-input>\n\n                <ion-input tabindex="6" class="numeric" (focusout)="toggle_surface_material(false)" (ionFocus)="on_focus($event)"\n\n                  name="surface_material" required data-val-required="Please input surface emissivity" [(ngModel)]="report.component.fields.surface_material"\n\n                  type="number" (change)="set_surface_material(report.component.fields.surface_material, $event)"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <more pull-left #material (change)="set_surface_material(material.value, $event)" [type]="\'materials\'"\n\n                modal-button></more>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Medium or Surface temperature (<sup>º</sup>C)</ion-label>\n\n                <ion-input #after_material tabindex="7" (ionFocus)="on_focus($event)" name="surface_temp" [pattern]="patterns.REQUIRED_NUMBER"\n\n                  data-val-pattern="Please input a valid Medium or Surface temperature" required data-val-required="Please input Medium or Surface temperature"\n\n                  [(ngModel)]="report.component.fields.surface_temp" type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <medium-temp #medium [report]="report" modal-button pull-left></medium-temp>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Ambient temperature (<sup>º</sup>C)</ion-label>\n\n                <ion-input tabindex="8" (ionFocus)="on_focus($event)" (keyup.enter)="on_keypress($event)" name="ambient_temp"\n\n                  [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Ambient temperature"\n\n                  required data-val-required="Please input Ambient temperature" [(ngModel)]="report.component.fields.ambient_temp"\n\n                  type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2></ion-col>\n\n          </ion-row>\n\n        </form>\n\n      </ion-col>\n\n\n\n      <ion-col col-5 col-lg-6 no-padding>\n\n        <ion-row>\n\n          <ion-col col-12 picture-slide [report]="report" [editable]="editable" (onStartEdit)="on_picture_start_edit($event)">\n\n          </ion-col>\n\n        </ion-row>\n\n        <report-errors padding #errors col-12 [hidden]="view==\'!result\' && report.result"></report-errors>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <report-result col-12 [parent]="this" *ngIf="view==\'result\' && (!!form && !form.invalid)"></report-result>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <edit-picture *ngIf="view==\'edit_picture\'" [report]="report" [picture]="editing_picture"></edit-picture>\n\n\n\n</ion-content>\n\n\n\n<report-footer [parent]="this"></report-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\flange\report-flange.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_report_service__["a" /* ReportService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__services__["c" /* PictureService */],
            __WEBPACK_IMPORTED_MODULE_4__services_messages_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Keyboard */]])
    ], ReportFlangePage);
    return ReportFlangePage;
}(__WEBPACK_IMPORTED_MODULE_1__models_reports__["a" /* BaseReportPage */]));

//# sourceMappingURL=report-flange.component.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportEditPictureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_picture__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_marker__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_picture__["a" /* Picture */])
    ], ReportEditPictureComponent.prototype, "picture", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__models__["c" /* ReportBase */])
    ], ReportEditPictureComponent.prototype, "report", void 0);
    ReportEditPictureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'edit-picture',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\components\edit-picture\edit-picture.component.html"*/'<ng-container>\n\n<svg *ngFor="let marker of picture?.markers_with_values"\n\n  (click)="edit_marker(marker)"\n\n  version="1.1" \n\n  xmlns="http://www.w3.org/2000/svg" \n\n  xmlns:xlink="http://www.w3.org/1999/xlink" \n\n  x="0" y="0"\n\n  viewBox="0 0 366.1 485.2" \n\n  xml:space="preserve"\n\n  [style.transform]="marker.position">\n\n  <g [attr.class]="marker.color">\n\n    <circle cx="183.1" cy="181" r="130.8"/>\n\n    <path d="M184,0C83.5,0,2,81.5,2,182s151.6,303.3,182,303.3c30.3,0,182-202.8,182-303.3S284.4,0,184,0z M184,303.3\n\n	c-66.9,0-121.3-54.4-121.3-121.3S117.1,60.7,184,60.7c66.9,0,121.3,54.4,121.3,121.3S250.9,303.3,184,303.3z" />\n\n    <text [attr.transform]="marker.transform">{{marker.temperature}}</text>\n\n  </g>\n\n</svg>\n\n<img [src]="picture?.picture" width="100%" height="auto" (click)="create_marker($event)">\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\components\edit-picture\edit-picture.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */]])
    ], ReportEditPictureComponent);
    return ReportEditPictureComponent;
}());

//# sourceMappingURL=edit-picture.component.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPictureSlideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__const_images__ = __webpack_require__(170);
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
        this.onStartEdit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.can_edit = false;
        this.NON_PICTURE = __WEBPACK_IMPORTED_MODULE_2__const_images__["a" /* NON_PICTURE */];
    }
    ;
    ReportPictureSlideComponent.prototype.ngOnInit = function () {
        this.can_edit = !!this.report.path.match(/(surface|pipe|valve|flange)/gi);
    };
    ReportPictureSlideComponent.prototype.edit = function (picture) {
        this.onStartEdit.emit(picture);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models__["c" /* ReportBase */])
    ], ReportPictureSlideComponent.prototype, "report", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ReportPictureSlideComponent.prototype, "editable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ReportPictureSlideComponent.prototype, "onStartEdit", void 0);
    ReportPictureSlideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[picture-slide]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\components\picture-slide\picture-slide.component.html"*/'<ion-row>\n\n  <ion-col col-12 text-center>\n\n    <img [src]="NON_PICTURE" class="non-picture" *ngIf="!report || !report.pictures.length"/>\n\n    <ion-slides no-padding pager="true" zoom="true" *ngIf="!!report && !!report.pictures.length">\n\n      <ion-slide *ngFor="let picture of report.pictures">\n\n        <img [src]="picture.picture" (click)="edit(picture)">\n\n        <div *ngIf="!!can_edit" class="markers">Measurements: {{picture.markers.length}}</div>\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </ion-col>\n\n</ion-row>\n\n<ion-row *ngIf="!!report.component.has_markers(report) && !!can_edit" text-center>\n\n    <ion-col col-8 offset-2>\n\n      <button ion-button round outline small color="royal" (click)="report.component.fields.surface_temp=report.component.min_temp(report)">\n\n        Minimun<br>{{report.component.min_temp(report) | number: \'1.2-2\'}}ºC\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-8 offset-2>\n\n      <button ion-button round outline small color="royal" (click)="report.component.fields.surface_temp=report.component.medium_temp(report)">\n\n        Average<br>{{report.component.medium_temp(report) | number: \'1.2-2\'}}ºC\n\n      </button>\n\n    </ion-col>\n\n    <ion-col col-8 offset-2>\n\n      <button ion-button round outline small color="royal" (click)="report.component.fields.surface_temp=report.component.max_temp(report)">\n\n        Maximun<br>{{report.component.max_temp(report) | number: \'1.2-2\'}}ºC\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\components\picture-slide\picture-slide.component.html"*/
        })
    ], ReportPictureSlideComponent);
    return ReportPictureSlideComponent;
}());

//# sourceMappingURL=picture-slide.component.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportErrorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
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
        this.on_change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgForm */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgForm */]])
    ], ReportErrorsComponent.prototype, "form", null);
    ReportErrorsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'report-errors',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\components\errors\report-errors.component.html"*/'<ion-col col-12 *ngIf="!!errors?.length">\n  <ion-title col-12>Warnings</ion-title>\n  <!-- <p>Report contains error, resuelva los errores para poder realizar el cálculo.</p> -->\n  <ul>\n    <li *ngFor="let e of errors">\n      {{e.message}}\n    </li>\n  </ul>\n  <!-- <button (tap)="understood()" style="margin-top: 2rem" offset-3 col-6 block ion-button small outline color="danger">Understood</button> -->\n</ion-col>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\components\errors\report-errors.component.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], ReportErrorsComponent);
    return ReportErrorsComponent;
}());

//# sourceMappingURL=report-errors.component.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const_report_const__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projects_projects__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_report_router__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__summary_summary__ = __webpack_require__(179);
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
        //public segment: Segment = new Segment();
        _this.REPORT = __WEBPACK_IMPORTED_MODULE_0__const_report_const__["a" /* REPORT */];
        _this.type = navParams.get('type') || '';
        _this.report = navParams.get('report');
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__summary_summary__["a" /* SummaryPage */], { project: this.project });
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
        this.navCtrl.push(ReportsPage_1, { type: name, project: this.project, parent: this, component: this.component });
    };
    ReportsPage.prototype.go_back = function () {
        if (!this.type)
            this.navigate_to_projects();
        else
            this.navigate_to('', 'Reports');
    };
    ReportsPage.prototype.navigate_to_projects = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__projects_projects__["a" /* ProjectsPage */], {
            project: this.project,
            parent: this.navParams.get('parent')
        });
    };
    ReportsPage = ReportsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-reports',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\reports.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton>\n\n    <ion-title>\n\n      {{project.name}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <!-- <ion-segment [(ngModel)]="segment.value">\n\n    <ion-segment-button *ngFor="let option of segment.options; let i=index" [value]="i">\n\n      {{option}}\n\n    </ion-segment-button>\n\n  </ion-segment> -->\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-grid [ngSwitch]="type" v-center style="margin-top: -2rem">\n\n    <ng-container *ngSwitchCase="\'\'">\n\n      <ion-row>\n\n        <ion-col card-container col-md-4 offset-md-4 col-sm-6>\n\n          <ion-card (click)="navigate_to(\'insulation\')" [class.disabled]="disabled_for(\'insulation\')">\n\n            <span svg="insulation"></span>\n\n            <h1>Insulation</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-4 offset-md-4 col-sm-6>\n\n          <ion-card [class.disabled]="disabled_for(\'safety\')" (click)="navigate_to(\'safety\')">\n\n            <span svg="safety"></span>\n\n            <h1>Safety</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-4 offset-md-4 col-sm-6>\n\n          <ion-card [class.disabled]="disabled_for(\'maintenance\')" (click)="navigate_to(\'maintenance\')">\n\n            <span svg="maintenance"></span>\n\n            <h1>Maintenance</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-4 offset-md-4 col-sm-6>\n\n          <ion-card [class.disabled]="disabled_for(\'custom\')" on-tap="navigate_to_report(REPORT.CUSTOM, \'Others\')">\n\n            <span svg="custom"></span>\n\n            <h1>Custom</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ng-container>\n\n\n\n    <ng-container *ngSwitchCase="\'insulation\'">\n\n      <ion-row>\n\n        <ion-col card-container col-md-4 col-sm-6 offset-md-4>\n\n          <ion-card on-tap="navigate_to(\'insulation-uninsulated\')">\n\n            <span svg="empty"></span>\n\n            <h1 empty>Uninsulated</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-4 col-sm-6 offset-md-4>\n\n          <ion-card on-tap="navigate_to(\'insulation-insulated\')">\n\n            <span svg="empty"></span>\n\n            <h1 empty>Insulated</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-4 col-sm-6 offset-md-4>\n\n          <ion-card on-tap="navigate_to(\'cold-insulation\')">\n\n            <span svg="empty"></span>\n\n            <h1 empty>Cold Insulation</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ng-container>\n\n\n\n    <ng-container *ngSwitchCase="\'insulation-uninsulated\'">\n\n      <ion-row>\n\n        <ion-col card-container col-md-4 col-sm-6 offset-md-4>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.INSULATION.UNINSULATED_EQUIPMENTS.PIPE, \'Uninsulated pipe\')">\n\n            <span svg="pipe"></span>\n\n            <h1>Pipe</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-4 col-sm-6 offset-md-4>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.INSULATION.UNINSULATED_EQUIPMENTS.VALVE, \'Uninsulated valve\')">\n\n            <span svg="valve"></span>\n\n            <h1>Valve</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-4 col-sm-6 offset-md-4>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.INSULATION.UNINSULATED_EQUIPMENTS.FLANGE, \'Uninsulated flange\')">\n\n            <span svg="flange"></span>\n\n            <h1>Flange</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-4 col-sm-6 offset-md-4>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.INSULATION.UNINSULATED_EQUIPMENTS.SURFACE, \'Uninsulated surface\')">\n\n            <span svg="surface"></span>\n\n            <h1>Surface</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ng-container>\n\n\n\n    <ng-container *ngSwitchCase="\'insulation-insulated\'">\n\n      <ion-row>\n\n        <ion-col card-container col-md-4 col-sm-6 offset-md-4>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.INSULATION.INSULATED_EQUIPMENTS.PIPE, \'Insulated pipe\')">\n\n            <span svg="pipe-insulation"></span>\n\n            <h1>Pipe</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-4 col-sm-6 offset-md-4>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.INSULATION.INSULATED_EQUIPMENTS.SURFACE, \'Insulated surface\')">\n\n            <span svg="surface"></span>\n\n            <h1>Surface</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-4 col-sm-6 offset-md-4>\n\n          <ion-icon name="information-circle-outline" duration="3000" arrow tooltip="Damaged insulation and/or cladding"\n\n            positionV="top"></ion-icon>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.INSULATION.INSULATED_EQUIPMENTS.DAMAGED, \'Insulated damaged\')">\n\n            <span svg="damaged-insulation"></span>\n\n            <h1>Damaged</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ng-container>\n\n\n\n    <ng-container *ngSwitchCase="\'cold-insulation\'">\n\n      <ion-row>\n\n        <ion-col card-container col-md-4 col-sm-6 offset-md-4>\n\n          <!-- <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.INSULATION.COLD_INSULATION.ENERGY, \'Cold energy\')"> -->\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" (click)="navigate_to(\'hot-surface\')">\n\n            <span svg="cold"></span>\n\n            <h1>Energy</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-4 col-sm-6 offset-md-4>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.INSULATION.COLD_INSULATION.CONDENSATION, \'Condensation\')">\n\n            <span svg="ice-wet"></span>\n\n            <h1>Condensation</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-4 col-sm-6 offset-md-4>\n\n          <ion-icon name="information-circle-outline" duration="3000" arrow tooltip="Damaged insulation and/or cladding"\n\n            positionV="top"></ion-icon>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.INSULATION.COLD_INSULATION.DAMAGED, \'Damaged\')">\n\n            <span svg="damaged-insulation"></span>\n\n            <h1>Damaged</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ng-container>\n\n\n\n    <ng-container *ngSwitchCase="\'safety\'">\n\n      <ion-row>\n\n        <ion-col card-container col-md-4 col-sm-6 offset-md-4>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" (click)="navigate_to(\'insulation\')">\n\n            <span svg="hot-surface"></span>\n\n            <h1>Hot Surface</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-4 col-sm-6 offset-md-4>\n\n          <ion-card [class.disabled]="disabled_for(\'safety\')" on-tap="navigate_to_report(REPORT.SAFETY.FIRE_PROTECTION, \'Fire Protect\')">\n\n            <span svg="fire-protection"></span>\n\n            <h1>Fire Protection</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-4 col-sm-6 offset-md-4>\n\n          <ion-card [class.disabled]="disabled_for(\'safety\')" on-tap="navigate_to_report(REPORT.SAFETY.HOUSEKEEPING, \'Housekeeping\')">\n\n            <span svg="housekeeping"></span>\n\n            <h1>Housekeeping</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-4 col-sm-6 offset-md-4>\n\n          <ion-card [class.disabled]="disabled_for(\'safety\')" on-tap="navigate_to_report(REPORT.SAFETY.OTHER, \'Others\')">\n\n            <span svg="safety"></span>\n\n            <h1>Other</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n      <!-- <ion-row>\n\n        <ion-col  card-container col-md-3 col-sm-6 offset-md-3>\n\n          <ion-card [class.disabled]="disabled_for(\'safety\')" on-tap="navigate_to_report(REPORT.SAFETY.TRAFFIC, \'Traffic\')">\n\n            <span svg="traffic"></span>\n\n            <h1>Traffic</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        \n\n      </ion-row> -->\n\n    </ng-container>\n\n\n\n    <ng-container *ngSwitchCase="\'maintenance\'">\n\n      <ion-row>\n\n        <ion-col card-container col-md-4 col-sm-6 offset-md-4>\n\n          <ion-icon name="information-circle-outline" duration="3000" arrow tooltip="Damaged insulation and/or cladding"\n\n            positionV="top"></ion-icon>\n\n          <ion-card [class.disabled]="disabled_for(\'maintenance\')" on-tap="navigate_to_report(REPORT.MANTENANCE.DAMAGED, \'Damaged\')">\n\n            <span svg="damage-insulation"></span>\n\n            <h1>Damaged</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-4 col-sm-6 offset-md-4>\n\n          <ion-card [class.disabled]="disabled_for(\'maintenance\')" on-tap="navigate_to_report(REPORT.MANTENANCE.CONDENSATION, \'Condensation\')">\n\n            <span svg="ice-wet"></span>\n\n            <h1>Condensation</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-4 col-sm-6 offset-md-4>\n\n          <ion-card [class.disabled]="disabled_for(\'maintenance\')" on-tap="navigate_to_report(REPORT.MANTENANCE.LEAKAGE, \'Leakage\')">\n\n            <span svg="leakage"></span>\n\n            <h1>Leakage</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-4 col-sm-6 offset-md-4>\n\n          <ion-card [class.disabled]="disabled_for(\'custom\')" on-tap="navigate_to_report(REPORT.CUSTOM, \'Others\')">\n\n            <span svg="safety"></span>\n\n            <h1>Others</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <!-- <ion-col  card-container col-md-3 col-sm-6 offset-md-2>\n\n          <ion-card [class.disabled]="disabled_for(\'maintenance\')" on-tap="navigate_to_report(REPORT.MANTENANCE.STRUCTURAL, \'Structural\')">\n\n            <span svg="structural"></span>\n\n            <h1>Structural</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col  card-container col-md-3 col-sm-6>\n\n          <ion-card [class.disabled]="disabled_for(\'maintenance\')" on-tap="navigate_to_report(REPORT.MANTENANCE.MECHANICAL, \'Mechanical\')">\n\n            <span svg="mechanical"></span>\n\n            <h1>Mechanical</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col  card-container col-md-3 col-sm-6>\n\n            <ion-card [class.disabled]="disabled_for(\'maintenance\')" on-tap="navigate_to_report(REPORT.MANTENANCE.ELECTRICAL, \'Electrical\')">\n\n            <span svg="electrical"></span>\n\n            <h1>Electrical</h1>\n\n          </ion-card>\n\n        </ion-col> -->\n\n      </ion-row>\n\n    </ng-container>\n\n\n\n    <!-- <ng-container *ngSwitchCase="\'hot-surface\'">\n\n      <ion-row *ngIf="segment.value==0">\n\n        <ion-col card-container offset-md-3 col-md-3 col-sm-6>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.SAFETY.HOT_SURFACE.UNINSULATED_EQUIPMENTS.PIPE, \'Uninsulated pipe\')">\n\n            <span svg="pipe"></span>\n\n            <h1>Pipe</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-3 col-sm-6>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.SAFETY.HOT_SURFACE.UNINSULATED_EQUIPMENTS.VALVE, \'Uninsulated valve\')">\n\n            <span svg="valve"></span>\n\n            <h1>Valve</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col [class.disabled]="disabled_for(\'insulation\')" card-container offset-md-3 col-md-3 col-sm-6>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.SAFETY.HOT_SURFACE.UNINSULATED_EQUIPMENTS.FLANGE, \'Uninsulated flange\')">\n\n            <span svg="flange"></span>\n\n            <h1>Flange</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-3 col-sm-6>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.SAFETY.HOT_SURFACE.UNINSULATED_EQUIPMENTS.SURFACE, \'Uninsulated surface\')">\n\n            <span svg="surface"></span>\n\n            <h1>Surface</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row *ngIf="segment.value==1">\n\n        <ion-col card-container col-md-3 col-sm-6 offset-md-2>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.SAFETY.HOT_SURFACE.INSULATED_EQUIPMENTS.PIPE, \'Insulated pipe\')">\n\n            <span svg="pipe-insulation"></span>\n\n            <h1>Pipe</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-3 col-sm-6>\n\n          <ion-icon name="information-circle-outline" duration="3000" arrow tooltip="Damaged insulation and/or cladding"\n\n            positionV="top"></ion-icon>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.SAFETY.HOT_SURFACE.INSULATED_EQUIPMENTS.DAMAGED, \'Damaged\')">\n\n            <span svg="damaged-insulation"></span>\n\n            <h1>Damaged</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n        <ion-col card-container col-md-3 col-sm-6>\n\n          <ion-card [class.disabled]="disabled_for(\'insulation\')" on-tap="navigate_to_report(REPORT.SAFETY.HOT_SURFACE.INSULATED_EQUIPMENTS.SURFACE, \'Insulated surface\')">\n\n            <span svg="surface"></span>\n\n            <h1>Surface</h1>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </ng-container> -->\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-grid no-padding>\n\n    <ion-row no-padding>\n\n      <ion-col col-6 no-padding>\n\n        <button ion-button small color="light" (click)="go_back()">\n\n          <ion-icon name="arrow-back"></ion-icon>&nbsp;Back\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6 no-padding text-right *ngIf="!component?.id">\n\n        <button *ngIf="type==\'\'" ion-button small color="royal" on-tap="open_summary()">\n\n          <ion-icon name="grid"></ion-icon>&nbsp;Summary\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\reports.html"*/
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

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_project_json__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__file_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messages_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__licences_service__ = __webpack_require__(102);
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






var STORAGE_KEY = 'tbi-app-v5';
var ProjectService = /** @class */ (function () {
    function ProjectService(file, message, licences) {
        this.file = file;
        this.message = message;
        this.licences = licences;
    }
    ProjectService.prototype.get_all = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.file.read_text(STORAGE_KEY)
                            .then(function (r) {
                            _this.licences.projects = JSON.parse(r || '[]').map(function (p) { return new __WEBPACK_IMPORTED_MODULE_1__models__["b" /* Project */](p); });
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
    ProjectService.prototype.save_all = function (projects) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var content = JSON.stringify(projects.map(function (p) { return new __WEBPACK_IMPORTED_MODULE_2__models_project_json__["a" /* ProjectJson */](p); }));
                        _this.file.write_text(STORAGE_KEY, content)
                            .then(function (_) { return resolve(true); })
                            .catch(function (ex) {
                            reject(ex);
                            _this.message.alert('Error', JSON.stringify(ex, null, 2));
                        });
                    })];
            });
        });
    };
    ProjectService.prototype.get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.get_all().then(function (p) {
                            resolve(!!p.filter(function (p) { return p.id == id; }).length ? p.filter(function (p) { return p.id == id; })[0] : null);
                        }).catch(function (ex) {
                            reject(ex);
                            _this.message.alert('Error', JSON.stringify(ex, null, 2));
                        });
                    })];
            });
        });
    };
    ProjectService.prototype.save = function (project) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.get_all().then(function (p) {
                            var projects = p.filter(function (p) { return p.id !== project.id; });
                            if (!project.id)
                                project.id = Math.random().toString().substr(2);
                            projects.push(project);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__file_service__["a" /* FileService */], __WEBPACK_IMPORTED_MODULE_4__messages_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_5__licences_service__["a" /* LicencesService */]])
    ], ProjectService);
    return ProjectService;
}());

//# sourceMappingURL=project.service.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
var FileService = /** @class */ (function () {
    function FileService() {
    }
    return FileService;
}());

//# sourceMappingURL=file.service.js.map

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_report_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_reports_report_generic_class__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_reports__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_messages_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services__ = __webpack_require__(17);
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
        var _this = _super.call(this, new __WEBPACK_IMPORTED_MODULE_3__models_reports_report_generic_class__["a" /* ReportGeneric */](navParams.data.project, navParams.data.component, navParams.data.report), navCtrl, service, alertCtrl, picture, message, keyboard) || this;
        _this.navCtrl = navCtrl;
        _this.service = service;
        _this.alertCtrl = alertCtrl;
        _this.picture = picture;
        _this.message = message;
        _this.keyboard = keyboard;
        return _this;
    }
    GenericReportPage.prototype.calculate = function () {
        debugger;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-generic-report',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\generic\generic.html"*/'<report-header [parent]="this"></report-header>\n\n<ion-content #content>\n\n  <ion-grid [hidden]="view==\'edit_picture\'" class="fixed-col">\n    <ion-row>\n      <ion-col col-7 col-lg-6 no-padding>\n\n        <form novalidate #form="ngForm" [hidden]="segment!=\'input\'" (submit)="calculate()">\n          <ion-row>\n            <ion-col col-10>\n              <ion-item>\n                <ion-label stacked>Component/Location</ion-label>\n                <ion-input [disabled]="!editable" tabindex="1" (ionFocus)="on_focus($event)" name="location" required data-val-required="Please input Component/Location"\n                  [(ngModel)]="report.component.fields.location" type="text"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-10>\n              <ion-item>\n                <ion-label stacked>Summary Id</ion-label>\n                <ion-input tabindex="2" maxlength="12" (ionFocus)="on_focus($event)" name="summary_id" [(ngModel)]="report.summary_id" required data-val-required="Please input summary id"\n                  type="text"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row [hidden]="true">\n            <ion-col>\n              <ion-item>\n                <ion-input type="hidden" name="pictures" required data-val-required="Please take a picture" [(ngModel)]="picture_qty"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-10>\n              <ion-item>\n                <ion-label stacked>Comment</ion-label>\n                <ion-textarea rows="6" tabindex="3"  (ionFocus)="on_focus($event)" [(ngModel)]="report.comment"\n                  name="comment"></ion-textarea>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-col>\n\n      <ion-col col-5 col-lg-6 no-padding>\n          <ion-row>\n              <ion-col col-12 picture-slide  [report]="report" [editable]="editable"  (onStartEdit)="on_picture_start_edit($event)">\n          </ion-col>\n        </ion-row>\n        <report-errors padding #errors col-12 [hidden]="view==\'!result\' && report.result"></report-errors>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col col-12>\n        <report-result col-12 [parent]="this" *ngIf="view==\'result\' && (!!form && !form.invalid)"></report-result>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <edit-picture *ngIf="view==\'edit_picture\'" [report]="report"  [picture]="editing_picture" ></edit-picture>\n\n</ion-content>\n\n<report-footer [parent]="this" [calculate_text]="\'Report\'"></report-footer>'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\generic\generic.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_report_service__["a" /* ReportService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__services__["c" /* PictureService */],
            __WEBPACK_IMPORTED_MODULE_5__services_messages_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Keyboard */]])
    ], GenericReportPage);
    return GenericReportPage;
}(__WEBPACK_IMPORTED_MODULE_4__models_reports__["a" /* BaseReportPage */]));

//# sourceMappingURL=generic.js.map

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportSurfacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_reports__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_report_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_messages_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__(17);
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
    function ReportSurfacePage(navCtrl, navParams, service, alertCtrl, picture, message, keyboard) {
        var _this = _super.call(this, new __WEBPACK_IMPORTED_MODULE_1__models_reports__["h" /* ReportSurface */](navParams.data.project, navParams.data.component, navParams.data.report), navCtrl, service, alertCtrl, picture, message, keyboard) || this;
        _this.navCtrl = navCtrl;
        _this.service = service;
        _this.alertCtrl = alertCtrl;
        _this.picture = picture;
        _this.message = message;
        _this.keyboard = keyboard;
        _this.unknow_surface = false;
        return _this;
    }
    ReportSurfacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report-surface',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\surface\report-surface.component.html"*/'<report-header [parent]="this"></report-header>\n\n\n\n<ion-content #content>\n\n\n\n  <ion-grid [hidden]="view==\'edit_picture\'" class="fixed-col">\n\n    <ion-row>\n\n      <ion-col col-7 col-lg-8 no-padding>\n\n        <form novalidate #form="ngForm" [hidden]="segment!=\'input\'" (submit)="calculate()">\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Component/Location</ion-label>\n\n                <ion-input tabindex="1" name="location" required data-val-required="Please input Component/Location"\n\n                  [(ngModel)]="report.component.fields.location" (ionFocus)="on_focus($event)" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-12></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Operational time (hours)</ion-label>\n\n                <ion-input tabindex="2" (ionFocus)="on_focus($event)" required data-val-required="Please input operational time"\n\n                  name="operational_time" [(ngModel)]="report.component.fields.operational_time" type="number"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <more pull-left #time (change)="report.component.fields.operational_time=time.value" [type]="\'time\'"\n\n                modal-button></more>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-5>\n\n              <ion-item>\n\n                <ion-label stacked>Surface (m<sup>2</sup>)</ion-label>\n\n                <ion-input tabindex="4" #after_time (ionFocus)="on_focus($event)" [disabled]="report.component.fields.unknow_surface"\n\n                  name="surface" required data-val-required="Please input surface in m²" [(ngModel)]="report.component.fields.surface"\n\n                  type="number" [(ngModel)]="surface"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-5 toggle-container style="padding-top: 1.05rem">\n\n              <ion-item>\n\n                <ion-label stacked>Unknown</ion-label>\n\n                <ion-toggle style="padding-left:0" [(ngModel)]="report.component.fields.unknow_surface" (ionChange)="toggle_know()"\n\n                  name="unknow_surface"></ion-toggle>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <area [hidden]="unknow_surface" pull-left #area (change)="report.component.fields.surface=area.value"\n\n                modal-button />\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item class="edit_surface_material" [class.editable]="edit_surface_material">\n\n                <ion-label stacked>Surface material [ε]</ion-label>\n\n                <ion-input tabindex="5" class="literal" (ionFocus)="on_focus($event); toggle_surface_material(true)"\n\n                  [value]="report.component.fields.surface_material_friendly" type="text"></ion-input>\n\n                <ion-input tabindex="6" class="numeric" (ionFocus)="on_focus($event)" (focusout)="toggle_surface_material(false)"\n\n                  name="surface_material" required data-val-required="Please input surface emissivity" [(ngModel)]="report.component.fields.surface_material"\n\n                  type="number" (change)="set_surface_material(report.component.fields.surface_material, $event)"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <more pull-left #material (change)="set_surface_material(material.value, $event)" [type]="\'materials\'"\n\n                modal-button></more>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Medium or Surface temperature (<sup>º</sup>C)</ion-label>\n\n                <ion-input tabindex="7" #after_material (ionFocus)="on_focus($event)" scroll="-80" name="surface_temp"\n\n                  required data-val-required="Please input Medium or Surface temperature" [pattern]="patterns.REQUIRED_NUMBER"\n\n                  data-val-pattern="Please input a valid Medium or Surface temperature" [(ngModel)]="report.component.fields.surface_temp"\n\n                  type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <!-- <medium-temp #medium (change)="report.component.fields.surface_temp=medium.value" modal-button pull-left></medium-temp> -->\n\n              <medium-temp #medium [report]="report" modal-button pull-left></medium-temp>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Ambient temperature (<sup>º</sup>C)</ion-label>\n\n                <ion-input tabindex="7" (ionFocus)="on_focus($event)" scroll="-90" (keyup.enter)="on_keypress($event)"\n\n                  name="ambient_temp" [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Ambient temperature"\n\n                  required data-val-required="Please input Ambient temperature" [(ngModel)]="report.component.fields.ambient_temp"\n\n                  type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2></ion-col>\n\n          </ion-row>\n\n        </form>\n\n      </ion-col>\n\n\n\n      <ion-col col-5 col-lg-4 no-padding>\n\n        <ion-row>\n\n          <ion-col col-12 picture-slide [report]="report" [editable]="editable" (onStartEdit)="on_picture_start_edit($event)">\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12 padding>\n\n        <report-result col-12 [parent]="this" *ngIf="view==\'result\' && (!!form && !form.invalid)"></report-result>\n\n      </ion-col>\n\n      <ion-col col-12 padding>\n\n        <report-errors padding #errors col-12 [hidden]="view==\'!result\' && report.result"></report-errors>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <edit-picture *ngIf="view==\'edit_picture\'" [report]="report" [picture]="editing_picture"></edit-picture>\n\n\n\n</ion-content>\n\n\n\n<report-footer [parent]="this"></report-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\surface\report-surface.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_report_service__["a" /* ReportService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__services__["c" /* PictureService */],
            __WEBPACK_IMPORTED_MODULE_4__services_messages_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Keyboard */]])
    ], ReportSurfacePage);
    return ReportSurfacePage;
}(__WEBPACK_IMPORTED_MODULE_1__models_reports__["a" /* BaseReportPage */]));

//# sourceMappingURL=report-surface.component.js.map

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_reports__ = __webpack_require__(21);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_reports__["a" /* BaseReportPage */])
    ], ReportHeaderComponent.prototype, "parent", void 0);
    ReportHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'report-header',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\components\header\report-header.component.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-title>\n      {{parent.report.name}}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button *ngIf="parent.view!=\'edit_picture\'" color="light" on-tap="parent.take_picture()">\n        <ion-icon name="md-camera"></ion-icon>&nbsp;Take a picture\n      </button>\n      <button ion-button *ngIf="parent.view==\'edit_picture\'" color="light" on-tap="parent.delete_picture()">\n        <ion-icon name="md-trash"></ion-icon>&nbsp;Remove\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\components\header\report-header.component.html"*/,
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        })
    ], ReportHeaderComponent);
    return ReportHeaderComponent;
}());

//# sourceMappingURL=report-header.component.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportAreaButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_area_modal_component__ = __webpack_require__(356);
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
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ReportAreaButtonComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])('change'),
        __metadata("design:type", Object)
    ], ReportAreaButtonComponent.prototype, "change", void 0);
    ReportAreaButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'area',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\components\area\report-area-button.component.html"*/'<div  (click)="show_modal()" tabindex="-1" with-action no-padding ion-button small color="light">\n    <ion-icon name="cube"></ion-icon>\n</div>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\components\area\report-area-button.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], ReportAreaButtonComponent);
    return ReportAreaButtonComponent;
}());

//# sourceMappingURL=report-area-button.component.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportMoreButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__const_more_more__ = __webpack_require__(98);
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
        this.type = '';
        this.cancelable = true;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.options = {
            cancel: [{
                    text: 'Cancel',
                    role: 'cancel',
                }],
            time: __WEBPACK_IMPORTED_MODULE_2__const_more_more__["a" /* More */].TIMES,
            materials: __WEBPACK_IMPORTED_MODULE_2__const_more_more__["a" /* More */].MATERIALS
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
                    _this.change.next(_this.value);
                }
            });
        });
        if (!!this.cancelable) {
            buttons = buttons.concat(this.options.cancel);
        }
        var actionSheet = this.actionSheetCtrl.create({
            buttons: buttons
        });
        actionSheet.present();
        return actionSheet;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], ReportMoreButtonComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ReportMoreButtonComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ReportMoreButtonComponent.prototype, "cancelable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])('change'),
        __metadata("design:type", Object)
    ], ReportMoreButtonComponent.prototype, "change", void 0);
    ReportMoreButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'more',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\components\more\more-button.component.html"*/'<div (click)="show_options()" tabindex="-1" with-action no-padding ion-button small color="light">\n    <ion-icon name="more"></ion-icon>\n</div>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\components\more\more-button.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ReportMoreButtonComponent);
    return ReportMoreButtonComponent;
}());

//# sourceMappingURL=more-button.component.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportMediumTempButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(20);
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
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ReportMediumTempButtonsComponent.prototype.show_markers = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2____["t" /* ReportTempMarkersWindowComponent */], {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])('change'),
        __metadata("design:type", Object)
    ], ReportMediumTempButtonsComponent.prototype, "change", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models__["c" /* ReportBase */])
    ], ReportMediumTempButtonsComponent.prototype, "report", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Number)
    ], ReportMediumTempButtonsComponent.prototype, "value", void 0);
    ReportMediumTempButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'medium-temp',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\components\medium-temp\medium-temp-buttons.component.html"*/'<div (click)="show_markers()" tabindex="-1" pull-left no-padding ion-button small color="light" class="with-action">\n  <ion-icon name="ios-pin"></ion-icon>\n</div>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\components\medium-temp\medium-temp-buttons.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], ReportMediumTempButtonsComponent);
    return ReportMediumTempButtonsComponent;
}());

//# sourceMappingURL=medium-temp-buttons.component.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportTempMarkersWindowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_marker__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scroll_to_component_class__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__const_patterns__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(18);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* NgForm */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* NgForm */])
    ], ReportTempMarkersWindowComponent.prototype, "form", void 0);
    ReportTempMarkersWindowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'markers-window',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\components\medium-temp\temp-marker-window.component.html"*/'<ion-content>\n  <form novalidate #form="ngForm">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 *ngFor="let m of markers; let i=index">\n        <ion-item>\n          <ion-label stacked>P{{(i + 1).toString().padStart(2, \'0\')}}</ion-label>\n          <ion-input (ionFocus)="on_focus($event)" (keyup.enter)="on_keypress($event)" [ngModelOptions]="{standalone: true}" [name]="\'point_\' + i" \n          [(ngModel)]="m.marker.temperature" \n          [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid temperature" \n          type="tel"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n</ion-grid>\n</form>\n</ion-content>\n<ion-footer>\n  <ion-grid no-padding>\n    <ion-row no-padding>\n      <!-- <ion-col col-6 no-padding>\n        <button (click)="close()" ion-button small block pull-right color="light">Cancel</button>\n      </ion-col> -->\n      <ion-col col-12 no-padding text-center>\n        <button id="submit-button" (click)="calculate()" ion-button small color="royal">Report</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\components\medium-temp\temp-marker-window.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Keyboard */]])
    ], ReportTempMarkersWindowComponent);
    return ReportTempMarkersWindowComponent;
}(__WEBPACK_IMPORTED_MODULE_3__scroll_to_component_class__["a" /* ScrollToComponent */]));

//# sourceMappingURL=temp-marker-window.component.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__const_images_non_picture__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_reports__ = __webpack_require__(21);
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
    ReportResultComponent.prototype.initialize_values = function () {
        var height = 130;
        this.scale.max = this.up(this.parent.report.result.headLost.power / 100);
        this.scale.medium = Math.ceil(this.scale.max / 1.5);
        this.scale.min = Math.ceil(this.scale.max / 2);
        this.scale.max;
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
    };
    ReportResultComponent.prototype.down = function (value) {
        return value > 1000 ? Math.floor(Math.trunc(value) / 100) * 100 : Math.floor(Math.trunc(value) / 10) * 10;
    };
    ReportResultComponent.prototype.up = function (value) {
        return value > 1000 ? Math.ceil(Math.trunc(value) / 100) * 100 : Math.ceil(Math.trunc(value) / 10) * 10;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_reports__["a" /* BaseReportPage */])
    ], ReportResultComponent.prototype, "parent", void 0);
    ReportResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'report-result',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\components\result\report-result.component.html"*/'<!-- <ion-grid>\n\n  <ion-row>\n\n    <ion-col col-4 on-tap="parent.view=\'form\'" img-container [style.backgroundImage]="\'url(\'+ first_picture +\')\'"></ion-col>\n\n\n\n    <ion-col col-8>\n\n      <ion-row head-lost>\n\n        <h1 col-12 no-padding no-margin class="text-center">Heat loss</h1>\n\n        <ion-col col-10 text-center>\n\n          <span>{{ parent.report.result.headLost.power | number: \'1.0-0\'}} {{parent.report.potential_measure}}</span>\n\n        </ion-col>\n\n        <ion-col col-10 text-center>\n\n          <span>{{ parent.report.result.headLost.money | number: \'1.0-0\'}} {{parent.report.money_measure}}</span>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row saving-potential>\n\n    <ion-col col-12>\n\n      <h1 no-padding no-margin>Saving potential</h1>\n\n    </ion-col>\n\n    <ion-col col-12>\n\n      <ion-row>\n\n        <ion-col col-3 text-right>\n\n          <span>{{ parent.report.result.savingPotentialMin.power | number: \'1.0-0\'}}</span>\n\n        </ion-col>\n\n        <ion-col col-1 offset-1 text-center>\n\n          <ion-icon name="md-arrow-forward"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-4 text-right>\n\n          <span>{{ parent.report.result.savingPotentialMax.power | number: \'1.0-0\'}}</span>\n\n        </ion-col>\n\n        <ion-col col-3>\n\n          {{parent.report.potential_measure}}\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-3 text-right>\n\n          <span style="white-space: nowrap">{{ parent.report.result.savingPotentialMin.money | number: \'1.0-0\'}}</span>\n\n        </ion-col>\n\n        <ion-col col-1 offset-1 text-center>\n\n          <ion-icon name="md-arrow-forward"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-4 text-right>\n\n          <span style="white-space: nowrap">{{ parent.report.result.savingPotentialMax.money | number: \'1.0-0\'}}</span>\n\n        </ion-col>\n\n        <ion-col col-3>\n\n          {{parent.report.money_measure}}\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-grid> -->\n\n\n\n<ion-grid>\n\n  <ion-row>\n\n    <ion-col message>\n\n      <h4> {{parent.report.result.advise}}</h4>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col text-center>\n\n      <table cellspacing="0" cellpadding="0" border="0" class="result-chart">\n\n        <thead>\n\n          <tr>\n\n            <th colspan="2"></th>\n\n            <th rowspan="2">Current<br>system</th>\n\n            <th colspan="2">Insulation system</th>\n\n          </tr>\n\n          <tr>\n\n            <th colspan="2"></th>\n\n            <th class="dashed-top dashed-left">Basic</th>\n\n            <th class="dashed-top dashed-right">Economical</th>\n\n          </tr>\n\n        </thead>\n\n        <tbody>\n\n          <tr>\n\n            <td class="section" rowspan="2"><strong>Potential<br>Savings</strong></td>\n\n            <td class="scale"><span>{{scale.max / 10 | number: \'1.1-1\'}}</span></td>\n\n            <td class="b-line bar" rowspan="2">\n\n\n\n            </td>\n\n            <td class="b-line bar dashed-left" rowspan="2">\n\n              <div style.height="{{bars.basic.savings[0]}}px" class="blue">\n\n                <span title="{{parent.report.result.savingPotentialMin.power}}">{{bars.basic.savings[1] | number:\n\n                  \'1.0-0\'}}€</span>\n\n              </div>\n\n            </td>\n\n            <td class="b-line bar dashed-right" rowspan="2">\n\n              <div style.height="{{bars.economical.savings[0]}}px" class="green">\n\n                <span>{{bars.economical.savings[1] | number: \'1.0-0\'}}€</span>\n\n              </div>\n\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td class="scale"><span>{{scale.min / 10 | number: \'1.1-1\'}}</span><span class="kwh">MWh</span></td>\n\n          </tr>\n\n        </tbody>\n\n        <tbody class="inverse">\n\n          <tr>\n\n            <td class="section" rowspan="2"><strong>Energy<br>Losses</strong></td>\n\n            <td class="scale inverse"><span>{{scale.min / 10 | number: \'1.1-1\'}}</span></td>\n\n            <td class="bar" rowspan="2">\n\n              <div style.height="{{bars.current.losses[0]}}px" class="gray pattern">\n\n                <span style.marginTop="{{bars.current.losses[0] + 3}}px">{{bars.current.losses[1] | number: \'1.0-0\'}}€</span>\n\n              </div>\n\n            </td>\n\n            <td class="bar dashed-left dashed-bottom" rowspan="2">\n\n              <div style.height="{{bars.basic.losses[0]}}px" class="blue pattern">\n\n                <span style.marginTop="{{bars.basic.losses[0] + 3}}px">{{bars.basic.losses[1] | number: \'1.0-0\'}}€</span>\n\n              </div>\n\n            </td>\n\n            <td class="bar  dashed-bottom dashed-right" rowspan="2">\n\n              <div style.height="{{bars.economical.losses[0]}}px" class="green pattern">\n\n                <span style.marginTop="{{bars.economical.losses[0] + 3}}px">{{bars.economical.losses[1] | number:\n\n                  \'1.0-0\'}}€</span>\n\n              </div>\n\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td class="scale inverse"><span>{{scale.max / 10 | number: \'1.1-1\'}}</span></td>\n\n          </tr>\n\n        </tbody>\n\n      </table>\n\n\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\components\result\report-result.component.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ReportResultComponent);
    return ReportResultComponent;
}());

//# sourceMappingURL=report-result.component.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportValvePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_reports__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_report_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_messages_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__(17);
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
    function ReportValvePage(navCtrl, navParams, service, alertCtrl, picture, message, keyboard) {
        var _this = _super.call(this, new __WEBPACK_IMPORTED_MODULE_1__models_reports__["i" /* ReportValve */](navParams.data.project, navParams.data.component, navParams.data.report), navCtrl, service, alertCtrl, picture, message, keyboard) || this;
        _this.navCtrl = navCtrl;
        _this.service = service;
        _this.alertCtrl = alertCtrl;
        _this.picture = picture;
        _this.message = message;
        _this.keyboard = keyboard;
        _this.unknow_length = true;
        return _this;
    }
    ReportValvePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report-valve',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\valve\report-valve.component.html"*/'<report-header [parent]="this"></report-header>\n\n\n\n<ion-content #content>\n\n\n\n  <ion-grid [hidden]="view==\'edit_picture\'" class="fixed-col">\n\n    <ion-row>\n\n      <ion-col col-7 col-lg-6 no-padding>\n\n        <form novalidate #form="ngForm" [hidden]="segment!=\'input\'" (submit)="calculate()">\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Component/Location</ion-label>\n\n                <ion-input tabindex="1" (ionFocus)="on_focus($event)" name="location" required data-val-required="Please input Component/Location"\n\n                  [(ngModel)]="report.component.fields.location" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Item number</ion-label>\n\n                <ion-input tabindex="3" (ionFocus)="on_focus($event)" name="number" required data-val-required="Please input Item number"\n\n                  [(ngModel)]="report.component.fields.number" type="number" min="0"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Operational time (hours)</ion-label>\n\n                <ion-input tabindex="3" (ionFocus)="on_focus($event)" required data-val-required="Please input operational time"\n\n                  name="operational_time" [(ngModel)]="report.component.fields.operational_time" type="number"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <more pull-left #time (change)="report.component.fields.operational_time=time.value" [type]="\'time\'"\n\n                modal-button></more>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Diameter (mm)</ion-label>\n\n                <ion-input tabindex="4" #after_time (ionFocus)="on_focus($event)" name="nominal_diameter" required\n\n                  data-val-required="Please input Diameter" [(ngModel)]="report.component.fields.nominal_diameter"\n\n                  type="number"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-input type="hidden" name="length" [(ngModel)]="report.component.fields.length"></ion-input>\n\n            <!-- <ion-col col-2>\n\n              <div (click)="set_length(\'Default value for valves 1m\', 1)" tabindex="-1" pull-left no-padding ion-button\n\n                small color="light" class="with-action">\n\n                <ion-icon name="custom-valve"></ion-icon>\n\n              </div>\n\n            </ion-col> -->\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item class="edit_surface_material" [class.editable]="edit_surface_material">\n\n                <ion-label stacked>Surface material [ε]</ion-label>\n\n                <ion-input tabindex="4" class="literal" (focus)="toggle_surface_material(true); on_focus($event)"\n\n                  [value]="report.component.fields.surface_material_friendly" type="text"></ion-input>\n\n                <ion-input tabindex="4" class="numeric" (focusout)="toggle_surface_material(false)" (ionFocus)="on_focus($event)"\n\n                  name="surface_material" required data-val-required="Please input surface emissivity" [(ngModel)]="report.component.fields.surface_material"\n\n                  type="number" (change)="set_surface_material(report.component.fields.surface_material, $event)"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <more pull-left #material (change)="set_surface_material(material.value, $event)" [type]="\'materials\'"\n\n                modal-button></more>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Medium or Surface temperature (<sup>º</sup>C)</ion-label>\n\n                <ion-input tabindex="5" #after_material (ionFocus)="on_focus($event)" name="surface_temp" [pattern]="patterns.REQUIRED_NUMBER"\n\n                  data-val-pattern="Please input a valid Medium or Surface temperature" required data-val-required="Please input Medium or Surface temperature"\n\n                  [(ngModel)]="report.component.fields.surface_temp" type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <medium-temp #medium [report]="report" modal-button pull-left></medium-temp>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Ambient temperature (<sup>º</sup>C)</ion-label>\n\n                <ion-input tabindex="6" (ionFocus)="on_focus($event)" (keyup.enter)="on_keypress($event)" name="ambient_temp"\n\n                  [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Ambient temperature"\n\n                  required data-val-required="Please input Ambient temperature" [(ngModel)]="report.component.fields.ambient_temp"\n\n                  type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2></ion-col>\n\n          </ion-row>\n\n        </form>\n\n      </ion-col>\n\n\n\n      <ion-col col-5 col-lg-6 no-padding>\n\n          <ion-row>\n\n            <ion-col col-12 picture-slide [report]="report" [editable]="editable" (onStartEdit)="on_picture_start_edit($event)">\n\n          </ion-col>\n\n        </ion-row>\n\n        <report-errors padding #errors col-12 [hidden]="view==\'!result\' && report.result"></report-errors>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <report-result col-12 [parent]="this" *ngIf="view==\'result\' && (!!form && !form.invalid)"></report-result>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n\n\n  <edit-picture *ngIf="view==\'edit_picture\'" [report]="report" [picture]="editing_picture"></edit-picture>\n\n\n\n</ion-content>\n\n\n\n<report-footer [parent]="this"></report-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\valve\report-valve.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_report_service__["a" /* ReportService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__services__["c" /* PictureService */],
            __WEBPACK_IMPORTED_MODULE_4__services_messages_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Keyboard */]])
    ], ReportValvePage);
    return ReportValvePage;
}(__WEBPACK_IMPORTED_MODULE_1__models_reports__["a" /* BaseReportPage */]));

//# sourceMappingURL=report-valve.component.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportInsulatedSurfacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_reports__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_report_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_messages_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__(17);
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
        var _this = _super.call(this, new __WEBPACK_IMPORTED_MODULE_1__models_reports__["f" /* ReportInsulatedSurface */](navParams.data.project, navParams.data.component, navParams.data.report), navCtrl, service, alertCtrl, picture, message, keyboard) || this;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report-surface',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\isurface\report-isurface.component.html"*/'<report-header [parent]="this"></report-header>\n\n\n\n<ion-content #content>\n\n\n\n  <ion-grid [hidden]="view==\'edit_picture\'" class="fixed-col">\n\n    <ion-row>\n\n      <ion-col col-7 col-lg-8 no-padding>\n\n        <form novalidate #form="ngForm" [hidden]="segment!=\'input\'" (submit)="calculate()">\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Component/Location</ion-label>\n\n                <ion-input tabindex="1" (ionFocus)="on_focus($event)" name="location" required data-val-required="Please input Component/Location"\n\n                  [(ngModel)]="report.component.fields.location" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-12></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Operational time (hours)</ion-label>\n\n                <ion-input tabindex="2" (ionFocus)="on_focus($event)" required data-val-required="Please input operational time"\n\n                  name="operational_time" [(ngModel)]="report.component.fields.operational_time" type="number"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <more pull-left #time (change)="report.component.fields.operational_time=time.value" [type]="\'time\'"\n\n                modal-button></more>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-6>\n\n              <ion-item>\n\n                <ion-label stacked>Surface (m<sup>2</sup>)</ion-label>\n\n                <ion-input #after_time tabindex="3" (ionFocus)="on_focus($event)" [disabled]="report.component.fields.unknow_surface"\n\n                  name="surface" required data-val-required="Please input surface in m²" [(ngModel)]="report.component.fields.surface"\n\n                  type="number" [(ngModel)]="surface"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-4 toggle-container style="padding-top: 1rem">\n\n              <ion-label stacked style="margin-top: 1.5rem">Unknown</ion-label>\n\n              <ion-toggle [(ngModel)]="report.component.fields.unknow_surface" (ionChange)="toggle_know()" name="unknow_surface"></ion-toggle>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <area [hidden]="unknow_surface" pull-left #area (change)="report.component.fields.surface=area.value"\n\n                modal-button />\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item class="edit_surface_material" [class.editable]="edit_surface_material">\n\n                <ion-label stacked>Surface material [ε]</ion-label>\n\n                <ion-input tabindex="5" class="literal" (ionFocus)="on_focus($event);toggle_surface_material(true)"\n\n                  [value]="report.component.fields.surface_material_friendly" type="text"></ion-input>\n\n                <ion-input tabindex="6" class="numeric" (ionFocus)="on_focus($event)" (focusout)="toggle_surface_material(false)"\n\n                  name="surface_material" required data-val-required="Please input surface emissivity" [(ngModel)]="report.component.fields.surface_material"\n\n                  type="number" (change)="set_surface_material(report.component.fields.surface_material, $event)"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <more pull-left #material (change)="set_surface_material(material.value, $event)" [type]="\'materials\'"\n\n                modal-button></more>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Surface temperature (<sup>º</sup>C)</ion-label>\n\n                <ion-input #after_material tabindex="7" (ionFocus)="on_focus($event)" name="surface_temp" [pattern]="patterns.REQUIRED_NUMBER"\n\n                  data-val-pattern="Please input a valid Surface temperature" required data-val-required="Please input Surface temperature"\n\n                  [(ngModel)]="report.component.fields.surface_temp" type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <!-- <medium-temp #medium (change)="report.component.fields.surface_temp=medium.value" modal-button pull-left></medium-temp> -->\n\n              <medium-temp #medium [report]="report" modal-button pull-left></medium-temp>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Medium temperature (<sup>º</sup>C)</ion-label>\n\n                <ion-input tabindex="8" (ionFocus)="on_focus($event)" name="medium_temp" [pattern]="patterns.REQUIRED_NUMBER"\n\n                  data-val-pattern="Please input a valid Medium temperature" required data-val-required="Please input Medium temperature"\n\n                  [(ngModel)]="report.component.fields.medium_temp" type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Ambient temperature (<sup>º</sup>C)</ion-label>\n\n                <ion-input tabindex="9" (ionFocus)="on_focus($event)" (keyup.enter)="on_keypress($event)" name="ambient_temp"\n\n                  [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Ambient temperature"\n\n                  required data-val-required="Please input Ambient temperature" [(ngModel)]="report.component.fields.ambient_temp"\n\n                  type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2></ion-col>\n\n          </ion-row>\n\n        </form>\n\n      </ion-col>\n\n\n\n      <ion-col col-5 col-lg-8 no-padding>\n\n        <ion-row>\n\n          <ion-col col-12 picture-slide [report]="report" [editable]="editable" (onStartEdit)="on_picture_start_edit($event)">\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12 padding>\n\n        <report-result col-12 [parent]="this" *ngIf="view==\'result\' && (!!form && !form.invalid)"></report-result>\n\n      </ion-col>\n\n      <ion-col col-12 padding>\n\n        <report-errors padding #errors col-12 [hidden]="view==\'!result\' && report.result"></report-errors>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <edit-picture *ngIf="view==\'edit_picture\'" [report]="report" [picture]="editing_picture"></edit-picture>\n\n\n\n</ion-content>\n\n\n\n<report-footer [parent]="this"></report-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\isurface\report-isurface.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_report_service__["a" /* ReportService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__services__["c" /* PictureService */],
            __WEBPACK_IMPORTED_MODULE_4__services_messages_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Keyboard */]])
    ], ReportInsulatedSurfacePage);
    return ReportInsulatedSurfacePage;
}(__WEBPACK_IMPORTED_MODULE_1__models_reports__["a" /* BaseReportPage */]));

//# sourceMappingURL=report-isurface.component.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportInsulatedPipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_reports__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_report_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_reports_report_ipipe_class__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_messages_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services__ = __webpack_require__(17);
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
        var _this = _super.call(this, new __WEBPACK_IMPORTED_MODULE_4__models_reports_report_ipipe_class__["a" /* ReportInsulatedPipe */](navParams.data.project, navParams.data.component, navParams.data.report), navCtrl, service, alertCtrl, picture, message, keyboard) || this;
        _this.navCtrl = navCtrl;
        _this.service = service;
        _this.alertCtrl = alertCtrl;
        _this.picture = picture;
        _this.message = message;
        _this.keyboard = keyboard;
        return _this;
    }
    ReportInsulatedPipePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report-pipe',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\ipipe\report-ipipe.component.html"*/'<report-header [parent]="this"></report-header>\n\n\n\n<ion-content #content>\n\n\n\n  <ion-grid [hidden]="view==\'edit_picture\'" class="fixed-col">\n\n    <ion-row>\n\n      <ion-col col-7 col-lg-8 no-padding>\n\n        <form novalidate #form="ngForm" [hidden]="segment!=\'input\'" (submit)="calculate()">\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Component/Location</ion-label>\n\n                <ion-input tabindex="1" (ionFocus)="on_focus($event)" name="location" required data-val-required="Please input Component/Location"\n\n                  [(ngModel)]="report.component.fields.location" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Operational time (hours)</ion-label>\n\n                <ion-input tabindex="2" (ionFocus)="on_focus($event)" required data-val-required="Please input operational time"\n\n                  name="operational_time" [(ngModel)]="report.component.fields.operational_time" type="number"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <more pull-left #time (change)="report.component.fields.operational_time=time.value" [type]="\'time\'"\n\n                modal-button></more>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-7>\n\n              <ion-item>\n\n                <ion-label stacked>Diameter (mm)</ion-label>\n\n                <ion-input #after_time tabindex="3" (ionFocus)="on_focus($event)" name="nominal_diameter" required\n\n                  data-val-required="Please input Diameter" [(ngModel)]="report.component.fields.nominal_diameter"\n\n                  type="number"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n              <ion-item>\n\n                <ion-label stacked>Length (m)</ion-label>\n\n                <ion-input tabindex="4" (ionFocus)="on_focus($event)" name="number" required data-val-required="Please input length"\n\n                  [(ngModel)]="report.component.fields.length" type="number"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item class="edit_surface_material" [class.editable]="edit_surface_material">\n\n                <ion-label stacked>Surface material [ε]</ion-label>\n\n                <ion-input tabindex="5" class="literal" (ionFocus)="on_focus($event);toggle_surface_material(true)"\n\n                  [value]="report.component.fields.surface_material_friendly" type="text"></ion-input>\n\n                <ion-input tabindex="6" (ionFocus)="on_focus($event)" class="numeric" (focusout)="toggle_surface_material(false)"\n\n                  (ionFocus)="on_focus($event)" name="surface_material" required data-val-required="Please input surface emissivity"\n\n                  [(ngModel)]="report.component.fields.surface_material" type="number" (change)="set_surface_material(report.component.fields.surface_material, $event)"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <more pull-left #material (change)="set_surface_material(material.value, $event)" [type]="\'materials\'"\n\n                modal-button></more>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Medium temperature (<sup>º</sup>C)</ion-label>\n\n                <ion-input #after_material tabindex="7" (ionFocus)="on_focus($event)" name="medium_temp" [pattern]="patterns.REQUIRED_NUMBER"\n\n                  data-val-pattern="Please input a valid Medium temperature" required data-val-required="Please input Medium temperature"\n\n                  [(ngModel)]="report.component.fields.medium_temp" type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Surface temperature (<sup>º</sup>C)</ion-label>\n\n                <ion-input tabindex="8" (ionFocus)="on_focus($event)" name="surface_temp" [pattern]="patterns.REQUIRED_NUMBER"\n\n                  data-val-pattern="Please input a valid Surface temperature" required data-val-required="Please input Surface temperature"\n\n                  [(ngModel)]="report.component.fields.surface_temp" type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <!-- <medium-temp #medium (change)="report.component.fields.surface_temp=medium.value" modal-button pull-left></medium-temp> -->\n\n              <medium-temp #medium [report]="report" modal-button pull-left></medium-temp>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Ambient temperature (<sup>º</sup>C)</ion-label>\n\n                <ion-input tabindex="9" (ionFocus)="on_focus($event)" (keyup.enter)="on_keypress($event)" name="ambient_temp"\n\n                  [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Ambient temperature"\n\n                  required data-val-required="Please input Ambient temperature" [(ngModel)]="report.component.fields.ambient_temp"\n\n                  type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2></ion-col>\n\n          </ion-row>\n\n        </form>\n\n      </ion-col>\n\n\n\n      <ion-col col-5 col-lg-8 no-padding>\n\n        <ion-row>\n\n          <ion-col col-12 picture-slide [report]="report" [editable]="editable" (onStartEdit)="on_picture_start_edit($event)">\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12 padding>\n\n        <report-result col-12 [parent]="this" *ngIf="view==\'result\' && (!!form && !form.invalid)"></report-result>\n\n      </ion-col>\n\n      <ion-col col-12 padding>\n\n        <report-errors padding #errors col-12 [hidden]="view==\'!result\' && report.result"></report-errors>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <edit-picture *ngIf="view==\'edit_picture\'" [report]="report" [picture]="editing_picture"></edit-picture>\n\n\n\n</ion-content>\n\n\n\n<report-footer [parent]="this"></report-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\ipipe\report-ipipe.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_report_service__["a" /* ReportService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__services__["c" /* PictureService */],
            __WEBPACK_IMPORTED_MODULE_5__services_messages_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Keyboard */]])
    ], ReportInsulatedPipePage);
    return ReportInsulatedPipePage;
}(__WEBPACK_IMPORTED_MODULE_1__models_reports__["a" /* BaseReportPage */]));

//# sourceMappingURL=report-ipipe.component.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportDamagedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_reports__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_report_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_messages_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__(17);
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
        var _this = _super.call(this, new __WEBPACK_IMPORTED_MODULE_1__models_reports__["c" /* ReportDamaged */](navParams.data.project, navParams.data.component, navParams.data.report), navCtrl, service, alertCtrl, picture, message, keyboard) || this;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report-damaged',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\damaged\report-damaged.component.html"*/'<report-header [parent]="this"></report-header>\n\n\n\n<ion-content #content>\n\n\n\n  <ion-grid [hidden]="view==\'edit_picture\'" class="fixed-col">\n\n    <ion-row>\n\n      <ion-col col-7 col-lg-6 no-padding>\n\n        <form novalidate #form="ngForm" [hidden]="segment!=\'input\'" (submit)="calculate()">\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Component/Location</ion-label>\n\n                <ion-input [disabled]="!editable" tabindex="1" (ionFocus)="on_focus($event)" name="location" required\n\n                  data-val-required="Please input Component/Location" [(ngModel)]="report.component.fields.location"\n\n                  type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-12></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Summary Id</ion-label>\n\n                <ion-input tabindex="2" (ionFocus)="on_focus($event)" name="summary_id" [(ngModel)]="report.summary_id"\n\n                  required data-val-required="Please input summary id" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row [hidden]="true">\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-input type="hidden" name="pictures" required data-val-required="Please take a picture" [(ngModel)]="picture_qty"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <!--\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Operational time (hours)</ion-label>\n\n                <ion-input [disabled]="!editable" tabindex="2" (ionFocus)="on_focus($event)"\n\n                  name="operational_time" [(ngModel)]="report.component.fields.operational_time" type="number"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <more pull-left *ngIf="editable" #time (change)="report.component.fields.operational_time=time.value"\n\n                [type]="\'time\'" modal-button></more>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item class="edit_surface_material" [class.editable]="edit_surface_material">\n\n                <ion-label stacked>Surface material [ε]</ion-label>\n\n                <ion-input #after_time [disabled]="!editable" tabindex="5" class="literal" (ionFocus)="on_focus($event);toggle_surface_material(true)"\n\n                  [value]="report.component.fields.surface_material_friendly" type="text"></ion-input>\n\n                <ion-input [disabled]="!editable" tabindex="6" class="numeric" (ionFocus)="on_focus($event)" (focusout)="toggle_surface_material(false)"\n\n                  name="surface_material" [(ngModel)]="report.component.fields.surface_material"\n\n                  type="number" (change)="set_surface_material(report.component.fields.surface_material, $event)"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <more pull-left *ngIf="editable" #material (change)="set_surface_material(material.value, $event)" [type]="\'materials\'"\n\n                modal-button></more>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Medium temperature (<sup>º</sup>C)</ion-label>\n\n                <ion-input #after_material [disabled]="!editable" tabindex="7" (ionFocus)="on_focus($event)" scroll="-80" name="surface_temp"\n\n                  [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Medium temperature"\n\n                  [(ngModel)]="report.component.fields.surface_temp" type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          -->\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked style="margin-top: 1.4rem;color: #999;">Damaged cladding</ion-label>\n\n                <ion-toggle [(ngModel)]="report.component.fields.damaged_cladding" name="damaged_cladding"></ion-toggle>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row *ngIf="report.component.fields.damaged_cladding">\n\n            <ion-col col-9 offset-1>\n\n              <ion-list radio-group [(ngModel)]="report.component.fields.damaged_cladding_selection" name="radio-cladding">\n\n                <ion-item>\n\n                  <ion-label>Lack of cladding</ion-label>\n\n                  <ion-checkbox value="1"></ion-checkbox>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                  <ion-label>Foot traffic/Dent</ion-label>\n\n                  <ion-checkbox value="2"></ion-checkbox>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                  <ion-label>Highly corred</ion-label>\n\n                  <ion-checkbox value="3"></ion-checkbox>\n\n                </ion-item>\n\n              </ion-list>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked style="margin-top: 1.4rem;color: #999;">Damaged insulation</ion-label>\n\n                <ion-toggle [(ngModel)]="report.component.fields.damaged_insulation" name="damaged_insulation"></ion-toggle>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row *ngIf="report.component.fields.damaged_insulation">\n\n            <ion-col col-9 offset-1>\n\n              <ion-list radio-group [(ngModel)]="report.component.fields.damaged_insulation_selection" name="radio-cladding">\n\n                <ion-item>\n\n                  <ion-label>Lack of insulation</ion-label>\n\n                  <ion-checkbox value="1"></ion-checkbox>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                  <ion-label>Wet insulation</ion-label>\n\n                  <ion-checkbox value="2"></ion-checkbox>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                  <ion-label>Old insulation</ion-label>\n\n                  <ion-checkbox value="3"></ion-checkbox>\n\n                </ion-item>\n\n\n\n                \n\n              </ion-list>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Comments</ion-label>\n\n                <ion-input type="text" tabindex="8" (ionFocus)="on_focus($event)" (keyup.enter)="on_keypress($event)"\n\n                  name="Comments" [(ngModel)]="report.component.fields.damaged_comment"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n        </form>\n\n      </ion-col>\n\n      <ion-col col-5 col-lg-6 no-padding>\n\n        <ion-row>\n\n          <ion-col col-12 picture-slide [report]="report" [editable]="false" (onStartEdit)="on_picture_start_edit($event)"></ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n    \n\n    <report-errors padding #errors col-12 [hidden]="view==\'!result\' && report.result"></report-errors>\n\n<!--\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-row col-12 p-4 *ngIf="view==\'result\' && (!!form && !form.invalid)" mx-3>\n\n          <ion-col col-8 class="damaged-result" *ngIf="report.component.fields.damaged_cladding">Cladding holds\n\n            insualtion in place an protect it from external agents ensuring its performance.</ion-col>\n\n          <ion-col col-12 class="damaged-result" *ngIf="report.component.fields.damaged_cladding_selection == 1">The\n\n            insulation is not protected anymore, water or other agent could get in.</ion-col>\n\n          <ion-col col-12 class="damaged-result" *ngIf="report.component.fields.damaged_cladding_selection == 2">There\n\n            is a reduction of the insulation thickness, higher energy conmsuption. The system is not watertight\n\n            anhmore.</ion-col>\n\n          <ion-col col-12 class="damaged-result" *ngIf="report.component.fields.damaged_cladding_selection == 3">Probably,\n\n            there is a leak above in the system. Jacketing as a protecting layer gets weaker.</ion-col>\n\n\n\n          <ion-col col-8 class="damaged-result" *ngIf="report.component.fields.damaged_insulation">Any damage in the\n\n            insulant leads to reduce its thermal performance and to increase the energy consumption.</ion-col>\n\n          <ion-col col-12 class="damaged-result" *ngIf="report.component.fields.damaged_insulation_selection == 1">A\n\n            lack of insulation in a system means an easy way out/in for the heat increasing the energy consumption.</ion-col>\n\n          <ion-col col-12 class="damaged-result" *ngIf="report.component.fields.damaged_insulation_selection == 2">Moisture\n\n            inside the insulation structure can reduce the thermal performance up to 50% and increase the risk of CUI.</ion-col>\n\n          <ion-col col-12 class="damaged-result" *ngIf="report.component.fields.damaged_insulation_selection == 3">Heat\n\n            cycles and external condition changes affect the estructure of the insulant reducing its performance.</ion-col>\n\n\n\n        </ion-row>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n    -->\n\n  </ion-grid>\n\n\n\n  <edit-picture *ngIf="view==\'edit_picture\'" [report]="report" [picture]="editing_picture"></edit-picture>\n\n\n\n</ion-content>\n\n\n\n<report-footer [parent]="this" [calculate_text]="\'Validate\'"></report-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\damaged\report-damaged.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_report_service__["a" /* ReportService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__services__["c" /* PictureService */],
            __WEBPACK_IMPORTED_MODULE_4__services_messages_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Keyboard */]])
    ], ReportDamagedPage);
    return ReportDamagedPage;
}(__WEBPACK_IMPORTED_MODULE_1__models_reports__["a" /* BaseReportPage */]));

//# sourceMappingURL=report-damaged.component.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportCondensationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_reports__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_report_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_messages_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__(17);
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
        var _this = _super.call(this, new __WEBPACK_IMPORTED_MODULE_1__models_reports__["b" /* ReportCondensation */](navParams.data.project, navParams.data.component, navParams.data.report), navCtrl, service, alertCtrl, picture, message, keyboard) || this;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report-condensation',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\reports\condensation\report-condensation.component.html"*/'<report-header [parent]="this"></report-header>\n\n\n\n<ion-content #content>\n\n\n\n  <ion-grid [hidden]="view==\'edit_picture\'">\n\n    <ion-row>\n\n      <ion-col col-7 col-lg-6 no-padding>\n\n        <form novalidate #form="ngForm" [hidden]="segment!=\'input\'" (submit)="calculate()">\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Component/Location</ion-label>\n\n                <ion-input tabindex="1" (ionFocus)="on_focus($event)" name="location" required data-val-required="Please input Component/Location"\n\n                  [(ngModel)]="report.component.fields.location" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-12></ion-col>\n\n          </ion-row>\n\n          <ion-row [hidden]="true">\n\n            <ion-col>\n\n              <ion-item>\n\n                <ion-input type="hidden" name="pictures" required data-val-required="Please take a picture" [(ngModel)]="picture_qty"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Summary Id</ion-label>\n\n                <ion-input tabindex="2" (ionFocus)="on_focus($event)" name="summary_id" [(ngModel)]="report.summary_id"\n\n                  required data-val-required="Please input summary id" type="text"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n          <!--\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Operational time (hours)</ion-label>\n\n                <ion-input tabindex="3" (ionFocus)="on_focus($event)" name="operational_time" [(ngModel)]="report.component.fields.operational_time"\n\n                  type="number"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <more pull-left #time (change)="report.component.fields.operational_time=time.value" [type]="\'time\'"\n\n                modal-button></more>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item class="edit_surface_material" [class.editable]="edit_surface_material">\n\n                <ion-label stacked>Surface material [ε]</ion-label>\n\n                <ion-input tabindex="4" #after_time class="literal" (ionFocus)="on_focus($event);toggle_surface_material(true)"\n\n                  [value]="report.component.fields.surface_material_friendly" type="text"></ion-input>\n\n                <ion-input tabindex="5" class="numeric" (ionFocus)="on_focus($event)" (focusout)="toggle_surface_material(false)"\n\n                  name="surface_material" [(ngModel)]="report.component.fields.surface_material" type="number" (change)="set_surface_material(report.component.fields.surface_material, $event)"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              <more pull-left #material (change)="set_surface_material(material.value, $event)" [type]="\'materials\'"\n\n                modal-button></more>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-10>\n\n              <ion-item>\n\n                <ion-label stacked>Medium temperature (<sup>º</sup>C)</ion-label>\n\n                <ion-input tabindex="6" #after_material (ionFocus)="on_focus($event)" (keyup.enter)="on_keypress($event)" name="surface_temp"\n\n                  [pattern]="patterns.REQUIRED_NUMBER" data-val-pattern="Please input a valid Medium temperature" \n\n                  [(ngModel)]="report.component.fields.surface_temp" type="tel"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n\n        -->\n\n          <ion-row>\n\n            <ion-col col-6>\n\n              <ion-item>\n\n                <ion-label stacked style="margin-top: 1.4rem;color: #999;">Ice block</ion-label>\n\n                <ion-toggle tabindex="7" [(ngModel)]="report.component.fields.condensation_ice_block" name="ice_block"></ion-toggle>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-6></ion-col>\n\n            <ion-col col-6>\n\n              <ion-item>\n\n                <ion-label stacked style="margin-top: 1.4rem;color: #999;">Wet surface</ion-label>\n\n                <ion-toggle tabindex="8" [(ngModel)]="report.component.fields.condensation_wet_surface" name="wet_surface"></ion-toggle>\n\n              </ion-item>\n\n            </ion-col>\n\n            <ion-col col-6></ion-col>\n\n            <!-- <ion-col col-6>\n\n              <ion-item>\n\n                <ion-label stacked style="margin-top: 1.4rem;color: #999;">Others</ion-label>\n\n                <ion-toggle tabindex="9" [(ngModel)]="report.component.fields.condensation_other" name="other"></ion-toggle>\n\n              </ion-item>\n\n            </ion-col> -->\n\n          </ion-row>\n\n          <ion-row>\n\n              <ion-col col-10>\n\n                <ion-item>\n\n                  <ion-label stacked>Comments</ion-label>\n\n                  <ion-input type="text" tabindex="8" (ionFocus)="on_focus($event)" (keyup.enter)="on_keypress($event)"\n\n                    name="Comments" [(ngModel)]="report.component.fields.condensation_comment"></ion-input>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n  \n\n        </form>\n\n      </ion-col>\n\n      <ion-col col-5 col-lg-6 no-padding>\n\n        <ion-row>\n\n            <ion-col col-12 picture-slide  [report]="report" [editable]="false"  (onStartEdit)="on_picture_start_edit($event)"></ion-col>\n\n        </ion-row>\n\n        <!-- <ion-row col-12 p-4 *ngIf="view==\'result\' && (!!form && !form.invalid)">\n\n          <ion-col col-4 img-container [style.backgroundImage]="\'url(\'+ first_picture +\')\'"></ion-col>\n\n          <ion-col col-8 class="damaged-result">Insulation in cold systems is critical not only for energy efficiency but for safety and process requirements.</ion-col>\n\n          <ion-col col-8 class="damaged-result" *ngIf="report.component.fields.condensation_ice_block">Ice block indicates the failure of the insulation system (or the lack of it). A part from the potential energy savings, its weight represents a risk for the installation break down.</ion-col>\n\n          <ion-col col-8 class="damaged-result" *ngIf="report.component.fields.condensation_wet_surface">Condensations indicates the need of a better insulation solution to bring the surface temperature above the dew point.</ion-col>\n\n        </ion-row> -->\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n\n\n    <report-errors padding #errors col-12 [hidden]="view==\'!result\' && report.result"></report-errors>\n\n\n\n  </ion-grid>\n\n\n\n  <edit-picture *ngIf="view==\'edit_picture\'" [report]="report" [picture]="editing_picture"></edit-picture>\n\n\n\n</ion-content>\n\n\n\n<report-footer [parent]="this" [calculate_text]="\'Validate\'"></report-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\reports\condensation\report-condensation.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_report_service__["a" /* ReportService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__services__["c" /* PictureService */],
            __WEBPACK_IMPORTED_MODULE_4__services_messages_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Keyboard */]])
    ], ReportCondensationPage);
    return ReportCondensationPage;
}(__WEBPACK_IMPORTED_MODULE_1__models_reports__["a" /* BaseReportPage */]));

//# sourceMappingURL=report-condensation.component.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportLeakage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_base__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_reports_leakage_report_leakage_component__ = __webpack_require__(357);
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

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_init_init__ = __webpack_require__(295);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_init_init__["a" /* InitPage */];
        platform.ready().then(function () {
            //throw 'error'
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.hide();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projects_project_page_base__ = __webpack_require__(171);
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
        _this.project = new __WEBPACK_IMPORTED_MODULE_2__models__["b" /* Project */]();
        _this.original_project = navParams.get("project");
        _this.project = new __WEBPACK_IMPORTED_MODULE_2__models__["b" /* Project */](_this.original_project);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n      <ion-buttons start>\n        <button ion-button color="royal" (click)="after_delete()">Cancel</button>\n      </ion-buttons>\n    <ion-title>\n      {{ project.name }}\n    </ion-title>\n    <ion-buttons end>\n        <button ion-button color="royal" (click)="save()">OK</button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n\n        <ion-item>\n          <ion-label>Name</ion-label>\n          <ion-input type="text" [(ngModel)]="project.name"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Description</ion-label>\n          <ion-textarea rows="5" [(ngModel)]="project.desc"></ion-textarea>\n        </ion-item>\n\n      </ion-list>\n\n      <div padding>\n          <button (click)="delete_project(project)" ion-button color="danger" block>Remove</button>\n      </div>\n</ion-content>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__services__["d" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Keyboard */]])
    ], ContactPage);
    return ContactPage;
}(__WEBPACK_IMPORTED_MODULE_4__projects_project_page_base__["a" /* ProjectPageBase */]));

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectReportsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(176);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PicturesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PicturesPage = /** @class */ (function () {
    function PicturesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.project = navParams.get('project');
    }
    PicturesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pictures',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\pictures\pictures.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n      <ion-buttons start>\n\n        <button ion-button icon-only color="royal">\n\n          <ion-icon name="search"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-title>{{project.name}}</ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only color="royal">\n\n          <ion-icon name="person-add"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n<ion-content>\n\n  <ion-searchbar></ion-searchbar>\n\n  <ion-list padding>\n\n    <ion-list-header>\n\n      Header\n\n    </ion-list-header>\n\n    <ion-item-sliding>\n\n      <ion-item>\n\n        <h2>Finn</h2>\n\n        <h3>Don\'t Know What To Do!</h3>\n\n        <p>I\'ve had a pretty messed up day. If we just...</p>\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button color="primary">\n\n          <ion-icon name="text"></ion-icon>\n\n          Text\n\n        </button>\n\n        <button ion-button color="danger">\n\n          Remove\n\n          <ion-icon name="ios-trash-outline"></ion-icon>\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n    <ion-item>\n\n      <ion-label>Sam</ion-label>\n\n      <ion-toggle checked="false"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Legolas</ion-label>\n\n      <ion-toggle checked="true"></ion-toggle>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n  <ion-grid no-padding>\n\n    <ion-row no-padding>\n\n      <ion-col col-6>\n\n        <button small ion-button color="light" (click)="navCtrl.pop()">\n\n          <ion-icon name="arrow-back"></ion-icon>&nbsp;Back\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6 text-right>\n\n        <button small ion-button color="light" (click)="navCtrl.pop()">\n\n          Save report\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\pictures\pictures.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PicturesPage);
    return PicturesPage;
}());

//# sourceMappingURL=pictures.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileDeviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__messages_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__file_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_chooser__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jszip__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jszip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jszip__);
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
    function FileDeviceService(file, message, chooser, path, transfer) {
        var _this = _super.call(this) || this;
        _this.file = file;
        _this.message = message;
        _this.chooser = chooser;
        _this.path = path;
        _this.transfer = transfer;
        _this.download_emiter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
    FileDeviceService.prototype.read_text = function (filename) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.create_file(filename)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this.file.readAsText(_this.working_folder, filename + ".json")
                                    .then(function (r) { return resolve(r); })
                                    .catch(function (ex) {
                                    reject(ex.message);
                                    throw ex;
                                });
                            })];
                }
            });
        });
    };
    FileDeviceService.prototype.write_text = function (filename, content) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.create_file(filename)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this.file.writeFile(_this.working_folder, filename + ".json", content, { replace: true })
                                    .then(function () { return resolve(true); })
                                    .catch(function (ex) {
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
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.file.removeFile(_this.working_folder, filename + ".pdf").then(function () {
                _this.file.writeFile(_this.working_folder, filename + ".pdf", _this.base64_to_uint(base64).buffer, { replace: true })
                    .then(function (r) { return resolve(_this.working_folder + "temp/" + filename + ".pdf"); })
                    .catch(function (ex) {
                    //reject(ex.message);
                    throw ex;
                });
            });
        });
    };
    FileDeviceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1__messages_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */]])
    ], FileDeviceService);
    return FileDeviceService;
}(__WEBPACK_IMPORTED_MODULE_3__file_service__["a" /* FileService */]));

//# sourceMappingURL=file-device.service.js.map

/***/ }),

/***/ 612:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 614:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseCalculator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__result__ = __webpack_require__(99);


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
        /*Report and Project propesties*/
        this.δ = 0.00000005670367;
        this.θse = Number(this.report.component.fields.surface_temp);
        this.θse_min = this.θse;
        this.θse_max = this.θse;
        this.θa = Number(this.report.component.fields.ambient_temp);
        this.θa_min = this.θa;
        this.θa_max = this.θa;
        this.Ot = Number(this.report.component.fields.operational_time);
        this.ε = Number(this.report.component.fields.surface_material);
        this.Σ = Number(this.report.component.project.price);
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
            return filter ?
                range.lastIndexOf(filter) > 0 ? range[range.lastIndexOf(filter) - 1][1] : range[0][1] : 0;
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
        // console.clear();
        // console.table({
        //     'this.Sp': this.Sp,
        //     'this.ql_ref_pb': this.ql_ref_pb,
        //     'this.ql_min': this.ql_min,
        // })
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
            })
        });
        return this.report;
    };
    return BaseCalculator;
}());

//# sourceMappingURL=base-calculator.class.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileLocalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_service__ = __webpack_require__(54);
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
    function FileLocalService() {
        var _this = _super.call(this) || this;
        _this.working_folder = 'D:\\Sofware Factory\\tbi\\src\\assets\\';
        return _this;
    }
    FileLocalService.prototype.create_pdf = function (base64, filename) {
        throw new Error("Method not implemented.");
    };
    FileLocalService.prototype.base64_to_uint = function (base64) {
        throw new Error("Method not implemented.");
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
    FileLocalService.prototype.read_text = function (filename) {
        return new Promise(function (resolve, reject) {
            resolve(localStorage.getItem(filename));
        });
    };
    FileLocalService.prototype.write_text = function (filename, content) {
        return new Promise(function (resolve, reject) {
            localStorage.setItem(filename, content);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FileLocalService);
    return FileLocalService;
}(__WEBPACK_IMPORTED_MODULE_1__file_service__["a" /* FileService */]));

//# sourceMappingURL=file-local.service.js.map

/***/ }),

/***/ 661:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="insulation"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\insulation.svg"*/'<svg id="insulation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 506 506"><path d="M204,139" transform="translate(0 -1)" fill="none" stroke="#211915" stroke-miterlimit="10" stroke-width="6"/><path d="M204,139" transform="translate(0 -1)" fill="#fff" stroke="#211915" stroke-miterlimit="10" stroke-width="6"/><path d="M45,299c-17,0-25-31-25-60s8-60,25-60,25,31,25,60S62,299,45,299Zm0-106c-3,2-11,17-11,46s8,44,11,46,11-17,11-46S48,195,45,193Z" transform="translate(0 -1)" fill="#211915"/><path d="M305,265" transform="translate(0 -1)" fill="none" stroke="#211915" stroke-miterlimit="10" stroke-width="6"/><path d="M257,184" transform="translate(0 -1)" fill="none" stroke="#211915" stroke-miterlimit="10" stroke-width="6"/><path d="M472,132H409c-21-42-53-66-88-66H201c-35,0-67,24-88,66H43C15,135,0,188,0,238S16,343,45,343h68c21,41,52,65,87,65H321c36,0,67-25,88-64h61s36-22,36-107S473,133,472,132ZM321,81c31,0,59,23,78,62H295c-13-28-31-49-50-62h77Zm80,76-20,21-112,4,25-25H401ZM202,81c33,0,63,25,81,68l-24,23c-13-25-34-40-57-40H129C147,99,172,81,202,81ZM12,239c0-57,20-92,33-92s30,35,30,92-18,89-30,89S12,296,12,239ZM129,343h73c29,0,55-26,65-66l30-3c-11,70-50,121-96,121C174,394,148,376,129,343Zm192,51H246c33-22,58-66,65-122l105-2C407,341,367,394,321,394Zm145-64H416a229,229,0,0,0,16-67v-8l-120,3-58,6v5c-8,36-30,60-53,60H68c15-19,22-56,22-92s-8-73-23-92H202c20,0,38,15,48,40l4,10,133-4,33-35h0l-4-10h50c5,5,26,22,26,92S471,327,466,330Z" transform="translate(0 -1)" fill="#211915"/></svg>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\insulation.svg"*/
        })
    ], SvgInsulationComponent);
    return SvgInsulationComponent;
}());

//# sourceMappingURL=svg-insulation.component.js.map

/***/ }),

/***/ 662:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="custom"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\custom.svg"*/'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n	 viewBox="0 0 508 508" style="enable-background:new 0 0 508 508;" xml:space="preserve">\n<rect x="49.2" y="221.2" width="262.2" height="16.4"/>\n<rect x="49.2" y="286.8" width="237.6" height="16.4"/>\n<rect x="49.2" y="352.3" width="163.9" height="16.4"/>\n<rect x="49.2" y="417.9" width="16.4" height="16.4"/>\n<rect x="81.9" y="417.9" width="16.4" height="16.4"/>\n<rect x="114.7" y="417.9" width="16.4" height="16.4"/>\n<path d="M500.8,202.4l-23.2-23.2c-9.3-9.3-25.5-9.3-34.8,0l-82.3,82.3V0H144.1L0,144.1V508h360.5V377.5l140.3-140.3\n	C510.4,227.6,510.4,212,500.8,202.4z M139.3,28v111.3H28L139.3,28z M16.4,491.6V155.7h139.3V16.4h188.5V278L221,401.2l-14.5,72.4\n	l72.4-14.5l65.2-65.2v97.7L16.4,491.6L16.4,491.6z M233.5,421.8l24.7,24.7l-30.9,6.2L233.5,421.8z M274.9,440l-34.8-34.8L402.3,243\n	l34.8,34.8L274.9,440z M448.7,266.2l-34.8-34.8l11.6-11.6l34.8,34.8L448.7,266.2z M489.2,225.6L471.8,243L437,208.2l17.4-17.4\n	c3.1-3.1,8.5-3.1,11.6,0l23.2,23.2C492.4,217.2,492.4,222.4,489.2,225.6z"/>\n<polygon points="254,90.1 254,41 237.6,41 237.6,90.1 188.5,90.1 188.5,106.5 237.6,106.5 237.6,155.7 254,155.7 254,106.5\n	303.2,106.5 303.2,90.1 "/>\n</svg>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\custom.svg"*/
        })
    ], SvgCustomComponent);
    return SvgCustomComponent;
}());

//# sourceMappingURL=svg-custom.component.js.map

/***/ }),

/***/ 663:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="safety"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\safety.svg"*/'<svg id="safety" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496"><path d="M40,311H472a32,32,0,0,0,16-60A232,232,0,0,0,320,32h0A24,24,0,0,0,296,7H216a24,24,0,0,0-24,24h0A232,232,0,0,0,24,251,32,32,0,0,0,40,311Zm0-48H440V247H40A216,216,0,0,1,160,62V199h16V54l16-6V231h16V31a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V231h16V49l16,6V199h16V62A216,216,0,0,1,472,247H456v16h16a16,16,0,0,1,0,32H40A16,16,0,0,1,40,263Z" transform="translate(-8 -7)"/><rect x="328" y="208" width="16" height="16"/><rect x="152" y="208" width="16" height="16"/><path d="M416,327H96a56,56,0,0,0-51,32H8V471H45a56,56,0,0,0,51,32h88a47,47,0,0,0,42-26l3-5a31,31,0,0,1,55,0l3,5a47,47,0,0,0,42,26h88a56,56,0,0,0,51-32h37V359H467A56,56,0,0,0,416,327ZM24,455V407H40v40a56,56,0,0,0,1,8H24Zm16-72v8H24V375H41A56,56,0,0,0,40,383Zm416,64a40,40,0,0,1-40,40H328a31,31,0,0,1-28-17l-3-5a47,47,0,0,0-84,0l-3,5a31,31,0,0,1-28,17H96a40,40,0,0,1-40-40V383a40,40,0,0,1,40-40H416a40,40,0,0,1,40,40v64Zm32-72v16H472v-8a56,56,0,0,0-1-8h17Zm-16,72V407h16v48H471A56,56,0,0,0,472,447Z" transform="translate(-8 -7)"/><rect x="224" y="352" width="16" height="16"/><path d="M72,383v56H88V383a8,8,0,0,1,8-8H216V359H96A24,24,0,0,0,72,383Z" transform="translate(-8 -7)"/></svg>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\safety.svg"*/
        })
    ], SvgSafetyComponent);
    return SvgSafetyComponent;
}());

//# sourceMappingURL=svg-safety.component.js.map

/***/ }),

/***/ 664:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="maintenance"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\maintenance.svg"*/'<svg id="mantenance" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480"><title>mantenance</title><path d="M440,32H384V24a24,24,0,0,0-48,0v8H144V24a24,24,0,0,0-48,0v8H40A40,40,0,0,0,0,72V440a40,40,0,0,0,40,40H440a40,40,0,0,0,40-40V72A40,40,0,0,0,440,32Zm-88-8a8,8,0,0,1,16,0V88a8,8,0,0,1-16,0V24ZM336,88a24,24,0,0,0,48,0,20,20,0,0,1-4,40H340A20,20,0,0,1,336,88ZM112,24a8,8,0,0,1,16,0V88a8,8,0,0,1-16,0V24ZM96,88a24,24,0,0,0,48,0,20,20,0,0,1-4,40H100A20,20,0,0,1,96,88ZM464,440a24,24,0,0,1-24,24H40a24,24,0,0,1-24-24V176H464V440Zm0-280H16V72A24,24,0,0,1,40,48H96V72a36,36,0,0,0,4,72h40a36,36,0,0,0,4-72V48H336V72a36,36,0,0,0,4,72h40a36,36,0,0,0,4-72V48h56a24,24,0,0,1,24,24v88Z"/><rect x="96" y="192" width="16" height="16"/><rect x="64" y="192" width="16" height="16"/><rect x="32" y="192" width="16" height="16"/><path d="M433,376l-48-8a8,8,0,0,0-7,2l-6,6H264V360a8,8,0,0,0-8-8H223l-6,3-10,10-11-11-5-2H48a8,8,0,0,0-8,8v80a8,8,0,0,0,8,8H192l6-2,10-10,10,10,6,2h32a8,8,0,0,0,8-8V424H373l6,6,6,2h1l48-8a8,8,0,0,0,7-8V384A8,8,0,0,0,433,376Zm-185,8v48H227l-14-14a8,8,0,0,0-11,0l-14,14H56V368H188l15,14,6,2,6-3,13-13h22v16Zm176,25-37,6-5-5-6-2H264V392H376l6-2,5-5,37,6v18Z"/><path d="M424,296H372l-18-24,18-24h52a8,8,0,0,0,6-13l-32-40a8,8,0,0,0-6-3H344l-6,2-46,46H64a32,32,0,0,0,0,64H293l46,46,6,2h48a8,8,0,0,0,6-3l32-40A8,8,0,0,0,424,296Zm-36,40H347l-46-46-6-2H64a16,16,0,0,1,0-32H296l6-2,46-46h41l19,24H368a8,8,0,0,0-6,3l-24,32a8,8,0,0,0,0,10l24,32a8,8,0,0,0,6,3h39Z"/><rect x="72" y="384" width="56" height="16"/><rect x="144" y="384" width="16" height="16"/></svg>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\maintenance.svg"*/
        })
    ], SvgMaintenanceComponent);
    return SvgMaintenanceComponent;
}());

//# sourceMappingURL=svg-maintenance.component.js.map

/***/ }),

/***/ 665:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="flange"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\flange.svg"*/'<svg version="1.1" id="flange" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<ellipse cx="280" cy="251" rx="8" ry="19"/>\n\n<ellipse cx="244" cy="147" rx="8" ry="19"/>\n\n<ellipse cx="244" cy="365" rx="8" ry="19"/>\n\n<path d="M48,200c-17,0-25,31-25,60s8,60,25,60s25-31,25-60S65,200,48,200z M48,306c-3-2-11-17-11-46s8-44,11-46s11,17,11,46\n\n	S51,308,48,306z"/>\n\n<path d="M477,152h-33.4c0.6,2.4,1.4,4.9,2.3,7.3C428.7,119.5,400.3,86,357,86H205c-18,0-37,8-52,20s-27,28-37,48H45\n\n	c-27,2-42,54-42,104s15,99,41,104h74c21,41,54,65,88,65h160c25.2,0,59.5-21.2,81.2-64H475c0,0,36-22,36-107S478,153,477,152z\n\n	 M52,350h-8c-11-7-26-40-26-91c0-57,17-91,30-91s30,35,30,92S63,344,52,350z M71,349c14-19,22-56,22-91s-8-72-22-91h135\n\n	c6,5,37,23,37,93s-31,86-36,89H71z M206,416c-28,1-55-19-74-53h24v1c0,11,4,19,8,19s8-9,8-19c0-0.4,0-0.7,0-1h38v-2h1\n\n	c4-1,46-17,46-102s-44-105-45-106h-40c0.1-2,0.1-4,0-6c0-10-4-19-8-19s-8,9-8,19c-0.1,2-0.1,4,0,6h-26c19-34,47-55,76-55\n\n	c55,0,100,72,100,160s-39,149-89,158H206z M285,376c21-32,32-75,32-120s-11-87-32-120c-11-17-23-29-37-38h68.6\n\n	c7.1,5.2,20.8,16.5,34.6,34.2c18.2,23.4,40,63,40.3,118.8c0.4,67-20.1,108.8-37.4,132c-14.1,19-28.4,29.1-34.6,32.9H246\n\n	C261,407,274,393,285,376z M357,416h-20.3c7.3-5.9,16.2-14.5,25.1-26.4C380.2,365,402,321.1,401.6,251\n\n	c-0.4-58.6-23.3-100.2-42.4-124.9c-9.5-12.3-19-21.6-26.5-28.1h30c46.4,0,89,69,94.4,159C462.2,344.8,412,416,357,416z M471,350\n\n	h-17.9c10.1-24.9,16.2-55.9,14.9-93c-0.9-24.6-6.8-59.9-19.7-92.1c0.2,0.4,0.3,0.7,0.5,1.1H471c5,5,26,22,26,92S476,347,471,350z"/>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\flange.svg"*/
        })
    ], SvgFlangeComponent);
    return SvgFlangeComponent;
}());

//# sourceMappingURL=svg-flange.component.js.map

/***/ }),

/***/ 666:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="hot-surface"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\hot-surface.svg"*/'<svg version="1.1" id="hot-surface" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"\n\n	 y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<path d="M313.6,186.1l-45.2,63.3c0,0-129.5,9-134,21.1c-4.5,12,3,12,4.5,12c1.5,0,31.6-7.5,16.6,3c-5.1,3.6-34.6,12-39.2,19.6\n\n	c0,0-7.5,15.1,9,13.6s45.2-19.6,45.2-19.6l-40.7,42.2c0,0-4.5,19.6,13.6,10.5s82.8-69.3,117.5-57.2c11.7,4.1,9,13.6,9,13.6\n\n	l-24.1,40.7c0,0-6,19.6,19.6,12l79.8-131L313.6,186.1z"/>\n\n<path d="M253.1,21L0,465.3h510.9L253.1,21z M253.6,57.8L476.7,447H31.1L253.6,57.8z"/>\n\n<path d="M186,376c2.9-1.9,4.6-5.1,4.7-8.5c0-1.9-1.6-3.5-3.5-3.5s-3.5,1.6-3.5,3.5c0,1.2-0.5,1.7-2.2,3.1c-2.9,1.9-4.6,5.1-4.7,8.5\n\n	c0.1,3.4,1.9,6.6,4.7,8.5c1.7,1.4,2.2,2,2.2,3.1c0,1.1-0.4,1.6-2.2,3.1c-2.9,1.9-4.6,5.1-4.7,8.5c0,1.9,1.6,3.5,3.5,3.5\n\n	s3.5-1.6,3.5-3.5c0-1.1,0.4-1.6,2.2-3.1c2.9-1.9,4.6-5.1,4.7-8.5c-0.1-3.4-1.9-6.6-4.7-8.5c-1.7-1.4-2.2-2-2.2-3.1\n\n	S184.3,377.4,186,376z"/>\n\n<path d="M203.4,376c2.9-1.9,4.6-5.1,4.7-8.5c0-1.9-1.6-3.5-3.5-3.5c-1.9,0-3.5,1.6-3.5,3.5c0,1.2-0.5,1.7-2.2,3.1\n\n	c-2.9,1.9-4.6,5.1-4.7,8.5c0.1,3.4,1.9,6.6,4.7,8.5c1.7,1.4,2.2,2,2.2,3.1c0,1.1-0.4,1.6-2.2,3.1c-2.9,1.9-4.6,5.1-4.7,8.5\n\n	c0,1.9,1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5c0-1.1,0.4-1.6,2.2-3.1c2.9-1.9,4.6-5.1,4.7-8.5c-0.1-3.4-1.9-6.6-4.7-8.5\n\n	c-1.7-1.4-2.2-2-2.2-3.1S201.7,377.4,203.4,376z"/>\n\n<path d="M147.6,376c2.9-1.9,4.6-5.1,4.7-8.5c0-1.9-1.6-3.5-3.5-3.5s-3.5,1.6-3.5,3.5c0,1.2-0.5,1.7-2.2,3.1\n\n	c-2.9,1.9-4.6,5.1-4.7,8.5c0.1,3.4,1.9,6.6,4.7,8.5c1.7,1.4,2.2,2,2.2,3.1c0,1.1-0.4,1.6-2.2,3.1c-2.9,1.9-4.6,5.1-4.7,8.5\n\n	c0,1.9,1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5c0-1.1,0.4-1.6,2.2-3.1c2.9-1.9,4.6-5.1,4.7-8.5c-0.1-3.4-1.9-6.6-4.7-8.5\n\n	c-1.7-1.4-2.2-2-2.2-3.1S146,377.4,147.6,376z"/>\n\n<path d="M165.1,376c2.9-1.9,4.6-5.1,4.7-8.5c0-1.9-1.6-3.5-3.5-3.5s-3.5,1.6-3.5,3.5c0,1.2-0.5,1.7-2.2,3.1\n\n	c-2.9,1.9-4.6,5.1-4.7,8.5c0.1,3.4,1.9,6.6,4.7,8.5c1.7,1.4,2.2,2,2.2,3.1c0,1.1-0.4,1.6-2.2,3.1c-2.9,1.9-4.6,5.1-4.7,8.5\n\n	c0,1.9,1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5c0-1.1,0.4-1.6,2.2-3.1c2.9-1.9,4.6-5.1,4.7-8.5c-0.1-3.4-1.9-6.6-4.7-8.5\n\n	c-1.7-1.4-2.2-2-2.2-3.1S163.4,377.4,165.1,376z"/>\n\n<path d="M260,376c2.9-1.9,4.6-5.1,4.7-8.5c0-1.9-1.6-3.5-3.5-3.5c-1.9,0-3.5,1.6-3.5,3.5c0,1.2-0.5,1.7-2.2,3.1\n\n	c-2.9,1.9-4.6,5.1-4.7,8.5c0.1,3.4,1.9,6.6,4.7,8.5c1.7,1.4,2.2,2,2.2,3.1c0,1.1-0.4,1.6-2.2,3.1c-2.9,1.9-4.6,5.1-4.7,8.5\n\n	c0,1.9,1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5c0-1.1,0.4-1.6,2.2-3.1c2.9-1.9,4.6-5.1,4.7-8.5c-0.1-3.4-1.9-6.6-4.7-8.5\n\n	c-1.7-1.4-2.2-2-2.2-3.1S258.3,377.4,260,376z"/>\n\n<path d="M277.4,376c2.9-1.9,4.6-5.1,4.7-8.5c0-1.9-1.6-3.5-3.5-3.5c-1.9,0-3.5,1.6-3.5,3.5c0,1.2-0.5,1.7-2.2,3.1\n\n	c-2.9,1.9-4.6,5.1-4.7,8.5c0.1,3.4,1.9,6.6,4.7,8.5c1.7,1.4,2.2,2,2.2,3.1c0,1.1-0.4,1.6-2.2,3.1c-2.9,1.9-4.6,5.1-4.7,8.5\n\n	c0,1.9,1.6,3.5,3.5,3.5c1.9,0,3.5-1.6,3.5-3.5c0-1.1,0.4-1.6,2.2-3.1c2.9-1.9,4.6-5.1,4.7-8.5c-0.1-3.4-1.9-6.6-4.7-8.5\n\n	c-1.7-1.4-2.2-2-2.2-3.1S275.7,377.4,277.4,376z"/>\n\n<path d="M221.6,376c2.9-1.9,4.6-5.1,4.7-8.5c0-1.9-1.6-3.5-3.5-3.5s-3.5,1.6-3.5,3.5c0,1.2-0.5,1.7-2.2,3.1\n\n	c-2.9,1.9-4.6,5.1-4.7,8.5c0.1,3.4,1.9,6.6,4.7,8.5c1.7,1.4,2.2,2,2.2,3.1c0,1.1-0.4,1.6-2.2,3.1c-2.9,1.9-4.6,5.1-4.7,8.5\n\n	c0,1.9,1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5c0-1.1,0.4-1.6,2.2-3.1c2.9-1.9,4.6-5.1,4.7-8.5c-0.1-3.4-1.9-6.6-4.7-8.5\n\n	c-1.7-1.4-2.2-2-2.2-3.1S220,377.4,221.6,376z"/>\n\n<path d="M239.1,376c2.9-1.9,4.6-5.1,4.7-8.5c0-1.9-1.6-3.5-3.5-3.5s-3.5,1.6-3.5,3.5c0,1.2-0.5,1.7-2.2,3.1\n\n	c-2.9,1.9-4.6,5.1-4.7,8.5c0.1,3.4,1.9,6.6,4.7,8.5c1.7,1.4,2.2,2,2.2,3.1c0,1.1-0.4,1.6-2.2,3.1c-2.9,1.9-4.6,5.1-4.7,8.5\n\n	c0,1.9,1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5c0-1.1,0.4-1.6,2.2-3.1c2.9-1.9,4.6-5.1,4.7-8.5c-0.1-3.4-1.9-6.6-4.7-8.5\n\n	c-1.7-1.4-2.2-2-2.2-3.1S237.4,377.4,239.1,376z"/>\n\n<rect x="109" y="414" width="192" height="19"/>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\hot-surface.svg"*/
        })
    ], SvgHotSurfaceComponent);
    return SvgHotSurfaceComponent;
}());

//# sourceMappingURL=svg-hot-surface.component.js.map

/***/ }),

/***/ 667:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="fire-protection"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\fire-protection.svg"*/'<svg xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink" id="Layer_1" style="enable-background:new 0 0 512.001 512.001;" version="1.1" viewBox="0 0 512.001 512.001" x="0px" xmlns="http://www.w3.org/2000/svg" y="0px">\n            <path d="M499.058,2.53c-2.49-2.074-5.775-2.937-8.965-2.349L320.791,31.31c-5.184,0.954-8.947,5.472-8.947,10.742v3.55h-52.976\n                   v-9.648c0-12.748-10.371-23.12-23.12-23.12h-46.604c-6.308,0-12.029,2.545-16.205,6.656c-7.69-6.743-17.752-10.843-28.759-10.843\n                   c-24.091,0-43.691,19.6-43.691,43.691c0,10.146,3.487,19.488,9.312,26.912c-46.71,14.423-80.746,58.003-80.746,109.385v24.749\n                   h-9.12c-6.033,0-10.923,4.89-10.923,10.923v98.304c0,6.033,4.89,10.923,10.923,10.923h43.691c6.033,0,10.923-4.89,10.923-10.923\n                   v-98.304c0-6.033-4.89-10.923-10.923-10.923H50.901v-24.749c0-51.063,41.543-92.607,92.606-92.607l0.016-0.016\n                   c0.22,0.003,0.437,0.016,0.656,0.016c7.955,0,15.414-2.147,21.845-5.878v32.034c-38.002,2.132-68.267,33.714-68.267,72.239\n                   v283.989c0,18.521,15.067,33.587,33.587,33.587h162.202c18.52,0,33.587-15.067,33.587-33.587v-283.99\n                   c0-38.525-30.265-70.107-68.267-72.239v-11.046h52.975v3.55c0,5.27,3.763,9.789,8.947,10.742l169.301,31.13\n                   c0.658,0.121,1.318,0.18,1.976,0.18c2.533,0,5.012-0.883,6.989-2.53c2.491-2.075,3.933-5.15,3.933-8.393V10.923\n                   C502.99,7.681,501.549,4.605,499.058,2.53z M52.703,235.23v76.459H30.858V235.23H52.703z M189.146,34.68h46.604\n                   c0.703,0,1.275,0.571,1.275,1.275v86.107h-49.152V35.955h-0.001C187.871,35.252,188.442,34.68,189.146,34.68z M144.18,74.184\n                   c-12.046,0-21.845-9.8-21.845-21.845s9.8-21.845,21.845-21.845s21.845,9.8,21.845,21.845S156.226,74.184,144.18,74.184z\n                    M305.29,478.413c0,6.475-5.267,11.742-11.742,11.742H131.346c-6.475,0-11.742-5.267-11.742-11.742v-18.842H305.29V478.413z\n                    M305.29,295.185h-48.06c-6.031,0-10.923,4.89-10.923,10.923s4.891,10.923,10.923,10.923h48.06v20.871h-90.112\n                   c-6.033,0-10.923,4.89-10.923,10.923s4.89,10.923,10.923,10.923h90.112v77.979H119.604V224.734H305.29V295.185z M305.29,194.424\n                   v8.465H119.604v-8.465c0-27.855,22.662-50.517,50.517-50.517h84.651C282.628,143.906,305.29,166.569,305.29,194.424z\n                    M311.843,89.293h-52.975V67.448h52.975V89.293z M481.145,132.704l-147.456-27.113V51.15l147.456-27.113V132.704z"></path>\n            <path d="M214.086,317.031h1.092c6.033,0,10.923-4.89,10.923-10.923s-4.89-10.923-10.923-10.923h-1.092\n                   c-6.033,0-10.923,4.89-10.923,10.923S208.053,317.031,214.086,317.031z"></path>\n          </svg>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\fire-protection.svg"*/
        })
    ], SvgFireProtectionComponent);
    return SvgFireProtectionComponent;
}());

//# sourceMappingURL=svg-fire-protection.component.js.map

/***/ }),

/***/ 668:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="traffic"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\traffic.svg"*/'<svg id="traffice" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M499,404H457V30a10,10,0,0,0-21,0V287H357L265,37a11,11,0,0,0-10-7H74A10,10,0,0,0,64,41V284L1,388a10,10,0,0,0,4,14h5a10,10,0,0,0,9-5L80,298H183l19,56a10,10,0,0,0,10,7h64l6-2,71-51h82V415a10,10,0,0,0,10,10h53A10,10,0,1,0,499,404ZM273,340H220l-19-56a10,10,0,0,0-10-7H85V51H248l68,183H273l-18-46,16-9a10,10,0,0,0-11-18l-53,32a10,10,0,0,0-4,14,11,11,0,0,0,9,5h5l19-11,20,50a10,10,0,0,0,10,7h57l14,39Z"/><path d="M201,234H146l-18-78a10,10,0,1,0-20,5l20,86a10,10,0,0,0,10,8h64a11,11,0,0,0,11-11A10,10,0,0,0,201,234Z"/><path d="M265,405H181a10,10,0,0,0,0,21h84A10,10,0,1,0,265,405Z"/><path d="M95,351a64,64,0,0,0-63,64c0,36,28,64,63,64a64,64,0,0,0,64-64C159,380,130,351,95,351Zm0,107c-23,0-42-20-42-43a43,43,0,0,1,42-43c24,0,43,19,43,43S119,458,95,458Z"/><path d="M350,351a64,64,0,0,0-63,64c0,36,28,64,63,64a64,64,0,0,0,64-64C414,380,386,351,350,351Zm0,107c-23,0-42-20-42-43a43,43,0,0,1,42-43c24,0,43,19,43,43S374,458,350,458Z"/></svg>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\traffic.svg"*/
        })
    ], SvgTrafficComponent);
    return SvgTrafficComponent;
}());

//# sourceMappingURL=svg-traffic.component.js.map

/***/ }),

/***/ 669:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="damage-insulation"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\damage-insulation.svg"*/'<svg id="damage-insulation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47,181c-17,0-25,31-25,60s8,60,25,60,25-31,25-60S64,181,47,181Zm0,106c-3-2-11-17-11-46s8-44,11-46,11,17,11,46S50,285,47,287Z" transform="translate(0 0)" fill="#211915"/><path d="M477,134H442l-9-15c-17-26-39-43-62-49H322L304,94l-8,30-14,10H270v-4l-5-2c-14-4-32-15-35-22h0L214,67H137c-12,1-24,8-35,20s-20,28-28,48H44C17,138,2,190,2,239S17,339,43,344H75c15,40,38,64,63,66H353c31,0,59-18,81-51l8-14h35c4-2,35-18,35-105S478,135,477,134Zm-170-3,9-32,13-18h34l-12,25,8,28H303Zm-39,16h95l-17,40-37,45H281l-21-35ZM48,330H46c-13-2-29-36-29-91s18-91,30-91,30,34,30,91S61,328,48,330Zm22,0c14-19,21-56,21-91s-7-72-22-91h45c5,4,37,27,37,93s-32,85-36,89H70Zm72,66c-21,0-40-19-54-52h33c4-2,46-15,46-102s-44-105-45-106H87c14-34,34-54,55-54,41,0,73,71,73,158S183,396,142,396Zm211,0H176c10-9,19-21,27-38,15-32,24-75,24-120s-9-88-24-120c-8-16-17-29-27-38h30l13,31c4,13,26,23,38,28l-10,60,27,45,41,2,43-52,20-46-12-41,11-23c43,17,76,79,76,153C452,325,407,396,353,396Zm119-65H448c12-27,18-59,18-93s-6-64-17-91h22c5,4,26,26,26,92S476,327,471,331Z" transform="translate(0 0)" fill="#211915"/></svg>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\damage-insulation.svg"*/
        })
    ], SvgDamageInsulationComponent);
    return SvgDamageInsulationComponent;
}());

//# sourceMappingURL=svg-damage-insulation.component.js.map

/***/ }),

/***/ 670:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="damage-cladding"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\damage-cladding.svg"*/'<svg id="damage-cladding" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47,181c-17,0-25,31-25,60s8,60,25,60,25-31,25-60S64,181,47,181Zm0,106c-3-2-11-17-11-46s8-44,11-46,11,17,11,46S50,285,47,287Z" transform="translate(-1 -1)" fill="#211915"/><path d="M478,134H443l-9-15c-17-27-39-44-64-50h0L343,87l-35-9-23,34-13,4L248,89,213,67H137c-12,1-24,8-35,20s-20,28-28,48H44C17,138,2,190,2,239S17,339,43,344H75c15,40,38,64,63,66h70l23-17,41,8,22-34,13-4,24,28,33,20h1c26-4,51-22,69-51l8-14h35c4-2,35-18,35-105S479,135,478,134ZM48,330H46c-13-2-29-36-29-91s18-91,30-91,30,34,30,91S61,328,48,330Zm22,0c14-19,21-56,21-91s-7-72-22-91h45c5,4,37,27,37,93s-32,85-36,89H70Zm72,66c-21,0-40-19-54-52h33c4-2,46-15,46-102s-44-105-45-106H87c14-34,34-54,55-54,41,0,73,71,73,158S183,396,142,396Zm224-1-26-15-28-33-26,9-20,31-38-7-24,18H176c10-9,19-21,27-38,15-32,24-75,24-120s-9-88-24-120c-8-16-17-29-27-38h35l29,18,28,33,26-9,20-30,32,8,27-18c46,14,81,78,81,155S415,385,366,394Zm107-64H449c12-27,18-59,18-93s-6-64-17-91h22c5,4,26,26,26,92S477,327,472,331Z" transform="translate(-1 -1)" fill="#211915"/></svg>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\damage-cladding.svg"*/
        })
    ], SvgDamageCladdingComponent);
    return SvgDamageCladdingComponent;
}());

//# sourceMappingURL=svg-damage-cladding.component.js.map

/***/ }),

/***/ 671:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="ice-wet"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\ice-wet.svg"*/'<svg version="1.1" id="ice-wet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<path d="M46,210c-17,0-25,31-25,60s8,60,25,60s25-31,25-60S63,210,46,210z M46,316c-3-2-11-17-11-46s8-44,11-46s11,17,11,46\n\n	S49,318,46,316z"/>\n\n<path d="M234,214l-60-27l-60,27l-8,4l-3,2v88l27,15l42,23l0,0l3,2l3-2l0,0l42-23l27-15v-89l-3-2L234,214z M168,330l-54-30v-68l54,30\n\n	V330z M174,252l-19-10l-34-19l53-24l53,24l-34,19L174,252z M234,300l-54,30v-68l54-30V300z"/>\n\n<path d="M399,250c-3,3-31,33-31,50c0,19.3,15.7,35,35,35s35-15.7,35-35c0-18-28-47-31-50C404.7,248,401.3,248,399,250z M403,324\n\n	c-12.7,0-23-10.3-23-23l0,0c0-9,13-26,23-38c10,12,23,29,23,38C426,313.7,415.7,324,403,324L403,324z"/>\n\n<path d="M440,198L440,198c-3,4-19,22-19,33c0,12.7,10.3,23,23,23s23-10.3,23-23c0-11-16-29-19-33C445.7,196,442.3,196,440,198z\n\n	 M444,243c-6.6,0-12-5.4-12-12c0-4,5-12,12-20c6,8,12,16,12,20C456,237.6,450.6,243,444,243z"/>\n\n<path d="M391,231c0-11-16-29-19-33c-2.3-2-5.7-2-8,0l0,0c-3,4-19,22-19,33c0,12.7,10.3,23,23,23S391,243.7,391,231z M356,231\n\n	c0-4,5-12,12-20c6,8,12,16,12,20c-1.9,6.4-8.6,10-14.9,8.1c-3.9-1.2-6.9-4.2-8.1-8.1H356z"/>\n\n<circle cx="409" cy="301" r="6"/>\n\n<path d="M165.1,294.2l1.2-1.6c-0.3-0.7-0.9-1.1-1.6-1.2l-6.8,2.5l-13.6-10L155,279l6,4h2c0.4-0.6,0.4-1.4,0-2l-5-3l6-3\n\n	c0.7-0.4,1.1-1.2,1-2h-2l-6,3v-6c0.1-0.8-0.3-1.6-1-2h-2v8l-11,5v-15l7-3c0.7-0.4,1.1-1.2,1-2h-2l-5,2v-7c0.1-0.8-0.3-1.6-1-2h-2v7\n\n	l-5-3h-2c-0.4,0.6-0.4,1.4,0,2l6,4l-0.1,16.5l-11.7-8.6l1.7-7.4c0.1-0.8-0.3-1.6-1-2l-1.2,1.6l-1.3,5.2l-5.7-4.1\n\n	c-0.6-0.6-1.5-0.7-2.2-0.4l-1.2,1.6l5.7,4.1l-5.4,2.3l-1.2,1.6c0.3,0.7,0.9,1.1,1.6,1.2l6.8-2.5l13.6,10l-10.6,4.8l-6-4h-2\n\n	c-0.4,0.6-0.4,1.4,0,2l5,3l-6,3c-0.7,0.4-1.1,1.2-1,2h2l6-3v6c-0.1,0.8,0.3,1.6,1,2h2v-8l11-5v15l-7,3c-0.7,0.4-1.1,1.2-1,2h2l5-2v7\n\n	c-0.1,0.8,0.3,1.6,1,2h2v-7l5,3h2c0.4-0.6,0.4-1.4,0-2l-6-4l0.1-16.5l11.7,8.6l-1.7,7.4c-0.1,0.8,0.3,1.6,1,2l1.2-1.6l1.3-5.2\n\n	l5.7,4.1c0.6,0.6,1.5,0.7,2.2,0.4l1.2-1.6l-5.7-4.1L165.1,294.2z"/>\n\n<path d="M478,162H44c-28,3-43,57-43,107s16,105,45,105l430,1c0,0,36-21,36-106S479,163,478,162z M46,359c-12,0-33-32-33-89\n\n	s20-92,33-92s30,35,30,92S58,359,46,359z M472,360l-403,1v-1c15-19,22-56,22-92s-8-73-23-92h404c5,5,26,23,26,93S477,357,472,360z"\n\n	/>\n\n<polyline points="281,188 281,256.8 292.3,256.8 292.3,188 "/>\n\n<polyline points="281,80 281,148.8 292.3,148.8 292.3,80 "/>\n\n<polyline points="281,281 281,349.8 292.3,349.8 292.3,281 "/>\n\n<polyline points="281,380 281,448.8 292.3,448.8 292.3,380 "/>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\ice-wet.svg"*/
        })
    ], SvgIceWetComponent);
    return SvgIceWetComponent;
}());

//# sourceMappingURL=svg-ice-wet.component.js.map

/***/ }),

/***/ 672:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="mechanical"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\mechanical.svg"*/'<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>mechanical</title><path d="M32,188a110,110,0,0,0,116,25L299,364A110,110,0,0,0,402,512h0a111,111,0,0,0,46-10,10,10,0,0,0,3-16l-40-40,3-33,33-3,40,40a10,10,0,0,0,16-3,110,110,0,0,0-22-123,110,110,0,0,0-116-25L213,148A110,110,0,0,0,110,0h0A111,111,0,0,0,64,10a10,10,0,0,0-3,16l40,40L98,99l-33,3L26,61a10,10,0,0,0-16,3A110,110,0,0,0,32,188Zm76-70a10,10,0,0,0,9-9l4-46a10,10,0,0,0-3-8L86,23a91,91,0,0,1,24-3,90,90,0,0,1,82,126,10,10,0,0,0,2,11L355,318a10,10,0,0,0,11,2A90,90,0,0,1,489,426l-32-32a10,10,0,0,0-8-3l-46,4a10,10,0,0,0-9,9l-4,46a10,10,0,0,0,3,8l32,32a91,91,0,0,1-24,3,90,90,0,0,1-82-126,10,10,0,0,0-2-11L157,194a10,10,0,0,0-11-2A90,90,0,0,1,23,86l32,32a10,10,0,0,0,8,3" fill="#050206"/><path d="M289,447l-7,48H229l-7-48a8,8,0,0,0-7-7,185,185,0,0,1-60-25,8,8,0,0,0-10,0l-39,29L69,407l29-39a8,8,0,0,0,0-10,185,185,0,0,1-25-60,8,8,0,0,0-7-7l-48-7V231l48-7a8,8,0,0,0,6-3,116,116,0,0,1-24-11L9,215a8,8,0,0,0-7,8v68a8,8,0,0,0,7,8l50,7a202,202,0,0,0,23,55L51,402a8,8,0,0,0,1,11l48,48a8,8,0,0,0,11,1l40-30a201,201,0,0,0,55,23l7,50a8,8,0,0,0,8,7h68a8,8,0,0,0,8-7l6-39a117,117,0,0,1-12-24A8,8,0,0,0,289,447Z" fill="#030104"/><path d="M222,68l7-48h53l7,48a8,8,0,0,0,7,7,185,185,0,0,1,60,25,8,8,0,0,0,10,0l39-29,38,38-29,39a8,8,0,0,0,0,10,185,185,0,0,1,25,60,8,8,0,0,0,7,7l48,7v53l-48,7h-2a116,116,0,0,1,26,13l35-5a8,8,0,0,0,7-8V224a8,8,0,0,0-7-8l-50-7a202,202,0,0,0-23-55l30-40a8,8,0,0,0-1-11L411,54a8,8,0,0,0-11-1L360,83a201,201,0,0,0-55-23l-7-50a8,8,0,0,0-8-7H222a8,8,0,0,0-8,7l-5,35a117,117,0,0,1,13,26V68Z" fill="#030104"/><path d="M226,125A136,136,0,0,1,388,286h17A153,153,0,0,0,256,105l-28,3A117,117,0,0,1,226,125Z" fill="#030104"/><path d="M285,390A136,136,0,0,1,124,226H106A153,153,0,0,0,256,410l29-3A117,117,0,0,1,285,390Z" fill="#030104"/></svg>'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\mechanical.svg"*/
        })
    ], SvgMechanicalComponent);
    return SvgMechanicalComponent;
}());

//# sourceMappingURL=svg-mechanical.component.js.map

/***/ }),

/***/ 673:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="electrical"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\electrical.svg"*/'<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>electrical</title><path d="M32,188a110,110,0,0,0,116,25L299,364A110,110,0,0,0,402,512h0a111,111,0,0,0,46-10,10,10,0,0,0,3-16l-40-40,3-33,33-3,40,40a10,10,0,0,0,16-3,110,110,0,0,0-22-123,110,110,0,0,0-116-25L213,148A110,110,0,0,0,110,0h0A111,111,0,0,0,64,10a10,10,0,0,0-3,16l40,40L98,99l-33,3L26,61a10,10,0,0,0-16,3A110,110,0,0,0,32,188Zm76-70a10,10,0,0,0,9-9l4-46a10,10,0,0,0-3-8L86,23a91,91,0,0,1,24-3,90,90,0,0,1,82,126,10,10,0,0,0,2,11L355,318a10,10,0,0,0,11,2A90,90,0,0,1,489,426l-32-32a10,10,0,0,0-8-3l-46,4a10,10,0,0,0-9,9l-4,46a10,10,0,0,0,3,8l32,32a91,91,0,0,1-24,3,90,90,0,0,1-82-126,10,10,0,0,0-2-11L157,194a10,10,0,0,0-11-2A90,90,0,0,1,23,86l32,32a10,10,0,0,0,8,3" fill="#050206"/><path d="M108,389h40a9,9,0,0,0,7-4,8,8,0,0,0,0-8L89,247h0a8,8,0,0,0-7-4H12a8,8,0,0,0-7,4,7,7,0,0,0,0,8l48,76H8a8,8,0,0,0-7,5,8,8,0,0,0,1,8H2L142,509h0l6,2h4c3-2,4-6,3-9ZM25,346H68a8,8,0,0,0,7-4,7,7,0,0,0,0-8L27,258H78l58,116H96a9,9,0,0,0-6,3h0a8,8,0,0,0-1,7l32,75Z" fill="#010002"/><path d="M387,70a11,11,0,0,0-11,11v53a68,68,0,0,0,57,67c2,36,43,69,80,69V245c-24,0-55-20-57-43a68,68,0,0,0,57-67V81a11,11,0,0,0-11-11H490V11a11,11,0,1,0-23,0V70H420V11a11,11,0,1,0-23,0V70H387Zm12,64V93h91v41a45,45,0,0,1-45,45h0a45,45,0,0,1-45-45h0Z" fill="#030104"/></svg>'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\electrical.svg"*/
        })
    ], SvgElectricalComponent);
    return SvgElectricalComponent;
}());

//# sourceMappingURL=svg-electrical.component.js.map

/***/ }),

/***/ 674:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="leakage"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\leakage.svg"*/'<svg version="1.1" id="flange" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<ellipse cx="280" cy="181" rx="8" ry="19"/>\n\n<ellipse cx="244" cy="77" rx="8" ry="19"/>\n\n<ellipse cx="244" cy="295" rx="8" ry="19"/>\n\n<path d="M48,130c-17,0-25,31-25,60s8,60,25,60s25-31,25-60S65,130,48,130z M48,236c-3-2-11-17-11-46s8-44,11-46s11,17,11,46\n\n	S51,238,48,236z"/>\n\n<path d="M477,82h-33.4c0.6,2.4,1.4,4.9,2.3,7.3C428.7,49.5,400.3,16,357,16H205c-18,0-37,8-52,20s-27,28-37,48H45C18,86,3,138,3,188\n\n	s15,99,41,104h74c21,41,54,65,88,65h160c25.2,0,59.5-21.2,81.2-64H475c0,0,36-22,36-107S478,83,477,82z M52,280h-8\n\n	c-11-7-26-40-26-91c0-57,17-91,30-91s30,35,30,92S63,274,52,280z M71,279c14-19,22-56,22-91s-8-72-22-91h135c6,5,37,23,37,93\n\n	s-31,86-36,89H71z M206,346c-28,1-55-19-74-53h24v1c0,11,4,19,8,19s8-9,8-19c0-0.4,0-0.7,0-1h38v-2h1c4-1,46-17,46-102\n\n	S213,84,212,83h-40c0.1-2,0.1-4,0-6c0-10-4-19-8-19s-8,9-8,19c-0.1,2-0.1,4,0,6h-26c19-34,47-55,76-55c55,0,100,72,100,160\n\n	s-39,149-89,158H206z M285,306c21-32,32-75,32-120s-11-87-32-120c-11-17-23-29-37-38h68.6c7.1,5.2,20.8,16.5,34.6,34.2\n\n	c18.2,23.4,40,63,40.3,118.8c0.4,67-20.1,108.8-37.4,132c-14.1,19-28.4,29.1-34.6,32.9H246C261,337,274,323,285,306z M357,346h-20.3\n\n	c7.3-5.9,16.2-14.5,25.1-26.4C380.2,295,402,251.1,401.6,181c-0.4-58.6-23.3-100.2-42.4-124.9c-9.5-12.3-19-21.6-26.5-28.1h30\n\n	c46.4,0,89,69,94.4,159C462.2,274.8,412,346,357,346z M471,280h-17.9c10.1-24.9,16.2-55.9,14.9-93c-0.9-24.6-6.8-59.9-19.7-92.1\n\n	c0.2,0.4,0.3,0.7,0.5,1.1H471c5,5,26,22,26,92S476,277,471,280z"/>\n\n<path d="M200,509c-29.8,0-54-24.2-54-54l0,0c0-28,44-85,49-91l4-2l4,2c5,6,49,63,49,91C252,484.1,229,507.9,200,509z M200,377\n\n	c-15,20-42,60-42,78c0,23.5,19,42.5,42.5,42.5s42.5-19,42.5-42.5C242,437,215,397,200,377z"/>\n\n<path d="M200,486c-3,1.3-6.6-0.1-7.9-3.1c-1.3-3,0.1-6.6,3.1-7.9c1.5-0.7,3.3-0.7,4.8,0c10.5,0,19-8.5,19-19l0,0\n\n	c1.3-3,4.9-4.4,7.9-3.1c1.4,0.6,2.5,1.7,3.1,3.1C229.5,472.3,216.3,485.5,200,486z"/>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\leakage.svg"*/
        })
    ], SvgLeakageComponent);
    return SvgLeakageComponent;
}());

//# sourceMappingURL=svg-leakage.component.js.map

/***/ }),

/***/ 675:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="other-safety"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\question.svg"*/'<svg version="1.1" id="others" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<style type="text/css">\n\n	.st0{font-family:\'ArialMT\';}\n\n	.st1{font-size:150px;}\n\n	.st2{font-size:70px;}\n\n</style>\n\n<path d="M272.6,340.1c-5.8-5.8-13.7-9-21.5-9s-15.7,3.2-21.5,9c-5.8,5.8-9,13.7-9,21.5s3.2,15.7,9,21.5c5.8,5.8,13.7,9,21.5,9\n\n	s15.7-3.2,21.5-9c5.8-5.8,9-13.7,9-21.5C281.6,353.8,278.4,345.9,272.6,340.1z M265.4,375.8c-3.7,3.7-9,5.8-14.1,5.8\n\n	s-10.6-2.1-14.1-5.8c-3.7-3.7-5.8-9-5.8-14.1c0-5.1,2.1-10.6,5.8-14.1c3.7-3.7,9-5.8,14.1-5.8s10.6,2.1,14.1,5.8s5.8,8.8,5.8,14.1\n\n	S269.1,372.3,265.4,375.8z"/>\n\n<path d="M372.7,143.6C372.7,76.1,317.9,22,251.1,22c-67.5,0-121.6,54.8-121.6,121.6c0,16.9,13.7,30.5,30.5,30.5s30.5-13.7,30.5-30.5\n\n	c0-33.1,26.8-60.1,60.1-60.1c33.1,0,60.1,26.8,60.1,60.1s-26.8,60.1-60.1,60.1c-16.9,0-30.5,13.7-30.5,30.5v46.3\n\n	c0,16.9,13.7,30.5,30.5,30.5s30.5-13.7,31.7-30.5v-19.4h-0.2C336.4,247.9,372.7,201,372.7,143.6z M274.5,251.6c-2.4,0.5-4,2.6-4,5.3\n\n	v23.1c0,11.1-9,20.1-20.1,20.1c-11.1,0-20.1-9-20.1-20.1v-46.3c0-11.1,9-20.1,20.1-20.1c39,0,70.5-31.7,70.5-70.5\n\n	s-31.7-70.5-70.5-70.5s-70.5,31.7-71.7,71c0,11.1-9,20.1-20.1,20.1c-11.1,0-20.1-9-20.1-20.1c0-61.5,50-111.2,111.2-111.2\n\n	c61.5,0,111.2,50,111.2,111.2C361,197.3,326.3,241,274.5,251.6z"/>\n\n<text transform="matrix(1 0 0 1 345 481.5)" class="st0 st1">m</text>\n\n<text transform="matrix(1 0 0 1 460 434.5)" class="st0 st2">2</text>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\question.svg"*/
        })
    ], SvgOtherSafetyComponent);
    return SvgOtherSafetyComponent;
}());

//# sourceMappingURL=svg-other-safety.component.js.map

/***/ }),

/***/ 676:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="cold"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\cold.svg"*/'<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 viewBox="0 0 512 513" style="enable-background:new 0 0 512 513;" xml:space="preserve">\n\n<style type="text/css">\n\n</style>\n\n<path d="M353,304l-25-14l21-12c3-2,4-6,2-9c-2.1-2.8-5.9-3.7-9-2l-28,16l-44-26l44-25l28,16h3c2.3-0.1,4.5-1.2,6-3c2-3,1-8-2-9\n\n	l-21-12l25-14c2.8-2.1,3.7-5.9,2-9c-2.1-2.8-5.9-3.7-9-2l-25,14v-27c0-3.9-3.1-7-7-7s-7,3.1-7,7v33l-44,25v-52l28-16\n\n	c3.2-1.8,4.5-5.7,3-9c-2.1-2.8-5.9-3.7-9-2l-21,12v-28c0-3.9-3.1-7-7-7s-7,3.1-7,7v28l-22-12c-3.1-1.7-6.9-0.8-9,2\n\n	c-1.5,3.3-0.2,7.2,3,9l28,16v51l-45-26v-31c0-4-3-7-7-7l0,0c-3.9,0-7,3.1-7,7v24l-24-14c-3.1-1.7-6.9-0.8-9,2c-1.7,3.1-0.8,6.9,2,9\n\n	l24,14l-21,13c-3,2-4,6-2,9c1.2,2.1,3.6,3.3,6,3h4l28-17l45,26l-45,26l-28-17c-3-2-8-1-9,2c-1.7,3.1-0.8,6.9,2,9l21,13l-24,14\n\n	c-2.8,2.1-3.7,5.9-2,9c1.2,2.1,3.6,3.3,6,3h3l24-14v24c0,3.9,3.1,7,7,7l0,0c3.9,0,7-3.1,7-7v-30l45-26v51l-28,16\n\n	c-3.2,1.8-4.5,5.7-3,9c1.2,2.1,3.6,3.3,6,3h3l22-12v29c0,3.9,3.1,7,7,7s7-3.1,7-7v-29l21,12h3c2.4,0.3,4.8-0.9,6-3\n\n	c1.5-3.3,0.2-7.2-3-9l-28-16v-51l44,25v33c0,3.9,3.1,7,7,7s7-3.1,7-7v-25l25,15h4c2.4,0.3,4.8-0.9,6-3\n\n	C358.4,309.4,356.6,305.4,353,304z"/>\n\n<line class="st0" x1="256" y1="2" x2="256" y2="36"/>\n\n<line class="st0" x1="256" y1="42" x2="256" y2="86"/>\n\n<line class="st0" x1="256" y1="92" x2="256" y2="136"/>\n\n<line class="st0" x1="256" y1="379" x2="256" y2="413"/>\n\n<line class="st0" x1="256" y1="419" x2="256" y2="463"/>\n\n<line class="st0" x1="256" y1="469" x2="256" y2="513"/>\n\n<line class="st0" x1="10" y1="255" x2="44" y2="255"/>\n\n<line class="st0" x1="50" y1="255" x2="94" y2="255"/>\n\n<line class="st0" x1="100" y1="255" x2="144" y2="255"/>\n\n<line class="st0" x1="369" y1="255" x2="403" y2="255"/>\n\n<line class="st0" x1="409" y1="255" x2="453" y2="255"/>\n\n<line class="st0" x1="459" y1="255" x2="503" y2="255"/>\n\n<path d="M200,143L200,143V40l0,0c-3-13-33-23-68-23s-66,8-69,22l0,0v19H43v3l0,0v8H29v3l0,0v95h4V73h10v87h4V73h16v69l0,0\n\n	c3,13,32,23,68,23S197,157,200,143z M48,68v-6h15v6H48z M176,61v8l-13,3v-7L176,61z M162,76l13-3v6l-13,3V76L162,76z M162,87l13-3v6\n\n	l-13,3V87L162,87z M162,98l13-3v6l-13,3V98L162,98z M162,109l13-3v6l-13,3V109L162,109z M162,120l13-3v6l-13,3V120L162,120z\n\n	 M162,131l13-3v6l-13,3V131L162,131z M162,142l13-3v6l-13,3V142z M162,153l13-3v6l-13,3v-7V153z M195,143L195,143c-1,4-6,8-15,12V60\n\n	c5.5-1.7,10.5-4.4,15-8v89l0,0V143z M69,41L69,41c2-9,27-20,63-20s62,10,63,20l0,0c0,10-26,21-63,21S68,52,68,42h1V41z M69,142\n\n	L69,142V52c9,9,31,16,63,16l26-2v93l-26,2c-36,0-62-10-63-20V142z"/>\n\n<path d="M101,48v7h11v-7c5-1,9-3,9-6s-8-7-15-7s-15,2-15,7S96,48,101,48z M108,51h-3v-2h3v3V51z M107,39c7,0,10,2,11,3s-3,2-7,2h-6\n\n	c-5,0-7-2-7-2s4-2,11-2l0,0L107,39z"/>\n\n<path d="M127,37v7h11v-7c5-1,9-3,9-6s-8-7-15-7s-15,2-15,7S121,37,127,37z M134,40h-3v-2h3v3V40z M133,28c7,0,10,2,11,3s-3,2-7,2h-6\n\n	c-5,0-7-2-7-2s4-2,10-2l0,0L133,28z"/>\n\n<path class="st1" d="M371,49"/>\n\n<path class="st2" d="M371,49"/>\n\n<path class="st3" d="M307,113c-7,0-10-12-10-24s3-24,10-24s10,12,10,24S314,113,307,113z M307,71c-1,1-4,7-4,18s3,18,4,18s4-7,4-18\n\n	S308,72,307,71z"/>\n\n<path class="st1" d="M411,100"/>\n\n<path class="st1" d="M392,67"/>\n\n<path class="st3" d="M478,47h-26c-8-17-21-26-35-26h-48c-14,0-27,10-35,26h-28c-11,1-17,22-17,42s6,42,18,42h27c8,16,21,26,35,26h48\n\n	c14,0,27-10,35-26h24c0,0,14-9,14-43S478,47,478,47z M417,26c12,0,24,9,31,25h-41c-5-11-12-20-20-25H417z M449,56l-8,8l-45,2l10-10\n\n	H449z M370,26c13,0,25,10,32,27l-10,9c-5-10-14-16-23-16h-28C348,33,358,26,370,26z M294,89c0-23,8-37,13-37s12,14,12,37\n\n	s-7,36-12,36S294,112,294,89z M341,130h29c12,0,22-10,26-26h12c-4,28-20,48-38,48s-22-8-29-21V130z M418,150h-31c13-9,23-26,26-49\n\n	h42c-3,29-19,50-38,50L418,150z M476,124h-21c3.4-8.6,5.4-17.7,6-27v-1h-47l-23,2v2c-3,14-12,24-21,24h-54c6-8,9-22,9-37s-3-29-9-37\n\n	h54c8,0,15,6,19,16l2,4l53-2l13-14l0,0l-2-4h20c2,2,10,9,10,37s-8,37-10,39L476,124z"/>\n\n<ellipse class="st4" cx="123" cy="383" rx="3" ry="8"/>\n\n<ellipse class="st4" cx="123" cy="436" rx="3" ry="8"/>\n\n<ellipse class="st4" cx="95" cy="466" rx="3" ry="8"/>\n\n<ellipse class="st4" cx="95" cy="357" rx="3" ry="8"/>\n\n<path class="st4" d="M207,368h-15l-4-7c-9-14-21-21-33-21H95c-7,0-15,3-22,8s-11,12-15,20H29c-11,1-17,23-17,43s6,41,17,43h30\n\n	c9,17,22,27,37,27h59c12,0,24-8,33-21l4-6h15c2,0,15-8,15-44S208,368,207,368z M96,374c2,2,15,10,15,39s-13,36-15,37H40\n\n	c6-8,9-23,9-38s-3-30-9-38H96z M18,412c0-24,7-38,12-38l0,0c5,0,12,15,12,38s-6,35-11,37h-3C24,447,18,433,18,412z M98,455\n\n	c2,0,19-7,19-42s-18-44-19-44H64c8-14,20-23,31-23c23,0,42,30,42,66s-16,62-37,66h-4c-12,0-23-8-31-23 M112,477c6-4,12-9,16-17\n\n	s13-31,13-50s-5-36-13-50c-3.8-6.4-8.9-11.8-15-16h3c23,0,42,29,42,66s-19,66-42,66h-4V477z M133,477c6.4-4.1,11.9-9.6,16-16\n\n	c9-13,13-31,13-50s-5-36-13-50c-4-6.5-9.5-12-16-16l0,0c23,0,42,29,42,66S156,477,133,477h-1H133z M154,477h-4\n\n	c6.4-4.1,11.9-9.6,16-16c9-13,13-31,13-50s-5-36-13-50c-4-6.5-9.5-12-16-16h4c23,0,42,29,42,66s-19,66-41,66H154z M204,450h-10\n\n	c5-11,7-25,7-39c0.2-13-2.2-25.9-7-38h11c2,2,11,9,11,38s-9,38-11,39H204z"/>\n\n<path class="st4" d="M40,412c0-12-3-25-10-25s-10,13-10,25s3,25,10,25S40,424,40,412z M25,412c0-12,3-18,5-19s5,7,5,19s-3,20-5,19\n\n	S25,424,25,412z"/>\n\n<path class="st4" d="M449,418v-3c0-5.5-4.5-10-10-10s-10,4.5-10,10v3h-11l-6-6h-2v-17h7c5.5,0,10-4.5,10-10s-4.5-10-10-10h-14v-7h7\n\n	c1.7,0,3-1.3,3-3v-9h20c5.5,0,10-4.5,10-10s-4.5-10-10-10h-85c-5.5,0-10,4.5-10,10s4.5,10,10,10h20v10c0,1.7,1.3,3,3,3h7v7h-14\n\n	c-5.5,0-10,4.5-10,10s4.5,10,10,10h7v16h-2l-6,6h-12v-3c0-5.5-4.5-10-10-10s-10,4.5-10,10v3h-39v46h39v3c0,5.5,4.5,10,10,10\n\n	s10-4.5,10-10v-3h12c12.5,15.4,35.2,17.8,50.6,5.3c0.1-0.1,0.2-0.2,0.4-0.3l5-5h12v3c0,5.5,4.5,10,10,10s10-4.5,10-10v-3h39v-46H449\n\n	z M331,457h-33v-32h33v33V457z M344,467c0,1.9-1.6,3.5-3.5,3.5s-3.5-1.6-3.5-3.5v-52c0-1.7,1.3-3,3-3h2v55H344z M347,349\n\n	c-1.9,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5h85c1.9,0,3.5,1.6,3.5,3.5s-1.6,3.5-3.5,3.5h-84H347z M373,362v-7h33v7h-32H373z M396,369v7\n\n	h-12v-7h13H396z M363,389c-1.7,0-3-1.3-3-3v-2h55c1.7,0,3,1.3,3,3v2h-54H363z M429,458h-15c-9.4,12.9-27.6,15.8-40.5,6.4\n\n	c-0.2-0.1-0.3-0.2-0.5-0.4l-6-6h-16v-33h16c2.4-3.3,5.5-6,9-8c1.3-0.4,2.1-1.7,2-3v-19h26v18c-0.1,1.3,0.7,2.6,2,3l3,2l6,6h16v33\n\n	L429,458z M442,468c0,1.9-1.6,3.5-3.5,3.5s-3.5-1.6-3.5-3.5v-56h2c1.7,0,3,1.3,3,3v53H442z M481,458h-32v-33h33v33H481z"/>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\cold.svg"*/
        })
    ], SvgColdComponent);
    return SvgColdComponent;
}());

//# sourceMappingURL=svg-cold.component.js.map

/***/ }),

/***/ 677:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="pipe-insulation"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\pipe-insulation.svg"*/'<svg version="1.1" id="pipe-insulation" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"\n\n	 y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<g>\n\n	<g>\n\n		<path d="M476,126.2h-63c-21-44.4-53-69.7-88-69.7H205c-35,0-67,25.3-88,69.7H47c-28,3.2-43,59.1-43,111.9S20,349,49,349h68\n\n			c21,43.3,52,68.6,87,68.6h121c36,0,67-26.4,88-67.6h61c0,0,36-23.2,36-113S477,127.2,476,126.2z M325,72.3c31,0,59,24.3,78,65.5\n\n			H299c-6.8-15.5-15-28.9-24-40.2l0.3-0.7l-1.6-0.8c-7.8-9.6-16.2-17.5-24.8-23.8H325z M405,152.6l-20,22.2L273,179l25-26.4H405z\n\n			 M210,70.6c12.4-3.8,38.9,11.7,77,73.5l-24,24.3c-3.5-7.1-7.5-13.3-12-18.7l-8.5-8.7l-15.3-10.2c-0.1,0-0.1,0-0.2-0.1l-5.1-1.9\n\n			l-11.1-2.5l-17.8-0.2l-12.1,0.2h-18.8v-0.1h-13.6H135C173.6,56.5,210,70.6,210,70.6z M51.9,332.5l-3.4,0.5l-3-0.7\n\n			c-1-0.4-2-1.1-3-1.9l-0.1-0.1l0,0c-11.8-9.2-26.4-41-26.4-91.3c0-54,16.1-89.3,28.8-95.9l0,0l2.3-1.4h4.8l0.9,1.1\n\n			C65.1,149.1,79,184.5,79,239C79,294.7,63.7,327.7,51.9,332.5z M227,399.8l-10.8,3.1c-3.7,0.7-7.4,1-11.2,1\n\n			c-3.7-0.1-7.3-0.6-10.9-1.5l-13.1-4.3c-7.1-3.2-14-7.7-20.5-13.4L144,366.3c-3.9-5.3-7.5-11-11-17.3h6.1h11.4h15h11.6H195h12\n\n			c6.4-0.1,12.8-1.7,18.9-4.4l9.6-4.5l0.4-0.4l-0.4-0.8c1.5-1.1,3-2.3,4.5-3.6l10.2-10.7l7-10.3l9.2-19.5l4.5-15\n\n			c0-0.2,0.1-0.3,0.1-0.5l30-3.2c-2.2,14.7-5.5,28.5-9.7,41.4l-5.1,13.8c-2.8,6.8-5.8,13.1-9.1,19.1l-6.6,11.1\n\n			c-4.6,7-9.6,13.2-14.9,18.6l-8.5,7.9C240.7,393.1,234,397,227,399.8z M325,402.8h-75c33-23.2,58-69.7,65-128.8l105-2.1\n\n			C411,346.9,371,402.8,325,402.8z M470,335.2h-50c8.7-22.6,14.1-46.5,16-70.8V256l-120,3.2l-58,6.3v5.3c-8,38-30,63.4-53,63.4H72\n\n			c15-20.1,22-59.1,22-97.2c0-38.1-8-77.1-23-97.2h135c20,0,38,15.8,48,42.2l4,10.6l133-4.2l33-37l-4-10.6h50c5,5.3,26,23.2,26,97.2\n\n			S475,332.1,470,335.2z"/>\n\n		<g>\n\n			<path d="M54,173.9c0,0-1.1-1.6-4-1.6c-3.9,0-4.5,0.7-4.5,0.7c-14.9,3.8-22,35.6-22,65.5c0,29.9,7.1,61.7,22,65.5\n\n				c0,0,2.3,0.8,4.2,0.8c1.9,0,5.4-1.5,5.4-1.5c12.3-7.8,18.4-37.6,18.4-64.9C73.5,210.3,67.3,180.5,54,173.9z M48.5,289\n\n				c-3-2.2-11-18.7-11-50.5s8-48.3,11-50.5c3,2.2,11,18.7,11,50.5S51.5,291.2,48.5,289z"/>\n\n		</g>\n\n	</g>\n\n</g>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\pipe-insulation.svg"*/
        })
    ], SvgPipeInsultationComponent);
    return SvgPipeInsultationComponent;
}());

//# sourceMappingURL=svg-pipe-insulation.component.js.map

/***/ }),

/***/ 678:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="pipe"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\pipe.svg"*/'<svg version="1.1" id="pipe" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n<path d="M45,312c-17,0-25-31-25-60s8-60,25-60s25,31,25,60S62,312,45,312z M45,206c-3,2-11,17-11,46s8,44,11,46\n	s11-17,11-46S48,208,45,206z"/>\n<path d="M472,144H43c-28,3-43,57-43,107s16,105,45,105h425c0,0,36-21,36-106S473,145,472,144z M45,341\n	c-12,0-33-32-33-89s20-92,33-92s30,35,30,92S57,341,45,341z M466,342H68c15-19,22-56,22-92s-8-73-23-92h399c5,5,26,23,26,93\n	S471,339,466,342z"/>\n</svg>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\pipe.svg"*/
        })
    ], SvgPipeComponent);
    return SvgPipeComponent;
}());

//# sourceMappingURL=svg-pipe.component.js.map

/***/ }),

/***/ 679:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="valve"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\valve.svg"*/'<svg id="valve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M409,296v-9a26,26,0,1,0-51,0v9H328a88,88,0,0,0-16-15l-5-4V236h17a26,26,0,1,0,0-51H290V168h17a9,9,0,0,0,9-9V134h51a26,26,0,0,0,0-51H145a26,26,0,0,0,0,51h51v26a9,9,0,0,0,9,9h17v17H188a26,26,0,1,0,0,51h17v41l-5,4a88,88,0,0,0-16,15H154v-9a26,26,0,1,0-51,0v9H0V415H103v9a26,26,0,1,0,51,0v-9h30a93,93,0,0,0,132,13l13-13h30v9a26,26,0,0,0,51,0v-9H511V296H409ZM103,398H17V313h85v85Zm34,26a9,9,0,1,1-17,0V287a9,9,0,0,1,9-9l6,3a8,8,0,0,1,2,6V424Zm9-306a9,9,0,0,1,0-17H366a9,9,0,0,1,0,17H145Zm68,34V134h85v17H213Zm60,17v17H239V168h34Zm-85,51a9,9,0,0,1-9-9,8,8,0,0,1,3-6l6-2H324a9,9,0,0,1,9,9,8,8,0,0,1-3,6l-6,2H188ZM358,398H324a9,9,0,0,0-7,3,76,76,0,0,1-122,0,9,9,0,0,0-7-3H154V313h34a9,9,0,0,0,7-3,76,76,0,0,1,23-20,9,9,0,0,0,4-7V236h68v46a9,9,0,0,0,4,7l8,5a71,71,0,0,1,15,15,9,9,0,0,0,7,3h34v85Zm34,26a9,9,0,1,1-17,0V287a8,8,0,0,1,3-6l6-2a9,9,0,0,1,9,9V424Zm102-26H409V313h85v85Z" transform="translate(0 -1)" fill="#030104"/></svg>'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\valve.svg"*/
        })
    ], SvgValveComponent);
    return SvgValveComponent;
}());

//# sourceMappingURL=svg-valve.component.js.map

/***/ }),

/***/ 680:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="surface"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\surface.svg"*/'<svg version="1.1" id="surface" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<path d="M379.7,375.5h-45.2V239c0-13.5-1.1-23.2-3.1-28.8c-1.9-5.2-5.3-9.3-10.5-12.5c-5.2-3.3-11.4-4.9-18.6-4.9\n\n	c-13.4,0-24.2,4.3-33,13.2c-8.7,8.7-13.1,23.3-13.1,43.4v126.3h-45.4V234.8c0-14.6-2.6-25.5-7.7-32.4c-4.8-6.6-12.8-9.8-24.3-9.8\n\n	c-9,0-17.4,2.4-25,7.1c-7.6,4.7-12.9,11.4-16.3,20.5c-3.6,9.5-5.4,23.6-5.4,41.9v113.3H86.8V156.7h41.6v19.8\n\n	c5.4-5.7,11.6-10.5,18.7-14.6c11.6-6.6,24.9-10,39.6-10c16.4,0,30.1,3.5,40.8,10.4c8.3,5.4,14.8,12.5,19.3,21.2\n\n	c16.7-21,38-31.6,63.4-31.6c22,0,39.3,6.3,51.4,18.7c12,12.4,18.1,31.4,18.1,56.5V375.5z M344.5,365.5h25.2V227.2\n\n	c0-22.4-5.1-39-15.3-49.5c-10.1-10.4-25-15.7-44.2-15.7c-24.9,0-44.7,11.2-60.3,34.4l-5.6,8.2l-3.3-9.4\n\n	c-3.7-10.6-9.9-18.5-18.9-24.4c-9-5.9-20.9-8.8-35.3-8.8c-12.9,0-24.6,2.9-34.7,8.7c-10.1,5.8-18.3,13.5-24.4,23l-9.2,14.4v-41.4\n\n	H96.8v198.8h25.4V262.2c0-19.8,2-34.6,6-45.4c4.2-11.1,11-19.7,20.4-25.5c9.2-5.7,19.4-8.6,30.3-8.6c14.7,0,25.6,4.7,32.3,13.8\n\n	c6.4,8.7,9.6,21.6,9.6,38.3v130.6h25.4V249.2c0-22.8,5.4-39.7,16-50.4c10.6-10.7,24.1-16.1,40.1-16.1c9,0,17.1,2.2,23.9,6.5\n\n	c7,4.4,11.8,10.3,14.5,17.5c2.5,6.9,3.7,17.4,3.7,32.3V365.5z"/>\n\n<path d="M459.8,211.4h-79.7l0.6-5.5c0.8-7.6,3.3-14.9,7.4-21.7c4-6.7,11.6-15.1,23-25.7c10.7-9.9,14.4-14.2,15.6-16\n\n	c2.1-3.2,3.2-6.3,3.2-9.2c0-3-0.7-5.2-2.1-6.6c-1.4-1.4-3.4-2.1-6.3-2.1c-3.7,0-5.3,1.3-6.3,2.2c-1.1,1.1-2.4,3.6-2.8,9.2l-0.3,5.2\n\n	l-29.8-3l0.5-5c1.3-12.2,5.7-21.2,12.9-26.8c7-5.4,15.8-8.1,26.2-8.1c11.4,0,20.6,3.2,27.4,9.6c6.8,6.4,10.3,14.5,10.3,24.1\n\n	c0,5.2-1,10.3-2.8,15.1c-1.8,4.6-4.7,9.5-8.6,14.4c-2.6,3.3-7,7.8-13.5,13.7c-4.2,3.8-6.9,6.4-8.7,8.2h33.6V211.4z M391.6,201.4\n\n	h58.1v-8.3H407l4.3-7.5c1.2-2.1,2.7-4.2,4.6-6.3c1.8-2,5.8-5.9,12.2-11.7c6-5.5,10.2-9.7,12.4-12.5c3.3-4.2,5.7-8.2,7.2-11.9\n\n	c1.4-3.6,2.1-7.4,2.1-11.4c0-6.8-2.3-12.3-7.1-16.8c-4.9-4.6-11.6-6.8-20.5-6.8c-8.2,0-14.8,2-20.1,6.1c-4.1,3.1-6.9,8.1-8.3,14.9\n\n	l9.5,1c0.9-4.5,2.5-7.9,5-10.4c3.4-3.5,7.9-5.2,13.4-5.2c5.5,0,10,1.7,13.3,5c3.3,3.3,5,7.9,5,13.7c0,5-1.7,10-4.9,14.8\n\n	c-1.5,2.1-4.8,6.2-17.1,17.7c-10.6,9.9-17.8,17.8-21.3,23.6C394.4,193.2,392.7,197.2,391.6,201.4z"/>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\surface.svg"*/
        })
    ], SvgSurfaceComponent);
    return SvgSurfaceComponent;
}());

//# sourceMappingURL=svg-surface.component.js.map

/***/ }),

/***/ 681:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="damaged-cladding"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\damage-cladding.svg"*/'<svg id="damage-cladding" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47,181c-17,0-25,31-25,60s8,60,25,60,25-31,25-60S64,181,47,181Zm0,106c-3-2-11-17-11-46s8-44,11-46,11,17,11,46S50,285,47,287Z" transform="translate(-1 -1)" fill="#211915"/><path d="M478,134H443l-9-15c-17-27-39-44-64-50h0L343,87l-35-9-23,34-13,4L248,89,213,67H137c-12,1-24,8-35,20s-20,28-28,48H44C17,138,2,190,2,239S17,339,43,344H75c15,40,38,64,63,66h70l23-17,41,8,22-34,13-4,24,28,33,20h1c26-4,51-22,69-51l8-14h35c4-2,35-18,35-105S479,135,478,134ZM48,330H46c-13-2-29-36-29-91s18-91,30-91,30,34,30,91S61,328,48,330Zm22,0c14-19,21-56,21-91s-7-72-22-91h45c5,4,37,27,37,93s-32,85-36,89H70Zm72,66c-21,0-40-19-54-52h33c4-2,46-15,46-102s-44-105-45-106H87c14-34,34-54,55-54,41,0,73,71,73,158S183,396,142,396Zm224-1-26-15-28-33-26,9-20,31-38-7-24,18H176c10-9,19-21,27-38,15-32,24-75,24-120s-9-88-24-120c-8-16-17-29-27-38h35l29,18,28,33,26-9,20-30,32,8,27-18c46,14,81,78,81,155S415,385,366,394Zm107-64H449c12-27,18-59,18-93s-6-64-17-91h22c5,4,26,26,26,92S477,327,472,331Z" transform="translate(-1 -1)" fill="#211915"/></svg>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\damage-cladding.svg"*/
        })
    ], SvgDamagedCladdingComponent);
    return SvgDamagedCladdingComponent;
}());

//# sourceMappingURL=svg-damaged-cladding.component.js.map

/***/ }),

/***/ 682:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="damaged-insulation"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\damage-insulation.svg"*/'<svg id="damage-insulation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47,181c-17,0-25,31-25,60s8,60,25,60,25-31,25-60S64,181,47,181Zm0,106c-3-2-11-17-11-46s8-44,11-46,11,17,11,46S50,285,47,287Z" transform="translate(0 0)" fill="#211915"/><path d="M477,134H442l-9-15c-17-26-39-43-62-49H322L304,94l-8,30-14,10H270v-4l-5-2c-14-4-32-15-35-22h0L214,67H137c-12,1-24,8-35,20s-20,28-28,48H44C17,138,2,190,2,239S17,339,43,344H75c15,40,38,64,63,66H353c31,0,59-18,81-51l8-14h35c4-2,35-18,35-105S478,135,477,134Zm-170-3,9-32,13-18h34l-12,25,8,28H303Zm-39,16h95l-17,40-37,45H281l-21-35ZM48,330H46c-13-2-29-36-29-91s18-91,30-91,30,34,30,91S61,328,48,330Zm22,0c14-19,21-56,21-91s-7-72-22-91h45c5,4,37,27,37,93s-32,85-36,89H70Zm72,66c-21,0-40-19-54-52h33c4-2,46-15,46-102s-44-105-45-106H87c14-34,34-54,55-54,41,0,73,71,73,158S183,396,142,396Zm211,0H176c10-9,19-21,27-38,15-32,24-75,24-120s-9-88-24-120c-8-16-17-29-27-38h30l13,31c4,13,26,23,38,28l-10,60,27,45,41,2,43-52,20-46-12-41,11-23c43,17,76,79,76,153C452,325,407,396,353,396Zm119-65H448c12-27,18-59,18-93s-6-64-17-91h22c5,4,26,26,26,92S476,327,471,331Z" transform="translate(0 0)" fill="#211915"/></svg>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\damage-insulation.svg"*/
        })
    ], SvgDamagedInsulationComponent);
    return SvgDamagedInsulationComponent;
}());

//# sourceMappingURL=svg-damaged-insulation.component.js.map

/***/ }),

/***/ 683:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="energy"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\electrical.svg"*/'<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>electrical</title><path d="M32,188a110,110,0,0,0,116,25L299,364A110,110,0,0,0,402,512h0a111,111,0,0,0,46-10,10,10,0,0,0,3-16l-40-40,3-33,33-3,40,40a10,10,0,0,0,16-3,110,110,0,0,0-22-123,110,110,0,0,0-116-25L213,148A110,110,0,0,0,110,0h0A111,111,0,0,0,64,10a10,10,0,0,0-3,16l40,40L98,99l-33,3L26,61a10,10,0,0,0-16,3A110,110,0,0,0,32,188Zm76-70a10,10,0,0,0,9-9l4-46a10,10,0,0,0-3-8L86,23a91,91,0,0,1,24-3,90,90,0,0,1,82,126,10,10,0,0,0,2,11L355,318a10,10,0,0,0,11,2A90,90,0,0,1,489,426l-32-32a10,10,0,0,0-8-3l-46,4a10,10,0,0,0-9,9l-4,46a10,10,0,0,0,3,8l32,32a91,91,0,0,1-24,3,90,90,0,0,1-82-126,10,10,0,0,0-2-11L157,194a10,10,0,0,0-11-2A90,90,0,0,1,23,86l32,32a10,10,0,0,0,8,3" fill="#050206"/><path d="M108,389h40a9,9,0,0,0,7-4,8,8,0,0,0,0-8L89,247h0a8,8,0,0,0-7-4H12a8,8,0,0,0-7,4,7,7,0,0,0,0,8l48,76H8a8,8,0,0,0-7,5,8,8,0,0,0,1,8H2L142,509h0l6,2h4c3-2,4-6,3-9ZM25,346H68a8,8,0,0,0,7-4,7,7,0,0,0,0-8L27,258H78l58,116H96a9,9,0,0,0-6,3h0a8,8,0,0,0-1,7l32,75Z" fill="#010002"/><path d="M387,70a11,11,0,0,0-11,11v53a68,68,0,0,0,57,67c2,36,43,69,80,69V245c-24,0-55-20-57-43a68,68,0,0,0,57-67V81a11,11,0,0,0-11-11H490V11a11,11,0,1,0-23,0V70H420V11a11,11,0,1,0-23,0V70H387Zm12,64V93h91v41a45,45,0,0,1-45,45h0a45,45,0,0,1-45-45h0Z" fill="#030104"/></svg>'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\electrical.svg"*/
        })
    ], SvgEnergyComponent);
    return SvgEnergyComponent;
}());

//# sourceMappingURL=svg-energy.component.js.map

/***/ }),

/***/ 684:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="insulated-surface"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\surface-insulate.svg"*/'<svg version="1.1" id="surface" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<path d="M379.7,375.5h-45.2V239c0-13.5-1.1-23.2-3.1-28.8c-1.9-5.2-5.3-9.3-10.5-12.5c-5.2-3.3-11.4-4.9-18.6-4.9\n\n	c-13.4,0-24.2,4.3-33,13.2c-8.7,8.7-13.1,23.3-13.1,43.4v126.3h-45.4V234.8c0-14.6-2.6-25.5-7.7-32.4c-4.8-6.6-12.8-9.8-24.3-9.8\n\n	c-9,0-17.4,2.4-25,7.1c-7.6,4.7-12.9,11.4-16.3,20.5c-3.6,9.5-5.4,23.6-5.4,41.9v113.3H86.8V156.7h41.6v19.8\n\n	c5.4-5.7,11.6-10.5,18.7-14.6c11.6-6.6,24.9-10,39.6-10c16.4,0,30.1,3.5,40.8,10.4c8.3,5.4,14.8,12.5,19.3,21.2\n\n	c16.7-21,38-31.6,63.4-31.6c22,0,39.3,6.3,51.4,18.7c12,12.4,18.1,31.4,18.1,56.5V375.5z M344.5,365.5h25.2V227.2\n\n	c0-22.4-5.1-39-15.3-49.5c-10.1-10.4-25-15.7-44.2-15.7c-24.9,0-44.7,11.2-60.3,34.4l-5.6,8.2l-3.3-9.4\n\n	c-3.7-10.6-9.9-18.5-18.9-24.4c-9-5.9-20.9-8.8-35.3-8.8c-12.9,0-24.6,2.9-34.7,8.7c-10.1,5.8-18.3,13.5-24.4,23l-9.2,14.4v-41.4\n\n	H96.8v198.8h25.4V262.2c0-19.8,2-34.6,6-45.4c4.2-11.1,11-19.7,20.4-25.5c9.2-5.7,19.4-8.6,30.3-8.6c14.7,0,25.6,4.7,32.3,13.8\n\n	c6.4,8.7,9.6,21.6,9.6,38.3v130.6h25.4V249.2c0-22.8,5.4-39.7,16-50.4c10.6-10.7,24.1-16.1,40.1-16.1c9,0,17.1,2.2,23.9,6.5\n\n	c7,4.4,11.8,10.3,14.5,17.5c2.5,6.9,3.7,17.4,3.7,32.3V365.5z"/>\n\n<path d="M459.8,211.4h-79.7l0.6-5.5c0.8-7.6,3.3-14.9,7.4-21.7c4-6.7,11.6-15.1,23-25.7c10.7-9.9,14.4-14.2,15.6-16\n\n	c2.1-3.2,3.2-6.3,3.2-9.2c0-3-0.7-5.2-2.1-6.6c-1.4-1.4-3.4-2.1-6.3-2.1c-3.7,0-5.3,1.3-6.3,2.2c-1.1,1.1-2.4,3.6-2.8,9.2l-0.3,5.2\n\n	l-29.8-3l0.5-5c1.3-12.2,5.7-21.2,12.9-26.8c7-5.4,15.8-8.1,26.2-8.1c11.4,0,20.6,3.2,27.4,9.6c6.8,6.4,10.3,14.5,10.3,24.1\n\n	c0,5.2-1,10.3-2.8,15.1c-1.8,4.6-4.7,9.5-8.6,14.4c-2.6,3.3-7,7.8-13.5,13.7c-4.2,3.8-6.9,6.4-8.7,8.2h33.6V211.4z M391.6,201.4\n\n	h58.1v-8.3H407l4.3-7.5c1.2-2.1,2.7-4.2,4.6-6.3c1.8-2,5.8-5.9,12.2-11.7c6-5.5,10.2-9.7,12.4-12.5c3.3-4.2,5.7-8.2,7.2-11.9\n\n	c1.4-3.6,2.1-7.4,2.1-11.4c0-6.8-2.3-12.3-7.1-16.8c-4.9-4.6-11.6-6.8-20.5-6.8c-8.2,0-14.8,2-20.1,6.1c-4.1,3.1-6.9,8.1-8.3,14.9\n\n	l9.5,1c0.9-4.5,2.5-7.9,5-10.4c3.4-3.5,7.9-5.2,13.4-5.2c5.5,0,10,1.7,13.3,5c3.3,3.3,5,7.9,5,13.7c0,5-1.7,10-4.9,14.8\n\n	c-1.5,2.1-4.8,6.2-17.1,17.7c-10.6,9.9-17.8,17.8-21.3,23.6C394.4,193.2,392.7,197.2,391.6,201.4z"/>\n\n<path d="M487,432H44V67h443V432z M54,422h423V77H54V422z"/>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\surface-insulate.svg"*/
        })
    ], SvgInsulatedSurfaceComponent);
    return SvgInsulatedSurfaceComponent;
}());

//# sourceMappingURL=svg-insulated-surface.component.js.map

/***/ }),

/***/ 685:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="others"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\question.svg"*/'<svg version="1.1" id="others" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<style type="text/css">\n\n	.st0{font-family:\'ArialMT\';}\n\n	.st1{font-size:150px;}\n\n	.st2{font-size:70px;}\n\n</style>\n\n<path d="M272.6,340.1c-5.8-5.8-13.7-9-21.5-9s-15.7,3.2-21.5,9c-5.8,5.8-9,13.7-9,21.5s3.2,15.7,9,21.5c5.8,5.8,13.7,9,21.5,9\n\n	s15.7-3.2,21.5-9c5.8-5.8,9-13.7,9-21.5C281.6,353.8,278.4,345.9,272.6,340.1z M265.4,375.8c-3.7,3.7-9,5.8-14.1,5.8\n\n	s-10.6-2.1-14.1-5.8c-3.7-3.7-5.8-9-5.8-14.1c0-5.1,2.1-10.6,5.8-14.1c3.7-3.7,9-5.8,14.1-5.8s10.6,2.1,14.1,5.8s5.8,8.8,5.8,14.1\n\n	S269.1,372.3,265.4,375.8z"/>\n\n<path d="M372.7,143.6C372.7,76.1,317.9,22,251.1,22c-67.5,0-121.6,54.8-121.6,121.6c0,16.9,13.7,30.5,30.5,30.5s30.5-13.7,30.5-30.5\n\n	c0-33.1,26.8-60.1,60.1-60.1c33.1,0,60.1,26.8,60.1,60.1s-26.8,60.1-60.1,60.1c-16.9,0-30.5,13.7-30.5,30.5v46.3\n\n	c0,16.9,13.7,30.5,30.5,30.5s30.5-13.7,31.7-30.5v-19.4h-0.2C336.4,247.9,372.7,201,372.7,143.6z M274.5,251.6c-2.4,0.5-4,2.6-4,5.3\n\n	v23.1c0,11.1-9,20.1-20.1,20.1c-11.1,0-20.1-9-20.1-20.1v-46.3c0-11.1,9-20.1,20.1-20.1c39,0,70.5-31.7,70.5-70.5\n\n	s-31.7-70.5-70.5-70.5s-70.5,31.7-71.7,71c0,11.1-9,20.1-20.1,20.1c-11.1,0-20.1-9-20.1-20.1c0-61.5,50-111.2,111.2-111.2\n\n	c61.5,0,111.2,50,111.2,111.2C361,197.3,326.3,241,274.5,251.6z"/>\n\n<text transform="matrix(1 0 0 1 345 481.5)" class="st0 st1">m</text>\n\n<text transform="matrix(1 0 0 1 460 434.5)" class="st0 st2">2</text>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\question.svg"*/
        })
    ], SvgOthersComponent);
    return SvgOthersComponent;
}());

//# sourceMappingURL=svg-others.component.js.map

/***/ }),

/***/ 686:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="insulated-others"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\others-insulation.svg"*/'<svg id="others-insulation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>others-insultation</title><path d="M328,245V221l-43,21V229l31-17-31-16v-7H273l-9-5-6,11,15,8v20l-14,8,3,6-31-15v25H136V221L93,242V229l32-18L93,195v-7H81l-8-4-6,11,14,7v20l-14,8,4,6L39,221v25H2V511H363V245H328Zm-35,6,23-11v23l-23-12h0Zm-8-42,6,3-6,3v-6Zm-12,27v6l-5-3Zm-30,4,23,11h0l-23,12V240ZM101,251l23-11v23l-23-12h0Zm-8-43,7,3-7,4v-7ZM81,236v5l-5-2Zm-30,4,23,11h0L51,263V240ZM14,257H39v26l48-25,48,25V257h40V368H151l24,49-24,49h25v33H14V257ZM170,454l11-23,12,23H170Zm0-74h23l-12,23ZM351,499H188V466h25l-22-43h25v9h12v-9h8V411h-8V401H216v10H192l22-43H188V257h43v26l48-25,48,25V257h23V499Z" fill="#211915"/><path d="M334,44" fill="none" stroke="#201813" stroke-miterlimit="10" stroke-width="6"/><path d="M334,44" fill="#fff" stroke="#201813" stroke-miterlimit="10" stroke-width="6"/><path d="M241,137c-10,0-15-18-15-35s5-35,15-35,15,18,15,35S251,137,241,137Zm0-62c-2,1-6,10-6,27s5,26,6,27,6-10,6-27S243,77,241,76Z" fill="#201813"/><path d="M392,118" fill="none" stroke="#201813" stroke-miterlimit="10" stroke-width="6"/><path d="M364,71" fill="none" stroke="#201813" stroke-miterlimit="10" stroke-width="6"/><path d="M489,40H453C440,16,422,2,402,2H332c-20,0-39,14-51,38H240c-16,2-25,33-25,62s9,61,26,61h40c12,24,30,38,51,38h70c21,0,39-15,51-37h35s21-13,21-62S490,41,489,40ZM402,11c18,0,34,13,45,36H386c-8-16-18-28-29-36h44Zm46,44L436,67l-65,2,15-15h62ZM332,11c19,0,37,15,47,40L366,64c-8-15-20-23-33-23H290C300,21,315,11,332,11ZM222,103c0-33,12-53,19-53s17,20,17,53-10,52-17,52S222,136,222,103Zm68,60h42c17,0,32-15,38-38l17-2c-6,41-29,70-56,70C316,193,301,182,290,163Zm112,30H358c19-13,34-38,38-71h61C451,162,428,193,402,193Zm84-37H457a133,133,0,0,0,9-39v-5l-70,2-34,3v3c-5,21-17,35-31,35H255c9-11,13-33,13-53s-5-42-13-53h78c12,0,22,9,28,23l2,6,77-2,19-20h0l-2-6h29c3,3,15,13,15,53S489,154,486,155Z" fill="#201813"/></svg>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\others-insulation.svg"*/
        })
    ], SvgInsulatedOthersComponent);
    return SvgInsulatedOthersComponent;
}());

//# sourceMappingURL=svg-insulated-others.component.js.map

/***/ }),

/***/ 687:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="area-cilinder"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\surface-cilinder.svg"*/'<svg id="cilinder" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><ellipse cx="261" cy="433" rx="181" ry="58" fill="none" stroke="#211915" stroke-miterlimit="10" stroke-width="10"/><line x1="261" y1="442" x2="261" y2="75" fill="none" stroke="#c23334" stroke-miterlimit="10" stroke-width="10"/><line x1="438" y1="79" x2="257" y2="79" fill="none" stroke="#c23334" stroke-miterlimit="10" stroke-width="10"/><ellipse cx="261" cy="75" rx="181" ry="58" fill="none" stroke="#211915" stroke-miterlimit="10" stroke-width="10"/><line x1="80" y1="75" x2="80" y2="433" fill="none" stroke="#211915" stroke-miterlimit="10" stroke-width="10"/><line x1="442" y1="75" x2="442" y2="433" fill="none" stroke="#211915" stroke-miterlimit="10" stroke-width="10"/><text transform="translate(323 65)" font-size="57.6" fill="#c13234" stroke="#c13234" font-family="Myriad Pro">r</text><text transform="translate(273 270)" font-size="57.6" fill="#c13234" stroke="#c13234" font-family="Myriad Pro">h</text></svg>\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\surface-cilinder.svg"*/
        })
    ], SvgCilinderAreaComponent);
    return SvgCilinderAreaComponent;
}());

//# sourceMappingURL=svg-cilinder-area.component.js.map

/***/ }),

/***/ 688:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="area-cube"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\surface-cube.svg"*/'<svg version="1.1" id="cube" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<style type="text/css">\n\n	.st0{fill:none;stroke:#211915;stroke-width:10;stroke-miterlimit:10;}\n\n	.st1{fill:none;stroke:#C23334;stroke-width:10;stroke-miterlimit:10;}\n\n	.st2{fill:#C23334;}\n\n	.st3{font-family:\'ArialMT\';}\n\n	.st4{font-size:57.6px;}\n\n</style>\n\n<rect x="149.8" y="16" class="st0" width="355.2" height="355.5"/>\n\n<rect x="37.9" y="104.6" class="st0" width="355.2" height="355.5"/>\n\n<line class="st0" x1="392.2" y1="106.5" x2="505.1" y2="16"/>\n\n<line class="st0" x1="35.9" y1="104.6" x2="146.9" y2="16"/>\n\n<line class="st1" x1="37.9" y1="460.8" x2="149.8" y2="371.2"/>\n\n<line class="st0" x1="396" y1="460.8" x2="507" y2="371.2"/>\n\n<line class="st1" x1="34" y1="459.8" x2="399" y2="459.8"/>\n\n<line class="st1" x1="37.9" y1="460.8" x2="37.9" y2="103.6"/>\n\n<text transform="matrix(1 0 0 1 210 500)" class="st2 st3 st4">a</text>\n\n<text transform="matrix(1 0 0 1 80 395)" class="st2 st3 st4">b</text>\n\n<text transform="matrix(1 0 0 1 1 269)" class="st2 st3 st4">h</text>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\surface-cube.svg"*/
        })
    ], SvgCubeAreaComponent);
    return SvgCubeAreaComponent;
}());

//# sourceMappingURL=svg-cube-area.component.js.map

/***/ }),

/***/ 689:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="area-circle"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\surface-circle.svg"*/'<svg id="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>surface-circle</title><rect width="512" height="512" fill="none"/><line x1="496" y1="258" x2="252" y2="258" fill="none" stroke="#c23334" stroke-miterlimit="10" stroke-width="10"/><circle cx="258" cy="256" r="240" fill="none" stroke="#211915" stroke-miterlimit="10" stroke-width="10"/><text transform="translate(360 235)" font-size="57.6" fill="#c13234" stroke="#c13234" font-family="Myriad Pro">r</text></svg>'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\surface-circle.svg"*/
        })
    ], SvgCircleAreaComponent);
    return SvgCircleAreaComponent;
}());

//# sourceMappingURL=svg-circle-area.component.js.map

/***/ }),

/***/ 690:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="housekeeping"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\housekeeping.svg"*/'<svg version="1.1" id="housekeeping" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"\n\n	 y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<g>\n\n	<g>\n\n		<path d="M78.6,422.8c-5.5,0-10,4.5-10,10v0.4c0,5.5,4.5,10,10,10c5.5,0,10-4.5,10-10v-0.4C88.6,427.2,84.1,422.8,78.6,422.8z"/>\n\n	</g>\n\n</g>\n\n<g>\n\n	<g>\n\n		<path d="M268.9,422.8c-5.5,0-10,4.5-10,10v0.4c0,5.5,4.5,10,10,10s10-4.5,10-10v-0.4C278.9,427.2,274.5,422.8,268.9,422.8z"/>\n\n	</g>\n\n</g>\n\n<g>\n\n	<g>\n\n		<path d="M481,156.4h-7.7c-2.2-10-7.8-18.9-16.1-25.4c-8.3-6.6-18.5-9.9-28.7-9.7c-6.6-17-23.2-28.9-42.1-28.9\n\n			c-11.2,0-21.7,4.1-29.8,11.3c-8.9-7.1-21.2-11.3-34.1-11.3c-14.4,0-35.9,8.7-46,23.4c-15.4-3.8-31.6-0.8-44.1,8.5\n\n			c-8.4,6.2-14.1,14.6-16.7,24.2V27.4c0-15.1-12.3-27.4-27.4-27.4h-34.5c-15.1,0-27.4,12.3-27.4,27.4v242h-17.2c-5.5,0-10,4.5-10,10\n\n			v42.5H55.3c-14.2,0-20.2,11.3-23.7,18.1l-15.5,29.6c-3,5.6-4.7,15.1,0.1,23c1.3,2.2,3.8,5.2,8,7.4l-12.3,41.9\n\n			c-5.9,17.5-10.7,41.5-0.6,56.8c3.6,5.5,10.7,12.2,24.3,13.3c0.3,0,0.5,0,0.8,0h274.8c0.3,0,0.5,0,0.8,0c4.6-0.4,8.5-1.4,11.7-2.8\n\n			h103.4c15.7,0,28.5-10.6,29.9-24.6L480,247h1c13,0,23.6-10.6,23.6-23.6V180C504.6,167,494,156.4,481,156.4z M244.4,140.4\n\n			c9.1-6.8,22.2-8,33.2-3.1c2.7,1.2,5.7,1.1,8.3-0.1s4.6-3.6,5.4-6.4c2.6-9.3,20.1-18.3,31.3-18.3c10.8,0,21.7,4.9,26,11.6\n\n			c1.8,2.9,5,4.6,8.4,4.6s6.6-1.7,8.4-4.6c4.6-7.2,12.5-11.6,21.1-11.6c12.3,0,23,9.2,24.8,21.4c0.4,2.8,2,5.3,4.3,6.8\n\n			s5.2,2.1,8,1.4c7.5-1.8,15.3-0.1,21.4,4.7c3.3,2.6,5.8,5.9,7.5,9.6H234.5C235.6,150,238.9,144.4,244.4,140.4z M146.5,27.4\n\n			c0-4.1,3.3-7.4,7.4-7.4h34.5c4,0,7.4,3.4,7.4,7.4v242h-49.2V27.4z M119.3,289.4h103.5v32.5H119.3V289.4z M33.8,378.8l15.5-29.6\n\n			c3.5-6.7,4.4-7.4,6-7.4H293c1.7,0,2.6,1,6,7.4l13.6,26c2.1,4,1.9,6,1.6,6.5c-0.3,0.5-1.4,1-2.7,1H311c0,0-0.1,0-0.1,0H36.7\n\n			c-2.3,0-3.2-0.5-3.4-0.6C33.1,381.7,33.2,380.1,33.8,378.8z M319.6,487.6c-1.1,1.6-3.1,3.8-8.8,4.4h-31.4v-27.9\n\n			c0-5.5-4.5-10-10-10s-10,4.5-10,10V492h-75.6v-47.5c0-5.5-4.5-10-10-10c-5.5,0-10,4.5-10,10V492H88.1v-27.9c0-5.5-4.5-10-10-10\n\n			s-10,4.5-10,10V492H36.8c-5.7-0.5-7.8-2.7-8.8-4.4c-4.3-6.5-3.2-21.3,2.9-39.6c0-0.1,0.1-0.2,0.1-0.4l13.2-44.9h259.1l13.2,44.9\n\n			c0,0.1,0.1,0.2,0.1,0.4C322.8,466.3,323.9,481.1,319.6,487.6z M437.1,482.6c-0.3,3.2-4.1,6.5-10,6.5h-86.7\n\n			c4-14.6-0.1-33.1-4.8-47.3l-12.4-42.1c3.3-1.8,6.1-4.4,8-7.6c2.5-4.2,5.8-13.2-1-26.1l-13.6-26c-3.5-6.8-9.5-18.1-23.7-18.1h-50.1\n\n			v-42.5c0-5.5-4.5-10-10-10h-17.2V247h41.2c4.9,37.2,36.8,66,75.3,66c38.5,0,70.4-28.8,75.3-66H460L437.1,482.6z M277.1,247h110.2\n\n			c-4.7,26.1-27.6,46-55.1,46C304.8,293,281.9,273.2,277.1,247z M481,227H215.7v-50.6h8.6c0,0,0,0,0,0c0,0,0,0,0,0H481\n\n			c1.9,0,3.6,1.6,3.6,3.6v43.5h0C484.6,225.4,482.9,227,481,227z"/>\n\n	</g>\n\n</g>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\housekeeping.svg"*/
        })
    ], SvgHousekeepingComponent);
    return SvgHousekeepingComponent;
}());

//# sourceMappingURL=svg-housekeeping.component.js.map

/***/ }),

/***/ 691:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="structural"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\structural.svg"*/'<svg version="1.1" id="structural" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<g>\n\n	<path d="M512,59.2V8.5c0-0.1-0.1-0.2-0.1-0.4c0.2-0.7,0.2-1.5-0.2-2.1l-0.4-0.7c0-0.1-0.1-0.1-0.1-0.2c-0.4-0.8-0.9-1.6-1.5-2.3\n\n		c-0.2-0.2-0.4-0.4-0.7-0.6c-0.5-0.5-1.1-0.9-1.8-1.2c-0.3-0.1-0.5-0.3-0.8-0.4c-0.9-0.4-2-0.6-3-0.6H230.5c-2.3,0-4.4,0.9-6,2.5\n\n		L2.5,224.3l0,0c-0.7,0.7-1.2,1.5-1.6,2.4c-0.4,1-0.6,2-0.7,3.1c0,0.2-0.1,0.3-0.1,0.5v51.2c0,4.7,3.8,8.5,8.5,8.5h64\n\n		c21.2,0,38.4,17.2,38.4,38.4v9.3L2.5,446c-1.6,1.6-2.5,3.8-2.5,6v51.4c0,4.7,3.8,8.5,8.5,8.5h273.1c1.2,0,2.3-0.2,3.3-0.7\n\n		c0.1,0,0.2-0.2,0.3-0.2c0.9-0.4,1.7-1,2.4-1.7l0.1-0.1L458.2,330l51.2-51.3c1.6-1.6,2.5-3.8,2.5-6v-51.3c0-0.1-0.1-0.2-0.1-0.4\n\n		c0.2-0.7,0.2-1.5-0.2-2.1l-0.4-0.8c0-0.1-0.1-0.1-0.1-0.2c-0.8-1.7-2.2-3.2-4-4.1c-0.3-0.1-0.5-0.3-0.8-0.4c-0.9-0.4-2-0.6-3-0.6\n\n		h-64c-0.7,0-1.4,0.2-2.1,0.4c-0.7-0.2-1.4-0.4-2.1-0.4c-19.9-0.1-36.5-15.4-38.1-35.2L509.5,65.3C511.1,63.7,512,61.5,512,59.2z\n\n		 M233.5,17h249.2l-205,205H28.5L233.5,17z M111,362.2v43.4c0,21.2-17.2,38.4-38.4,38.4H29.2L111,362.2z M273,495H17v-34h55.5\n\n		c30.6,0,55.5-24.8,55.5-55.3v-77.5c0-30.5-24.9-55.2-55.5-55.3H17v-34h256v34h-55.5c-30.6,0-55.5,24.8-55.5,55.3v77.5\n\n		c0,30.5,24.9,55.2,55.5,55.3H273V495L273,495z M495,269.4l-48.9,48.9L290,482.2v-26.5L458.3,279l36.7-36.7V269.4L495,269.4z\n\n		 M436.1,230c0.7,0,1.5-0.2,2.1-0.4c0.7,0.2,1.4,0.4,2.1,0.4h41.8l-36.7,36.7L277.6,443h-60.2c-21.2,0-38.3-17.2-38.3-38.3v-76.1\n\n		c0-21.3,17.3-38.5,38.6-38.6H282c2.3,0,4.5-0.9,6.1-2.5l95.5-95.5C391,214.7,412.2,230,436.1,230z M495,56L382.2,168.9l0,0L290,261\n\n		v-27L495,29V56L495,56z"/>\n\n</g>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\structural.svg"*/
        })
    ], SvgStructuralComponent);
    return SvgStructuralComponent;
}());

//# sourceMappingURL=svg-structural.component.js.map

/***/ }),

/***/ 692:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="area-rectangle"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\rectangle.svg"*/'<svg version="1.1" id="cube" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<style type="text/css">\n\n	.st0{fill:none;stroke:#211915;stroke-width:10;stroke-miterlimit:10;}\n\n	.st1{fill:none;stroke:#C23334;stroke-width:10;stroke-miterlimit:10;}\n\n	.st2{fill:#C23334;}\n\n	.st3{font-family:\'ArialMT\';}\n\n	.st4{font-size:57.6px;}\n\n</style>\n\n<rect x="48.8" y="23.2" class="st0" width="436.4" height="436.7"/>\n\n<line class="st1" x1="43.9" y1="459.6" x2="489.2" y2="459.6"/>\n\n<line class="st1" x1="48.8" y1="456.9" x2="48.8" y2="18.1"/>\n\n<text transform="matrix(1 0 0 1 252.0765 500)" class="st2 st3 st4">a</text>\n\n<text transform="matrix(1 0 0 1 11 252.8755)" class="st2 st3 st4">b</text>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\rectangle.svg"*/
        })
    ], SvgRectangleAreaComponent);
    return SvgRectangleAreaComponent;
}());

//# sourceMappingURL=svg-rectangle-area.component.js.map

/***/ }),

/***/ 693:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="like"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\like.svg"*/'<svg version="1.1" id="like" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<path d="M492.8,348.1c10.5-13.4,15.5-27.7,14.9-42.5c-0.6-16.3-7.9-29-13.9-36.8c7-17.3,9.6-44.6-13.6-65.8\n\n	c-17-15.5-45.9-22.5-86-20.6c-28.2,1.3-51.7,6.5-52.7,6.7h-0.1c-5.4,1-11,2.1-16.8,3.4c-0.4-6.9,0.7-23.9,13.4-62.2\n\n	c15-45.6,14.1-80.5-2.8-103.9C317.4,1.9,289,0,280.7,0c-8,0-15.4,3.3-20.7,9.4c-11.9,13.8-10.5,39.3-9,51.1\n\n	c-14.1,37.9-53.7,130.8-87.3,156.6c-0.6,0.4-1.2,1-1.7,1.5c-9.9,10.4-16.5,21.6-21,31.5c-6.3-3.4-13.5-5.4-21.2-5.4H54.5\n\n	c-24.6,0-44.5,20-44.5,44.5v174c0,24.6,20,44.5,44.5,44.5h65.3c9.5,0,18.4-3,25.7-8.1l25.2,3c3.9,0.5,72.4,9.2,142.7,7.8\n\n	c12.7,1,24.7,1.5,35.9,1.5c19.2,0,35.9-1.5,49.8-4.5c32.8-7,55.1-20.9,66.5-41.3c8.7-15.6,8.7-31.2,7.3-41\n\n	c21.3-19.3,25.1-40.6,24.3-55.6C496.7,360.9,494.8,353.5,492.8,348.1z M54.5,478.9c-8.7,0-15.6-7.1-15.6-15.6V289.2\n\n	c0-8.7,7.1-15.6,15.6-15.6h65.3c8.7,0,15.6,7.1,15.6,15.6v174c0,8.7-7.1,15.6-15.6,15.6H54.5V478.9z M465.4,335.6\n\n	c-4.5,4.7-5.4,11.9-1.9,17.5c0,0.1,4.4,7.6,4.9,17.9c0.7,14-6,26.4-20.1,37c-5,3.9-7.1,10.5-4.9,16.5c0,0.1,4.6,14.2-2.9,27.6\n\n	c-7.2,12.8-23.1,22.1-47.3,27.2c-19.4,4.2-45.7,4.9-78.1,2.4c-0.4,0-1,0-1.5,0c-68.8,1.5-138.4-7.5-139.2-7.6h-0.1l-10.8-1.3\n\n	c0.6-3,1-6.2,1-9.4V289.2c0-4.6-0.7-9.1-2-13.3c1.9-7.2,7.3-23.1,19.9-36.7c48.1-38.1,95.1-166.7,97.1-172.3\n\n	c0.9-2.2,1.1-4.7,0.6-7.2c-1.8-12-1.2-26.7,1.4-31c5.7,0.1,21,1.7,30.2,14.5c10.9,15.1,10.5,42.1-1.3,77.8\n\n	c-18,54.5-19.5,83.2-5.2,95.8c7.1,6.3,16.5,6.6,23.3,4.2c6.5-1.5,12.7-2.8,18.6-3.7c0.4-0.1,1-0.2,1.4-0.3\n\n	c32.9-7.2,91.8-11.6,112.2,7.1c17.3,15.8,5,36.8,3.6,39.1c-4,6-2.8,13.8,2.6,18.6c0.1,0.1,11.3,10.7,11.9,24.9\n\n	C479.2,316.2,474.7,325.9,465.4,335.6z"/>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\like.svg"*/
        })
    ], SvgLikeComponent);
    return SvgLikeComponent;
}());

//# sourceMappingURL=svg-like.component.js.map

/***/ }),

/***/ 694:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="increase"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\increase.svg"*/'<svg version="1.1" id="increase" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\n	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n<path d="M497,482h-45V151h45c13.3,0,20-16.1,10.6-25.6l-120-121c-5.9-5.9-15.4-5.9-21.3,0l-120,121c-9.4,9.4-2.7,25.6,10.7,25.6h45\n\n	v90H195c-8.3,0-15,6.7-15,15v75H75c-8.3,0-15,6.7-15,15v136H15c-8.3,0-15,6.7-15,15s6.7,15,15,15h482c8.3,0,15-6.7,15-15\n\n	C512,488.7,505.3,482,497,482z M180,482H90V361h90V482z M302,482h-92V271h92V482z M422,136v346h-90V136c0-8.3-6.7-15-15-15h-24\n\n	l84-84.7l84,84.7h-24C428.7,121,422,127.7,422,136z"/>\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\increase.svg"*/
        })
    ], SvgIncreaseComponent);
    return SvgIncreaseComponent;
}());

//# sourceMappingURL=svg-increase.component.js.map

/***/ }),

/***/ 695:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[svg="empty"]',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\assets\imgs\empty.svg"*/'<svg version="1.1" id="hot-surface" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"\n\n	 y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n\n</svg>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\assets\imgs\empty.svg"*/
        })
    ], SvgEmptyComponent);
    return SvgEmptyComponent;
}());

//# sourceMappingURL=svg-empty.component.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurfaceMaterialPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__const_more_more__ = __webpack_require__(98);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'surface_material' })
    ], SurfaceMaterialPipe);
    return SurfaceMaterialPipe;
}());

//# sourceMappingURL=surface-material.pipe.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_flashlight__ = __webpack_require__(396);
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
    function ToolsComponent(flashlight) {
        this.flashlight = flashlight;
    }
    ToolsComponent.prototype.toggle_light = function () { };
    ToolsComponent.prototype.open_calculator = function () { };
    ToolsComponent.prototype.ngOnInit = function () {
        if (!this.flashlight.isSwitchedOn())
            this.flashlight.switchOn();
        else
            this.flashlight.switchOff();
    };
    ToolsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tools',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\components\tools\tools.component.html"*/'  <button ion-button small icon-only color="light">\n\n    <ion-icon name="ios-calculator" (click)="open_calculator()"></ion-icon>\n\n  </button>\n\n  <button ion-button small icon-only color="light">\n\n    <ion-icon name="ios-sunny" (click)="toggle_light()"></ion-icon>\n\n  </button>'/*ion-inline-end:"D:\Sofware Factory\tbi\src\components\tools\tools.component.html"*/,
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_flashlight__["a" /* Flashlight */]])
    ], ToolsComponent);
    return ToolsComponent;
}());

//# sourceMappingURL=tools.component.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_project__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__project_page_base__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reports__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_unique_device_id__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_licences_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__download_download__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__summary_summary__ = __webpack_require__(179);
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
    function ProjectsPage(navCtrl, navParams, service, platform, alertCtrl, actionSheetCtrl, orientation, licences, uuid, keyboard) {
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
        _this.orientation = "";
        _this.user_name = '';
        _this.top_categories = [];
        // if (!!navParams.get('project')) {
        //   this.open_report(navParams.get('project'));
        // }
        uuid.get()
            .then(function (uuid) { return console.log(uuid); })
            .catch(function (error) { return console.log(error); });
        _this.orientation = orientation.type;
        _this.user_name = _this.navParams.get("user_name") || _this.user_name;
        orientation.onChange().subscribe(function () { return _this.orientation = orientation.type; });
        if (!!navParams.get('summary'))
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__summary_summary__["a" /* SummaryPage */], { project: navParams.get('project') }, { animate: true, direction: 'backward' });
        return _this;
    }
    ProjectsPage.prototype.open_report = function (project) {
        if (this.licences.lock) {
            this.alert_licence();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__reports__["v" /* ReportsPage */], {
                project: project,
                report: null,
                parent: this
            });
        }
    };
    ProjectsPage.prototype.ask_for_action = function (project) {
        var _this = this;
        this.actionSheetCtrl.create({
            //title: 'What would you like to do?',
            cssClass: 'project-action-sheet',
            buttons: [
                {
                    text: 'Report',
                    icon: 'document',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__reports__["v" /* ReportsPage */], {
                            project: project,
                            parent: _this
                        });
                    }
                },
                {
                    text: 'Summary',
                    icon: 'grid',
                    handler: function () {
                        _this.navigate_to_reports(project);
                    }
                },
                {
                    text: 'Edit',
                    icon: 'create',
                    handler: function () {
                        _this.navigate_to_edit(project);
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
            ]
        }).present();
    };
    ProjectsPage.prototype.alert_licence = function () {
        this.alertCtrl.create({
            //title: 'Licence',
            message: 'To create more projects upgrade to Pro or Enterprise version',
            cssClass: 'project-action-sheet',
            buttons: [
                {
                    text: 'Upgrade',
                    handler: function () {
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
        this.load();
    };
    ProjectsPage.prototype.load = function () {
        var _this = this;
        this.service.get_all().then(function (p) {
            _this.projects = p;
            if (!_this.projects.length)
                _this.edit_mode = false;
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__reports__["v" /* ReportsPage */], {
            project: project,
            parent: this
        });
    };
    ProjectsPage.prototype.navigate_to_edit = function (project, event) {
        if (!!event)
            event.stopPropagation();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit__["a" /* EditProjectPage */], {
            project: project,
            parent: this
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__download_download__["a" /* DownloadPage */]);
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
        return this.flatten(project.components.map(function (c) { return c.reports; })).filter(function (r) { return !!r.path.match(new RegExp('(' + type + ')', 'gi')); });
    };
    ProjectsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-project',template:/*ion-inline-start:"D:\Sofware Factory\tbi\src\pages\projects\projects.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title></ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-grid projects>\n\n    <ion-row>\n\n      <ion-col col-xs-3 col-sm-2>\n\n      </ion-col>\n\n      <ion-col col-xs-9 col-sm-10>\n\n        <ion-row no-margin no-padding>\n\n          <ion-col col-12>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row no-margin no-padding>\n\n          <ion-col col-8>\n\n          </ion-col>\n\n          <ion-col svg="insulation" col-sm-1 class="flex bg-gray">\n\n          </ion-col>\n\n          <ion-col svg="safety" col-sm-1 class="flex">\n\n          </ion-col>\n\n          <ion-col svg="maintenance" col-sm-1 class="flex bg-gray">\n\n          </ion-col>\n\n          <ion-col svg="custom" col-sm-1 class="flex">\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngFor="let p of projects">\n\n        <ion-col col-xs-3 col-sm-2 id="project-{{p.id}}" (click)="open_report(p)">\n\n          <img [src]="p.picture">\n\n        </ion-col>\n\n        <ion-col col-xs-9 col-sm-10 (click)="open_report(p)">\n\n          <ion-row no-margin no-padding>\n\n            <ion-col col-12>\n\n              <h1 no-margin>{{p.name}}</h1>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row no-margin no-padding>\n\n            <ion-col col-8>\n\n              <ion-row>\n\n                <h5 col-12 no-margin>Project Leader: {{p.people.leader.name || \'(none)\'}}</h5>\n\n                <h5 col-12 no-margin>Energy Manager: {{p.people.energy_manager.name || \'(none)\'}}</h5>\n\n              </ion-row>\n\n            </ion-col>\n\n            <ion-col col-md-1 class="flex bg-gray">\n\n              <h4 no-margin>{{get_by_type(p, \'pipe|surface|flange|valve\').length}}</h4>\n\n            </ion-col>\n\n            <ion-col col-md-1 class="flex">\n\n              <h4 no-margin>{{get_by_type(p, \'safety\').length}}</h4>\n\n            </ion-col>\n\n            <ion-col col-md-1 class="flex bg-gray">\n\n              <h4 no-margin>{{get_by_type(p, \'mantenance\').length}}</h4>\n\n            </ion-col>\n\n            <ion-col col-md-1 class="flex">\n\n              <h4 no-margin>{{get_by_type(p, \'custom\').length}}</h4>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-12 text-right>\n\n              <button ion-button small pull-right (click)="navigate_to_edit(p, $event)">\n\n                <ion-icon name="create"></ion-icon>Edit\n\n              </button>\n\n              <button ion-button small pull-right color="danger" (click)="this.delete_project(p, $event)">\n\n                <ion-icon name="trash"></ion-icon>Delete\n\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n          <!-- <ion-row no-margin no-padding>\n\n            <ion-col col-12>\n\n              <p no-margin>{{p.desc}}</p>\n\n            </ion-col>\n\n          </ion-row> -->\n\n        </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <div license-alert *ngIf="licences.type==\'BASIC\'" col-6 offset-3>\n\n    <ion-grid no-padding>\n\n      <ion-row no-padding>\n\n        <ion-col col-12 no-padding>\n\n          La versión BASIC solo le permite crear 5 componentes, contrate la versión PRO o ENTERPRISE y disfrute de todas sus ventajas.\n\n        </ion-col>\n\n        <ion-col col-4 offset-8 text-right>\n\n          <button ion-button small round color="light" outline>Upgrade NOW</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-4 text-left>\n\n        <button ion-button small color="light" (click)="create_db()">\n\n          <ion-icon name="md-archive"></ion-icon>Download data\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-4 text-center>\n\n        <tools></tools>\n\n      </ion-col>\n\n      <ion-col col-4 text-right>\n\n        <button ion-button small color="royal" (click)="create()">\n\n          New project\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\Sofware Factory\tbi\src\pages\projects\projects.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_9__services_licences_service__["a" /* LicencesService */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Keyboard */]])
    ], ProjectsPage);
    return ProjectsPage;
}(__WEBPACK_IMPORTED_MODULE_4__project_page_base__["a" /* ProjectPageBase */]));

//# sourceMappingURL=projects.js.map

/***/ }),

/***/ 75:
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

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return More; });
var More = {
    MATERIALS: [
        ['General value  [0.80]', 10000000000, 0.80],
        ['Metallic bright   [0.30]', 10000000001, 0.30],
        ['Metallic   [0.60]', 10000000002, 0.60],
        ['Corroded  [0.80]', 10000000003, 0.80],
        ['Painted  [0.90]', 10000000004, 0.90],
        ['Non metallic  [0.90]', 10000000005, 0.90]
    ],
    TIMES: [
        ['1000 hours', 1000],
        ['2000 hours', 2000],
        ['3000 hours', 3000],
        ['4380 hours (1/2 year)', 4380],
        ['5000 hours', 5000],
        ['6000 hours', 6000],
        ['7000 hours', 7000],
        ['8760 hours (full year)', 8760]
    ]
};
//# sourceMappingURL=more.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Result; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(168);

var Result = /** @class */ (function () {
    function Result(result) {
        this.headLost = new __WEBPACK_IMPORTED_MODULE_0__value__["a" /* Value */]();
        this.savingPotentialMin = new __WEBPACK_IMPORTED_MODULE_0__value__["a" /* Value */]();
        this.savingPotentialMax = new __WEBPACK_IMPORTED_MODULE_0__value__["a" /* Value */]();
        this.advise = '';
        if (!result)
            return;
        Object.assign(this, result);
        this.advise = result.advise;
        this.headLost = new __WEBPACK_IMPORTED_MODULE_0__value__["a" /* Value */](result.headLost);
        this.savingPotentialMin = new __WEBPACK_IMPORTED_MODULE_0__value__["a" /* Value */](result.savingPotentialMin);
        this.savingPotentialMax = new __WEBPACK_IMPORTED_MODULE_0__value__["a" /* Value */](result.savingPotentialMax);
    }
    return Result;
}());

//# sourceMappingURL=result.js.map

/***/ })

},[397]);
//# sourceMappingURL=main.js.map