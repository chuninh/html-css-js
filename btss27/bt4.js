function menu(chon,arr) {
   
        do {
            chon = +prompt(
                "==============MENU============\n1.Nhập danh sách số nguyên\n2. Tính trung bình các số \n3. Tìm số chẵn lớn nhất\n4. Tìm số lẻ nhỏ nhất\n5. Thoát chương trình\n=================================\n\n Lựa chọn của bạn:"
            );

            switch (chon) {
                case 1:
                    let length = +prompt("so luong so nguyen muon nhap la:");
                    arr = [];
                    for (let i = 0; i < length; i++) {
                        arr[i] = Number(prompt("Nhập so nguyen thứ " + (i + 1) + ":"));
                    }
                    break;
                case 2:
                    let sum = 0;
                    for (i=0;i<arr.length;i++){
                        sum += arr[i];
                    }
                    let averageTotal = sum /arr.length;
                    console.log("tong trung binh cac so la :"+averageTotal);
                    break;
                case 3:
                    let even = arr.filter((num => num % 2 ==0));
                    let max = even[0];
                    for(i=0;i<even.length;i++){
                        if(even[i] > max){
                            max = even[i];
                        }
                    }
                    if(even.length >0){
                        console.log("so chan lon nhat la"+max);
                    }else{
                        console.log("ko co so chan");
                    }
                    break;
                case 4:
                    let odd = arr.filter((num => num % 2 !=0));
                    let max1 = odd[0];
                    for(i=0;i<odd.length;i++){
                        if(odd[i] > max1){
                            max1 = odd[i];
                        }
                    }
                    if(odd.length >0){
                        console.log("so le lon nhat la"+max1);
                    }else{
                        console.log("ko co so le");
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