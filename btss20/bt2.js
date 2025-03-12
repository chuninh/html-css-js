let n = prompt("moi nhap so");
if (n >= 1) {

    document.write("cac so chia het cho 5 tu 1 den"+n+"la:");
    for (i = 1; i <= n; i++) {
        if (i % 5 == 0) {
            document.write(i + ",");
        }
    }
} else {
    alert("du lieu nhap vao ko hop le");
}