function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _info_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./info/info.component */
    "./src/app/info/info.component.ts");
    /* harmony import */


    var _servers_servers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./servers/servers.component */
    "./src/app/servers/servers.component.ts");
    /* harmony import */


    var _channels_channels_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./channels/channels.component */
    "./src/app/channels/channels.component.ts");
    /* harmony import */


    var _schemas_schemas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./schemas/schemas.component */
    "./src/app/schemas/schemas.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'springwolf';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 6,
      vars: 0,
      consts: [["fxLayout", "column", "fxLayoutGap", "24px"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-servers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-channels");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-schemas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _info_info_component__WEBPACK_IMPORTED_MODULE_3__["InfoComponent"], _servers_servers_component__WEBPACK_IMPORTED_MODULE_4__["ServersComponent"], _channels_channels_component__WEBPACK_IMPORTED_MODULE_5__["ChannelsComponent"], _schemas_schemas_component__WEBPACK_IMPORTED_MODULE_6__["SchemasComponent"]],
      styles: ["app-header[_ngcontent-%COMP%] {\n    position: fixed;\n    z-index: 100;\n    width: 100%;\n}\n\nmain[_ngcontent-%COMP%] {\n    margin: 0 64px;\n    padding: 64px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTAwO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5tYWluIHtcbiAgICBtYXJnaW46IDAgNjRweDtcbiAgICBwYWRkaW5nOiA2NHB4IDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-in-memory-web-api */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
    /* harmony import */


    var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-highlightjs */
    "./node_modules/ngx-highlightjs/__ivy_ngcc__/fesm2015/ngx-highlightjs.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _channels_channel_main_channel_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./channels/channel-main/channel-main.component */
    "./src/app/channels/channel-main/channel-main.component.ts");
    /* harmony import */


    var _channels_channels_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./channels/channels.component */
    "./src/app/channels/channels.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _info_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./info/info.component */
    "./src/app/info/info.component.ts");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _schemas_schema_schema_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./schemas/schema/schema.component */
    "./src/app/schemas/schema/schema.component.ts");
    /* harmony import */


    var _schemas_schemas_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./schemas/schemas.component */
    "./src/app/schemas/schemas.component.ts");
    /* harmony import */


    var _servers_servers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./servers/servers.component */
    "./src/app/servers/servers.component.ts");
    /* harmony import */


    var _shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./shared/asyncapi.service */
    "./src/app/shared/asyncapi.service.ts");
    /* harmony import */


    var _shared_mock_mock_server__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./shared/mock/mock-server */
    "./src/app/shared/mock/mock-server.ts");
    /* harmony import */


    var _shared_publisher_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./shared/publisher.service */
    "./src/app/shared/publisher.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_components_json_json_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./shared/components/json/json.component */
    "./src/app/shared/components/json/json.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_17__["AsyncApiService"], _shared_publisher_service__WEBPACK_IMPORTED_MODULE_19__["PublisherService"], {
        provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__["HIGHLIGHT_OPTIONS"],
        useValue: {
          languages: function languages() {
            return {
              typescript: function typescript() {
                return __webpack_require__.e(
                /*! import() | highlight-js-lib-languages-typescript */
                "common").then(__webpack_require__.t.bind(null,
                /*! highlight.js/lib/languages/typescript */
                "./node_modules/highlight.js/lib/languages/typescript.js", 7));
              }
            };
          }
        }
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__["HighlightModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"], _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production ? [] : angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["HttpClientInMemoryWebApiModule"].forRoot(_shared_mock_mock_server__WEBPACK_IMPORTED_MODULE_18__["MockServer"], {
        delay: 100
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _info_info_component__WEBPACK_IMPORTED_MODULE_12__["InfoComponent"], _servers_servers_component__WEBPACK_IMPORTED_MODULE_16__["ServersComponent"], _channels_channels_component__WEBPACK_IMPORTED_MODULE_10__["ChannelsComponent"], _channels_channel_main_channel_main_component__WEBPACK_IMPORTED_MODULE_9__["ChannelMainComponent"], _schemas_schemas_component__WEBPACK_IMPORTED_MODULE_15__["SchemasComponent"], _schemas_schema_schema_component__WEBPACK_IMPORTED_MODULE_14__["SchemaComponent"], _shared_components_json_json_component__WEBPACK_IMPORTED_MODULE_21__["JsonComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__["HighlightModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["HttpClientInMemoryWebApiModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _info_info_component__WEBPACK_IMPORTED_MODULE_12__["InfoComponent"], _servers_servers_component__WEBPACK_IMPORTED_MODULE_16__["ServersComponent"], _channels_channels_component__WEBPACK_IMPORTED_MODULE_10__["ChannelsComponent"], _channels_channel_main_channel_main_component__WEBPACK_IMPORTED_MODULE_9__["ChannelMainComponent"], _schemas_schemas_component__WEBPACK_IMPORTED_MODULE_15__["SchemasComponent"], _schemas_schema_schema_component__WEBPACK_IMPORTED_MODULE_14__["SchemaComponent"], _shared_components_json_json_component__WEBPACK_IMPORTED_MODULE_21__["JsonComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__["HighlightModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"], _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production ? [] : angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["HttpClientInMemoryWebApiModule"].forRoot(_shared_mock_mock_server__WEBPACK_IMPORTED_MODULE_18__["MockServer"], {
            delay: 100
          })],
          providers: [_shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_17__["AsyncApiService"], _shared_publisher_service__WEBPACK_IMPORTED_MODULE_19__["PublisherService"], {
            provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__["HIGHLIGHT_OPTIONS"],
            useValue: {
              languages: function languages() {
                return {
                  typescript: function typescript() {
                    return __webpack_require__.e(
                    /*! import() | highlight-js-lib-languages-typescript */
                    "common").then(__webpack_require__.t.bind(null,
                    /*! highlight.js/lib/languages/typescript */
                    "./node_modules/highlight.js/lib/languages/typescript.js", 7));
                  }
                };
              }
            }
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/channels/channel-main/channel-main.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/channels/channel-main/channel-main.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ChannelMainComponent */

  /***/
  function srcAppChannelsChannelMainChannelMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChannelMainComponent", function () {
      return ChannelMainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_models_example_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/models/example.model */
    "./src/app/shared/models/example.model.ts");
    /* harmony import */


    var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-in-memory-web-api */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
    /* harmony import */


    var src_app_shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/asyncapi.service */
    "./src/app/shared/asyncapi.service.ts");
    /* harmony import */


    var src_app_shared_publisher_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/publisher.service */
    "./src/app/shared/publisher.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/clipboard */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
    /* harmony import */


    var _shared_components_json_json_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shared/components/json/json.component */
    "./src/app/shared/components/json/json.component.ts");
    /* harmony import */


    var _schemas_schema_schema_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../schemas/schema/schema.component */
    "./src/app/schemas/schema/schema.component.ts");

    function ChannelMainComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.operation.message.description);
      }
    }

    function ChannelMainComponent_app_schema_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-schema", 17);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("schema", ctx_r2.schema);
      }
    }

    function ChannelMainComponent_app_schema_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-schema", 17);
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("schema", ctx_r3.headers);
      }
    }

    var ChannelMainComponent = /*#__PURE__*/function () {
      function ChannelMainComponent(asyncApiService, publisherService, snackBar) {
        _classCallCheck(this, ChannelMainComponent);

        this.asyncApiService = asyncApiService;
        this.publisherService = publisherService;
        this.snackBar = snackBar;
      }

      _createClass(ChannelMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.asyncApiService.getAsyncApis().subscribe(function (asyncapi) {
            var schemas = asyncapi.get(_this.docName).components.schemas;
            _this.schemaName = _this.operation.message.payload.$ref.slice(_this.operation.message.payload.$ref.lastIndexOf('/') + 1);
            _this.schema = schemas[_this.schemaName];
            _this.defaultExample = new src_app_shared_models_example_model__WEBPACK_IMPORTED_MODULE_1__["Example"](_this.schema.example);
            _this.exampleTextAreaLineCount = _this.defaultExample.lineCount;
            _this.headersSchemaName = _this.operation.message.headers.$ref.slice(_this.operation.message.headers.$ref.lastIndexOf('/') + 1);
            _this.headers = schemas[_this.headersSchemaName];
            _this.headersExample = new src_app_shared_models_example_model__WEBPACK_IMPORTED_MODULE_1__["Example"](_this.headers.example);
            _this.headersTextAreaLineCount = _this.headersExample.lineCount;
          });
          this.protocolName = Object.keys(this.operation.bindings)[0];
        }
      }, {
        key: "recalculateLineCount",
        value: function recalculateLineCount(field, text) {
          switch (field) {
            case 'example':
              this.exampleTextAreaLineCount = text.split('\n').length;
              break;

            case 'headers':
              this.headersTextAreaLineCount = text.split('\n').length;
              break;
          }
        }
      }, {
        key: "publish",
        value: function publish(example) {
          var _this2 = this;

          try {
            var json = JSON.parse(example);
            this.publisherService.publish(this.protocolName, this.channelName, json).subscribe(function (_) {
              return _this2.handlePublishSuccess();
            }, function (err) {
              return _this2.handlePublishError(err);
            });
          } catch (error) {
            this.snackBar.open('Example payload is not valid', 'ERROR', {
              duration: 3000
            });
          }
        }
      }, {
        key: "handlePublishSuccess",
        value: function handlePublishSuccess() {
          return this.snackBar.open('Example payload sent to: ' + this.channelName, 'PUBLISHED', {
            duration: 3000
          });
        }
      }, {
        key: "handlePublishError",
        value: function handlePublishError(err) {
          var msg = 'Publish failed';

          if ((err === null || err === void 0 ? void 0 : err.status) === angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_2__["STATUS"].NOT_FOUND) {
            msg += ': no publisher was provided for ' + this.protocolName;
          }

          return this.snackBar.open(msg, 'ERROR', {
            duration: 4000
          });
        }
      }]);

      return ChannelMainComponent;
    }();

    ChannelMainComponent.ɵfac = function ChannelMainComponent_Factory(t) {
      return new (t || ChannelMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_3__["AsyncApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_publisher_service__WEBPACK_IMPORTED_MODULE_4__["PublisherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]));
    };

    ChannelMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChannelMainComponent,
      selectors: [["app-channel-main"]],
      inputs: {
        docName: "docName",
        channelName: "channelName",
        operation: "operation"
      },
      decls: 32,
      vars: 13,
      consts: [[4, "ngIf"], ["animationDuration", "0ms"], ["label", "Example"], ["fxLayout", "column"], ["spellcheck", "false", 3, "rows", "value", "keyup"], ["exampleTextArea", ""], ["fxLayout", "", "fxLayoutGap", "8px"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "cdkCopyToClipboard"], ["label", "Schema"], [1, "payload-name"], [3, "schema", 4, "ngIf"], ["label", "Headers"], [1, "header-name"], ["headersTextArea", ""], ["label", "Bindings"], [3, "data"], [3, "schema"]],
      template: function ChannelMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChannelMainComponent_div_2_Template, 4, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab-group", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "textarea", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ChannelMainComponent_Template_textarea_keyup_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            return ctx.recalculateLineCount("example", _r1.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelMainComponent_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            return ctx.publish(_r1.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Publish ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelMainComponent_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            _r1.value = ctx.defaultExample.value;
            return ctx.exampleTextAreaLineCount = ctx.defaultExample.lineCount;
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ChannelMainComponent_app_schema_20_Template, 1, 1, "app-schema", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-tab", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ChannelMainComponent_app_schema_26_Template, 1, 1, "app-schema", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "textarea", 4, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ChannelMainComponent_Template_textarea_keyup_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

            return ctx.recalculateLineCount("headers", _r4.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-tab", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-json", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.operation.message.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.exampleTextAreaLineCount)("value", ctx.defaultExample == null ? null : ctx.defaultExample.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkCopyToClipboard", _r1.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.schemaName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.operation.message.payload.$ref);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.schema);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.headersSchemaName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.operation.message.headers.$ref);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headers);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.headersTextAreaLineCount)("value", ctx.headersExample == null ? null : ctx.headersExample.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.operation.bindings[ctx.protocolName]);
        }
      },
      directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTab"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__["CdkCopyToClipboard"], _shared_components_json_json_component__WEBPACK_IMPORTED_MODULE_12__["JsonComponent"], _schemas_schema_schema_component__WEBPACK_IMPORTED_MODULE_13__["SchemaComponent"]],
      styles: ["textarea[_ngcontent-%COMP%] {\n    margin-top: 16px;\n    padding: 8px;\n    border-radius: 4px;\n    border-width: 0;\n    line-height: 24px;\n    background-color: #282c34;\n    color: #abb2bf;\n}\n\nbutton[_ngcontent-%COMP%] {\n    margin-top: 8px;\n}\n\n.property-badge[_ngcontent-%COMP%] {\n    background-color: #C5CAE9;\n    border-radius: 4px;\n    padding: 6px;\n    font-size: small;\n    font-weight: bold;\n}\n\n.payload-name[_ngcontent-%COMP%] {\n    background-color: #E0E0E0;\n    border-radius: 4px;\n    padding: 6px;\n    font-weight: normal;\n}\n\n.header-name[_ngcontent-%COMP%] {\n  background-color: #E0E0E0;\n  border-radius: 4px;\n  padding: 6px;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbm5lbHMvY2hhbm5lbC1tYWluL2NoYW5uZWwtbWFpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY2hhbm5lbHMvY2hhbm5lbC1tYWluL2NoYW5uZWwtbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGV4dGFyZWEge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDtcbiAgICBjb2xvcjogI2FiYjJiZjtcbn1cblxuYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5wcm9wZXJ0eS1iYWRnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M1Q0FFOTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wYXlsb2FkLW5hbWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMEUwRTA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uaGVhZGVyLW5hbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFMEUwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChannelMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-channel-main',
          templateUrl: './channel-main.component.html',
          styleUrls: ['./channel-main.component.css']
        }]
      }], function () {
        return [{
          type: src_app_shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_3__["AsyncApiService"]
        }, {
          type: src_app_shared_publisher_service__WEBPACK_IMPORTED_MODULE_4__["PublisherService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
        }];
      }, {
        docName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        channelName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        operation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/channels/channels.component.ts":
  /*!************************************************!*\
    !*** ./src/app/channels/channels.component.ts ***!
    \************************************************/

  /*! exports provided: ChannelsComponent */

  /***/
  function srcAppChannelsChannelsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChannelsComponent", function () {
      return ChannelsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/asyncapi.service */
    "./src/app/shared/asyncapi.service.ts");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _channel_main_channel_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./channel-main/channel-main.component */
    "./src/app/channels/channel-main/channel-main.component.ts");

    function ChannelsComponent_mat_expansion_panel_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-channel-main", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var channel_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](channel_r1.operation.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](channel_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](channel_r1.operation.message.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("channelName", channel_r1.name)("operation", channel_r1.operation)("docName", ctx_r0.docName);
      }
    }

    var ChannelsComponent = /*#__PURE__*/function () {
      function ChannelsComponent(asyncApiService) {
        _classCallCheck(this, ChannelsComponent);

        this.asyncApiService = asyncApiService;
      }

      _createClass(ChannelsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.nameSubscription = this.asyncApiService.getCurrentAsyncApiName().subscribe(function (name) {
            _this3.docName = name;

            _this3.asyncApiService.getAsyncApis().subscribe(function (asyncapi) {
              return _this3.channels = asyncapi.get(name).channels;
            });
          });
        }
      }]);

      return ChannelsComponent;
    }();

    ChannelsComponent.ɵfac = function ChannelsComponent_Factory(t) {
      return new (t || ChannelsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_1__["AsyncApiService"]));
    };

    ChannelsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChannelsComponent,
      selectors: [["app-channels"]],
      decls: 4,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], ["fxLayout", "", "fxLayoutAlign", "flex-start center", "fxLayoutGap", "16px"], [1, "operation-badge"], [1, "payload-name"], [3, "channelName", "operation", "docName"]],
      template: function ChannelsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Channels");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChannelsComponent_mat_expansion_panel_3_Template, 10, 6, "mat-expansion-panel", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.channels);
        }
      },
      directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _channel_main_channel_main_component__WEBPACK_IMPORTED_MODULE_5__["ChannelMainComponent"]],
      styles: [".operation-badge[_ngcontent-%COMP%] {\n    background-color: #CDDC39;\n    border-radius: 4px;\n    padding: 8px;\n    font-size: small;\n    font-weight: bold;\n}\n\nmat-divider[_ngcontent-%COMP%] {\n    height: 20px;\n}\n\n.payload-name[_ngcontent-%COMP%] {\n    background-color: #E0E0E0;\n    border-radius: 4px;\n    padding: 4px;\n    font-weight: normal;\n    font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbm5lbHMvY2hhbm5lbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NoYW5uZWxzL2NoYW5uZWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3BlcmF0aW9uLWJhZGdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0REQzM5O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxubWF0LWRpdmlkZXIge1xuICAgIGhlaWdodDogMjBweDtcbn1cblxuLnBheWxvYWQtbmFtZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTBFMDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChannelsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-channels',
          templateUrl: './channels.component.html',
          styleUrls: ['./channels.component.css']
        }]
      }], function () {
        return [{
          type: _shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_1__["AsyncApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/asyncapi.service */
    "./src/app/shared/asyncapi.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeaderComponent_option_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var doc_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", doc_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](doc_r1);
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(asyncApiService) {
        _classCallCheck(this, HeaderComponent);

        this.asyncApiService = asyncApiService;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.asyncApiService.getAsyncApis().subscribe(function (docsMap) {
            _this4.documents = _toConsumableArray(docsMap.keys());
            _this4.selectedDocument = _this4.documents[0];

            _this4.asyncApiService.setCurrentAsyncApiName(_this4.selectedDocument);
          });
        }
      }, {
        key: "selectedDocumentMod",
        get: function get() {
          return this.selectedDocument;
        },
        set: function set(value) {
          this.selectedDocument = value;
          this.asyncApiService.setCurrentAsyncApiName(this.selectedDocument);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_1__["AsyncApiService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 10,
      vars: 2,
      consts: [["color", "primary", "fxLayout", "", "fxLayoutAlign", "space-between center"], ["fxLayout", "", "fxLayoutAlign", "center center", "fxLayoutGap", "16px"], [3, "ngModel", "ngModelChange"], ["disabled", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], ["href", "https://github.com/stavshamir/springwolf"], [1, "fa", "fa-github", "fa-2x"], [3, "ngValue"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "springwolf");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_Template_select_ngModelChange_4_listener($event) {
            return ctx.selectedDocumentMod = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Choose a doc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_option_7_Template, 2, 2, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedDocumentMod);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.documents);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: [".logo[_ngcontent-%COMP%] {\n    height: 24px;\n    display:block;\n}\n\na[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: white;\n}\n\na[_ngcontent-%COMP%]:hover {\n    color: lightgray;\n}\n\n.select-doc[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 24px;\n    display:block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgZGlzcGxheTpibG9jaztcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuYTpob3ZlciB7XG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLnNlbGVjdC1kb2Mge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgZGlzcGxheTpibG9jaztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: src_app_shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_1__["AsyncApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/info/info.component.ts":
  /*!****************************************!*\
    !*** ./src/app/info/info.component.ts ***!
    \****************************************/

  /*! exports provided: InfoComponent */

  /***/
  function srcAppInfoInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoComponent", function () {
      return InfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/asyncapi.service */
    "./src/app/shared/asyncapi.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function InfoComponent_p_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.info.description);
      }
    }

    var InfoComponent = /*#__PURE__*/function () {
      function InfoComponent(asyncApiService) {
        _classCallCheck(this, InfoComponent);

        this.asyncApiService = asyncApiService;
      }

      _createClass(InfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.nameSubscription = this.asyncApiService.getCurrentAsyncApiName().subscribe(function (name) {
            _this5.asyncApiService.getAsyncApis().subscribe(function (asyncapi) {
              _this5.asyncApiData = asyncapi.get(name);
              _this5.info = asyncapi.get(name).info;
            });
          });
        }
      }, {
        key: "download",
        value: function download() {
          var json = JSON.stringify(this.asyncApiData, null, 2);
          var bytes = new TextEncoder().encode(json);
          var blob = new Blob([bytes], {
            type: 'application/json'
          });
          var url = window.URL.createObjectURL(blob);
          window.open(url);
          return false;
        }
      }]);

      return InfoComponent;
    }();

    InfoComponent.ɵfac = function InfoComponent_Factory(t) {
      return new (t || InfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_1__["AsyncApiService"]));
    };

    InfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfoComponent,
      selectors: [["app-info"]],
      decls: 7,
      vars: 3,
      consts: [["href", "#", 3, "click"], [4, "ngIf"]],
      template: function InfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoComponent_Template_a_click_4_listener() {
            return ctx.download();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "AsyncAPI JSON file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InfoComponent_p_6_Template, 2, 1, "p", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info == null ? null : ctx.info.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" API VERSION ", ctx.info == null ? null : ctx.info.version, " - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info == null ? null : ctx.info.description);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm8vaW5mby5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-info',
          templateUrl: './info.component.html',
          styleUrls: ['./info.component.css']
        }]
      }], function () {
        return [{
          type: _shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_1__["AsyncApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material.module.ts":
  /*!************************************!*\
    !*** ./src/app/material.module.ts ***!
    \************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/clipboard */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");

    var modules = [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__["ClipboardModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"]];

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [modules, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__["ClipboardModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__["ClipboardModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"]],
        exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__["ClipboardModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: modules,
          exports: modules
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/schemas/schema/schema.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/schemas/schema/schema.component.ts ***!
    \****************************************************/

  /*! exports provided: SchemaComponent */

  /***/
  function srcAppSchemasSchemaSchemaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchemaComponent", function () {
      return SchemaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function SchemaComponent_tr_2_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SchemaComponent_tr_2_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var property_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](property_r1.value.type);
      }
    }

    function SchemaComponent_tr_2_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var property_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#" + property_r1.value["$ref"].split("/").pop(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](property_r1.value["$ref"]);
      }
    }

    function SchemaComponent_tr_2_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var property_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", property_r1.value.format, ")");
      }
    }

    function SchemaComponent_tr_2_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var property_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("example: ", property_r1.value.example, "");
      }
    }

    function SchemaComponent_tr_2_mat_select_11_mat_option_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var enum_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", enum_r13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](enum_r13);
      }
    }

    function SchemaComponent_tr_2_mat_select_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-select", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SchemaComponent_tr_2_mat_select_11_mat_option_1_Template, 2, 2, "mat-option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var property_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", property_r1.value["enum"]);
      }
    }

    function SchemaComponent_tr_2_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var property_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", property_r1.key, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.schema.required == null ? null : ctx_r0.schema.required.includes(property_r1.key));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", property_r1.value.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", property_r1.value["$ref"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", property_r1.value.format);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](property_r1.value.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", property_r1.value.example);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", property_r1.value["enum"]);
      }
    }

    var SchemaComponent = function SchemaComponent() {
      _classCallCheck(this, SchemaComponent);
    };

    SchemaComponent.ɵfac = function SchemaComponent_Factory(t) {
      return new (t || SchemaComponent)();
    };

    SchemaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SchemaComponent,
      selectors: [["app-schema"]],
      inputs: {
        schema: "schema"
      },
      decls: 4,
      vars: 3,
      consts: [[1, "schema"], [4, "ngFor", "ngForOf"], [1, "key"], ["class", "required", 4, "ngIf"], ["class", "type", 4, "ngIf"], ["class", "format", 4, "ngIf"], [1, "description"], ["class", "example", 4, "ngIf"], ["placeholder", "Enum", 4, "ngIf"], [1, "required"], [1, "type"], [3, "href"], [1, "format"], [1, "example"], ["placeholder", "Enum"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function SchemaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SchemaComponent_tr_2_Template, 12, 8, "tr", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.schema == null ? null : ctx.schema.properties));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"]],
      styles: [".schema[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n}\r\n\r\n.key[_ngcontent-%COMP%] {\r\n  width: 12em;\r\n  vertical-align: top;\r\n}\r\n\r\n.required[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\r\n\r\n.type[_ngcontent-%COMP%] {\r\n  color: #55A;\r\n}\r\n\r\n.example[_ngcontent-%COMP%] {\r\n  color: #6B6B6B;\r\n  font-style: italic;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NoZW1hcy9zY2hlbWEvc2NoZW1hLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NjaGVtYXMvc2NoZW1hL3NjaGVtYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjaGVtYSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmtleSB7XHJcbiAgd2lkdGg6IDEyZW07XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLnJlcXVpcmVkIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4udHlwZSB7XHJcbiAgY29sb3I6ICM1NUE7XHJcbn1cclxuXHJcbi5leGFtcGxlIHtcclxuICBjb2xvcjogIzZCNkI2QjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchemaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-schema',
          templateUrl: './schema.component.html',
          styleUrls: ['./schema.component.css']
        }]
      }], null, {
        schema: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/schemas/schemas.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/schemas/schemas.component.ts ***!
    \**********************************************/

  /*! exports provided: SchemasComponent */

  /***/
  function srcAppSchemasSchemasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchemasComponent", function () {
      return SchemasComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/asyncapi.service */
    "./src/app/shared/asyncapi.service.ts");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _schema_schema_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./schema/schema.component */
    "./src/app/schemas/schema/schema.component.ts");

    function SchemasComponent_mat_expansion_panel_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 1);

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
      }

      if (rf & 2) {
        var schema_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", schema_r1.key);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schema_r1.key);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", schema_r1.value.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("schema", schema_r1 == null ? null : schema_r1.value);
      }
    }

    var SchemasComponent = /*#__PURE__*/function () {
      function SchemasComponent(asyncApiService) {
        _classCallCheck(this, SchemasComponent);

        this.asyncApiService = asyncApiService;
      }

      _createClass(SchemasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.nameSubscription = this.asyncApiService.getCurrentAsyncApiName().subscribe(function (name) {
            _this6.asyncApiService.getAsyncApis().subscribe(function (asyncapi) {
              return _this6.schemas = asyncapi.get(name).components.schemas;
            });
          });
        }
      }]);

      return SchemasComponent;
    }();

    SchemasComponent.ɵfac = function SchemasComponent_Factory(t) {
      return new (t || SchemasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_1__["AsyncApiService"]));
    };

    SchemasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SchemasComponent,
      selectors: [["app-schemas"]],
      decls: 5,
      vars: 3,
      consts: [[3, "id", 4, "ngFor", "ngForOf"], [3, "id"], [3, "schema"]],
      template: function SchemasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Schemas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SchemasComponent_mat_expansion_panel_3_Template, 8, 4, "mat-expansion-panel", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx.schemas));
        }
      },
      directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelDescription"], _schema_schema_component__WEBPACK_IMPORTED_MODULE_4__["SchemaComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"]],
      styles: ["h3[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NoZW1hcy9zY2hlbWFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9zY2hlbWFzL3NjaGVtYXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchemasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-schemas',
          templateUrl: './schemas.component.html',
          styleUrls: ['./schemas.component.css']
        }]
      }], function () {
        return [{
          type: _shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_1__["AsyncApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/servers/servers.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/servers/servers.component.ts ***!
    \**********************************************/

  /*! exports provided: ServersComponent */

  /***/
  function srcAppServersServersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServersComponent", function () {
      return ServersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/asyncapi.service */
    "./src/app/shared/asyncapi.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    function ServersComponent_mat_card_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var server_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](server_r1.key);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", server_r1.value.url, " ");
      }
    }

    var ServersComponent = /*#__PURE__*/function () {
      function ServersComponent(asyncApiService) {
        _classCallCheck(this, ServersComponent);

        this.asyncApiService = asyncApiService;
      }

      _createClass(ServersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.nameSubscription = this.asyncApiService.getCurrentAsyncApiName().subscribe(function (name) {
            _this7.asyncApiService.getAsyncApis().subscribe(function (asyncapi) {
              return _this7.servers = asyncapi.get(name).servers;
            });
          });
        }
      }]);

      return ServersComponent;
    }();

    ServersComponent.ɵfac = function ServersComponent_Factory(t) {
      return new (t || ServersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_1__["AsyncApiService"]));
    };

    ServersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServersComponent,
      selectors: [["app-servers"]],
      decls: 4,
      vars: 3,
      consts: [[4, "ngFor", "ngForOf"]],
      template: function ServersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Servers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ServersComponent_mat_card_2_Template, 5, 2, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "keyvalue");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.servers));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZlcnMvc2VydmVycy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-servers',
          templateUrl: './servers.component.html',
          styleUrls: ['./servers.component.css']
        }]
      }], function () {
        return [{
          type: _shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_1__["AsyncApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/asyncapi.service.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/asyncapi.service.ts ***!
    \********************************************/

  /*! exports provided: AsyncApiService */

  /***/
  function srcAppSharedAsyncapiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AsyncApiService", function () {
      return AsyncApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _endpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./endpoints */
    "./src/app/shared/endpoints.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AsyncApiService = /*#__PURE__*/function () {
      function AsyncApiService(http) {
        _classCallCheck(this, AsyncApiService);

        this.http = http;
        this.nameSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(AsyncApiService, [{
        key: "setCurrentAsyncApiName",
        value: function setCurrentAsyncApiName(currnetAsyncApiName) {
          this.nameSubject.next(currnetAsyncApiName);
        }
      }, {
        key: "getCurrentAsyncApiName",
        value: function getCurrentAsyncApiName() {
          return this.nameSubject.asObservable();
        }
      }, {
        key: "getAsyncApis",
        value: function getAsyncApis() {
          var _this8 = this;

          if (this.docs) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.docs);
          }

          return this.http.get(_endpoints__WEBPACK_IMPORTED_MODULE_3__["Endpoints"].docs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (item) {
            _this8.docs = _this8.toAsyncApiMap(item);
            return _this8.docs;
          }));
        }
      }, {
        key: "toAsyncApiMap",
        value: function toAsyncApiMap(response) {
          var _this9 = this;

          var docs = new Map();
          Object.entries(response).forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                docName = _ref2[0],
                doc = _ref2[1];

            return docs.set(docName, _this9.toAsyncApi(doc));
          });
          return docs;
        }
      }, {
        key: "toAsyncApi",
        value: function toAsyncApi(item) {
          return {
            info: item.info,
            servers: this.mapServers(item.servers),
            channels: this.mapChannels(item.channels),
            components: {
              schemas: item.components.schemas
            }
          };
        }
      }, {
        key: "mapServers",
        value: function mapServers(servers) {
          var s = new Map();
          Object.entries(servers).forEach(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                k = _ref4[0],
                v = _ref4[1];

            return s.set(k, v);
          });
          return s;
        }
      }, {
        key: "mapChannels",
        value: function mapChannels(channels) {
          var _this10 = this;

          var s = new Array();
          Object.entries(channels).forEach(function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
                k = _ref6[0],
                v = _ref6[1];

            var subscriberChannels = _this10.mapChannel(k, v.description, v.subscribe, " consumer");

            subscriberChannels.forEach(function (channel) {
              return s.push(channel);
            });

            var publisherChannels = _this10.mapChannel(k, v.description, v.publish, " producer");

            publisherChannels.forEach(function (channel) {
              return s.push(channel);
            });
          });
          return s;
        }
      }, {
        key: "mapChannel",
        value: function mapChannel(topicName, description, operation, operationName) {
          var _this11 = this;

          if (operation !== undefined) {
            var messages = 'oneOf' in operation.message ? operation.message.oneOf : [operation.message];
            return messages.map(function (message) {
              return {
                name: topicName,
                description: description,
                operation: _this11.mapOperation(operationName, message, operation.bindings)
              };
            });
          }

          return [];
        }
      }, {
        key: "mapOperation",
        value: function mapOperation(operationName, message, bindings) {
          return {
            type: this.getProtocol(bindings) + operationName,
            message: message,
            bindings: bindings
          };
        }
      }, {
        key: "getProtocol",
        value: function getProtocol(bindings) {
          return Object.keys(bindings)[0];
        }
      }]);

      return AsyncApiService;
    }();

    AsyncApiService.ɵfac = function AsyncApiService_Factory(t) {
      return new (t || AsyncApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    AsyncApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AsyncApiService,
      factory: AsyncApiService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsyncApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/json/json.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/components/json/json.component.ts ***!
    \**********************************************************/

  /*! exports provided: JsonComponent */

  /***/
  function srcAppSharedComponentsJsonJsonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonComponent", function () {
      return JsonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-highlightjs */
    "./node_modules/ngx-highlightjs/__ivy_ngcc__/fesm2015/ngx-highlightjs.js");

    var JsonComponent = /*#__PURE__*/function () {
      function JsonComponent() {
        _classCallCheck(this, JsonComponent);
      }

      _createClass(JsonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.json = JSON.stringify(this.data, null, 2);
        }
      }]);

      return JsonComponent;
    }();

    JsonComponent.ɵfac = function JsonComponent_Factory(t) {
      return new (t || JsonComponent)();
    };

    JsonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JsonComponent,
      selectors: [["app-json"]],
      inputs: {
        data: "data"
      },
      decls: 2,
      vars: 1,
      consts: [[3, "highlight"]],
      template: function JsonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.json);
        }
      },
      directives: [ngx_highlightjs__WEBPACK_IMPORTED_MODULE_1__["Highlight"]],
      styles: ["code[_ngcontent-%COMP%] {\n    margin-top: 16px;\n    padding: 8px;\n    border-radius: 4px;\n  }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JsonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-json',
          template: '<pre><code [highlight]="json"></code></pre>',
          styles: ["code {\n    margin-top: 16px;\n    padding: 8px;\n    border-radius: 4px;\n  }"]
        }]
      }], null, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/endpoints.ts":
  /*!*************************************!*\
    !*** ./src/app/shared/endpoints.ts ***!
    \*************************************/

  /*! exports provided: Endpoints */

  /***/
  function srcAppSharedEndpointsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Endpoints", function () {
      return Endpoints;
    });

    var Endpoints = /*#__PURE__*/function () {
      function Endpoints() {
        _classCallCheck(this, Endpoints);
      }

      _createClass(Endpoints, null, [{
        key: "getContextPath",
        value: function getContextPath() {
          var url = document.location.pathname;
          return url.split("/asyncapi-ui.html")[0];
        }
      }, {
        key: "getPublishEndpoint",
        value: function getPublishEndpoint(protocol) {
          return Endpoints.contextPath + "/".concat(protocol, "/publish");
        }
      }]);

      return Endpoints;
    }();

    Endpoints.contextPath = Endpoints.getContextPath();
    Endpoints.docs = Endpoints.contextPath + '/docs';
    /***/
  },

  /***/
  "./src/app/shared/mock/mock-server.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/mock/mock-server.ts ***!
    \********************************************/

  /*! exports provided: MockServer */

  /***/
  function srcAppSharedMockMockServerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MockServer", function () {
      return MockServer;
    });
    /* harmony import */


    var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! angular-in-memory-web-api */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
    /* harmony import */


    var _mock_springwolf_app_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mock.springwolf-app.json */
    "./src/app/shared/mock/mock.springwolf-app.json");

    var _mock_springwolf_app_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ./mock.springwolf-app.json */
    "./src/app/shared/mock/mock.springwolf-app.json", 1);
    /* harmony import */


    var _mock_springwolf_amqp_example_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./mock.springwolf-amqp-example.json */
    "./src/app/shared/mock/mock.springwolf-amqp-example.json");

    var _mock_springwolf_amqp_example_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ./mock.springwolf-amqp-example.json */
    "./src/app/shared/mock/mock.springwolf-amqp-example.json", 1);
    /* harmony import */


    var _mock_springwolf_kafka_example_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mock.springwolf-kafka-example.json */
    "./src/app/shared/mock/mock.springwolf-kafka-example.json");

    var _mock_springwolf_kafka_example_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ./mock.springwolf-kafka-example.json */
    "./src/app/shared/mock/mock.springwolf-kafka-example.json", 1);

    var mockAsyncApi = Object.assign(Object.assign(Object.assign({}, _mock_springwolf_app_json__WEBPACK_IMPORTED_MODULE_1__), _mock_springwolf_amqp_example_json__WEBPACK_IMPORTED_MODULE_2__), _mock_springwolf_kafka_example_json__WEBPACK_IMPORTED_MODULE_3__);

    var MockServer = /*#__PURE__*/function () {
      function MockServer() {
        _classCallCheck(this, MockServer);
      }

      _createClass(MockServer, [{
        key: "createDb",
        value: function createDb() {
          return {
            kafka: []
          };
        }
      }, {
        key: "get",
        value: function get(reqInfo) {
          console.log("Returning mock data");

          if (reqInfo.req.url.endsWith('/docs')) {
            return reqInfo.utils.createResponse$(function () {
              return {
                status: angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__["STATUS"].OK,
                body: mockAsyncApi
              };
            });
          }

          return undefined;
        }
      }, {
        key: "post",
        value: function post(reqInfo) {
          if (reqInfo.req.url.endsWith('/publish')) {
            return reqInfo.utils.createResponse$(function () {
              return {
                status: angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__["STATUS"].OK
              };
            });
          }

          return undefined;
        }
      }]);

      return MockServer;
    }();
    /***/

  },

  /***/
  "./src/app/shared/mock/mock.springwolf-amqp-example.json":
  /*!***************************************************************!*\
    !*** ./src/app/shared/mock/mock.springwolf-amqp-example.json ***!
    \***************************************************************/

  /*! exports provided: Springwolf example project - AMQP, default */

  /***/
  function srcAppSharedMockMockSpringwolfAmqpExampleJson(module) {
    module.exports = JSON.parse("{\"Springwolf example project - AMQP\":{\"asyncapi\":\"2.0.0\",\"info\":{\"title\":\"Springwolf example project - AMQP\",\"version\":\"1.0.0\"},\"servers\":{\"amqp\":{\"url\":\"amqp:5672\",\"protocol\":\"amqp\"}},\"channels\":{\"example-bindings-queue\":{\"bindings\":{\"amqp\":{\"is\":\"routingKey\",\"exchange\":{\"name\":\"name\",\"autoDelete\":false}}},\"publish\":{\"bindings\":{\"amqp\":{\"cc\":[\"\"],\"expiration\":0,\"priority\":0,\"deliveryMode\":0,\"mandatory\":false,\"timestamp\":false,\"ack\":false}},\"message\":{\"name\":\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\",\"title\":\"AnotherPayloadDto\",\"payload\":{\"$ref\":\"#/components/schemas/AnotherPayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/NoHeaders\"}}}},\"example-topic-queue\":{\"bindings\":{\"amqp\":{\"is\":\"routingKey\",\"exchange\":{\"name\":\"example-topic-exchange\",\"autoDelete\":false}}},\"publish\":{\"bindings\":{\"amqp\":{\"cc\":[\"example-topic-routing-key\"],\"expiration\":0,\"priority\":0,\"deliveryMode\":0,\"mandatory\":false,\"timestamp\":false,\"ack\":false}},\"message\":{\"name\":\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\",\"title\":\"AnotherPayloadDto\",\"payload\":{\"$ref\":\"#/components/schemas/AnotherPayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/NoHeaders\"}}}},\"another-queue\":{\"bindings\":{\"amqp\":{\"is\":\"routingKey\",\"exchange\":{\"name\":\"\",\"autoDelete\":false}}},\"publish\":{\"bindings\":{\"amqp\":{\"cc\":[\"another-queue\"],\"expiration\":0,\"priority\":0,\"deliveryMode\":0,\"mandatory\":false,\"timestamp\":false,\"ack\":false}},\"message\":{\"name\":\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\",\"title\":\"AnotherPayloadDto\",\"payload\":{\"$ref\":\"#/components/schemas/AnotherPayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/NoHeaders\"}}}},\"example-manual-consumer-channel\":{\"publish\":{\"bindings\":{\"amqp\":{\"expiration\":0,\"cc\":[\"example-consumer-topic-routing-key\"],\"priority\":0,\"deliveryMode\":0,\"mandatory\":false,\"timestamp\":false,\"ack\":false}},\"message\":{\"name\":\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\",\"title\":\"AnotherPayloadDto\",\"description\":\"example-manual-consumer-channel-description\",\"payload\":{\"$ref\":\"#/components/schemas/AnotherPayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/NoHeaders\"}}},\"bindings\":{\"amqp\":{\"is\":\"routingKey\",\"exchange\":{\"name\":\"example-consumer-topic-exchange\",\"autoDelete\":false}}}},\"example-queue\":{\"bindings\":{\"amqp\":{\"is\":\"routingKey\",\"exchange\":{\"name\":\"\",\"autoDelete\":false}}},\"publish\":{\"bindings\":{\"amqp\":{\"cc\":[\"example-queue\"],\"expiration\":0,\"priority\":0,\"deliveryMode\":0,\"mandatory\":false,\"timestamp\":false,\"ack\":false}},\"message\":{\"name\":\"io.github.stavshamir.springwolf.example.dtos.ExamplePayloadDto\",\"title\":\"ExamplePayloadDto\",\"payload\":{\"$ref\":\"#/components/schemas/ExamplePayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/NoHeaders\"}}}},\"example-producer-channel\":{\"bindings\":{\"amqp\":{\"is\":\"routingKey\",\"exchange\":{\"name\":\"example-topic-exchange\",\"autoDelete\":false}}},\"subscribe\":{\"bindings\":{\"amqp\":{\"cc\":[\"example-topic-routing-key\"],\"expiration\":0,\"priority\":0,\"deliveryMode\":0,\"mandatory\":false,\"timestamp\":false,\"ack\":false}},\"message\":{\"name\":\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\",\"title\":\"AnotherPayloadDto\",\"description\":\"example-producer-channel-description\",\"payload\":{\"$ref\":\"#/components/schemas/AnotherPayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/NoHeaders\"}}}}},\"components\":{\"schemas\":{\"AnotherPayloadDto\":{\"required\":[\"example\"],\"type\":\"object\",\"properties\":{\"foo\":{\"type\":\"string\",\"description\":\"Foo field\",\"example\":\"bar\",\"exampleSetFlag\":true},\"example\":{\"$ref\":\"#/components/schemas/ExamplePayloadDto\",\"exampleSetFlag\":false}},\"description\":\"Another payload model\",\"example\":{\"foo\":\"bar\",\"example\":{\"someString\":\"some string value\",\"someLong\":5,\"someEnum\":\"FOO2\"}},\"exampleSetFlag\":true},\"ExamplePayloadDto\":{\"required\":[\"someEnum\",\"someString\"],\"type\":\"object\",\"properties\":{\"someString\":{\"type\":\"string\",\"description\":\"Some string field\",\"example\":\"some string value\",\"exampleSetFlag\":true},\"someLong\":{\"type\":\"integer\",\"description\":\"Some long field\",\"format\":\"int64\",\"example\":5,\"exampleSetFlag\":true},\"someEnum\":{\"type\":\"string\",\"description\":\"Some enum field\",\"example\":\"FOO2\",\"exampleSetFlag\":true,\"enum\":[\"FOO1\",\"FOO2\",\"FOO3\"]}},\"description\":\"Example payload model\",\"example\":{\"someString\":\"some string value\",\"someLong\":5,\"someEnum\":\"FOO2\"},\"exampleSetFlag\":true},\"NoHeaders\":{\"type\":\"object\",\"exampleSetFlag\":true}}}}}");
    /***/
  },

  /***/
  "./src/app/shared/mock/mock.springwolf-app.json":
  /*!******************************************************!*\
    !*** ./src/app/shared/mock/mock.springwolf-app.json ***!
    \******************************************************/

  /*! exports provided: Springwolf UI Demo, default */

  /***/
  function srcAppSharedMockMockSpringwolfAppJson(module) {
    module.exports = JSON.parse("{\"Springwolf UI Demo\":{\"asyncapi\":\"2.0.0\",\"info\":{\"title\":\"Springwolf UI Demo\",\"description\":\"This is a demo project for springwolf that shows how the UI looks like and functions.\",\"version\":\"1.0.0\"},\"servers\":{\"kafka\":{\"url\":\"kafka:29092\",\"protocol\":\"kafka\"}},\"channels\":{\"example-consumer-topic\":{\"publish\":{\"bindings\":{\"kafka\":{\"groupId\":{\"type\":\"string\",\"enum\":[\"example-group-id\"]}}},\"message\":{\"name\":\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\",\"title\":\"AnotherPayloadDto\",\"description\":\"Custom, optional description for this message\",\"payload\":{\"$ref\":\"#/components/schemas/AnotherPayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/NoHeaders\"}}}},\"example-producer-topic\":{\"publish\":{\"bindings\":{\"kafka\":{\"groupId\":{\"type\":\"string\",\"enum\":[\"example-group-id\"]}}},\"message\":{\"name\":\"io.github.stavshamir.springwolf.example.dtos.ExamplePayloadDto\",\"title\":\"ExamplePayloadDto\",\"payload\":{\"$ref\":\"#/components/schemas/ExamplePayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/NoHeaders\"}}},\"subscribe\":{\"bindings\":{\"kafka\":{}},\"message\":{\"name\":\"io.github.stavshamir.springwolf.example.dtos.ExamplePayloadDto\",\"title\":\"ExamplePayloadDto\",\"payload\":{\"$ref\":\"#/components/schemas/ExamplePayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/NoHeaders\"}}}},\"multi-payload-topic\":{\"publish\":{\"bindings\":{\"kafka\":{}},\"message\":{\"oneOf\":[{\"name\":\"io.github.stavshamir.springwolf.example.dtos.ExamplePayloadDto\",\"title\":\"ExamplePayloadDto\",\"description\":\"Custom, optional description for this message\",\"payload\":{\"$ref\":\"#/components/schemas/ExamplePayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/SpringDefaultHeaders\"}},{\"name\":\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\",\"title\":\"AnotherPayloadDto\",\"payload\":{\"$ref\":\"#/components/schemas/AnotherPayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/NoHeaders\"}}]}}}},\"components\":{\"schemas\":{\"ExamplePayloadDto\":{\"description\":\"Example payload model\",\"type\":\"object\",\"properties\":{\"someString\":{\"description\":\"some string field\",\"type\":\"string\",\"example\":\"string\"},\"someLong\":{\"description\":\"some long field\",\"type\":\"integer\",\"format\":\"int64\",\"example\":0},\"someEnum\":{\"description\":\"some enum field\",\"type\":\"string\",\"enum\":[\"FOO1\",\"FOO2\",\"FOO3\"],\"example\":\"FOO1\"}},\"example\":{\"someString\":\"string\",\"someLong\":0,\"someEnum\":\"FOO1\"},\"required\":[\"someString\",\"someEnum\"]},\"AnotherPayloadDto\":{\"description\":\"Another payload model\",\"type\":\"object\",\"properties\":{\"foo\":{\"description\":\"foo field\",\"type\":\"string\"},\"example\":{\"description\":\"example field\",\"$ref\":\"#/components/schemas/ExamplePayloadDto\"}},\"example\":{\"foo\":\"string\",\"example\":{\"someString\":\"string\",\"someLong\":0,\"someEnum\":\"FOO1\"}}},\"NoHeaders\":{\"type\":\"object\",\"exampleSetFlag\":true},\"SpringDefaultHeaders\":{\"type\":\"object\",\"properties\":{\"__TypeId__\":{\"type\":\"string\",\"example\":\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\",\"exampleSetFlag\":true,\"enum\":[\"io.github.stavshamir.springwolf.example.dtos.ExamplePayloadDto\",\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\"]}},\"example\":{\"__TypeId__\":\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\"},\"exampleSetFlag\":true}}}}}");
    /***/
  },

  /***/
  "./src/app/shared/mock/mock.springwolf-kafka-example.json":
  /*!****************************************************************!*\
    !*** ./src/app/shared/mock/mock.springwolf-kafka-example.json ***!
    \****************************************************************/

  /*! exports provided: Springwolf example project - Kafka, default */

  /***/
  function srcAppSharedMockMockSpringwolfKafkaExampleJson(module) {
    module.exports = JSON.parse("{\"Springwolf example project - Kafka\":{\"asyncapi\":\"2.0.0\",\"info\":{\"title\":\"Springwolf example project - Kafka\",\"version\":\"1.0.0\"},\"servers\":{\"kafka\":{\"url\":\"kafka:29092\",\"protocol\":\"kafka\"}},\"channels\":{\"another-topic\":{\"publish\":{\"bindings\":{\"kafka\":{\"groupId\":{\"type\":\"string\",\"enum\":[\"example-group-id\"]}}},\"message\":{\"name\":\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\",\"title\":\"AnotherPayloadDto\",\"payload\":{\"$ref\":\"#/components/schemas/AnotherPayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/HeadersUnknown\"}}},\"bindings\":{\"kafka\":{}}},\"example-topic\":{\"publish\":{\"bindings\":{\"kafka\":{}},\"message\":{\"name\":\"io.github.stavshamir.springwolf.example.dtos.ExamplePayloadDto\",\"title\":\"ExamplePayloadDto\",\"payload\":{\"$ref\":\"#/components/schemas/ExamplePayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/HeadersUnknown\"}}},\"bindings\":{\"kafka\":{}}},\"example-producer-topic\":{\"subscribe\":{\"bindings\":{\"kafka\":{}},\"message\":{\"oneOf\":[{\"name\":\"io.github.stavshamir.springwolf.example.dtos.ExamplePayloadDto\",\"title\":\"ExamplePayloadDto\",\"payload\":{\"$ref\":\"#/components/schemas/ExamplePayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/SpringDefaultHeaders\"}},{\"name\":\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\",\"title\":\"AnotherPayloadDto\",\"description\":\"Custom, optional description for this produced to topic\",\"payload\":{\"$ref\":\"#/components/schemas/AnotherPayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/CloudEventHeadersForAnotherPayloadDtoEndpoint\"}}]}},\"bindings\":{\"kafka\":{}}},\"example-consumer-topic\":{\"publish\":{\"bindings\":{\"kafka\":{}},\"message\":{\"name\":\"io.github.stavshamir.springwolf.example.dtos.ExamplePayloadDto\",\"title\":\"ExamplePayloadDto\",\"description\":\"Custom, optional description for this consumed topic\",\"payload\":{\"$ref\":\"#/components/schemas/ExamplePayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/HeadersUnknown\"}}},\"bindings\":{\"kafka\":{}}},\"multi-payload-topic\":{\"publish\":{\"bindings\":{\"kafka\":{}},\"message\":{\"oneOf\":[{\"name\":\"io.github.stavshamir.springwolf.example.dtos.ExamplePayloadDto\",\"title\":\"ExamplePayloadDto\",\"payload\":{\"$ref\":\"#/components/schemas/ExamplePayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/HeadersUnknown\"}},{\"name\":\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\",\"title\":\"AnotherPayloadDto\",\"payload\":{\"$ref\":\"#/components/schemas/AnotherPayloadDto\"},\"headers\":{\"$ref\":\"#/components/schemas/HeadersUnknown\"}},{\"name\":\"javax.money.MonetaryAmount\",\"title\":\"MonetaryAmount\",\"payload\":{\"$ref\":\"#/components/schemas/MonetaryAmount\"},\"headers\":{\"$ref\":\"#/components/schemas/HeadersUnknown\"}}]}},\"bindings\":{\"kafka\":{}}}},\"components\":{\"schemas\":{\"MonetaryAmount\":{\"type\":\"object\",\"properties\":{\"amount\":{\"type\":\"number\",\"example\":99.99,\"exampleSetFlag\":true},\"currency\":{\"type\":\"string\",\"example\":\"USD\",\"exampleSetFlag\":true}},\"example\":{\"amount\":99.99,\"currency\":\"USD\"},\"exampleSetFlag\":true},\"ExamplePayloadDto\":{\"type\":\"object\",\"properties\":{\"someString\":{\"type\":\"string\",\"exampleSetFlag\":false},\"someLong\":{\"type\":\"integer\",\"format\":\"int64\",\"exampleSetFlag\":false},\"someEnum\":{\"type\":\"string\",\"exampleSetFlag\":false,\"enum\":[\"FOO1\",\"FOO2\",\"FOO3\"]}},\"example\":{\"someString\":\"string\",\"someLong\":0,\"someEnum\":\"FOO1\"},\"exampleSetFlag\":true},\"CloudEventHeadersForAnotherPayloadDtoEndpoint\":{\"type\":\"object\",\"properties\":{\"ce_specversion\":{\"type\":\"string\",\"description\":\"Spec Version Header\",\"example\":\"1.0\",\"exampleSetFlag\":true},\"ce_time\":{\"type\":\"string\",\"description\":\"Time Header\",\"example\":\"2015-07-20T15:49:04-07:00\",\"exampleSetFlag\":true},\"content-type\":{\"type\":\"string\",\"description\":\"Content-Type Header\",\"example\":\"application/json\",\"exampleSetFlag\":true},\"ce_id\":{\"type\":\"string\",\"description\":\"Id Header\",\"example\":\"1234-1234-1234\",\"exampleSetFlag\":true},\"ce_type\":{\"type\":\"string\",\"description\":\"Payload Type Header\",\"example\":\"io.github.stavshamir.springwolf.CloudEventHeadersForAnotherPayloadDtoEndpoint\",\"exampleSetFlag\":true},\"ce_source\":{\"type\":\"string\",\"description\":\"Source Header\",\"example\":\"springwolf-kafka-example/anotherPayloadDtoEndpoint\",\"exampleSetFlag\":true}},\"example\":{\"ce_specversion\":\"1.0\",\"ce_time\":\"2015-07-20T15:49:04-07:00\",\"content-type\":\"application/json\",\"ce_id\":\"1234-1234-1234\",\"ce_type\":\"io.github.stavshamir.springwolf.CloudEventHeadersForAnotherPayloadDtoEndpoint\",\"ce_source\":\"springwolf-kafka-example/anotherPayloadDtoEndpoint\"},\"exampleSetFlag\":true},\"HeadersUnknown\":{\"type\":\"object\",\"properties\":{},\"example\":{},\"exampleSetFlag\":true},\"AnotherPayloadDto\":{\"type\":\"object\",\"properties\":{\"foo\":{\"type\":\"string\",\"exampleSetFlag\":false},\"example\":{\"$ref\":\"#/components/schemas/ExamplePayloadDto\",\"exampleSetFlag\":false}},\"example\":{\"foo\":\"string\",\"example\":{\"someString\":\"string\",\"someLong\":0,\"someEnum\":\"FOO1\"}},\"exampleSetFlag\":true},\"SpringDefaultHeaders\":{\"type\":\"object\",\"properties\":{\"__TypeId__\":{\"type\":\"string\",\"description\":\"Spring Type Id Header\",\"example\":\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\",\"exampleSetFlag\":true,\"enum\":[\"io.github.stavshamir.springwolf.example.dtos.ExamplePayloadDto\",\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\"]}},\"example\":{\"__TypeId__\":\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\"},\"exampleSetFlag\":true}}}}}");
    /***/
  },

  /***/
  "./src/app/shared/models/example.model.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/models/example.model.ts ***!
    \************************************************/

  /*! exports provided: Example */

  /***/
  function srcAppSharedModelsExampleModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Example", function () {
      return Example;
    });

    var Example = function Example(exampleObject) {
      _classCallCheck(this, Example);

      this.value = JSON.stringify(exampleObject, null, 2);
      this.lineCount = this.value.split('\n').length;
    };
    /***/

  },

  /***/
  "./src/app/shared/publisher.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/publisher.service.ts ***!
    \*********************************************/

  /*! exports provided: PublisherService */

  /***/
  function srcAppSharedPublisherServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublisherService", function () {
      return PublisherService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./endpoints */
    "./src/app/shared/endpoints.ts");

    var PublisherService = /*#__PURE__*/function () {
      function PublisherService(http) {
        _classCallCheck(this, PublisherService);

        this.http = http;
      }

      _createClass(PublisherService, [{
        key: "publish",
        value: function publish(protocol, topic, payload) {
          var url = _endpoints__WEBPACK_IMPORTED_MODULE_2__["Endpoints"].getPublishEndpoint(protocol);

          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('topic', topic);
          console.log("Publishing to ".concat(url));
          return this.http.post(url, payload, {
            params: params
          });
        }
      }]);

      return PublisherService;
    }();

    PublisherService.ɵfac = function PublisherService_Factory(t) {
      return new (t || PublisherService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    PublisherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PublisherService,
      factory: PublisherService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublisherService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/runner/work/springwolf-ui/springwolf-ui/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map