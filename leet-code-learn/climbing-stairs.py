class Solution(object):
    def climbStairs(self, n):
        previousStep = 0
        currentStep = 1
        ways = 0

        for i in range(n):
            ways = previousStep + currentStep
            previousStep = currentStep
            currentStep = ways
        return ways