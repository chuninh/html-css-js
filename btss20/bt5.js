let a = +prompt("Mời bạn nhập số a");
let b = +prompt("Mời bạn nhập số b");
let accumulation = 1;
if (!isNaN(a) || !isNaN(b) && a != 0) {
    for (i = 1; i <= Math.abs(b); i++) {
        b>0 ? accumulation *= a : accumulation *= 1/a;
    }
    document.write(accumulation);
}else{
    document.write("Không hợp lệ");
}