/** 論理値ではない被演算子を用いた論理演算 */
const x = null;
const y = { name: "tanaka" };
const result = x || y;
console.log(result);