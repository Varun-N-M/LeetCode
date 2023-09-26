/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    // const newMap = [];
    // for(let i = 0; i<nums.length; i++){
    //     const currentNum = nums[i]
    //     const required = target - currentNum
    //     if(required in newMap){
    //         return [newMap[required],i]
    //     }
    //     newMap[currentNum] = i
    // }return []
    
    for(let i = 0;i<nums.length;i++){
        for(let j = i+1;j<nums.length;j++){
            if(nums[i] + nums[j] === target){
                return  [i,j]
            }
        }
    }
}