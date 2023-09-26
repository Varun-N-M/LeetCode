/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
//     let clean = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    
//     let reverse = clean.split(" ").reverse().join("")
//     return reverse === clean
    const cleanStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Reverse the cleaned string
  const reversedStr = cleanStr.split('').reverse().join('');
  
  // Check if the cleaned string is the same as its reverse
  return cleanStr === reversedStr;
};