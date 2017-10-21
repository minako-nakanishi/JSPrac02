const student = {
    name: 'William',
    birthMonth: 'June'
}

function data(country, age) {
    this.country = country;
    this.age = age;
}
data.call(student, 'USA', 15);
console.log(student); //{ name: 'William', birthMonth: 'June', country: 'USA', age: 15 }