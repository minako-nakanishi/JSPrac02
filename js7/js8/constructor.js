// Arrayコンストラクタ
const test = new Array(); //空の配列を生成
console.log(test); //[]
const test1 = new Array(1, 2, 3);
console.log(test1); //[1,2,3]
const test2 = new Array(3); //長さが3の配列を生成（各要素はundefined)
console.log(test2); //[ , , ]
console.log(test2[1]); //undefined