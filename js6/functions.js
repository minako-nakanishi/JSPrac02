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

function fruits() {
    return "Apple"
}

const f = fruits;
console.log(f); //代入した関数の参照
console.log(f()); //代入した関数の呼び出し

const g = fruits();
console.log(g); //代入した関数の呼び出し

const numbers = {}; // 空のオブジェクトを宣言
console.log(numbers);
numbers.one = fruits;
console.log(numbers.one); //[Function: fruits](関数の参照)
console.log(numbers.one()); //Apple(関数の呼び出し)

const nums = [1, 2, 3]; //配列の初期化
nums[1] = fruits; //numsの二番目の要素にfruitsを代入
console.log(nums); //[ 1, [Function: fruits], 3 ]
/*function fruits() {
    return "Apple"
}Foooo **/
console.log(nums[1] + "Foooo"); //二番目の要素の関数に参照
console.log(nums[1]() + "Barrrrr"); //二番目の要素を関数として実行(Apple)
const msg = nums[1]();
console.log(msg); //Apple