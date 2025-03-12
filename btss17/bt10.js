let number = Number(prompt("kiểm tra số có phải số chính phương không: "));
let sqrt = Math.sqrt(number);
let result = Number.isInteger(sqrt) ? `${number} là số chính phương` : `${number} không phải số chính phương`;
alert(result);