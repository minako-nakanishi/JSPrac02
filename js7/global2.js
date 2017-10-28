let user = {
    name: 'Jiro',
    age: 27
};

function greet(person) {
    console.log(`こんにちは${person.name}さん！`)
}

function getBirthyear(person) {
    return new Date().getFullYear() - person.age;
}
//greet関数にuserオブジェクトを用いたい場合
greet(user);
console.log(getBirthyear(user))