function emails(arr) {
    arr = [];
    let count = 0;
    let test1 = false;
    let test2 = true;
    let length = prompt("moi ban nhap so email muon nhap");
    for (i = 0; i < length; i++) {
        arr[i] = String(prompt("nhap email thu " + (i + 1) + ":"));
    }
    if (length > 0) {
        for (i = 0; i < arr.length; i++) {
            if (arr[i].includes("@")) {
                test1 = true;
            }
            if (arr[i].length == 0) {
                count++;
            }
            if (arr[i].includes(" ")) {
                test2 = false;
            }
            if(test1 ){
                console.log(arr[i]);
            }
        }
        if (count == arr.length) {
            console.log("mang ko co phan tu");
        }

    } else {
        alert("ko hop le");
    }
}
emails();