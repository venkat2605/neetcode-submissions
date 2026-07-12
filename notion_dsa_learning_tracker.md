# DSA Learning Tracker - JavaScript



Use the CSV files for Notion databases, or paste the tables below into a Notion page.



## Current Progress

| Area | Current status | Evidence / completed work | Next action |
| --- | --- | --- | --- |
| Language choice | Fixed to JavaScript | Map, Set, Array methods, loops, sort comparator, prefix/suffix arrays | Keep JavaScript for DSA; do not switch language now. |
| Learning method | Interview-style coaching | You asked to share approach first before seeing solution. | For every new problem: question -> your approach -> hints -> final solution. |
| Arrays & Hashing | In progress / strong foundation started | Two Sum, Contains Duplicate, Valid Anagram, Group Anagrams, Top K Frequent | Revise these before adding many new problems. |
| Prefix/Suffix | Started | Product of Array Except Self | Redo once; then learn O(1) extra-space version. |
| Consistency | Improving | You are writing notes and submitting attempts. | Use 35-45 min sessions and spaced review dates. |
| Next pattern | Two Pointers | Not started yet | Start Valid Palindrome after one revision block. |



## Problem Tracker

| Status | Problem | Input | Output | Example | Brute force | Why brute force is slow | Pattern I think applies | Optimized idea | Time complexity | Space complexity | Mistakes | Retry date | JS concepts used |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Solved - review scheduled | Two Sum | nums array, target integer | Indices of two numbers whose sum equals target | nums = [2,7,11,15], target = 9 => [0,1] | Check every pair with nested loops. | For each element, compare with many other elements; this repeats work and becomes O(n^2). | Hash Map lookup / complement | For each number, compute complement = target - nums[i]. If complement exists in Map, return its stored index and i. Otherwise store nums[i] -> i. | O(n) | O(n) | Check complement before storing current number. Use Map.set/get/has, not put. | 2026-07-13 | Map, has(), get(), set(), for loop |
| Solved - review scheduled | Contains Duplicate | nums array | true if any value appears at least twice, otherwise false | nums = [1,2,3,1] => true | Compare every pair of numbers using nested loops. | Every element can be compared against many later elements, so it grows as O(n^2). | Set / duplicate detection | Iterate through nums. If Set already has num, return true. Otherwise add it. Return false after the loop. | O(n) | O(n) | Set stores unique values. Do not overcomplicate with frequency count when only duplicate existence is needed. | 2026-07-13 | Set, add(), has(), for...of |
| Solved - review scheduled | Valid Anagram | two strings s and t | true if t is an anagram of s, otherwise false | s = "anagram", t = "nagaram" => true | For each char in one string, search/remove it from the other; or sort both strings and compare. | Repeated search/removal can become O(n^2). Sorting is simpler but costs O(n log n). | Frequency Map / counting | Check lengths first. Count characters in s. Then subtract using t. If a needed char is missing, return false. | O(n) | O(n), or O(1) when limited to 26 lowercase English letters | Order does not matter, counts matter. Check length first. Use (map.get(char) \|\| 0) + 1. | 2026-07-14 | Map, get(), set(), has(), delete(), for...of, string iteration |
| Solved - review scheduled | Group Anagrams | array of strings strs | array of groups, where each group contains anagrams | strs = ["eat","tea","tan","ate","nat","bat"] => [["eat","tea","ate"],["tan","nat"],["bat"]] | Compare each word with existing groups using an anagram check. | Many words are compared repeatedly; each comparison may require sorting/counting. | Hash Map grouping / signature key | Create a key for each word. Simple key: sorted word. Group words with the same key in a Map. More optimized key: 26-letter count signature. | Sorting key: O(n * k log k). Count key: O(n * k). | O(n * k) | Map uses set(), not put(). push() returns length, not the array. Single-letter words work with the same sorted-key logic. | 2026-07-15 | Map, Array.from(map.values()), split(), sort(), join(), push() |
| Solved - review scheduled | Top K Frequent Elements | nums array and integer k | the k most frequent elements in any order | nums = [1,1,1,2,2,3], k = 2 => [1,2] | Count frequencies, then repeatedly scan to find the next most frequent item; or sort unique entries by frequency. | Repeated scans or sorting can add extra work. Sorting unique entries costs O(m log m). | Frequency Map + sort / bucket sort | Count frequencies. Put each number into buckets[freq]. Scan buckets from highest frequency to lowest until k elements are collected. | Sort version: O(n + m log m). Bucket version: O(n). | Sort version: O(m). Bucket version: O(n). | k means number of elements to return, not minimum frequency. sort((a,b)=>b[1]-a[1]) sorts by frequency descending. | 2026-07-16 | Map, Array.from(count), entries, sort comparator, Array.from({length}, () => []), destructuring |
| Solved - review scheduled | Product of Array Except Self | nums array | answer array where answer[i] is product of all nums except nums[i] | nums = [1,2,3,4] => [24,12,8,6] | For each index i, multiply all nums[j] where j != i. | For every index, scan the whole array again. This repeats products and becomes O(n^2). | Prefix/Suffix products | answer[i] = product before i * product after i. Precompute left and right products, then multiply them. Later optimize by using output array and running suffix. | O(n) | O(n) first version; O(1) extra excluding output in optimized version | leftProduct[i] uses nums[i - 1]. rightProduct[i] uses nums[i + 1]. Do not use division. | 2026-07-14 | new Array(n).fill(1), forward loop, reverse loop, indexing |



## JavaScript Reference

| Concept / Function | What it does | Example | Common mistake / note | Used in |
| --- | --- | --- | --- | --- |
| Map | Stores key-value pairs. | const map = new Map(); | Use when you need lookup, count, or grouping. | Two Sum, Valid Anagram, Group Anagrams, Top K Frequent |
| map.set(key, value) | Adds or updates a key-value pair. | map.set("a", 1); | JavaScript uses set(), not put(). | All Map problems |
| map.get(key) | Reads the value for a key. | map.get("a"); // 1 | If key is missing, result is undefined. | Frequency counts, lookup |
| map.has(key) | Checks if a key exists. | map.has("a"); // true | Use this before get() when existence matters. | Two Sum, Valid Anagram |
| map.delete(key) | Removes a key from the Map. | map.delete("a"); | Optional in anagram counting when count becomes 0. | Valid Anagram |
| map.entries() | Returns an iterator of [key, value] pairs. | Array.from(count.entries()); | Array.from(count) gives the same pair format for Map. | Top K Frequent |
| map.keys() | Returns Map keys. | Array.from(count.keys()); | Keys only, not frequencies. | Top K Frequent |
| map.values() | Returns Map values. | Array.from(wordMap.values()); | Useful when final answer is only grouped arrays. | Group Anagrams |
| Array.from(iterable) | Converts an iterable into a real array. | Array.from(count); | Needed before sort() when data is an iterator. | Top K Frequent, Group Anagrams |
| Array.from({ length: n }, fn) | Creates an array of n items using a function. | Array.from({ length: 4 }, () => []); | Creates separate arrays; safer than fill([]). | Top K Frequent bucket version |
| new Array(n).fill(value) | Creates an array of length n filled with value. | new Array(4).fill(1); // [1,1,1,1] | Do not use fill([]) for buckets because all indexes share one array. | Product of Array Except Self |
| Set | Stores unique values. | const seen = new Set(); | Use when you only need to know if value appeared before. | Contains Duplicate |
| set.add(value) | Adds a value to Set. | seen.add(num); | Adding same value again has no effect. | Contains Duplicate |
| set.has(value) | Checks if Set contains value. | seen.has(num); | Great for duplicate checks. | Contains Duplicate |
| for...of | Loops over values of an iterable. | for (let num of nums) { } | Use let/const; avoid undeclared variables like for(word of strs). | Most problems |
| split("").sort().join("") | Sorts characters of a string. | "tea".split("").sort().join(""); // "aet" | sort() works on arrays, so split first. | Valid Anagram, Group Anagrams |
| Array.sort(compareFn) | Sorts an array in place using compare function. | entries.sort((a,b) => b[1] - a[1]); | b[1]-a[1] means larger frequency first. | Top K Frequent |
| arr.push(value) | Adds value to array and returns new length. | arr.push("eat"); | Do not assign push() result back as the group array. | Group Anagrams |
| charCodeAt(0) | Gets character code for a character. | "c".charCodeAt(0) - "a".charCodeAt(0); // 2 | Useful for 26-letter count arrays. | Group Anagrams optimized |
| Destructuring in loops | Reads pair values directly. | for (let [num, freq] of count) { } | Works because Map iterates as [key, value] pairs. | Top K Frequent |



## Pattern Recognition

| Problem clue | Pattern to think of | Why it fits | Problems you solved | Target complexity |
| --- | --- | --- | --- | --- |
| Need fast lookup or complement | Hash Map lookup | Map gives average O(1) lookup for previously seen values. | Two Sum | O(n) time, O(n) space |
| Need to detect if something appeared before | Set | Set stores unique values and answers has(value) quickly. | Contains Duplicate | O(n) time, O(n) space |
| Need to count occurrences | Frequency Map | Map stores item -> count. | Valid Anagram, Top K Frequent | O(n) time usually, O(n) space |
| Need to group similar items | Map with signature key | Same signature means same group. | Group Anagrams | O(n*k log k) sorting key or O(n*k) count key |
| Need top/frequent k items | Frequency + sort / bucket / heap | First count, then rank by frequency. | Top K Frequent | O(n + m log m) sort or O(n) bucket |
| Need everything except current index | Prefix/Suffix | Break answer into left contribution and right contribution. | Product of Array Except Self | O(n) time |
| Sorted array + pair search | Two Pointers | Move left/right based on comparison instead of checking all pairs. | Future: Two Sum II | O(n) time, O(1) space |
| Subarray or substring with condition | Sliding Window | Maintain a moving window rather than restart each time. | Future: Longest Substring Without Repeating Characters | Often O(n) time |
| Recent item, matching brackets, undo-like behavior | Stack | Last-in-first-out behavior matches these problems. | Future: Valid Parentheses | O(n) time, O(n) space |
| Search in sorted data | Binary Search | Eliminate half of search space each step. | Future: Binary Search | O(log n) time |



## Review Plan

| Date | Focus | Task | Done? |
| --- | --- | --- | --- |
| 2026-07-13 | Two Sum + Contains Duplicate | Redo both without looking. Explain why Map vs Set. |  |
| 2026-07-14 | Valid Anagram + Product Except Self | Write brute force, pattern clue, and optimized idea in English. |  |
| 2026-07-15 | Group Anagrams | Redo sorted-key solution. Explain push() and Array.from(map.values()). |  |
| 2026-07-16 | Top K Frequent | Redo sort solution and bucket dry run. Explain k clearly. |  |
| 2026-07-17 | Product Except Self optimization | Try O(1) extra-space idea using output array and right running product. |  |
| 2026-07-18 | Mixed revision | Pick any 3 solved problems and explain them aloud. |  |
| 2026-07-19 | Start Two Pointers | New problem: Valid Palindrome. Share approach before solution. |  |