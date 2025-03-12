let name1 = prompt("moi ban nhap ten dang nhap");
if(name1 == "ADMIN"){
    let pass =prompt("moi ban nhap mat khau");
    if(pass == "TheMaster"){
        alert("Welcome");
    }else if(pass =="null" ){
        alert("Cancelled");
    }else{
        alert("Wrong password");
    }
}else if ( name1 =="null"){
    alert("Cancelled");
}else{
    alert("I Don't know you");
}