merge([1, 10, 50], [2, 14, 99, 100])

function merge(arr1, arr2) {
    var newArr = [];
    var i = 0;
    var j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            newArr.push(arr1[i]);
            i++;
        } else {
            newArr.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length) {
        newArr.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        newArr.push(arr2[j])
        j++;
    }
    return newArr;
}