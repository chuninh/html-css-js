let numbers = prompt("moi ban nhap day so bat ky");
arr = numbers.split("");
let max = arr[0]; 
if (!isNaN(numbers)) {
    for (i = 0; i < numbers.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max + "la so lon nhat trong day");
}else{
    console.log("ko hop le");
}

