'use strict'
const arr = [2, 3, -5, 15, 7];
/** thisの値としてnullを与える。
 * Math.minとMath.maxではthisは使われないから何を渡しても良い。
 */
console.log(Math.min.apply(null, arr)); //-5
console.log(Math.max.apply(null, arr)); //15

const animal = { name: 'John' };

function update(birthyear, occupation) {
    this.birthyear = birthyear;
    this.occupation = occupation;
}
console.log(animal);
const panda = [2001, "マスコット"];
update.call(animal, ...panda);
console.log(animal);