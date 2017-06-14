#AngularJS Skeleton app

[![Greenkeeper badge](https://badges.greenkeeper.io/ovaxio/angular-skeleton-app.svg)](https://greenkeeper.io/)

This is a bootstrap of an angular application using :
+ [gulp](https://github.com/gulpjs/gulp)
+ [bower](https://github.com/bower/bower)
+ [coffeescript](https://github.com/jashkenas/coffeescript)
+ [stylus](https://github.com/LearnBoost/stylus)
+ [jade](https://github.com/visionmedia/jade)
+ [AngularJS](https://github.com/angular/angular.js)
+ [ui-router](https://github.com/angular-ui/ui-router)

## Initialisation
Install the Nodejs and bower dependencies

    $ npm install && bower install

## Building for development
For compiling/building the app just run this command.
    
    $ gulp

This command will not minify the sources and will create sourcemap to help you to debug. It also run a static server at the end of building.

## Building for ditribute

    $ gulp deploy

This command will clean the `./dist` folder (if you have a previous production build), minify the JS and CSS files.

## This is only a skeleton
This is only a skeleton app. The workflow is working but the modules are empty. It will help you to have a nice files structure to follow and a ready to use build system.

## Need some changes
All the tasks used for the workflow are inside `./gulp` folder. Up to you if you want to add new ones or update the existing ones. There is one file by kind of task. 

### Add a new task
If you want to add a new task, create a new javascript file in `.gulp/tasks`. It will be automatically loaded. Up to you to include it in other tasks or not.

### Remove a task
If you want to remove a task, find all the other tasks where this one is a dependency and delete it. Then delete or rename the extension of the javascript file (e.g. `bower.js.BAK`)

## Licence

The MIT License (MIT)

Copyright (c) 2014 Ovaxio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.