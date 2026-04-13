/*
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
const [primary, , tertiary] = colors;
console.log(primary, tertiary);
//
const [c1, c2, c3, c4 = "yellow"] = colors;
console.log(c4);
*/
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

/// 6.5. Практическое задание
/*
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
*/

/// 7.2. Spread оператор для массивов
/*
console.log("Spread для массивов");
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// Объединение массивов:
const combined = [...arr1, ...arr2];
console.log("Обьединённый массив:", combined);
// Копирование массива:
const copy = [...arr1];
console, log("Копия массива:", copy);
// Добавление элементов:
const extended = [0, ...arr1, 7, 8];
console.log("Расширенный массив:", extended);
*/

// 7.3
/*
console.log("Spread для объектов");
const person = {
    name: "Rinat",
    age: 30,
}
const address = {
    city: "Volshsky",
    street: "Mira",
}
const fullInfo = {...person, ...address };
console.log("Полная информация:", fullInfo);

const personCopy = { ...person };
console.log("Копия объекта:", personCopy);

const updated = { ...person, age: 31, occupation: "Developer" };
console.log("Обновлённый объект:", updated);
*/

// 7.4
/*
console.log("Rest оператор");

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log("Сумма 1,2,3:", sum(1, 2, 3));
console.log("Сумма 1,2,3,4,5:", sum(1, 2, 3, 4, 5));

const numbers = [10,20,30,40,50];
const [first, second, ...rest] = numbers;
console.log("Первое число:", first);
console.log("Второе число:", second);
console.log("Остальные числа:", rest);
*/

// 7.5 Практическое задание

// 1
const arr1 = [1,2,3];
const arr2 = [4,5,6];
console.log(arr1)
console.log(arr2)
// 2
const fullArr = [...arr1, ...arr2];
console.log(fullArr)
// 3
function findMax(...num) {
    return num.reduce((total, num) => total = Math.max(num), 0);
}
console.log(findMax(1,2,3,4,5))
// 4
const student = {
    name: "Rinat",
    age: 30,
}
const address = {
    city: "Volshsky",
    street: "Mira",
}
const fullInfo = {...student, ...address };
console.log(fullInfo);
