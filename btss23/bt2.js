let test =0;
let arr=[];
for(i=0;i<10;i++){
    test = prompt("moi ban nhap phan tu muon them");
    arr.push(test);
}
let max = Number(arr[0]);
let vitri =0;

for(i=0;i<10;i++){
    if(arr[i]>max){
        max = arr[i];
        vitri = i
    }
}
console.log("so lon nhat la"+max);
console.log("vi tri"+vitri);
