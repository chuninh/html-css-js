function numbers(arr) {
    arr = [];
    let count = 0;
    let length = prompt("moi ban nhap so luong so muon nhap");
    if (length >= 10) {
        for (i = 0; i < length; i++) {
            arr[i] = Number(prompt("nhap so thu " + (i + 1) + ":"));
        }
        if (isNaN(arr)) {
            let even = arr.filter((num) => num % 2 ==0);
            let odd = arr.filter((num) => num % 2 != 0);
            let totalEven = Number(even.reduce((acc,curr) => acc + curr,0));
            let totalOdd = Number(odd.reduce((acc,curr) => acc + curr,0));
            console.log("totaleven ="+totalEven);
            console.log("totalodd ="+totalOdd);
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