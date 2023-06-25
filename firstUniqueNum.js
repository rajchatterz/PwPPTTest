function firstUniqueNumber(s){
    for(let i=0;i<s.length;i++){
        let store = s.charAt(i);
        if(s.indexOf(store)===s.lastIndexOf(store)){
            return i;
        }
    }
    return -1;
}
// let s = "leetcode"
let s = "loveleetcode"
let result = firstUniqueNumber(s)
console.log("result: "+result)