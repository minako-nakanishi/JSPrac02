let x = 3,
    y;
x += y = 6 * 5 / 2;
// x += y = 15;
// x += (y = 15);
// x += 15;
//x = 3 +15;
console.log(x);

//等価演算子・厳密等価演算子
const n = 5;
const s = "5";
console.log(n === s); //型が異なるなめfalse
console.log(n == s); //true

/**NaNは(NaNも含めて)どの値とも等しくならない */
console.log(NaN == NaN); //false
console.log(NaN === NaN); //false
console.log(isNaN(NaN)); //isNaN()は引数がNaNかを判断する。NaNならtrue.

//文字連結
console.log(3 + 5 + "8"); //88
console.log("3" + 5 + 8); //"35" + 8 -> 358

if (undefined) console.log("t");
else console.log("f");