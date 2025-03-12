let a =prompt("moi ban nhap a");
let b =prompt("moi ban nhap b");
let c =prompt("moi ban nhap c");
let delta = Math.pow(b,2)-4*a*c;
let sprtdelta = Math.sqrt(delta);
if(delta>0){
    let x1 = (-b + sprtdelta) /(2*a);
    let x2 = (-b - sprtdelta) /(2*a);
    alert("phuong trinh co 2 nghiem phan biet: X1 ="+x1+";X2="+x2);
}else if(delta ==0){
    let x = -b /2/a;
    alert("phuong trinh co nghiem kep x="+x);
}else{
    alert("phuong trinh vo nghiem");
}