class Solution(object):
    def isPalindrome(self, x):
        if x < 0:
            return False

        digits = []
        temp = x

        while temp > 0:
            digits.append(temp % 10)
            temp //= 10

        for i in range(len(digits) // 2):
            if digits[i] != digits[-(i + 1)]:
                return False 

        return True  