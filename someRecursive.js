//write a recursive function called someRecursive which accepts an array and a callback. 
//The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false

function someRecursive(arr, callback) {
    if(arr.length < 1) return false; 
    if(callback(arr[0])) return true;
    return someRecursive(arr.slice(1), callback);
}