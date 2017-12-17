/** 配列の要素の操作 */
let array1 = ["b", "c", "d"];
array1.push("e"); //配列の最後に要素を追加
console.log("array1 " + array1); //b,c,d,e

array1.pop(); //配列の最後の要素を削除
console.log("array1 pop後 " + array1); //b,c,d

array1.unshift("a"); //配列の最初に要素を追加
console.log("array1 unshift後" + array1); //a,b,c,d

array1.shift(); //配列の最初の要素を削除
console.log("array1 shift後" + array1); //b,c,d

/** 複数要素の追加 */
let dog = [1, 2, 3];
let cat = dog.concat(4, 5, 6);
console.log(dog); //[1,2,3](変更なし)
console.log(cat); //[1,2,3,4,5,6]
cat = dog.concat([4, 5], [6, 7]); //concatの引数が2つでもOK
console.log(cat); //[1,2,3,4,5,6,7]
cat = dog.concat([4, [5, 6]]);
console.log(cat); //[1,2,3,4,[5,6]]

/** 部分配列 */
let monkey = [11, 12, 13, 14, 15];
let banana = monkey.slice(3);
console.log(banana); //monkey[3]から後ろ.[14,15]
console.log(monkey); //変更なし[ 11, 12, 13, 14, 15 ]
let apple = monkey.slice(2, 4);
console.log(apple); //monkey[2]からmonkey[4]の1つ前まで[13,14]
let orange = monkey.slice(-2);
console.log(orange); //最後から2番目以降の要素の取得[14,15]