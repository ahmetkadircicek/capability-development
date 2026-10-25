var findFinalValue = function(nums, original) {
    for(let index = 0; index < nums.length; index++) {
        if (nums[index] === original) {
            original *= 2;
            index = -1;
        }
    }
    return original
};