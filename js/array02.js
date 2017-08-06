/**配列の添え字が小数点 */
const num1 = [1, 2, 3, 4, 5];
console.log(num1); //num1の要素を表示
num1[2] = 10; //3番目の要素に10を代入
console.log(num1);
num1[4.5] = "number4.5"; //要素が小数点でも書ける（あんまり使わない方が良い）
console.log(num1);
console.log(num1.length); //要素数は5になる