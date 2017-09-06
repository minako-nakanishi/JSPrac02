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

const test = { e: 5, f: 6, g: 7 };
let e, f, g;

({ e, f, g } = test);
console.log(test);


const arr = [1, 2, 3];
let [h, u] = arr;
console.log(h); //1
console.log(u); //2

const tst = [1, 2, 3, 4, 5];
let [r, p, ...rest] = tst;
console.log(r);
console.log(p);
console.log(rest);

let koko = 80,
    bubu = 90;
[koko, bubu] = [bubu, koko];
console.log(koko);
console.log(bubu);