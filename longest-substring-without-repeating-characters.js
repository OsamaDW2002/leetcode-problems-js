/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let max = 0;
    let right = 0, left = 0;
    while(left < s.length){
        if(set.has(s[left])){
            set.delete(s[right]);
            right++;
        }else{
            set.add(s[left]);
            max = Math.max(set.size, max);
            left++;
        }
    }
    return max;
};