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