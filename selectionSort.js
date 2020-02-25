//find smallest value first and move it to the first position of the array

function selectionSort(arr) {
    for(var i = 0; i < arr.length; i++) {
        var lowest = i;
        for(var j = i + 1; j < arr.length; j++) {
            console.log(i,j);
            if(arr[lowest] > arr[j]) {
                lowest = j;
            }
        }
        if(i !== lowest) {
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

selectionSort([34,22,10,19,17])