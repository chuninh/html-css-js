let n =0;
let sum=0;
for(i=0;i<5;i++){
    n=Number(prompt("moi ban nhap so"));
    if(n % 2 !== 0){
        sum += n;
    }
}
alert("tong cac so le la:"+sum);