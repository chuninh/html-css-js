function number(arr) {
    arr = [];
    for (i = 0; i < 10; i++) {
        arr[i] = prompt("nhap phan tu thu " + (i + 1) + ":");
    }
    if (isNaN(arr)) {
       if(arr.length>0){
          let pow = arr.map((num) => num *num);
          let numberEven = pow.filter((num) => num % 2 ==0);

          console.log(numberEven);
       }else{
        console.log("mang ko co phan tu");
       }
    }else{
        console.log("du lieu ko hop le");
    }
}
number();