var x = [1, 2, 3, 4, 5]
var [y, z] = x;
console.log("y: " + y); //1
console.log("z: " + z); //2


var foo = ["one", "two", "three"]; //fooの宣言
var [one, two, three] = foo; //分割代入
console.log(one); //one
console.log(two); //two
console.log(three); //three

var c, d;
[c = 4, d = 6] = [1, 9]
console.log(c);
console.log(d);

//変数の入れ替え
var f = 1;
var g = 3;
[f, g] = [g, f]; //つまり[f,g] = [3,1]
console.log(f);
console.log(g);



function fruit() {
    return [1, 2];
}

var h, i;
[h, i] = fruit();
console.log(h); //1
console.log(i); //2


// 返り値の無視
function veg(){
  return [1,2,3];
}
var [y, ,z] = veg();
console.log(y);
console.log(z);

