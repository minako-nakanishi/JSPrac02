let Earth; //未定義のグローバル変数
{
    let Africa = 'Big'; //ブロックスコープの変数
    /** クロージャ内で関数を定義 */
    Earth = function() {
        console.log(Africa);
    }
}
Earth(); //Big


let sports; //未定義のグローバル関数
{
    let tennis = { note: '屋外', note2: 'ラケット' };
    sports = function() {
        console.log("無名関数の中：" + tennis.note); //無名関数の中：屋外
        return tennis;
    }
}
let tabletennis = sports();
console.log(tabletennis);
tabletennis.note = '屋内';
console.log(tabletennis); //{ note: '屋内', note2: 'ラケット' }