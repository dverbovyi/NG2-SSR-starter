/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './todo.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../shared/services/api.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from './todo.component.css.shim';
import * as import12 from '../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import13 from '@angular/common/src/pipes/date_pipe';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import16 from '@angular/core/src/i18n/tokens';
import * as import17 from '@angular/common/src/directives/ng_for';
import * as import18 from '../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import19 from '@angular/common/src/directives/ng_if';
export class Wrapper_TodoComponent {
  context:import0.TodoComponent;
  changed:boolean;
  constructor(p0:any) {
    this.changed = false;
    this.context = new import0.TodoComponent(p0);
  }
  detectChangesInInputProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  detectChangesInHostProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
var renderType_TodoComponent_Host:import2.RenderComponentType = (null as any);
class _View_TodoComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _TodoComponent_0_4:Wrapper_TodoComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_TodoComponent_Host0,renderType_TodoComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'todo',import4.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_TodoComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._TodoComponent_0_4 = new Wrapper_TodoComponent(this.parentInjector.get(import8.ApiService));
    this._appEl_0.initComponent(this._TodoComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._TodoComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.TodoComponent) && (0 === requestNodeIndex))) { return this._TodoComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TodoComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._TodoComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_TodoComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_TodoComponent_Host === (null as any))) { (renderType_TodoComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_TodoComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const TodoComponentNgFactory:import10.ComponentFactory<import0.TodoComponent> = new import10.ComponentFactory<import0.TodoComponent>('todo',viewFactory_TodoComponent_Host0,import0.TodoComponent);
const styles_TodoComponent:any[] = [import11.styles];
var renderType_TodoComponent:import2.RenderComponentType = (null as any);
class _View_TodoComponent0 extends import1.AppView<import0.TodoComponent> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _appEl_5:import3.AppElement;
  _TemplateRef_5_5:any;
  _NgFor_5_6:import12.Wrapper_NgFor;
  _text_6:any;
  /*private*/ _expr_10:any;
  _pipe_date_0:import13.DatePipe;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_TodoComponent0,renderType_TodoComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_10 = import7.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = import4.createRenderElement(this.renderer,parentRenderNode,'h3',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_3 = import4.createRenderElement(this.renderer,parentRenderNode,'ul',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n  ',(null as any));
    this._anchor_5 = this.renderer.createTemplateAnchor(this._el_3,(null as any));
    this._appEl_5 = new import3.AppElement(5,3,this,this._anchor_5);
    this._TemplateRef_5_5 = new import14.TemplateRef_(this._appEl_5,viewFactory_TodoComponent1);
    this._NgFor_5_6 = new import12.Wrapper_NgFor(this._appEl_5.vcRef,this._TemplateRef_5_5,this.parentInjector.get(import15.IterableDiffers),this.ref);
    this._text_6 = this.renderer.createText(this._el_3,'\n',(null as any));
    this._pipe_date_0 = new import13.DatePipe(this.parentInjector.get(import16.LOCALE_ID));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._anchor_5,
      this._text_6
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import17.NgFor) && (5 === requestNodeIndex))) { return this._NgFor_5_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_5_0_0:any = this.context.todos;
    this._NgFor_5_6.check_ngForOf(currVal_5_0_0,throwOnChange,false);
    this._NgFor_5_6.detectChangesInInputProps(this,this._anchor_5,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_10:any = import4.interpolate(1,'',this.context.title,'');
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setText(this._text_1,currVal_10);
      this._expr_10 = currVal_10;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_TodoComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.TodoComponent> {
  if ((renderType_TodoComponent === (null as any))) { (renderType_TodoComponent = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.Emulated,styles_TodoComponent,{})); }
  return new _View_TodoComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_TodoComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _appEl_2:import3.AppElement;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import18.Wrapper_NgIf;
  _text_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_TodoComponent1,renderType_TodoComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.createRenderElement(this.renderer,(null as any),'li',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_2 = new import3.AppElement(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import14.TemplateRef_(this._appEl_2,viewFactory_TodoComponent2);
    this._NgIf_2_6 = new import18.Wrapper_NgIf(this._appEl_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import19.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:boolean = !this.context.$implicit.hide;
    this._NgIf_2_6.check_ngIf(currVal_2_0_0,throwOnChange,false);
    this._NgIf_2_6.detectChangesInInputProps(this,this._anchor_2,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_TodoComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_TodoComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_TodoComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  _text_18:any;
  _text_19:any;
  _el_20:any;
  _text_21:any;
  _text_22:any;
  _el_23:any;
  _text_24:any;
  _text_25:any;
  /*private*/ _expr_26:any;
  /*private*/ _expr_27:any;
  _pipe_date_0_0:any;
  /*private*/ _expr_29:any;
  /*private*/ _expr_30:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_TodoComponent2,renderType_TodoComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_26 = import7.UNINITIALIZED;
    this._expr_27 = import7.UNINITIALIZED;
    this._expr_29 = import7.UNINITIALIZED;
    this._expr_30 = import7.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.createRenderElement(this.renderer,(null as any),'dl',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._el_2 = import4.createRenderElement(this.renderer,this._el_0,'dt',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'Id',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._el_5 = import4.createRenderElement(this.renderer,this._el_0,'dd',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'',(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._el_8 = import4.createRenderElement(this.renderer,this._el_0,'dt',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'Created at',(null as any));
    this._text_10 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._el_11 = import4.createRenderElement(this.renderer,this._el_0,'dd',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'',(null as any));
    this._text_13 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._el_14 = import4.createRenderElement(this.renderer,this._el_0,'dt',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'Value',(null as any));
    this._text_16 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._el_17 = import4.createRenderElement(this.renderer,this._el_0,'dd',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_18 = this.renderer.createText(this._el_17,'',(null as any));
    this._text_19 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._el_20 = import4.createRenderElement(this.renderer,this._el_0,'dt',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_21 = this.renderer.createText(this._el_20,'Completed',(null as any));
    this._text_22 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._el_23 = import4.createRenderElement(this.renderer,this._el_0,'dd',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_24 = this.renderer.createText(this._el_23,'',(null as any));
    this._text_25 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._pipe_date_0_0 = import4.pureProxy2((<_View_TodoComponent0>this.parent.parent)._pipe_date_0.transform.bind((<_View_TodoComponent0>this.parent.parent)._pipe_date_0));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._text_22,
      this._el_23,
      this._text_24,
      this._text_25
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import7.ValueUnwrapper();
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_26:any = import4.interpolate(1,'',this.parent.context.$implicit.id,'');
    if (import4.checkBinding(throwOnChange,this._expr_26,currVal_26)) {
      this.renderer.setText(this._text_6,currVal_26);
      this._expr_26 = currVal_26;
    }
    valUnwrapper.reset();
    const currVal_27:any = import4.interpolate(1,'',valUnwrapper.unwrap(import4.castByValue(this._pipe_date_0_0,(<_View_TodoComponent0>this.parent.parent)._pipe_date_0.transform)(this.parent.context.$implicit.created_at,'dd/MM/yyyy HH:mm:ss')),'');
    if ((valUnwrapper.hasWrappedValue || import4.checkBinding(throwOnChange,this._expr_27,currVal_27))) {
      this.renderer.setText(this._text_12,currVal_27);
      this._expr_27 = currVal_27;
    }
    const currVal_29:any = import4.interpolate(1,'',this.parent.context.$implicit.value,'');
    if (import4.checkBinding(throwOnChange,this._expr_29,currVal_29)) {
      this.renderer.setText(this._text_18,currVal_29);
      this._expr_29 = currVal_29;
    }
    const currVal_30:any = import4.interpolate(1,'',this.parent.context.$implicit.completed,'');
    if (import4.checkBinding(throwOnChange,this._expr_30,currVal_30)) {
      this.renderer.setText(this._text_24,currVal_30);
      this._expr_30 = currVal_30;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_TodoComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_TodoComponent2(viewUtils,parentInjector,declarationEl);
}