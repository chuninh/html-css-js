let test = 0;
let arr = [];
let n = prompt("moi ban nhap so phan tu muon them");
if (n < 0) {
    console.log("so luong phan tu ko hop le");
} else if (n == 0) {
    console.log("mang ko co phan tu");
} else {
    for (i = 0; i < n; i++) {
        test = prompt("moi ban nhap phan tu muon them");
        arr.push(test);
    }
}
console.log(arr);
let count = 0;
let sum =0;
for (i = 0; i < n; i++) {
    if (isNaN(arr[i])) {
        
    }else{
        sum += Number(arr[i]);
        count++;
    }
}
if(count==0){
    console.log("ko co phan tu so");
}else{
    console.log(sum);
}
