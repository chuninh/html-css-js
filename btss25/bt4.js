function sum(number){
    number =Number(prompt("moi ban nhap so nguyen duong"));
    if(!isNaN(number) && number % 1 ==0 && number >0){
        if(number ==2 || number ==3 || number ==5 ){
            console.log("la so nguyen to");
        }else if ( number % 2 != 0 && number % 3 != 0 && number % 5 != 0 ){
            console.log("la so nguyen to");
        }else{
            console.log("ko phai so nguyen to");
        }
    }else{
        console.log("du lieu ko hop le");
    }
    
}
sum();