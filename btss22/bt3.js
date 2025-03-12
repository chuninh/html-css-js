let numbers =prompt("nhập dãy số bất kì");
arr = numbers.split("");
arr.reverse();
if (!isNaN(numbers)) {
    for (i = 0; i < numbers.length; i++) {
        (arr[i] == numbers[i])
        console.log(arr);  
        }
} else{
    console.log("không hợp lệ");
}
