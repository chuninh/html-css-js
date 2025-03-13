function menu(chon,r,long,wide,s,c) {
    
        do {
            chon = +prompt(
                "==============MENU============\n1.Tính diện tích hình tròn\n2. Tính chu vi hình tròn \n3.Tính diện tích hình chữ nhật\n4. Tính chu vi hình chữ nhật\n5. Thoát chương trình\n=================================\n\n Lựa chọn của bạn:"
            );

            switch (chon) {
                case 1:
                    r = prompt("moi ban nhap ban kinh hinh tron");
                    s = r * r * Math.PI;
                    alert(s);
                    break;
                case 2:
                    r = prompt("moi ban nhap ban kinh hinh tron");
                    c = r * 2 * Math.PI;
                    alert(c);
                    break;
                case 3:
                    long = prompt("moi ban nhap chieu dai cua hinh chu nhat");
                    wide = prompt("moi ban nhap chieu rong cua hinh chu nhat ");
                    s = long * wide;
                    alert(s);
                    break;
                case 4:
                    long = Number(prompt("moi ban nhap chieu dai cua hinh chu nhat"));
                    wide = Number(prompt("moi ban nhap chieu rong cua hinh chu nhat "));
                    c = (long + wide) * 2;
                    alert(c);
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