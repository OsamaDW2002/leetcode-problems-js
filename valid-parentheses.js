/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 !== 0) return false;
    let stack = [];
    let element;
    for(let i = 0; i< s.length ; i++){
        if(s[i] === '(' || s[i] === '[' || s[i] === '{')
            stack.push(s[i]);
        else {
            if(stack.length === 0) return false;
            element = stack.pop();
            if(!((element === '[' && s[i] === ']' )||
                (element === '(' && s[i] === ')') ||
                (element === '{' && s[i] === '}' ))
            )return false;
        }
    }
    return (stack.length === 0) ;


};