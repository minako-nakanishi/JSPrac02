/** 船乗り賭けゲーム */
/**
 * fundsは所持金
 * totalBetは掛け金
 */

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

const bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0 }; //最初の掛け金は全て0にしておく。配列(kety: value)
let totalBet = rand(1, funds); //掛け金(最小値1ペンス, 最大値は所持しているペンス)
if (totalBet === 7) { //ポッケから取り出した7ペンスの場合
    totalBet = funds; //所持金を全てかける
    bet.heart = totalBet; //ハートに全て掛ける.
} else {
    //掛け金(totakBet)をランダムに分ける
    let remaining = totalBet; //残りの掛け金.
    do {
        let bet = rand(1, remaining); //1から残りの掛け金の乱数をbetに記憶.
        let face = randFace(); //サイコロを振って出た目をfaceに格納する.
        bets[face] = bets[face] + bet; //betに格納した掛け金をfaceに記憶されているマス目の掛け金に追加する.
        remaining = remaining - bet; //掛け金を引く.
    } while (remaining > 0);
}
funds = funds - totalBet; // 所持金 - 掛け金

const hand = []; //サイコロの出目を記録.最初は空.
for (let roll = 0; roll < 3; roll++) {
    //rollはサイコロを振った数.
    hand.push(randFace()); //サイコロの出目を一番後ろの要素として記憶.
}