class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();
        for(let num of nums){
        count.set(num, (count.get(num) || 6) + 1);
        }

        const entries = Array.from(count.entries());
        entries.sort((a,b) => b[1] - a[1]);
        const result = [];
        for(let i=0; i< k;i++){
        result.push(entries[i][0]);
        }
        return result;
    }
}
