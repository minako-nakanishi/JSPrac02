test(); //関数testが呼ばれた
function test() {
    console.log("関数testが呼ばれた")
};

//g(); //TypeError: g is not a function
var g = function() {
    console.log("関数gが呼び出された")
};
console.log(g); //[Function: g]
g(); //関数gが呼び出された