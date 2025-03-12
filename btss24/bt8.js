let inputString = "";

let choice;
do {
    choice = prompt("Chọn chức năng:\n1. Nhập chuỗi\n2. Hiển thị chuỗi\n3. Tìm từ con trùng\n4. Từ dài nhất, ngắn nhất\n5. Ký tự xuất hiện nhiều nhất\n6. Chuyển sang snake_case\n7. Thoát");

    switch (choice) {
        case "1":
            inputString = prompt("Nhập chuỗi ký tự:");
            break;
        case "2":
            alert("Chuỗi hiện tại: " + inputString);
            break;
        case "3":
            let substrCount = {};
            for (let len = 1; len <= inputString.length; len++) {
                for (let i = 0; i <= inputString.length - len; i++) {
                    let substr = inputString.substring(i, i + len);
                    substrCount[substr] = (substrCount[substr] || 0) + 1;
                }
            }
            let result = Object.entries(substrCount).filter(([key, value]) => value > 1);
            console.log("Các từ con trùng lặp và số lần xuất hiện:", result);
            break;
        case "4":
            let words = inputString.split(" ").filter(word => word.length > 0);
            let minWord = words.reduce((a, b) => a.length <= b.length ? a : b, words[0]);
            let maxWord = words.reduce((a, b) => a.length >= b.length ? a : b, words[0]);
            console.log("Từ ngắn nhất:", minWord);
            console.log("Từ dài nhất:", maxWord);
            break;
        case "5":
            let charCount = {};
            for (let char of inputString) {
                charCount[char] = (charCount[char] || 0) + 1;
            }
            let maxFreq = Math.max(Object.values(charCount));
            let mostFreqChars = Object.entries(charCount).filter(([char, freq]) => freq === maxFreq);
            console.log("Ký tự xuất hiện nhiều nhất:", mostFreqChars);
            break;
        case "6":
            let snakeCaseString = inputString.toLowerCase().replace(/\s+/g, "_");
            console.log("Chuỗi dạng snake_case:", snakeCaseString);
            break;
        case "7":
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng thử lại.");
    }
} while (choice !== "7");