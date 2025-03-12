function numberEven(arr) {
    let even =[];
    let count = 0;
    if (arr.length == 0) {
        console.log("mang ko chua phan tu");
    } else if (!isNaN(arr)) {
        console.log("gia tri ko hop le");
    } else {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] % 2 ==0) {
                even.push(arr[i]);
                count++;
            }
        }
        if(count>0){
            console.log(even);
        }else{
            console.log("mang ko co so chan");
        }
        
    }
}
numberEven([2, 3, 4, 5]);