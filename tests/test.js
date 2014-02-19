var instantiate = require('../index');
var test = require('tape');

var obj = function (a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
}

var obj2 = function (a,b,c,d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
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


test('Literal undefined arguments should not throw errors', function (t) {
    t.plan(16);
    var instances = [
        instantiate.fromArray(obj2, [1,undefined,undefined, 4]),
        instantiate.fromArguments(obj2, 1, undefined,undefined, 4),
        instantiate.new(obj2, [1,undefined,undefined, 4]),
        instantiate.new(obj2, 1,undefined,undefined, 4)
    ];
    for ( i in instances ) {
        var ins = instances[i];
        t.same(ins.a, 1);
        t.equals(ins.b, undefined);
        t.equals(ins.c, undefined);
        t.same(ins.d, 4);
    }

})