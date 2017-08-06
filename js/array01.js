const array1 = [1, 2, 3, 4, 5]; //4つの数値を含む配列
const array2 = [1, 'two', 3, null]; //型が混在している配列.
/** 文字列の配列 */
const array3 = [
    "GoodMorning, Mr.Bean!",
    "I have a pen",
    "I have an apple",
    "Wmmm.. ApplePen!!",
];
/** 3つのオブジェクトを含む配列 */
const array4 = [
    { name: "Perl", hardness: 7 },
    { name: "Diamond", hardness: 10 },
    { name: "Topaz", hardness: 8 },
];
/** 配列を要素とする配列 */
const array5 = [
    [1, 2, 3],
    [4, 5, 6],
];
/** 配列の要素を表示 */
console.log("array1は " + array1);
console.log("array2は　" + array2);
console.log("array3は " + array3);
console.log("array4は " + array4);
console.log("array5は " + array5);

/** 配列の要素数(大きさ) */
console.log(array1.length);
console.log(array2.length);
console.log(array3.length);
console.log(array4.length);
console.log(array5.length);

/** 最初の要素を取得 */
console.log(array1[0]);
console.log(array2[0]);

/** 最後の要素の取得 */
console.log(array3[array3.length - 1]); //最後の要素の添え字はarray3.length - 1