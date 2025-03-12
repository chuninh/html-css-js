let test =0;
let arr=[];
for(i=0;i<10;i++){
    test = prompt("moi ban nhap phan tu muon them");
    arr.push(test);
}
let yes =true;
for(i=0;i<10;i++){
    if(arr[i]>=10){
        console.log(arr[i]);
        yes = false;
    }
}
if(yes){
    console.log("ko co so nao lon hon 10")
}
