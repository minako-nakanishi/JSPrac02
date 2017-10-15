/** 関数式と無名関数 */
const test = function f(stop) { //関数を定義してそれをtestに代入
    if (stop) {
        console.log('f停止');
        return;
    } else {
        console.log('fは停止しなくて良い');
        f(true);
    }
}; //ここまでは関数の定義
test(false);
console.log("----------");
test(true);



//関数の中ではfで関数を参照。
//関数の外ではtestで関数を参照