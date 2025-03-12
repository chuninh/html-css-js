let arr = [];
let chon;
let strings="";
do {
    chon = +prompt(
        "==============MENU============\n1.Nhập chuoi\n2. Hiển thị chuỗi\n3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi\n4.Đảo ngược chuỗi ký tự\n5.Đếm số lượng từ trong chuỗi ký tự\n6.Tìm kiếm và thay thế các ký tự (Do người dùng nhập vào) trong chuỗi gốc. Ví dụ người dùng nhập “e”, chuỗi gốc “Hello” → Tìm thấy ký tự. Cho người dùng nhập vào ký tự thay thế “o” → Output: “Hollo”\n7. Thoát chương trình\n=================================\n\n Lựa chọn của bạn:"
    );

    switch (chon) {
        case 1:
            strings =String(prompt("moi ban nhap 1 chuoi bat ky"));
            arr = strings.split("");
            break;
            
        case 2:
            alert(strings);
            break;
        case 3:
            alert("do dai cua chuoi la"+arr.length);
            break;
        case 4:
            
            let test =0;
            let search =prompt("moi ban nhap ki tu ");
            for(i=0;i<arr.length;i++){
                if(arr[i]==search){
                    test++;
                }
            }
            if(test >0){
                alert("ki tu "+search+"xuat hien "+test+"lan");
            }else{
                alert("mang ko co ki tu "+search);
            }
            break;
        case 5:
            let text = true;

            for (i = 0; i < arr.length; i++) {
                if (arr[i] == arr[arr.length - 1 - i]) {

                } else {
                    text = false;
                }
            }
            if (text) {
                alert("day la mang doi xung");
            } else {
                alert("mang ko doi xung");
            }

            break;
        case 6:
            
            break;

        case 7:
            alert("Chương trình kết thúc!");
            break;


        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
} while (chon !== 7);