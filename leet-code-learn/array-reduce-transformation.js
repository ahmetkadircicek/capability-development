var reduce = function(nums, fn, init) {
    let val = 0;
    if (nums.length === 0) {
        return init
    }
    for(let index = 0; index < nums.length; index++) {
        if(index === 0)
            val = fn(init, nums[index])
        else
            val = fn(val, nums[index])
    }
    return val
};