class Solution(object):
    def find_substrings(self, s):
        return [s[i:j+1] for i in range(len(s)) for j in range(i, len(s))]

    def lengthOfLongestSubstring(self, s):
        substrings = self.find_substrings(s)
        substrings.sort(key=lambda x: len(x), reverse=True)  
        stringMap = set()
        stringMap = {}
        
        for sub in substrings:
            if sub not in stringMap:
                if len(set(sub)) == len(sub):  
                    return len(sub)
        return 0