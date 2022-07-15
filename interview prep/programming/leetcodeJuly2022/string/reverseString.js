var reverseString = function(s) {
let left=0;
let right=s.length-1;
while(left<right){
   
    let t= s[left];
    s[left]=s[right];
    s[right]=t;
    left++;
    right--;
}
return s;
};

console.log(reverseString(['h','e','l','l','o']))