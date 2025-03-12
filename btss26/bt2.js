function strings(arr) {
    arr = [];
    let count=0;
    let length = prompt("moi ban nhap so chuoi muon nhap");
    for (i = 0; i < length; i++) {
        arr[i] = prompt("nhap chuoi thu " + (i + 1) + ":");
    }
    if (length > 0) {
        for (i = 0; i < arr.length; i++) {
            if (arr[i].length > 5) {
                console.log(arr[i]);
            }
            if(arr[i].length ==0){
                count ++;
            }
        }
        if(count == arr.length){
            console.log("mang ko co phan tu");
        }
    } else {
        alert("ko hop le");
    }
}
strings();