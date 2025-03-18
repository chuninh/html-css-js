let cart = [];
const count = 0;
function menu(choice, name, price,quantity,category) {
    let products=[
        {
        id:1,
        name: "mèn mén",
        price:20000,
        quantity:20,
        category: "món ăn dân tộc Mông",
        },
        {
        id:2,
        name: "mứt",
        price:80000,
        quantity:21,
        category: "món ăn dân tộc Kinh",
        },
        {
        id:3,
        name:"cơm lam",
        price:40000,
        quantity:15,
        category: "món ăn dân tộc Mông",
        },
        {
        id:4,
        name: "bánh đậu xanh",
        price:60000,
        quantity:30,
        category: "món ăn dân tộc Kinh",
        }
        ]
    do {
        choice = +prompt(
            "==============MENU============\n1.Hiển thị các sản phẩm theo tên danh mục.\n2.Chọn sản phẩm để mua bằng cách nhập id sản phẩm \n3.Sắp xếp các sản phẩm trong cửa hàng theo giá:Tăngdần.Giảm dần.\n4.Tính số tiền thanh toán trong giỏ hàng\n5.Thoát chương trình\n =================================\n\n Lựa chọn của bạn: "
        );

        switch (choice) {
            case 1:
                let resutl = products.filter(item =>item.category =="món ăn dân tộc Kinh");
                console.log(resutl);
                let resutl1 =products.filter(item =>item.category =="món ăn dân tộc Mông");
                console.log(resutl1);
                break;
            case 2:
                id = +prompt("nhập id san pham muon mua ");
                findIndex =0;
                for (i = 0; i < products.length; i++) {
                    if (id == products[i].id) {
                        findIndex = 1;
                        let n = Number(prompt("moi ban nhap so luong muon mua"));
                        if(products[i].quantity >=n){
                            products[i].quantity=products[i].quantity-n;
                            let contact = {
                                name:products[i].name,
                                quantity:n,
                                price:products[i].price
                            }
                            cart.push(contact);
                            
                        }else if(products[i].quantity ==0){
                            console.log("mat hang nay da het ");
                        }else{
                            console.log(" ko du so luong");
                        }
                    }
                }
                if (findIndex !=1) {
                    console.log("ko tim thay san pham co id la " + id);
                }
                console.log(cart);
                
                break;
            case 3:
                let choice1 =prompt("1.tang dan\n2.giam dan");
                if(choice1 ==1){
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
                }else if(choice1 ==2){
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
                }else{
                    console.log("lua chon ko hop le");
                }
                console.log(products);
                
                break;
            case 4:
                let money =0;
                for(i=0;i<products.length;i++){
                    for(j=0;j<cart.length;j++){
                        if(products[i].name == cart[j].name){
                            money += cart[j].quantity * cart[j].price;
                        }
                    }
                }
                console.log("tong so tien phai thanh toan la"+money);
                break;

            case 5:
                alert("Chương trình kết thúc!");
                break;

            default:
                alert("Lựa chọn không hợp lệ!");
                break;
        }
    } while (choice !== 5);
}
menu();