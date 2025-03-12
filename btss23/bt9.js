let arr = [];
let chon;

do {
    chon = +prompt(
        "==============MENU============\n1.Nhập số phần tử cần nhập và giá trị các phần tử\n2.In ra giá trị các phần tử đang quản lý\n3. In ra giá trị các phần tử chẵn và tính tổng\n4. In ra giá trị lớn nhất và nhỏ nhất trong mảng\n5. In ra các phần tử là số nguyên tố trong mảng và tính tổng\n6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó\n7. Thêm một phần từ vào vị trí chỉ định\n8. Thoát\n\n=================================\n\n Lựa chọn của bạn:"
    );

    switch (chon) {
        case 1:
            let length = +prompt("Nhập độ dài mảng:");
            arr = [];
            for (let i = 0; i < length; i++) {
                arr[i] = +prompt("Nhập phần tử thứ " + (i + 1) + ":");
            }
            break;
        case 2:
            alert( arr );
            break;
        case 3:
            let chan=0;
            for (let i = 0; i < arr.length; i++) {
                if(arr[i]%2==0){
                    alert(arr[i]);
                    chan=chan+arr[i];
                }
            }
            alert("Tổng các số chẵn là: "+chan)
            break;
        case 4:
           let max=arr[0];
           let min=arr[0];
           for (let i = 0; i < arr.length; i++) {
              if(max < arr[i]){
                max =arr[i];
              }
            }
           for (let i = 0; i < arr.length; i++) {
             if (min>arr[i]) {
                min=arr[i];
             }
            }
            alert("giá trị lớn nhất là: "+max+"\n Giá trị nhỏ nhất là: "+min);
            break;
        case 5:
            let NgTo=[];
            let j=0;
            let sum=0;
            for (let i = 0; i < arr.length; i++) {
            if(arr[i]==2||arr[i]==3||arr[i]==5){
                NgTo.push(arr[i]);
            }else{
                if(arr[i]%2 !=0 && arr[i]%3 !=0 && arr[i]%5 !=0&&arr[i]>1){
                    NgTo.push(arr[i]);
                }
            }
         }
         for (let  i = 0;  i < NgTo.length; i++) {
           sum += NgTo[i];
            
         }
         alert("Các số nguyên tố là: "+NgTo+" \n Tổng các số nguyên tố là: "+sum);
            break;
        case 6:
            let n = +prompt("Mời bạn nhập số muốn thống kê"); 
            let count = 0; // Biến đếm
            for (let i = 0; i < arr.length; i++) {
              if (arr[i] === n) {
            count++;
            }
          }
            alert("Số "+n+" xuất hiện "+count+" lần trong mảng.");
            break;
        case 7:
            let viTriThem = +prompt("Nhập vị trí muốn thêm:");
            let giaTriThem = prompt("Nhập giá trị muốn thêm:");
            if (viTriThem >= 0 && viTriThem <= arr.length) {
                arr.splice(viTriThem, 0, giaTriThem);
            } else {
                alert("Vị trí không hợp lệ!");
            }
            break;
        case 8:
            alert("Chương trình kết thúc!");
            break;
        

        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
} while (chon !== 8);