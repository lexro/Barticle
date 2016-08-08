"use strict";define("barticle/app",["exports","ember","barticle/resolver","ember-load-initializers","barticle/config/environment"],function(e,t,n,i,r){var a=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,a=t.default.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:n.default,ready:function(){FastClick.attach(document.body)}}),(0,i.default)(a,r.default.modulePrefix),e.default=a}),define("barticle/components/app-version",["exports","ember-cli-app-version/components/app-version","barticle/config/environment"],function(e,t,n){var i=n.default.APP.name,r=n.default.APP.version;e.default=t.default.extend({version:r,name:i})}),define("barticle/components/illiquid-model",["exports","liquid-fire/components/illiquid-model"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("barticle/components/lf-outlet",["exports","liquid-fire/ember-internals"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.StaticOutlet}})}),define("barticle/components/lf-overlay",["exports","liquid-fire/components/lf-overlay"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("barticle/components/liquid-bind",["exports","liquid-fire/components/liquid-bind"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("barticle/components/liquid-child",["exports","liquid-fire/components/liquid-child"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("barticle/components/liquid-container",["exports","liquid-fire/components/liquid-container"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("barticle/components/liquid-if",["exports","liquid-fire/components/liquid-if"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("barticle/components/liquid-measured",["exports","liquid-fire/components/liquid-measured"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"measure",{enumerable:!0,get:function(){return t.measure}})}),define("barticle/components/liquid-modal",["exports","liquid-fire/components/liquid-modal"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("barticle/components/liquid-outlet",["exports","liquid-fire/components/liquid-outlet"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("barticle/components/liquid-spacer",["exports","liquid-fire/components/liquid-spacer"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("barticle/components/liquid-sync",["exports","liquid-fire/components/liquid-sync"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("barticle/components/liquid-unless",["exports","liquid-fire/components/liquid-unless"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("barticle/components/liquid-versions",["exports","liquid-fire/components/liquid-versions"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("barticle/components/lm-container",["exports","liquid-fire/components/lm-container"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("barticle/components/station-picker/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({classNames:["station-picker"],initFunc:t.default.on("init",function(){var e=this.get("placeholder");this.set("inputText",e)}),shouldShow:!0,hideList:t.default.observer("shouldShow",function(){this.get("shouldShow")||this.set("shouldShowStations",!1)}),doReset:t.default.observer("stations",function(){var e=this.get("placeholder");this.set("inputText",e),this.set("currentPickedStation",{}),this.set("shouldShowStations",!1)}),color:"",inputText:"",placeholder:"",shouldShowStations:!1,stations:[],currentPickedStation:{},actions:{pickStation:function(e){var t=e.name;this.set("currentPickedStation",e),this.set("inputText",t),this.sendAction("stationPicked",e),this.set("shouldShowStations",!1)},toggleShowStations:function(){this.toggleProperty("shouldShowStations"),this.get("shouldShowStations")?this.sendAction("selecting"):this.get("inputText")!==this.get("placeholder")&&this.sendAction("stationPicked",this.get("currentPickedStation"))}}})}),define("barticle/components/station-picker/template",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){var e=function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.2",loc:{source:null,start:{line:8,column:4},end:{line:10,column:4}},moduleName:"barticle/components/station-picker/template.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","station-picker__tile");var i=e.createComment("");e.appendChild(n,i),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var i=e.childAt(t,[1]),r=new Array(2);return r[0]=e.createElementMorph(i),r[1]=e.createMorphAt(i,0,0),r},statements:[["element","action",["pickStation",["get","station",["loc",[null,[9,63],[9,70]]]]],[],["loc",[null,[9,40],[9,72]]]],["content","station.name",["loc",[null,[9,73],[9,89]]]]],locals:["station"],templates:[]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.6.2",loc:{source:null,start:{line:7,column:2},end:{line:11,column:2}},moduleName:"barticle/components/station-picker/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var i=new Array(1);return i[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),i},statements:[["block","each",[["get","stations",["loc",[null,[8,12],[8,20]]]]],[],0,null,["loc",[null,[8,4],[10,13]]]]],locals:[],templates:[e]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.6.2",loc:{source:null,start:{line:1,column:0},end:{line:12,column:0}},moduleName:"barticle/components/station-picker/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","station-picker__input");var i=e.createTextNode("\n    ");e.appendChild(n,i);var i=e.createElement("div");e.appendChild(n,i);var i=e.createTextNode("\n    ");e.appendChild(n,i);var i=e.createComment("");e.appendChild(n,i);var i=e.createTextNode("\n  ");e.appendChild(n,i),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var i=e.childAt(t,[1]),r=e.childAt(i,[1]),a=new Array(5);return a[0]=e.createAttrMorph(i,"aria-label"),a[1]=e.createElementMorph(i),a[2]=e.createAttrMorph(r,"class"),a[3]=e.createMorphAt(i,3,3),a[4]=e.createMorphAt(t,3,3,n),e.insertBoundary(t,null),a},statements:[["attribute","aria-label",["get","placeholder",["loc",[null,[2,50],[2,61]]]]],["element","action",["toggleShowStations"],[],["loc",[null,[2,64],[2,95]]]],["attribute","class",["concat",["station-picker__dot-",["get","color",["loc",[null,[3,38],[3,43]]]]]]],["content","inputText",["loc",[null,[4,4],[4,17]]]],["block","liquid-if",[["get","shouldShowStations",["loc",[null,[7,15],[7,33]]]]],["class","station-list"],0,null,["loc",[null,[7,2],[11,16]]]]],locals:[],templates:[e]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.6.2",loc:{source:null,start:{line:1,column:0},end:{line:13,column:0}},moduleName:"barticle/components/station-picker/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var i=new Array(1);return i[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),i},statements:[["block","liquid-if",[["get","shouldShow",["loc",[null,[1,13],[1,23]]]]],["class","picker"],0,null,["loc",[null,[1,0],[12,14]]]]],locals:[],templates:[e]}}())}),define("barticle/components/time-selector/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({classNames:["time-selector"],isNow:!0,actions:{selectTime:function(e){"now"===e?(this.set("isNow",!0),this.sendAction("timeSelected",Date.now())):"all"===e&&(this.set("isNow",!1),this.sendAction("timeSelected"))}}})}),define("barticle/components/time-selector/template",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.6.2",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"barticle/components/time-selector/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div"),i=e.createTextNode("Now");e.appendChild(n,i),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("div"),i=e.createTextNode("All");e.appendChild(n,i),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var i=e.childAt(t,[0]),r=e.childAt(t,[2]),a=new Array(4);return a[0]=e.createAttrMorph(i,"class"),a[1]=e.createElementMorph(i),a[2]=e.createAttrMorph(r,"class"),a[3]=e.createElementMorph(r),a},statements:[["attribute","class",["concat",["time-selector__time-selection ",["subexpr","if",[["get","isNow",["loc",[null,[1,47],[1,52]]]],"time-selector__selected"],[],["loc",[null,[1,42],[1,80]]]]]]],["element","action",["selectTime","now"],[],["loc",[null,[1,82],[1,111]]]],["attribute","class",["concat",["time-selector__time-selection ",["subexpr","if",[["get","isNow",["loc",[null,[2,47],[2,52]]]],"","time-selector__selected"],[],["loc",[null,[2,42],[2,83]]]]]]],["element","action",["selectTime","all"],[],["loc",[null,[2,85],[2,114]]]]],locals:[],templates:[]}}())}),define("barticle/components/train-list/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({classNames:["train-list"],availableTrains:[]})}),define("barticle/components/train-list/template",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.6.2",loc:{source:null,start:{line:1,column:0},end:{line:14,column:0}},moduleName:"barticle/components/train-list/template.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","train-tile");var i=e.createTextNode("\n    ");e.appendChild(n,i);var i=e.createElement("div");e.setAttribute(i,"class","train-tile__left");var r=e.createTextNode("\n      ");e.appendChild(i,r);var r=e.createElement("div");e.setAttribute(r,"class","train-tile__title");var a=e.createComment("");e.appendChild(r,a),e.appendChild(i,r);var r=e.createTextNode("\n      ");e.appendChild(i,r);var r=e.createElement("div");e.setAttribute(r,"class","train-tile__departure-time");var a=e.createTextNode("\n        Arrives: ");e.appendChild(r,a);var a=e.createComment("");e.appendChild(r,a);var a=e.createTextNode("\n        Departs: ");e.appendChild(r,a);var a=e.createComment("");e.appendChild(r,a);var a=e.createTextNode("\n      ");e.appendChild(r,a),e.appendChild(i,r);var r=e.createTextNode("\n    ");e.appendChild(i,r),e.appendChild(n,i);var i=e.createTextNode("\n    ");e.appendChild(n,i);var i=e.createElement("div");e.setAttribute(i,"class","train-tile__right");var r=e.createTextNode("\n      ");e.appendChild(i,r);var r=e.createComment("");e.appendChild(i,r);var r=e.createTextNode("\n    ");e.appendChild(i,r),e.appendChild(n,i);var i=e.createTextNode("\n  ");e.appendChild(n,i),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var i=e.childAt(t,[1]),r=e.childAt(i,[1]),a=e.childAt(r,[3]),l=new Array(4);return l[0]=e.createMorphAt(e.childAt(r,[1]),0,0),l[1]=e.createMorphAt(a,1,1),l[2]=e.createMorphAt(a,3,3),l[3]=e.createMorphAt(e.childAt(i,[3]),1,1),l},statements:[["content","train.title",["loc",[null,[4,37],[4,52]]]],["content","train.departureTime",["loc",[null,[6,17],[6,40]]]],["content","train.departureTime",["loc",[null,[7,17],[7,40]]]],["content","train.estimatedTime",["loc",[null,[11,6],[11,29]]]]],locals:["train"],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.6.2",loc:{source:null,start:{line:1,column:0},end:{line:15,column:0}},moduleName:"barticle/components/train-list/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var i=new Array(1);return i[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),i},statements:[["block","each",[["get","availableTrains",["loc",[null,[1,8],[1,23]]]]],[],0,null,["loc",[null,[1,0],[14,9]]]]],locals:[],templates:[e]}}())}),define("barticle/helpers/is-after",["exports","ember","barticle/config/environment","ember-moment/helpers/is-after"],function(e,t,n,i){e.default=i.default.extend({globalAllowEmpty:!!t.default.get(n.default,"moment.allowEmpty")})}),define("barticle/helpers/is-before",["exports","ember","barticle/config/environment","ember-moment/helpers/is-before"],function(e,t,n,i){e.default=i.default.extend({globalAllowEmpty:!!t.default.get(n.default,"moment.allowEmpty")})}),define("barticle/helpers/is-between",["exports","ember","barticle/config/environment","ember-moment/helpers/is-between"],function(e,t,n,i){e.default=i.default.extend({globalAllowEmpty:!!t.default.get(n.default,"moment.allowEmpty")})}),define("barticle/helpers/is-same-or-after",["exports","ember","barticle/config/environment","ember-moment/helpers/is-same-or-after"],function(e,t,n,i){e.default=i.default.extend({globalAllowEmpty:!!t.default.get(n.default,"moment.allowEmpty")})}),define("barticle/helpers/is-same-or-before",["exports","ember","barticle/config/environment","ember-moment/helpers/is-same-or-before"],function(e,t,n,i){e.default=i.default.extend({globalAllowEmpty:!!t.default.get(n.default,"moment.allowEmpty")})}),define("barticle/helpers/is-same",["exports","ember","barticle/config/environment","ember-moment/helpers/is-same"],function(e,t,n,i){e.default=i.default.extend({globalAllowEmpty:!!t.default.get(n.default,"moment.allowEmpty")})}),define("barticle/helpers/moment-calendar",["exports","ember","barticle/config/environment","ember-moment/helpers/moment-calendar"],function(e,t,n,i){e.default=i.default.extend({globalAllowEmpty:!!t.default.get(n.default,"moment.allowEmpty")})}),define("barticle/helpers/moment-duration",["exports","ember-moment/helpers/moment-duration"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("barticle/helpers/moment-format",["exports","ember","barticle/config/environment","ember-moment/helpers/moment-format"],function(e,t,n,i){e.default=i.default.extend({globalAllowEmpty:!!t.default.get(n.default,"moment.allowEmpty")})}),define("barticle/helpers/moment-from-now",["exports","ember","barticle/config/environment","ember-moment/helpers/moment-from-now"],function(e,t,n,i){e.default=i.default.extend({globalAllowEmpty:!!t.default.get(n.default,"moment.allowEmpty")})}),define("barticle/helpers/moment-to-now",["exports","ember","barticle/config/environment","ember-moment/helpers/moment-to-now"],function(e,t,n,i){e.default=i.default.extend({globalAllowEmpty:!!t.default.get(n.default,"moment.allowEmpty")})}),define("barticle/helpers/now",["exports","ember-moment/helpers/now"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("barticle/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("barticle/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("barticle/index/controller",["exports","ember","moment"],function(e,t,n){var i="HH:mm a",r=5,a=1440;e.default=t.default.Controller.extend({shouldShowEndStations:!1,shouldShowTrainList:!1,endStations:[],stationSchedulesService:t.default.inject.service("station-schedules"),startStationPicked:{},endStationPicked:{},availableTrains:[],time:Date.now(),_getAllRoutes:function(e){for(var t=this.get("model.routes"),n=[],i=0;i<t.length;i++){var r=t[i],a=r.config.station,l=a.indexOf(e)!==-1;l&&n.push(r)}return n},_getAllStops:function(e,t){for(var n={},i=0;i<e.length;i++)for(var r=e[i],a=r.config.station,l=a.indexOf(t),o=0;o<a.length;o++){var s=a[o],d=s!==t,c=o>l;d&&c&&(n[s]?n[s].routes.push(r):n[s]={routes:[r]})}return n},_getStations:function(e){for(var t=Object.keys(e),n=this.get("model.stations"),i=[],r=0;r<n.length;r++){var a=n[r],l=t.indexOf(a.abbr)!==-1;l&&(a.routes=e[a.abbr].routes,i.push(a))}return i},_getAvailableTrains:function(e,t,l){for(var o={},s={},d=l.routes,c=0;c<d.length;c++){var u=d[c].routeID;s[u]=d[c].name,e[u]&&(o[u]=e[u])}var f=[],m=this.get("time");for(var u in o)for(var p=o[u],c=0;c<p.length;c++){var b=p[c],h=(0,n.default)(b.origTime,i);if(m&&f.length>r)break;if(!m||!(0,n.default)(m).isAfter(h)){var g=t[u]||[],v=g[b.trainIdx-1];if(v){for(var x=this.get("model.routes"),y=0;y<x.length;y++)x[y].routeID===u;var S=(0,n.default)(v.origTime,i),w=(0,n.default)(b.origTime,i),C=S.diff(w);C=n.default.duration(C).asMinutes(),C<0&&(C+=a);var T={title:s[u],departureTime:b.origTime,estimatedTime:C+" min"};f.push(T)}}}return f.sort(function(e,t){var r=(0,n.default)(e.departureTime,i),a=(0,n.default)(t.departureTime,i);return r.diff(a)}),f},actions:{onStartStationPicked:function(e){var n=e.abbr,i=this.get("startStationPicked"),r=i===e;if(r)this.set("shouldShowTrainList",!0);else{this.set("shouldShowTrainList",!1),t.default.Logger.debug("fetching data to calculate end stations");var a=this.get("stationSchedulesService");a.fetchSchedule(n);var l=this._getAllRoutes(n),o=this._getAllStops(l,n),s=this._getStations(o);this.set("startStationPicked",e),this.set("endStations",s)}this.set("shouldShowEndStations",!0)},onEndStationPicked:function(e){t.default.Logger.debug("endStationPicked");var n=this.get("stationSchedulesService"),i=this.get("startStationPicked.abbr"),r=this.get("endStationPicked")===e;r?this.set("shouldShowTrainList",!0):(this.set("shouldShowTrainList",!1),t.default.Logger.debug("fetching data to calculate trains"),t.default.RSVP.all([n.fetchSchedule(i),n.fetchSchedule(e.abbr)]).then(function(t){var n=t[0],i=t[1],r=this._getAvailableTrains(n,i,e);this.set("endStationPicked",e),this.set("availableTrains",r),this.set("shouldShowTrainList",!0)}.bind(this)))},onStartStationSelect:function(){this.set("shouldShowEndStations",!1),this.set("shouldShowTrainList",!1)},onEndStationSelect:function(){this.set("shouldShowTrainList",!1)},onTimeSelected:function(e){this.set("time",e);var n=this.get("startStationPicked"),i=this.get("endStationPicked");if(Object.keys(n).length&&Object.keys(i).length){var r=this.get("stationSchedulesService");t.default.RSVP.all([r.fetchSchedule(n.abbr),r.fetchSchedule(i.abbr)]).then(function(e){var t=e[0],n=e[1],r=this._getAvailableTrains(t,n,i);this.set("availableTrains",r)}.bind(this))}}}})}),define("barticle/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","barticle/config/environment"],function(e,t,n){e.default={name:"App Version",initialize:(0,t.default)(n.default.APP.name,n.default.APP.version)}}),define("barticle/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("barticle/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:t.default.K}}),define("barticle/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e.default={name:"ember-data",initialize:t.default}}),define("barticle/initializers/export-application-global",["exports","ember","barticle/config/environment"],function(e,t,n){function i(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var i,r=n.default.exportApplicationGlobal;i="string"==typeof r?r:t.default.String.classify(n.default.modulePrefix),window[i]||(window[i]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[i]}}))}}e.initialize=i,e.default={name:"export-application-global",initialize:i}}),define("barticle/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:t.default.K}}),define("barticle/initializers/liquid-fire",["exports","liquid-fire/router-dsl-ext","liquid-fire/ember-internals"],function(e,t,n){(0,n.registerKeywords)(),e.default={name:"liquid-fire",initialize:function(){}}}),define("barticle/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:t.default.K}}),define("barticle/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:t.default.K}}),define("barticle/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("barticle/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("barticle/router",["exports","ember","barticle/config/environment"],function(e,t,n){var i=t.default.Router.extend({location:n.default.locationType});i.map(function(){}),e.default=i}),define("barticle/routes/index",["exports","ember","ic-ajax","barticle/utils/xmlToJson"],function(e,t,n,i){e.default=t.default.Route.extend({model:function(){return t.default.RSVP.hash({stations:(0,n.default)("https://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V").then(function(e){var n=(0,i.default)(e),r=n.root.stations.station;return t.default.Logger.log(n),r}),routes:(0,n.default)("https://api.bart.gov/api/route.aspx?cmd=routeinfo&route=all&key=MW9S-E7SL-26DU-VV8V").then(function(e){var n=(0,i.default)(e),r=n.root.routes.route;return t.default.Logger.log(n),r})}).catch(function(e){return t.default.Logger.error(e),{stations:[],routes:[]}})}})}),define("barticle/service-worker/register",["exports"],function(e){"serviceWorker"in navigator?navigator.serviceWorker.register("./sw.js").then(function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}).catch(function(e){console.log("ServiceWorker registration failed: ",e)}):console.log("ServiceWorker not supported")}),define("barticle/service-worker/sw",["exports"],function(e){function t(e){var t="about:blank"===e;return!t}function n(e,t){var n=t.indexOf("https://api.bart.gov")!==-1,i=t.indexOf("livereload")!==-1;return!n&&!i&&!e||200!==e.status||"basic"!==e.type}var i=["/Barticle/assets/barticle.css","/Barticle/assets/barticle.js","/Barticle/assets/vendor.css","/Barticle/assets/vendor.js","/Barticle/crossdomain.xml","/Barticle/images/foggy-golden-gate.jpeg","/Barticle/index.html"],r=["https://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V","https://api.bart.gov/api/route.aspx?cmd=routeinfo&route=all&key=MW9S-E7SL-26DU-VV8V","https://fonts.googleapis.com/css?family=Roboto:400"],a="barticle-cache-v6";this.addEventListener("install",function(e){e.waitUntil(caches.open(a).then(function(e){var t=i.concat(r);return e.addAll(t)}))}),this.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(e){return Promise.all(e.filter(function(e){return e.startsWith("barticle-")&&e!==a}).map(function(e){return caches.delete(e)}))}))}),this.addEventListener("fetch",function(e){var i=e.request.url;t(i)&&e.respondWith(caches.match(e.request).then(function(t){if(t)return t;var r=e.request.clone();return fetch(r).then(function(t){if(!n(t,i))return t;var r=t.clone();return caches.open(a).then(function(t){t.put(e.request,r)}),t})}))})}),define("barticle/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("barticle/services/liquid-fire-modals",["exports","liquid-fire/modals"],function(e,t){e.default=t.default}),define("barticle/services/liquid-fire-transitions",["exports","liquid-fire/transition-map"],function(e,t){e.default=t.default}),define("barticle/services/moment",["exports","ember","barticle/config/environment","ember-moment/services/moment"],function(e,t,n,i){e.default=i.default.extend({defaultFormat:t.default.get(n.default,"moment.outputFormat")})}),define("barticle/services/station-schedules",["exports","ember","ic-ajax","barticle/utils/xmlToJson"],function(e,t,n,i){e.default=t.default.Service.extend({stationSchedules:{},fetchSchedule:function(e){var r=this.get("stationSchedules");return r[e]?t.default.RSVP.resolve(r[e]):(0,n.default)("https://api.bart.gov/api/sched.aspx?cmd=stnsched&orig="+e+"&key=MW9S-E7SL-26DU-VV8V&l=1").then(function(t){for(var n=(0,i.default)(t),a=n.root.station.item,l={},o=0;o<a.length;o++){var s=a[o]["@attributes"],d=s.line;l[d]?l[d].push(s):l[d]=[s]}return r[e]=l,l})}})}),define("barticle/templates/index",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.2",loc:{source:null,start:{line:26,column:2},end:{line:29,column:2}},moduleName:"barticle/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var i=new Array(1);return i[0]=e.createMorphAt(t,1,1,n),i},statements:[["inline","train-list",[],["availableTrains",["subexpr","@mut",[["get","availableTrains",["loc",[null,[28,22],[28,37]]]]],[],[]]],["loc",[null,[27,4],[28,39]]]]],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.6.2",loc:{source:null,start:{line:1,column:0},end:{line:31,column:0}},moduleName:"barticle/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("header");e.setAttribute(n,"class","barticle-header");var i=e.createTextNode("Barticle");e.appendChild(n,i),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","barticle-content");var i=e.createTextNode("\n  ");e.appendChild(n,i);var i=e.createComment("");e.appendChild(n,i);var i=e.createTextNode("\n\n  ");e.appendChild(n,i);var i=e.createElement("div");e.setAttribute(i,"class","barticle-station-form");var r=e.createTextNode("\n    ");e.appendChild(i,r);var r=e.createComment("");e.appendChild(i,r);var r=e.createTextNode("\n\n    ");e.appendChild(i,r);var r=e.createComment("");e.appendChild(i,r);var r=e.createTextNode("\n  ");e.appendChild(i,r),e.appendChild(n,i);var i=e.createTextNode("\n\n");e.appendChild(n,i);var i=e.createComment("");e.appendChild(n,i),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var i=e.childAt(t,[2]),r=e.childAt(i,[3]),a=new Array(4);return a[0]=e.createMorphAt(i,1,1),a[1]=e.createMorphAt(r,1,1),a[2]=e.createMorphAt(r,3,3),a[3]=e.createMorphAt(i,5,5),a},statements:[["inline","time-selector",[],["class","barticle-time-selector","timeSelected","onTimeSelected","isNow","true"],["loc",[null,[4,2],[7,18]]]],["inline","station-picker",[],["placeholder","Choose starting station","stations",["subexpr","@mut",[["get","model.stations",["loc",[null,[12,15],[12,29]]]]],[],[]],"stationPicked","onStartStationPicked","color","primary","selecting","onStartStationSelect"],["loc",[null,[10,4],[15,40]]]],["inline","station-picker",[],["placeholder","Choose ending station","stations",["subexpr","@mut",[["get","endStations",["loc",[null,[19,15],[19,26]]]]],[],[]],"stationPicked","onEndStationPicked","color","secondary","selecting","onEndStationSelect","shouldShow",["subexpr","@mut",[["get","shouldShowEndStations",["loc",[null,[23,17],[23,38]]]]],[],[]]],["loc",[null,[17,4],[23,40]]]],["block","liquid-if",[["get","shouldShowTrainList",["loc",[null,[26,15],[26,34]]]]],["class","result-list"],0,null,["loc",[null,[26,2],[29,16]]]]],locals:[],templates:[e]}}())}),define("barticle/transitions",["exports"],function(e){e.default=function(){this.transition(this.hasClass("station-list"),this.toValue(!0),this.use("toDown",{easing:[250,30]}),this.reverse("toUp")),this.transition(this.hasClass("picker"),this.toValue(!0),this.use("fade",{duration:500})),this.transition(this.hasClass("result-list"),this.toValue(!0),this.use("fade",{duration:500}))}}),define("barticle/transitions/cross-fade",["exports","liquid-fire/transitions/cross-fade"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("barticle/transitions/default",["exports","liquid-fire/transitions/default"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("barticle/transitions/explode",["exports","liquid-fire/transitions/explode"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("barticle/transitions/fade",["exports","liquid-fire/transitions/fade"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("barticle/transitions/flex-grow",["exports","liquid-fire/transitions/flex-grow"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("barticle/transitions/fly-to",["exports","liquid-fire/transitions/fly-to"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("barticle/transitions/move-over",["exports","liquid-fire/transitions/move-over"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("barticle/transitions/scale",["exports","liquid-fire/transitions/scale"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("barticle/transitions/scroll-then",["exports","liquid-fire/transitions/scroll-then"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("barticle/transitions/to-down",["exports","liquid-fire/transitions/to-down"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("barticle/transitions/to-left",["exports","liquid-fire/transitions/to-left"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){
return t.default}})}),define("barticle/transitions/to-right",["exports","liquid-fire/transitions/to-right"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("barticle/transitions/to-up",["exports","liquid-fire/transitions/to-up"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("barticle/transitions/wait",["exports","liquid-fire/transitions/wait"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("barticle/utils/xmlToJson",["exports"],function(e){function t(e){var n={};if(1===e.nodeType){if(e.attributes.length>0){n["@attributes"]={};for(var i=0;i<e.attributes.length;i++){var r=e.attributes.item(i);n["@attributes"][r.nodeName]=r.nodeValue}}}else 3===e.nodeType&&(n=e.nodeValue);if(e.hasChildNodes())for(var a=0;a<e.childNodes.length;a++){var l=e.childNodes.item(a),o=l.nodeName;if(3===l.nodeType)n=t(l);else if("undefined"==typeof n[o])n[o]=t(l);else{if("undefined"==typeof n[o].push){var s=n[o];n[o]=[],n[o].push(s)}n[o].push(t(l))}}return n}e.default=t}),define("barticle/config/environment",["ember"],function(e){var t="barticle";try{var n=t+"/config/environment",i=e.default.$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(i));return{default:r}}catch(e){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("barticle/app").default.create({name:"barticle",version:"0.0.0+163b1cc1"});