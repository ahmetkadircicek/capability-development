var moveZeroes = function(nums) {
    zeroCount = nums.filter(el => el === 0).length
    const totalLenght = nums.length
    for (let index = 0; index < zeroCount; index++) {
        for (let index = 0; index < totalLenght - 1; index++) {
            console.log(`Iteration ${index}: Current=${nums[index]}, Next=${nums[index + 1]}, Array=[${nums}]`);
            if (nums[index] === 0) {
                nums[index] = nums[index + 1]
                nums[index + 1] = 0
                console.log(nums)
            }
        }
    }
}