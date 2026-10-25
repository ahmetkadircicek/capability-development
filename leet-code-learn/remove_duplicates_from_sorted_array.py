class Solution(object):
    def removeDuplicates(self, nums):
        if not nums:
            return 0
        i = 0
        hashMap = {}
        for n in nums:
            if n not in hashMap:
                hashMap[n] = hashMap.get(n, 0) + 1
                nums[i] = n
                i += 1  
        return i