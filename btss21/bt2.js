let n =0;
let chan=0;
let le =0;
for(i=0;i<5;i++){
    n=Number(prompt("moi ban nhap so"));
    if(n % 2 !== 0){
        le ++;
    }else{
        chan++;
    }
}
console.log("co"+chan+"so chan");
console.log("co"+le+"so le");
