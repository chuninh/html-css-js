let hundred =0;
let one =0;
let ten =0;
let sum =0;
for (i = 100; i <= 999; i++) {
    hundred = (Math.floor(i / 100));
    one = (i % 10);
    ten = (i - hundred * 100 - one) / 10;
    sum = (Math.pow(one, 3) + Math.pow(ten, 3) + Math.pow(hundred, 3));
    if (i == sum) {
        console.log("so Armstrong la"+sum);
    } 
}