let number=+prompt("Mời bạn nhập số");

if(Number.isInteger(number)){
    document.write("Ước của "+number+" là: ");
    number =Math.abs(number);
  for(let i=1;i<=number;i++){
       if(number%i==0){
        document.write(i+" ");
        document.write("-"+i+" ")
       }
  }
}else{
    alert("Nhập không hợp lệ");
}