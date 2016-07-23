/*jshint node:true*/
var glob = require('glob');
var fs = require('fs');

module.exports = {
  name: 'post-build',

  isDevelopingAddon: function() {
    return true;
  },

  outputReady: function (results) {
    // get all the paths and write to service worker file
    var directory = 'dist';
    var urlsToCache = glob.sync('**', {
      cwd: directory,
      nodir: true,
      ignore: ['robots.txt', '**/test*', 'tests/**', 'sw.js']
    })
    .map(function (file) {
      return '\'/' + file + '\'';
    })
    .concat(['\'/\''])
    .join(', ');

    var replacementString = 'var urlsToCache = [' + urlsToCache + '];';
    console.log('replacementString:', replacementString);
    var serviceWorkerFile = directory + '/sw.js';
    var data = fs.readFileSync(serviceWorkerFile, 'utf-8');
    data = data.replace(/var urlsToCache.*;/, replacementString);
    fs.writeFileSync(serviceWorkerFile, data);
  }
};
