let n =prompt("moi ban nhap ");
let tong = 0;
if(n>=1){
for( i=1;i<=n;i++){
    tong += i;
}
}else{
    alert("du lieu nhap vao ko hop le");
}
alert(tong)