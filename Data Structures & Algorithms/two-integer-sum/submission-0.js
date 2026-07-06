class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map();
        for(let i=0; i<nums.length; i++) 
        { 
            let difference = target - nums[i];
            if(seen.has(difference)) 
            return [seen.get(difference), i]; 
            seen.set(nums[i],i);
    }
}
}
