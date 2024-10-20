"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculate(input) {
    const numbers = input.split(/\n|\,/);
    let total = 0;
    for (let num of numbers) {
        const number = +num;
        if (isNaN(number))
            continue;
        if (number < 0)
            throw new Error('negative numbers not allowed');
        total += number;
    }
    return total;
}
exports.default = calculate;
