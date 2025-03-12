let choice = 0;
let arr = [];
let test = 0;
let vitri = 0;
do {
    choice = Number(prompt("menu    1,Nhập vào mảng   2,Hiển thị mảng   3,Thêm phần tử   4,Sửa phần tử   5,Xóa phần tử   6,Thoát"));
    switch (choice) {
        case 1:
            test = prompt("moi ban nhap phan tu muon them");
            arr.unshift(test);
            break;
        case 2:
            console.log(arr);
            break;
        case 3:
            test = prompt("moi ban nhap phan tu muon them");
            arr.unshift(test);
            break;
        case 4:
            vitri = prompt("moi ban nhap vi tri muon sua");
            test = prompt("moi ban nhap phan tu muon thay vao");
            arr.splice(vitri, 1, test);
            break;
        case 5:
            vitri = prompt("moi ban nhap vi tri muon xoa");
            arr.splice(vitri, 1);
        case 6:
            alert("tam biet");
        default:
            alert("ko hop le");


    }
} while (choice != 6);