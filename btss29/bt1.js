let contactList = [];
let count = 0;
function menu(chon, name, email, phone, isFinite) {

    do {
        chon = +prompt(
            "==============MENU============\n1.Thêm đối tượng Contact vào danh sách liên hệ.\n2.Hiển thị danh sách danh bạ. \n3.Tìm kiếm thông tin Contact theo số điện thoại\n4.Cập nhật thông tin Contact(name, email, phone) theo id\n5.Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id\n6. Thoát chương trình\n=================================\n\n Lựa chọn của bạn:"
        );

        switch (chon) {
            case 1:
                name = String(prompt("moi ban nhap ten"));
                email = String(prompt("moi ban nhap email "));
                phone = String(prompt("moi ban nhap so dien thoai"));
                let contact = {
                    id: count,
                    name: name,
                    email: email,
                    phone: phone
                }
                count++;
                contactList.push(contact);

                break;
            case 2:
                console.log(contactList);
                break;
            case 3:
                phone = +prompt("moi ban nhap so dien thoai muon tim");
                isFinite = 0;
                for (i = 0; i < contactList.length; i++) {
                    if (phone == contactList[i].phone) {
                        console.log(contactList[i]);
                        isFinite++;
                    }
                    if (isFinite == 0) {
                        console.log("ko tim thay nguoi dung");
                    }
                }
                break;
            case 4:
                id = +prompt("nhập id nhân viên muốn cap nhap");
                findIndex = contactList.findIndex(item => item.id == id);
                if (findIndex != -1) {
                    contactList[id].name = prompt("moi ban nhap ten");
                    contactList[id].email = prompt("moi ban nhap email ");
                    contactList[id].phone = prompt("moi ban nhap so dien thoai");
                } else {
                    console.log("không tìm thấy nguoi dung có id là: ", id);
                }
                break;
            case 5:
                id = +prompt("nhập id cuon sach muon xoa ");
                for (i = 0; i < contactList.length; i++) {
                    if (id == contactList[i].id) {
                        findIndex = 0;
                        let confitmDelete = confirm("bạn có muốn xóa hay không?");
                        if (confitmDelete) {
                            contactList.splice(i, 1);
                            console.log("xóa thành công!");
                        }
                    }
                }
                if (findIndex) {
                    console.log("ko tim thay nguoi dung co id la " + id);
                }
                break;
            case 6:
                alert("Chương trình kết thúc!");
                break;

            default:
                alert("Lựa chọn không hợp lệ!");
                break;
        }
    } while (chon !== 6);
}
menu();