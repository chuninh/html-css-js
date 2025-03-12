let money = prompt("nhap so tien muon gui");
let month = prompt("nhap so thang muon gui");
let interrest = prompt("moi ban nhap lai suat thang")
let year = month/12;
let profit_amount = money*(year*interrest/100);
let profit_amount1 = money*(1+year*interrest/100);
console.log("tien lai la"+profit_amount);
console.log("tien nhan duoc la"+profit_amount1);
