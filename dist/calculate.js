"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculate(input) {
    let customDelimiter = ',';
    if (input.startsWith('//')) {
        customDelimiter = input[2];
    }
    const pattern = new RegExp(`${customDelimiter}|\n`, 'g');
    const numbers = input.split(pattern);
    let total = 0;
    const negativeNumbers = [];
    for (let num of numbers) {
        const number = +num;
        if (isNaN(number))
            continue;
        if (number < 0) {
            negativeNumbers.push(number);
            continue;
        }
        total += number;
    }
    if (negativeNumbers.length)
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);
    return total;
}
exports.default = calculate;
