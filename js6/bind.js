const animal = { name: 'John' };
const human = { name: 'William' };

function update(color, birthyear) {
    this.color = color;
    this.birthyear = birthyear;
}
const updateAnimal = update.bind(animal);
updateAnimal('白', 2012);
console.log(animal);

updateAnimal.call(human, 'うすオレンジ色', 1990);
console.log(animal); // { name: 'John', color: 'うすオレンジ色', birthyear: 1990 }


const country = { name: 'アメリカ' };

function update(foundation, language) {
    this.foundation = foundation;
    this.language = language;
}

const updateCountry = update.bind(country, 1700);
console.log(country);
updateCountry("英語");
console.log(country);