"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculate_1 = __importDefault(require("./calculate"));
const numString = '1,2,3,4,5,6';
const output = (0, calculate_1.default)(numString);
console.table({ output });
