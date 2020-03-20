// #######################################################
// Створити метод compact який приймає масив і вертає новий де відсутні будь-які значення що при переведені в bool дають false


// const compact = function (a) {
//     let newArray = [];

//     for (let i = 0; i < a.length; i += 1) {
//         if (a[i]) {
//             newArray.push(a[i])
//         }
//     }

//     return newArray
// };



// console.log(compact([1, 0, '', null, 'Hello'])) // [1,'Hello']

// // #######################################################
// Написати ф - ю showDeliveryStatus яка приймає масив і виводить на екран інформацію про доставку товара всіх типів.
// Якщо прогрес доставки 100 показувати строку "Done"
// Якщо прогрес доставки < 100 показувати строку "In progress"
// Якщо прогрес доставки null показувати строку "Ready for delivery"



// ===========================================================

// const ordersA = [{
//         name: 'Phone',
//         price: 12300,
//         deliveryProgress: 50,
//         type: 0
//     },
//     {
//         name: 'Computer',
//         price: 230000,
//         deliveryProgress: 100,
//         type: 1
//     },
//     {
//         name: 'Tablet',
//         price: 5000,
//         deliveryProgress: null,
//         type: 2
//     },
// ]
// const ordersB = [{
//         name: 'Phone',
//         price: 12300,
//         deliveryProgress: 50,
//         type: 0
//     },
//     {
//         name: 'Tablet',
//         price: 5000,
//         deliveryProgress: null,
//         type: 2
//     },
// ]

// const showDeliveryStatus = function (a) {
//     for (let i = 0; i < a.length; i += 1) {
//         if (a[i].deliveryProgress == 100) {
//             console.log('done')
//         } else if (a[i].deliveryProgress < 100 && a[i].deliveryProgress > 1) {
//             console.log('in progress');
//         } else {
//             console.log('ready for delivery')
//         }

//     }
//     return a;
// }
// showDeliveryStatus(ordersA) // "In Progress", "Done", "Ready for delivery"
// showDeliveryStatus(ordersB) // "In progress", "Not Ordered", "Ready for delivery"



// ===========================================================================
// #################################################################
// Написати ф - ю яка приймає масив і видаляє звідти всі унікальні елементи
// nonUniqueElements([1, 2, 3, 1, 3]) // [1, 3, 1, 3]
// nonUniqueElements([1, 2, 3, 4, 5]) // []
// nonUniqueElements([5, 5, 5, 5, 5]) // [5, 5, 5, 5, 5]
// nonUniqueElements([10, 9, 10, 10, 9, 8]) // [10, 9, 10, 10, 9]
// #################################################################
// Написати ф-ю median яка приймає масив і знаходить його медіану Медіана – це числове значення, яке ділить відсортований масив чисел на більшу і меншу половини. У відсортованому масиві з непарним числом елементів медіана – це число в середині масиву. Для масиву з парним числом елементів, де нема ні одного елемента точно посередині, медіана – це середнє значення двох чисел, які знаходяться в середині масиву. В цій задачі заданий непустий масив натуральних чисел. Вам потрібно знайти медіану даного масиву.
// median([1, 2, 3, 4, 5]) // 3
// median([3, 6, 10, 15, 20, 99]) // 12.5
// #################################################################
// Написати ф-ю яка приймає в себе 2 параметра (обєкт замовлення і обєкт з цінами товару) Ця ф-я має повернути ціну замовлення
// const productsPrice = { apple: 20, orange: 5, cheese: 12, pork: 45, bread: 23 } const orderA = { apple: 5, cheese: 1, bread: 3 } const orderB = { orange: 10, pork: 2, bread: 1 }
// #################################################################
// Написати ф-ю isObjectEmpty яка перевіряє чи обєкт пустий чи ні. Якщо обєкт пустий то повернути true інакше false
// isObjectEmpty({}) // true
// isObjectEmpty({name: 'user, age: {21}}) // false


// function every(arr, callback) {
//     for (let i = o; i < arr.length; i += ) {
//         const cElement = arr[i];
//         if (!callback(cElement)) {
//             return false;
//         }
//     }

//     return true:
// }


// every([1, 2, 3, 4, 5], el => el < 10) // true (перевіряємо чи елементи < 10)
// every([2, 45, 67, 34], el => el > 10) // false (перевіряємо чи елементи > 10)


function calculator(str) {

    const operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
        "**": (a, b) => Math.pow(a, b),

    }
    let currentOperation;
    let currentOperationKey
    const tmp = str.split(' ').join('');

    for (let key in operations) {
        if (tmp.includes(key)) {
            currentOperationKey = key;
            currentOperation = operations[key];
            break
        }

    }
    if (!currentOperationKey) {
        return "incorect"
    }
    const temp = tmp.split(currentOperationKey)

    const var1 = temp[0];
    const var2 = temp[1];

    if (temp.length < 2 || !var1 || !var2) {
        return 'incorect. cant find 2 number'
    }



    return tmp + '=' + currentOperation(var1, var2);
}




console.log(calculator('6+9'));
console.log(calculator('25-10'))
console.log(calculator('22/11'))
console.log(calculator('2*5'))
console.log(calculator('2*5r'))
console.log(calculator('3**2'))

повторити про прирівнювання.суворі й ні
проглянути методи