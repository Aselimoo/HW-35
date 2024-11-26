// Домашнее задание к уроку №35: “Циклы”

// Задание 1: Цикл `while`

let count = 1;
while (count <= 10) {
    console.log(count);
    count++;
}


// Задание 2: Управление циклами: `break` и `continue`

let count2 = 0;
while (count2 < 10) {
    count2++;
    if (count2 === 5) {
        continue;
    } else if (count2 === 8) {
        break;
    }
    console.log(count2);
}


// Задание 3: Цикл `do-while`

let num = 1;
do {
    console.log(num);
    num++;
} while (num <= 5);

/*
do-while от обычного цикла while отличается тем, что даже если условие будет ложным, 
программа в его теле выполнится хотя бы один раз.
*/


// Задание 4: Бесконечные циклы

// while (true) {
//     let num = Number(prompt("Введите число: "));
//     if (num === 10) {
//         break;
//     }
// }


// Задание 5: Цикл `for`

let num2 = 1;
for (let i = num2; i <= 10; i++) {
    console.log(i);
};


// Задание 6: Бесконечный цикл `for`

for(let i = 1; i < 100; i++) {
    console.log(i);
}


// Задание 7: Перебор элементов массива

let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);    
}


// Задание 8: Выбор между `while` и `for`

/*
Цикл while испотльзуем, когда количество итераций заранее неизвестно, а также условие проверяется перед каждой итерацией. 
А цикл for используем, когда количество итераций нам заранее известно, а также инициализация, 
условие и итерация находятся в одном месте. 
*/

let nums1 = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < nums1.length; i++) {
    console.log(nums1[i]);
}

let numb = 0;
while (numb < 4){
    console.log(numb);
    numb++;
}


// 2. Напишите пример, когда лучше использовать цикл `while`, и пример, когда лучше использовать цикл `for`.

// Задание 9: Цикл с обратным отсчетом

let nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = nums2.length-1; i >= 0; i--) {
    console.log(nums2[i]);
}


// Задание 10: Использование `continue` в цикле `for`

for (let i = nums2[0]; i < nums2.length; i++) {
    if (i % 2 === 0){
        console.log(i);
    } else {
        continue;
    }
}

