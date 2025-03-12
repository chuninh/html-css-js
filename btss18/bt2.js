let toan = parseFloat(prompt("Nhập điểm Toán: "));
let van = parseFloat(prompt("Nhập điểm Văn: "));
let anh = parseFloat(prompt("Nhập điểm Anh: "));

let dtb = (toan + van + anh) / 3.0;


if (dtb >= 8) {
    alert("gioi");
} else if (dtb >= 6.5) {
    alert("kha");
} else if (dtb >= 5) {
   alert("trung binh");
} else {
    alert("yeu");
}

