let number = Number(prompt("Nhập một số:"));
    if (!isNaN(number)) {
        let binary = number.toString(2);
        alert(`Số nhị phân của ${number} là: ${binary}`);
    } else {
        alert("Vui lòng nhập một số hợp lệ.");
    }