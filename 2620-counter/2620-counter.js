/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        let curr = n
        n++
        return curr
    };
};
