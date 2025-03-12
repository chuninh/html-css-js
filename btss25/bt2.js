function sum(number1,number2){
    number1 =Number(prompt("moi ban nhap so nguyen thu 1"));
    number2 = Number(prompt("moi ban nhap so nguyen thu 2"));
    let sum = number1 + number2;
    if(!isNaN(number1) && !isNaN(number2) && number1 % 1 ==0&& number2 % 1 ==0){
        console.log(sum);
    }else{
        console.log("du lieu ko hop le");
    }
    
}
sum();