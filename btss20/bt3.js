let number = prompt("Mời bạn nhập số:");
if (isNaN(number) || !Number.isInteger(Number(number))) {
    alert("Số không hợp lệ");
} else {
    let text_number = number.toString();
    let isSymmetric = true;

    for (let i = 0; i < Math.floor(text_number.length / 2); i++) {
        if (text_number[i] !== text_number[text_number.length - 1 - i]) {
            isSymmetric = false;
            break;
        }
    }

    if (isSymmetric) {
        alert("Đây là số đối xứng");
    } else {
        alert("Đây không phải là số đối xứng");
    }
}