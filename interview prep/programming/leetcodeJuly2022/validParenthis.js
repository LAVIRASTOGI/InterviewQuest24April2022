// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

//use stack for it
var isValid = function(s) {
    
    let stackCheck=[];
    let ParenthisObj={
        "(":")",
        "{":"}",
        "[":"]"
    }
    for(let i=0;i<s.length;i++){
        if(ParenthisObj[s[i]]){
          stackCheck.push(s[i])
        }else{
            let popedVal=stackCheck.pop();
            if(ParenthisObj[popedVal]!==s[i]){
                return false;
            }
        }
    }
    return (stackCheck.length===0)
};

console.log(isValid('()[]{}'))