let numbers =[1,3,5,6,8,9,0];
let search=prompt("moi ban nhap so muon tim");
let yes = true;
for(i=0;i<numbers.length;i++){
    if (search == numbers[i]){
        console.log("Bingo");
        yes = false;
    }
}
if (yes){
    console.log("Chúc bạn may mắn lần sau");
}