function numbers(arr) {
    arr = [];
    let arr1 =[];
    let count = 0;
    let length = prompt("moi ban nhap so luong so muon nhap");
    if (length >= 10) {
        for (i = 0; i < length; i++) {
            arr[i] = prompt("nhap so thu " + (i + 1) + ":");
        }
        if (isNaN(arr)) {
            for (i = 0; i < arr.length; i++) {
                if (arr[i] == 2 || arr[i] == 3 || arr[i] == 5) {
                    arr1.push(arr[i]);
                }else if(arr[i] % 2 != 0 && arr[i] % 3 != 0 && arr[i] % 5 != 0 && arr[i] >=2) {
                    arr1.push(arr[i]);
                }
                if (arr[i].length == 0) {
                    count++;
                }
            }
            if(arr1.length>0){
                console.log(arr1);
            }
        } else {
            console.log("ko hop le");
        }
        if (count == arr.length) {
            console.log("mang ko co phan tu");
        }
    } else {
        alert("ko hop le");
    }
}
numbers();