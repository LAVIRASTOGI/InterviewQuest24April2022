//fof --fof (input and reverse should be same)

let inputstr='fof'

let pallindrome =(input)=>{
    let newstr=input.split('').reverse().join('');
    return newstr===input;
}

console.log(pallindrome('fof')) //true
console.log(pallindrome('fofdd'))//false


//vowels count check

let str='i am lavi vowel count check'

let newarr=str.split('').filter((ele)=>/[aeiou]/.test(ele)).length
console.log(newarr)