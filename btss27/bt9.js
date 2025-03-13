function sortEvenNumbers(arr) {
    if (Array.isArray(arr)) {
        let evenNumbers = arr.filter(num => num % 2 === 0);
        let temp = 0;
        for (i = 0; i < evenNumbers.length; i++) {
            for (j = 0; j < evenNumbers.length; j++) {
                if (evenNumbers[j] > evenNumbers[j + 1]) {
                    temp = evenNumbers[j];
                    evenNumbers[j] = evenNumbers[j + 1];
                    evenNumbers[j + 1] = temp;
                }
            }
        }
        let evenIndex =0
        for(i=0;i<arr.length;i++){
            if(arr[i] % 2 ==0){
                arr[i] =evenNumbers[evenIndex];
                evenIndex ++;
            }
        }
        console.log(arr);
    } else {
        console.log("ko hop le");
    }

}
sortEvenNumbers([5, 8, 6, 3, 4, 2, 7]);
sortEvenNumbers([5, 9, 6, 4, 1, 8, 3]);
sortEvenNumbers("abc");
