let n = Number(prompt("Nhập số nguyên dương n: "));
let count = 0;
let num = 2;

while (count < n) {
    let isPrime = true;

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
        count++;
    }

    num++;

console.log(primes.trim()); 

}