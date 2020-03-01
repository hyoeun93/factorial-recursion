//Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened

function flatten(arr) {
    var newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            newArr = newArr.concat(flatten(arr[i]))
        } else {
            newArr.push(arr[i])
        }

    }
    return newwArr;
}