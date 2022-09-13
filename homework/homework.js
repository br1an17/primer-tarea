'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

    let sum = 0;

    for (let i = 0; i < num.length; i++) {
       sum = sum + num[i] * 2 ** (num.length - 1 - i);
    }
    return sum;
}

 console.log(BinarioADecimal("1011"));


function DecimalABinario(num) {
  // tu codigo aca
  var array = [];
  while (num > 0) {
    array.unshift(num % 2);
    num = Math.trunc(num / 2)
  }
    return array.join('');
  }



module.exports = {
  BinarioADecimal,
  DecimalABinario,
}