let products = [];
let count = 0;
function menu(choice, name, price, category, quantity,isFinite) {

    do {
        choice = +prompt(
            "==============MENU============\n1.Thêm sản phẩm vào danh sách sản phẩm.\n2.Hiển thị tất cả sản phẩm. \n3.Hiển thị chi tiết sản phẩm theo id.\n4.Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.\n5.Xóa sản phẩm theo id.\n6.Lọc sản phẩm theo khoảng giá\n7. Thoát chương trình\n=================================\n\n Lựa chọn của bạn:"
        );

        switch (choice) {
            case 1:
                name = prompt("moi ban nhap ten san pham");
                price = prompt("moi ban nhap gia sasn pham ");
                category = prompt("moi ban nhap danh muc san pham");
                quantity = prompt("moi ban nhap so luong san pham trong kho");
                let contact = {
                    id: count,
                    name: name,
                    price: price,
                    category: category,
                    quantity: quantity
                }
                count++;
                products.push(contact);

                break;
            case 2:
                console.log(products);
                break;
            case 3:
                id = +prompt("nhập id san pham muon xem");
                findIndex = products.findIndex(item => item.id == id);
                if (findIndex != -1) {
                    console.log(products[id].name);
                    console.log(products[id].price);
                    console.log(products[id].category);
                    console.log(products[id].quantity);
                } else {
                    console.log("không tìm thấy san pham có id là: ", id);
                }
                break;
            case 4:
                id = +prompt("nhập id san pham muốn cap nhap");
                findIndex = products.findIndex(item => item.id == id);
                if (findIndex != -1) {
                    products[id].name = prompt("moi ban nhap ten san pham");
                    products[id].price = prompt("moi ban nhap gia san pham ");
                    products[id].category = prompt("moi ban nhap danh muc san pham");
                    products[id].quantity = prompt("moi ban nhap so luong san pham");;
                } else {
                    console.log("không tìm thấy nhân viên có id là: ", id);
                }
                break;
            case 5:
                id = +prompt("nhập id san pham muon xoa ");
                findIndex =0;
                for (i = 0; i < products.length; i++) {
                    if (id == products[i].id) {
                        findIndex = 1;
                        let confitmDelete = confirm("bạn có muốn xóa hay không?");
                        if (confitmDelete) {
                            products.splice(i, 1);
                            console.log("xóa thành công!");
                        }
                    }
                }
                if (findIndex !=1) {
                    console.log("ko tim thay san pham co id la " + id);
                }
                break;
            case 6:
                let temp;
                for (let i = 0; i < products.length - 1; i++) {
                    for (let j = 0; j < products.length - 1 - i; j++) {
                        if (Number(products[j].price) > Number(products[j + 1].price)) {
                            temp = products[j];
                            products[j] = products[j + 1];
                            products[j + 1] = temp;
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
    } while (choice !== 7);
}
menu();