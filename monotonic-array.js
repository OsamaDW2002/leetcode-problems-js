/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    for(let i = 0; i< nums.length; i++){
        if(i + 1 === nums.length){
            return true;
        }
        if (nums[i] < nums[i+ 1])
            break;
    }

    for(let i = 0; i< nums.length; i++){
        if(i + 1 === nums.length){
            return true;
        }
        if (nums[i] > nums[i+ 1])
            break;
    }
    return false;
};