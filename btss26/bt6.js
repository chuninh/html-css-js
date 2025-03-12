function convertDateFormat(dateArray) {
    if (!Array.isArray(dateArray)) return "Dữ liệu không hợp lệ";
    if (dateArray.length === 0) return "Mảng không có phần tử nào";

    let result = dateArray.map(date => {
        if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
            let [year, month, day] = date.split("-");
            return `${day}/${month}/${year}`;
        }
        return null;
    });

    return result.includes(null) ? "Dữ liệu không hợp lệ" : result;
}

alert(convertDateFormat(["2025-03-10", "2024-12-25", "2023-07-01"]));
alert(convertDateFormat([]));
alert(convertDateFormat("abc"));
alert(convertDateFormat(["2025-03-10", "invalid-date"]));