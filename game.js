/** 船乗り賭けゲーム */

let funds = 50; //開始時の手持ち資金

/** 資金が1ペンスより多く100ペンス未満のとき
 */
while (funds > 1 && funds < 100) {
    funds = funds + 2; //2枚増やす.
    funds = funds - 1; //1枚減らす.
}

// m以上n以下のランダムな整数を返す.
function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}