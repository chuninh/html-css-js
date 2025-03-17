let restaurants = [];
const count = 0;
function menu(choice, name, price, description,restaurant) {

    do {
        choice = +prompt(
            "==============MENU============\n1.Thêm món ăn vào danh mục.\n2.Xóa món ăn theo tên khỏi danh mục. \n3.Cập nhật thông tin theo tên của món ăn  (tên, giá, mô tả).\n4.Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.\n5.Tìm kiếm món ăn theo tên trong toàn bộ menu.\n6. Thoát chương trình\n=================================\n\n Lựa chọn của bạn:"
        );

        switch (choice) {
            case 1:
                name = prompt("moi ban nhap ten mon an");
                price = prompt("moi ban nhap gia mon an ");
                description = prompt("moi ban nhap mo ta mon an");
                restaurant = {
                    name: name,
                    contact: {
                        name: name,
                        price: price,
                        description: description
                    }
                }

                restaurants.push(restaurant);
                break;
            case 2:
                name = +prompt("moi ban nhap ten mon an muon xoa");
                findIndex = 0;
                for (i = 0; i < restaurants.length; i++) {
                    if (name == restaurants[i].name) {
                        findIndex = 1;
                        let confitmDelete = confirm("bạn có muốn xóa hay không?");
                        if (confitmDelete) {
                            restaurants.splice(i, 1);
                            console.log("xóa thành công!");
                        }
                    }
                }
                if (findIndex != 1) {
                    console.log("ko tim thay mon an muon xoa la ");
                }
                break;
            case 3:
                name = +prompt("moi ban nhap ten mon an muon cap nhap");
                findIndex = 0;
                for (i = 0; i < restaurants.length; i++) {
                    if (name == restaurants[i].name) {
                        findIndex = 1;
                        restaurant.name = prompt("moi ban nhap ten mon an");
                        restaurant.contact.name = restaurant.name;
                        restaurant.contact.price = prompt("moi ban nhap gia mon an");
                        restaurant.contact.description=prompt("moi ban nhap mo ta mon an");
                    }
                    if(findIndex !=1){
                        console.log("không tìm thấy mon an co ten là: ", name);
                    }
                }
                break;
            case 4:
                console.log(restaurants);
                break;
            case 5:
                name = +prompt("moi ban nhap ten mon an muon cap nhap");
                findIndex = 0;
                for (i = 0; i < restaurants.length; i++) {
                    if (name == restaurants[i].name) {
                        findIndex = 1;
                        console.log("ten mon an la"+restaurant.name);
                        console.log("gia mon an la"+restaurant.contact.price);
                        console.log("mo ta mon an la"+restaurant.contact.description);
                    }
                    if(findIndex !=1){
                        console.log("không tìm thấy mon an co ten là: ", name);
                    }
                }
                break;
            case 6:
                alert("Chương trình kết thúc!");
                break;

            default:
                alert("Lựa chọn không hợp lệ!");
                break;
        }
    } while (choice !== 6);
}
menu();