exports.fromArray = function(constructor, args) {
    
    return new (constructor.bind.apply(constructor, [null].concat(args)))();
}

exports.fromArguments = function(constructor) {
    return new (constructor.bind.apply(constructor, arguments))();
}

exports.new = function(constructor) {
    if ( arguments[2] == undefined ){
        return exports.fromArray(constructor, arguments[1]);
    }

    delete arguments[0];

    var args = [];
    var i = 1;

    while( arguments[i] != undefined ) {
        args.push(arguments[i]);
        i++;
    }
    return exports.fromArguments.apply(null, [constructor].concat(args));
}




