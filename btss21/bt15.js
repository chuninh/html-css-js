let money = prompt("moi ban nhap so tien muon rut");
let to500 = 0;
let to200 = 0;
let to100 = 0;
let to50 = 0;
let to20 = 0;
let to10 = 0;
let to5 = 0;
let to2 = 0;
let to1 = 0;
if (money >= 1000 && !isNaN(money)) {
    for (i = 500000; money >= i; i + 500000) {
        money = money - 500000;
        to500 += 1;
    }
    if (to500 >= 1) {
        console.log("500.000-" + to500 + "to");
    }
    for (i = 200000; money >= i; i + 200000) {
        money = money - 200000;
        to200 += 1;
    }
    if (to200 >= 1) {
        console.log("200.000-" + to200 + "to");
    }
    for (i = 100000; money >= i; i + 100000) {
        money = money - 100000;
        to100 += 1;
    }
    if (to100 >= 1) {
        console.log("100.000-" + to100 + "to");
    }
    for (i = 50000; money >= i; i + 50000) {
        money = money - 50000;
        to50 += 1;
    }
    if (to50 >= 1) {
        console.log("50.000-" + to50 + "to");
    }
    for (i = 20000; money >= i; i + 20000) {
        money = money - 20000;
        to20 += 1;
    }
    if (to20 >= 1) {
        console.log("20.000-" + to20 + "to");
    }
    for (i = 10000; money >= i; i + 100000) {
        money = money - 10000;
        to10 += 1;
    }
    if (to10 >= 1) {
        console.log("10.000-" + to10 + "to");
    }
    for (i = 5000; money >= i; i + 5000) {
        money = money - 5000;
        to5 += 1;
    }
    if (to5 >= 1) {
        console.log("5.000-" + to5 + "to");
    }
    for (i = 2000; money >= i; i + 2000) {
        money = money - 2000;
        to2 += 1;
    }
    if (to2 >= 1) {
        console.log("2.000" + to2 + "to");
    }
    for (i = 1000; money >= i; i + 1000) {
        money = money - 1000;
        to1 += 1;
    }
    if (to1 >= 1) {
        console.log("1.000-" + to1 + "to");
    }

}else{
    alert("ko hop le");
}