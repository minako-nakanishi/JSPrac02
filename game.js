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
    /**Math.floor()は引数として与えた数以下の最大の整数を返します。(小数点切り捨て)
     * Math.rando()はoから1の範囲の中で擬似乱数を返す
     */
    return m + Math.floor((n - m + 1) * Math.random());
}

//サイコロの目のどれか一つを表す文字列をランダムに返す.
function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0, 5)];
}