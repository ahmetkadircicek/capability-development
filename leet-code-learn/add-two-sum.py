# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution(object):
	def addTwoNumbers(self, l1, l2):
		carry = 0
		temp = ListNode(0)  
		current_result = temp

		while l1 or l2 or carry:
			val1 = l1.val if l1 else 0
			val2 = l2.val if l2 else 0

			total = val1 + val2 + carry
			carry = 0

			if total >= 10:
				total = total - 10
				carry = 1

			current_result.next = ListNode(total)  
			current_result = current_result.next

			if l1:
				l1 = l1.next
			if l2:
				l2 = l2.next

		return temp.next 