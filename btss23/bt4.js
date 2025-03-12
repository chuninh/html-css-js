let test = 0;
let arr = [];
let n = prompt("moi ban nhap so phan tu muon them");
if (n < 0) {
    console.log("so luong phan tu ko hop le");
} else if (n == 0) {
    console.log("ko co ki tu so");
} else {
    for (i = 0; i < n; i++) {
        test = prompt("moi ban nhap phan tu muon them");
        arr.push(test);
    }
}
console.log(arr);
let count = 0;
for (i = 0; i < n; i++) {
    if (isNaN(arr[i])) {
        
    }else{
        console.log(arr[i]);
        count++;
    }
}
if(count==0){
    console.log("ko co ki tu so");
}
