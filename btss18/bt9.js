let hour = Number(prompt ("moi ban nhap gio"));
let minutes = Number(prompt ("moi ban nhap phut"));
let second = Number(prompt ("moi ban nhap giay"));

if(hour >=12 && hour <24){
    let hourPm = hour -12;
    alert(hourPm+":"+minutes+":"+second+"am");
}else if(hour<12 && hour >=0){
    let hourPm = hour +12;
    alert(hourPm+":"+minutes+":"+second+"pm");
}else{
    alert("gio ko hop le");
}