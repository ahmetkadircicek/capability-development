from collections import deque

class Solution(object):
    def isValid(self, s):
        string = s
        stack = deque()
        array = list(string)
        for i in range(len(array)):  
            stack.append(array[i]) 
            if len(stack) > 1 and ((array[i] == ')' and stack[-2] == '(') or \
                (array[i] == ']' and stack[-2] == '[') or \
                (array[i] == '}' and stack[-2] == '{')): 
                stack.pop()  
                stack.pop()
        return len(stack) == 0 