let products = [];
let cart = [];
let count = 0;
function menu(choice, name, price, company, quantity, isFinite) {

    do {
        choice = +prompt(
            "==============MENU============\n1.Hiển thị danh sách sách theo thể loại (Người dùng chọn thể loại để xem sách trong danh mục đó).\n2.Thêm sách mới vào kho \n3.Tìm kiếm sách theo tên hoặc id.\n4.Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).\n5.Sắp xếp sách theo giá\n6.Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng\n7.Hiển thị tổng số lượng sách trong kho.\n8. Thoát chương trình\n=================================\n\n Lựa chọn của bạn:"
        );

        switch (choice) {
            case 2:
                name = prompt("moi ban nhap ten dt");
                price = prompt("moi ban nhap gia dt ");
                company = prompt("moi ban nhap hang dt:1.samsung \n2.iphone \n3.xiaomi");
                if(company ==1){
                    company ="samsung";
                }else if(company ==2){
                    company ="iphone";
                }else if(company ==3){
                    company ="xiaomi";
                }
                quantity = prompt("moi ban nhap so luong dt "+company);
                let contact = {
                    id: count,
                    name: name,
                    price: price,
                    company : company,
                    quantity: quantity
                }
                count++;
                products.push(contact);

                break;
            case 1:
                company = +prompt("moi ban nhap hang dien thoai muon hien thi");
                let resutl = products.filter(item => item.company == company);
                if (resutl.length == 0) {
                    console.log("ko co the loai sach ma ban muon xem");
                } else {
                    console.log(resutl);
                }
                break;
            case 4:
                id = +prompt("nhập id san pham muon mua ");
                findIndex = 0;
                for (i = 0; i < products.length; i++) {
                    if (id == products[i].id) {
                        findIndex = 1;
                        let n = Number(prompt("moi ban nhap so luong muon mua"));
                        if (products[i].quantity >= n) {
                            products[i].quantity = products[i].quantity - n;
                            let contact = {
                                name: products[i].name,
                                quantity: n,
                                price: products[i].price
                            }
                            cart.push(contact);
                        } else if (products[i].quantity == 0) {
                            console.log("dt nay da het ");
                        } else {
                            console.log(" ko du so luong");
                        }
                    }
                }
                if (findIndex != 1) {
                    console.log("ko tim thay  co dt id la " + id);
                }
                console.log(cart);

                break;
            case 3:
                choice = +prompt("ban muon tim kiem theo: 1.ten \n2.id");
                if (choice == 1) {
                    name = +prompt("nhập ten dt muon tim ");
                    findIndex = 0;
                    for (i = 0; i < products.length; i++) {
                        if (name == products[i].name) {
                            findIndex = 1;
                            console.log(products[i]);
                        }
                    }
                    if (findIndex != 1) {
                        console.log("ko tim thay dt co ten la " + name);
                    }
                } else if (choice == 2) {
                    id = +prompt("nhập id dt muon tim ");
                    findIndex = 0;
                    for (i = 0; i < products.length; i++) {
                        if (id == products[i].id) {
                            findIndex = 1;
                            console.log(products[i]);
                        }
                    }
                    if (findIndex != 1) {
                        console.log("ko tim thay dt co id la " + id);
                    }
                } else {
                    console.log("lua chon ko hop le");
                }

                break;
            case 6:
                let choice1 = prompt("1.tang dan\n2.giam dan");
                if (choice1 == 1) {
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
                    console.log(products);
                } else if (choice1 == 2) {
                    let temp1;
                    for (let i = 0; i < products.length; i++) {
                        for (let j = products.length - 1; j > i; j--) {
                            if (products[j] > products[j - 1]) {
                                temp1 = products[j - 1].price;
                                products[j - 1].price = products[j].price;
                                products[j].price = temp1;
                            }
                        }
                    }
                } else {
                    console.log("lua chon ko hop le");
                }
                console.log(products);
                break;
            case 5:
                let money = 0;
                for (i = 0; i < cart.length; i++) {
                    money += cart[i].quantity * cart[i].price;
                }
                console.log("thanh toan thanh cong" + money+"vnd");
                break;
            case 7:
                for (i = 0; i < products.length; i++) {
                    sumPrice = Number(products[i].quantity * products[i].price);
                }
                console.log("tổng số tiền của các điện thoại trong kho la :" + sumPrice+"vnd");
                break;
            case 8:
                let resutl1 = products.filter(item => item.company == "samsung");
                if(resutl1.length>0){
                    console.log("cac dien thoai hang samsung la:"+resutl1);
                }
                let resutl2 = products.filter(item => item.company == "iphone");
                if(resutl2.length>0){
                    console.log("cac dien thoai hang iphone la:"+resutl2);
                }
                let resutl3 = products.filter(item => item.company == "xiaomi");
                if(resutl3.length>0){
                    console.log("cac dien thoai hang xiaomi la:"+resutl3);
                }
                break;
            case 9:
                alert("Chương trình kết thúc!");
                break;

            default:
                alert("Lựa chọn không hợp lệ!");
                break;
        }
    } while (choice !== 9);
}
menu();