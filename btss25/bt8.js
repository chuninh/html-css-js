function isStrongPassword(passWord) {
    passWord = prompt("moi ban nhap mat khau ");
    let testSo = false;
    let testThuong = false;
    let testHoa = false;
    
    if (passWord.length >= 8) {
        for (i = 0; i < passWord.length; i++) {
            if (passWord[i] % 1 == 0) {
                testSo = true;
            }
            if(passWord[i]===passWord[i].toUpperCase()){
                testHoa = true;
            }
            if(passWord[i]===passWord[i].toLowerCase()){
                testThuong = true;
            }
        }
    } else {
        console.log("false");
    }
    if (testHoa && testSo && testThuong) {
        console.log("true");
    }else{
        console.log("false");
    }
}
isStrongPassword();
