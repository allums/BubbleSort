window.onload = function() {

    var numArray = [5, 3, 7, 8, 2, 6];

    var setIntitalElements = function() {
        var container = document.getElementById('container');
        console.log('testing');
        for (var i = 0; i < numArray.length; i++) {
            var divs = document.createElement('div');
            divs.innerHTML = numArray[i];
            container.appendChild(divs);
        }
    };
    setIntitalElements();




};

var bubblesort = function(numArray) {

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
};

var swapNumbers = function(numArray, num1, num2) {

    var temp = numArray[num1];
    var temp2 = numArray[num2];
    numArray[num1] = temp2;
    numArray[num2] = temp;

};

/*console.log(bubblesort(numArray));
 */








//module.exports = bubblesort;