/** 論理値ではない被演算子を用いた論理演算 */
const x = null;
const y = { name: "tanaka" };
const result = x || y;
console.log(result);

//三項演算子
const test = true;
const naka = test ? "YEAH" : "NO!!"; //testがtrueだとYEAH, falseだとNO!!がnakaに格納される。
console.log(naka);