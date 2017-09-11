/**引数
 * 関数が呼び出されるまでは存在していない変数
 * （関数に情報を渡す方法）
 */
function avg(a, b) { //a,bは仮引数
    return (a + b) / 2;
}

console.log(avg(5, 8)); //仮引数のaには5, bには8が記憶され、関数が実行される

function abc(c, d) {
    return (c + d) / 2;
}
const c = 10,
    d = 6;
console.log(abc(c, d)); // constで宣言したc,dが使われており、関数の引数として宣言されたc,dとは別物