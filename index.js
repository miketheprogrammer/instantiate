exports.fromArray = function(constructor, args) {
    
    return new (constructor.bind.apply(constructor, [null].concat(args)))();
}

exports.fromArguments = function(constructor) {
    return new (constructor.bind.apply(constructor, arguments))();
}

exports.new = function(constructor) {
    if ( arguments[1].length !== undefined ) {
        return exports.fromArray(constructor, arguments[1]);
    }

    delete arguments[0];
    var args = [];

    for (var i = 1; i < arguments.length; i += 1) {
        args.push(arguments[i]);
    }
    return exports.fromArguments.apply(null, [constructor].concat(args));
}




