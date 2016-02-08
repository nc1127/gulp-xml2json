# gulp-xml2json

[![Build Status](https://travis-ci.org/DataGarage/gulp-xml2json.png?branch=master)](https://travis-ci.org/DataGarage/gulp-xml2json)

gulp plugin convert xml to json

## Install

Install with [npm](https://npmjs.org/package/gulp-xml2json)

```
npm install --save-dev gulp-xml2json
```


## Example

```js
var gulp = require('gulp');
var xml2json = require('gulp-xml2json');
var rename = require('gulp-rename');

gulp.task('default', function () {
	gulp.src('src/**/*.xml')
		.pipe(xml2json())
		.pipe(rename({extname: '.json'}))
		.pipe(gulp.dest('dist'));
});
```


## API

### xml2json(options)

`options` (optional) parameter, which is used to create [node-xml2js](https://github.com/Leonidas-from-XIV/node-xml2js) Parser.
See [node-xml2js Options](https://github.com/Leonidas-from-XIV/node-xml2js#options) documentation. 

By setting these options you can modify the Json files created after transformation.

#### Example with options

```js
var gulp = require('gulp');
var xml2json = require('gulp-xml2json');
var rename = require('gulp-rename');
<!--
var jsonFormat = require('gulp-json-format');
var lineEnding = require('gulp-line-ending-corrector');
-->

gulp.task('default', function () {
	gulp.src('src/**/*.xml')		
		.pipe(xml2json({            
            mergeAttrs: true,
            explicitArray: false
        }))
<!--		
        // jsonFormat(n) -> n is the number of space characters to use as white space
        .pipe(jsonFormat(4))
        // eolc Desired End of Line character. can be CR (\r), LF(\n) (Default), CRLF(\r\n)
        .pipe(lineEnding({verbose: true, eolc: 'CRLF', encoding:'utf8'}))
-->        
        .pipe(rename({extname: '.json'}))
		.pipe(gulp.dest('dist'));
});
```

Example is extracted from usage of gulp-xml2json plugin for [https://github.com/Asseco-CE/eHealth-hackathon](eHealth Hackathon) event 2016.
Plugin was used to prepare Json data from old Xml (source) data. 
In this example, additional useful gulp plugins were commented-out, but you may consider to use them along with gulp-xml2json.

## License

MIT [@chilijung](http://github.com/chilijung)
