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
let max = Number(arr[0]);
let vitri =0;
for(i=0;i<n;i++){
    if(arr[i]>max){
        max = arr[i];
        vitri = i
    }
}
arr.splice(vitri,1);
max = Number(arr[0]);
for(i=0;i<n-1;i++){
    if(arr[i]>max){
        max = arr[i];
    }
}


console.log("so lon thu 2 la "+max);
