document.write("a.<br>");
for(let i=0;i<10;i++){
    for (let j = 10; j >0+i ; j--) {
       document.write("*");
    }
    document.write("<br>");
}

document.write("b.<br>");
for(let i=10;i>0;i--){
    for (let j = 11; j >i ; j--) {
       document.write("*");
    }
    document.write("<br>");
}

document.write("c.<br>");
for(let i=1;i<11;i++){
    for (let j = 11; j >0 ; j--) {
       if (j>i) {
        document.write(" -");
       }else{
    
        document.write("*");
       }
       
    }
    document.write("<br>");
}

document.write("d.<br>");
for(let i=11;i>0;i--){
    for (let j = 11; j >0 ; j--) {
       if (j>i) {
        document.write(" -");
       }else{
    
        document.write("*");
       }
       
    }
    document.write("<br>");
}
