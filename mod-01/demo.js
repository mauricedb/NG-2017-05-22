// http://html5please.com/
// http://caniuse.com/#search=intl
// http://babeljs.io/
// http://eslint.org/
// http://www.typescriptlang.org/play/index.html

(function () {
    'use strict';
    var x = undefined;
    console.log('x = ', x);

    x = null;
    console.log('x = ', x);


    console.log(undefined === null);


    var o = {
        x: 1
    };
    console.log(o.y)
    // console.log(o.y.z)


    var n = parseFloat('0.1');
    console.log(n + 0.2);

    console.log(0.1 + 0.2 == 0.3)

    console.log(+(0.1 + 0.2).toFixed(2) === 0.3);

    console.log(parseInt('0123', 10))

    console.log('n = ' + n)
    console.log(`n = ${n} sdvsdvs`)

    var fn = function (x, y) {
        return x + y;
    }



    console.log(fn(1, 2, 3))
    console.log(fn.toString())
    console.log(fn.length)


    var add = function () {
        // console.log(arguments.length);
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            sum += (+arguments[i]);
        }
        return sum;
    }

    console.log(add(1));
    console.log(add(1, 2));
    console.log(add(1, 2, 3));
    console.log(add(1, 2, 3, 3, 3453, 345, 346, 456645));
    console.log(add(1, '6', 3));



    function getStuff() {
        return {
            x: 42
        };
    }

    console.log('getStuff()', getStuff());


    getStuff();
    [1, 2].forEach(function () {});


    console.log(!!null)


    var x = '2';
    if (x == 2) {
        console.log('x == 2');
    } else {
        console.log('x != 2');
    }

    if (x === 2) {
        console.log('x === 2');
    } else {
        console.log('x !== 2');
    }



    if (false == 'false') {
        console.log("false == 'false'");
    } else {
        console.log("false != 'false'");
    }


    if (false === '') {
        console.log("false === ''");
    } else {
        console.log("false !== ''");
    }


    if (false === 'false') {
        console.log("false === 'false'");
    } else {
        console.log("false !== 'false'");
    }


    if (false === '') {
        console.log("false === ''");
    } else {
        console.log("false !== ''");
    }



    console.log(new Date(2017, 11211, -31));

    console.log(new Date(Date.parse('2017-5-22')))


    var data = [11, 22, 33];
    data.x = 42;

    for (var o in data) {
        console.log(o, data[o])
    }


    for (var o of data) {
        console.log(o)
    }


    function createScope() {
        'use strict'
        var xxx = 1;
        if (true) {
            let xx = 1;
            xx = 2;
            console.log(xx);
        }
    }

    createScope();


    function  tally (){
        var count = 0;

        return {
            add: function(x) {
                count += x;
            },
            print: function(){
                console.log('count = ',count)
            }
        }
    }

    var t = tally();
    t.print();
    t.add(5);
    t.print();
    t.add(5);
    t.print();
    t.add(5);

})();


(function(){
    // Our code
    'use strict';

    function Animal() {

    }

    Animal.prototype.eat = function(){
        return 'Eating';
    }

    function Cat(name){
        this.name = name;

        // this.play = function(){
        //     return this.name + ' is playing';
        // }
    }

    Cat.prototype = new Animal();

    Cat.prototype.play = function(){
        return this.name + ' is playing';
    }

    var zorro = new Cat('Zorro');
    console.log(zorro);

    console.log(zorro.play());
    console.log(zorro.eat());


})();


(function(){
    // ES2015 and above
class Animal {
    eat() {
        return 'Eating'
    }
}

    class Cat extends Animal {
        constructor(name){
            super();
            this.name = name;
        }
        play(){
            return this.name + ' is playing';
        }
    }

    var sara = new Cat('Sara');
    console.log(sara);

    console.log(sara.play());
    console.log(sara.eat());



    var n = 1.2;
    console.log(n)

    var nf = new Intl.NumberFormat('nl-BE');
    console.log('1.2 in Dutch format', nf.format(n));

    var d = new Date();
    var dtf = new Intl.DateTimeFormat('nl-BE')
    console.log(dtf.format(d));
}())


var app = document.getElementById('app');
var data = eval('(' +app.textContent + ')');
console.log(data())


var a = [1,2]

var fn2 = a['forEach']
fn2.call(a, function(n){console.log(n)})