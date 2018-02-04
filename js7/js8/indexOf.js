const hello = { name: "Jelly" };
const arr = [1, 5, "a", hello, true, 5, [1, 2], "9"];

console.log(arr.indexOf(5)); //1
console.log(arr.lastIndexOf(5)); //5
console.log(arr.indexOf("a")); //2
console.log(arr.lastIndexOf("a")); //2
console.log(arr.indexOf({ name: "Jelly" })); //-1 存在しない場合は-1
console.log(arr.indexOf(hello)); //3
console.log(arr.indexOf([1, 2])); //-1
console.log(arr.indexOf("9")); //7

console.log(arr.indexOf("a", 5)); //aをarr[5]から探す→-1
console.log(arr.indexOf(5, 5)); //5
console.log(arr.lastIndexOf(5, 4)); //arr[4]から左側へ5を探す。→-1