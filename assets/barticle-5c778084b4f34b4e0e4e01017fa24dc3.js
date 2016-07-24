"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('barticle/app', ['exports', 'ember', 'barticle/resolver', 'ember-load-initializers', 'barticle/config/environment'], function (exports, _ember, _barticleResolver, _emberLoadInitializers, _barticleConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _barticleConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _barticleConfigEnvironment['default'].podModulePrefix,
    Resolver: _barticleResolver['default'],
    ready: function ready() {
      FastClick.attach(document.body);
    }
  });

  (0, _emberLoadInitializers['default'])(App, _barticleConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('barticle/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'barticle/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _barticleConfigEnvironment) {

  var name = _barticleConfigEnvironment['default'].APP.name;
  var version = _barticleConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('barticle/components/station-picker/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['station-picker'],

    initFunc: _ember['default'].on('init', function () {
      var placeholder = this.get('placeholder');
      this.set('inputText', placeholder);
    }),

    /**
     * Text for the main input
     * @type {String}
     */
    inputText: '',

    /**
     * What to show in the main input if nothing is there
     * @type {String}
     */
    placeholder: '',

    /**
     * Will show the list of stations if true
     * @type {Boolean}
     */
    shouldShowStations: false,

    /**
     * The stations to show in the list
     * @type {Array}
     */
    stations: [],

    actions: {
      pickStation: function pickStation(station) {
        var stationName = station.name;
        var currentStation = this.get('inputText');

        // should not cause an update if we picked the same station
        if (stationName !== currentStation) {
          this.set('inputText', stationName);
          this.sendAction('stationPicked', station);
        }

        this.set('shouldShowStations', false);
      },

      toggleShowStations: function toggleShowStations() {
        this.toggleProperty('shouldShowStations');
      }
    }
  });
});
define("barticle/components/station-picker/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.2",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 2
              },
              "end": {
                "line": 6,
                "column": 2
              }
            },
            "moduleName": "barticle/components/station-picker/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "station-picker__tile");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createElementMorph(element0);
            morphs[1] = dom.createMorphAt(element0, 0, 0);
            return morphs;
          },
          statements: [["element", "action", ["pickStation", ["get", "station", ["loc", [null, [5, 61], [5, 68]]]]], [], ["loc", [null, [5, 38], [5, 70]]]], ["content", "station.name", ["loc", [null, [5, 71], [5, 87]]]]],
          locals: ["station"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 0
            }
          },
          "moduleName": "barticle/components/station-picker/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "stations", ["loc", [null, [4, 10], [4, 18]]]]], [], 0, null, ["loc", [null, [4, 2], [6, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "barticle/components/station-picker/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "station-picker__input");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element1, 'aria-label');
        morphs[1] = dom.createElementMorph(element1);
        morphs[2] = dom.createMorphAt(element1, 0, 0);
        morphs[3] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["attribute", "aria-label", ["get", "placeholder", ["loc", [null, [1, 48], [1, 59]]]]], ["element", "action", ["toggleShowStations"], [], ["loc", [null, [1, 62], [1, 93]]]], ["content", "inputText", ["loc", [null, [1, 94], [1, 107]]]], ["block", "if", [["get", "shouldShowStations", ["loc", [null, [3, 6], [3, 24]]]]], [], 0, null, ["loc", [null, [3, 0], [7, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('barticle/components/train-list/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['train-list'],

    availableTrains: []
  });
});
define("barticle/components/train-list/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 11,
              "column": 0
            }
          },
          "moduleName": "barticle/components/train-list/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "train-tile");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "train-tile__left");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "train-tile__title");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "train-title__departure-time");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "train-tile__right");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
          return morphs;
        },
        statements: [["content", "train.title", ["loc", [null, [4, 37], [4, 52]]]], ["content", "train.departureTime", ["loc", [null, [5, 47], [5, 70]]]], ["content", "train.estimatedTime", ["loc", [null, [8, 6], [8, 29]]]]],
        locals: ["train"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "barticle/components/train-list/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "each", [["get", "availableTrains", ["loc", [null, [1, 8], [1, 23]]]]], [], 0, null, ["loc", [null, [1, 0], [11, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('barticle/helpers/is-after', ['exports', 'ember', 'barticle/config/environment', 'ember-moment/helpers/is-after'], function (exports, _ember, _barticleConfigEnvironment, _emberMomentHelpersIsAfter) {
  exports['default'] = _emberMomentHelpersIsAfter['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_barticleConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('barticle/helpers/is-before', ['exports', 'ember', 'barticle/config/environment', 'ember-moment/helpers/is-before'], function (exports, _ember, _barticleConfigEnvironment, _emberMomentHelpersIsBefore) {
  exports['default'] = _emberMomentHelpersIsBefore['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_barticleConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('barticle/helpers/is-between', ['exports', 'ember', 'barticle/config/environment', 'ember-moment/helpers/is-between'], function (exports, _ember, _barticleConfigEnvironment, _emberMomentHelpersIsBetween) {
  exports['default'] = _emberMomentHelpersIsBetween['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_barticleConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('barticle/helpers/is-same-or-after', ['exports', 'ember', 'barticle/config/environment', 'ember-moment/helpers/is-same-or-after'], function (exports, _ember, _barticleConfigEnvironment, _emberMomentHelpersIsSameOrAfter) {
  exports['default'] = _emberMomentHelpersIsSameOrAfter['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_barticleConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('barticle/helpers/is-same-or-before', ['exports', 'ember', 'barticle/config/environment', 'ember-moment/helpers/is-same-or-before'], function (exports, _ember, _barticleConfigEnvironment, _emberMomentHelpersIsSameOrBefore) {
  exports['default'] = _emberMomentHelpersIsSameOrBefore['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_barticleConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('barticle/helpers/is-same', ['exports', 'ember', 'barticle/config/environment', 'ember-moment/helpers/is-same'], function (exports, _ember, _barticleConfigEnvironment, _emberMomentHelpersIsSame) {
  exports['default'] = _emberMomentHelpersIsSame['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_barticleConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('barticle/helpers/moment-calendar', ['exports', 'ember', 'barticle/config/environment', 'ember-moment/helpers/moment-calendar'], function (exports, _ember, _barticleConfigEnvironment, _emberMomentHelpersMomentCalendar) {
  exports['default'] = _emberMomentHelpersMomentCalendar['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_barticleConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('barticle/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _emberMomentHelpersMomentDuration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentDuration['default'];
    }
  });
});
define('barticle/helpers/moment-format', ['exports', 'ember', 'barticle/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _ember, _barticleConfigEnvironment, _emberMomentHelpersMomentFormat) {
  exports['default'] = _emberMomentHelpersMomentFormat['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_barticleConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('barticle/helpers/moment-from-now', ['exports', 'ember', 'barticle/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _ember, _barticleConfigEnvironment, _emberMomentHelpersMomentFromNow) {
  exports['default'] = _emberMomentHelpersMomentFromNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_barticleConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('barticle/helpers/moment-to-now', ['exports', 'ember', 'barticle/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _ember, _barticleConfigEnvironment, _emberMomentHelpersMomentToNow) {
  exports['default'] = _emberMomentHelpersMomentToNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_barticleConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('barticle/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _emberMomentHelpersNow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersNow['default'];
    }
  });
});
define('barticle/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('barticle/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('barticle/index/controller', ['exports', 'ember', 'moment'], function (exports, _ember, _moment) {

  var MOMENT_TIME_FORMAT = 'HH:mm a';

  exports['default'] = _ember['default'].Controller.extend({

    /**
     * Flag to decide if we should show the destination stations
     * @type {Boolean}
     */
    shouldShowEndStations: false,

    /**
     * Flag to decide if we should show the train list
     * @type {Boolean}
     */
    shouldShowTrainList: false,

    endStations: [],

    stationSchedulesService: _ember['default'].inject.service('station-schedules'),

    startStationPicked: '',

    availableTrains: [],

    /**
     * Helper to get all routes that a station is a part of
     *
     * @private
     * @param  {String} stationAbbr abbreviation of the station to find the routes
     * @return {Array<Object>}             Array of route objects from the bart api
     */
    _getAllRoutes: function _getAllRoutes(stationAbbr) {
      var routes = this.get('model.routes');
      var startStationRoutes = [];

      for (var i = 0; i < routes.length; i++) {
        var route = routes[i];
        var stationAbbrs = route.config.station;
        var doesStationHaveRoute = stationAbbrs.indexOf(stationAbbr) !== -1;

        if (doesStationHaveRoute) {
          startStationRoutes.push(route);
        }
      }

      return startStationRoutes;
    },

    /**
     * Helper to get all unique stops that a start station can travel
     *
     * @private
     * @param  {Array} routes           Array of bart API routes
     * @param  {String} startStationAbbr Abbreviation of the start station
     * @return {Object}                  Mapping from station abbr to routes they exist in
     */
    _getAllStops: function _getAllStops(routes, startStationAbbr) {
      var endStationData = {};

      for (var i = 0; i < routes.length; i++) {
        var route = routes[i];
        var stationAbbrs = route.config.station;
        var startStationIndex = stationAbbrs.indexOf(startStationAbbr);

        for (var j = 0; j < stationAbbrs.length; j++) {
          var stationAbbr = stationAbbrs[j];
          var isNotStartStation = stationAbbr !== startStationAbbr;
          var isAfterStartStation = j > startStationIndex;

          if (isNotStartStation && isAfterStartStation) {
            if (endStationData[stationAbbr]) {
              endStationData[stationAbbr].routes.push(route);
            } else {
              endStationData[stationAbbr] = {
                routes: [route]
              };
            }
          }
        }
      }

      return endStationData;
    },

    /**
     * Helper to get bart API station data from a list of station abbr
     *
     * @private
     * @param  {Object} stationData
     * @return {Array<Object>}
     */
    _getStations: function _getStations(stationData) {
      var endStationsAbbr = Object.keys(stationData);
      var stations = this.get('model.stations');
      var endStations = [];

      for (var i = 0; i < stations.length; i++) {
        var station = stations[i];
        var isEndStation = endStationsAbbr.indexOf(station.abbr) !== -1;

        if (isEndStation) {
          station.routes = stationData[station.abbr].routes;
          endStations.push(station);
        }
      }

      return endStations;
    },

    _getAvailableTrains: function _getAvailableTrains(startStationSchedule, endStationSchedule, endStation) {
      // get all trains for each route that goes to the end station
      var trainSchedules = {};
      var routeNames = {};
      var routes = endStation.routes;
      for (var i = 0; i < routes.length; i++) {
        var routeId = routes[i].routeID;
        routeNames[routeId] = routes[i].name;
        trainSchedules[routeId] = startStationSchedule[routeId];
      }

      // format the train data
      var availableTrains = [];
      for (var routeId in trainSchedules) {
        var trains = trainSchedules[routeId];
        for (var i = 0; i < trains.length; i++) {
          var train = trains[i];
          var endTrainSchedule = endStationSchedule[routeId];
          var endTrainStop = endTrainSchedule[train.trainIdx - 1];

          // not all trains can go to the end destination
          if (endTrainStop) {
            var _routes = this.get('model.routes');
            for (var routeIndex = 0; routeIndex < _routes.length; routeIndex++) {
              if (_routes[routeIndex].routeID === routeId) {}
            }

            // hack because end station times may result in a negative number if ending the next day at 12 am or greater
            // TODO: fix for trains after 12am
            var moment1 = endTrainStop.origTime === '12:00 AM' ? (0, _moment['default'])('11:59 PM', MOMENT_TIME_FORMAT) : (0, _moment['default'])(endTrainStop.origTime, MOMENT_TIME_FORMAT);
            var moment2 = (0, _moment['default'])(train.origTime, MOMENT_TIME_FORMAT);
            var estimatedTime = moment1.diff(moment2);

            var formattedTrain = {
              title: routeNames[routeId],
              departureTime: train.origTime,
              estimatedTime: _moment['default'].duration(estimatedTime).asMinutes() + ' min'
            };

            availableTrains.push(formattedTrain);
          }
        }
      }

      availableTrains.sort(function (train1, train2) {
        var time1 = (0, _moment['default'])(train1.departureTime, MOMENT_TIME_FORMAT);
        var time2 = (0, _moment['default'])(train2.departureTime, MOMENT_TIME_FORMAT);

        return time1.diff(time2);
      });

      return availableTrains;
    },

    actions: {
      onStartStationPicked: function onStartStationPicked(startStation) {
        var startStationAbbr = startStation.abbr;

        // Get the start station schedule in parallel
        var stationSchedulesService = this.get('stationSchedulesService');
        stationSchedulesService.fetchSchedule(startStationAbbr);

        // figure out what end stations to show
        var startStationRoutes = this._getAllRoutes(startStationAbbr);
        var endStationData = this._getAllStops(startStationRoutes, startStationAbbr);
        var endStations = this._getStations(endStationData);

        this.set('startStationPicked', startStation);
        this.set('endStations', endStations);
        this.set('shouldShowEndStations', true);
      },

      onEndStationPicked: function onEndStationPicked(endStation) {
        _ember['default'].Logger.log('endStationPicked');
        var stationSchedulesService = this.get('stationSchedulesService');
        var startStationAbbr = this.get('startStationPicked.abbr');

        _ember['default'].RSVP.all([stationSchedulesService.fetchSchedule(startStationAbbr), stationSchedulesService.fetchSchedule(endStation.abbr)]).then((function (results) {
          var startStationSchedule = results[0];
          var endStationSchedule = results[1];
          var availableTrains = this._getAvailableTrains(startStationSchedule, endStationSchedule, endStation);

          this.set('availableTrains', availableTrains);
          this.set('shouldShowTrainList', true);
        }).bind(this));
      }
    }
  });
});
define('barticle/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'barticle/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _barticleConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_barticleConfigEnvironment['default'].APP.name, _barticleConfigEnvironment['default'].APP.version)
  };
});
define('barticle/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('barticle/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('barticle/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('barticle/initializers/export-application-global', ['exports', 'ember', 'barticle/config/environment'], function (exports, _ember, _barticleConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_barticleConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _barticleConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_barticleConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('barticle/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('barticle/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('barticle/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("barticle/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('barticle/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('barticle/router', ['exports', 'ember', 'barticle/config/environment'], function (exports, _ember, _barticleConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _barticleConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('barticle/routes/index', ['exports', 'ember', 'ic-ajax', 'barticle/utils/xmlToJson'], function (exports, _ember, _icAjax, _barticleUtilsXmlToJson) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return _ember['default'].RSVP.hash({
        stations: (0, _icAjax['default'])('https://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V').then(function (response) {
          var json = (0, _barticleUtilsXmlToJson['default'])(response);
          var stations = json.root.stations.station;

          _ember['default'].Logger.log(json);

          return stations;
        }),

        routes: (0, _icAjax['default'])('https://api.bart.gov/api/route.aspx?cmd=routeinfo&route=all&key=MW9S-E7SL-26DU-VV8V').then(function (response) {
          var json = (0, _barticleUtilsXmlToJson['default'])(response);
          var routes = json.root.routes.route;

          _ember['default'].Logger.log(json);

          return routes;
        })
      })['catch'](function (error) {
        _ember['default'].Logger.error(error);

        return {
          stations: [],
          routes: []
        };
      });
    }
  });
});
define('barticle/service-worker/register', ['exports'], function (exports) {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);

      // navigator.serviceWorker.addEventListener('controllerchange', function() {
      //   console.log('new service worker reloading');
      //   window.location.reload();
      // });
    })['catch'](function (err) {
      // registration failed
      console.log('ServiceWorker registration failed: ', err);
    });
  } else {
    console.log('ServiceWorker not supported');
  }
});
define('barticle/service-worker/sw', ['exports'], function (exports) {
  /* global caches */

  // urlsToCache will be modified by a post build script
  var urlsToCache = ['/assets/barticle-0bc42cf76cc754eb84ad8f7149403272.css', '/assets/barticle-0bc42cf76cc754eb84ad8f7149403272.css.map', '/assets/barticle-5c778084b4f34b4e0e4e01017fa24dc3.js', '/assets/barticle.map', '/assets/failed.png', '/assets/passed.png', '/assets/vendor-fdf65018cf42c9b78fabee913b19426d.css', '/assets/vendor-5a4b16c03779cfeddfe2d998b43682a8.js', '/assets/vendor.map', '/crossdomain.xml', '/index.html', '/', 'https://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V', 'https://api.bart.gov/api/route.aspx?cmd=routeinfo&route=all&key=MW9S-E7SL-26DU-VV8V', 'https://fonts.googleapis.com/css?family=Roboto:400'];
  var CACHE_NAME = 'barticle-cache-v2';

  this.addEventListener('install', function (event) {
    event.waitUntil(caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    }));
  });

  this.addEventListener('activate', function (event) {
    console.log('activate');
    event.waitUntil(caches.keys().then(function (cacheNames) {
      return Promise.all(cacheNames.filter(function (cacheName) {
        return cacheName.startsWith('barticle-') && cacheName !== CACHE_NAME;
      }).map(function (cacheName) {
        console.log('delete:', cacheName);
        return caches['delete'](cacheName);
      }));
    }));
  });

  this.addEventListener('fetch', function (event) {
    console.log('fetch:', event.request.url);
    event.respondWith(caches.match(event.request).then(function (response) {
      if (response) {
        console.log('hit');
        return response;
      }

      return fetch(event.request).then(function (response) {
        if (!_shouldCache) {
          console.log('should not cache');
          return response;
        }
        console.log('open cache to cache');
        caches.open(CACHE_NAME).then(function (cache) {
          console.log('cache response:', event.request.url);
          cache.put(event.request, response.clone());
        });

        return response;
      });
    }));
  });

  function _shouldCache(response, url) {
    var isBart = url.indexOf('https://api.bart.gov') !== -1;
    var isLiveReload = url.indexOf('livereload') !== -1;
    return !isBart && !isLiveReload && !response || response.status !== 200 || response.type !== 'basic';
  }
});
define('barticle/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('barticle/services/moment', ['exports', 'ember', 'barticle/config/environment', 'ember-moment/services/moment'], function (exports, _ember, _barticleConfigEnvironment, _emberMomentServicesMoment) {
  exports['default'] = _emberMomentServicesMoment['default'].extend({
    defaultFormat: _ember['default'].get(_barticleConfigEnvironment['default'], 'moment.outputFormat')
  });
});
define('barticle/services/station-schedules', ['exports', 'ember', 'ic-ajax', 'barticle/utils/xmlToJson'], function (exports, _ember, _icAjax, _barticleUtilsXmlToJson) {
  exports['default'] = _ember['default'].Service.extend({
    stationSchedules: {},

    fetchSchedule: function fetchSchedule(stationAbbr) {
      var stationSchedules = this.get('stationSchedules');

      if (stationSchedules[stationAbbr]) {
        return _ember['default'].RSVP.resolve(stationSchedules[stationAbbr]);
      }

      return (0, _icAjax['default'])('https://api.bart.gov/api/sched.aspx?cmd=stnsched&orig=' + stationAbbr + '&key=MW9S-E7SL-26DU-VV8V&l=1').then(function (response) {
        // model the station schedule per route
        var json = (0, _barticleUtilsXmlToJson['default'])(response);
        var trains = json.root.station.item;
        var stationTrainSchedule = {};

        for (var i = 0; i < trains.length; i++) {
          var train = trains[i]['@attributes'];
          var line = train.line;

          if (!stationTrainSchedule[line]) {
            stationTrainSchedule[line] = [train];
          } else {
            stationTrainSchedule[line].push(train);
          }
        }

        stationSchedules[stationAbbr] = stationTrainSchedule;

        return stationTrainSchedule;
      });
    }
  });
});
define("barticle/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 11,
              "column": 0
            }
          },
          "moduleName": "barticle/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "station-picker", [], ["placeholder", "Choose ending station", "stations", ["subexpr", "@mut", [["get", "endStations", ["loc", [null, [9, 13], [9, 24]]]]], [], []], "stationPicked", "onEndStationPicked"], ["loc", [null, [7, 2], [10, 40]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.2",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 0
            },
            "end": {
              "line": 16,
              "column": 0
            }
          },
          "moduleName": "barticle/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "train-list", [], ["availableTrains", ["subexpr", "@mut", [["get", "availableTrains", ["loc", [null, [15, 20], [15, 35]]]]], [], []]], ["loc", [null, [14, 2], [15, 37]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "barticle/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "station-picker", [], ["placeholder", "Choose starting station", "stations", ["subexpr", "@mut", [["get", "model.stations", ["loc", [null, [3, 11], [3, 25]]]]], [], []], "stationPicked", "onStartStationPicked"], ["loc", [null, [1, 0], [4, 40]]]], ["block", "if", [["get", "shouldShowEndStations", ["loc", [null, [6, 6], [6, 27]]]]], [], 0, null, ["loc", [null, [6, 0], [11, 7]]]], ["block", "if", [["get", "shouldShowTrainList", ["loc", [null, [13, 6], [13, 25]]]]], [], 1, null, ["loc", [null, [13, 0], [16, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("barticle/utils/xmlToJson", ["exports"], function (exports) {
  /*
   * adapted from https://davidwalsh.name/convert-xml-json
   */
  // Changes XML to JSON
  function xmlToJson(xml) {

    // Create the return object
    var obj = {};

    if (xml.nodeType === 1) {
      // element
      // do attributes
      if (xml.attributes.length > 0) {
        obj["@attributes"] = {};
        for (var j = 0; j < xml.attributes.length; j++) {
          var attribute = xml.attributes.item(j);
          obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType === 3) {
      // text
      obj = xml.nodeValue;
    }

    // do children
    if (xml.hasChildNodes()) {
      for (var i = 0; i < xml.childNodes.length; i++) {
        var item = xml.childNodes.item(i);
        var nodeName = item.nodeName;

        if (item.nodeType === 3) {
          //text
          obj = xmlToJson(item);
        } else if (typeof obj[nodeName] === "undefined") {
          obj[nodeName] = xmlToJson(item);
        } else {
          if (typeof obj[nodeName].push === "undefined") {
            var old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(xmlToJson(item));
        }
      }
    }
    return obj;
  }

  exports["default"] = xmlToJson;
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('barticle/config/environment', ['ember'], function(Ember) {
  var prefix = 'barticle';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("barticle/app")["default"].create({"name":"barticle","version":"0.0.0+fe831180"});
}

/* jshint ignore:end */
