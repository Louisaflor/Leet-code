# """
# edge cases:
# check if the length of s % 2 is 0, if not return false 

# create a hash to place the open brackets 

# check if the first char of s is a close bracket, if yes return false 

# iterate over s 
   
# """


# class Solution:
#     def isValid(self, s: str) -> bool:
#         hash = {
#             '(' : ')',
#             '[' : ']',
#             '{' : '}'
#         }
        
#         if (len(s) % 2 != 0 ): 
#             return False 
        
#         if s[0] not in hash:
#             return False 
        
#         stack = []
        
#         for paran in s:
#             if paran in hash: # we know that its an open bracket
#                 stack.append(paran)
#             elif paran == hash[stack[len(stack) - 1]]: # we know that this is a close bracket
#                 stack.pop()
#             else:
#                 return False
        
#         if len(stack) > 0:
#             return False
#         else:
#             return True
 
class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """

        # The stack to keep track of opening brackets.
        stack = []

        # Hash map for keeping track of mappings. This keeps the code very clean.
        # Also makes adding more types of parenthesis easier
        mapping = {")": "(", "}": "{", "]": "["}

        # For every bracket in the expression.
        for char in s:

            # If the character is an closing bracket
            if char in mapping:

                # Pop the topmost element from the stack, if it is non empty
                # Otherwise assign a dummy value of '#' to the top_element variable
                top_element = stack.pop() if stack else '#'

                # The mapping for the opening bracket in our hash and the top
                # element of the stack don't match, return False
                if mapping[char] != top_element:
                    return False
            else:
                # We have an opening bracket, simply push it onto the stack.
                stack.append(char)

        # In the end, if the stack is empty, then we have a valid expression.
        # The stack won't be empty for cases like ((()
        return not stack