let a =parseFloat(prompt("moi ban nhap canh 1"));
let b =parseFloat(prompt("moi ban nhap canh 2"));
let c =parseFloat(prompt("moi ban nhap canh 3"));
let a1 = Math.pow(a,2);
let b1 = Math.pow(b,2);
let c1 = Math.pow(c,2);
if(a+b>c && a+c>b && b+c>a){
    if(a==b && a==c){
        alert("tam giac deu");
    }else if(a==b ||a==c ||b==c){
        alert("tam giac can");
    }else if(a1 == b1 +c1 ||b1 == a1 + c1 ||c1 == a1 + b1){
        alert("tam giac vuong");
    }else{
        alert("tam giac thuong");
    }
}else{
    alert("ko phai tam giac")
}