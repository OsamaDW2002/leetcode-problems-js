/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set();
    let duplicate = false;
    nums.forEach(el => {
        if(set.has(el)) duplicate = true;
        set.add(el);
    })
    return duplicate;
};