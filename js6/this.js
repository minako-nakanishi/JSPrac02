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

const m = {
    name: 'Cathy',
    greetBackwards: function() {
        const self = this;

        function getReverseName() {
            let nameBackwards = '';
            for (let i = self.name.length - 1; i >= 0; i--) {
                nameBackwards += self.name[i];
            }
            return nameBackwards;
        } //getReverseNameの定義終わり
        return `${getReverseName()} si eman ym ,olleH`;
    },
};
console.log(m.greetBackwards());