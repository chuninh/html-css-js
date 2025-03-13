function numbers(arr){
    let number = prompt("moi ban nhap 1 so nguyen bat ki");
    arr = number.split("");
    
    if(Array.isArray(number)){
        let temp = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = arr.length - 1; j > i; j--) {
                if (arr[j] > arr[j - 1]) { 
                    temp = arr[j - 1];
                    arr[j - 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        let number1 = arr.join("");
        console.log(number1);
    }else{
        console.log("du lieu ko hop le");
    }
}
numbers();

