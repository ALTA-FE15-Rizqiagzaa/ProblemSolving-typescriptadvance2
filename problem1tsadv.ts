function pairSum(arr : number[], target: number): number []{
    let left = 0;
    let right = arr.length -1;
    
    while (left < right){
        const sum  = arr[left] + arr[right];

        if (sum === target){
            return [left, right];
        } else if(sum < target){
            left++
        } else {
            right--;
        }
    }

    throw new Error ("Pair with the target sum not found.");
}

console.log(pairSum([1,2,3,4,6], 6))