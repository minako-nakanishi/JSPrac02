const items = ["iPhone", "cellPhone"];
const prices = [54800, 48000];
const cart = items.map((x, i) => ({name: x, prc: prices[i]}));
console.log("cart " + cart[0].name); //iPhone
console.log(cart[1].name); //cellPhone