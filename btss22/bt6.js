let arr=[1,2,4,5,6,5,2,9,2,9];
let search=prompt("moi ban nhap so muon tim");
let text =0;
if(!isNaN(search) ){
    for(i=0;i<10;i++){
        if(search == arr[i]){
            text ++;
        }
    }
    console.log("so"+search+"xuat hien trong mang "+text+"lan");
}else{
    console.log("ko hop le");
}
if(text ==0){
    console.log("so"+search+"ko ton tai trong mang");
}