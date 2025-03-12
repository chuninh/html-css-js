let string =prompt("moi ban nhap 1 chuoi");
let search=prompt("moi ban nhap ki tu can tim");
let yes =-1;
for(i=0;i<string.length;i++){
    if(string.charAt(i)===search){
        yes =1;
    }
}
if(yes ==1){
    alert("ton tai tu can tim kiem");
}else{
    alert("ko ton tai ki tu can tim");
}