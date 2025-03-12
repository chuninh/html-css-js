let test = 0;
let arr = [];
let n = prompt("moi ban nhap so phan tu muon them");
if (n < 0) {
    console.log("so luong phan tu ko hop le");
} else if (n == 0) {
    console.log("ko co ki tu so");
} else {
    for (i = 0; i < n; i++) {
        test = prompt("moi ban nhap phan tu muon them");
        arr.push(test);
    }
}
let a = 0;
let b = 1;
let c = 0;
let yes = true;
if (arr[0] == 0 && arr[1] == 1) {
    for (i = 2; i < n; i++) {
        if (arr[i] == a + b) {
            c = a + b;
            a = b;
            b = c;
        } else {
            console.log("ko phai day so  fibonacci");
            yes = false;
        }
    }
    if (yes) {
        console.log("day la day so  fibonacci");
    }
}else{
    console.log("ko phai day so  fibonacci");
}
