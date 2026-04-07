/// 6.2. Деструктуризация массивов
console.log("\n=== Деструктуризация массивов ===");
const colors = ["red", "green", "blue"];
// kakashke
const color1 = colors[0];
const color2 = colors[1];
console.log(color1, color2);
// new
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor, secondColor, thirdColor);
//
const [primary,  , tertiary] = colors;
console.log(primary, tertiary);
//
const [c1, c2, c3, c4  = "yellow"] = colors;
console.log(c4);

/// 6.3. Деструктуризация объектов
/*
console.log("Деструктуризация объектов");
const user = {
    name: "Alice",
    age: 25,
    city: "Moscow",
}
*/
// kakaschke
/*
const userName = user.name;
const userAge = user.age;
console.log(userName, userAge);
*/
// new
/*
const { name, age, city} = user;
console.log(name, age, ciry);
*/
// Переименование при деструктуризации:
/*
const { name, fullName, age: years } = user;
console.log(fullName, years);
*/
// Значения по умолчанию:
/*
const {name: personName, country = "Russia" } = user;
console.log(personName, country);
*/

/// Деструктуризация в параметрах функций
/*
console.log("Деструктуризация в параметрах");
// kakaschke
function printUserOld(user) {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`City: ${user.city}`);
}
// new 
function printUser({ name, age, city }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`City: ${city}`);
}
//
printUserOld(user);
console.log();
printUser(user);
*/

// 6.5. Практическое задание
// 1
console.log("Практическое задание");
const product = {
    name: "Молоко",
    price: 99.9,
    category: "Молочная продукция",
    inStock: 100
}
// 2
const productName = product.name;
const productPrice = product.price;
const productCategory = product.category;
const productInStock = product.inStock;
// 3
function printProduct({ name, price, category, inStock }) {
    console.log(`Name: ${name}`);
    console.log(`Price: ${price}`);
    console.log(`Category: ${category}`);
    console.log(`InStock: ${inStock}`);
}
// 4
console.log(productName, productPrice, productCategory, productInStock);
console.log("---");
printProduct(product);