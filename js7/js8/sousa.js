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
let pear = monkey.slice(1, -2);
console.log(pear); //monkey[1]から最後から2番目の一つ前まで[12,13]

/** 途中への要素の追加 */
let gold = [1, 5, 7];
let silver = gold.splice(1, 0, 2, 3, 4); //第一引数は変更を開始する添え字、第2引数は削除する要素の数、第三引数以降は追加する要素
console.log(gold); //[ 1, 2, 3, 4, 5, 7 ]
console.log(silver); //[]
silver = gold.splice(5, 0, 6);
console.log(gold); //[ 1, 2, 3, 4, 5, 6, 7 ]
silver = gold.splice(1, 2);
console.log(gold); //[ 1, 4, 5, 6, 7 ]
console.log(silver); //[2,3]
let platinumn = gold.splice(2, 1, 'a', 'b'); //gold[2]から要素を一つ削除し、そこへa,bを追加する.
console.log(gold); //[ 1, 4, 'a', 'b', 6, 7 ]
console.log(platinumn); //[5](削除した要素)

/** 配列内の要素の削除や置換 */
let cow = [11, 12, 13, 14];
let cow2 = cow.copyWithin(1, 2); //第一引数は「どこにコピーするか」。第2引数は「どこからコピーするか」。第三引数はコピーを終了する場所(一つ手前の要素までコピー)
console.log(cow2); //[ 11, 13, 14, 14 ]
console.log(cow); //[11,13,14,14]
console.log(cow.copyWithin(2, 0, 2)); //[11,13,11,13]

console.log([1, 2, 3, 4, 5].copyWithin(0, -2, -1)); //[4,2,3,4,5]
console.log(cow2); //[11,13,11,13](cowが変更されたため、それを指しているcow2も変更された)