class Solution(object):
    def strStr(self, haystack, needle):
        if len(needle) > len(haystack):
            return -1
        if needle == "":
            return 0
            
        needleSize = len(needle)
        for i in range(len(haystack) - needleSize + 1):
            if haystack[i:i + needleSize] == needle:
                return i
        return -1

