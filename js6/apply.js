const mamals = { name: 'Giraffe' };

function update(color, height) {
    this.color = color;
    this.height = height;
}
console.log(mamals);
update.apply(mamals, ['yellow', 200]);
console.log(mamals);