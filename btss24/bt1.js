let arr = [];
let chon;

do {
    chon = +prompt(
        "==============MENU============\n1.Nhập mảng\n2. Hiển thị mảng\n3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng\n4.  Tính tổng các phần tử trong mảng\n5.Tìm số lần xuất hiện của một phần tử trong mảng\n6. Sắp xếp mảng tăng dần \n7. Thoát chương trình\n=================================\n\n Lựa chọn của bạn:"
    );

    switch (chon) {
        case 1:
            let length = +prompt("Nhập độ dài mảng:");
            arr = [];
            for (let i = 0; i < length; i++) {
                arr[i] = +prompt("Nhập phần tử thứ " + (i + 1) + ":");
            }
            break;
        case 2:
            alert(arr);
            break;
        case 3:
            let max = arr[0];
            let min = arr[0];
            for (let i = 0; i < arr.length; i++) {
                if (max < arr[i]) {
                    max = arr[i];
                }
            }
            for (let i = 0; i < arr.length; i++) {
                if (min > arr[i]) {
                    min = arr[i];
                }
            }
            alert("giá trị lớn nhất là: " + max + "\n Giá trị nhỏ nhất là: " + min);
            break;
        case 4:
            let sum =0;
            for(i=0;i<arr.length;i++){
                sum += arr[i];
            }
            alert(sum);
            break;
        case 5:
            let search = prompt("moi ban nhap so muon tim");
            let text = 0;
                for (i = 0; i < arr.length; i++) {
                    if (search == arr[i]) {
                        text++;
                    }
                }
               
            if(text==0){
                alert("so" + search + "ko ton tai trong mang");
            }else{
                alert("so" + search + "xuat hien trong mang " + text + "lan");
            }
            
            break;
        case 6:
            let temp = 0;
            for (i = 0; i < arr.length; i++) {
                for (j = 0; j < arr.length; j++) {
                    if (arr[j] > arr[j + 1]) {
                        temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            alert(arr);
            break;

        case 7:
            alert("Chương trình kết thúc!");
            break;


        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
} while (chon !== 7);