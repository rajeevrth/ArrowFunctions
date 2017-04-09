var func = function (x) {
    return x * x;
}


//The same function can be written like this using arrow operator
var arrowFunc = (x) => { return x * x; }

console.log(func(2));
console.log(arrowFunc(2));
