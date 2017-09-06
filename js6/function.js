/** 関数について */
function sayHey() { //関数宣言
    console.log("Hello World!");
    console.log("こんにちは");
}
sayHey(); //関数呼び出し

/** 戻り値について */
function getGreeting() {
    return "Hello everyone";
}
const word = getGreeting(); //関数が呼び出され、戻り値が代入される.
console.log(word);
console.log(getGreeting()); //関数の呼び出し
console.log(getGreeting); //関数の参照

const f = getGreeting; //関数をfに代入.
console.log(f()); //代入された変数に()をつけるとgetGreeting関数が実行される.

const o = {};
o.f = getGreeting; //オブジェクトoのプロパティとして関数を指定.
console.log(o.f);
console.log(o.f()); //オブジェクトoのプロパティfが実行される.

const ary = [1, 2, 3];
ary[2] = getGreeting; //aryは[1, 2, function gerGreeting()]となっている.
console.log(ary);
console.log(ary[2]()); //arry[2]()に括弧をつけると"Hello Everyone"が表示される.