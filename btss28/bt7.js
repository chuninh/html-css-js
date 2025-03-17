let students = [

    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },

    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature: 5 } },

    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } }

];
function list(arr, sum, sumTB) {
    for (i = 0; i < students.length; i++) {
        sum = students[i].scores.math + students[i].scores.english + students[i].scores.literature
        sumTB = sum / 3;
        if (sumTB >= 8) {
            console.log(sumTB);
        }
    }

}
list();