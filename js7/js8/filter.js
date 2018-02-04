const cardTaba = []; //空の配列
for(let mark of ['heart', 'clover', 'dia', 'spade']) //全カードを生成
    for(let num = 1; num <= 13; num++)
        cardTaba.push({mark, num}); //4つのマークの13までのカードが格納された.
        //console.log(cardTaba) //4つのマークの13までのカードが格納された.

let selectedCard = cardTaba.filter(card => card.num === 2); //カードの番号が2のカードを選択.
selectedCard = cardTaba.filter(card => card.mark === 'dia'); //カードのマークがダイアのカード. 
console.log(selectedCard);