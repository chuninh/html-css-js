function menu(chon) {
let arr = [];

do {
    chon = +prompt(
        "==============MENU============\n1.Nhập danh sách sinh viên.\n2. Hiển thị danh sách sinh viên\n3. Tìm sinh viên theo tên.\n4. Xóa sinh viên khỏi danh sách \n5. Thoát chương trình\n=================================\n\n Lựa chọn của bạn:"
    );

    switch (chon) {
        case 1:
            let length = +prompt("so luong sinh vien muon them:");
            arr = [];
            for (let i = 0; i < length; i++) {
                arr[i] = prompt("Nhập sinh vien thứ " + (i + 1) + ":");
            }
            break;
        case 2:
            alert(arr);
            break;
        case 3:
            let search =prompt("moi ban nhap ten sinh vien muon tim");
            let test = true;
            for(i=0;i<arr.length;i++){
                if(arr[i] == search){
                    console.log(arr[i]);
                    test = false;
                }
                if(test){
                    alert("sinh viên không có trong danh sách .");
                }
            }
            break;
        case 4:
            let deletes = prompt("moi ban nhap ten sinh vien muon xoa");
            let test1 = true;
            if(test1){
                for(i=0;i<arr.length;i++){
                    if(arr[i] == deletes){
                        test1 =false;
                        arr.splice(i,1);
                    }
                }
            }
            break;
        case 5:
            alert("Chương trình kết thúc!");
            break;


        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
} while (chon !== 5);
}
menu();