/**分割代入 */
const obj = { b: 2, c: 3, d: 4 }; //オブジェクトの定義
const { a, b, c } = obj; //分割代入
console.log("obj: " + obj); //[object Object]
console.log("objの中のbの値：　" + obj.b); //2
console.log("a: " + a); //undefined (objにはプロパティaがない)
console.log("b: " + b); //2
console.log("c: " + c); //3
//console.log("d: " + d); //ReferenceError: d is not defined(そもそも分割代入されていない)