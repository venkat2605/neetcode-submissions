class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        const leftProd = new Array(n).fill(1);
        const rightProd = new Array(n).fill(1);
        const finalProd = new Array(n).fill(1);

        for(let i=1;i<n;i++){
            leftProd[i] = leftProd[i-1] * nums[i-1];
        }
        for(let i= n-2; i>=0; i--){
            rightProd[i] = rightProd[i+1] * nums[i+1];
        }

        for(let i=0;i < nums.length; i++){
            finalProd[i] = leftProd[i] * rightProd[i];
        }

        return finalProd;
    }
}
