"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[15134],{896829:function(e,t,r){r.d(t,{Q:function(){return u},Z:function(){return d}});var n=r(793550),i=r(737614),o=r(730762),a=r(44062);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=(0,a.s)().setViewContextData;(0,n.useEffect)((function(){var t;e&&(r({viewType:null!==(t=e.view_type)&&void 0!==t?t:1,viewParameter:e.view_parameter,viewData:e.view_data,component:e.component,element:e.element,object_id_str:e.object_id_str,aux_data:e.aux_data,clientTrackingParams:e.clientTrackingParams}),o.Z.getInstance().addEvent(s(s({},e),{},{event_type:13,request_identifier:i.Z.initialPageContext.PAGE_LOAD_REQUEST_IDENTIFIER})))}),[t])}function d(e){var t=e.children;return u(e.log),t||null}},810566:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(748455),i=r(80078),o=(r(218265),r(80209));function a(e){var t=e.accessibilityMaximizeLabel,r=e.accessibilityMinimizeLabel,a=e.accessibilityMuteLabel,c=e.accessibilityPauseLabel,s=e.accessibilityPlayLabel,l=e.accessibilityUnmuteLabel,u=e.aspectRatio,d=e.controls,f=e.loop,p=e.isAutoPlay,v=e.playing,h=e.playsInline,y=e.poster,m=e.src,g=e.volume,b=e.setPlaying,x=e.setVolume;return(0,o.jsx)(n.default,{accessibilityMaximizeLabel:t,accessibilityMinimizeLabel:r,accessibilityMuteLabel:a,accessibilityPauseLabel:c,accessibilityPlayLabel:s,accessibilityUnmuteLabel:l,aspectRatio:u,captions:"",controls:d,loop:f,onPause:function(){return b(!1)},onPlay:function(){return b(!0)},onVolumeChange:function(e){var t=e.event,r=e.volume;t.stopPropagation(),x&&x(r)},hlsConfig:{startLevel:i.VS},isAutoPlay:p,playing:v,playsInline:h,poster:y,src:m,volume:g})}},472125:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(793550),i=r(166555),o=r.n(i);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(s){c=!0,i=s}finally{try{a||null==r.return||r.return()}finally{if(c)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(){var e=a((0,n.useState)(null),2),t=e[0],r=e[1];return(0,n.useEffect)((function(){var e=function(){return r({width:window.innerWidth,height:window.innerHeight})};e();var t=o()(e,50);return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),t}},44062:function(e,t,r){r.d(t,{I:function(){return v},s:function(){return p}});var n=r(793550),i=r(762803),o=r(80209);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(s){c=!0,i=s}finally{try{a||null==r.return||r.return()}finally{if(c)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d=(0,i.ZP)("View"),f=d.Provider,p=d.useHook;function v(e){var t=e.children,r=e.initialState,i=void 0===r?{}:r,a=l((0,n.useState)(i),2),s=a[0],u=a[1],d=(0,n.useCallback)((function(){return u({})}),[]);return(0,o.jsx)(n.Fragment,{children:(0,o.jsx)(f,{value:c(c({},s),{},{clearViewContextData:d,setViewContextData:u}),children:t})})}},304194:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(311866),i=function(e){return n.ZP.create("InviteAttributionResource",{invite_code:e}).callCreate()},o=r(221469),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){};var t=(0,o.mB)(window.location.search),r=t.invite_code;r?i(r):e(t)}},265355:function(e,t){t.Z=function(e){switch(e){case"BR":case"MX":case"AR":case"CL":case"CO":return"LatAm";case"US":return"US";default:return"OTHER"}}},371463:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(218265),i=r(80209);function o(e){var t=e.showDot,r=e.text;return(0,i.jsxs)(n.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{backgroundColor:"#FF5246"}},display:"flex",paddingX:2,paddingY:1,rounding:"pill",children:[t&&(0,i.jsx)(n.xu,{color:"white",dangerouslySetInlineStyle:{__style:{marginRight:5}},height:6,rounding:"circle",width:6}),(0,i.jsx)(n.xv,{color:"white",size:"sm",weight:"bold",children:r})]})}},345736:function(e,t,r){r.d(t,{Z:function(){return O}});var n=r(793550),i=r(151101),o=r(304966),a=r(620220),c=r(218265),s=r(80209);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){var t=e.color,r=void 0===t?"darkGray":t,n=e.pinId,d=e.title,f=e.user,p=e.viewParameterType,v=void 0===p?3582:p,h=e.viewType,y=void 0===h?1:h,m=(0,o.Z)(),g=(0,a.iH)().referrer;if(!f)return null;var b=function(e){m(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({event_type:102,view_type:y,view_parameter:v,component:0},e))};return(0,s.jsxs)(c.xu,{dangerouslySetInlineStyle:{__style:{padding:"8px 6px 16px"}},children:[!!d&&(0,s.jsx)(c.xu,{marginBottom:2,children:(0,s.jsx)(c.iP,{href:"/tv/".concat(n,"/?referrer=").concat(g),onTap:function(){return b()},role:"link",children:(0,s.jsx)(c.xv,{size:"md",weight:"bold",lineClamp:2,children:d})})}),(0,s.jsx)(c.iP,{href:"/".concat(f.username),onTap:function(){return b({element:11619})},role:"link",children:(0,s.jsxs)(c.kC,{alignItems:"center",children:[(0,s.jsx)(c.xu,{marginStart:-2,paddingX:2,children:(0,s.jsx)(i.Z,{name:f.full_name||"",size:"sm",src:f.image_medium_url})}),(0,s.jsx)(c.xv,{color:r,size:"md",lineClamp:1,children:f.full_name||""})]})})]})}var f=r(371463),p=r(174523),v=r(889041);function h(e){var t=e.feedItem,r=e.gridIndex,i=(0,p.ZP)(),l=(0,o.Z)(),u=(0,a.iH)(),h=u.gridItemHeight,y=u.gridItemWidth,m=u.referrer,g=t.creator_class,b=t.creator_class_instance,x=t.id,w=g.creator,_=b.title,j=(b.preview_video.video_list||{}).V_HLSV4;if(!j)return null;var O=function(e){var t=(e&&e.video_list&&e.video_list.V_HLSV4||{}).duration;if(!t)return"";var r=Math.trunc(t/1e3),n=Math.trunc(t/6e4),i=Math.trunc(t/36e5),o=n-60*i,a=r-60*o-60*i*60,c=i>0?"".concat(i,":").concat(o.toString().padStart(2,"0")):"".concat(o);return c+":".concat(a.toString().padStart(2,"0"))}(b.replay_video),P=O.length>0?O:i._("Processing video","EpisodeGridRep.pillText.fallback","A label indicating that the video is still processing.");return(0,s.jsxs)(n.Fragment,{children:[(0,s.jsx)(c.iP,{href:"/tv/".concat(x,"/?referrer=").concat(m),onTap:function(){var e;return l({event_type:102,view_type:1,view_parameter:3582,component:0,aux_data:{content_ids:{pin:x},grid_index:r,referrer:m,story_id:null===(e=g.recap_pin)||void 0===e?void 0:e.id}})},role:"link",children:(0,s.jsx)(c.zd,{height:h,rounding:4,wash:!0,width:y,children:(0,s.jsx)(v.Z,{format:v.k.GRID,height:h,video:j,width:y,children:(0,s.jsx)(c.xu,{margin:2,position:"absolute",top:!0,children:(0,s.jsx)(f.Z,{showDot:!0,text:P})})})})}),(0,s.jsx)(d,{pinId:x,title:_,user:w})]})}var y=r(17950),m=r(472125),g=r(286810);function b(e){var t=e.story,r=t.objects,i=(0,a.iH)(),o=i.gridItemWidth,l=i.gridGutterWidth,u=((0,m.Z)()||{width:0,height:0}).width,f=8===l?2:4,p=u>550?o:.9*o,v=u/(p+l);return r.length>0&&(0,s.jsxs)(c.kC,{alignItems:"center",direction:"column",gap:6,children:[(0,s.jsx)(c.X6,{align:"center",size:"sm",children:t.title.format}),(0,s.jsx)(c.xu,{overflow:"scrollX",paddingX:f,width:v<r.length?"100vw":void 0,children:(0,s.jsx)(c.kC,{gap:f,children:r.map((function(e){var t=e.creator_class,r=e.creator_class_instance,i=e.dominant_color,a=e.id,l=t.creator,u=r.title,f=(0,g.$)(r);return(0,s.jsx)(c.xu,{width:f?o:p,children:f?(0,s.jsx)(h,{feedItem:e},t.id):(0,s.jsxs)(n.Fragment,{children:[(0,s.jsx)(y.Z,{creatorClass:t,creatorClassInstance:r,dominantColor:i,pinId:a,width:p}),(0,s.jsx)(d,{pinId:a,title:u,user:l})]})},a)}))})})]})}var x=r(210244),w=r(508435);function _(e){var t=e.feedItem,r=(0,p.ZP)(),n=(0,o.Z)(),i=(0,a.iH)(),l=i.gridItemWidth,u=i.referrer,h=i.gridGutterWidth,y=t.creator_class,m=t.creator_class_instance,g=t.id,b=function(){var e;return n({event_type:102,view_type:1,view_parameter:3582,component:200,aux_data:{content_ids:{pin:g},grid_index:0,referrer:u,story_id:null===(e=y.recap_pin)||void 0===e?void 0:e.id,story_type:"featured_creator_class"}})},_=(m.preview_video.video_list||{}).V_HLSV4,j=y.creator,O=m.title,P=l+24,S=w.vw*P;return(0,s.jsxs)(c.kC,{alignContent:"center",alignItems:"center",direction:"column",gap:6,justifyContent:"between",children:[(0,s.jsx)(c.X6,{align:"center",size:"sm",children:r._("Live now","liveSession.heading.liveNow","Heading for Pin that is Live now")}),(0,s.jsxs)(c.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:"#4A4A4A"}},display:"flex",maxWidth:S,padding:3,rounding:7,width:"calc(100vw - ".concat(h,"px)"),children:[(0,s.jsx)(c.iP,{fullWidth:!1,href:"/tv/".concat(g,"/?referrer=").concat(u),onTap:b,role:"link",children:(0,s.jsxs)(c.xu,{position:"relative",children:[(0,s.jsx)(v.Z,{autoplay:!0,format:v.k.HERO,height:236,video:_,width:132,children:(0,s.jsx)(c.xu,{margin:2,position:"absolute",top:!0,children:(0,s.jsx)(f.Z,{showDot:!0,text:"Live"})})}),(0,s.jsx)(c.xu,{bottom:!0,margin:2,position:"absolute",right:!0,children:(0,s.jsx)(x.Z,{size:"sm"})})]})}),(0,s.jsxs)(c.xu,{alignItems:"center",direction:"column",display:"flex",flex:"grow",justifyContent:"center",marginStart:3,children:[(0,s.jsx)(c.iP,{href:"/tv/".concat(g,"/?referrer=").concat(u),onTap:b,role:"link",children:(0,s.jsx)(c.X6,{align:"center",color:"white",size:"md",children:O})}),(0,s.jsx)(d,{color:"white",pinId:g,user:j}),(0,s.jsx)(c.iP,{fullWidth:!1,href:"/tv/".concat(g,"/?referrer=").concat(u),onTap:b,role:"link",children:(0,s.jsx)(c.zx,{color:"red",text:r._("Watch now","liveSession.heading.watchNow","Link to watch a live episode")})})]})]})]})}var j=function(e){var t=e.data,r=e.itemIdx;return(0,s.jsx)(h,{feedItem:t,gridIndex:r},t.creator_class.id)};function O(e){var t=e.feedData,r=e.loadItems,n=(0,p.ZP)(),i=(0,a.iH)(),o=i.gridItemWidth,l=i.gridGutterWidth;return t&&t.length>0?(0,s.jsxs)(c.kC,{direction:"column",gap:w.ak,width:"100%",children:[t.filter((function(e){return"pin"!==e.type})).map((function(e){if("feed_section_title"===e.type)return(0,s.jsx)(c.X6,{align:"center",size:"sm",children:e.title},e.id);switch(e.story_type){case"upcoming_creator_classes":return(0,s.jsx)(b,{story:e},e.id);case"live_creator_class_row":return(0,s.jsx)(_,{feedItem:e.objects[0]},e.id);default:return null}})),(0,s.jsx)(c.Rk,{columnWidth:o,comp:j,gutterWidth:l,items:t.filter((function(e){return"pin"===e.type&&e.creator_class.creator})),loadItems:r,minCols:w.oo,scrollContainer:function(){return window},virtualize:!0})]}):(0,s.jsx)(c.$j,{accessibilityLabel:n._("Loading Live sessions","liveSession.spinner","Accessibility label for spinner that displays while Live sessions feed is loading"),show:!0})}},620220:function(e,t,r){r.d(t,{xs:function(){return d},J1:function(){return p},iH:function(){return v}});var n=r(793550),i=r(762803),o=r(508435);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(s){c=!0,i=s}finally{try{a||null==r.return||r.return()}finally{if(c)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d=function(e){var t=e.pinId,r=l((0,n.useState)({}),2),i=r[0],a=r[1],u=l((0,n.useState)(t),2),d=u[0],f=u[1],p=l((0,n.useState)(0),2),v=p[0];return{activePinId:d,getSubscription:function(e){if(!i)return o.d0.UNKNOWN;switch(i[e]){case!0:return o.d0.TRUE;case!1:return o.d0.FALSE;default:return o.d0.UNKNOWN}},setSubscription:function(e,t){a((function(r){return r&&r[e]!==t?c(c({},r),{},s({},e,t)):r}))},setActivePinId:f,setVolume:p[1],volume:v}},f=(0,i.ZP)("LiveSessionContext"),p=f.Provider,v=f.useHook},210244:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(218265),i=r(620220),o=r(80209);function a(e){var t=e.size,r=void 0===t?"sm":t,a=(0,i.iH)(),c=a.volume,s=a.setVolume;return(0,o.jsx)(n.hU,{accessibilityLabel:"mute",icon:c?"sound":"mute",iconColor:"white",onClick:function(e){var t=e.event;t.preventDefault(),t.stopPropagation(),s(1===c?0:1)},size:r})}},162959:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(311866),i=r(174523),o=r(304966),a=r(34411),c=r(218265),s=r(508435),l=r(620220),u=r(80209);function d(e){var t=e.color,r=void 0===t?"white":t,d=e.componentType,f=e.creatorClassId,p=e.pinId,v=e.size,h=e.viewParameterType,y=e.viewType,m=(0,i.ZP)(),g=(0,o.Z)(),b=(0,a.Z)().isAuth,x=(0,l.iH)(),w=x.getSubscription,_=x.referrer,j=x.setSubscription,O=x.showSignup,P=w(p);if(P===s.d0.UNKNOWN)return null;var S=P?{text:m._("Attending","liveSession.button.attending","Button indicating user is subscribed to reminders; click to unsubscribe")}:{text:m._("Remind me","liveSession.button.remindMe","Button to subscribe to reminders")};return(0,u.jsx)(c.zx,{color:r,onClick:function(e){var t=e.event;if(t.preventDefault(),t.stopPropagation(),g({event_type:102,view_type:y,view_parameter:h,component:d,element:P?12384:12383,aux_data:{content_ids:{pin:p},referrer:_}}),b){var r=n.ZP.create("ApiResource",{url:"/v3/classes/".concat(f,"/subscription/"),data:{id:p}});P?r.callDelete():r.callUpdate(),j(p,!P)}else O&&O()},selected:P,size:v,text:S.text})}},17950:function(e,t,r){r.d(t,{t:function(){return h},Z:function(){return g}});var n=r(793550),i=r(371463),o=r(162959),a=r(174523),c=r(304966),s=r(508435),l=r(946753),u=r(620220),d=r(889041),f=r(218265),p=r(80209),v={grid:2/3,closeup:.8},h={grid:2,closeup:6},y=2,m=8;function g(e){var t=e.creatorClass,r=e.creatorClassInstance,g=e.dominantColor,b=void 0===g?"#767676":g,x=e.pinId,w=e.autoplay,_=void 0!==w&&w,j=e.rounding,O=void 0===j?4:j,P=e.variant,S=void 0===P?"grid":P,I=e.width,L=(0,c.Z)(),A=(0,u.iH)(),E=A.gridItemWidth,C=A.referrer,D=(0,a.ZP)(),Z=t.hero_images,k=t.id,H=r.starts_at,U=r.title,z=Z["624x"],T=(z=void 0===z?{}:z).url,M=(r.preview_video.video_list||{}).V_HLSV4,V="closeup"===S,W=function(){var e,t=(e=new Date(H)-new Date,Math.floor(e/864e5)),r=function(e){var t=new Date(e)-new Date;return Math.floor(t/36e5)}(H),n=function(e){var t=new Date(e)-new Date;return Math.floor(t/36e5)}(H);return t>=1?(0,l.nk)(D.ngettext("Live in {{ numDaysUntilEvent }} day","Live in {{ numDaysUntilEvent }} days",t,"liveSession.badge.daysUntil","Number of days remaining until the event"),{numDaysUntilEvent:t}):r>=1?(0,l.nk)(D.ngettext("Live in {{ numHoursUntilEvent }} hour","Live in {{ numHoursUntilEvent }} hours",r,"liveSession.badge.hoursUntil","Number of hours remaining until the event"),{numHoursUntilEvent:r}):n>1?(0,l.nk)(D.ngettext("Live in {{ numMinutesUntilEvent }} minute","Live in {{ numMinutesUntilEvent }} minutes",n,"liveSession.badge.minutesUntil","Number of minutes remaining until the event"),{numMinutesUntilEvent:n}):D._("Live soon","liveSession.badge.liveSoon","A label indicating event is happening soon.")},R=I||E,N=R*s.Rp,B=v[S]*R,G=(0,p.jsx)(d.Z,{autoplay:_,format:d.k.HEAD,height:B,video:M,width:B}),X=(0,p.jsx)(o.Z,{componentType:200,creatorClassId:k,pinId:x,size:V?"lg":"md",viewParameterType:3582,viewType:1}),F=(0,p.jsxs)(f.xu,{height:N,overflow:"hidden",position:"relative",rounding:O,width:R,children:[(0,p.jsx)(f.xu,{height:"100%",position:"absolute",width:"100%",children:(0,p.jsx)(f.Ee,{alt:U||"",color:b,fit:"cover",naturalHeight:1,naturalWidth:1,src:null!=T?T:"",children:(0,p.jsx)(f.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(0,0,0, .6)"}},height:"100%",position:"absolute",width:"100%"})})}),V?(0,p.jsxs)(n.Fragment,{children:[(0,p.jsx)(f.xu,{padding:h.closeup,position:"absolute",children:(0,p.jsx)(i.Z,{text:W()})}),(0,p.jsxs)(f.xu,{alignItems:"center",direction:"column",display:"flex",height:"100%",justifyContent:"center",position:"absolute",width:"100%",children:[G,(0,p.jsx)(f.xu,{padding:m,children:X})]})]}):(0,p.jsxs)(f.xu,{alignItems:"center",direction:"column",display:"flex",height:"100%",justifyContent:"between",padding:h.grid,position:"absolute",width:"100%",children:[(0,p.jsx)(f.kC,{alignItems:"start",justifyContent:"start",width:"100%",children:(0,p.jsx)(i.Z,{text:W()})}),G,(0,p.jsx)(f.xu,{marginBottom:y,children:X})]})]});return V?F:(0,p.jsx)(f.iP,{href:"/tv/".concat(x,"/?referrer=").concat(C),onTap:function(){var e;return L({event_type:102,view_type:1,view_parameter:3582,component:200,aux_data:{content_ids:{pin:x},referrer:C,story_id:null===(e=t.recap_pin)||void 0===e?void 0:e.id,story_type:"upcoming_creator_classes"}})},role:"link",children:F})}},889041:function(e,t,r){r.d(t,{k:function(){return l},Z:function(){return u}});var n=r(793550),i=r(620220),o=r(218265),a=r(80209);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(s){c=!0,i=s}finally{try{a||null==r.return||r.return()}finally{if(c)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l={GRID:"grid",HERO:"hero",HEAD:"head",CLOSEUP:"closeup"};function u(e){var t=e.autoplay,r=void 0!==t&&t,s=e.children,u=e.controls,d=e.height,f=e.format,p=e.video,v=e.width,h=(0,i.iH)(),y=h.volume,m=h.setVolume,g=h.TvVideo,b=c((0,n.useState)(r),2),x=b[0],w=b[1];if(!p)return null;var _=p.height,j=p.thumbnail,O=p.url,P=p.width,S=_?P/_:1,I=f===l.HEAD?function(e){var t=e.videoHeight,r=e.videoWidth,n=e.headSize,i=n*t/r-n;return-1*Math.floor(i/2)}({videoHeight:_,videoWidth:P,headSize:v}):0;return(0,a.jsx)(o.zd,{height:d,rounding:f===l.HEAD?"circle":f===l.CLOSEUP?0:4,width:v,children:(0,a.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{marginTop:I}},children:f===l.GRID?(0,a.jsx)(o.Ee,{alt:"",color:"",naturalHeight:_,naturalWidth:P,src:j,children:(0,a.jsx)(o.xu,{height:"100%",position:"relative",width:"100%",children:s})}):(0,a.jsx)(g,{autoplay:r,accessibilityMaximizeLabel:"Maximize",accessibilityMinimizeLabel:"Minimize",accessibilityMuteLabel:"Mute",accessibilityPauseLabel:"Pause",accessibilityPlayLabel:"Play",accessibilityUnmuteLabel:"Unmute",aspectRatio:S,captions:"",controls:u,loop:!0,isAutoPlay:r,playing:x,playsInline:!0,poster:j,src:O,volume:y,setPlaying:w,setVolume:m,children:(0,a.jsx)(o.xu,{height:"100%",position:"relative",width:"100%",children:s})})})})}},292630:function(e,t,r){r.d(t,{L:function(){return n}});var n=["pin.id","pin.dominant_color","pin.type","pin.creator_class()","pin.creator_class_instance()","video.video_list[V_720P, V_HLSV4,V_HLSV3_WEB,V_HLSV3_MOBILE]","creatorclass.livestream()","creatorclass.id","creatorclass.type","creatorclass.creator()","creatorclass.hero_images()","creatorclass.recap_pin()","creatorclass.soonest_upcoming_instance()","creatorclass.is_viewing_user_subscribed","creatorclass.subscriber_count","creatorclass.subscribers"].concat(["creatorclassinstance.starts_at","creatorclassinstance.id","creatorclassinstance.live_status","creatorclassinstance.preview_video()","creatorclassinstance.replay_video()","creatorclassinstance.title","creatorclassinstance.pinsub_topic()"])},286810:function(e,t,r){r.d(t,{$:function(){return i},l:function(){return o}});var n=r(508435),i=function(e){return e.live_status===n.Ct.POST_LIVE},o=function(e){return e.live_status===n.Ct.LIVE}},34411:function(e,t,r){r.d(t,{$:function(){return i}});var n=(0,r(762803).ZP)("viewer"),i=n.Provider,o=n.useHook;t.Z=o}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/15134-bafeadb2b9c51071.js.map