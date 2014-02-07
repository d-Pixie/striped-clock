# Striped Clock

This is a simple HTML5 app that shows the current date and time in an unusual fashion.

To see it in action head over to the Github page at http://d-pixie.github.io/striped-clock/

## Quick start

You can of course use this as a normal web page, it's rather pretty, but it's meant to be used as a screensaver. To do that you need some additional software.

### OS X

For OS X there is this nifty little screensaver called WebSaver that simply takes a URL and uses that page as your screensaver by putting it in a full screen chromium window.

Head over to https://websaver.googlecode.com/files/websaver-2.5.dmg and grab a copy. Install it and point it at the github pages url above or clone the proejct and run it locally with Pow (http://pow.cx/), just symlink the directory where you cloned the repo to ~/.pow/clock and go to http://clock.dev/ in your browser to run a local copy.

### Windows

There is a simmilar screensaver for windows called web-page-screensaver that you can downlaod at https://web-page-screensaver.googlecode.com/files/Web-Page-Screensaver.scr and place in your `system32` directory. It's XP only though and seeing since that is dying out there is another option.

E-motional has a shareware program called Auto web view that you can get at http://www.e-motional.com/autowebview.htm ... It works for XP and Windows 7 at least, but I'm not sure what restrictions is placed on the unregistered version (and registering it is $20 so that won't happen :)).

Any tips on a good alternative here is appreciated.

## Features

### Current

Shows time and date in an interesting manner.
Pauses updates when tab or window is hidden (not really relevant for screensaver use).

### Comming

Manifest for offline use without the need of a local server.
Better visuals.

## Inspiration

This screensaver is based on a old Windows screensaver I had. I can not remember the name of that one, but the whole idea with the strips comes from there.

If you know which one I'm talking about please leave a note in some way so I can credit the original author :)

## Props

This little toy project was built during a coffee break, a buss ride and two episodes of Grey's anatomy. That would probably not have been possible without these projects and the work that other people did so I didn't have to:

  * Moment.js - Premiere time and date library. http://momentjs.com/
  * jQuery - You all know what it does ... http://jquery.com/
  * h5bp - HTML5 Boilerplate. https://github.com/h5bp/html5-boilerplate
  * Underscore.js - Excellent utilities library. http://underscorejs.com/
  * Google fonts - Your one stop shop for web fonts. http://www.google.com/fonts/