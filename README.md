# gigangularstructure
Structure example for projects Angular

## Prerequisites

You will need **git** to clone the material-start repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

You must have node.js and its package manager (npm) installed.
You can get them from [http://nodejs.org/](http://nodejs.org/).

You must have less installed.
You cant get it from [http://lesscss.org/] (http://lesscss.org).


## Install

`git clone git@github.com:gigigo-html5/gigangularstructure.git`

`cd gigangularstructure`

`git checkout develop`

`cp config.json.dist config.json`

`npm install`

## Start

To start the project

`npm start`

The source for the app is in the `/src` folder;


## Directory Layout

```
dist/                   --> directory for production
src/                    --> directory for development
    app/                --> all of the source files for the application
        components      --> application components (login, for example)
        core            --> core of application
        shared          --> sharing resource of application
    assets/             --> all of the resource files for the application
        css/            --> css files (NO EDIT)
            less/       --> less files
        libs            --> third-party libraries (NO EDIT, NO COMMIT)
        data            --> static information (txt, json files...)
```


## File Naming

Angular components should be appointed well:

```
[nameComponent].[typeComponent].js
```

For example: core.modules.js.

The component type must be pluralized

For views or templates:

```
[nameView].[typeView].view.js
```

## File Structure

 EcmaScript 5:

```js


(function() {
    'use strict';

    angular.module('app.core')
        .controller('CoreController', CoreController);


    function CoreController($scope, $rootScope) {



    }

})();

```



## Contact

For more information on AngularJS please check out http://angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org



