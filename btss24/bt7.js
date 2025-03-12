let arr = [];
let chon;
let strings = "";

do {
    chon = +prompt(
        "==============MENU============\n1.Nhập chuoi\n2. Hiển thị chuỗi\n3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi\n4.Đảo ngược chuỗi ký tự\n5.Đếm số lượng từ trong chuỗi ký tự\n6.Tìm kiếm và thay thế các ký tự (Do người dùng nhập vào) trong chuỗi gốc. Ví dụ người dùng nhập “e”, chuỗi gốc “Hello” → Tìm thấy ký tự. Cho người dùng nhập vào ký tự thay thế “o” → Output: “Hollo”\n7. Thoát chương trình\n=================================\n\n Lựa chọn của bạn:"
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
            strings = strings.trim();
            break;
        case 4:

            for (i = 0; i < arr.length; i++) {
                arr[i] = arr[arr.length - 1 - i];
            }
            alert(arr);
            break;
        case 5:
            strings = strings.trim();
            let test = strings.split(" ");
            let count = 0;

            for (let i = 0; i < test.length; i++) {
                if (test[i] !== "") {
                    count++;
                }
            }
            alert("co"+count+"tu");
            break;
        case 6:
            let search = prompt("moi ban nhap ki tu muon thay ");
            let text = 0;
            for (i = 0; i < arr.length; i++) {
                if (arr[i] == search) {
                    text++;
                    let thay = String(prompt("moi ban nhap ki tu se thay the cho " + search + " thu " + text));
                    arr.splice(arr[i], 1, thay);
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