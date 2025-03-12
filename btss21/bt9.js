let num = Number(prompt("Nhập số: "));

if (num < 2) {
    console.log("Không hợp lệ, số phải lớn hơn hoặc bằng 2.");
} else {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) { 
        if (num % i === 0) { 
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num + " là số nguyên tố");
    } else {
        console.log(num + " không phải số nguyên tố");
    }
}
