let arr=[1,2,5,5,5,9,2,9,2,9];
let text = new Array(10);
let num =0;
for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (text[num] === undefined) {
        text[num] = 1;
    } else {
        arr.splice(i,1);
        i--;
    }
}
console.log(arr);