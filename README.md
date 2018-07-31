Unit Converter
=
Project for WarsawJS Workshop 22 Group 1
-
[![Build Status](https://travis-ci.org/rsp/warsawjs-workshop-22-unit-converter.svg?branch=master)](https://travis-ci.org/rsp/warsawjs-workshop-22-unit-converter)
[![CircleCI](https://circleci.com/gh/rsp/warsawjs-workshop-22-unit-converter.svg?style=svg)](https://circleci.com/gh/rsp/warsawjs-workshop-22-unit-converter)

Special Thanks
-
Special thanks to
[Ela Mościcka](https://github.com/ElaMoscicka)
for greatly improving the frontend appearance!
([PR #1](https://github.com/rsp/warsawjs-workshop-22-unit-converter/pull/1))

Getting Started
-
1. Fork the project on GitHub:

![Click the Fork button](fork.png)

2. Clone your fork:

```sh
git clone git@github.com:YOUR_USERNAME/warsawjs-workshop-22-unit-converter.git
```

3. Enter the project:

```sh
cd warsawjs-workshop-22-unit-converter
```

4. Install dependencies:

```sh
npm i
```

5. Go to the workshop

6. Have fun!

---

Author
-
Rafał Pocztarski - https://github.com/rsp

---

License
-
MIT License (Expat). See [LICENSE.md](LICENSE.md) for details.

---

Editors
=
https://github.com/rsp/info/blob/master/text-editors.md

Classic
-
### Vim
http://www.vim.org/

### Emacs
https://www.gnu.org/software/emacs/

Modern
-
### Sublime Text
https://www.sublimetext.com/

### Atom
https://atom.io/

### Brackets
http://brackets.io/

### Visual Studio Code
https://code.visualstudio.com/

---

Style guides
=

Airbnb JavaScript Style Guide
-
https://github.com/airbnb/javascript#readme

JavaScript Standard Style
-
https://standardjs.com/

JavaScript Semi-Standard Style
-
https://github.com/Flet/semistandard#readme

Idiomatic JavaScript
-
https://github.com/rwaldron/idiomatic.js#readme

Google JavaScript Style Guide
-
https://google.github.io/styleguide/jsguide.html

---

Linters
=

ESLint
-
(12M/month)

https://eslint.org/

JSHint
-
(2M/month)

http://jshint.com/

JSLint
-
(100k/month, the original)

http://www.jslint.com/

---

ESLint Configs
=

Airbnb JavaScript Style Guide
-
(3M/month)

https://www.npmjs.com/package/eslint-config-airbnb-base

JavaScript Standard Style
-
(1.5M/month)

https://www.npmjs.org/package/eslint-config-standard

JavaScript Semi-Standard Style
-
(100k/month)

https://www.npmjs.com/package/eslint-config-semistandard

Idiomatic JavaScript
-
(4k/month)

https://www.npmjs.com/package/eslint-config-idiomatic

More ESLint Configs:
-
https://www.npmjs.com/browse/keyword/eslintconfig

---

Testing
=

Mocha
=
(1.9M/week)

* https://mochajs.org/
* https://github.com/mochajs/mocha
* https://www.npmjs.com/package/mocha

Jest
-
(1.6M/week)

* https://jestjs.io/
* https://github.com/facebook/jest
* https://www.npmjs.com/package/jest

Jasmine
-
(750k/week)

* https://jasmine.github.io/
* https://github.com/jasmine/jasmine
* https://www.npmjs.com/package/jasmine

Tape
-
(275k/week)

* https://github.com/substack/tape
* https://www.npmjs.com/package/tape

Tap
-
(59k/week)

* https://www.node-tap.org/
* https://github.com/tapjs/node-tap
* https://www.npmjs.com/package/tap

---

CI
=

Travis CI
-
* https://travis-ci.com/
* https://travis-ci.org/

CircleCI
-
* https://circleci.com/

Codeship
-
* https://codeship.com/

AppVeyour
-
* https://www.appveyor.com/

---

Virtualization
=

VirtualBox
-
https://www.virtualbox.org/

Vagrant
-
https://www.vagrantup.com/

---

Tasks
=

Temperature conversion
-

Temperatures need to be converted between
degrees Celsius, Fahrenheit and Kelvin.

You need to find the correct formulas and:

1. Add converter functions in the `converters` directory

2. Add tests in the `tests` directory

Currency conversion
-

Currencies need to be converted between
EUR, PLN and USD
using th eaverage NBP exchange rate as for the day 2018-01-02.

You need to find a way to connect to query the NBP API for the exchange rates and:

1. Add converter functions in the `converters` directory

2. Add tests in the `tests` directory

The API documentation is available on:

* http://api.nbp.pl/en.html

Continuous Integration
-

Configure one ofe the CI systems to run your tests automatically
and add correct build status badges to the README.

Extra tasks
=

For anyone who finished early there are some additional tasks
in no particular order:

Caching
-

* Make a request for every currency only once and cache the value in program memory

* Make a request for every currency only once and cache the value in Redis database

Dates
-

* Add functionality to select a specific date for the exchange rate

Frontend
-

* Make the frontend more convenient to use

* Add a simple chart for currency exchange rates using the `converter` functions

* Display a table of temperatures in degrees C, F and K computed using the `converter` functions

Deployment
-

* Deploy your application to Heroku

* Deploy your application to a VPS on Digital Ocean ([promo link](https://m.do.co/c/64b6b577b3de) for free 10 USD)

* Deploy your application to a VPS on Vultr ([promo link](https://www.vultr.com/?ref=7107329) for free 10 USD)
