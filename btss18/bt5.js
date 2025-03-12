let year =parseFloat(prompt("nhap so nam kinh nghiem"));
if(year<1){
    alert("nham vien moi vao nghe");
}else if(year<=3){
    alert("nhan vien co kinh nghiem");
}else if(year<=6 && year >=4){
    alert("chuyen vien");
}else{
    alert("quan ly");
}