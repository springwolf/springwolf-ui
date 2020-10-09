function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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


    var _shared_mock_server__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./shared/mock-server */
    "./src/app/shared/mock-server.ts");
    /* harmony import */


    var _shared_publisher_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./shared/publisher.service */
    "./src/app/shared/publisher.service.ts");

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
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__["HighlightModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production ? [] : angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["HttpClientInMemoryWebApiModule"].forRoot(_shared_mock_server__WEBPACK_IMPORTED_MODULE_18__["MockServer"], {
        delay: 100
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _info_info_component__WEBPACK_IMPORTED_MODULE_12__["InfoComponent"], _servers_servers_component__WEBPACK_IMPORTED_MODULE_16__["ServersComponent"], _channels_channels_component__WEBPACK_IMPORTED_MODULE_10__["ChannelsComponent"], _channels_channel_main_channel_main_component__WEBPACK_IMPORTED_MODULE_9__["ChannelMainComponent"], _schemas_schemas_component__WEBPACK_IMPORTED_MODULE_15__["SchemasComponent"], _schemas_schema_schema_component__WEBPACK_IMPORTED_MODULE_14__["SchemaComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__["HighlightModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["HttpClientInMemoryWebApiModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _info_info_component__WEBPACK_IMPORTED_MODULE_12__["InfoComponent"], _servers_servers_component__WEBPACK_IMPORTED_MODULE_16__["ServersComponent"], _channels_channels_component__WEBPACK_IMPORTED_MODULE_10__["ChannelsComponent"], _channels_channel_main_channel_main_component__WEBPACK_IMPORTED_MODULE_9__["ChannelMainComponent"], _schemas_schemas_component__WEBPACK_IMPORTED_MODULE_15__["SchemasComponent"], _schemas_schema_schema_component__WEBPACK_IMPORTED_MODULE_14__["SchemaComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__["HighlightModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production ? [] : angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["HttpClientInMemoryWebApiModule"].forRoot(_shared_mock_server__WEBPACK_IMPORTED_MODULE_18__["MockServer"], {
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


    var src_app_shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/asyncapi.service */
    "./src/app/shared/asyncapi.service.ts");
    /* harmony import */


    var src_app_shared_publisher_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/publisher.service */
    "./src/app/shared/publisher.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/clipboard */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
    /* harmony import */


    var _schemas_schema_schema_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../schemas/schema/schema.component */
    "./src/app/schemas/schema/schema.component.ts");

    function ChannelMainComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Group ID");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.kafkaBinding.groupId);
      }
    }

    function ChannelMainComponent_app_schema_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-schema", 13);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("schema", ctx_r1.schema);
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

          this.asyncApiService.getAsyncApi().subscribe(function (asyncapi) {
            _this.schema = asyncapi.components.schemas.get(_this.operation.message.title);
            _this.defaultExample = _this.schema.example;
            _this.exampleTextAreaLineCount = _this.defaultExample.lineCount;
          });

          if ("kafka" in this.operation.bindings) {
            this.kafkaBinding = {
              groupId: this.operation.bindings.kafka.groupId["enum"][0]
            };
          }
        }
      }, {
        key: "recalculateLineCount",
        value: function recalculateLineCount(text) {
          this.exampleTextAreaLineCount = text.split('\n').length;
        }
      }, {
        key: "publish",
        value: function publish(example) {
          var _this2 = this;

          try {
            var json = JSON.parse(example);
            this.publisherService.publishToKafka(this.channelName, json).subscribe(function (_) {
              return _this2.snackBar.open('Example payload sent to: ' + _this2.channelName, 'PUBLISHED', {
                duration: 3000
              });
            });
          } catch (error) {
            this.snackBar.open('Example payload is not valid', 'ERROR', {
              duration: 3000
            });
          }
        }
      }]);

      return ChannelMainComponent;
    }();

    ChannelMainComponent.ɵfac = function ChannelMainComponent_Factory(t) {
      return new (t || ChannelMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_1__["AsyncApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_publisher_service__WEBPACK_IMPORTED_MODULE_2__["PublisherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]));
    };

    ChannelMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChannelMainComponent,
      selectors: [["app-channel-main"]],
      inputs: {
        channelName: "channelName",
        operation: "operation"
      },
      decls: 23,
      vars: 7,
      consts: [["fxLayout", "", "fxLayoutAlign", "flex-start center", "fxLayoutGap", "12px"], [1, "property-badge"], [1, "payload-name"], ["fxLayout", "", "fxLayoutAlign", "flex-start center", "fxLayoutGap", "12px", 4, "ngIf"], ["animationDuration", "0ms"], ["label", "Schema"], [3, "schema", 4, "ngIf"], ["label", "Example"], ["spellcheck", "false", 3, "rows", "value", "keyup"], ["exampleTextArea", ""], ["fxLayout", "", "fxLayoutGap", "8px"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "cdkCopyToClipboard"], [3, "schema"]],
      template: function ChannelMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Payload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChannelMainComponent_div_9_Template, 5, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-tab-group", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-tab", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChannelMainComponent_app_schema_12_Template, 1, 1, "app-schema", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-tab", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "textarea", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ChannelMainComponent_Template_textarea_keyup_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

            return ctx.recalculateLineCount(_r2.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelMainComponent_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

            return ctx.publish(_r2.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Publish ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChannelMainComponent_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

            _r2.value = ctx.defaultExample.value;
            return ctx.exampleTextAreaLineCount = ctx.defaultExample.lineCount;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Default ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Copy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.operation.message.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.operation.message.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.kafkaBinding.groupId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.schema);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.exampleTextAreaLineCount)("value", ctx.defaultExample == null ? null : ctx.defaultExample.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkCopyToClipboard", _r2.value);
        }
      },
      directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTab"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_9__["CdkCopyToClipboard"], _schemas_schema_schema_component__WEBPACK_IMPORTED_MODULE_10__["SchemaComponent"]],
      styles: ["textarea[_ngcontent-%COMP%] {\n    margin-top: 16px;\n    padding: 8px;\n    width: 99%;\n    border-radius: 4px;\n    border-width: 0;\n    line-height: 24px;\n    background-color: #282c34;\n    color: #abb2bf;\n}\n\nbutton[_ngcontent-%COMP%] {\n    margin-top: 8px;\n}\n\n.property-badge[_ngcontent-%COMP%] {\n    background-color: #C5CAE9;\n    border-radius: 4px;\n    padding: 6px;\n    font-size: small;\n    font-weight: bold;\n}\n\n.payload-name[_ngcontent-%COMP%] {\n    background-color: #E0E0E0;\n    border-radius: 4px;\n    padding: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbm5lbHMvY2hhbm5lbC1tYWluL2NoYW5uZWwtbWFpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NoYW5uZWxzL2NoYW5uZWwtbWFpbi9jaGFubmVsLW1haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRleHRhcmVhIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICB3aWR0aDogOTklO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDtcbiAgICBjb2xvcjogI2FiYjJiZjtcbn1cblxuYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5wcm9wZXJ0eS1iYWRnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M1Q0FFOTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wYXlsb2FkLW5hbWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMEUwRTA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDZweDtcbn0iXX0= */"]
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
          type: src_app_shared_asyncapi_service__WEBPACK_IMPORTED_MODULE_1__["AsyncApiService"]
        }, {
          type: src_app_shared_publisher_service__WEBPACK_IMPORTED_MODULE_2__["PublisherService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
        }];
      }, {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-channel-main", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var channel_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](channel_r1.value.operation.type === "SUBSCRIBE" ? "CONSUMER" : "PRODUCER");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](channel_r1.key);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("channelName", channel_r1.key)("operation", channel_r1.value.operation);
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

          this.asyncApiService.getAsyncApi().subscribe(function (asyncapi) {
            return _this3.channels = asyncapi.channels;
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
      decls: 5,
      vars: 3,
      consts: [[4, "ngFor", "ngForOf"], ["fxLayout", "", "fxLayoutAlign", "flex-start center", "fxLayoutGap", "16px"], [1, "operation-badge"], [3, "channelName", "operation"]],
      template: function ChannelsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Channels");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChannelsComponent_mat_expansion_panel_3_Template, 8, 4, "mat-expansion-panel", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx.channels));
        }
      },
      directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _channel_main_channel_main_component__WEBPACK_IMPORTED_MODULE_5__["ChannelMainComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"]],
      styles: [".operation-badge[_ngcontent-%COMP%] {\n    background-color: #CDDC39;\n    border-radius: 4px;\n    padding: 8px;\n    font-size: small;\n    font-weight: bold;\n}\n\nmat-divider[_ngcontent-%COMP%] {\n    height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbm5lbHMvY2hhbm5lbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY2hhbm5lbHMvY2hhbm5lbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcGVyYXRpb24tYmFkZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRERDMzk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5tYXQtZGl2aWRlciB7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuIl19 */"]
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


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 8,
      vars: 0,
      consts: [["color", "primary", "fxLayout", "", "fxLayoutAlign", "space-between center"], ["fxLayout", "", "fxLayoutAlign", "center center", "fxLayoutGap", "16px"], ["href", "https://www.asyncapi.com"], ["src", "../../assets/asyncapi-logo.png", "alt", "AsyncAPI logo", 1, "logo"], ["href", "https://github.com/stavshamir/springwolf"], [1, "fa", "fa-github", "fa-2x"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "springwolf");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"]],
      styles: [".logo[_ngcontent-%COMP%] {\n    height: 24px;\n    display:block;\n}\n\na[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: white;\n}\n\na[_ngcontent-%COMP%]:hover {\n    color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgZGlzcGxheTpibG9jaztcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuYTpob3ZlciB7XG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcbn0iXX0= */"]
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
        return [];
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

    function InfoComponent_p_4_Template(rf, ctx) {
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
          var _this4 = this;

          this.asyncApiService.getAsyncApi().subscribe(function (asyncapi) {
            return _this4.info = asyncapi.info;
          });
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
      decls: 5,
      vars: 3,
      consts: [[4, "ngIf"]],
      template: function InfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InfoComponent_p_4_Template, 2, 1, "p", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info == null ? null : ctx.info.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("API VERSION ", ctx.info == null ? null : ctx.info.version, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

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

    var modules = [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__["ClipboardModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"]];

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
      imports: [modules, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__["ClipboardModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__["ClipboardModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"]],
        exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__["ClipboardModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"]]
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


    var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-highlightjs */
    "./node_modules/ngx-highlightjs/__ivy_ngcc__/fesm2015/ngx-highlightjs.js");

    var SchemaComponent = /*#__PURE__*/function () {
      function SchemaComponent() {
        _classCallCheck(this, SchemaComponent);
      }

      _createClass(SchemaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.schemaProperties = JSON.stringify(this.schema.properties, null, 2);
        }
      }]);

      return SchemaComponent;
    }();

    SchemaComponent.ɵfac = function SchemaComponent_Factory(t) {
      return new (t || SchemaComponent)();
    };

    SchemaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SchemaComponent,
      selectors: [["app-schema"]],
      inputs: {
        schema: "schema"
      },
      decls: 2,
      vars: 1,
      consts: [[3, "highlight"]],
      template: function SchemaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.schemaProperties);
        }
      },
      directives: [ngx_highlightjs__WEBPACK_IMPORTED_MODULE_1__["Highlight"]],
      styles: ["code[_ngcontent-%COMP%] {\n    margin-top: 16px;\n    padding: 8px;\n    border-radius: 4px;\n  }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchemaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-schema',
          template: '<pre><code [highlight]="schemaProperties"></code></pre>',
          styles: ["code {\n    margin-top: 16px;\n    padding: 8px;\n    border-radius: 4px;\n  }"]
        }]
      }], function () {
        return [];
      }, {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-schema", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var schema_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](schema_r1.key);

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
          var _this5 = this;

          this.asyncApiService.getAsyncApi().subscribe(function (asyncapi) {
            return _this5.schemas = asyncapi.components.schemas;
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
      consts: [[4, "ngFor", "ngForOf"], [3, "schema"]],
      template: function SchemasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Schemas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SchemasComponent_mat_expansion_panel_3_Template, 6, 2, "mat-expansion-panel", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx.schemas));
        }
      },
      directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _schema_schema_component__WEBPACK_IMPORTED_MODULE_4__["SchemaComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjaGVtYXMvc2NoZW1hcy5jb21wb25lbnQuY3NzIn0= */"]
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
          var _this6 = this;

          this.asyncApiService.getAsyncApi().subscribe(function (asyncapi) {
            return _this6.servers = asyncapi.servers;
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


    var _models_example_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./models/example.model */
    "./src/app/shared/models/example.model.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AsyncApiService = /*#__PURE__*/function () {
      function AsyncApiService(http) {
        _classCallCheck(this, AsyncApiService);

        this.http = http;
      }

      _createClass(AsyncApiService, [{
        key: "getAsyncApi",
        value: function getAsyncApi() {
          var _this7 = this;

          return this.http.get('/asyncapi/docs').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (item) {
            return _this7.toAsyncApi(item);
          }));
        }
      }, {
        key: "toAsyncApi",
        value: function toAsyncApi(item) {
          return {
            info: item.info,
            servers: this.mapServers(item.servers),
            channels: this.mapChannels(item.channels),
            components: {
              schemas: this.mapSchemas(item.components.schemas)
            }
          };
        }
      }, {
        key: "mapServers",
        value: function mapServers(servers) {
          var s = new Map();
          Object.entries(servers).forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                k = _ref2[0],
                v = _ref2[1];

            return s.set(k, v);
          });
          return s;
        }
      }, {
        key: "mapChannels",
        value: function mapChannels(channels) {
          var _this8 = this;

          var s = new Map();
          Object.entries(channels).forEach(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                k = _ref4[0],
                v = _ref4[1];

            return s.set(k, {
              description: v.description,
              operation: _this8.mapOperation(v.subscribe, v.publish)
            });
          });
          return s;
        }
      }, {
        key: "mapOperation",
        value: function mapOperation(subscribe, publish) {
          var isSubscribe = subscribe !== null;

          if (isSubscribe) {
            return {
              type: "SUBSCRIBE",
              message: subscribe.message,
              bindings: subscribe.bindings
            };
          } else {
            return {
              type: "PUBLISH",
              message: publish.message,
              bindings: publish.bindings
            };
          }
        }
      }, {
        key: "mapSchemas",
        value: function mapSchemas(schemas) {
          var s = new Map();
          Object.entries(schemas).forEach(function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
                k = _ref6[0],
                v = _ref6[1];

            return s.set(k, {
              type: v.type,
              properties: v.properties,
              example: new _models_example_model__WEBPACK_IMPORTED_MODULE_0__["Example"](v.example)
            });
          });
          return s;
        }
      }]);

      return AsyncApiService;
    }();

    AsyncApiService.ɵfac = function AsyncApiService_Factory(t) {
      return new (t || AsyncApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    AsyncApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AsyncApiService,
      factory: AsyncApiService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AsyncApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/mock-server.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/mock-server.ts ***!
    \***************************************/

  /*! exports provided: MockServer */

  /***/
  function srcAppSharedMockServerTs(module, __webpack_exports__, __webpack_require__) {
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


    var _mock_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mock.json */
    "./src/app/shared/mock.json");

    var _mock_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ./mock.json */
    "./src/app/shared/mock.json", 1);

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

          if (reqInfo.req.url === '/asyncapi/docs') {
            return reqInfo.utils.createResponse$(function () {
              return {
                status: angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_0__["STATUS"].OK,
                body: _mock_json__WEBPACK_IMPORTED_MODULE_1__
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
  "./src/app/shared/mock.json":
  /*!**********************************!*\
    !*** ./src/app/shared/mock.json ***!
    \**********************************/

  /*! exports provided: asyncapi, info, servers, channels, components, default */

  /***/
  function srcAppSharedMockJson(module) {
    module.exports = JSON.parse("{\"asyncapi\":\"2.0.0\",\"info\":{\"title\":\"Springwolf example project\",\"description\":\"Mock data\",\"version\":\"1.0.0\"},\"servers\":{\"kafka\":{\"url\":\"kafka:29092\",\"protocol\":\"kafka\"}},\"channels\":{\"another-topic\":{\"subscribe\":{\"bindings\":{\"kafka\":{\"groupId\":{\"type\":\"string\",\"enum\":[\"example-group-id\"]}}},\"message\":{\"name\":\"io.github.stavshamir.springwolf.example.dtos.AnotherPayloadDto\",\"title\":\"AnotherPayloadDto\",\"payload\":{\"$ref\":\"#/components/schemas/AnotherPayloadDto\"}}}},\"example-topic\":{\"subscribe\":{\"bindings\":{\"kafka\":{\"groupId\":{\"type\":\"string\",\"enum\":[\"\"]}}},\"message\":{\"name\":\"io.github.stavshamir.springwolf.example.dtos.ExamplePayloadDto\",\"title\":\"ExamplePayloadDto\",\"payload\":{\"$ref\":\"#/components/schemas/ExamplePayloadDto\"}}}}},\"components\":{\"schemas\":{\"ExamplePayloadDto\":{\"type\":\"object\",\"properties\":{\"someString\":{\"type\":\"string\"},\"someLong\":{\"type\":\"integer\",\"format\":\"int64\"},\"someEnum\":{\"type\":\"string\",\"enum\":[\"FOO1\",\"FOO2\",\"FOO3\"]}},\"example\":{\"someString\":\"string\",\"someLong\":0,\"someEnum\":\"FOO1\"}},\"AnotherPayloadDto\":{\"type\":\"object\",\"properties\":{\"foo\":{\"type\":\"string\"},\"example\":{\"$ref\":\"#/components/schemas/ExamplePayloadDto\"}},\"example\":{\"foo\":\"string\",\"example\":{\"someString\":\"string\",\"someLong\":0,\"someEnum\":\"FOO1\"}}}}}}");
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

    var PublisherService = /*#__PURE__*/function () {
      function PublisherService(http) {
        _classCallCheck(this, PublisherService);

        this.http = http;
      }

      _createClass(PublisherService, [{
        key: "publishToKafka",
        value: function publishToKafka(topic, payload) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('topic', topic);
          return this.http.post('/asyncapi/kafka/publish', payload, {
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
    /*! /home/stav/springwolf/springwolf-ui/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map