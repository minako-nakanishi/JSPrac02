/** fill() */
let arr = new Array(5);
console.log(arr); //[ , , , , , ]
let arr2 = arr.fill(1);
console.log(arr2); //[ 1, 1, 1, 1, 1 ] (全体を1で初期化)
let arr3 = arr2.fill("a");
console.log(arr3); //[ 'a', 'a', 'a', 'a', 'a' ]
/** arr3[1]から最後までをbで埋める */
console.log(arr3.fill("b", 1)); // 'a', 'b', 'b', 'b', 'b' ]
/** [2]から[4]の手前までをcで埋める
 */
console.log([0, 1, 2, 3, 4, 5].fill("c", 2, 4)); //[ 0, 1, 'c', 'c', 4, 5 ]
/** 最後から4番目の要素から後ろを全て5.5にする。 */
console.log([0, 1, 2, 3, 4, 5].fill(5.5, -4)); //[ 0, 1, 5.5, 5.5, 5.5, 5.5 ]
/** 最後から4番目の要素から、一番最後の要素の前までを0で埋める. */
console.log([0, 1, 2, 3, 4, 5].fill(0, -4, -1)); //[ 0, 1, 0, 0, 0, 5 ]

/** 逆転 */
let month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let month2 = month.reverse();
console.log(month2); //[ 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

/** ソート */
let num = [6, 3, 8, 9, 0];
let sortNum = num.sort();
console.log(sortNum); // [0, 3, 6, 8, 9 ]

/** そーと(関数指定) */
let koja = [{ name: "Suzanne" }, { name: "Jim" }, { name: "Trevor" }, { name: "Amanda" }];
console.log(koja);
// koja.sort((a, b) => a.name > b.name); //nameでソート
// console.log(koja);
koja.sort(function(a, b) {
    a.name < b.name;
});
console.log(koja)