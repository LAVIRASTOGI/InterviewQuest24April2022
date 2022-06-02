// // Given a string s, find the length of the longest substring without repeating characters.



// // Example 1:

// // Input: s = "abcabcbb"
// // Output: 3
// // Explanation: The answer is "abc", with the length of 3.
// // Example 2:

// // Input: s = "bbbbb"
// // Output: 1
// // Explanation: The answer is "b", with the length of 1.
// // Example 3:

// // Input: s = "pwwkew"
// // Output: 3
// // Explanation: The answer is "wke", with the length of 3.
// // Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


// var lengthOfLongestSubstring = function (s) {

//      if(s==''){return 0}
//      let newr = [];
//      let newwordArr = [];
//      let arrString = s.split('');
//      let index = 0;
//      let max=1;
//      for (let i = 0; i < arrString.length; i++) {
//           for (let j = index; j < arrString.length; j++) {
//                if (newr.includes(arrString[j])) {
//                      newwordArr.push(newr.slice(0, newr.length).join(''))
//                     newr = [];
//                     index++;
//                     break;
//                }
//                newr.push(arrString[j]);
//           }
//      }
//      newwordArr.forEach(ele=>{
//           if(max<ele.length){
//                max=ele.length
//           }
//      })
//      return max

// }
// console.log(lengthOfLongestSubstring('pwwkew'))
// console.log(lengthOfLongestSubstring('dvdfr'))


//good alternative  chekout sliding window algo its based on that
var lengthOfLongestSubstring = function (s) {
     let end = 0;
     let start=0;
     let maxlength = 0;
     let obj=[]
  while(start<s.length){
         let characterStart=s.charAt(start);
        if(!obj.includes(characterStart)){
             obj.push(characterStart);
             maxlength=Math.max(obj.length,maxlength);
             start++;
        }  else{
             obj.shift();
             end++;
        }
    }
return maxlength
}
console.log(lengthOfLongestSubstring('dvdfr'))