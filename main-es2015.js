(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _servers_servers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./servers/servers.component */ "./src/app/servers/servers.component.ts");
/* harmony import */ var _channels_channels_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./channels/channels.component */ "./src/app/channels/channels.component.ts");
/* harmony import */ var _schemas_schemas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schemas/schemas.component */ "./src/app/schemas/schemas.component.ts");








class AppComponent {
    constructor() {
        this.title = 'springwolf';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [["fxLayout", "column", "fxLayoutGap", "24px"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-servers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-channels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-schemas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _info_info_component__WEBPACK_IMPORTED_MODULE_3__["InfoComponent"], _servers_servers_component__WEBPACK_IMPORTED_MODULE_4__["ServersComponent"], _channels_channels_component__WEBPACK_IMPORTED_MODULE_5__["ChannelsComponent"], _schemas_schemas_component__WEBPACK_IMPORTED_MODULE_6__["SchemasComponent"]], styles: ["app-header[_ngcontent-%COMP%] {\n    position: fixed;\n    z-index: 100;\n    width: 100%;\n}\n\nmain[_ngcontent-%COMP%] {\n    margin: 0 64px;\n    padding: 64px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTAwO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5tYWluIHtcbiAgICBtYXJnaW46IDAgNjRweDtcbiAgICBwYWRkaW5nOiA2NHB4IDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/__ivy_ngcc__/fesm2015/ngx-highlightjs.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _channels_channel_main_channel_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./channels/channel-main/channel-main.component */ "./src/app/channels/channel-main/channel-main.component.ts");
/* harmony import */ var _channels_channels_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./channels/channels.component */ "./src/app/channels/channels.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _schemas_schema_schema_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./schemas/schema/schema.component */ "./src/app/schemas/schema/schema.component.ts");
/* harmony import */ var _schemas_schemas_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./schemas/schemas.component */ "./src/app/schemas/schemas.component.ts");
/* harmony import */ var _servers_servers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./servers/servers.component */ "./src/app/servers/servers.component.ts");
/* harmony import */ var _shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/asyncapi.service */ "./src/app/shared/asyncapi.service.ts");
/* harmony import */ var _shared_mock_mock_server__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/mock/mock-server */ "./src/app/shared/mock/mock-server.ts");
/* harmony import */ var _shared_publisher_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/publisher.service */ "./src/app/shared/publisher.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_components_json_json_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/components/json/json.component */ "./src/app/shared/components/json/json.component.ts");
/* harmony import */ var _shared_asyncapi_mapper_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/asyncapi-mapper.service */ "./src/app/shared/asyncapi-mapper.service.ts");

























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_17__["AsyncApiService"],
        _shared_asyncapi_mapper_service__WEBPACK_IMPORTED_MODULE_22__["AsyncApiMapperService"],
        _shared_publisher_service__WEBPACK_IMPORTED_MODULE_19__["PublisherService"],
        {
            provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__["HIGHLIGHT_OPTIONS"],
            useValue: {
                languages: function () {
                    return { typescript: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-typescript */ "common").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/typescript */ "./node_modules/highlight.js/lib/languages/typescript.js", 7)) };
                }
            }
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__["HighlightModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
            _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production ? [] : angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["HttpClientInMemoryWebApiModule"].forRoot(_shared_mock_mock_server__WEBPACK_IMPORTED_MODULE_18__["MockServer"], { delay: 100 })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
        _info_info_component__WEBPACK_IMPORTED_MODULE_12__["InfoComponent"],
        _servers_servers_component__WEBPACK_IMPORTED_MODULE_16__["ServersComponent"],
        _channels_channels_component__WEBPACK_IMPORTED_MODULE_10__["ChannelsComponent"],
        _channels_channel_main_channel_main_component__WEBPACK_IMPORTED_MODULE_9__["ChannelMainComponent"],
        _schemas_schemas_component__WEBPACK_IMPORTED_MODULE_15__["SchemasComponent"],
        _schemas_schema_schema_component__WEBPACK_IMPORTED_MODULE_14__["SchemaComponent"],
        _shared_components_json_json_component__WEBPACK_IMPORTED_MODULE_21__["JsonComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__["HighlightModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["HttpClientInMemoryWebApiModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                    _info_info_component__WEBPACK_IMPORTED_MODULE_12__["InfoComponent"],
                    _servers_servers_component__WEBPACK_IMPORTED_MODULE_16__["ServersComponent"],
                    _channels_channels_component__WEBPACK_IMPORTED_MODULE_10__["ChannelsComponent"],
                    _channels_channel_main_channel_main_component__WEBPACK_IMPORTED_MODULE_9__["ChannelMainComponent"],
                    _schemas_schemas_component__WEBPACK_IMPORTED_MODULE_15__["SchemasComponent"],
                    _schemas_schema_schema_component__WEBPACK_IMPORTED_MODULE_14__["SchemaComponent"],
                    _shared_components_json_json_component__WEBPACK_IMPORTED_MODULE_21__["JsonComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                    ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__["HighlightModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
                    _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production ? [] : angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["HttpClientInMemoryWebApiModule"].forRoot(_shared_mock_mock_server__WEBPACK_IMPORTED_MODULE_18__["MockServer"], { delay: 100 })
                ],
                providers: [
                    _shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_17__["AsyncApiService"],
                    _shared_asyncapi_mapper_service__WEBPACK_IMPORTED_MODULE_22__["AsyncApiMapperService"],
                    _shared_publisher_service__WEBPACK_IMPORTED_MODULE_19__["PublisherService"],
                    {
                        provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__["HIGHLIGHT_OPTIONS"],
                        useValue: {
                            languages: function () {
                                return { typescript: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-typescript */ "common").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/typescript */ "./node_modules/highlight.js/lib/languages/typescript.js", 7)) };
                            }
                        }
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/channels/channel-main/channel-main.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/channels/channel-main/channel-main.component.ts ***!
  \*****************************************************************/
/*! exports provided: ChannelMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelMainComponent", function() { return ChannelMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
/* harmony import */ var src_app_shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/asyncapi.service */ "./src/app/shared/asyncapi.service.ts");
/* harmony import */ var src_app_shared_publisher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/publisher.service */ "./src/app/shared/publisher.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _shared_components_json_json_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/json/json.component */ "./src/app/shared/components/json/json.component.ts");
/* harmony import */ var _schemas_schema_schema_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../schemas/schema/schema.component */ "./src/app/schemas/schema/schema.component.ts");














function ChannelMainComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.operation.message.description);
} }
function ChannelMainComponent_app_schema_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-schema", 18);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("schema", ctx_r2.schema);
} }
function ChannelMainComponent_app_schema_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-schema", 18);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("schema", ctx_r3.headers);
} }
class ChannelMainComponent {
    constructor(asyncApiService, publisherService, snackBar) {
        this.asyncApiService = asyncApiService;
        this.publisherService = publisherService;
        this.snackBar = snackBar;
    }
    ngOnInit() {
        this.asyncApiService.getAsyncApi().subscribe(asyncapi => {
            var _a, _b;
            let schemas = asyncapi.components.schemas;
            this.schemaName = this.operation.message.payload.name.slice(this.operation.message.payload.name.lastIndexOf('/') + 1);
            this.schema = schemas.get(this.schemaName);
            this.defaultExample = this.schema.example;
            this.exampleTextAreaLineCount = ((_a = this.defaultExample) === null || _a === void 0 ? void 0 : _a.lineCount) || 0;
            this.headersSchemaName = this.operation.message.headers.name.slice(this.operation.message.headers.name.lastIndexOf('/') + 1);
            this.headers = schemas.get(this.headersSchemaName);
            this.headersExample = this.headers.example;
            this.headersTextAreaLineCount = ((_b = this.headersExample) === null || _b === void 0 ? void 0 : _b.lineCount) || 0;
        });
        this.protocolName = Object.keys(this.operation.bindings)[0];
    }
    recalculateLineCount(field, text) {
        switch (field) {
            case 'example':
                this.exampleTextAreaLineCount = text.split('\n').length;
                break;
            case 'headers':
                this.headersTextAreaLineCount = text.split('\n').length;
                break;
        }
    }
    publish(example) {
        try {
            const json = JSON.parse(example);
            this.publisherService.publish(this.protocolName, this.channelName, json).subscribe(_ => this.handlePublishSuccess(), err => this.handlePublishError(err));
        }
        catch (error) {
            this.snackBar.open('Example payload is not valid', 'ERROR', {
                duration: 3000
            });
        }
    }
    handlePublishSuccess() {
        return this.snackBar.open('Example payload sent to: ' + this.channelName, 'PUBLISHED', {
            duration: 3000
        });
    }
    handlePublishError(err) {
        let msg = 'Publish failed';
        if ((err === null || err === void 0 ? void 0 : err.status) === angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_1__["STATUS"].NOT_FOUND) {
            msg += ': no publisher was provided for ' + this.protocolName;
        }
        return this.snackBar.open(msg, 'ERROR', {
            duration: 4000
        });
    }
}
ChannelMainComponent.ɵfac = function ChannelMainComponent_Factory(t) { return new (t || ChannelMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_2__["AsyncApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_publisher_service__WEBPACK_IMPORTED_MODULE_3__["PublisherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
ChannelMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChannelMainComponent, selectors: [["app-channel-main"]], inputs: { docName: "docName", channelName: "channelName", operation: "operation" }, decls: 34, vars: 15, consts: [[4, "ngIf"], ["animationDuration", "0ms"], ["label", "Example"], ["fxLayout", "column"], ["spellcheck", "false", 3, "rows", "value", "keyup"], ["exampleTextArea", ""], ["fxLayout", "", "fxLayoutGap", "8px"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "cdkCopyToClipboard"], ["label", "Schema"], [1, "payload-name"], [3, "href"], [3, "schema", 4, "ngIf"], ["label", "Headers"], [1, "header-name"], ["headersTextArea", ""], ["label", "Bindings"], [3, "data"], [3, "schema"]], template: function ChannelMainComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChannelMainComponent_div_2_Template, 4, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "textarea", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ChannelMainComponent_Template_textarea_keyup_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.recalculateLineCount("example", _r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelMainComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.publish(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Publish ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelMainComponent_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); _r1.value = ctx.defaultExample.value; return ctx.exampleTextAreaLineCount = ctx.defaultExample.lineCount; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Default ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-tab", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ChannelMainComponent_app_schema_21_Template, 1, 1, "app-schema", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-tab", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ChannelMainComponent_app_schema_28_Template, 1, 1, "app-schema", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "textarea", 4, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ChannelMainComponent_Template_textarea_keyup_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31); return ctx.recalculateLineCount("headers", _r4.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-tab", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-json", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.operation.message.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.exampleTextAreaLineCount)("value", ctx.defaultExample == null ? null : ctx.defaultExample.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkCopyToClipboard", _r1.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.schemaName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.operation.message.payload.anchorUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.operation.message.payload.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.schema);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.headersSchemaName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.operation.message.headers.anchorUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.operation.message.headers.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.headersTextAreaLineCount)("value", ctx.headersExample == null ? null : ctx.headersExample.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.operation.bindings[ctx.protocolName]);
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTab"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_10__["CdkCopyToClipboard"], _shared_components_json_json_component__WEBPACK_IMPORTED_MODULE_11__["JsonComponent"], _schemas_schema_schema_component__WEBPACK_IMPORTED_MODULE_12__["SchemaComponent"]], styles: ["textarea[_ngcontent-%COMP%] {\n    margin-top: 16px;\n    padding: 8px;\n    border-radius: 4px;\n    border-width: 0;\n    line-height: 24px;\n    background-color: #282c34;\n    color: #abb2bf;\n}\n\nbutton[_ngcontent-%COMP%] {\n    margin-top: 8px;\n}\n\n.property-badge[_ngcontent-%COMP%] {\n    background-color: #C5CAE9;\n    border-radius: 4px;\n    padding: 6px;\n    font-size: small;\n    font-weight: bold;\n}\n\n.payload-name[_ngcontent-%COMP%] {\n    background-color: #E0E0E0;\n    border-radius: 4px;\n    padding: 6px;\n    font-weight: normal;\n}\n\n.header-name[_ngcontent-%COMP%] {\n  background-color: #E0E0E0;\n  border-radius: 4px;\n  padding: 6px;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbm5lbHMvY2hhbm5lbC1tYWluL2NoYW5uZWwtbWFpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY2hhbm5lbHMvY2hhbm5lbC1tYWluL2NoYW5uZWwtbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWEge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDtcbiAgICBjb2xvcjogI2FiYjJiZjtcbn1cblxuYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5wcm9wZXJ0eS1iYWRnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M1Q0FFOTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wYXlsb2FkLW5hbWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMEUwRTA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uaGVhZGVyLW5hbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFMEUwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChannelMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-channel-main',
                templateUrl: './channel-main.component.html',
                styleUrls: ['./channel-main.component.css']
            }]
    }], function () { return [{ type: src_app_shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_2__["AsyncApiService"] }, { type: src_app_shared_publisher_service__WEBPACK_IMPORTED_MODULE_3__["PublisherService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, { docName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], channelName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], operation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/channels/channels.component.ts":
/*!************************************************!*\
  !*** ./src/app/channels/channels.component.ts ***!
  \************************************************/
/*! exports provided: ChannelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelsComponent", function() { return ChannelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_models_channel_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/channel.model */ "./src/app/shared/models/channel.model.ts");
/* harmony import */ var _shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/asyncapi.service */ "./src/app/shared/asyncapi.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _channel_main_channel_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./channel-main/channel-main.component */ "./src/app/channels/channel-main/channel-main.component.ts");









const _c0 = function (a0, a1) { return { "publish-badge": a0, "subscribe-badge": a1 }; };
function ChannelsComponent_mat_expansion_panel_16_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function ChannelsComponent_mat_expansion_panel_16_Template_mat_expansion_panel_opened_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const channel_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.setChannelSelection(channel_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-channel-main", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const channel_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", channel_r1.anchorIdentifier)("expanded", ctx_r0.selectedChannel == channel_r1.anchorIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", channel_r1.operation.protocol, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c0, channel_r1.operation.operation === "publish", channel_r1.operation.operation === "subscribe"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", channel_r1.operation.operation, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa ", channel_r1.operation.operation == "publish" ? "fa-arrow-circle-down" : "fa-arrow-circle-up", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](channel_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](channel_r1.operation.message.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("channelName", channel_r1.name)("operation", channel_r1.operation)("docName", ctx_r0.docName);
} }
class ChannelsComponent {
    constructor(asyncApiService, location) {
        this.asyncApiService = asyncApiService;
        this.location = location;
        this.setChannelSelectionFromLocation();
    }
    ngOnInit() {
        this.location.subscribe(() => this.setChannelSelectionFromLocation());
        this.asyncApiService.getAsyncApi().subscribe(asyncapi => {
            this.channels = this.sortChannels(asyncapi.channels);
        });
    }
    sortChannels(channels) {
        return channels.sort((a, b) => {
            if (a.operation.protocol === b.operation.protocol) {
                if (a.operation.operation === b.operation.operation) {
                    if (a.name === b.name) {
                        return a.operation.message.name.localeCompare(b.operation.message.name);
                    }
                    else {
                        return a.name.localeCompare(b.name);
                    }
                }
                else {
                    return a.operation.operation.localeCompare(b.operation.operation);
                }
            }
            else {
                return a.operation.protocol.localeCompare(b.operation.protocol);
            }
        });
    }
    setChannelSelection(channel) {
        window.location.hash = channel.anchorIdentifier;
    }
    setChannelSelectionFromLocation() {
        const anchor = window.location.hash;
        if (anchor.startsWith(_shared_models_channel_model__WEBPACK_IMPORTED_MODULE_1__["CHANNEL_ANCHOR_PREFIX"])) {
            this.selectedChannel = anchor;
        }
    }
}
ChannelsComponent.ɵfac = function ChannelsComponent_Factory(t) { return new (t || ChannelsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_2__["AsyncApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
ChannelsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChannelsComponent, selectors: [["app-channels"]], decls: 17, vars: 1, consts: [["href", "https://www.asyncapi.com/blog/publish-subscribe-semantics", "target", "_blank"], [1, "badge", "publish-badge"], [1, "fa", "fa-arrow-circle-down"], [1, "badge", "subscribe-badge"], [1, "fa", "fa-arrow-circle-up"], [3, "id", "expanded", "opened", 4, "ngFor", "ngForOf"], [3, "id", "expanded", "opened"], ["fxLayout", "", "fxLayoutAlign", "flex-start center", "fxLayoutGap", "16px"], [1, "badge", "protocol-badge"], [1, "badge", 3, "ngClass"], [1, "payload-name"], [3, "channelName", "operation", "docName"]], template: function ChannelsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Channels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Semantics of publish and subscribe:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " publish ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " means publish an event to the channel and this application will receive it ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " means subscribe to this channel to receive events published by this application ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ChannelsComponent_mat_expansion_panel_16_Template, 13, 16, "mat-expansion-panel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.channels);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelTitle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultClassDirective"], _channel_main_channel_main_component__WEBPACK_IMPORTED_MODULE_7__["ChannelMainComponent"]], styles: [".badge[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    padding: 8px;\n    font-size: small;\n    font-weight: bold;\n    display: inline-block;\n}\n\n.subscribe-badge[_ngcontent-%COMP%] {\n    background-color: #FFD580;\n}\n\n.publish-badge[_ngcontent-%COMP%] {\n    background-color: #9BD279;\n}\n\n.protocol-badge[_ngcontent-%COMP%] {\n    background-color: #347AEB;\n    color: #fff\n}\n\n.badge[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n    padding-left: 2 px;\n}\n\nmat-divider[_ngcontent-%COMP%] {\n    height: 20px;\n}\n\n.payload-name[_ngcontent-%COMP%] {\n    background-color: #E0E0E0;\n    border-radius: 4px;\n    padding: 4px;\n    font-weight: normal;\n    font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbm5lbHMvY2hhbm5lbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NoYW5uZWxzL2NoYW5uZWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5iYWRnZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnN1YnNjcmliZS1iYWRnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDU4MDtcbn1cblxuLnB1Ymxpc2gtYmFkZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5QkQyNzk7XG59XG5cbi5wcm90b2NvbC1iYWRnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0N0FFQjtcbiAgICBjb2xvcjogI2ZmZlxufVxuXG4uYmFkZ2UgLmZhIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIgcHg7XG59XG5cbm1hdC1kaXZpZGVyIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5wYXlsb2FkLW5hbWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMEUwRTA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChannelsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-channels',
                templateUrl: './channels.component.html',
                styleUrls: ['./channels.component.css']
            }]
    }], function () { return [{ type: _shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_2__["AsyncApiService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }]; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");




class HeaderComponent {
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 5, vars: 0, consts: [["color", "primary", "fxLayout", "", "fxLayoutAlign", "space-between center"], ["href", "https://github.com/stavshamir/springwolf"], [1, "fa", "fa-github", "fa-2x"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "springwolf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"]], styles: [".logo[_ngcontent-%COMP%] {\n    height: 24px;\n    display:block;\n}\n\na[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: white;\n}\n\na[_ngcontent-%COMP%]:hover {\n    color: lightgray;\n}\n\n.select-doc[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 24px;\n    display:block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgZGlzcGxheTpibG9jaztcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuYTpob3ZlciB7XG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLnNlbGVjdC1kb2Mge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgZGlzcGxheTpibG9jaztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/info/info.component.ts":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/asyncapi.service */ "./src/app/shared/asyncapi.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function InfoComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.info.description);
} }
class InfoComponent {
    constructor(asyncApiService) {
        this.asyncApiService = asyncApiService;
    }
    ngOnInit() {
        this.asyncApiService.getAsyncApi().subscribe(asyncapi => {
            this.asyncApiData = asyncapi;
            this.info = asyncapi.info;
        });
    }
    download() {
        var json = JSON.stringify(this.asyncApiData, null, 2);
        var bytes = new TextEncoder().encode(json);
        var blob = new Blob([bytes], { type: 'application/json' });
        var url = window.URL.createObjectURL(blob);
        window.open(url);
        return false;
    }
}
InfoComponent.ɵfac = function InfoComponent_Factory(t) { return new (t || InfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_1__["AsyncApiService"])); };
InfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoComponent, selectors: [["app-info"]], decls: 7, vars: 3, consts: [["href", "javascript:void(0);", 3, "click"], [4, "ngIf"]], template: function InfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoComponent_Template_a_click_4_listener() { return ctx.download(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "AsyncAPI JSON file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InfoComponent_p_6_Template, 2, 1, "p", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info == null ? null : ctx.info.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" API VERSION ", ctx.info == null ? null : ctx.info.version, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info == null ? null : ctx.info.description);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm8vaW5mby5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info',
                templateUrl: './info.component.html',
                styleUrls: ['./info.component.css']
            }]
    }], function () { return [{ type: _shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_1__["AsyncApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");













const modules = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__["ClipboardModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"]
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [modules,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__["ClipboardModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__["ClipboardModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__["ClipboardModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: modules,
                exports: modules
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/schemas/schema/schema.component.ts":
/*!****************************************************!*\
  !*** ./src/app/schemas/schema/schema.component.ts ***!
  \****************************************************/
/*! exports provided: SchemaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemaComponent", function() { return SchemaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");





function SchemaComponent_tr_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SchemaComponent_tr_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const property_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](property_r1.value.type);
} }
function SchemaComponent_tr_2_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const property_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", property_r1.value.anchorUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](property_r1.value.name);
} }
function SchemaComponent_tr_2_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const property_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", property_r1.value.format, ")");
} }
function SchemaComponent_tr_2_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const property_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("example: ", property_r1.value.example.value, "");
} }
function SchemaComponent_tr_2_mat_select_11_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const enum_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", enum_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](enum_r13);
} }
function SchemaComponent_tr_2_mat_select_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SchemaComponent_tr_2_mat_select_11_mat_option_1_Template, 2, 2, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const property_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", property_r1.value.enum);
} }
function SchemaComponent_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SchemaComponent_tr_2_span_3_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SchemaComponent_tr_2_span_5_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SchemaComponent_tr_2_span_6_Template, 3, 2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SchemaComponent_tr_2_span_7_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SchemaComponent_tr_2_span_10_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SchemaComponent_tr_2_mat_select_11_Template, 2, 1, "mat-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const property_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", property_r1.key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.schema.required == null ? null : ctx_r0.schema.required.includes(property_r1.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", property_r1.value.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", property_r1.value.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", property_r1.value.format);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](property_r1.value.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", property_r1.value.example);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", property_r1.value.enum);
} }
class SchemaComponent {
}
SchemaComponent.ɵfac = function SchemaComponent_Factory(t) { return new (t || SchemaComponent)(); };
SchemaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SchemaComponent, selectors: [["app-schema"]], inputs: { schema: "schema" }, decls: 4, vars: 3, consts: [[1, "schema"], [4, "ngFor", "ngForOf"], [1, "key"], ["class", "required", 4, "ngIf"], ["class", "type", 4, "ngIf"], ["class", "format", 4, "ngIf"], [1, "description"], ["class", "example", 4, "ngIf"], ["placeholder", "Enum", 4, "ngIf"], [1, "required"], [1, "type"], [3, "href"], [1, "format"], [1, "example"], ["placeholder", "Enum"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SchemaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SchemaComponent_tr_2_Template, 12, 8, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.schema == null ? null : ctx.schema.properties));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"]], styles: [".schema[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n}\r\n\r\n.key[_ngcontent-%COMP%] {\r\n  width: 12em;\r\n  vertical-align: top;\r\n}\r\n\r\n.required[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\r\n\r\n.type[_ngcontent-%COMP%] {\r\n  color: #55A;\r\n}\r\n\r\n.example[_ngcontent-%COMP%] {\r\n  color: #6B6B6B;\r\n  font-style: italic;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NoZW1hcy9zY2hlbWEvc2NoZW1hLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NjaGVtYXMvc2NoZW1hL3NjaGVtYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjaGVtYSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmtleSB7XHJcbiAgd2lkdGg6IDEyZW07XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLnJlcXVpcmVkIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4udHlwZSB7XHJcbiAgY29sb3I6ICM1NUE7XHJcbn1cclxuXHJcbi5leGFtcGxlIHtcclxuICBjb2xvcjogIzZCNkI2QjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchemaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-schema',
                templateUrl: './schema.component.html',
                styleUrls: ['./schema.component.css']
            }]
    }], null, { schema: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/schemas/schemas.component.ts":
/*!**********************************************!*\
  !*** ./src/app/schemas/schemas.component.ts ***!
  \**********************************************/
/*! exports provided: SchemasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemasComponent", function() { return SchemasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/asyncapi.service */ "./src/app/shared/asyncapi.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _schema_schema_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schema/schema.component */ "./src/app/schemas/schema/schema.component.ts");






function SchemasComponent_mat_expansion_panel_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function SchemasComponent_mat_expansion_panel_3_Template_mat_expansion_panel_opened_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const schema_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.setSchemaSelection(schema_r1.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-schema", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const schema_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", schema_r1.value.anchorIdentifier)("expanded", ctx_r0.selectedSchema == schema_r1.value.anchorIdentifier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schema_r1.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", schema_r1.value.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("schema", schema_r1 == null ? null : schema_r1.value);
} }
class SchemasComponent {
    constructor(asyncApiService, location) {
        this.asyncApiService = asyncApiService;
        this.location = location;
        this.setSchemaSelectionFromLocation();
    }
    ngOnInit() {
        this.location.subscribe(() => this.setSchemaSelectionFromLocation());
        this.asyncApiService.getAsyncApi().subscribe(asyncapi => this.schemas = asyncapi.components.schemas);
    }
    setSchemaSelection(schema) {
        window.location.hash = schema.anchorIdentifier;
    }
    setSchemaSelectionFromLocation() {
        this.selectedSchema = window.location.hash;
    }
}
SchemasComponent.ɵfac = function SchemasComponent_Factory(t) { return new (t || SchemasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_1__["AsyncApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
SchemasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SchemasComponent, selectors: [["app-schemas"]], decls: 5, vars: 3, consts: [[3, "id", "expanded", "opened", 4, "ngFor", "ngForOf"], [3, "id", "expanded", "opened"], [3, "schema"]], template: function SchemasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Schemas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SchemasComponent_mat_expansion_panel_3_Template, 8, 5, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx.schemas));
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelDescription"], _schema_schema_component__WEBPACK_IMPORTED_MODULE_4__["SchemaComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"]], styles: ["h3[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NoZW1hcy9zY2hlbWFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9zY2hlbWFzL3NjaGVtYXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchemasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-schemas',
                templateUrl: './schemas.component.html',
                styleUrls: ['./schemas.component.css']
            }]
    }], function () { return [{ type: _shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_1__["AsyncApiService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }]; }, null); })();


/***/ }),

/***/ "./src/app/servers/servers.component.ts":
/*!**********************************************!*\
  !*** ./src/app/servers/servers.component.ts ***!
  \**********************************************/
/*! exports provided: ServersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServersComponent", function() { return ServersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/asyncapi.service */ "./src/app/shared/asyncapi.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");





function ServersComponent_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const server_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](server_r1.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", server_r1.value.url, " ");
} }
class ServersComponent {
    constructor(asyncApiService) {
        this.asyncApiService = asyncApiService;
    }
    ngOnInit() {
        this.asyncApiService.getAsyncApi().subscribe(asyncapi => this.servers = asyncapi.servers);
    }
}
ServersComponent.ɵfac = function ServersComponent_Factory(t) { return new (t || ServersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_1__["AsyncApiService"])); };
ServersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServersComponent, selectors: [["app-servers"]], decls: 4, vars: 3, consts: [[4, "ngFor", "ngForOf"]], template: function ServersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Servers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ServersComponent_mat_card_2_Template, 5, 2, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "keyvalue");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.servers));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZlcnMvc2VydmVycy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-servers',
                templateUrl: './servers.component.html',
                styleUrls: ['./servers.component.css']
            }]
    }], function () { return [{ type: _shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_1__["AsyncApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/asyncapi-mapper.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/asyncapi-mapper.service.ts ***!
  \***************************************************/
/*! exports provided: AsyncApiMapperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncApiMapperService", function() { return AsyncApiMapperService; });
/* harmony import */ var _models_channel_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/channel.model */ "./src/app/shared/models/channel.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_example_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/example.model */ "./src/app/shared/models/example.model.ts");




class AsyncApiMapperService {
    constructor() {
    }
    toAsyncApi(item) {
        return {
            info: item.info,
            servers: this.mapServers(item.servers),
            channels: this.mapChannels(item.channels),
            components: {
                schemas: this.mapSchemas(item.components.schemas)
            }
        };
    }
    mapServers(servers) {
        const s = new Map();
        Object.entries(servers).forEach(([k, v]) => s.set(k, v));
        return s;
    }
    mapChannels(channels) {
        const s = new Array();
        Object.entries(channels).forEach(([k, v]) => {
            const subscriberChannels = this.mapChannel(k, v.description, v.subscribe, "subscribe");
            subscriberChannels.forEach(channel => s.push(channel));
            const publisherChannels = this.mapChannel(k, v.description, v.publish, "publish");
            publisherChannels.forEach(channel => s.push(channel));
        });
        return s;
    }
    mapChannel(topicName, description, serverOperation, operationType) {
        if (serverOperation !== undefined) {
            let messages = this.mapMessages(serverOperation.message);
            return messages.map(message => {
                const operation = this.mapOperation(operationType, message, serverOperation.bindings);
                return {
                    name: topicName,
                    anchorIdentifier: _models_channel_model__WEBPACK_IMPORTED_MODULE_0__["CHANNEL_ANCHOR_PREFIX"] + [operation.protocol, topicName, operation.operation, operation.message.title].join("-"),
                    description: description,
                    operation: operation,
                };
            });
        }
        return [];
    }
    mapMessages(message) {
        if ('oneOf' in message) {
            return this.mapServerAsyncApiMessages(message.oneOf);
        }
        return this.mapServerAsyncApiMessages([message]);
    }
    mapServerAsyncApiMessages(messages) {
        return messages.map((v) => {
            var _a, _b, _c, _d;
            return {
                name: v.name,
                title: v.title,
                description: v.description,
                payload: {
                    name: v.payload.$ref,
                    anchorUrl: AsyncApiMapperService.BASE_URL + ((_b = (_a = v.payload.$ref) === null || _a === void 0 ? void 0 : _a.split('/')) === null || _b === void 0 ? void 0 : _b.pop())
                },
                headers: {
                    name: v.headers.$ref,
                    anchorUrl: AsyncApiMapperService.BASE_URL + ((_d = (_c = v.headers.$ref) === null || _c === void 0 ? void 0 : _c.split('/')) === null || _d === void 0 ? void 0 : _d.pop())
                }
            };
        });
    }
    mapOperation(operationType, message, bindings) {
        return {
            protocol: this.getProtocol(bindings),
            operation: operationType,
            message: message,
            bindings: bindings
        };
    }
    getProtocol(bindings) {
        return Object.keys(bindings)[0];
    }
    mapSchemas(schemas) {
        const s = new Map();
        Object.entries(schemas).forEach(([k, v]) => s.set(k, this.mapSchema(k, v)));
        return s;
    }
    mapSchema(schemaName, schema) {
        var _a, _b;
        const properties = schema.properties !== undefined ? this.mapSchemas(schema.properties) : undefined;
        const example = schema.example !== undefined ? new _models_example_model__WEBPACK_IMPORTED_MODULE_2__["Example"](schema.example) : undefined;
        return {
            name: schema.$ref,
            description: schema.description,
            anchorIdentifier: '#' + schemaName,
            anchorUrl: AsyncApiMapperService.BASE_URL + ((_b = (_a = schema.$ref) === null || _a === void 0 ? void 0 : _a.split('/')) === null || _b === void 0 ? void 0 : _b.pop()),
            type: schema.type,
            format: schema.format,
            enum: schema.enum,
            properties: properties,
            required: schema.required,
            example: example,
        };
    }
}
AsyncApiMapperService.BASE_URL = window.location.pathname + window.location.search + "#";
AsyncApiMapperService.ɵfac = function AsyncApiMapperService_Factory(t) { return new (t || AsyncApiMapperService)(); };
AsyncApiMapperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AsyncApiMapperService, factory: AsyncApiMapperService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AsyncApiMapperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/asyncapi.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/asyncapi.service.ts ***!
  \********************************************/
/*! exports provided: AsyncApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncApiService", function() { return AsyncApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./endpoints */ "./src/app/shared/endpoints.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _asyncapi_mapper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asyncapi-mapper.service */ "./src/app/shared/asyncapi-mapper.service.ts");







class AsyncApiService {
    constructor(http, asyncApiMapperService) {
        this.http = http;
        this.asyncApiMapperService = asyncApiMapperService;
    }
    getAsyncApi() {
        if (this.docs) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.docs);
        }
        return this.http.get(_endpoints__WEBPACK_IMPORTED_MODULE_3__["Endpoints"].docs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(item => {
            this.docs = this.asyncApiMapperService.toAsyncApi(item);
            return this.docs;
        }));
    }
}
AsyncApiService.ɵfac = function AsyncApiService_Factory(t) { return new (t || AsyncApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_asyncapi_mapper_service__WEBPACK_IMPORTED_MODULE_5__["AsyncApiMapperService"])); };
AsyncApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AsyncApiService, factory: AsyncApiService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsyncApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _asyncapi_mapper_service__WEBPACK_IMPORTED_MODULE_5__["AsyncApiMapperService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/json/json.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/json/json.component.ts ***!
  \**********************************************************/
/*! exports provided: JsonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonComponent", function() { return JsonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/__ivy_ngcc__/fesm2015/ngx-highlightjs.js");



class JsonComponent {
    ngOnInit() {
        this.json = JSON.stringify(this.data, null, 2);
    }
}
JsonComponent.ɵfac = function JsonComponent_Factory(t) { return new (t || JsonComponent)(); };
JsonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JsonComponent, selectors: [["app-json"]], inputs: { data: "data" }, decls: 2, vars: 1, consts: [[3, "highlight"]], template: function JsonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.json);
    } }, directives: [ngx_highlightjs__WEBPACK_IMPORTED_MODULE_1__["Highlight"]], styles: ["code[_ngcontent-%COMP%] {\n    margin-top: 16px;\n    padding: 8px;\n    border-radius: 4px;\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JsonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-json',
                template: '<pre><code [highlight]="json"></code></pre>',
                styles: [`code {
    margin-top: 16px;
    padding: 8px;
    border-radius: 4px;
  }`]
            }]
    }], null, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/endpoints.ts":
/*!*************************************!*\
  !*** ./src/app/shared/endpoints.ts ***!
  \*************************************/
/*! exports provided: Endpoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Endpoints", function() { return Endpoints; });
class Endpoints {
    static getContextPath() {
        let url = document.location.pathname;
        return url.split("/asyncapi-ui.html")[0];
    }
    static getPublishEndpoint(protocol) {
        return Endpoints.contextPath + `/${protocol}/publish`;
    }
}
Endpoints.contextPath = Endpoints.getContextPath();
Endpoints.docs = Endpoints.contextPath + '/docs';


/***/ }),

/***/ "./src/app/shared/mock/mock-server.ts":
/*!********************************************!*\
  !*** ./src/app/shared/mock/mock-server.ts ***!
  \********************************************/
/*! exports provided: MockServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockServer", function() { return MockServer; });
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
/* harmony import */ var _mock_springwolf_app_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock.springwolf-app.json */ "./src/app/shared/mock/mock.springwolf-app.json");
var _mock_springwolf_app_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mock.springwolf-app.json */ "./src/app/shared/mock/mock.springwolf-app.json", 1);
/* harmony import */ var _mock_springwolf_amqp_example_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock.springwolf-amqp-example.json */ "./src/app/shared/mock/mock.springwolf-amqp-example.json");
var _mock_springwolf_amqp_example_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mock.springwolf-amqp-example.json */ "./src/app/shared/mock/mock.springwolf-amqp-example.json", 1);
/* harmony import */ var _mock_springwolf_kafka_example_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock.springwolf-kafka-example.json */ "./src/app/shared/mock/mock.springwolf-kafka-example.json");
var _mock_springwolf_kafka_example_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mock.springwolf-kafka-example.json */ "./src/app/shared/mock/mock.springwolf-kafka-example.json", 1);




const mockAsyncApi = Object.assign(Object.assign(Object.assign({}, _mock_springwolf_app_json__WEBPACK_IMPORTED_MODULE_1__), _mock_springwolf_amqp_example_json__WEBPACK_IMPORTED_MODULE_2__), _mock_springwolf_kafka_example_json__WEBPACK_IMPORTED_MODULE_3__);
class MockServer {
    createDb() {
        return { kafka: [] };
    }
    get(reqInfo) {
        console.log("Returning mock data");
        if (reqInfo.req.url.endsWith('/docs')) {
            return reqInfo.utils.createResponse$(() => {
                return {
                    status: angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__["STATUS"].OK,
                    body: _mock_springwolf_kafka_example_json__WEBPACK_IMPORTED_MODULE_3__
                };
            });
        }
        return undefined;
    }
    post(reqInfo) {
        if (reqInfo.req.url.endsWith('/publish')) {
            return reqInfo.utils.createResponse$(() => {
                return {
                    status: angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__["STATUS"].OK
                };
            });
        }
        return undefined;
    }
}


/***/ }),

/***/ "./src/app/shared/mock/mock.springwolf-amqp-example.json":
/*!***************************************************************!*\
  !*** ./src/app/shared/mock/mock.springwolf-amqp-example.json ***!
  \***************************************************************/
/*! exports provided: asyncapi, info, servers, channels, components, tags, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"asyncapi\":\"2.0.0\",\"info\":{\"title\":\"Springwolf example project - AMQP\",\"contact\":{\"name\":\"springwolf\",\"url\":\"https://github.com/springwolf/springwolf-core\",\"email\":\"example@example.com\"},\"description\":\"Springwolf example project to demonstrate springwolfs abilities\",\"license\":{\"name\":\"Apache License 2.0\"},\"version\":\"1.0.0\"},\"servers\":{\"amqp\":{\"url\":\"amqp:5672\",\"protocol\":\"amqp\"}},\"channels\":{\"example-bindings-queue\":{\"bindings\":{\"amqp\":{\"is\":\"routingKey\",\"exchange\":{\"name\":\"name\",\"autoDelete\":false}}},\"publish\":{\"bindings\":{\"amqp\":{\"cc\":[\"\"],\"expiration\":0,\"priority\":0,\"deliveryMode\":0,\"mandatory\":false,\"timestamp\":false,\"ack\":false}},\"description\":\"Auto-generated description\",\"operationId\":\"example-bindings-queue_publish_bindingsExample\",\"message\":{\"name\":\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\",\"title\":\"AnotherPayloadDto\",\"payload\":{\"$ref\":\"#/components/schemas/AnotherPayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/HeadersNotDocumented\"}}}},\"example-topic-queue\":{\"bindings\":{\"amqp\":{\"is\":\"routingKey\",\"exchange\":{\"name\":\"example-topic-exchange\",\"autoDelete\":false}}},\"publish\":{\"bindings\":{\"amqp\":{\"cc\":[\"example-topic-routing-key\"],\"expiration\":0,\"priority\":0,\"deliveryMode\":0,\"mandatory\":false,\"timestamp\":false,\"ack\":false}},\"description\":\"Auto-generated description\",\"operationId\":\"example-topic-queue_publish_bindingsBeanExample\",\"message\":{\"name\":\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\",\"title\":\"AnotherPayloadDto\",\"payload\":{\"$ref\":\"#/components/schemas/AnotherPayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/HeadersNotDocumented\"}}}},\"another-queue\":{\"bindings\":{\"amqp\":{\"is\":\"routingKey\",\"exchange\":{\"name\":\"\",\"autoDelete\":false}}},\"publish\":{\"bindings\":{\"amqp\":{\"cc\":[\"another-queue\"],\"expiration\":0,\"priority\":0,\"deliveryMode\":0,\"mandatory\":false,\"timestamp\":false,\"ack\":false}},\"description\":\"Auto-generated description\",\"operationId\":\"another-queue_publish_receiveAnotherPayload\",\"message\":{\"name\":\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\",\"title\":\"AnotherPayloadDto\",\"payload\":{\"$ref\":\"#/components/schemas/AnotherPayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/HeadersNotDocumented\"}}}},\"example-manual-consumer-channel\":{\"publish\":{\"bindings\":{\"amqp\":{\"expiration\":0,\"cc\":[\"example-consumer-topic-routing-key\"],\"priority\":0,\"deliveryMode\":0,\"mandatory\":false,\"timestamp\":false,\"ack\":false}},\"description\":\"Auto-generated description\",\"operationId\":\"example-manual-consumer-channel_publish\",\"message\":{\"name\":\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\",\"title\":\"AnotherPayloadDto\",\"description\":\"example-manual-consumer-channel-description\",\"payload\":{\"$ref\":\"#/components/schemas/AnotherPayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/HeadersNotDocumented\"}}},\"bindings\":{\"amqp\":{\"is\":\"routingKey\",\"exchange\":{\"name\":\"example-consumer-topic-exchange\",\"autoDelete\":false}}}},\"example-queue\":{\"bindings\":{\"amqp\":{\"is\":\"routingKey\",\"exchange\":{\"name\":\"\",\"autoDelete\":false}}},\"publish\":{\"bindings\":{\"amqp\":{\"cc\":[\"example-queue\"],\"expiration\":0,\"priority\":0,\"deliveryMode\":0,\"mandatory\":false,\"timestamp\":false,\"ack\":false}},\"description\":\"Auto-generated description\",\"operationId\":\"example-queue_publish_receiveExamplePayload\",\"message\":{\"name\":\"io.github.stavshamir.springwolf.example.dtos.ExamplePayloadDto\",\"title\":\"ExamplePayloadDto\",\"payload\":{\"$ref\":\"#/components/schemas/ExamplePayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/HeadersNotDocumented\"}}}},\"example-producer-channel\":{\"bindings\":{\"amqp\":{\"is\":\"routingKey\",\"exchange\":{\"name\":\"example-topic-exchange\",\"autoDelete\":false}}},\"subscribe\":{\"bindings\":{\"amqp\":{\"cc\":[\"example-topic-routing-key\"],\"expiration\":0,\"priority\":0,\"deliveryMode\":0,\"mandatory\":false,\"timestamp\":false,\"ack\":false}},\"description\":\"Auto-generated description\",\"operationId\":\"example-producer-channel_subscribe\",\"message\":{\"name\":\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\",\"title\":\"AnotherPayloadDto\",\"description\":\"example-producer-channel-description\",\"payload\":{\"$ref\":\"#/components/schemas/AnotherPayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/HeadersNotDocumented\"}}}}},\"components\":{\"schemas\":{\"HeadersNotDocumented\":{\"type\":\"object\",\"properties\":{},\"example\":{},\"exampleSetFlag\":true},\"AnotherPayloadDto\":{\"required\":[\"example\"],\"type\":\"object\",\"properties\":{\"foo\":{\"type\":\"string\",\"description\":\"Foo field\",\"example\":\"bar\",\"exampleSetFlag\":true},\"example\":{\"$ref\":\"#/components/schemas/ExamplePayloadDto\",\"exampleSetFlag\":false}},\"description\":\"Another payload model\",\"example\":{\"foo\":\"bar\",\"example\":{\"someString\":\"some string value\",\"someLong\":5,\"someEnum\":\"FOO2\"}},\"exampleSetFlag\":true},\"ExamplePayloadDto\":{\"required\":[\"someEnum\",\"someString\"],\"type\":\"object\",\"properties\":{\"someString\":{\"type\":\"string\",\"description\":\"Some string field\",\"example\":\"some string value\",\"exampleSetFlag\":true},\"someLong\":{\"type\":\"integer\",\"description\":\"Some long field\",\"format\":\"int64\",\"example\":5,\"exampleSetFlag\":true},\"someEnum\":{\"type\":\"string\",\"description\":\"Some enum field\",\"example\":\"FOO2\",\"exampleSetFlag\":true,\"enum\":[\"FOO1\",\"FOO2\",\"FOO3\"]}},\"description\":\"Example payload model\",\"example\":{\"someString\":\"some string value\",\"someLong\":5,\"someEnum\":\"FOO2\"},\"exampleSetFlag\":true}}},\"tags\":[]}");

/***/ }),

/***/ "./src/app/shared/mock/mock.springwolf-app.json":
/*!******************************************************!*\
  !*** ./src/app/shared/mock/mock.springwolf-app.json ***!
  \******************************************************/
/*! exports provided: asyncapi, info, servers, channels, components, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"asyncapi\":\"2.0.0\",\"info\":{\"title\":\"Springwolf UI Demo\",\"description\":\"This is a demo project for springwolf that shows how the UI looks like and functions.\",\"version\":\"1.0.0\"},\"servers\":{\"kafka\":{\"url\":\"kafka:29092\",\"protocol\":\"kafka\"}},\"channels\":{\"example-consumer-topic\":{\"publish\":{\"bindings\":{\"kafka\":{\"groupId\":{\"type\":\"string\",\"enum\":[\"example-group-id\"]}}},\"message\":{\"name\":\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\",\"title\":\"AnotherPayloadDto\",\"description\":\"Custom, optional description for this message\",\"payload\":{\"$ref\":\"#/components/schemas/AnotherPayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/NoHeaders\"}}}},\"example-producer-topic\":{\"publish\":{\"bindings\":{\"kafka\":{\"groupId\":{\"type\":\"string\",\"enum\":[\"example-group-id\"]}}},\"message\":{\"name\":\"io.github.stavshamir.springwolf.example.dtos.ExamplePayloadDto\",\"title\":\"ExamplePayloadDto\",\"payload\":{\"$ref\":\"#/components/schemas/ExamplePayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/NoHeaders\"}}},\"subscribe\":{\"bindings\":{\"kafka\":{}},\"message\":{\"name\":\"io.github.stavshamir.springwolf.example.dtos.ExamplePayloadDto\",\"title\":\"ExamplePayloadDto\",\"payload\":{\"$ref\":\"#/components/schemas/ExamplePayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/NoHeaders\"}}}},\"multi-payload-topic\":{\"publish\":{\"bindings\":{\"kafka\":{}},\"message\":{\"oneOf\":[{\"name\":\"io.github.stavshamir.springwolf.example.dtos.ExamplePayloadDto\",\"title\":\"ExamplePayloadDto\",\"description\":\"Custom, optional description for this message\",\"payload\":{\"$ref\":\"#/components/schemas/ExamplePayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/SpringDefaultHeaders\"}},{\"name\":\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\",\"title\":\"AnotherPayloadDto\",\"payload\":{\"$ref\":\"#/components/schemas/AnotherPayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/NoHeaders\"}}]}}}},\"components\":{\"schemas\":{\"ExamplePayloadDto\":{\"description\":\"Example payload model\",\"type\":\"object\",\"properties\":{\"someString\":{\"description\":\"some string field\",\"type\":\"string\",\"example\":\"string\"},\"someLong\":{\"description\":\"some long field\",\"type\":\"integer\",\"format\":\"int64\",\"example\":0},\"someEnum\":{\"description\":\"some enum field\",\"type\":\"string\",\"enum\":[\"FOO1\",\"FOO2\",\"FOO3\"],\"example\":\"FOO1\"}},\"example\":{\"someString\":\"string\",\"someLong\":0,\"someEnum\":\"FOO1\"},\"required\":[\"someString\",\"someEnum\"]},\"AnotherPayloadDto\":{\"description\":\"Another payload model\",\"type\":\"object\",\"properties\":{\"foo\":{\"description\":\"foo field\",\"type\":\"string\"},\"example\":{\"description\":\"example field\",\"$ref\":\"#/components/schemas/ExamplePayloadDto\"}},\"example\":{\"foo\":\"string\",\"example\":{\"someString\":\"string\",\"someLong\":0,\"someEnum\":\"FOO1\"}}},\"NoHeaders\":{\"type\":\"object\",\"exampleSetFlag\":true},\"SpringDefaultHeaders\":{\"type\":\"object\",\"properties\":{\"__TypeId__\":{\"type\":\"string\",\"example\":\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\",\"exampleSetFlag\":true,\"enum\":[\"io.github.stavshamir.springwolf.example.dtos.ExamplePayloadDto\",\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\"]}},\"example\":{\"__TypeId__\":\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\"},\"exampleSetFlag\":true}}}}");

/***/ }),

/***/ "./src/app/shared/mock/mock.springwolf-kafka-example.json":
/*!****************************************************************!*\
  !*** ./src/app/shared/mock/mock.springwolf-kafka-example.json ***!
  \****************************************************************/
/*! exports provided: asyncapi, info, servers, channels, components, tags, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"asyncapi\":\"2.0.0\",\"info\":{\"title\":\"Springwolf example project - Kafka\",\"contact\":{\"name\":\"springwolf\",\"url\":\"https://github.com/springwolf/springwolf-core\",\"email\":\"example@example.com\"},\"description\":\"Springwolf example project to demonstrate springwolfs abilities\",\"license\":{\"name\":\"Apache License 2.0\"},\"version\":\"1.0.0\"},\"servers\":{\"kafka\":{\"url\":\"kafka:29092\",\"protocol\":\"kafka\"}},\"channels\":{\"another-topic\":{\"publish\":{\"bindings\":{\"kafka\":{\"groupId\":{\"type\":\"string\",\"enum\":[\"example-group-id\"]}}},\"description\":\"Auto-generated description\",\"operationId\":\"another-topic_publish_receiveAnotherPayload\",\"message\":{\"name\":\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\",\"title\":\"AnotherPayloadDto\",\"payload\":{\"$ref\":\"#/components/schemas/AnotherPayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/HeadersNotDocumented\"}}},\"bindings\":{\"kafka\":{}}},\"example-topic\":{\"publish\":{\"bindings\":{\"kafka\":{}},\"description\":\"Auto-generated description\",\"operationId\":\"example-topic_publish_receiveExamplePayload\",\"message\":{\"name\":\"io.github.stavshamir.springwolf.example.dtos.ExamplePayloadDto\",\"title\":\"ExamplePayloadDto\",\"payload\":{\"$ref\":\"#/components/schemas/ExamplePayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/HeadersNotDocumented\"}}},\"bindings\":{\"kafka\":{}}},\"example-producer-topic\":{\"subscribe\":{\"bindings\":{\"kafka\":{}},\"description\":\"Auto-generated description\",\"operationId\":\"example-producer-topic_subscribe\",\"message\":{\"oneOf\":[{\"name\":\"io.github.stavshamir.springwolf.example.dtos.ExamplePayloadDto\",\"title\":\"ExamplePayloadDto\",\"payload\":{\"$ref\":\"#/components/schemas/ExamplePayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/SpringDefaultHeaders\"}},{\"name\":\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\",\"title\":\"AnotherPayloadDto\",\"description\":\"Custom, optional description for this produced to topic\",\"payload\":{\"$ref\":\"#/components/schemas/AnotherPayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/CloudEventHeadersForAnotherPayloadDtoEndpoint\"}}]}},\"bindings\":{\"kafka\":{}}},\"example-consumer-topic\":{\"publish\":{\"bindings\":{\"kafka\":{}},\"description\":\"Auto-generated description\",\"operationId\":\"example-consumer-topic_publish\",\"message\":{\"name\":\"io.github.stavshamir.springwolf.example.dtos.ExamplePayloadDto\",\"title\":\"ExamplePayloadDto\",\"description\":\"Custom, optional description for this consumed topic\",\"payload\":{\"$ref\":\"#/components/schemas/ExamplePayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/HeadersNotDocumented\"}}},\"bindings\":{\"kafka\":{}}},\"multi-payload-topic\":{\"publish\":{\"bindings\":{\"kafka\":{}},\"description\":\"Auto-generated description\",\"operationId\":\"receiveMonetaryAmount_publish\",\"message\":{\"oneOf\":[{\"name\":\"io.github.stavshamir.springwolf.example.dtos.ExamplePayloadDto\",\"title\":\"ExamplePayloadDto\",\"payload\":{\"$ref\":\"#/components/schemas/ExamplePayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/HeadersNotDocumented\"}},{\"name\":\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\",\"title\":\"AnotherPayloadDto\",\"payload\":{\"$ref\":\"#/components/schemas/AnotherPayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/HeadersNotDocumented\"}},{\"name\":\"javax.money.MonetaryAmount\",\"title\":\"MonetaryAmount\",\"payload\":{\"$ref\":\"#/components/schemas/MonetaryAmount\"},\"headers\":{\"$ref\":\"#/components/schemas/HeadersNotDocumented\"}}]}},\"bindings\":{\"kafka\":{}}}},\"components\":{\"schemas\":{\"MonetaryAmount\":{\"type\":\"object\",\"properties\":{\"amount\":{\"type\":\"number\",\"example\":99.99,\"exampleSetFlag\":true},\"currency\":{\"type\":\"string\",\"example\":\"USD\",\"exampleSetFlag\":true}},\"example\":{\"amount\":99.99,\"currency\":\"USD\"},\"exampleSetFlag\":true},\"ExamplePayloadDto\":{\"required\":[\"someEnum\",\"someString\"],\"type\":\"object\",\"properties\":{\"someString\":{\"type\":\"string\",\"description\":\"Some string field\",\"example\":\"some string value\",\"exampleSetFlag\":true},\"someLong\":{\"type\":\"integer\",\"description\":\"Some long field\",\"format\":\"int64\",\"example\":5,\"exampleSetFlag\":true},\"someEnum\":{\"type\":\"string\",\"description\":\"Some enum field\",\"example\":\"FOO2\",\"exampleSetFlag\":true,\"enum\":[\"FOO1\",\"FOO2\",\"FOO3\"]}},\"description\":\"Example payload model\",\"example\":{\"someString\":\"some string value\",\"someLong\":5,\"someEnum\":\"FOO2\"},\"exampleSetFlag\":true},\"CloudEventHeadersForAnotherPayloadDtoEndpoint\":{\"type\":\"object\",\"properties\":{\"ce_specversion\":{\"type\":\"string\",\"description\":\"CloudEvent Spec Version Header\",\"example\":\"1.0\",\"exampleSetFlag\":true,\"enum\":[\"1.0\"]},\"ce_time\":{\"type\":\"string\",\"description\":\"CloudEvent Time Header\",\"example\":\"2015-07-20T15:49:04-07:00\",\"exampleSetFlag\":true,\"enum\":[\"2015-07-20T15:49:04-07:00\"]},\"content-type\":{\"type\":\"string\",\"description\":\"CloudEvent Content-Type Header\",\"example\":\"application/json\",\"exampleSetFlag\":true,\"enum\":[\"application/json\"]},\"ce_id\":{\"type\":\"string\",\"description\":\"CloudEvent Id Header\",\"example\":\"1234-1234-1234\",\"exampleSetFlag\":true,\"enum\":[\"1234-1234-1234\"]},\"ce_type\":{\"type\":\"string\",\"description\":\"CloudEvent Payload Type Header\",\"example\":\"io.github.stavshamir.springwolf.CloudEventHeadersForAnotherPayloadDtoEndpoint\",\"exampleSetFlag\":true,\"enum\":[\"io.github.stavshamir.springwolf.CloudEventHeadersForAnotherPayloadDtoEndpoint\"]},\"ce_source\":{\"type\":\"string\",\"description\":\"CloudEvent Source Header\",\"example\":\"springwolf-kafka-example/anotherPayloadDtoEndpoint\",\"exampleSetFlag\":true,\"enum\":[\"springwolf-kafka-example/anotherPayloadDtoEndpoint\"]},\"ce_subject\":{\"type\":\"string\",\"description\":\"CloudEvent Subject Header\",\"example\":\"Test Subject\",\"exampleSetFlag\":true,\"enum\":[\"Test Subject\"]}},\"example\":{\"ce_specversion\":\"1.0\",\"ce_time\":\"2015-07-20T15:49:04-07:00\",\"content-type\":\"application/json\",\"ce_id\":\"1234-1234-1234\",\"ce_type\":\"io.github.stavshamir.springwolf.CloudEventHeadersForAnotherPayloadDtoEndpoint\",\"ce_source\":\"springwolf-kafka-example/anotherPayloadDtoEndpoint\",\"ce_subject\":\"Test Subject\"},\"exampleSetFlag\":true},\"HeadersNotDocumented\":{\"type\":\"object\",\"properties\":{},\"example\":{},\"exampleSetFlag\":true},\"AnotherPayloadDto\":{\"required\":[\"example\"],\"type\":\"object\",\"properties\":{\"foo\":{\"type\":\"string\",\"description\":\"Foo field\",\"example\":\"bar\",\"exampleSetFlag\":true},\"example\":{\"$ref\":\"#/components/schemas/ExamplePayloadDto\",\"exampleSetFlag\":false}},\"description\":\"Another payload model\",\"example\":{\"foo\":\"bar\",\"example\":{\"someString\":\"some string value\",\"someLong\":5,\"someEnum\":\"FOO2\"}},\"exampleSetFlag\":true},\"SpringDefaultHeaders\":{\"type\":\"object\",\"properties\":{\"__TypeId__\":{\"type\":\"string\",\"description\":\"Spring Type Id Header\",\"example\":\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\",\"exampleSetFlag\":true,\"enum\":[\"io.github.stavshamir.springwolf.example.dtos.ExamplePayloadDto\",\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\"]}},\"example\":{\"__TypeId__\":\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\"},\"exampleSetFlag\":true}}},\"tags\":[]}");

/***/ }),

/***/ "./src/app/shared/models/channel.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/channel.model.ts ***!
  \************************************************/
/*! exports provided: CHANNEL_ANCHOR_PREFIX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANNEL_ANCHOR_PREFIX", function() { return CHANNEL_ANCHOR_PREFIX; });
const CHANNEL_ANCHOR_PREFIX = "#channel-";


/***/ }),

/***/ "./src/app/shared/models/example.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/example.model.ts ***!
  \************************************************/
/*! exports provided: Example */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example", function() { return Example; });
class Example {
    constructor(exampleObject) {
        this.value = JSON.stringify(exampleObject, null, 2);
        this.lineCount = this.value.split('\n').length;
    }
}


/***/ }),

/***/ "./src/app/shared/publisher.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/publisher.service.ts ***!
  \*********************************************/
/*! exports provided: PublisherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublisherService", function() { return PublisherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./endpoints */ "./src/app/shared/endpoints.ts");





class PublisherService {
    constructor(http) {
        this.http = http;
    }
    publish(protocol, topic, payload) {
        const url = _endpoints__WEBPACK_IMPORTED_MODULE_2__["Endpoints"].getPublishEndpoint(protocol);
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('topic', topic);
        console.log(`Publishing to ${url}`);
        return this.http.post(url, payload, { params });
    }
}
PublisherService.ɵfac = function PublisherService_Factory(t) { return new (t || PublisherService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PublisherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PublisherService, factory: PublisherService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublisherService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/springwolf-ui/springwolf-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map