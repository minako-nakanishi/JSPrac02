// zooオブジェクト
const zoo = {
        name: 'Ueno',
        mamal: 'panda'
    }
    //レシーバー関数
function animals(age, color) {
    this.age = age; //thisはzooなのでzoo.age = ageとなる.新しいプロパティageをセット.
    this.color = color; //thisはzooなのでzoo.color = colorとなり新しいプロパティcolorをセット.
}
animals.call(zoo, 8, 'blach & white'); //第一引数はzoo,第二引数・第三引数はanimalsのageとcolor
console.log(zoo);