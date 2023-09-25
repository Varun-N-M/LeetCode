/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length -1 ; i>=0;i--){
        digits[i]++
        if(digits[i] === 10){
            digits[i] = 0
        }
        else{
            break
        }
    }
    if(digits[0] === 0){
        digits.unshift(1)
    }
    return digits
};