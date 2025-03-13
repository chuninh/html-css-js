function number(arr){
    
    if(Array.isArray(arr)){
       for(i=1;i<arr.length;i++){
        if(arr[i] -1 != arr[i-1]){
            let number = arr[i]-1;
            console.log(number);
        }
       }
    }else{
        console.log("du lieu ko hop le");
    }
}
number([1,2,3,5]);
number([1,2,4,5]);
number("abc");
