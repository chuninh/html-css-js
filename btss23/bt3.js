let test = 0;
let arr = [];
let n = prompt("moi ban nhap so phan tu muon them");
if (n < 0 && isNaN(n)) {
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
for (i = 0; i < n; i++) {
    if (arr[i] < 0) {
        count++;
    }
}
if(count ==0){
    console.log("mang ko co so am");
}else{
    console.log(count);
}