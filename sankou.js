// 三項演算子
const naka = false;
const result = naka ? "Yes!" : "No!"; //nakaがtrueならYesが、falseならNo!がresultに格納される.
console.log(result);

let x = 0,
    y = 10,
    z;
//z = x++;
z = (x++, y++); //括弧付きカンマ演算子は式の一番右側のみ返す。x++は無視する。
console.log(z);

let a = 0,
    b = 10,
    c;
c = a++, b++;
console.log(c);