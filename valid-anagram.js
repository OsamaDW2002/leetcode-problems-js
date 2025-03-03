/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/*
* old answer
* */
var isAnagram = function(s, t) {
    return (s.split("").sort().join("") === t.split("").sort().join(""))
};

/*
* enhanced answer
* */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var countingSort = (array)=>{
    let map = new Array(26).fill(0);
    let base = 'a'.charCodeAt();
    for(arr of array){
        map[arr.charCodeAt() - base]++;
    }
    let orderdArray= "";
    map.forEach((el, key) => orderdArray+=String.fromCharCode(key + base).repeat(el));

    return orderdArray;
}
var isAnagram = function(s, t) {
    return (countingSort(s) === countingSort(t))
};