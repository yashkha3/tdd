"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculate(input) {
    const numbers = input.replace(/\s+/g, ' ').split(',');
    return numbers.reduce((acc, num) => acc + (+num), 0);
}
exports.default = calculate;
