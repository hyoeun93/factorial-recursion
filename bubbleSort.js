/*
BubbleSort Pseudocode
- Start looping from with a variable called i the end of the array towards the beginning
- Start an inner loop with a variable called j from the beginning until i - 1
- If arr[j] is greater than arr[j+1], swap those two values!
- Return the sorted array
*/

function bubbleSort(arr) {
    var noSwaps;
    for(let i = arr.length; i > 0 ; i--) {
        noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] < arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwamps) break;
    }
    return arr;
}

bubbleSort([37, 45, 29, 8])