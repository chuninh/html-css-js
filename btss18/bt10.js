const ones = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
const teens = ["mười", "mười một", "mười hai", "mười ba", "mười bốn", "mười lăm", "mười sáu", "mười bảy", "mười tám", "mười chín"];
const tens = ["", "mười", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];

let num = parseInt(prompt("Nhập một số từ 0 đến 999:"));
if (num < 0 || num > 999 || isNaN(num)) {
    alert("Số không hợp lệ");
} else {
    let words = "";
    let hundred = Math.floor(num / 100);
    let remainder = num % 100;
    let ten = Math.floor(remainder / 10);
    let one = remainder % 10;

    if (hundred > 0) {
        words += ones[hundred] + " trăm";
        if (remainder > 0) {
            words += " ";
        }
    }

    if (remainder > 0) {
        if (remainder < 10) {
            words += "lẻ " + ones[one];
        } else if (remainder < 20) {
            words += teens[one];
        } else {
            words += tens[ten];
            if (one > 0) {
                words += " " + ones[one];
            }
        }
    }

    alert(words);
}
