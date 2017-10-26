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
greet(user);
console.log(getBirthyear(user))