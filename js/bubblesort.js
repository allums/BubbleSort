var numArray = [9, 12, 2, 6];


function bubblesort(numArray) {

    var isSorted = true;

    while (isSorted === true) {

        isSorted = false;

        for (var i = 0; i < numArray.length - 1; i++) {
            if (numArray[i] > numArray[i + 1]) {
                swapNumbers(numArray, i, i + 1);
                isSorted = true;
            }
        }
    }
    return numArray;
}

function swapNumbers(numArray, num1, num2) {

    var temp = numArray[num1];
    var temp2 = numArray[num2];
    numArray[num1] = temp2;
    numArray[num2] = temp;

}

console.log(bubblesort(numArray));




module.exports = bubblesort;