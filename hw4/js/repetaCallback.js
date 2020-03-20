// const filter = function (array, testCallback) {
//     const result = [];

//     for (const el of array) {
//         const passed = testCallback(el);

//         if (passed) {
//             result.push(el);
//         }
//     }

//     return result;
// }

// const fnA = el => el >= 3;

// console.table(filter([1, 2, 3, 4, 5], fnA))

const product = {
    label: 'adidas',
    showLabel() {
        console.log(this);
        console.log(this.label);
    },
};

product.showLabel();
