let jobList = [];
let count = 0;
let test = [];
let test1 = [];
function menu(chon, name, description, time, isAvailable, isFinite) {

    do {
        chon = +prompt(
            "==============MENU============\n1.Thêm đối tượng Contact vào danh sách liên hệ.\n2.Hiển thị danh sách danh bạ. \n3.Tìm kiếm thông tin Contact theo số điện thoại\n4.Cập nhật thông tin Contact(name, email, phone) theo id\n5.Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id\n6. Thoát chương trình\n=================================\n\n Lựa chọn của bạn:"
        );

        switch (chon) {
            case 1:
                name = prompt("moi ban nhap ten cong viec");
                description = prompt("moi ban nhap mo ta cong viec");
                time = prompt("moi ban nhap thoi gian lam viec");
                do {
                    isAvailable = prompt("moi ban nhap trang thai cong viec (chua hoan thanh/hoan thanh)");
                } while (isAvailable != "chua hoan thanh" && isAvailable != "hoan thanh");
                let contact = {
                    id: count,
                    name: name,
                    description: description,
                    time: time,
                    isAvailable: isAvailable
                }
                count++;
                jobList.push(contact);

                break;
            case 2:
                for (i = 0; i < jobList.length; i++) {
                    console.log(jobList[i].name);
                }
                break;
            case 4:
                let text = 0;
                let text1 = 0;
                for (i = 0; i < jobList.length; i++) {
                    if (jobList[i].isAvailable == "hoan thanh") {
                        test.push(jobList[i].name);
                        text++;
                    } else {
                        test1.push(jobList[i].name);
                        text1++;
                    }
                }
                if (text != 0) {
                    console.log("cac cong viec da hoan thanh la" + test);
                } else {
                    console.log("chua co cong viec nao hoan thanh");
                }
                if (test1 != 0) {
                    console.log("cac cong viec chua hoan thanh la" + test1);
                } else {
                    console.log("da hoan thanh tat ca cong viec ");
                }
                break;
            case 3:
                id = +prompt("nhập id cong viec muốn cap nhap");
                findIndex = jobList.findIndex(item => item.id == id);
                if (findIndex != -1) {
                    jobList[id].name = prompt("moi ban nhap ten cong viec");
                    jobList[id].description = prompt("moi ban nhap mo ta cong viec ");
                    jobList[id].time = prompt("moi ban nhap thoi gian hoan thanh cong viec");
                    do {
                        jobList[id].isAvailable = prompt("moi ban nhap trang thai cong viec (chua hoan thanh/hoan thanh)");
                    } while (jobList[id].isAvailable != "chua hoan thanh" && jobList[id].isAvailable != "hoan thanh");
                } else {
                    console.log("không tìm thấy cong viec có id là: ", id);
                }
                break;
            case 5:
                let temp;
                for (let i = 0; i < jobList.length - 1; i++) {
                    for (let j = 0; j < jobList.length - i - 1; j++) {
                      if (jobList[j].isAvailable === "hoan thanh" && jobList[j + 1].isAvailable === "chua hoan thanh") {
                        temp = jobList[j];
                        jobList[j] = jobList[j + 1];
                        jobList[j + 1] = temp;
                      }
                    }
                  }
                  console.log(jobList);
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