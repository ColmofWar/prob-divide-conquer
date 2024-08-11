function countZeroes(arr) {
    target = 0
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    if (arr[leftIdx] === target){
        return arr.length;
    }
    while(arr[rightIdx] == target){
        let middleIdx = Math.floor((leftIdx + rightIdx)/2);
        let middleVal = arr[middleIdx];
        if(middleVal != target ){
            leftIdx = middleIdx + 1;
        } else if (middleVal === target){
            rightIdx = middleIdx - 1;
        }
    }
    return (arr.length - (rightIdx + 1));
}