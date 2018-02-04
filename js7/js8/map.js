const animal = [{name: "コアラ", number:5}, {name: "dog", number: 6}];
const nameAnimal = animal.map(function(x){
    x = x.name; //animalから要素nameだけ取り出す.
    return x;
});
console.log("nameAnimal "+nameAnimal);

const numberAnimal = animal.map(x => x.number); //配列animalから要素numberだけ取り出す.
console.log("numberAnimal "+numberAnimal);
const numMultiple = numberAnimal.map(x => x * 8); //取り出した値に
console.log("numMultiple " + numMultiple);

