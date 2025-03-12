let year =Number(prompt("moi ban nhap nam"));
if(year % 4 ==0 && year % 100 !==0 || year %400 ==0){
    alert("nam"+year+"la nam nhuan");
}else{
    alert("nam"+year+"ko phai la nam nhuan");
}