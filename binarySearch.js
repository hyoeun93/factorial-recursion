//binary search only works on sorted arrays!
//Pick left and right 

function binarySearch (arr, value) {
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor((left + right) / 2);
    while(arr[mid] !== value && left <= right) {
        if(value < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
        mid = Math.floor((left + right) / 2)
    }
    if(arr[mid] === value) {
        return mid;
    }
    return -1;
}

binarySearch([2,5,6,9,13,15,28], 15)