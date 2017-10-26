let animal = 'Dog'; //グローバル変数
let age = 27; //グローバル変数

function greet() { //挨拶する
    console.log(`こんにちは、${animal}さん！`);
}

function getBirthyear() {
    return new Date().getFullYear() - age;
}

greet();
console.log(getBirthyear());

let member = {
    name: 'Taro',
    gender: 'male',
    age: 27
};

function Name() {
    console.log(`私の名前は、${member.name}です！`)
}

function getBirthyear2() {
    return new Date().getFullYear() - member.age;
}
Name();
console.log(getBirthyear2());