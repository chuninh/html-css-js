let money=prompt("moi ban nhap so tien");
let money1=prompt("loai tien muon doi vnd||usd");

if(money1== "vnd"){
    let vnd = money *23000;
    alert(vnd+"vnd");
}else if(money1=="usd"){
    let usd = money / 23000;
    alert(usd+"usd");
}else{
    alert("loai tien ko hop le");
}