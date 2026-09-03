import { sum, multiply } from './math.js';

const result1 = sum(5, 10);
const result2 = multiply(4, 2);

document.getElementById('output').innerHTML = 
  `الجمع: ${result1} <br> الضرب: ${result2}`;