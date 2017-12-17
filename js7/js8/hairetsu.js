//配列リテラル
const test1 = [1, 2, 3]; //数字の配列
const test2 = ["one", 2, "three"]; //異なる型の要素を持つ配列
const test3 = [
    [1, 2, 3],
    ["one", 2, "three"]
]; //配列を要素とする配列
const test4 = [{ name: "さる", type: "動物" }, { name: "犬", type: "動物２" }];

//要素へのアクセス
console.log(test1[0]); //1
console.log(test2[0]); //one
console.log(test3[1]); //[ 'one', 2, 'three' ]
console.log(test4[0]); //{ name: 'さる', type: '動物' }

//配列の長さを
console.log(test1.length); //3
console.log(test2.length); //3
console.log(test3.length); //2

//配列の長さを大きくする
test1[4] = 5;
console.log(test1); //[ 1, 2, 3, , 5 ]
console.log(test1.length); //5
console.log(test1[3]); //undefined

const monkey = new Array(); //空の配列を生成
console.log(monkey); //[]

const dog = new Array(1, 2, 3);
console.log(dog); //[1,2,3]

const cat = new Array(3);
console.log(cat); //[ , , ]