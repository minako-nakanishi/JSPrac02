/** 数値への変換 */

const numStr = "33.3";
const num = Number(numStr);
console.log(num);

const a = parseInt("16 volts", 10);
console.log(a); //16 voltsが10進数として解釈される.voltsは無視される.

const b = parseInt("16 volts", 16);
console.log(b); //16 voltsが16進数として解釈される.voltsは無視される.

const c = parseFloat("15.5 kph"); //parseFloatは常に10進数として解釈される.
console.log(c);

const d = new Date();
console.log(d); //現在時刻

const e = d.valueOf(); //時間をUTCの1970年1月1日午前0時からのミリ秒数を表すことができる.
console.log(e);

const f = true;
const g = false;
const n = g ? 1 : 0; //bがtrueの時は1, falseの時は0
console.log(n);