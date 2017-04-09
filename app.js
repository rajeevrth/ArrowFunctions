var func = function (x) {
    return x * x;
}


//The same function can be written like this using arrow operator
var arrowFunc = (x) => { return x * x; }

console.log(func(2));
console.log(arrowFunc(2));

//Passing argumnets in arrow frunction

var undefiniteFunc = (...n) => {
    let result = 0;
    for (let i = 0; i < n.length; i++) {
        result = result + n[i];
    }
    return result;
}

console.log(undefiniteFunc(1, 6, 8, 9, 3, 4, 5, 6, 7, 8, 8, 9, 9));
