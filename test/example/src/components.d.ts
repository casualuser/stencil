/**
* This is an autogenerated file created by the Stencil compiler.
* It contains typing information for all components that exist in this project.
*/
/* tslint:disable */

import '@stencil/core';




export namespace Components {

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface ElementCmp {}
  interface ElementCmpAttributes extends StencilHTMLAttributes {}

  interface EventCmp {
    'methodThatFiresEventWithOptions': () => void;
    'methodThatFiresMyDocumentEvent': () => void;
    'methodThatFiresMyWindowEvent': (value: number) => void;
  }
  interface EventCmpAttributes extends StencilHTMLAttributes {
    'onMy-event-with-options'?: (event: CustomEvent<{ mph: number }>) => void;
    'onMyDocumentEvent'?: (event: CustomEvent<any>) => void;
    'onMyWindowEvent'?: (event: CustomEvent<number>) => void;
  }

  interface ListenCmp {
    'opened': boolean;
  }
  interface ListenCmpAttributes extends StencilHTMLAttributes {
    'opened'?: boolean;
  }

  interface MethodCmp {
    'someMethod': () => Promise<number>;
    'someMethodWithArgs': (unit: string, value: number) => Promise<string>;
    'someProp': number;
  }
  interface MethodCmpAttributes extends StencilHTMLAttributes {
    'someProp'?: number;
  }

  interface PropCmp {
    'first': string;
    'lastName': string;
  }
  interface PropCmpAttributes extends StencilHTMLAttributes {
    'first'?: string;
    'lastName'?: string;
  }

  interface StateCmp {}
  interface StateCmpAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AppRoot': Components.AppRoot;
    'ElementCmp': Components.ElementCmp;
    'EventCmp': Components.EventCmp;
    'ListenCmp': Components.ListenCmp;
    'MethodCmp': Components.MethodCmp;
    'PropCmp': Components.PropCmp;
    'StateCmp': Components.StateCmp;
  }

  interface StencilIntrinsicElements {
    'app-root': Components.AppRootAttributes;
    'element-cmp': Components.ElementCmpAttributes;
    'event-cmp': Components.EventCmpAttributes;
    'listen-cmp': Components.ListenCmpAttributes;
    'method-cmp': Components.MethodCmpAttributes;
    'prop-cmp': Components.PropCmpAttributes;
    'state-cmp': Components.StateCmpAttributes;
  }


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLElementCmpElement extends Components.ElementCmp, HTMLStencilElement {}
  var HTMLElementCmpElement: {
    prototype: HTMLElementCmpElement;
    new (): HTMLElementCmpElement;
  };

  interface HTMLEventCmpElement extends Components.EventCmp, HTMLStencilElement {}
  var HTMLEventCmpElement: {
    prototype: HTMLEventCmpElement;
    new (): HTMLEventCmpElement;
  };

  interface HTMLListenCmpElement extends Components.ListenCmp, HTMLStencilElement {}
  var HTMLListenCmpElement: {
    prototype: HTMLListenCmpElement;
    new (): HTMLListenCmpElement;
  };

  interface HTMLMethodCmpElement extends Components.MethodCmp, HTMLStencilElement {}
  var HTMLMethodCmpElement: {
    prototype: HTMLMethodCmpElement;
    new (): HTMLMethodCmpElement;
  };

  interface HTMLPropCmpElement extends Components.PropCmp, HTMLStencilElement {}
  var HTMLPropCmpElement: {
    prototype: HTMLPropCmpElement;
    new (): HTMLPropCmpElement;
  };

  interface HTMLStateCmpElement extends Components.StateCmp, HTMLStencilElement {}
  var HTMLStateCmpElement: {
    prototype: HTMLStateCmpElement;
    new (): HTMLStateCmpElement;
  };

  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement
    'element-cmp': HTMLElementCmpElement
    'event-cmp': HTMLEventCmpElement
    'listen-cmp': HTMLListenCmpElement
    'method-cmp': HTMLMethodCmpElement
    'prop-cmp': HTMLPropCmpElement
    'state-cmp': HTMLStateCmpElement
  }

  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'element-cmp': HTMLElementCmpElement;
    'event-cmp': HTMLEventCmpElement;
    'listen-cmp': HTMLListenCmpElement;
    'method-cmp': HTMLMethodCmpElement;
    'prop-cmp': HTMLPropCmpElement;
    'state-cmp': HTMLStateCmpElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
