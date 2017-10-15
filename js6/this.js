const o = {
    name: 'John',
    speak() { return `My name is ${this.name}`; },
}

const p = {
    name: 'Jenny',
    speak() { return `My name is ${this.name}`; },
}
console.log(o);
console.log(o.speak());

const speak = o.speak;
console.log(speak === o.speak); //true(どちらの定数も同じ関数を参照している)
console.log("speak() " + speak()); //My name is undefined
console.log("speak " + speak); //speak() { return `My name is ${this.name}`; }
console.log("o.speak " + o.speak); //speak() { return `My name is ${this.name}`; }
console.log("o.speak() " + o.speak()) //My name is John