const users = [];

do {
    choice = +prompt("\n1. Đăng ký người dùng mới. \n2. Đăng nhập người dùng. \n3. Thoát");

    switch (choice) {
        case 1:
            register();
            break;
        case 2:
            login();
            break;
        case 3:
            alert("Chương trình kết thúc");
            break;
        default:
            alert("Lựa chọn không hợp lệ");
            break;
    }
} while (choice !== 3);

function isValidEmail(email) {
    return email.includes('@') && (email.endsWith('.com') || email.endsWith('.vn'));
}

function isValidPassword(password) {
    let hasUpperCase = false;
    let hasSpecialChar = false;
    let specialChars = "!@#$%^&*";

    if (password.length < 6) return false;

    for (let char of password) {
        if (char >= 'A' && char <= 'Z') hasUpperCase = true;
        if (specialChars.includes(char)) hasSpecialChar = true;
    }

    return hasUpperCase && hasSpecialChar;
}

function isEmailTaken(email) {
    return users.some(user => user.email === email);
}

function registerUser(name, email, password) {
    if (!isValidEmail(email)) {
        return "Email không hợp lệ!";
    }
    if (!isValidPassword(password)) {
        return "Mật khẩu phải có ít nhất 6 ký tự, bao gồm ký tự đặc biệt và chữ in hoa!";
    }
    if (isEmailTaken(email)) {
        return "Email đã tồn tại!";
    }

    users.push({ name, email, password });
    return "Đăng ký thành công!";
}

function register() {
    let name = prompt("Nhập tên của bạn:");
    let email = prompt("Nhập email:");
    let password = prompt("Nhập mật khẩu:");

    let message = registerUser(name, email, password);
    alert(message);
}

function login() {
    let email = prompt("Nhập email:");
    let password = prompt("Nhập mật khẩu:");

    let user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert(`Đăng nhập thành công! Xin chào, ${user.name}`);
    } else {
        alert("Email hoặc mật khẩu không đúng!");
    }
}