let arr = [];
let chon;
let strings = "";

do {
    chon = +prompt(
        "==============MENU============\n1.Nhập chuoi\n2. Hiển thị chuỗi\n3.Đếm số lượng các ký tự là chuỗi và số trong chuỗi ký tự nhập vào\n4. Chuyển đổi các ký tự viết hoa → viết thường, viết thường → viết hoa trong chuỗi\n5. Trộn lẫn các ký tự của chuỗi gốc với chuỗi thứ 2 người dũng nhập vào\n6.Tách chuỗi thành các từ, sắp xếp chúng theo độ dài của từ, từ ngắn nhất đến dài nhất.\n7. Thoát chương trình\n=================================\n\n Lựa chọn của bạn:"
    );

    switch (chon) {
        case 1:
            strings = prompt("moi ban nhap 1 chuoi bat ky");
            arr = strings.split("");
            break;
        case 2:
            alert(strings);
            break;
        case 3:
            let so = 0;
            let chu = 0;
            for (i = 0; i < arr.length; i++) {
                if (isNaN(arr[i])|| arr[i] == " ") {
                    chu++;
                } else {
                    so++;
                }
            }
            if (chu == 0) {
                alert("ko co ki tu chuoi");
            } else {
                alert("so luong ki tu chuoi trong chuoi la" + chu);
            }
            if (so == 0) {
                alert("chuoi ko co so");
            } else {
                alert("chuoi co " + so + "ki tu la so");
            }
            break;
        case 4:
            let chuoiMoi2 ="";
            for(i=0;i<arr.length;i++){
                if(arr[i]===arr[i].toUpperCase()){
                    chuoiMoi2 += arr[i].toLowerCase();
                }else{
                    chuoiMoi2 += arr[i].toUpperCase()
                }
            }
            alert(chuoiMoi2);
            break;
        case 5:
            let strings2 = prompt("moi ban nhap chuoi moi");
            let kiTu = [];
            for (let i = 0; i < strings2.length; i++) {
                kiTu.push(strings2[i]);
            }
            for (let i = 0; i < strings.length; i++) {
                kiTu.push(strings[i]);
            }
            for (let i = kiTu.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let temp = kiTu[i];
                kiTu[i] = kiTu[j];
                kiTu[j] = temp;
            }
            let chuoiMoi = "";
            for (let i = 0; i < kiTu.length; i++) {
                chuoiMoi += kiTu[i];
            }

            console.log("Chuỗi ký tự sau khi trộn:", chuoiMoi);
            break;
        case 6:
            let test = strings.split(" ");

            for (let i = 0; i < test.length - 1; i++) {
                for (let j = 0; j < test.length - i - 1; j++) {
                    if (test[j].length > test[j + 1].length) {
                        let temp = test[j];
                        test[j] = test[j + 1];
                        test[j + 1] = temp;
                    }
                }
            }

            let sortString = test.join(" ");

            alert("Chuỗi sau khi sắp xếp từ ngắn đến dài:" + sortString);
            break;

        case 7:
            alert("Chương trình kết thúc!");
            break;


        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
} while (chon !== 7);