let month = prompt ("moi ban nhap thang");

if(month ==1 ||month ==3||month ==5||month==7||month==8||month==10||month==12){
    alert("thang"+month+"co 31 ngay")
}else if(month ==4 ||month ==6||month ==9||month==11){
    alert("thang"+month+"co 30 ngay");
}else if(month ==2){
    alert("thang"+month+"co 28 ngay hoac 29 ngay neu la nam nhuan");
}else{
    alert("thang ko hop le");
}