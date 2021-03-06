# Barticle
An offline first bart web app that displays train schedules.

The point of this is to experiment with service workers. That being said, it's best to use Barticle in [service worker supported browsers](http://caniuse.com/#search=service%20workers).

![Video Walkthrough](barticle-walkthrough.gif)

## What gets cached by Service Workers?
* pre-cached
  * All app assets (i.e. js, css, images, fonts)
  * The data to calculate stations and their end points
* cached by using the app
  * train results as they are requested (because it's >200MB to pre-cache)

## Limitations
* Only gives train stops where a direct route exists (no transfers).
* Only shows the weekday schedule
* Using the app in offline mode will only give train results if you already searched for those trains in online mode
* Useable in modern browsers only

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running

#### Development

* `ember server` (Development mode)
* Visit your app at [http://localhost:4200/Barticle/](http://localhost:4200/Barticle/).

#### Production
* `ember server -prod` (Production mode)
*  [http://localhost:4200/Barticle/](http://localhost:4200/Barticle/)
*  You can also just visit [https://lexlacson.github.io/Barticle/](https://lexlacson.github.io/Barticle/)

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

* `gulp deploy`

## Further Reading / Useful Links / References

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* [HTML5 rocks tutorial on service workers](http://www.html5rocks.com/en/tutorials/service-worker/introduction/)
* [Udacity course on service workers](https://www.udacity.com/course/offline-web-applications--ud899)
* [Animations in Ember](https://github.com/ember-animation/liquid-fire)
* [Unsplash for free high-res images](https://unsplash.com/)
* [BART API Documentation](http://api.bart.gov/docs/overview/index.aspx)

