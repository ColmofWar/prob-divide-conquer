function findFloor(arr,target) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    if (arr[leftIdx] > target){
        return -1;
    }
    while(leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx)/2);
        let middleVal = arr[middleIdx];
        if(middleVal < target ){
            leftIdx = middleIdx + 1;
        } else if (middleVal > target){
            rightIdx = middleIdx - 1;
        } else {
            return middleIdx;
        }
    }
    while(arr[rightIdx] > target){
        rightIdx --;
    }
    return arr[rightIdx]
}

//module.exports = findFloor