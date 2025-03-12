let arr = [];
let chon;
let max = arr[0];
do {
    chon = +prompt(
        "==============MENU============\n1.Nhập mảng số nguyên\n2. Hiển thị mảng\n3.Tìm các phần tử chẵn và lẻ\n4.Tính trung bình cộng của mảng\n5. Xóa phần tử tại vị trí chỉ định\n6.Tìm phần tử lớn thứ hai trong mảng \n7. Thoát chương trình\n=================================\n\n Lựa chọn của bạn:"
    );

    switch (chon) {
        case 1:
            let length = +prompt("Nhập độ dài mảng:");
            arr = [];
            if (!isNaN(arr)) {
                for (let i = 0; i < length; i++) {
                    arr[i] = +prompt("Nhập phần tử thứ " + (i + 1) + ":");
                    if (isNaN(arr[i])) {
                        alert("ko phai so nguyen");
                    }
                }
            } else {
                alert("ko hop le");
            }
            break;
        case 2:
            alert(arr);
            break;
        case 3:
            let chan = [];
            let le = [];
            let testLe=false;
            let testChan=false;
            for (i = 0; i < arr.length; i++) {
                if (arr[i] % 2 == 0) {
                    chan.unshift(arr[i]);
                    testChan=true;
                } else {
                    le.unshift(arr[i]);
                    testLe=true;
                }
            }
            if(testChan){
                alert("mang co cac so chan la"+chan);
            }else{
                alert("mang ko co so chan");
            }
            if(testLe){
                alert("mang co cac so le la"+le);
            }else{
                alert("mang ko co so le");
            }
           
            break;
        case 4:
            let sum = 0;
            let tB = 0;
            for (i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            tB = sum / arr.length;
            alert(tB);

            break;
        case 5:
            let search = prompt("moi ban nhap vi tri muon xoa");
            arr.splice(search, 1);
            alert(arr);
            break;
        case 6:
            let temp =0;
            for(i=0;i<arr.length;i++){
                for(j=0;j<arr.length;j++){
                    if(arr[j]>arr[j+1]){
                        temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            let max2 = arr[arr.length-2];
            alert("so lon thu 2 trong mang la " + max2);
            break;

        case 7:
            alert("Chương trình kết thúc!");
            break;


        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
} while (chon !== 7);