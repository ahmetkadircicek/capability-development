# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution(object):
    def mergeTwoLists(self, list1, list2):
        if not list1:
            return list2
        if not list2:
            return list1
        
        temp = ListNode(0)
        curr = temp
        
        while list1 or list2:
            if not list1:
                curr.next = list2
                break
            if not list2:
                curr.next = list1
                break
            val1 = list1.val if list1 else 0
            val2 = list2.val if list2 else 0
            if val1 >= val2:
                curr.next = list2
                list2 = list2.next
            else:
                curr.next = list1
                list1 = list1.next
            curr = curr.next
            
        return temp.next
