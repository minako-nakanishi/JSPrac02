/** findIndex */
const arr = [{ id: 5, name: "太郎" }, { id: 7, name: "次郎" }];
console.log(arr.findIndex(o => o.id === 5)); //0
console.log(arr.findIndex(o => o.id === 7)); //1
console.log(arr.findIndex(function(p) {
    p.name === "三郎"
})); //-1

/** find */
const arr2 = [{ id: 5, name: "太郎" }, { id: 7, name: "五郎" }];
console.log(arr2.find(o => o.id === 5)); //{ id: 5, name: '太郎' }  要素の検索
console.log(arr2.find(o => o.id === 3)); //undefined