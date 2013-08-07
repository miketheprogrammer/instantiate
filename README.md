instantiate
===========

Instantiate a Javascript Object from an array of arguments

[![build status](https://secure.travis-ci.org/miketheprogrammer/instantiate.png)](http://travis-ci.org/miketheprogrammer/instantiate)


Installation
========
````javascript
npm install instantiate
````

Usage
========
This module provides a usefull methods and a usefull abstraction to instantiating objects from either arrays, or the default method of providing arguments.

instantiate.fromArray ( obj, arrayOfArgs )
-----------
var instanceOfObject = instantiate.fromArray(obj, arrayOfArgs);

````javascript
var instanceOfObject = instantiate.fromArray(obj, [1,2,3])

````

instantiate.fromArguments ( obj )
-----------
var instanceOfObject = instantiate.fromArguments(obj, argumentA, argumentB, argumentC, ...);

````javascript
var instanceOfObject = instantiate.fromArguments(obj, 1, 2, 3)

````

instantiate.new ( obj )
-----------
Abstraction of both fromArray and fromArguments.
Should work for most cases. Works by detecting if there is a 3rd argument in arguments or not.

Refer to tests.js -- included here for ease.

````javascript
var instantiate = require('../index');
var test = require('tap').test;

var obj = function (a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
}
test('instances of objects Should be returned', function(t) {
    t.plan(4);
    t.ok(instantiate.fromArray(obj, [1,2,3]) instanceof obj)
    t.ok(instantiate.fromArguments(obj,1,2,3) instanceof obj)
    t.ok(instantiate.new(obj, [1,2,3]) instanceof obj)
    t.ok(instantiate.new(obj,1,2,3) instanceof obj)
    
});

test('instances have proper values', function(t) {
    t.plan(12);
    var instances = [
        instantiate.fromArray(obj, [1,2,3]),
        instantiate.fromArguments(obj, 1, 2, 3),
        instantiate.new(obj, [1,2,3]),
        instantiate.new(obj, 1, 2, 3)
    ];
    
    for ( i in instances ) {
        var ins = instances[i];
        t.same(ins.a, 1);
        t.same(ins.b, 2);
        t.same(ins.c, 3);
    }
});

````


