let numbers = prompt("moi ban nhap day so co 5 chu so");
arr = numbers.split("");
let sumLe=0;
let sumChan=0;
if(numbers.length=5 && !isNaN(numbers)){
    for(i=0;i<5;i++){
        if(arr[i] % 2==0){
            sumChan += Number(arr[i]);
        }else{
            sumLe += Number(arr[i]);
        }
    }
    console.log("tong cac so le la ="+sumLe);
    console.log("tong cac so chan la ="+sumChan);
}else{
    console.log("ko hop le");
}
