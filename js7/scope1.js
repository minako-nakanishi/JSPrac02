function test(x) {
    return x + 5;
}
console.log(test(3)); //8
//console.log(test(x)); //ReferenceError: x is not defined
//関数の引数は関数本体の中で有効

function f() {
    console.log("f");
}

function g() {
    console.log("g");
}

f();
g();
f();

const number = 1;

function Num() {
    console.log(number); //1
    console.log(math); //ReferenceError: math is not defined
}
Num();

const math = 3;