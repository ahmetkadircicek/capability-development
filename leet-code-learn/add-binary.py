class Solution(object):
    def addBinary(self, a, b):
        carry = 0
        result = ''
        a = a[::-1]
        b = b[::-1]
        max_length = max(len(a), len(b))
        for i in range(max_length):
            bit_a = int(a[i]) if i < len(a) else 0
            bit_b = int(b[i]) if i < len(b) else 0
            total = bit_a + bit_b + carry
            result_bit = total % 2
            carry = total // 2
            result = str(result_bit) + result
        if carry:
            result = '1' + result
        return result