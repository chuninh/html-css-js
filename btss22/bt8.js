let arr=[1,2,5,5,5,9,2,9,2,9];
let text = {};
for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (text[num] === undefined) {
        text[num] = 1;
    } else {
        text[num]++;
    }
}
let max = text[arr[0]];
let Number =0;
for (i = 0; i <10; i++) {
    if (text[arr[i]] > max) {
        max = text[arr[i]];
        number =arr[i];
    }
}
minElement=number;
for (i = 0; i <10; i++){
    if(text[arr[i]] == max && number > arr[i]){
        minElement=arr[i];
    }
}
console.log(minElement);
