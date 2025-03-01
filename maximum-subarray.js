/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let current = 0;
    let max = nums[0];

    for(num of nums){
        if(current < 0)
            current = 0;
        current += num;
        max = Math.max(max, current);
    }
    return max;
};

