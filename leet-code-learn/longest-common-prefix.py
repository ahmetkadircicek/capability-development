class Solution(object):
    def longestCommonPrefix(self, strs):
        if not strs:
            return ""
        prefix = ""
        i = 0
        while True:
            for j in range(len(strs)):
                if i >= len(strs[j]):
                    return prefix 

                if strs[j][i] != strs[0][i]:
                    return prefix 

            prefix += strs[0][i]
            i += 1
        return prefix