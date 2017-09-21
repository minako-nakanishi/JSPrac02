// デフォルト引数
function test(a, b = "default", c = 3) {
    return `${a} - ${b} - ${c}`;
}
console.log(test(8, 7, 5)); //8 - 7 - 5
console.log(test(5, 4)); //5 - 4 - 3
console.log(test(7)); //7 - default - 3

//オブジェクトのメソッド
const mess = {
    name: 'John',
    bark: function() { return 'Wolf'; },
}
console.log(mess.name); //John
console.log(mess.bark()); //Wolf

//メソッドの省略
const efc = {
    name: 'Tama',
    bark() { return 'Meaw'; },
}
console.log(efc.bark()); //Meaw