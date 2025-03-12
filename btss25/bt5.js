function numberPositive(arr) {
    let positive = 0;

    if (!isNaN(Number) && number % 1 != 0) {
        console.log("gia tri ko hop le");
    } else {
        for (i = 0; i < arr.length; i++) {
            if(arr[i]>0){
                positive++;
            }
        }
        if(positive>0){
            console.log(positive);
        }else{
            console.log("mang ko co so nguyen duong");
        }
        
    }

}
numberPositive([2, 3, 4, 5, -4, -6, 8, -9]);