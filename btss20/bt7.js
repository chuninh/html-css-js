let n = prompt("moi ban nhap so so fibonacci hien thi");
let a = 1, b = 1;

if (n >= 1) {
    console.log(a);
}
if (n >= 2) {
    console.log(b);
}
let c = 0;
for (let i = 2; i < n; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
}
