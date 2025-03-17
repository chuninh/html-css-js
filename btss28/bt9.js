let library = [];
let count = 0;
function menu(chon, name, isAvailable,title,author,price,year, findIndex) {

    do {
        chon = +prompt(
            "==============MENU============\n1.Thêm sách mới\n2.Hiển thị danh sách sách \n3. Tìm kiếm sách theo tiêu đề\n4.Cập nhật trạng thái mượn/trả sách theo id sách\n5.Xóa sách theo id sách ra khỏi danh sách\n6.Sắp xếp sách theo giá tăng dần.\n7. Thoát chương trình\n=================================\n\n Lựa chọn của bạn:"
        );

        switch (chon) {
            case 1:
                title = prompt("moi ban nhap ten cua cuon sach");
                author = prompt("moi ban nhap ten cua tac gia ");
                price = prompt("moi ban nhap gia tien");
                year = prompt("moi ban nhap nam xuat ban");
                isAvailable = true;
                let contact = {
                    id: count,
                    title: title,
                    author: author,
                    price: price,
                    year: year,
                    isAvailable: isAvailable
                }
                count++;
                library.push(contact);

                break;
            case 2:
                console.log(library);
                break;
            case 3:
                let searchName = prompt("moi ban nhap ten sach muon tim");
                let text = 0;
                for (i = 0; i < library.length; i++) {
                    if (library[i].title == searchName) {
                        console.log(library[i]);
                        text++;
                    }
                    if (text == 0) {
                        console.log("ko tim thay cuon sach can tim");
                    }
                }
                break;
            case 4:
                id = +prompt("nhập id cuon sach muon cap nhap ");
                for (i = 0; i < library.length; i++) {
                    if (id == library[i].id) {
                        findIndex = 0;
                        if (library[i].isAvailable == true) {
                            library[i].isAvailable = false;
                            console.log("da muon sach co id la " + id);
                        } else {
                            library[i].isAvailable = true;
                            console.log("da tra sach co id la " + id);
                        }
                    }
                }
                if (findIndex) {
                    console.log("ko tim thay sach co id la " + id);
                }
                break;
            case 5:
                id = +prompt("nhập id cuon sach muon xoa ");
                for (i = 0; i < library.length; i++) {
                    if (id == library[i].id) {
                        findIndex = 0;
                        let confitmDelete = confirm("bạn có muốn xóa hay không?");
                        if (confitmDelete) {
                            library.splice(findIndex, 1);
                            console.log("xóa thành công!");
                        }
                    }
                }
                if (findIndex) {
                    console.log("ko tim thay sach co id la " + id);
                }
                break;
            case 6:
                let temp;
                for (let i = 0; i < library.length - 1; i++) {
                    for (let j = 0; j < library.length - 1 - i; j++) {
                        if (Number(library[j].price) > Number(library[j + 1].price)) {
                            temp = library[j];
                            library[j] = library[j + 1];
                            library[j + 1] = temp;
                        }
                    }
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
}
menu();