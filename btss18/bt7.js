let number1 = Number(prompt("Mời bạn nhập vào số a: "));
let number2 = Number(prompt("Mời bạn nhập vào số b: "));
let count = prompt("Mời bạn nhập vào các phép tính(+,-,*,/): ");

let result;
switch (count) {
    case "+":
        result = number1 + number2;
        break;
    case "-":
        result = number1 - number2;
        break;
    case "*":
        result = number1 * number2;
        break;
    case "/":
        result = number2 !== 0 ? number1 / number2 : "Không thể chia cho 0";
        break;
    default:
        result = "Phép toán không hợp lệ!"; 
}

alert("kết quả của phép tính trên: " + number1 + count + number2 + "=" + result);