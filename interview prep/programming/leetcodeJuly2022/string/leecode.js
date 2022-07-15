/**
 * @param {string} s
 * @return {boolean}
 */
//imagine charater as a mirror image
 var isPalindrome = function(s) {
   let regex=/[\W_]/g
   let x1=s.replace(regex,'');
   x1=x1.toLowerCase();
   let left=0;
   let right=x1.length-1;
   let flag=true;
   while(left<right){
    if(x1.charAt(left)===x1.charAt(right)){
      left++;
      right--;
    }
    else{
        flag=false;
        break;
    }
   }
    return flag
};

console.log(isPalindrome("race a car"))