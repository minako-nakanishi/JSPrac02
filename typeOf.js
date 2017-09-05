// typeof演算子
console.log(typeof 1);
console.log(typeof null);
console.log(typeof true);

//代入演算子
let v, v0;
v = v0 = 9.7; //連続して代入可能
console.log(v);
console.log(v0);

const num = [3, 5, 15, 7, 5];
let n, i = 0;
while (i < num.length, (n = num[i++]) < 10) {
    console.log(`10より小さい数を発見:${n}`)
}
console.log(`10より大きい数字を：${n}`);
console.log(`未チェックの数字の個数：${num.length - i}`);

// 分割代入
const obj = { b: 2, c: 3, d: 4 };
console.log(obj);
const { a, b, c } = obj;
console.log(a);
console.log(b);
console.log(c);