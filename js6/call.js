const ringo = { name: "りんご" };
const ken = { name: "けん" };

function greeting() {
    return `私は${this.name}だよ！`;
}
console.log(greeting()); //私はundefinedだよ
console.log(greeting.call(ringo)); //私はりんごだよ！
console.log(greeting.call(ken)); //私はけんだよ！

const jiro = { name: "ジロー" };
const taro = { name: "タロー" };

function update(birthyear, occupation) {
    this.birthyear = birthyear;
    this.occupation = occupation;
}
update.call(jiro, 1985, 'dog');
console.log(jiro);