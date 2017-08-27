const s = "5";
console.log(3 + +s); //(+sなので数値の5として解釈される)
console.log(3 + s); //文字列の連結となる

const a = 1,
    b = 2,
    c = 3;
console.log(a * 3);
console.log(b * 3);
console.log(c * 5);

let x = 2;
console.log(x++ + x++); //2+3
console.log(++x + ++x); //5+6
console.log(x++ + ++x); //6+8
console.log(++x + x++); //9+9
let y = 10;
console.log(y-- + y--); //10+9
console.log(--y + --y); //7+6
console.log(y-- + --y); //6+4
console.log(--y + y--); //3+3
console.log(y); //2