let arr = [];
let chon;
let max = arr[0];
do {
    chon = +prompt(
        "==============MENU============\n1.Nhập mảng số nguyên\n2. Hiển thị mảng\n3.Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó\n4.Tính tổng và trung bình cộng của các số dương trong mảng\n5. Đảo ngược mảng\n6.Kiểm tra mảng có đối xứng không \n7. Thoát chương trình\n=================================\n\n Lựa chọn của bạn:"
    );

    switch (chon) {
        case 1:
            let length = +prompt("Nhập độ dài mảng:");
            arr = [];
            if (!isNaN(arr)) {
                for (let i = 0; i < length; i++) {
                    arr[i] = +prompt("Nhập phần tử thứ " + (i + 1) + ":");
                    if (isNaN(arr[i])) {
                        alert("ko phai so nguyen");
                    }
                }
            } else {
                alert("ko hop le");
            }
            break;
        case 2:
            alert(arr);
            break;
        case 3:
            max = arr[0];
            let viTri = 0;
            for (i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                    viTri = i;
                }
            }
            alert(max + "la so lon nhat trong day va nam o vi tri so" + viTri);

            break;
        case 4:
            let sum = 0;
            let tB = 0;
            let text = 0;
            for (i = 0; i < arr.length; i++) {
                if (arr[i] > 0) {
                    sum += arr[i];
                    text++;
                }
            }
            if (text == 0) {
                alert("ko co so nguyen duong");
            } else {
                tB = sum / text;
                alert(tB);
            }


            break;
        case 5:
            arr.reverse();
            alert(arr);
            break;
        case 6:
            let test = true;

            for (i = 0; i < arr.length; i++) {
                if (arr[i] == arr[arr.length - 1 - i]) {

                } else {

                    test = false;
                }
            }
            if (test) {
                alert("day la mang doi xung");
            } else {
                alert("mang ko doi xung");
            }

            break;

        case 7:
            alert("Chương trình kết thúc!");
            break;


        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
} while (chon !== 7);