(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4186],{8418:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var a,i=(a=t(7294))&&a.__esModule?a:{default:a},c=t(6273),l=t(387),u=t(7190);var s={};function d(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,r=l.useRouter(),a=i.default.useMemo((function(){var n=o(c.resolveHref(r,e.href,!0),2),t=n[0],a=n[1];return{href:t,as:e.as?c.resolveHref(r,e.as):a||t}}),[r,e.href,e.as]),f=a.href,v=a.as,p=e.children,m=e.replace,h=e.shallow,g=e.scroll,y=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var b=(n=i.default.Children.only(p))&&"object"===typeof n&&n.ref,E=o(u.useIntersection({rootMargin:"200px"}),2),w=E[0],k=E[1],C=i.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);i.default.useEffect((function(){var e=k&&t&&c.isLocalURL(f),n="undefined"!==typeof y?y:r&&r.locale,o=s[f+"%"+v+(n?"%"+n:"")];e&&!o&&d(r,f,v,{locale:n})}),[v,f,k,y,t,r]);var N={ref:C,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,i,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),n[o?"replace":"push"](t,r,{shallow:a,locale:l,scroll:i}))}(e,r,f,v,m,h,g,y)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),c.isLocalURL(f)&&d(r,f,v,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var x="undefined"!==typeof y?y:r&&r.locale,Z=r&&r.isLocaleDomain&&c.getDomainLocale(v,x,r&&r.locales,r&&r.domainLocales);N.href=Z||c.addBasePath(c.addLocale(v,x,r&&r.defaultLocale))}return i.default.cloneElement(n,N)};n.default=f},7190:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,r=e.disabled||!c,s=a.useRef(),d=o(a.useState(!1),2),f=d[0],v=d[1],p=o(a.useState(n?n.current:null),2),m=p[0],h=p[1],g=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||f||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n,t={root:e.root||null,margin:e.rootMargin||""},r=u.find((function(e){return e.root===t.root&&e.margin===t.margin}));r?n=l.get(r):(n=l.get(t),u.push(t));if(n)return n;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(t,n={id:t,observer:a,elements:o}),n}(t),o=r.id,a=r.observer,i=r.elements;return i.set(e,n),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),l.delete(o);var n=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));n>-1&&u.splice(n,1)}}}(e,(function(e){return e&&v(e)}),{root:m,rootMargin:t}))}),[r,m,t,f]);return a.useEffect((function(){if(!c&&!f){var e=i.requestIdleCallback((function(){return v(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),a.useEffect((function(){n&&h(n.current)}),[n]),[g,f]};var a=t(7294),i=t(9311),c="undefined"!==typeof IntersectionObserver;var l=new Map,u=[]},1664:function(e,n,t){e.exports=t(8418)},5005:function(e,n,t){"use strict";var r=t(7462),o=t(3366),a=t(4184),i=t.n(a),c=t(7294),l=t(6792),u=t(7272),s=["bsPrefix","variant","size","active","className","block","type","as"],d=c.forwardRef((function(e,n){var t=e.bsPrefix,a=e.variant,d=e.size,f=e.active,v=e.className,p=e.block,m=e.type,h=e.as,g=(0,o.Z)(e,s),y=(0,l.vE)(t,"btn"),b=i()(v,y,f&&"active",a&&y+"-"+a,p&&y+"-block",d&&y+"-"+d);if(g.href)return c.createElement(u.Z,(0,r.Z)({},g,{as:h,ref:n,className:i()(b,g.disabled&&"disabled")}));n&&(g.ref=n),m?g.type=m:h||(g.type="button");var E=h||"button";return c.createElement(E,(0,r.Z)({},g,{className:b}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1},n.Z=d},4861:function(e,n,t){"use strict";t.d(n,{Z:function(){return fe}});var r,o=t(3366),a=t(7462),i=t(4184),c=t.n(i),l=t(9351),u=t(3004),s=t(7216),d=t(99);function f(e){if((!r&&0!==r||e)&&u.Z){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),r=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return r}var v=t(7294);var p=t(1176);function m(e){var n=function(e){var n=(0,v.useRef)(e);return n.current=e,n}(e);(0,v.useEffect)((function(){return function(){return n.current()}}),[])}var h=t(4305);function g(e){void 0===e&&(e=(0,s.Z)());try{var n=e.activeElement;return n&&n.nodeName?n:null}catch(t){return e.body}}function y(e,n){return e.contains?e.contains(n):e.compareDocumentPosition?e===n||!!(16&e.compareDocumentPosition(n)):void 0}var b=t(2950),E=t(5697),w=t.n(E),k=t(3935);var C=t(8544),N=t(4277),x=t(1505);function Z(e){return"window"in e&&e.window===e?e:"nodeType"in(n=e)&&n.nodeType===document.DOCUMENT_NODE&&e.defaultView||!1;var n}function S(e){var n;return Z(e)||(n=e)&&"body"===n.tagName.toLowerCase()?function(e){var n=Z(e)?(0,s.Z)():(0,s.Z)(e),t=Z(e)||n.defaultView;return n.body.clientWidth<t.innerWidth}(e):e.scrollHeight>e.clientHeight}var R=["template","script","style"],O=function(e,n,t){[].forEach.call(e.children,(function(e){-1===n.indexOf(e)&&function(e){var n=e.nodeType,t=e.tagName;return 1===n&&-1===R.indexOf(t.toLowerCase())}(e)&&t(e)}))};function F(e,n){n&&(e?n.setAttribute("aria-hidden","true"):n.removeAttribute("aria-hidden"))}var T,M=function(){function e(e){var n=void 0===e?{}:e,t=n.hideSiblingNodes,r=void 0===t||t,o=n.handleContainerOverflow,a=void 0===o||o;this.hideSiblingNodes=void 0,this.handleContainerOverflow=void 0,this.modals=void 0,this.containers=void 0,this.data=void 0,this.scrollbarSize=void 0,this.hideSiblingNodes=r,this.handleContainerOverflow=a,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=f()}var n=e.prototype;return n.isContainerOverflowing=function(e){var n=this.data[this.containerIndexFromModal(e)];return n&&n.overflowing},n.containerIndexFromModal=function(e){return function(e,n){var t=-1;return e.some((function(e,r){return!!n(e,r)&&(t=r,!0)})),t}(this.data,(function(n){return-1!==n.modals.indexOf(e)}))},n.setContainerStyle=function(e,n){var t={overflow:"hidden"};e.style={overflow:n.style.overflow,paddingRight:n.style.paddingRight},e.overflowing&&(t.paddingRight=parseInt((0,x.Z)(n,"paddingRight")||"0",10)+this.scrollbarSize+"px"),(0,x.Z)(n,t)},n.removeContainerStyle=function(e,n){Object.assign(n.style,e.style)},n.add=function(e,n,t){var r=this.modals.indexOf(e),o=this.containers.indexOf(n);if(-1!==r)return r;if(r=this.modals.length,this.modals.push(e),this.hideSiblingNodes&&function(e,n){var t=n.dialog,r=n.backdrop;O(e,[t,r],(function(e){return F(!0,e)}))}(n,e),-1!==o)return this.data[o].modals.push(e),r;var a={modals:[e],classes:t?t.split(/\s+/):[],overflowing:S(n)};return this.handleContainerOverflow&&this.setContainerStyle(a,n),a.classes.forEach(C.Z.bind(null,n)),this.containers.push(n),this.data.push(a),r},n.remove=function(e){var n=this.modals.indexOf(e);if(-1!==n){var t=this.containerIndexFromModal(e),r=this.data[t],o=this.containers[t];if(r.modals.splice(r.modals.indexOf(e),1),this.modals.splice(n,1),0===r.modals.length)r.classes.forEach(N.Z.bind(null,o)),this.handleContainerOverflow&&this.removeContainerStyle(r,o),this.hideSiblingNodes&&function(e,n){var t=n.dialog,r=n.backdrop;O(e,[t,r],(function(e){return F(!1,e)}))}(o,e),this.containers.splice(t,1),this.data.splice(t,1);else if(this.hideSiblingNodes){var a=r.modals[r.modals.length-1],i=a.backdrop;F(!1,a.dialog),F(!1,i)}}},n.isTopModal=function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e},e}(),A=function(e){var n;return"undefined"===typeof document?null:null==e?(0,s.Z)().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(n=e)&&n.nodeType&&e||null)};function I(e){var n=e||(T||(T=new M),T),t=(0,v.useRef)({dialog:null,backdrop:null});return Object.assign(t.current,{add:function(e,r){return n.add(t.current,e,r)},remove:function(){return n.remove(t.current)},isTopModal:function(){return n.isTopModal(t.current)},setDialogRef:(0,v.useCallback)((function(e){t.current.dialog=e}),[]),setBackdropRef:(0,v.useCallback)((function(e){t.current.backdrop=e}),[])})}var D=(0,v.forwardRef)((function(e,n){var t=e.show,r=void 0!==t&&t,i=e.role,c=void 0===i?"dialog":i,l=e.className,s=e.style,d=e.children,f=e.backdrop,h=void 0===f||f,E=e.keyboard,w=void 0===E||E,C=e.onBackdropClick,N=e.onEscapeKeyDown,x=e.transition,Z=e.backdropTransition,S=e.autoFocus,R=void 0===S||S,O=e.enforceFocus,F=void 0===O||O,T=e.restoreFocus,M=void 0===T||T,D=e.restoreFocusOptions,H=e.renderDialog,P=e.renderBackdrop,L=void 0===P?function(e){return v.createElement("div",e)}:P,j=e.manager,B=e.container,_=e.containerClassName,z=e.onShow,K=e.onHide,U=void 0===K?function(){}:K,W=e.onExit,q=e.onExited,V=e.onExiting,$=e.onEnter,G=e.onEntering,J=e.onEntered,Q=(0,o.Z)(e,["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","containerClassName","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"]),X=function(e,n){var t=(0,v.useState)((function(){return A(e)})),r=t[0],o=t[1];if(!r){var a=A(e);a&&o(a)}return(0,v.useEffect)((function(){n&&r&&n(r)}),[n,r]),(0,v.useEffect)((function(){var n=A(e);n!==r&&o(n)}),[e,r]),r}(B),Y=I(j),ee=function(){var e=(0,v.useRef)(!0),n=(0,v.useRef)((function(){return e.current}));return(0,v.useEffect)((function(){return function(){e.current=!1}}),[]),n.current}(),ne=function(e){var n=(0,v.useRef)(null);return(0,v.useEffect)((function(){n.current=e})),n.current}(r),te=(0,v.useState)(!r),re=te[0],oe=te[1],ae=(0,v.useRef)(null);(0,v.useImperativeHandle)(n,(function(){return Y}),[Y]),u.Z&&!ne&&r&&(ae.current=g()),x||r||re?r&&re&&oe(!1):oe(!0);var ie=(0,p.Z)((function(){if(Y.add(X,_),fe.current=(0,b.Z)(document,"keydown",se),de.current=(0,b.Z)(document,"focus",(function(){return setTimeout(le)}),!0),z&&z(),R){var e=g(document);Y.dialog&&e&&!y(Y.dialog,e)&&(ae.current=e,Y.dialog.focus())}})),ce=(0,p.Z)((function(){var e;(Y.remove(),null==fe.current||fe.current(),null==de.current||de.current(),M)&&(null==(e=ae.current)||null==e.focus||e.focus(D),ae.current=null)}));(0,v.useEffect)((function(){r&&X&&ie()}),[r,X,ie]),(0,v.useEffect)((function(){re&&ce()}),[re,ce]),m((function(){ce()}));var le=(0,p.Z)((function(){if(F&&ee()&&Y.isTopModal()){var e=g();Y.dialog&&e&&!y(Y.dialog,e)&&Y.dialog.focus()}})),ue=(0,p.Z)((function(e){e.target===e.currentTarget&&(null==C||C(e),!0===h&&U())})),se=(0,p.Z)((function(e){w&&27===e.keyCode&&Y.isTopModal()&&(null==N||N(e),e.defaultPrevented||U())})),de=(0,v.useRef)(),fe=(0,v.useRef)(),ve=x;if(!X||!(r||ve&&!re))return null;var pe=(0,a.Z)({role:c,ref:Y.setDialogRef,"aria-modal":"dialog"===c||void 0},Q,{style:s,className:l,tabIndex:-1}),me=H?H(pe):v.createElement("div",pe,v.cloneElement(d,{role:"document"}));ve&&(me=v.createElement(ve,{appear:!0,unmountOnExit:!0,in:!!r,onExit:W,onExiting:V,onExited:function(){oe(!0);for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];null==q||q.apply(void 0,n)},onEnter:$,onEntering:G,onEntered:J},me));var he=null;if(h){var ge=Z;he=L({ref:Y.setBackdropRef,onClick:ue}),ge&&(he=v.createElement(ge,{appear:!0,in:!!r},he))}return v.createElement(v.Fragment,null,k.createPortal(v.createElement(v.Fragment,null,he,me),X))})),H={show:w().bool,container:w().any,onShow:w().func,onHide:w().func,backdrop:w().oneOfType([w().bool,w().oneOf(["static"])]),renderDialog:w().func,renderBackdrop:w().func,onEscapeKeyDown:w().func,onBackdropClick:w().func,containerClassName:w().string,keyboard:w().bool,transition:w().elementType,backdropTransition:w().elementType,autoFocus:w().bool,enforceFocus:w().bool,restoreFocus:w().bool,restoreFocusOptions:w().shape({preventScroll:w().bool}),onEnter:w().func,onEntering:w().func,onEntered:w().func,onExit:w().func,onExiting:w().func,onExited:w().func,manager:w().instanceOf(M)};D.displayName="Modal",D.propTypes=H;var P=Object.assign(D,{Manager:M}),L=(t(2473),t(5068)),j=Function.prototype.bind.call(Function.prototype.call,[].slice);function B(e,n){return j(e.querySelectorAll(n))}var _=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",z=".sticky-top",K=".navbar-toggler",U=function(e){function n(){return e.apply(this,arguments)||this}(0,L.Z)(n,e);var t=n.prototype;return t.adjustAndStore=function(e,n,t){var r,o=n.style[e];n.dataset[e]=o,(0,x.Z)(n,((r={})[e]=parseFloat((0,x.Z)(n,e))+t+"px",r))},t.restore=function(e,n){var t,r=n.dataset[e];void 0!==r&&(delete n.dataset[e],(0,x.Z)(n,((t={})[e]=r,t)))},t.setContainerStyle=function(n,t){var r=this;if(e.prototype.setContainerStyle.call(this,n,t),n.overflowing){var o=f();B(t,_).forEach((function(e){return r.adjustAndStore("paddingRight",e,o)})),B(t,z).forEach((function(e){return r.adjustAndStore("marginRight",e,-o)})),B(t,K).forEach((function(e){return r.adjustAndStore("marginRight",e,o)}))}},t.removeContainerStyle=function(n,t){var r=this;e.prototype.removeContainerStyle.call(this,n,t),B(t,_).forEach((function(e){return r.restore("paddingRight",e)})),B(t,z).forEach((function(e){return r.restore("marginRight",e)})),B(t,K).forEach((function(e){return r.restore("marginRight",e)}))},n}(M),W=t(487),q=t(6611),V=(0,q.Z)("modal-body"),$=v.createContext({onHide:function(){}}),G=t(6792),J=["bsPrefix","className","contentClassName","centered","size","children","scrollable"],Q=v.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,i=e.contentClassName,l=e.centered,u=e.size,s=e.children,d=e.scrollable,f=(0,o.Z)(e,J),p=(t=(0,G.vE)(t,"modal"))+"-dialog";return v.createElement("div",(0,a.Z)({},f,{ref:n,className:c()(p,r,u&&t+"-"+u,l&&p+"-centered",d&&p+"-scrollable")}),v.createElement("div",{className:c()(t+"-content",i)},s))}));Q.displayName="ModalDialog";var X=Q,Y=(0,q.Z)("modal-footer"),ee=t(1485),ne=["bsPrefix","closeLabel","closeButton","onHide","className","children"],te=v.forwardRef((function(e,n){var t=e.bsPrefix,r=e.closeLabel,i=e.closeButton,l=e.onHide,u=e.className,s=e.children,d=(0,o.Z)(e,ne);t=(0,G.vE)(t,"modal-header");var f=(0,v.useContext)($),m=(0,p.Z)((function(){f&&f.onHide(),l&&l()}));return v.createElement("div",(0,a.Z)({ref:n},d,{className:c()(u,t)}),s,i&&v.createElement(ee.Z,{label:r,onClick:m}))}));te.displayName="ModalHeader",te.defaultProps={closeLabel:"Close",closeButton:!1};var re,oe=te,ae=(0,t(9602).Z)("h4"),ie=(0,q.Z)("modal-title",{Component:ae}),ce=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],le={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:X};function ue(e){return v.createElement(W.Z,(0,a.Z)({},e,{timeout:null}))}function se(e){return v.createElement(W.Z,(0,a.Z)({},e,{timeout:null}))}var de=v.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,i=e.style,g=e.dialogClassName,y=e.contentClassName,b=e.children,E=e.dialogAs,w=e["aria-labelledby"],k=e.show,C=e.animation,N=e.backdrop,x=e.keyboard,Z=e.onEscapeKeyDown,S=e.onShow,R=e.onHide,O=e.container,F=e.autoFocus,T=e.enforceFocus,M=e.restoreFocus,A=e.restoreFocusOptions,I=e.onEntered,D=e.onExit,H=e.onExiting,L=e.onEnter,j=e.onEntering,B=e.onExited,_=e.backdropClassName,z=e.manager,K=(0,o.Z)(e,ce),W=(0,v.useState)({}),q=W[0],V=W[1],J=(0,v.useState)(!1),Q=J[0],X=J[1],Y=(0,v.useRef)(!1),ee=(0,v.useRef)(!1),ne=(0,v.useRef)(null),te=(0,v.useState)(null),oe=te[0],ae=te[1],ie=(0,p.Z)(R);t=(0,G.vE)(t,"modal"),(0,v.useImperativeHandle)(n,(function(){return{get _modal(){return oe}}}),[oe]);var le=(0,v.useMemo)((function(){return{onHide:ie}}),[ie]);function de(){return z||(re||(re=new U),re)}function fe(e){if(u.Z){var n=de().isContainerOverflowing(oe),t=e.scrollHeight>(0,s.Z)(e).documentElement.clientHeight;V({paddingRight:n&&!t?f():void 0,paddingLeft:!n&&t?f():void 0})}}var ve=(0,p.Z)((function(){oe&&fe(oe.dialog)}));m((function(){(0,d.Z)(window,"resize",ve),ne.current&&ne.current()}));var pe=function(){Y.current=!0},me=function(e){Y.current&&oe&&e.target===oe.dialog&&(ee.current=!0),Y.current=!1},he=function(){X(!0),ne.current=(0,h.Z)(oe.dialog,(function(){X(!1)}))},ge=function(e){"static"!==N?ee.current||e.target!==e.currentTarget?ee.current=!1:null==R||R():function(e){e.target===e.currentTarget&&he()}(e)},ye=(0,v.useCallback)((function(e){return v.createElement("div",(0,a.Z)({},e,{className:c()(t+"-backdrop",_,!C&&"show")}))}),[C,_,t]),be=(0,a.Z)({},i,q);C||(be.display="block");return v.createElement($.Provider,{value:le},v.createElement(P,{show:k,ref:ae,backdrop:N,container:O,keyboard:!0,autoFocus:F,enforceFocus:T,restoreFocus:M,restoreFocusOptions:A,onEscapeKeyDown:function(e){x||"static"!==N?x&&Z&&Z(e):(e.preventDefault(),he())},onShow:S,onHide:R,onEnter:function(e,n){e&&(e.style.display="block",fe(e)),null==L||L(e,n)},onEntering:function(e,n){null==j||j(e,n),(0,l.ZP)(window,"resize",ve)},onEntered:I,onExit:function(e){null==ne.current||ne.current(),null==D||D(e)},onExiting:H,onExited:function(e){e&&(e.style.display=""),null==B||B(e),(0,d.Z)(window,"resize",ve)},manager:de(),containerClassName:t+"-open",transition:C?ue:void 0,backdropTransition:C?se:void 0,renderBackdrop:ye,renderDialog:function(e){return v.createElement("div",(0,a.Z)({role:"dialog"},e,{style:be,className:c()(r,t,Q&&t+"-static"),onClick:N?ge:void 0,onMouseUp:me,"aria-labelledby":w}),v.createElement(E,(0,a.Z)({},K,{onMouseDown:pe,className:g,contentClassName:y}),b))}}))}));de.displayName="Modal",de.defaultProps=le,de.Body=V,de.Header=oe,de.Title=ie,de.Footer=Y,de.Dialog=X,de.TRANSITION_DURATION=300,de.BACKDROP_TRANSITION_DURATION=150;var fe=de},2473:function(e){"use strict";var n=function(){};e.exports=n}}]);