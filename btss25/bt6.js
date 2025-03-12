function isPalindrome(strings){
    let test = true;
    strings=prompt("moi ban nhap 1 chuoi ki tu");
    for(i=0;i<strings.length;i++){
        if(strings[i]==strings[strings.length-i-1]){

        }else{
            test = false;
        }
    }
    if(test){
        console.log("la chuoi doi xung");
    }else{
        console.log("ko phai la chuoi doi xung");
    }
}
isPalindrome();