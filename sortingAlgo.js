function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                swapped = true;
            }
        }
 
        if (!swapped) {
            break;
        }
    }
}

function printArray(arr) {
    console.log("Sorted Array: ", arr);
}

let inputArray = prompt("Enter an array of numbers separated by commas (e.g., 5, 2, 9, 1, 5, 6)");

let arr = inputArray.split(',').map(num => parseInt(num.trim())); 

bubbleSort(arr);

printArray(arr);