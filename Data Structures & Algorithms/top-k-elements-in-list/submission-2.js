class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();
        for(let num of nums){
        count.set(num, (count.get(num) || 0) + 1);
        }

        const buckets = Array.from({length : nums.length + 1}, () => []);

        for (let [num, freq] of count) {
        buckets[freq].push(num);
        }
        const result = [];
        for (let freq = buckets.length - 1; freq >= 0; freq--) {
            for (let num of buckets[freq]) {
                result.push(num);
                if (result.length == k)
                    return result;
            }
        }
    }
}
