"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculate(input) {
    const numbers = input.split(/\n|\,/);
    return numbers.reduce((acc, num) => acc + (+num.trim()), 0);
}
exports.default = calculate;
