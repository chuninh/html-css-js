function number(arr){
    let test = true;
    let test1 = true;
    if(Array.isArray(arr)){
        for(i=2;i<arr.length;i++){
           if(arr[i] - arr[i-1] != arr[i-1] -arr[i-2]){
              test =false;
           }
        }
        if(test && test1){
            console.log("true");
        }else{
            console.log("false");
        }
    }else{
        console.log("du lieu ko hop le");
    }
}
number([2,4,6,8]);
number([3,6,9,12,14]);
number("abc");
