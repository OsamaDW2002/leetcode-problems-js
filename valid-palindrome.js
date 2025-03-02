/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let data = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return ( data === data.split("").reverse().join(""))
};