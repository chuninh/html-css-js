let Number1 = Number(prompt("nhập số thứ nhất: "));
let Number2 = Number(prompt("nhập số thứ hai: "));
let Number3 = Number(prompt("nhập số thứ ba: "));
let higest = Math.max(Number1,Number2,Number3);
alert(!isNaN(Number1) && !isNaN(Number2) && !isNaN(Number3) ? "số lớn nhất trong 3 số là: " + higest : "vui lòng nhập số hợp lệ!");