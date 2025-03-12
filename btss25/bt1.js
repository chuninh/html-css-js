function min(arr) {
    let min = arr[0];
    if (arr.length == 0) {
        console.log("mang ko chua phan tu");
    } else if (!isNaN(arr)) {
        console.log("gia tri ko hop le");
    } else {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        console.log("phan tu nho nhat trong mang la" + min);
    }
}
min([2, 3, 4, 5]);