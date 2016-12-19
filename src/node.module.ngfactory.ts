/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './node.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from 'angular2-platform-node/node-platform';
import * as import5 from 'angular2-platform-node/node-http';
import * as import6 from 'angular2-universal/node/universal-module';
import * as import7 from '@angular/forms/src/directives';
import * as import8 from '@angular/forms/src/form_providers';
import * as import9 from '@angular/router/src/router_module';
import * as import10 from './app/shared/shared.module';
import * as import11 from './app/home/home-routing.module';
import * as import12 from './app/home/home.module';
import * as import13 from './app/about/about-routing.module';
import * as import14 from './app/about/about.module';
import * as import15 from './app/todo/todo-routing.module';
import * as import16 from './app/todo/todo.module';
import * as import17 from './app/app-routing.module';
import * as import18 from './app/app.module';
import * as import19 from '@angular/common/src/localization';
import * as import20 from '@angular/core/src/application_init';
import * as import21 from '@angular/core/src/testability/testability';
import * as import22 from '@angular/core/src/application_ref';
import * as import23 from '@angular/core/src/linker/compiler';
import * as import24 from 'angular2-platform-node/node-shared-styles-host';
import * as import25 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import26 from 'angular2-platform-node/node-renderer';
import * as import27 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import28 from '@angular/core/src/linker/view_utils';
import * as import29 from 'angular2-platform-node/node-location';
import * as import30 from '@angular/http/src/base_request_options';
import * as import31 from '@angular/http/src/base_response_options';
import * as import32 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import33 from '@angular/forms/src/form_builder';
import * as import34 from '@angular/common/src/location/location';
import * as import35 from '@angular/router/src/url_tree';
import * as import36 from '@angular/router/src/router_outlet_map';
import * as import37 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import38 from '@angular/router/src/router_preloader';
import * as import39 from './app/shared/services/helpers';
import * as import40 from './app/shared/services/api.service';
import * as import41 from '@angular/core/src/di/injector';
import * as import42 from './app/home/home.component.ngfactory';
import * as import43 from './app/about/about.component.ngfactory';
import * as import44 from './app/todo/todo.component.ngfactory';
import * as import45 from './app/app.component.ngfactory';
import * as import46 from '@angular/core/src/zone/ng_zone';
import * as import47 from '@angular/platform-browser/src/dom/events/key_events';
import * as import48 from './app/home/home.component';
import * as import49 from './app/about/about.component';
import * as import50 from './app/todo/todo.component';
import * as import51 from 'angular2-universal/node/env';
import * as import52 from '@angular/router/src/router';
import * as import53 from '@angular/core/src/console';
import * as import54 from '@angular/core/src/i18n/tokens';
import * as import55 from '@angular/core/src/error_handler';
import * as import56 from '@angular/core/src/application_tokens';
import * as import57 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import58 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import59 from '@angular/platform-browser/src/dom/animation_driver';
import * as import60 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import61 from '@angular/core/src/render/api';
import * as import62 from '@angular/core/src/security';
import * as import63 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import64 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import65 from 'angular2-platform-node/tokens';
import * as import66 from '@angular/common/src/location/location_strategy';
import * as import67 from '@angular/common/src/location/platform_location';
import * as import68 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import69 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import70 from '@angular/http/src/interfaces';
import * as import71 from '@angular/http/src/backends/browser_xhr';
import * as import72 from '@angular/http/src/backends/xhr_backend';
import * as import73 from '@angular/http/src/http';
import * as import74 from '@angular/http/src/backends/jsonp_backend';
import * as import75 from '@angular/router/src/router_config_loader';
import * as import76 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import77 from '@angular/router/src/router_state';
class MainModuleInjector extends import0.NgModuleInjector<import1.MainModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _NodeModule_2:import4.NodeModule;
  _NodeHttpModule_3:import5.NodeHttpModule;
  _NodeJsonpModule_4:import5.NodeJsonpModule;
  _UniversalModule_5:import6.UniversalModule;
  _InternalFormsSharedModule_6:import7.InternalFormsSharedModule;
  _FormsModule_7:import8.FormsModule;
  _ROUTER_FORROOT_GUARD_8:any;
  _RouterModule_9:import9.RouterModule;
  _ReactiveFormsModule_10:import8.ReactiveFormsModule;
  _SharedModule_11:import10.SharedModule;
  _HomeRoutingModule_12:import11.HomeRoutingModule;
  _HomeModule_13:import12.HomeModule;
  _AboutRoutingModule_14:import13.AboutRoutingModule;
  _AboutModule_15:import14.AboutModule;
  _TodoRoutingModule_16:import15.TodoRoutingModule;
  _TodoModule_17:import16.TodoModule;
  _AppRoutingModule_18:import17.AppRoutingModule;
  _AppModule_19:import18.AppModule;
  _MainModule_20:import1.MainModule;
  __LOCALE_ID_21:any;
  __NgLocalization_22:import19.NgLocaleLocalization;
  _ErrorHandler_23:any;
  _ApplicationInitStatus_24:import20.ApplicationInitStatus;
  _TestabilityRegistry_25:import4.MockTestabilityRegistry;
  _Testability_26:import21.Testability;
  _ApplicationRef__27:import22.ApplicationRef_;
  __ApplicationRef_28:any;
  __Compiler_29:import23.Compiler;
  __APP_ID_30:any;
  __NodeSharedStylesHost_31:import24.NodeSharedStylesHost;
  __DOCUMENT_32:any;
  __NodeDomEventsPlugin_33:import4.NodeDomEventsPlugin;
  __HAMMER_GESTURE_CONFIG_34:import25.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_35:any[];
  __NodeEventManager_36:import4.NodeEventManager;
  __EventManager_37:any;
  __AnimationDriver_38:any;
  __NodeDomRootRenderer_39:import26.NodeDomRootRenderer;
  __DomRootRenderer_40:any;
  __RootRenderer_41:any;
  __DomSanitizer_42:import27.DomSanitizerImpl;
  __Sanitizer_43:any;
  __ViewUtils_44:import28.ViewUtils;
  __IterableDiffers_45:any;
  __KeyValueDiffers_46:any;
  __ORIGIN_URL_47:any;
  __REQUEST_URL_48:any;
  __APP_BASE_HREF_49:any;
  __PlatformLocation_50:import29.NodePlatformLocation;
  __DomEventsPlugin_51:any[];
  __SharedStylesHost_52:any;
  __DomSharedStylesHost_53:any;
  __XSRFStrategy_54:any;
  __BrowserXhr_55:any;
  __RequestOptions_56:import30.BaseRequestOptions;
  __ResponseOptions_57:import31.BaseResponseOptions;
  __XHRBackend_58:import5.NodeBackend;
  __Http_59:any;
  __JSONPBackend_60:import5.NodeJsonpBackend_;
  __Jsonp_61:any;
  __RadioControlRegistry_62:import32.RadioControlRegistry;
  __FormBuilder_63:import33.FormBuilder;
  __ROUTES_64:any[];
  __ROUTER_CONFIGURATION_65:any;
  __LocationStrategy_66:any;
  __Location_67:import34.Location;
  __UrlSerializer_68:import35.DefaultUrlSerializer;
  __RouterOutletMap_69:import36.RouterOutletMap;
  __NgModuleFactoryLoader_70:import37.SystemJsNgModuleLoader;
  __Router_71:any;
  __ActivatedRoute_72:any;
  _NoPreloading_73:import38.NoPreloading;
  _PreloadingStrategy_74:any;
  _RouterPreloader_75:import38.RouterPreloader;
  __PreloadAllModules_76:import38.PreloadAllModules;
  __APP_BOOTSTRAP_LISTENER_77:any[];
  __Helpers_78:import39.Helpers;
  __ApiService_79:import40.ApiService;
  __isBrowser_80:any;
  __isNode_81:any;
  constructor(parent:import41.Injector) {
    super(parent,[
      import42.HomeComponentNgFactory,
      import43.AboutComponentNgFactory,
      import44.TodoComponentNgFactory,
      import45.AppComponentNgFactory
    ]
    ,[import45.AppComponentNgFactory]);
  }
  get _LOCALE_ID_21():any {
    if ((this.__LOCALE_ID_21 == (null as any))) { (this.__LOCALE_ID_21 = 'en-US'); }
    return this.__LOCALE_ID_21;
  }
  get _NgLocalization_22():import19.NgLocaleLocalization {
    if ((this.__NgLocalization_22 == (null as any))) { (this.__NgLocalization_22 = new import19.NgLocaleLocalization(this._LOCALE_ID_21)); }
    return this.__NgLocalization_22;
  }
  get _ApplicationRef_28():any {
    if ((this.__ApplicationRef_28 == (null as any))) { (this.__ApplicationRef_28 = this._ApplicationRef__27); }
    return this.__ApplicationRef_28;
  }
  get _Compiler_29():import23.Compiler {
    if ((this.__Compiler_29 == (null as any))) { (this.__Compiler_29 = new import23.Compiler()); }
    return this.__Compiler_29;
  }
  get _APP_ID_30():any {
    if ((this.__APP_ID_30 == (null as any))) { (this.__APP_ID_30 = '%cmp%'); }
    return this.__APP_ID_30;
  }
  get _NodeSharedStylesHost_31():import24.NodeSharedStylesHost {
    if ((this.__NodeSharedStylesHost_31 == (null as any))) { (this.__NodeSharedStylesHost_31 = new import24.NodeSharedStylesHost()); }
    return this.__NodeSharedStylesHost_31;
  }
  get _DOCUMENT_32():any {
    if ((this.__DOCUMENT_32 == (null as any))) { (this.__DOCUMENT_32 = import4._document(this._NodeSharedStylesHost_31,this.parent.get(import46.NgZone))); }
    return this.__DOCUMENT_32;
  }
  get _NodeDomEventsPlugin_33():import4.NodeDomEventsPlugin {
    if ((this.__NodeDomEventsPlugin_33 == (null as any))) { (this.__NodeDomEventsPlugin_33 = new import4.NodeDomEventsPlugin()); }
    return this.__NodeDomEventsPlugin_33;
  }
  get _HAMMER_GESTURE_CONFIG_34():import25.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_34 == (null as any))) { (this.__HAMMER_GESTURE_CONFIG_34 = new import25.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_34;
  }
  get _EVENT_MANAGER_PLUGINS_35():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_35 == (null as any))) { (this.__EVENT_MANAGER_PLUGINS_35 = [
      this._NodeDomEventsPlugin_33,
      new import47.KeyEventsPlugin(),
      new import25.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_34)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_35;
  }
  get _NodeEventManager_36():import4.NodeEventManager {
    if ((this.__NodeEventManager_36 == (null as any))) { (this.__NodeEventManager_36 = new import4.NodeEventManager(this._EVENT_MANAGER_PLUGINS_35,this._DOCUMENT_32,this.parent.get(import46.NgZone))); }
    return this.__NodeEventManager_36;
  }
  get _EventManager_37():any {
    if ((this.__EventManager_37 == (null as any))) { (this.__EventManager_37 = this._NodeEventManager_36); }
    return this.__EventManager_37;
  }
  get _AnimationDriver_38():any {
    if ((this.__AnimationDriver_38 == (null as any))) { (this.__AnimationDriver_38 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_38;
  }
  get _NodeDomRootRenderer_39():import26.NodeDomRootRenderer {
    if ((this.__NodeDomRootRenderer_39 == (null as any))) { (this.__NodeDomRootRenderer_39 = new import26.NodeDomRootRenderer(this._DOCUMENT_32,this._EventManager_37,this._NodeSharedStylesHost_31,this._AnimationDriver_38)); }
    return this.__NodeDomRootRenderer_39;
  }
  get _DomRootRenderer_40():any {
    if ((this.__DomRootRenderer_40 == (null as any))) { (this.__DomRootRenderer_40 = this._NodeDomRootRenderer_39); }
    return this.__DomRootRenderer_40;
  }
  get _RootRenderer_41():any {
    if ((this.__RootRenderer_41 == (null as any))) { (this.__RootRenderer_41 = this._DomRootRenderer_40); }
    return this.__RootRenderer_41;
  }
  get _DomSanitizer_42():import27.DomSanitizerImpl {
    if ((this.__DomSanitizer_42 == (null as any))) { (this.__DomSanitizer_42 = new import27.DomSanitizerImpl()); }
    return this.__DomSanitizer_42;
  }
  get _Sanitizer_43():any {
    if ((this.__Sanitizer_43 == (null as any))) { (this.__Sanitizer_43 = this._DomSanitizer_42); }
    return this.__Sanitizer_43;
  }
  get _ViewUtils_44():import28.ViewUtils {
    if ((this.__ViewUtils_44 == (null as any))) { (this.__ViewUtils_44 = new import28.ViewUtils(this._RootRenderer_41,this._APP_ID_30,this._Sanitizer_43)); }
    return this.__ViewUtils_44;
  }
  get _IterableDiffers_45():any {
    if ((this.__IterableDiffers_45 == (null as any))) { (this.__IterableDiffers_45 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_45;
  }
  get _KeyValueDiffers_46():any {
    if ((this.__KeyValueDiffers_46 == (null as any))) { (this.__KeyValueDiffers_46 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_46;
  }
  get _ORIGIN_URL_47():any {
    if ((this.__ORIGIN_URL_47 == (null as any))) { (this.__ORIGIN_URL_47 = import4._ORIGIN_URL(this.parent.get(import46.NgZone))); }
    return this.__ORIGIN_URL_47;
  }
  get _REQUEST_URL_48():any {
    if ((this.__REQUEST_URL_48 == (null as any))) { (this.__REQUEST_URL_48 = import4._REQUEST_URL(this.parent.get(import46.NgZone))); }
    return this.__REQUEST_URL_48;
  }
  get _APP_BASE_HREF_49():any {
    if ((this.__APP_BASE_HREF_49 == (null as any))) { (this.__APP_BASE_HREF_49 = import4._APP_BASE_HREF(this.parent.get(import46.NgZone))); }
    return this.__APP_BASE_HREF_49;
  }
  get _PlatformLocation_50():import29.NodePlatformLocation {
    if ((this.__PlatformLocation_50 == (null as any))) { (this.__PlatformLocation_50 = new import29.NodePlatformLocation(this._ORIGIN_URL_47,this._REQUEST_URL_48,this._APP_BASE_HREF_49)); }
    return this.__PlatformLocation_50;
  }
  get _DomEventsPlugin_51():any[] {
    if ((this.__DomEventsPlugin_51 == (null as any))) { (this.__DomEventsPlugin_51 = [this._NodeDomEventsPlugin_33]); }
    return this.__DomEventsPlugin_51;
  }
  get _SharedStylesHost_52():any {
    if ((this.__SharedStylesHost_52 == (null as any))) { (this.__SharedStylesHost_52 = this._NodeSharedStylesHost_31); }
    return this.__SharedStylesHost_52;
  }
  get _DomSharedStylesHost_53():any {
    if ((this.__DomSharedStylesHost_53 == (null as any))) { (this.__DomSharedStylesHost_53 = this._NodeSharedStylesHost_31); }
    return this.__DomSharedStylesHost_53;
  }
  get _XSRFStrategy_54():any {
    if ((this.__XSRFStrategy_54 == (null as any))) { (this.__XSRFStrategy_54 = import5._noop); }
    return this.__XSRFStrategy_54;
  }
  get _BrowserXhr_55():any {
    if ((this.__BrowserXhr_55 == (null as any))) { (this.__BrowserXhr_55 = import5._noop); }
    return this.__BrowserXhr_55;
  }
  get _RequestOptions_56():import30.BaseRequestOptions {
    if ((this.__RequestOptions_56 == (null as any))) { (this.__RequestOptions_56 = new import30.BaseRequestOptions()); }
    return this.__RequestOptions_56;
  }
  get _ResponseOptions_57():import31.BaseResponseOptions {
    if ((this.__ResponseOptions_57 == (null as any))) { (this.__ResponseOptions_57 = new import31.BaseResponseOptions()); }
    return this.__ResponseOptions_57;
  }
  get _XHRBackend_58():import5.NodeBackend {
    if ((this.__XHRBackend_58 == (null as any))) { (this.__XHRBackend_58 = new import5.NodeBackend(this._ResponseOptions_57,this._BrowserXhr_55,this._XSRFStrategy_54,this.parent.get(import46.NgZone),this._APP_BASE_HREF_49,this._ORIGIN_URL_47)); }
    return this.__XHRBackend_58;
  }
  get _Http_59():any {
    if ((this.__Http_59 == (null as any))) { (this.__Http_59 = import5.httpFactory(this._XHRBackend_58,this._RequestOptions_56)); }
    return this.__Http_59;
  }
  get _JSONPBackend_60():import5.NodeJsonpBackend_ {
    if ((this.__JSONPBackend_60 == (null as any))) { (this.__JSONPBackend_60 = new import5.NodeJsonpBackend_(this._ResponseOptions_57,this.parent.get(import46.NgZone),this._APP_BASE_HREF_49,this._ORIGIN_URL_47)); }
    return this.__JSONPBackend_60;
  }
  get _Jsonp_61():any {
    if ((this.__Jsonp_61 == (null as any))) { (this.__Jsonp_61 = import5.jsonpFactory(this._JSONPBackend_60,this._RequestOptions_56)); }
    return this.__Jsonp_61;
  }
  get _RadioControlRegistry_62():import32.RadioControlRegistry {
    if ((this.__RadioControlRegistry_62 == (null as any))) { (this.__RadioControlRegistry_62 = new import32.RadioControlRegistry()); }
    return this.__RadioControlRegistry_62;
  }
  get _FormBuilder_63():import33.FormBuilder {
    if ((this.__FormBuilder_63 == (null as any))) { (this.__FormBuilder_63 = new import33.FormBuilder()); }
    return this.__FormBuilder_63;
  }
  get _ROUTES_64():any[] {
    if ((this.__ROUTES_64 == (null as any))) { (this.__ROUTES_64 = [
        [{
          path: 'home',
          component: import48.HomeComponent
        }
      ],
        [{
          path: 'about',
          component: import49.AboutComponent
        }
      ],
        [{
          path: 'todo',
          component: import50.TodoComponent
        }
      ],
      [
        {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full'
        }
        ,
        {
          path: 'lazy',
          loadChildren: import17.getLazyModule
        }

      ]
      ,
      ([] as any[])
    ]
    ); }
    return this.__ROUTES_64;
  }
  get _ROUTER_CONFIGURATION_65():any {
    if ((this.__ROUTER_CONFIGURATION_65 == (null as any))) { (this.__ROUTER_CONFIGURATION_65 = {useHash: false}); }
    return this.__ROUTER_CONFIGURATION_65;
  }
  get _LocationStrategy_66():any {
    if ((this.__LocationStrategy_66 == (null as any))) { (this.__LocationStrategy_66 = import9.provideLocationStrategy(this._PlatformLocation_50,this._APP_BASE_HREF_49,this._ROUTER_CONFIGURATION_65)); }
    return this.__LocationStrategy_66;
  }
  get _Location_67():import34.Location {
    if ((this.__Location_67 == (null as any))) { (this.__Location_67 = new import34.Location(this._LocationStrategy_66)); }
    return this.__Location_67;
  }
  get _UrlSerializer_68():import35.DefaultUrlSerializer {
    if ((this.__UrlSerializer_68 == (null as any))) { (this.__UrlSerializer_68 = new import35.DefaultUrlSerializer()); }
    return this.__UrlSerializer_68;
  }
  get _RouterOutletMap_69():import36.RouterOutletMap {
    if ((this.__RouterOutletMap_69 == (null as any))) { (this.__RouterOutletMap_69 = new import36.RouterOutletMap()); }
    return this.__RouterOutletMap_69;
  }
  get _NgModuleFactoryLoader_70():import37.SystemJsNgModuleLoader {
    if ((this.__NgModuleFactoryLoader_70 == (null as any))) { (this.__NgModuleFactoryLoader_70 = new import37.SystemJsNgModuleLoader(this._Compiler_29,this.parent.get(import37.SystemJsNgModuleLoaderConfig,(null as any)))); }
    return this.__NgModuleFactoryLoader_70;
  }
  get _Router_71():any {
    if ((this.__Router_71 == (null as any))) { (this.__Router_71 = import9.setupRouter(this._ApplicationRef_28,this._UrlSerializer_68,this._RouterOutletMap_69,this._Location_67,this,this._NgModuleFactoryLoader_70,this._Compiler_29,this._ROUTES_64,this._ROUTER_CONFIGURATION_65)); }
    return this.__Router_71;
  }
  get _ActivatedRoute_72():any {
    if ((this.__ActivatedRoute_72 == (null as any))) { (this.__ActivatedRoute_72 = import9.rootRoute(this._Router_71)); }
    return this.__ActivatedRoute_72;
  }
  get _PreloadAllModules_76():import38.PreloadAllModules {
    if ((this.__PreloadAllModules_76 == (null as any))) { (this.__PreloadAllModules_76 = new import38.PreloadAllModules()); }
    return this.__PreloadAllModules_76;
  }
  get _APP_BOOTSTRAP_LISTENER_77():any[] {
    if ((this.__APP_BOOTSTRAP_LISTENER_77 == (null as any))) { (this.__APP_BOOTSTRAP_LISTENER_77 = [import9.initialRouterNavigation(this._Router_71,this._ApplicationRef_28,this._RouterPreloader_75,this._ROUTER_CONFIGURATION_65)]); }
    return this.__APP_BOOTSTRAP_LISTENER_77;
  }
  get _Helpers_78():import39.Helpers {
    if ((this.__Helpers_78 == (null as any))) { (this.__Helpers_78 = new import39.Helpers()); }
    return this.__Helpers_78;
  }
  get _ApiService_79():import40.ApiService {
    if ((this.__ApiService_79 == (null as any))) { (this.__ApiService_79 = new import40.ApiService(this._Http_59,this._Helpers_78,this)); }
    return this.__ApiService_79;
  }
  get _isBrowser_80():any {
    if ((this.__isBrowser_80 == (null as any))) { (this.__isBrowser_80 = import51.isBrowser); }
    return this.__isBrowser_80;
  }
  get _isNode_81():any {
    if ((this.__isNode_81 == (null as any))) { (this.__isNode_81 = true); }
    return this.__isNode_81;
  }
  createInternal():import1.MainModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._NodeModule_2 = new import4.NodeModule(this.parent.get(import4.NodeModule,(null as any)));
    this._NodeHttpModule_3 = new import5.NodeHttpModule();
    this._NodeJsonpModule_4 = new import5.NodeJsonpModule();
    this._UniversalModule_5 = new import6.UniversalModule();
    this._InternalFormsSharedModule_6 = new import7.InternalFormsSharedModule();
    this._FormsModule_7 = new import8.FormsModule();
    this._ROUTER_FORROOT_GUARD_8 = import9.provideForRootGuard(this.parent.get(import52.Router,(null as any)));
    this._RouterModule_9 = new import9.RouterModule(this._ROUTER_FORROOT_GUARD_8);
    this._ReactiveFormsModule_10 = new import8.ReactiveFormsModule();
    this._SharedModule_11 = new import10.SharedModule();
    this._HomeRoutingModule_12 = new import11.HomeRoutingModule();
    this._HomeModule_13 = new import12.HomeModule();
    this._AboutRoutingModule_14 = new import13.AboutRoutingModule();
    this._AboutModule_15 = new import14.AboutModule();
    this._TodoRoutingModule_16 = new import15.TodoRoutingModule();
    this._TodoModule_17 = new import16.TodoModule();
    this._AppRoutingModule_18 = new import17.AppRoutingModule();
    this._AppModule_19 = new import18.AppModule();
    this._MainModule_20 = new import1.MainModule();
    this._ErrorHandler_23 = import4._errorHandler();
    this._ApplicationInitStatus_24 = new import20.ApplicationInitStatus(this.parent.get(import20.APP_INITIALIZER,(null as any)));
    this._TestabilityRegistry_25 = new import4.MockTestabilityRegistry();
    this._Testability_26 = new import21.Testability(this.parent.get(import46.NgZone));
    this._ApplicationRef__27 = new import22.ApplicationRef_(this.parent.get(import46.NgZone),this.parent.get(import53.Console),this,this._ErrorHandler_23,this,this._ApplicationInitStatus_24,this._TestabilityRegistry_25,this._Testability_26);
    this._NoPreloading_73 = new import38.NoPreloading();
    this._PreloadingStrategy_74 = this._NoPreloading_73;
    this._RouterPreloader_75 = new import38.RouterPreloader(this._Router_71,this._NgModuleFactoryLoader_70,this._Compiler_29,this,this._PreloadingStrategy_74);
    return this._MainModule_20;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.NodeModule)) { return this._NodeModule_2; }
    if ((token === import5.NodeHttpModule)) { return this._NodeHttpModule_3; }
    if ((token === import5.NodeJsonpModule)) { return this._NodeJsonpModule_4; }
    if ((token === import6.UniversalModule)) { return this._UniversalModule_5; }
    if ((token === import7.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_6; }
    if ((token === import8.FormsModule)) { return this._FormsModule_7; }
    if ((token === import9.ROUTER_FORROOT_GUARD)) { return this._ROUTER_FORROOT_GUARD_8; }
    if ((token === import9.RouterModule)) { return this._RouterModule_9; }
    if ((token === import8.ReactiveFormsModule)) { return this._ReactiveFormsModule_10; }
    if ((token === import10.SharedModule)) { return this._SharedModule_11; }
    if ((token === import11.HomeRoutingModule)) { return this._HomeRoutingModule_12; }
    if ((token === import12.HomeModule)) { return this._HomeModule_13; }
    if ((token === import13.AboutRoutingModule)) { return this._AboutRoutingModule_14; }
    if ((token === import14.AboutModule)) { return this._AboutModule_15; }
    if ((token === import15.TodoRoutingModule)) { return this._TodoRoutingModule_16; }
    if ((token === import16.TodoModule)) { return this._TodoModule_17; }
    if ((token === import17.AppRoutingModule)) { return this._AppRoutingModule_18; }
    if ((token === import18.AppModule)) { return this._AppModule_19; }
    if ((token === import1.MainModule)) { return this._MainModule_20; }
    if ((token === import54.LOCALE_ID)) { return this._LOCALE_ID_21; }
    if ((token === import19.NgLocalization)) { return this._NgLocalization_22; }
    if ((token === import55.ErrorHandler)) { return this._ErrorHandler_23; }
    if ((token === import20.ApplicationInitStatus)) { return this._ApplicationInitStatus_24; }
    if ((token === import21.TestabilityRegistry)) { return this._TestabilityRegistry_25; }
    if ((token === import21.Testability)) { return this._Testability_26; }
    if ((token === import22.ApplicationRef_)) { return this._ApplicationRef__27; }
    if ((token === import22.ApplicationRef)) { return this._ApplicationRef_28; }
    if ((token === import23.Compiler)) { return this._Compiler_29; }
    if ((token === import56.APP_ID)) { return this._APP_ID_30; }
    if ((token === import24.NodeSharedStylesHost)) { return this._NodeSharedStylesHost_31; }
    if ((token === import57.DOCUMENT)) { return this._DOCUMENT_32; }
    if ((token === import4.NodeDomEventsPlugin)) { return this._NodeDomEventsPlugin_33; }
    if ((token === import25.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_34; }
    if ((token === import58.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_35; }
    if ((token === import4.NodeEventManager)) { return this._NodeEventManager_36; }
    if ((token === import58.EventManager)) { return this._EventManager_37; }
    if ((token === import59.AnimationDriver)) { return this._AnimationDriver_38; }
    if ((token === import26.NodeDomRootRenderer)) { return this._NodeDomRootRenderer_39; }
    if ((token === import60.DomRootRenderer)) { return this._DomRootRenderer_40; }
    if ((token === import61.RootRenderer)) { return this._RootRenderer_41; }
    if ((token === import27.DomSanitizer)) { return this._DomSanitizer_42; }
    if ((token === import62.Sanitizer)) { return this._Sanitizer_43; }
    if ((token === import28.ViewUtils)) { return this._ViewUtils_44; }
    if ((token === import63.IterableDiffers)) { return this._IterableDiffers_45; }
    if ((token === import64.KeyValueDiffers)) { return this._KeyValueDiffers_46; }
    if ((token === import65.ORIGIN_URL)) { return this._ORIGIN_URL_47; }
    if ((token === import65.REQUEST_URL)) { return this._REQUEST_URL_48; }
    if ((token === import66.APP_BASE_HREF)) { return this._APP_BASE_HREF_49; }
    if ((token === import67.PlatformLocation)) { return this._PlatformLocation_50; }
    if ((token === import68.DomEventsPlugin)) { return this._DomEventsPlugin_51; }
    if ((token === import69.SharedStylesHost)) { return this._SharedStylesHost_52; }
    if ((token === import69.DomSharedStylesHost)) { return this._DomSharedStylesHost_53; }
    if ((token === import70.XSRFStrategy)) { return this._XSRFStrategy_54; }
    if ((token === import71.BrowserXhr)) { return this._BrowserXhr_55; }
    if ((token === import30.RequestOptions)) { return this._RequestOptions_56; }
    if ((token === import31.ResponseOptions)) { return this._ResponseOptions_57; }
    if ((token === import72.XHRBackend)) { return this._XHRBackend_58; }
    if ((token === import73.Http)) { return this._Http_59; }
    if ((token === import74.JSONPBackend)) { return this._JSONPBackend_60; }
    if ((token === import73.Jsonp)) { return this._Jsonp_61; }
    if ((token === import32.RadioControlRegistry)) { return this._RadioControlRegistry_62; }
    if ((token === import33.FormBuilder)) { return this._FormBuilder_63; }
    if ((token === import75.ROUTES)) { return this._ROUTES_64; }
    if ((token === import9.ROUTER_CONFIGURATION)) { return this._ROUTER_CONFIGURATION_65; }
    if ((token === import66.LocationStrategy)) { return this._LocationStrategy_66; }
    if ((token === import34.Location)) { return this._Location_67; }
    if ((token === import35.UrlSerializer)) { return this._UrlSerializer_68; }
    if ((token === import36.RouterOutletMap)) { return this._RouterOutletMap_69; }
    if ((token === import76.NgModuleFactoryLoader)) { return this._NgModuleFactoryLoader_70; }
    if ((token === import52.Router)) { return this._Router_71; }
    if ((token === import77.ActivatedRoute)) { return this._ActivatedRoute_72; }
    if ((token === import38.NoPreloading)) { return this._NoPreloading_73; }
    if ((token === import38.PreloadingStrategy)) { return this._PreloadingStrategy_74; }
    if ((token === import38.RouterPreloader)) { return this._RouterPreloader_75; }
    if ((token === import38.PreloadAllModules)) { return this._PreloadAllModules_76; }
    if ((token === import56.APP_BOOTSTRAP_LISTENER)) { return this._APP_BOOTSTRAP_LISTENER_77; }
    if ((token === import39.Helpers)) { return this._Helpers_78; }
    if ((token === import40.ApiService)) { return this._ApiService_79; }
    if ((token === 'isBrowser')) { return this._isBrowser_80; }
    if ((token === 'isNode')) { return this._isNode_81; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__27.ngOnDestroy();
    this._RouterPreloader_75.ngOnDestroy();
  }
}
export const MainModuleNgFactory:import0.NgModuleFactory<import1.MainModule> = new import0.NgModuleFactory(MainModuleInjector,import1.MainModule);