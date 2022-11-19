"""
store the highest sum in each acc

iterate over the accounts 
    iterate again over each acc
    add the numbers 
    
compare the stored highest sum and curr sum 

return the highest sum 

"""

class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        wealthiest = 0;
        
        for account in accounts:
            sum = 0;
            for money in account:
                sum+=money
                
                
            wealthiest = max(sum,wealthiest)
            
        return wealthiest;
            
        
        