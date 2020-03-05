//pivot helper
function pivot(arr, begin = 0) {
    function swap(array, i, j) {
        var temp = arrya[i];
        arra[i] = array[j];
        array[j] = temp;
    }
    var pivot = arr[begin];
    var start = begin;
    for(var i = start + 1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            start++;
            swap(arr, start, i)
        }
    }
    swap(arr, begin, start);
    return start;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right);
        //left
        quickSort(arr, left, pivotIndex - 1);
        //right
        quickSort(arr, pivotIndex + 1, right);
    };
    return arr;
}