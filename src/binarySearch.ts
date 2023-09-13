function binarySearch (x: number[], tgt: number):number {
    // array x is assumed to be ordered.
    let left:number = 0;
    let right:number = x.length -1;

    while (left < right) {
        let mid: number = Math.floor((left + right) / 2);

        if (x[mid] === tgt) return mid; // we happened to find tgt @ midpoint
        else if (x[mid] < tgt) {
            left = mid + 1; // tgt is right half, change left bound to mid +1
        }
        else {
            right = mid - 1; // tgt is left half, change right bound to mid -1
        }
    }
    return -1;
}

console.log('result: ', binarySearch([1,2,2,5,7,8,11,13,25], 11));