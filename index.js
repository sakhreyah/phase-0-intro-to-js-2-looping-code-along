// Code your solutions in this file
function writeCards(arr, evt) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(`Thank you, ${arr[i]}, for the wonderful ${evt} gift!`);
    }
    return newArr;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}