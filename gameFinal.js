//m以上n以下のランダムな整数を返す.
function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}

//サイコロの目をランダムに返す.
function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0, 5)];
}

let funds = 50; //開始時の資金
let round = 0; //ラウンド(何回目の掛けか)

while (funds > 0 && funds < 100) {
    round++;
    console.log(`第${round}ラウンド：`);
    console.log(`手持ち資金：${funds}`);

    //掛ける
    let bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0 }; //最初の掛け金は全て0にしておく。配列(kety: value)
    let totalBet = rand(1, funds); //掛け金(最小値1ペンス, 最大値は所持しているペンス)

    if (new Date().getDate === 3) { //もし水曜日なら
        totalBet = 1; //1ペンス掛ける.
    } else if (totalBet == 7) { //もし掛け金(ポッケから出した掛け金)が7の場合
        totalBet = funds; //掛け金は(やっぱり)手持ちの資金を全て掛ける.
        bets.heart = totalBet; //ハートに全ての資金を掛ける.
    } else {
        let remaining = totalBet; //ポッケから出した掛け金をremainingに格納する.
        do {
            let bet = rand(1, remaining); //1から残りの掛け金の乱数をbetに記憶.
            let face = randFace();
            bets[face] = bets[face] + bet; //betに格納した掛け金をfaceに記憶されているマス目の掛け金に追加する.
            remaining = remaining - bet; //掛け金を引く.
        } while (remaining > 0);
    }
    funds = funds - totalBet; //残りの資金.
    console.log(`掛け金：${totalBet}(` + Object.keys(bets).map(face => `${face}: ${bets[face]}`).join(',') + ")");

    // サイコロを振る.
    const hand = []; //サイコロの出目を記録.最初は空.
    for (let roll; roll < 3; roll++) { //rollはサイコロを振った回数.
        hand.push(randFace()); //サイコロの出目を一番後ろの要素として記憶.
    }
    console.log(`出目：${hand.join(',')}`);

    //払戻金をもらう
    let winnings = 0; //払戻金。最初は0.
    for (let die = 0; die < hand.length; die++) {
        let face = hand[die]; //dieはサイコロ
        if (bets[face] > 0) winnings = winnings + bets[face]; //サイコロの出目と同じマス目に掛け金があれば、それを払戻金に追加
    }
    funds = funds + winnings; //所持金に払戻金を追加 
    console.log(`払戻金：${winnings}`);
}
console.log(`残金：${funds}`);
if (100 < funds) console.log("意気揚々と船に戻る。\n");
else console.log("トボトボと船に帰る。\n")