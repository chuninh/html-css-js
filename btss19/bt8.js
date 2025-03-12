let month =prompt("nhap thang trong nam");
if(month>=1 &&month <=3){
    alert("mua xuan");
}else if(month<=6&&month>=4){
    alert("mua ha");
}else if(month<=9 && month >=7){
    alert("mua thu");
}else if(month<=12 && month >=10){
    alert("mua dong");
}else{
    alert("thang ko kop le");
}