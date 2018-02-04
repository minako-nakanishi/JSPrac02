const arr = [1, 17, 16, 5, 4, 16, 10, 3, 49];
console.log(arr.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x)))); //4

/** 添え字（第二引数）が2よりおおきくてルートをとった値が整数になる */


class Person {
    constructor(name) {
        this.name = name;
        this.id = Person.nextId++;
    }
}
Person.nextId = 0;
const 一郎 = new Person("一郎"), //id 0
    次郎 = new Person("次郎"), //id 1
    三郎 = new Person("三郎"); //id 2

const arr2 = [一郎, 次郎, 三郎];

console.log(arr2.find(p => p.id === 三郎.id)); //Person { name: '三郎', id: 2 }