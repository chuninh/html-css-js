let firstnumber = Number(prompt("Hãy nhập số thứ nhất: "));
let secondnumber = Number(prompt("Hãy nhập số thứ hai: "));
let max = Math.max(firstnumber,secondnumber);
let min = Math.min(firstnumber,secondnumber);
let randomNumber = Math.floor(Math.random() * (max - min) + min);
alert("số ngẫu nhiên là: " + randomNumber);