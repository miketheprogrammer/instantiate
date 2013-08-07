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