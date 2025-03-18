let users = [];
let courses = [];
let count = 0;
let count1 = 0;

function menu() {
    let choice;
    do {
        choice = +prompt(
            "==============MENU============\n1. Quản lý khóa học.\n2. Quản lý người dùng.\n3. Thoát chương trình\n=================================\n\nLựa chọn của bạn: "
        );

        switch (choice) {
            case 1:
                courseManagement();
                break;
            case 2:
                userManagement();
                break;
            case 3:
                alert("Chương trình kết thúc!");
                break;
            default:
                alert("Lựa chọn không hợp lệ!");
                break;
        }
    } while (choice !== 3);
}

function courseManagement() {
    let choice;
    do {
        choice = +prompt("1. Thêm khóa học.\n2. Tìm kiếm khóa học theo tên.\n3. Xóa khóa học.\n4. Thoát");
        switch (choice) {
            case 1:
                let name = prompt("Mời bạn nhập tên khóa học:");
                let instructor = prompt("Mời bạn nhập giáo viên dạy:");
                let course = {
                    id: count,
                    name: name,
                    instructor: instructor,
                    students: []
                };
                courses.push(course);
                count++;
                console.log("Thêm khóa học thành công!");
                break;
            case 2:
                let searchName = prompt("Mời bạn nhập tên khóa học:");
                let foundCourse = courses.find(course => course.name === searchName);
                if (foundCourse) {
                    console.log(foundCourse);
                } else {
                    console.log("Không tìm thấy khóa học có tên:", searchName);
                }
                break;
            case 3:
                deleteCourse();
                break;
            case 4:
                break;
            default:
                alert("Lựa chọn không hợp lệ!");
                break;
        }
    } while (choice !== 4);
}

function deleteCourse() {
    let id = +prompt("Nhập ID khóa học muốn xóa:");
    let index = courses.findIndex(course => course.id === id);
    if (index !== -1) {
        let confirmDelete = confirm("Bạn có muốn xóa khóa học này không?");
        if (confirmDelete) {
            let courseName = courses[index].name;
            courses.splice(index, 1);
            
            // Xóa khóa học khỏi danh sách của tất cả người dùng
            users.forEach(user => {
                let courseIndex = user.registeredCourses.indexOf(courseName);
                if (courseIndex !== -1) {
                    user.registeredCourses.splice(courseIndex, 1);
                }
            });
            
            console.log("Xóa khóa học và cập nhật danh sách người dùng thành công!");
        }
    } else {
        console.log("Không tìm thấy khóa học có ID:", id);
    }
}

function userManagement() {
    let choice;
    do {
        choice = +prompt("1. Thêm người dùng mới.\n2. Đăng ký khóa học.\n3. Hủy đăng ký khóa học.\n4. Hiển thị danh sách khóa học của một người dùng.\n5. Thoát");
        switch (choice) {
            case 1:
                let userName = prompt("Mời bạn nhập tên người dùng:");
                let user = {
                    id: count1,
                    name: userName,
                    registeredCourses: []
                };
                users.push(user);
                count1++;
                console.log("Thêm người dùng thành công!");
                break;
            case 2:
                let courseName = prompt("Mời bạn nhập tên khóa học muốn đăng ký:");
                let course = courses.find(c => c.name === courseName);
                if (course) {
                    let userName = prompt("Mời bạn nhập tên người dùng muốn đăng ký:");
                    let user = users.find(u => u.name === userName);
                    if (user) {
                        user.registeredCourses.push(courseName);
                        course.students.push(userName);
                        console.log("Đăng ký khóa học thành công!");
                    } else {
                        console.log("Không tìm thấy người dùng:", userName);
                    }
                } else {
                    console.log("Không tìm thấy khóa học:", courseName);
                }
                break;
            case 3:
                let courseToCancel = prompt("Mời bạn nhập tên khóa học muốn hủy đăng ký:");
                let userToCancel = prompt("Mời bạn nhập tên người dùng muốn hủy đăng ký:");
                let userCancel = users.find(u => u.name === userToCancel);
                if (userCancel) {
                    let index = userCancel.registeredCourses.indexOf(courseToCancel);
                    if (index !== -1) {
                        userCancel.registeredCourses.splice(index, 1);
                        let courseCancel = courses.find(c => c.name === courseToCancel);
                        if (courseCancel) {
                            let studentIndex = courseCancel.students.indexOf(userToCancel);
                            if (studentIndex !== -1) {
                                courseCancel.students.splice(studentIndex, 1);
                            }
                        }
                        console.log("Hủy đăng ký khóa học thành công!");
                    } else {
                        console.log("Người dùng chưa đăng ký khóa học này.");
                    }
                } else {
                    console.log("Không tìm thấy người dùng:", userToCancel);
                }
                break;
            case 4:
                let userToShow = prompt("Mời bạn nhập tên người dùng:");
                let foundUser = users.find(u => u.name === userToShow);
                if (foundUser) {
                    console.log("Danh sách khóa học của", foundUser.name, ":", foundUser.registeredCourses);
                } else {
                    console.log("Không tìm thấy người dùng:", userToShow);
                }
                break;
            case 5:
                break;
            default:
                alert("Lựa chọn không hợp lệ!");
                break;
        }
    } while (choice !== 5);
}

menu();
