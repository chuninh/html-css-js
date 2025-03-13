function menu(chon) {
    let number1 = Number(prompt("moi ban nhap vao so thu 1"));
    let number2 = Number(prompt("moi ban nhap vao so thu 2"));
    if (!isNaN(number1) && !isNaN(number2) && number2) {

        do {
            chon = +prompt(
                "==============MENU============\n1.cong 2 so\n2. tru 2 so \n3. nhan 2 so\n4.  chia 2 so\n5. Thoát chương trình\n=================================\n\n Lựa chọn của bạn:"
            );

            switch (chon) {
                case 1:
                    let sum = number1 + number2;
                    alert(sum);
                    break;
                case 2:
                    let signal = number1 - number2;
                    alert(signal);
                    break;
                case 3:
                    let core = number1 * number2;
                    alert(core);
                    break;
                case 4:
                    let divide = number1 / number2;
                    alert(divide);
                    break;
                case 5:
                    alert("Chương trình kết thúc!");
                    break;

                default:
                    alert("Lựa chọn không hợp lệ!");
                    break;
            }
        } while (chon !== 5);
    }else{
        console.log("ko hop le");
    }
}
menu();