/* 関数の宣言 **/
function Hello() {
    console.log("Hello World!");
}
Hello(); //関数の呼び出し

/**戻り値について */
function Goodmorning() {
    return "Good Greeting"; //戻り値を返す
}

const message = Goodmorning(); //関数が呼び出され、戻り値が代入される
console.log(message);

/** 関数の呼び出しと参照 */
function walk() {
    return "Walking Now";
}
console.log(walk()); //関数の呼び出し「Walking Now」
console.log(walk); //関数の参照 [Function: walk]