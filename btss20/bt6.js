let n=prompt("moi ban nhap vao so nguyen");
if (!isNaN(n)) {
    if(n ==2||n==3||n==5){
        alert("la so nguyen to")

    }else{
        if(n%2 !=0 && n%3 !=0 && n%5 !=0){
            alert("la so nguyen to");
        }else{
            alert("ko phai la so nguyen to");
        }
    }
}else{
    alert("ko phai so nguyen");
}