/** 即時関数 */
(function() {
    //即時関数の本体
})();

const letter = (function() {
    const secret = "秘密事項です";
    return `秘密の長さは${secret.length}です`;
})();
console.log(letter);

//secretは即時関数のスコープ内では安全であり、外からアクセスできない.

const home = (function() {
    let count = 0;
    return function() {
        return `この関数が呼ばれた回数: ${++count}回`;
    }
})();
console.log(home());
console.log(home());
console.log(home());