/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var MergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');
var argv = require('yargs').argv;

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    inlineContent: {
      'service-worker' : 'app/service-worker/register.js',
    },
    minifyJS: {
      enabled: !argv.disableMin
    },
    fingerprint: {
      enabled: false
      //TODO: figure out why develeopment sw.js is being served
      // instead of dist/sw.js
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('bower_components/normalize-css/normalize.css');
  app.import('bower_components/fastclick/lib/fastclick.js');

  var appTree = app.toTree();
  var serviceWorkerTree = new Funnel('app/service-worker', {
    srcDir: '/',
    include: ['sw.js']
  });

  return new MergeTrees([appTree, serviceWorkerTree]);
};
