let arr = ["", false, 0, undefined, null];
let text = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
        text.push(arr[i]);
    }
}

console.log(text);