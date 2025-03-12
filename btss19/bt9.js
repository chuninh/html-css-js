let result = "javascript" + 5; // "javascript5"
// Khi toán tử + được sử dụng với một chuỗi và một kiểu khác, JavaScript chuyển đổi kiểu khác thành chuỗi và thực hiện nối chuỗi.
let result = "javascript" - 1; // NaN (Not-a-Number)
// Khi toán tử - được sử dụng với một chuỗi không thể chuyển đổi thành số, JavaScript cố gắng chuyển đổi chuỗi thành số, nhưng thất bại và trả về NaN.
let result = "3" + 2; // "32"
// Khi một trong hai toán hạng là chuỗi, phép nối chuỗi sẽ xảy ra.
let result = "5" - 4; // 1
// Chuỗi "5" được chuyển đổi thành số 5, và sau đó 5 - 4 = 1.
let result = isNaN("123"); // false
// isNaN() cố gắng chuyển đổi đối số thành số trước. "123" có thể chuyển đổi thành 123, là một số hợp lệ, do đó trả về false.
let result = isNaN("hello"); // true
// "hello" không thể chuyển đổi thành số, do đó isNaN trả về true.
let result = Number.isNaN("123"); // false
// Number.isNaN() kiểm tra xem giá trị có chính xác là NaN mà không cần chuyển đổi kiểu. "123" không phải là NaN, do đó trả về false.
let result = Number.isNaN(NaN); // true
// Điều này kiểm tra xem NaN có phải là NaN không, điều này đúng.