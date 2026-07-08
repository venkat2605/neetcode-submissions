class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const finalArray = [];
        const wordMap = new Map();

        if(strs.length <=1){
            return [strs];
            
        }

        if(strs.length >= 2){

            for(let word of strs){
                let sortedword = word.split("").sort().join("");
                if(!wordMap.has(sortedword))
                    wordMap.set(sortedword, []);
                wordMap.get(sortedword).push(word);
                }
            }

            for (const value of wordMap.values()) {
            finalArray.push(value);
            }
        
        return finalArray;
        
    }
}
