class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const nmap = new Map();

        for(let char of s){

        nmap.set(char, (nmap.get(char) || 0) + 1);

        }

        for(let char of t){

        if(!nmap.has(char))

        return false;

        nmap.set(char, nmap.get(char) - 1);

        if(nmap.get(char) === 0)

        nmap.delete(char);
        }
        return true;
        
    }
}
