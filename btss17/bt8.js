let date1 = prompt("Nhập ngày thứ nhất (YYYY-MM-DD): ");
let date2 = prompt("Nhập ngày thứ hai (YYYY-MM-DD): ");

let d1 = new Date(date1);
let d2 = new Date(date2);

if (isNaN(d1) || isNaN(d2)) {
    console.log("Ngày nhập không hợp lệ. Vui lòng nhập đúng định dạng YYYY-MM-DD.");
} else {
    let timeDiff = Math.abs(d2 - d1);
    let dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    alert("lech"+dayDiff+"ngay");
}
