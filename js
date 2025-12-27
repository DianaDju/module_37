// Задание 6.1 Палиндром.

let word = prompt("Введите слово или фразу:");

let cleaned = word.toLowerCase().replace(/[\s,.]/g, "");     
let reversed = cleaned.split("").reverse().join("");
if (cleaned === reversed) {
  console.log(`Слово "${word}" является палиндромом`);
} else {
 console.log(`Слово "${word}" не является палиндромом`);
}


// Задание 6.2 Уникальные значения.

const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know'];

// Способ 1: Использование Set 
const uniqueArr1 = [...new Set(arr)];
console.log(uniqueArr1);

// Способ 2: Цикл for с проверкой
const uniqueArr = [];

for (let item of arr) {
    if (!uniqueArr.includes(item)) {
        uniqueArr.push(item);
    }
}
console.log(uniqueArr);

// Задание 6.3 Загаданное число.

let userInput = prompt("Введите любое число:");
let limit = Number(userInput);
const resultArr = [];

for (let i = 0; i <= limit; i++) {
    resultArr.push(i);
}

console.log(resultArr);

// Задание 6.4 Крестики-нолики.

let board = "";

for (let i = 0; i < 3; i++) {
    let row = ""; 
    
    for (let j = 0; j < 3; j++) {
        // Если сумма индексов четная — ставим 'x', если нечетная — 'o'
        if ((i + j) % 2 === 0) {
            row += "x ";
        } else {
            row += "o ";
        }
    }
    
    board += row.trim() + "\n";
}

console.log(board);

// Задание 6.5 Объект.

const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

const arrValues = [];

for (let key in obj) {
    if (Array.isArray(obj[key])) {
        for (let element of obj[key]) {
            arrValues.push(element);
        }
    } else {
        arrValues.push(obj[key]);
    }
}

console.log(arrValues);
