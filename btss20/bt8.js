let n = Number(prompt("Nhập số nguyên dương n: ")); 

if (n <= 0) {
    console.log("Không hợp lệ");
} else {
    let count = 0; 
    let num = 2;   
    let primes = ""; 

    while (count < n) {
        let isPrime = true; 

        for (let i = 2; i <= Math.sqrt(num); i++) { 
            if (num % i === 0) { 
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes += num + " "; 
            count++; 
        }

        num++; 
    }

    console.log(primes.trim()); 
}