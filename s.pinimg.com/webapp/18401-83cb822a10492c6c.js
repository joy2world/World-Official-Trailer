"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[18401],{703861:function(e,n,t){var o=t(737614);n.Z=function(){return{referrer:o.Z.instance.referrer,facebookToken:o.Z.instance.facebook_token,unauthId:o.Z.instance.unauth_id,origin:o.Z.instance.origin,appType:o.Z.instance.app_type_detailed}}},235091:function(e,n,t){t.r(n),t.d(n,{default:function(){return B}});var o=t(793550),r=t(575429),i=t(85038),a=t(484898),c=t(703861),u=t(658551),l=t(851252),s=t(746517),p=t(558640),g=t(565664),d=t(773559),f=t(34411),h=t(858875),y=t(912397),_=t(899679),v=t(153166),b=t(457175),m=t(757468),w=t(174523);var S=t(116955),O=t(103421),k=t(641483),x=t(181307),T=t(585967),E=t(336862),A=t(670830),j=t(80209);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var o,r,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(o=t.next()).done)&&(i.push(o.value),!n||i.length!==n);a=!0);}catch(u){c=!0,r=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw r}}return i}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return D(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return D(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function L(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function M(e,n){return(M=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function I(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,o=R(e);if(n){var r=R(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return Z(this,t)}}function Z(e,n){if(n&&("object"===C(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return N(e)}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function G(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var U=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&M(e,n)}(f,e);var n,t,o,r=I(f);function f(e){var n;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,f),G(N(n=r.call(this,e)),"annotateOneTapStopwatch",(function(e){return(0,O.M3)("google_autologin",e)})),G(N(n),"abortOneTapStopwatch",(function(e){return(0,O.RP)("google_autologin",e)})),G(N(n),"stopOneTapStopwatch",(function(){return(0,O.PA)("google_autologin")})),G(N(n),"onRetrieveCredentialsSuccess",(function(e){var t=e.credential,o=e.select_by;n.trackGoogleOneTapAction("success"),n.annotateOneTapStopwatch("autoLoginGoogleEnd"),n.stopOneTapStopwatch(),(0,k.dy)({event:"receive_credential_response_from_provider",provider:"google"});var r={google_open_id_token:t,autologin:"auto"===o},i=r.autologin?"autologin":"login",a=o.includes("btn")?"gsi_btn":o.includes("user")?"onetap_btn":"other",c="onetap_btn"===a?4:3;(0,k.De)({action:i,event:"attempt",type:"google_one_tap",trigger:a}),(0,k.dy)({event:"pinterest_login_start",provider:"google"}),n.login(r).then((function(e){n.onLoginSuccess(e),n.trackSignupLoginEvent(7536,c)}),(function(e){n.onLoginFailure(r,o,e),n.trackSignupLoginEvent(7535,c)})),n.trackSignupLoginEvent(7534,c)})),G(N(n),"onLoginSuccess",(function(){var e=n.props.nextUrl;n.trackGoogleOneTapAction("login.success"),(0,k.dy)({event:"pinterest_login_success",provider:"google"}),e?s.ZP.handleRedirect(e):s.ZP.handleRedirectWithFallbackWindowLocation(),(0,k.dy)({event:"end",provider:"google"})})),G(N(n),"onLoginFailure",(function(e,t,o){var r=n.props,i=r.handleLoginError,a=r.handleLoginWithMfa,c=o&&o.api_error_code||0;if(n.trackGoogleOneTapAction("login.error.".concat(c)),(0,k.dy)({event:"pinterest_login_failure",provider:"google"}),c===S.xN)"btn"===t?(n.setState({googleOpenId:e.google_open_id_token}),n.attemptSignup(!0)):n.showConfirmationDialog(e);else if(c===S.Zn)a({gplus_id_token:e.google_open_id_token});else if(c===S.an)n.setState({showAccountSuspended:!0});else{var u=n.props.i18n._("We couldn’t log you in with that account. Try the Google button!"," - "," -- ");(0,v.x)(u),i(o)}(0,k.dy)({event:"end",provider:"google"})})),G(N(n),"onSignupSuccess",(function(e,t,o){n.trackGoogleOneTapAction("signup.success"),n.trackSignupLoginEvent(7487,t),(0,k.De)({action:"signup",event:"success",type:"google_one_tap",trigger:e}),s.ZP.handleSignupRedirect("/")})),G(N(n),"onSignupFailure",(function(e,t,o){var r=o&&o.api_error_code||0;n.trackGoogleOneTapAction("signup.error.".concat(r)),(0,k.De)({action:"signup",event:"fail",type:"google_one_tap",trigger:e}),n.trackSignupLoginEvent(7488,t),n.hideConfirmationDialog();var i=n.props.i18n._("We couldn’t sign you up with that account. Try the Google button!"," - "," -- ");(0,v.x)(i),n.props.handleSignupError()})),G(N(n),"trackGoogleOneTapAction",(function(e){(0,k.My)("unauth.google_one_tap.".concat(e))})),G(N(n),"handleCancelOneTap",(function(){n.hideConfirmationDialog()})),G(N(n),"attemptSignup",(function(e){var t=n.props,o=t.handleGdprRequiresAge,r=t.pageContext,i=t.requestContext,a=n.state.googleOpenId,c=(0,E.TD)(a),u={google_open_id_token:a,first_name:c.given_name,last_name:c.family_name,image_url:c.picture,container:y.a7,hybridTier:null==r?void 0:r.hybridTier,page:null==r?void 0:r.pageType};if((0,_.NN)(i.country))o(u);else{var l=e?"onetap_btn":"gsi_btn",s=e?4:3;(0,k.De)({action:"signup",event:"attempt",type:"google_one_tap",trigger:l}),(0,p.Z)(n.props.i18n)(u).then((function(e){n.onSignupSuccess(l,s,e)}),(function(e){n.onSignupFailure(l,s,e)})),n.trackSignupLoginEvent(7537,s)}})),n.state={confirmationDialogStep:void 0,googleOpenId:"",showAccountSuspended:!1},n}return n=f,(t=[{key:"componentDidMount",value:function(){var e=this.props,n=e.pageContext,t=e.requestContext,o=e.webGoogleDisabled;(0,k.dy)({event:"start",provider:"google"}),o||i.U2(h.e7)&&t.isBot?this.abortOneTapStopwatch("disabled"):(this.setupGoogleOneTap(),t.isBot||(0,k.My)("unauth_web_container.".concat(y.a7,".").concat(String(null==n?void 0:n.hybridTier),".other.shown")))}},{key:"initializeGoogleOneTap",value:function(){var e=this,n=this.props.activateDelayAutologin;this.trackGoogleOneTapAction("sdk_exists");var t=window.google.accounts.id,o=a.Z.isSafari();(0,k.dy)({event:"initialize_library",provider:"google"});var r=function(e){if(e.startsWith("enabled_google")||e.startsWith("enabled_both"))try{var n=e.split("_");return parseInt(n[2],10)||0}catch(t){(0,k.My)("web_unauth_delay_autologin_error.".concat(e))}return 0}(n().group);t.initialize({activity_listener:this.handleActivity.bind(this),auto_select:!i.U2(h.e7),callback:function(n){return t=function(){return e.handleOneTapResponse(n)},void((o=r)>0?setTimeout(t,o):t());var t,o},cancel_on_tap_outside:!1,client_id:d.Z.settings.GPLUS_CLIENT_ID,context:"use",itp_support:o}),this.props.dispatch({type:"GOOGLE_ONE_TAP_INITIALIZED",payload:{}}),this.trackGoogleOneTapAction("initialize"),this.annotateOneTapStopwatch("autoLoginGoogleInitEnd"),(0,k.dy)({event:"show_ui",provider:"google"}),t.prompt(this.handleMomentNotification.bind(this),void 0,this.logNotification.bind(this))}},{key:"logNotification",value:function(e){"auto_select_started"===e.type?(0,k.My)("web_unauth.cancellable_autologin.auto_select_started"):"auto_select_canceled"===e.type&&(0,k.My)("web_unauth.cancellable_autologin.auto_select_canceled")}},{key:"getGoogleId",value:function(){if("undefined"==typeof window)return null;var e=window.google;return e&&e.accounts&&e.accounts.id}},{key:"setupGoogleOneTap",value:function(){var e=this,n=this.props.requestContext.experiments,t=(n.v2ActivateExperiment("web_cancelable_google_autologin")||"").startsWith("enabled");this.annotateOneTapStopwatch("autoLoginGoogleStart"),(0,k.My)("web_unauth.gsi_script.start_dynamic_loading"),n.flush(),(0,k.dy)({event:"load_script_start",provider:"google"}),(0,u.ZP)("".concat(E.tq).concat(t?"?feature=cancelableAutoSelect":"")).then((function(){e.trackGoogleOneTapAction("gsi_script_loaded"),(0,k.dy)({event:"load_script_success",provider:"google"});var n=window.google;n&&n.accounts&&n.accounts.id?e.initializeGoogleOneTap():(e.abortOneTapStopwatch("noAccountFound"),(0,k.dy)({event:"global_object_not_found",provider:"google"}))}))}},{key:"handleMomentNotification",value:function(e){var n=e.getMomentType();"display"===n?e.isDisplayed()?this.trackGoogleOneTapAction("display_moment.displayed"):this.trackGoogleOneTapAction("display_moment.not_displayed.".concat(e.getNotDisplayedReason())):"skipped"===n?this.trackGoogleOneTapAction("skipped_moment.".concat(e.getSkippedReason())):"dismissed"===n&&this.trackGoogleOneTapAction("dismissed_moment.".concat(e.getDismissedReason()))}},{key:"handleOneTapResponse",value:function(e){if(!this.props.autologinDisabled)if(e){var n=e.select_by;this.trackGoogleOneTapAction("select_by.".concat(n)),this.onRetrieveCredentialsSuccess(e)}else this.abortOneTapStopwatch("noResponse")}},{key:"handleActivity",value:function(e){var n=this.props,t=n.dispatch,o=n.handleEmptyCredentials;if(e){if("error"===e.type)return this.trackGoogleOneTapAction("error.".concat(e.errorType)),(0,k.dy)({event:"hide_ui",provider:"google"}),o(),void t({type:"GOOGLE_ONE_TAP_FAILED",payload:{}});var r="ui_change"===e.type?e.uiActivityType:e.userActivityType;this.trackGoogleOneTapAction("activity.".concat(e.type,".").concat(r)),"close_prompt"===r&&(o(),(0,k.dy)({event:"hide_ui",provider:"google"}))}}},{key:"trackSignupLoginEvent",value:function(e,n){var t=this.props,o=t.viewer,r=t.logContextEvent;e&&(o.isAuth?r({event_type:e,aux_data:{login_state:o.isLimitedLogin?2:1,signup_login_method:n}}):r({event_type:e,aux_data:{signup_login_method:n}}))}},{key:"login",value:function(e){var n=this.props.pageContext,t={container:y.a7,hybridTier:null==n?void 0:n.hybridTier,page:null==n?void 0:n.pageType};return(0,l.Z)(e,(0,c.Z)(),t)}},{key:"showConfirmationDialog",value:function(e){var n,t=this.props.container;n="InspiredWallSignup"===t?"staticSignupLogin":"login_page"===t?"staticSignupLoginWithTOS":e.autologin?"staticSignupLogin":"delayedSignupLoadingSpinner",this.setState({googleOpenId:e.google_open_id_token,confirmationDialogStep:n})}},{key:"hideConfirmationDialog",value:function(){this.setState({confirmationDialogStep:void 0})}},{key:"render",value:function(){var e=this,n=this.props,t=n.requestContext,o=n.webGoogleDisabled,r=n.handleShowLogin,i=this.state,a=i.showAccountSuspended,c=i.confirmationDialogStep;return t.isBot||o?null:a?(0,j.jsx)(g.Z,{onClose:function(){return e.setState({showAccountSuspended:!1})}}):c?(0,j.jsx)(m.Z,{handleCancelClick:this.handleCancelOneTap,handleConfirmSignup:function(){return e.attemptSignup()},handleShowLogin:r,step:c}):null}}])&&L(n.prototype,t),o&&L(n,o),f}(o.Component);function B(e){var n=e.container,t=e.handleGdprRequiresAge,i=e.handleLoginError,a=e.handleLoginWithMfa,c=e.handleShowLogin,u=e.handleSignupError,l=e.nextUrl,s=(0,b.v)().logContextEvent,p=(0,w.ZP)(),g=(0,r.useDispatch)(),d=(0,f.Z)(),h=P((0,o.useState)(!0),2),y=h[0],_=h[1],v=(0,x.aq)("web_google_disabled").anyEnabled,m=(0,x.tc)("web_unauth_delay_autologin"),S=(0,x.tc)("web_unauth_disable_autologin_for_country"),O=(0,x.tc)("web_unauth_remove_3p_autologin")().group,k=(0,T.B)(),E=(0,A.lO)(),C=k.country;if(!y)return null;var D=function(){return _(!1)};return(0,j.jsx)(U,{activateDelayAutologin:m,autologinDisabled:"enabled_both"===O||"CH"===C&&S().anyEnabled,container:null!=n?n:"unknown",dispatch:g,handleEmptyCredentials:D,handleLoginWithMfa:function(e){D(),a(e)},handleLoginError:function(e){D(),i(e)},handleGdprRequiresAge:function(e){D(),t(e)},handleSignupError:function(){D(),u()},handleShowLogin:function(){D(),c()},nextUrl:l,pageContext:E,requestContext:k,viewer:d,webGoogleDisabled:v,i18n:p,logContextEvent:s})}},558640:function(e,n,t){t.d(n,{Z:function(){return y}});var o=t(737614),r=t(730762),i=t(163379),a=t(584489);var c=t(185062),u=t(399024),l=t(773559),s=t(349512),p=t(641483),g=t(352824),d=t(688239),f=t(304988),h=t(250933),y=function(e){return function(n){var t=o.Z.instance,y=t.facebook_token,_=t.invite_code,v=t.locale,b=t.country,m=t.country_from_hostname,w=t.country_from_ip,S=t.origin,O=t.referrer,k=t.region_from_ip,x=t.unauth_id,T=t.user_agent_platform,E={logContextEventType:function(e){r.Z.getInstance().addEvent({event_type:e})},sendActiveUserPing:u.Z,registerUserContext:{facebookToken:y,inviteCode:_,locale:v,referrer:O,unauthId:x},onCorsHandshakeHost:l.Z.settings.CORS_HANDSHAKE_DOMAINS.includes(S),successWithoutTokenErrorMessage:e._("We were able to create your account, but there was a problem logging you in. Try refreshing the page to continue."," - "," -- "),trackRegisterSuccess:function(){var e;(0,p.My)("signup_referrer_module.".concat(String((0,c.Z)().referrer||((e=a.Z.instance.getState().ui.mainComponent.initial)?(0,i.Z)(e):null)))),"ios"===T?(0,p.My)("signup_mweb.iphone_web"):"ipad"===T?(0,p.My)("signup_mweb.ipad_web"):"android"===T&&(0,p.My)("signup_mweb.android_web")}};return(0,h.c_)({country:b,countryFromHostName:m,countryFromIp:w})&&(0,f.yP)({id:s.Y7,eventCategory:"NewUsers",eventName:"Desktop"}),(0,h.$r)({country:b,countryFromHostName:m,countryFromIp:w,regionFromIp:k})&&(0,f.jw)({id:"flashtalking-d-reg",eventCategory:"NewUsers",eventName:"Desktop"}),(0,h.NR)(b,k)&&(0,f.EN)({pixelId:d.NS,eventCategory:"NewUsers",eventName:"Desktop"}),(0,h.Fc)({country:b,countryFromHostName:m,countryFromIp:w})&&(0,f.Be)({pixelId:d.Ks,eventCategory:"NewUsers",eventName:"Desktop"}),(0,g.Z)(n,E)}}},826936:function(e,n,t){var o=t(174523),r=t(218265),i=t(80209),a=function(){var e=(0,o.ZP)();return(0,i.jsx)(r.$j,{accessibilityLabel:e._("Loading","Label for loading spinner","Label for loading spinner"),show:!0})};n.Z=function(e){var n=e.rounding;return(0,i.jsxs)(r.xu,{children:[(0,i.jsx)(r.xu,{alignItems:"center",bottom:!0,display:"flex",justifyContent:"center",left:!0,opacity:1,position:"absolute",right:!0,top:!0,zIndex:new r.Ry(101),children:(0,i.jsx)(a,{})}),(0,i.jsx)(r.xu,{bottom:!0,color:"white",left:!0,opacity:.7,position:"absolute",right:!0,top:!0,zIndex:new r.Ry(100),rounding:n})]})}},757468:function(e,n,t){t.d(n,{Z:function(){return O}});var o=t(793550),r=t(500953),i=t(174523),a=t(641483),c=t(218265),u=t(80209);function l(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var o,r,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(o=t.next()).done)&&(i.push(o.value),!n||i.length!==n);a=!0);}catch(u){c=!0,r=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw r}}return i}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return s(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var p="unauth.google_one_tap.confirmation_dialog.delayedSignupLoadingSpinner";function g(e){var n=e.handleSignup,t=e.handleLogin,s=(0,i.ZP)(),g=l((0,o.useState)(!1),2),d=g[0],f=g[1],h=(0,o.useRef)(null);return(0,r.Z)((function(){var e;return h.current=window.setTimeout((function(){(0,a.My)("".concat(p,".signup_delay_timer_reached")),e=window.requestAnimationFrame((function(){f(!0)})),n()}),2e3),function(){h.current&&window.clearTimeout(h.current),e&&window.cancelAnimationFrame(e)}})),(0,u.jsxs)(c.kC,{alignItems:"center",direction:"column",flex:"grow",justifyContent:"center",children:[(0,u.jsx)(c.xu,{children:(0,u.jsx)(c.xv,{align:"center",weight:"bold",children:(0,u.jsx)("span",{className:"deprecatedTextSizeXL",children:d?s._("Finishing up...","Title of a dialog telling the user that an account is almost done being created.","Title of a dialog telling the user that an account is almost done being created."):s._("Creating your account...","Title of a dialog telling the user that an account is being created.","Title of a dialog telling the user that an account is being created.")})})}),(0,u.jsx)(c.xu,{paddingY:4,children:(0,u.jsx)(c.$j,{accessibilityLabel:s._("Account is being created","Accessibility label for account creation loading dialog","Accessibility label for account creation loading dialog"),show:!0})}),d?null:(0,u.jsx)(c.xu,{marginTop:2,children:(0,u.jsx)(c.xv,{inline:!0,align:"center",children:s._("Didn’t mean to create a new account?","Description text telling the user that they can log in if they did not intend to create a new account","Description text telling the user that they can log in if they did not intend to create a new account")})}),d?null:(0,u.jsx)(c.xu,{children:(0,u.jsx)(c.xv,{inline:!0,align:"center",children:(0,u.jsx)(c.rU,{inline:!0,href:"/login",onClick:function(e){var n=e.event;(0,e.dangerouslyDisableOnNavigation)(),(0,a.My)("".concat(p,".login_click")),h.current&&window.clearTimeout(h.current),n&&(n.preventDefault(),n.stopPropagation()),t()},children:s._("Click here to log in.","Login button which will show the login modal and enable the user to log in","Login button which will show the login modal and enable the user to log in")})})})]})}var d=t(826936),f=t(340778),h=t(304966),y=t(585967);function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){b(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var o,r,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(o=t.next()).done)&&(i.push(o.value),!n||i.length!==n);a=!0);}catch(u){c=!0,r=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw r}}return i}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return w(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return w(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var S=function(e){var n=e.children;return(0,u.jsx)(c.xu,{bottom:!0,left:!0,opacity:1,position:"fixed",right:!0,top:!0,zIndex:new c.Ry(1e3),dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(0, 0, 0, 0.6)"}},children:(0,u.jsx)(c.xu,{color:"white",direction:"column",display:"flex",margin:6,padding:7,position:"fixed",right:!0,rounding:2,top:!0,width:376,children:n})})};function O(e){var n=e.handleCancelClick,t=e.handleConfirmSignup,l=e.handleShowLogin,s=e.step,p=(0,i.ZP)(),_=(0,y.B)().country,b=m((0,o.useState)(!1),2),w=b[0],O=b[1],k=(0,h.Z)(),x=function(e){return(0,a.My)("".concat("unauth.google_one_tap.confirmation_dialog",".").concat(s,".").concat(e))},T={view_type:10,view_parameter:3202};(0,r.Z)((function(){return k({event_type:120,view_parameter:T.view_parameter}),document.body&&(document.body.style.overflow="hidden"),x("shown"),function(){document.body&&(document.body.style.overflow="")}}));var E=function(){x("login.click"),k(v(v({},T),{},{event_type:101,element:30})),l()};return(0,u.jsx)(S,{children:"delayedSignupLoadingSpinner"===s?(0,u.jsx)(g,{handleLogin:E,handleSignup:function(){x("confirm.click"),k(v(v({},T),{},{event_type:101,element:31})),t()}}):(0,u.jsxs)(c.xu,{children:[w?(0,u.jsx)(d.Z,{}):null,(0,u.jsx)(c.xu,{display:"inlineBlock",position:"absolute",top:!0,right:!0,marginTop:2,marginEnd:2,children:(0,u.jsx)(c.hU,{accessibilityLabel:p._("Cancel","Button to close the signup/login modal","Button to close the signup/login modal"),icon:"cancel",onClick:function(){x("cancel.click"),k(v(v({},T),{},{event_type:101,element:73})),n()},size:"sm"})}),(0,u.jsx)(c.xv,{align:"start",weight:"bold",children:(0,u.jsx)("span",{className:"deprecatedTextSizeXL",children:p._("Continue to Pinterest","Title of a dialog telling enabling the user to continue with sign up or log in","Title of a dialog telling enabling the user to continue with sign up or log in")})}),(0,u.jsx)(c.xu,{marginTop:2,children:(0,u.jsx)(c.xv,{align:"start",children:p._("Hmm, it looks like you don't have an account yet. Let's get started!","Description text of a dialog asking the user to sign up for a Pinterest account","Description text of a dialog asking the user to sign up for a Pinterest account")})}),(0,u.jsx)(c.xu,{marginTop:5,children:(0,u.jsx)(c.zx,{fullWidth:!0,color:"red",onClick:function(){x("confirm.click"),k(v(v({},T),{},{event_type:101,element:31})),O(!0),t()},text:p._("Sign up","Text on a button which will create an account when clicked","Text on a button which will create an account when clicked")})}),(0,u.jsx)(c.xu,{marginTop:2,children:(0,u.jsx)(c.zx,{fullWidth:!0,color:"gray",onClick:E,text:p._("Log in using a different method","Text on a button which will take the user to login when clicked.","Text on a button which will take the user to login when clicked.")})}),"staticSignupLoginWithTOS"===s?(0,u.jsx)(c.xu,{marginTop:4,marginStart:4,marginEnd:4,children:(0,u.jsx)(f.Z,{country:_,dark:!0})}):null]})})}},352824:function(e,n,t){var o=t(85038),r=t(311866),i=t(233088),a=t(899679),c=t(221469),u=t(804652),l=t(116955),s=t(697974),p=t(641483),g=t(858875);function d(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return f(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==t.return||t.return()}finally{if(c)throw i}}}}function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var _=0;n.Z=function e(n,t){var f,v,b,m=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){y(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},n),w=t.onCorsHandshakeHost,S=t.registerUserContext,O=t.sendActiveUserPing,k=t.successWithoutTokenErrorMessage,x=i.ZP.localStorage.getItem("visitedPages"),T=null!==(f=null===(v=window)||void 0===v||null===(b=v.location)||void 0===b?void 0:b.search)&&void 0!==f?f:null,E=(0,c.mB)(T).utm_campaign;x&&(m.visited_pages=JSON.stringify(x)),E&&(m.utm_campaign=E);var A,j=i.ZP.localStorage.getItem("visitedPinLandingPagesBeforeLogin");if(j){var C,P=[],D=d(j);try{for(D.s();!(C=D.n()).done;){var L=C.value;L.is_shared_pin&&P.push({ts:L.ts,path:L.path,first_pin_image_signature:L.image_signature,is_shared:!0})}}catch(N){D.e(N)}finally{D.f()}P&&(m.visited_pages=JSON.stringify(P.concat(x||[])))}m.user_behavior_data=(A={},["signupTriedSkipInputName","signupTriedSkipGender","unauthTopicsFollowed"].forEach((function(e){var n=i.ZP.localStorage.getItem(e);n&&(A[e]=n)})),JSON.stringify(A));var M=function(e){return(0,u.D)("signup"),o.zN(g.Mq.name),o.zN(g.x2.name),O(),o.t8(g.Xh,"1"),function(e,n){var t,o=n.logContextEventType,r=n.trackRegisterSuccess;switch(e.container){case"home_page":t=1750,(0,p.My)("signup_home_page");break;case"mweb_homepage":t=1750,(0,p.My)("signup_mweb_home_page");break;case"plain_signup_modal":t=1751,(0,p.My)("signup_plain_modal");break;case"closeup_signup_modal":t=1752,(0,p.My)("signup_closeup_modal");break;case"widescreen_signup_modal":t=1753,(0,p.My)("signup_widescreen_modal");break;case"pinit_button_landing":t=1755,(0,p.My)("signup_pinit_button_landing");break;case"inspired_banner":(0,p.My)("signup_inspired_banner");break;case"category_jump_banner":(0,p.My)("signup_category_jump_banner");break;case"send_pin_banner":t=1756,(0,p.My)("send_pin_banner");break;default:t=1754,(0,p.My)("signup_unknown_placement")}var i=e.container||"container_unknown";(0,p.My)("signup.container.".concat(i));var c=e.signupSource||"signupSource_unknown";(0,p.My)("signup.source.".concat(c)),t&&o(t);var u,l=document.referrer;u=l?l.indexOf("/t.co/")>-1?"twitter":l.indexOf("google.")>-1?"google":l.indexOf("bing.")>-1?"bing":l.indexOf("facebook.")>-1?"facebook":"other":"direct",(0,p.My)("signup_referrer.".concat(u)),r(),(0,p.My)("web_signup.".concat((0,a.sR)(e),".success.").concat(e.page||"page_unknown",".").concat(i,".").concat(u,".").concat(e.hybridTier||"tier_unknown")),(0,p.De)({action:"signup",event:"success",type:(0,a.sR)(e)})}(m,t),e},I=function(n){if(n.api_error_code===l.tz&&((0,p.My)("multi_step_set_age_restrict_cookie"),o.t8(g.It,"1",(0,o.kZ)(g.It))),(!n.api_error_code||[l.dO,l.cZ].includes(n.api_error_code))&&_<3)return(0,p.My)("unauth_web.signup_retry_error.".concat(String(n.api_error_code),".").concat(String(m.container))),_+=1,e(m,t);throw(0,p.De)({action:"signup",event:"fail",type:(0,a.sR)(m)}),n};if(!m.facebook_id&&!m.gplus_code&&!m.gplus_id_token&&!m.google_open_id_token&&!m.line_id_token&&Boolean(m.email)&&w){(0,p.My)("unauth_cross_domain_register_debugging_counter");var Z=function(e){(0,p.My)("web_cross_domain_register.".concat(e,".").concat((0,a.sR)(m)))};return Z("attempt"),(0,s.registerUser)(m,S).then((function(e){M(e);var n=e.data||"";if(n)return Z("success_with_token"),(0,s.exchangeTokenAndSetSession)(n,!0).then((function(e){Z("success_token_exchanged")}),(function(e){throw Z("success_token_not_exchanged"),e}));throw Z("success_without_token"),new Error(k)}),(function(e){Z("failure"),I(e)}))}return r.ZP.create("UserRegisterResource",m).callCreate().then((function(e){return M(e)}),(function(e){return I(e)}))}},451190:function(e,n,t){t.d(n,{b:function(){return u},Z:function(){return l}});var o=t(793550),r=t(241933),i=t(51610),a=t(218265),c=t(80209),u=new a.Ry(1e3);function l(e){var n=e._dangerouslyDisableScrollBoundaryContainer,t=e.accessibilityModalLabel,l=e.align,s=e.allowClickAndDrag,p=e.allowMediaPlay,g=e.allowScroll,d=e.children,f=e.closeOnOutsideClick,h=e.footer,y=e.heading,_=e.onDismiss,v=e.role,b=e.size,m=e.subHeading;(0,o.useEffect)((function(){return r.Z.pause(),function(){r.Z.resume()}}),[]);return(0,c.jsx)(a.mh,{zIndex:u,children:(0,c.jsx)(i.Z,{allowClickAndDrag:s,allowEsc:!0,allowMediaPlay:p,allowScroll:g,children:(0,c.jsx)(a.u_,{_dangerouslyDisableScrollBoundaryContainer:n,accessibilityModalLabel:t,align:l,closeOnOutsideClick:f,heading:y,footer:h,onDismiss:function(){r.Z.resume(),_()},role:v,size:b,subHeading:m,children:d})})})}},588527:function(e,n){n.Z={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,F5:116,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}},103421:function(e,n,t){t.d(n,{gq:function(){return g},RP:function(){return f},M3:function(){return h},PA:function(){return y}});var o=t(46509),r=t(68348),i=t(139585),a=t(590606),c=t(299962),u=t(974780),l=t(26382),s=t(939606),p={},g=function(e,n){n.forEach((function(n){p[n]=function(e){var n=e.name,t=e.pwtStaticContext;if(!u.Z||!(0,r.Z)())return null;var i={type:"stopwatch",name:n},s=[],p=!0;return{abort:function(e){p&&(p=!1,(0,c.Z)({metricId:i,pwtStaticContext:t,result:{type:"ABORT",reason:e}}))},annotate:function(e){p&&s.push({label:e,timestamp:u.Z.now()})},stop:function(){if(p){p=!1;var e={type:"COMPLETE",traceId:(0,a.Z)(),startTime:0,endTime:u.Z.now(),spans:[],annotationMap:(0,o.Z)(s),binaryAnnotationMap:(0,l.n)({metricId:i,pwtStaticContext:t})};(0,c.Z)({metricId:i,pwtStaticContext:t,result:e})}}}}({name:n,pwtStaticContext:e})}))},d=function(e){return p[e]},f=function(e,n){var t=d(e);if(t)try{t.abort(n)}catch(o){(0,s.H)("app_load_stopwatch_error",{name:e,result:"abort"})}},h=function(e,n){var t=d(e);t&&(t.annotate(n),(0,i.ZP)("stopwatch_".concat(e,"_").concat(n)))},y=function(e){var n=d(e);if(n)try{n.stop()}catch(t){(0,s.H)("app_load_stopwatch_error",{name:e,result:"complete"})}}},46509:function(e,n){function t(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function o(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}n.Z=function(e){var n={};e.forEach((function(e){var t=e.label,i=e.timestamp;n=o(o({},n),{},r({},t,(n[t]||[]).concat([i])))}));var t=Object.freeze({});return Object.keys(n).forEach((function(e){(n[e]||[]).forEach((function(n,i){var a=i?"".concat(e,"_").concat(i+1):e;t=o(o({},t),{},r({},a,n))}))})),t}},658551:function(e,n,t){t.d(n,{Jg:function(){return c},ZP:function(){return u},c5:function(){return l}});var o=t(731164),r=20,i=100,a=.01,c=Object.freeze({OTHER:0,FACEBOOK:1,GPLUS_ONE:2,GSI:3});function u(e){return new Promise((function(n,t){if(document.querySelector('script[src="'.concat(e,'"]')))n();else{var o=document.createElement("script");o.src=e,o.async=!0,o.addEventListener("load",n),o.addEventListener("error",t),document.getElementsByTagName("head")[0].appendChild(o)}}))}function l(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.OTHER,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],u=t?"web":"mweb";return new Promise((function(t,l){if(document.querySelector('script[src="'.concat(e,'"]'))){var s=0;if(n===c.GPLUS_ONE)if(window.gapi)t();else var p=setInterval((function(){window.gapi||s===r?(clearInterval(p),t()):(s+=1,o.Z.increment("".concat(u,".loadScript.gplus_one.tries_").concat(s),a))}),i);else if(n===c.FACEBOOK)if(window.FB)t();else var g=setInterval((function(){window.FB||s===r?(clearInterval(g),t()):(s+=1,o.Z.increment("".concat(u,".loadScript.facebook.tries_").concat(s),a))}),i);else if(n===c.GSI)if(window.google)t();else var d=setInterval((function(){window.google||s===r?(clearInterval(d),t()):(s+=1,o.Z.increment("".concat(u,".loadScript.gsi.tries_").concat(s),a))}),i);else t()}else{var f=document.createElement("script");f.src=e,f.async=!0,f.addEventListener("load",t),f.addEventListener("error",l),document.getElementsByTagName("head")[0].appendChild(f)}}))}},51610:function(e,n,t){t.d(n,{U:function(){return a},Z:function(){return c}});var o=t(588527),r=t(80209),i=function(){},a=function(e){e.stopPropagation(),e.nativeEvent&&e.nativeEvent.stopImmediatePropagation&&e.nativeEvent.stopImmediatePropagation()};function c(e){var n=e.allowClickAndDrag,t=e.allowEsc,c=e.allowMediaPlay,u=e.allowScroll,l=e.children,s=function(e){return function(e,n){n&&e.keyCode===o.Z.ESCAPE||a(e)}(e,t)};return(0,r.jsx)("div",{onAbort:a,onAnimationEnd:a,onAnimationIteration:a,onAnimationStart:a,onBlur:i,onCanPlay:c?i:a,onCanPlayThrough:a,onChange:a,onClick:n?i:a,onCompositionEnd:a,onCompositionStart:a,onCompositionUpdate:a,onContextMenu:a,onCopy:a,onCut:a,onDoubleClick:a,onDurationChange:a,onEmptied:a,onEncrypted:a,onEnded:a,onError:a,onFocus:i,onInput:a,onInvalid:a,onKeyDown:s,onKeyPress:s,onKeyUp:s,onLoad:a,onLoadedData:a,onLoadedMetadata:a,onLoadStart:a,onMouseDown:a,onMouseEnter:a,onMouseLeave:a,onMouseMove:n?i:a,onMouseOut:a,onMouseOver:a,onMouseUp:n?i:a,onPaste:a,onPause:a,onPlay:a,onPlaying:a,onProgress:a,onRateChange:a,onScroll:u?i:a,onSeeked:a,onSeeking:a,onSelect:a,onStalled:a,onSubmit:a,onSuspend:a,onTimeUpdate:a,onTouchCancel:a,onTouchEnd:n?i:a,onTouchMove:n?i:a,onTouchStart:n?i:a,onTransitionEnd:a,onVolumeChange:a,onWaiting:a,onWheel:a,children:l})}},163379:function(e,n,t){function o(e){return e.replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase()}t.d(n,{Z:function(){return o}})},34411:function(e,n,t){t.d(n,{$:function(){return r}});var o=(0,t(762803).Z)("viewer"),r=o.Provider,i=o.useHook;n.Z=i}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/18401-83cb822a10492c6c.js.map