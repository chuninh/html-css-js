let company = [];
let count = 0;
function menu(chon, id, name, position, salary,findIndex) {

    do {
        chon = +prompt(
            "==============MENU============\n1.Thêm nhân viên mới\n2.Xóa nhân viên theo id \n3. Cập nhật mức lương của nhân viên theo id\n4.Tìm kiếm nhân viên theo tên\n5. Thoát chương trình\n=================================\n\n Lựa chọn của bạn:"
        );

        switch (chon) {
            case 1:
                name = prompt("moi ban nhap ten cua ban");
                position = prompt("moi ban nhap vi tri ");
                salary = prompt("moi ban nhap muc luong ");
                let contact = {
                    id: count,
                    name: name,
                    position: position,
                    salary: salary
                }
                count ++;
                company.push(contact);
                console.log(company);
                
                break;
            case 2:
                id = +prompt("nhập id nhân viên muốn xóa");
                findIndex = company.findIndex(item => item.id == id);
                if (findIndex != -1) {
                    let confitmDelete = confirm("bạn có muốn xóa hay không?");
                    if (confitmDelete) {
                        company.splice(findIndex, 1);
                        console.log("xóa nhân viên thành công!");
                    }
                } else {
                    console.log("không tìm thấy nhân viên có id là: ", id);
                }
                console.log(company);
                break;
            case 3:
                id = +prompt("nhập id nhân viên muốn xóa");
                findIndex = company.findIndex(item => item.id == id);
                if (findIndex != -1) {
                    company[id].salary =prompt("moi ban nhap muc luong");
                }else{
                    console.log("không tìm thấy nhân viên có id là: ", id);
                }

                break;
            case 4:
                let searchName = prompt("moi ban nhap ten muon tim");
                let text = 0;
                for (i = 0; i < company.length; i++) {
                    if (company[i].name == searchName) {
                        console.log(company[i]);
                        text++;
                    }
                    if (text == 0) {
                        console.log("ko tim thay nguoi can tim");
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